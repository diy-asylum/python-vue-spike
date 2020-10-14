module Main exposing (Model, Msg(..), main, subscriptions, update, view)

import Array exposing (Array)
import Browser
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Bytes exposing (Bytes)
import Css exposing (..)
import DataTypes exposing (..)
import Dict exposing (Dict)
import Element exposing (Device)
import File.Download as Download
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, type_)
import Html.Styled.Events exposing (..)
import Html.Styled.Lazy exposing (lazy)
import Http
import I18n exposing (i18nHelper, languages)
import Json.Decode as D
import List.Extra
import Ports
import Url



-- MAIN


main : Program Flags Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MODEL


type Page
    = Home
    | Contact
    | I589
    | Error
    | AboutUs


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    , page : Page
    , title : String
    , device : Device
    , state : FormState
    , focusedSection : SectionTitle
    , focusedEntry : FormEntryElement
    , visitedElements : List FormEntryElement
    , language : String
    , languageDict : Dict String (Dict String String)
    , debug : Bool
    }


i18n : Model -> String -> String
i18n model key =
    i18nHelper model.languageDict key model.language


type alias FormState =
    { eligibility : EligibilityData
    , personal : PersonalData
    }


defaultFormState : FormState
defaultFormState =
    { eligibility = defaultEligibilityData
    , personal = defaultPersonalData
    }


type alias EligibilityData =
    { currentlyInUS : Maybe Bool
    , lessThanOneYear : Maybe Bool
    }


type alias PersonalData =
    { firstName : String
    , lastName : String
    , middleName : String
    , aliases : List String
    , currentAliasInput : String
    , homeAddress : MailingAddress
    , homeMailingSame : Maybe Bool
    , mailingAddress : MailingAddress
    , gender : Maybe Gender
    , maritalStatus : Maybe MaritalStatus
    }


defaultEligibilityData : EligibilityData
defaultEligibilityData =
    { currentlyInUS = Nothing
    , lessThanOneYear = Nothing
    }


defaultPersonalData : PersonalData
defaultPersonalData =
    { firstName = ""
    , lastName = ""
    , middleName = ""
    , aliases = []
    , currentAliasInput = ""
    , homeAddress = defaultMailingAddress
    , homeMailingSame = Nothing
    , mailingAddress = defaultMailingAddress
    , gender = Nothing
    , maritalStatus = Nothing
    }


type FormEntryElement
    = CurrentlyInUS
    | InUSLessThanOneYear
    | NotEligible
    | FirstName
    | MiddleName
    | LastName
    | Aliases
    | HomeAddress
    | HomeMailingSame
    | EnterMailingAddress
    | EnterGender
    | EnterMaritalStatus


type SectionTitle
    = Eligibility
    | PersonalInfo


pathMatch : String -> Page
pathMatch path =
    let
        page =
            case path of
                "/" ->
                    Home

                "/src/Main.elm" ->
                    Home

                "/i589" ->
                    I589

                "/contact" ->
                    Contact

                "/about" ->
                    AboutUs

                _ ->
                    Error
    in
    page


type alias Flags =
    { width : Int
    , height : Int
    , language : String
    , languageDict : D.Value
    }


init : Flags -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        page =
            pathMatch url.path

        languageDict =
            case D.decodeValue (D.dict (D.dict D.string)) flags.languageDict of
                Ok x ->
                    x

                Err _ ->
                    Dict.empty

        lang =
            if List.member flags.language (languages languageDict) then
                flags.language

            else
                "en"
    in
    ( Model key url page (pageToTitle page) (Element.classifyDevice flags) defaultFormState Eligibility CurrentlyInUS [ CurrentlyInUS ] lang languageDict True, Cmd.none )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | DeviceClassified Device
    | StartDownload
    | FinishDownload (Result Http.Error Bytes)
    | Next
    | Back
    | SetEligibility EligibilityData
    | SetPersonalData PersonalData
    | SetLanguage String
    | SetFormEntryElement FormEntryElement


pageToTitle : Page -> String
pageToTitle page =
    let
        title =
            case page of
                Home ->
                    "DIY Asylum | US Asylum Application"

                I589 ->
                    "DIY Asylum | I-589 Form Completion App"

                Error ->
                    "DIY Aslyum | 404 Error"

                AboutUs ->
                    "DIY Asylum | About Us"

                Contact ->
                    "DIY Asylum | Contact Us"
    in
    title


pageToDescription : Page -> String
pageToDescription page =
    let
        description =
            case page of
                Home ->
                    "DIY Asylum helps US asylum seekers complete their I-589 asylum application quickly and easily."

                I589 ->
                    "Complete your I-589 form using DIY Asylum's online app."

                Error ->
                    "We couldn't find the content you are looking for. Please check out the DIY Aslyum homepage for more information."

                AboutUs ->
                    "Learn about the team at DIY Asylum."

                Contact ->
                    "DIY Asylum helps you to complete you I-589 asylum application. Please contact us to learn more."
    in
    description


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            let
                page =
                    pathMatch url.path
            in
            ( { model | url = url, page = page, title = pageToTitle page }
            , Ports.description (pageToDescription page)
            )

        DeviceClassified device ->
            ( { model | device = device }, Cmd.none )

        StartDownload ->
            ( model, downloadFilledForm userDataMock )

        FinishDownload result ->
            case result of
                Ok bytes ->
                    ( model, savePdf bytes )

                Err _ ->
                    ( model, Cmd.none )

        SetLanguage l ->
            ( { model | language = l }, Cmd.none )

        Next ->
            let
                next =
                    getNext model.focusedEntry model

                nextTitle =
                    getSectionFromElement next

                visitedElements =
                    if not (List.member next model.visitedElements) then
                        next :: model.visitedElements

                    else
                        model.visitedElements
            in
            ( { model | focusedEntry = next, focusedSection = nextTitle, visitedElements = visitedElements }, Cmd.none )

        Back ->
            let
                next =
                    getBack model.focusedEntry model

                nextTitle =
                    getSectionFromElement next

                visitedElements =
                    if not (List.member next model.visitedElements) then
                        next :: model.visitedElements

                    else
                        model.visitedElements
            in
            ( { model | focusedEntry = next, focusedSection = nextTitle, visitedElements = visitedElements }, Cmd.none )

        SetFormEntryElement element ->
            let
                visitedElements =
                    if not (List.member element model.visitedElements) then
                        element :: model.visitedElements

                    else
                        model.visitedElements
            in
            ( { model | focusedEntry = element, focusedSection = getSectionFromElement element, visitedElements = visitedElements }, Cmd.none )

        SetEligibility e ->
            let
                s =
                    model.state

                newS =
                    { s | eligibility = e }
            in
            ( { model | state = newS }, Cmd.none )

        SetPersonalData d ->
            let
                s =
                    model.state

                newS =
                    { s | personal = d }
            in
            ( { model | state = newS }, Cmd.none )


getNext : FormEntryElement -> Model -> FormEntryElement
getNext entry model =
    case entry of
        CurrentlyInUS ->
            if not model.debug then
                case model.state.eligibility.currentlyInUS of
                    Just False ->
                        NotEligible

                    Just True ->
                        InUSLessThanOneYear

                    Nothing ->
                        CurrentlyInUS

            else
                InUSLessThanOneYear

        InUSLessThanOneYear ->
            if not model.debug then
                case model.state.eligibility.lessThanOneYear of
                    Just True ->
                        FirstName

                    Just False ->
                        NotEligible

                    Nothing ->
                        InUSLessThanOneYear

            else
                FirstName

        NotEligible ->
            NotEligible

        FirstName ->
            LastName

        LastName ->
            MiddleName

        MiddleName ->
            Aliases

        Aliases ->
            HomeAddress

        HomeAddress ->
            HomeMailingSame

        HomeMailingSame ->
            case model.state.personal.homeMailingSame of
                Just True ->
                    EnterGender

                _ ->
                    EnterMailingAddress

        EnterMailingAddress ->
            EnterGender

        EnterGender ->
            EnterMaritalStatus

        EnterMaritalStatus ->
            EnterMaritalStatus


getBack : FormEntryElement -> Model -> FormEntryElement
getBack entry model =
    case entry of
        CurrentlyInUS ->
            CurrentlyInUS

        InUSLessThanOneYear ->
            CurrentlyInUS

        NotEligible ->
            case model.state.eligibility.currentlyInUS of
                Just True ->
                    InUSLessThanOneYear

                _ ->
                    CurrentlyInUS

        FirstName ->
            InUSLessThanOneYear

        LastName ->
            FirstName

        MiddleName ->
            LastName

        Aliases ->
            MiddleName

        HomeAddress ->
            Aliases

        HomeMailingSame ->
            HomeAddress

        EnterMailingAddress ->
            HomeMailingSame

        EnterGender ->
            case model.state.personal.homeMailingSame of
                Just True ->
                    HomeMailingSame

                _ ->
                    EnterMailingAddress

        EnterMaritalStatus ->
            EnterGender


getSectionFromElement : FormEntryElement -> SectionTitle
getSectionFromElement element =
    case element of
        CurrentlyInUS ->
            Eligibility

        InUSLessThanOneYear ->
            Eligibility

        NotEligible ->
            Eligibility

        FirstName ->
            PersonalInfo

        MiddleName ->
            PersonalInfo

        LastName ->
            PersonalInfo

        Aliases ->
            PersonalInfo

        HomeAddress ->
            PersonalInfo

        HomeMailingSame ->
            PersonalInfo

        EnterMailingAddress ->
            PersonalInfo

        EnterGender ->
            PersonalInfo

        EnterMaritalStatus ->
            PersonalInfo


validate : Model -> Bool
validate model =
    if not model.debug then
        case model.focusedEntry of
            CurrentlyInUS ->
                let
                    elig =
                        model.state.eligibility
                in
                case elig.currentlyInUS of
                    Nothing ->
                        False

                    _ ->
                        True

            InUSLessThanOneYear ->
                let
                    elig =
                        model.state.eligibility
                in
                case elig.lessThanOneYear of
                    Nothing ->
                        False

                    _ ->
                        True

            NotEligible ->
                False

            FirstName ->
                model.state.personal.firstName /= ""

            MiddleName ->
                True

            LastName ->
                model.state.personal.lastName /= ""

            Aliases ->
                True

            HomeAddress ->
                let
                    address =
                        model.state.personal.homeAddress

                    validStreetNumber =
                        address.streetNumber /= ""

                    validStreetName =
                        address.streetName /= ""

                    validCity =
                        address.city /= ""

                    validState =
                        address.state /= ""

                    validZip =
                        address.zipCode /= ""

                    validAreaCode =
                        address.areaCode /= ""

                    validPhone =
                        address.phoneNumber /= ""
                in
                validStreetNumber && validStreetName && validCity && validState && validZip && validAreaCode && validPhone

            EnterMailingAddress ->
                let
                    address =
                        model.state.personal.mailingAddress

                    validStreetNumber =
                        address.streetNumber /= ""

                    validStreetName =
                        address.streetName /= ""

                    validCity =
                        address.city /= ""

                    validState =
                        address.state /= ""

                    validZip =
                        address.zipCode /= ""

                    validAreaCode =
                        address.areaCode /= ""

                    validPhone =
                        address.phoneNumber /= ""
                in
                validStreetNumber && validStreetName && validCity && validState && validZip && validAreaCode && validPhone

            HomeMailingSame ->
                model.state.personal.homeMailingSame /= Nothing

            EnterGender ->
                model.state.personal.gender /= Nothing

            EnterMaritalStatus ->
                model.state.personal.maritalStatus /= Nothing

    else
        True



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    onResize <|
        \width height ->
            DeviceClassified (Element.classifyDevice { width = width, height = height })



-- VIEW


view : Model -> Browser.Document Msg
view model =
    let
        html =
            webView model
    in
    { title = model.title, body = List.map toUnstyled html }



-- WEB VIEW


webView : Model -> List (Html Msg)
webView model =
    let
        content =
            case model.page of
                Home ->
                    [ lazy webNav model, footer ]

                I589 ->
                    [ lazy webNav model, i589View model, footer ]

                AboutUs ->
                    [ lazy webNav model, footer ]

                Contact ->
                    [ lazy webNav model, footer ]

                Error ->
                    [ lazy webNav model, footer ]
    in
    content


i589View : Model -> Html Msg
i589View model =
    div [ css [ gridStyles, standardStyles, backgroundColor background, minHeight (vh 95), color dark ] ]
        [ lazy progressView model
        , lazy formEntryView model
        , lazy helpView model
        ]


formEntryView : Model -> Html Msg
formEntryView model =
    render model.focusedEntry model


setMaybe : Bool -> x -> Maybe x
setMaybe isAlreadyChecked x =
    if isAlreadyChecked then
        Nothing

    else
        Just x


backButton : Model -> Html Msg
backButton model =
    button [ css [ backgroundColor background, color dark, defaultMargin ], onClick Back ] [ text (i18n model "back") ]


nextButton : Model -> Html Msg
nextButton model =
    if validate model then
        button [ css [ backgroundColor background, color dark, defaultMargin ], onClick Next ] [ text (i18n model "next") ]

    else
        button [ css [ backgroundColor dark, color background, defaultMargin ] ] [ text (i18n model "next") ]


centerWrap : List (Html Msg) -> Html Msg
centerWrap list =
    div [ css [ property "grid-column" "2", displayFlex, flexDirection column, alignItems center, justifyContent center ] ]
        [ div
            [ css [ displayFlex, flexDirection column, backgroundColor accent, justifyContent center, alignItems center, padding (px 10) ] ]
            list
        ]


render : FormEntryElement -> Model -> Html Msg
render e model =
    case e of
        CurrentlyInUS ->
            let
                elig =
                    model.state.eligibility

                yesChecked =
                    Maybe.withDefault False elig.currentlyInUS

                noChecked =
                    case elig.currentlyInUS of
                        Just b ->
                            not b

                        Nothing ->
                            False
            in
            centerWrap
                [ div [ css [ defaultMargin ] ] [ text (i18n model "currently-in-us") ]
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetEligibility { elig | currentlyInUS = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetEligibility { elig | currentlyInUS = setMaybe noChecked False }
                    ]
                , nextButton model
                ]

        InUSLessThanOneYear ->
            let
                elig =
                    model.state.eligibility

                yesChecked =
                    Maybe.withDefault False elig.lessThanOneYear

                noChecked =
                    case elig.lessThanOneYear of
                        Just b ->
                            not b

                        Nothing ->
                            False
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "less-than-one-year") ]
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetEligibility { elig | lessThanOneYear = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetEligibility { elig | lessThanOneYear = setMaybe noChecked False }
                    ]
                , nextButton model
                ]

        NotEligible ->
            centerWrap [ text (i18n model "not-eligible-explanation"), backButton model ]

        FirstName ->
            let
                d =
                    model.state.personal

                firstName =
                    d.firstName
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "first-name-entry") ]
                , input [ css [ defaultMargin ], type_ "input", Html.Styled.Attributes.value firstName, onInput (\r -> SetPersonalData { d | firstName = r }) ] []
                , nextButton model
                ]

        MiddleName ->
            let
                d =
                    model.state.personal

                middleName =
                    d.middleName
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "middle-name-entry") ]
                , input [ css [ defaultMargin ], type_ "input", Html.Styled.Attributes.value middleName, onInput (\r -> SetPersonalData { d | middleName = r }) ] []
                , nextButton model
                ]

        LastName ->
            let
                d =
                    model.state.personal

                lastName =
                    d.lastName
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "last-name-entry") ]
                , input [ css [ defaultMargin ], type_ "input", Html.Styled.Attributes.value lastName, onInput (\r -> SetPersonalData { d | lastName = r }) ] []
                , nextButton model
                ]

        Aliases ->
            let
                d =
                    model.state.personal

                currentInput =
                    d.currentAliasInput

                newAliases =
                    if currentInput /= "" then
                        currentInput :: d.aliases

                    else
                        d.aliases

                numAliases =
                    List.length d.aliases

                gridRows =
                    String.repeat (numAliases + 1) "1fr "

                aliasList =
                    case numAliases of
                        0 ->
                            div [] []

                        _ ->
                            div
                                [ css
                                    [ property "display" "grid"
                                    , property "grid-template-columns" "1fr 1fr"
                                    , property "grid-template-rows" gridRows
                                    , alignItems center
                                    , justifyContent center
                                    ]
                                ]
                                (h4 [ css [ property "grid-column" "1/3", property "grid-row" "1", textAlign center ] ] [ text (i18n model "aliases") ]
                                    :: List.append
                                        (List.indexedMap aliasElement d.aliases)
                                        (List.indexedMap (aliasRemoveButton model) d.aliases)
                                )
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin, textAlign center ] ] [ text (i18n model "aliases-entry") ]
                , form [ onSubmit (SetPersonalData { d | currentAliasInput = "", aliases = newAliases }) ]
                    [ div [ css [ displayFlex, flexDirection row, alignItems center, justifyContent center ] ]
                        [ input
                            [ css [ defaultMargin ], type_ "text", onInput (\r -> SetPersonalData { d | currentAliasInput = r }), Html.Styled.Attributes.value currentInput ]
                            []
                        , button [ type_ "submit" ] [ text (i18n model "add") ]
                        ]
                    ]
                , aliasList
                , nextButton model
                ]

        HomeAddress ->
            let
                d =
                    model.state.personal

                h =
                    d.homeAddress
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin, textAlign center ] ] [ text (i18n model "home-address-entry") ]
                , div [ css [ property "display" "grid", property "grid-template-columns" "1fr 4fr 1fr", alignItems center, justifyContent center, alignSelf flexStart ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "street-number")
                        , Html.Styled.Attributes.value h.streetNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | streetNumber = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "street-name")
                        , Html.Styled.Attributes.value h.streetName
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | streetName = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "3/4" ]
                        , Html.Styled.Attributes.placeholder (i18n model "apt-number")
                        , Html.Styled.Attributes.value h.apartmentNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | apartmentNumber = r } })
                        ]
                        []
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "2fr 2fr 1fr", alignItems center, justifyContent center ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "city")
                        , Html.Styled.Attributes.value h.city
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | city = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "state")
                        , Html.Styled.Attributes.value h.state
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | state = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "3/4" ]
                        , Html.Styled.Attributes.placeholder (i18n model "zip-code")
                        , Html.Styled.Attributes.value h.zipCode
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | zipCode = r } })
                        ]
                        []
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 2fr", alignItems left, justifyContent left ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "area-code")
                        , Html.Styled.Attributes.value h.areaCode
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | areaCode = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "phone-number")
                        , Html.Styled.Attributes.value h.phoneNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | homeAddress = { h | phoneNumber = r } })
                        ]
                        []
                    ]
                , nextButton model
                ]

        HomeMailingSame ->
            let
                d =
                    model.state.personal

                same =
                    d.homeMailingSame

                yesChecked =
                    Maybe.withDefault False same

                noChecked =
                    case same of
                        Just b ->
                            not b

                        Nothing ->
                            False
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "home-mailing-same-text") ]
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetPersonalData { d | homeMailingSame = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetPersonalData { d | homeMailingSame = setMaybe noChecked False }
                    ]
                , nextButton model
                ]

        EnterMailingAddress ->
            let
                d =
                    model.state.personal

                h =
                    d.mailingAddress
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin, textAlign center ] ] [ text (i18n model "mailing-address-entry") ]
                , input
                    [ css [ defaultMargin, alignSelf flexStart, minWidth (pc 20) ]
                    , Html.Styled.Attributes.placeholder (i18n model "in-care-of")
                    , Html.Styled.Attributes.value h.inCareOf
                    , type_ "text"
                    , onInput (\r -> SetPersonalData { d | mailingAddress = { h | inCareOf = r } })
                    ]
                    []
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 4fr 1fr", alignItems center, justifyContent center ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "street-number")
                        , Html.Styled.Attributes.value h.streetNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | streetNumber = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "street-name")
                        , Html.Styled.Attributes.value h.streetName
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | streetName = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "3/4" ]
                        , Html.Styled.Attributes.placeholder (i18n model "apt-number")
                        , Html.Styled.Attributes.value h.apartmentNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | apartmentNumber = r } })
                        ]
                        []
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "2fr 2fr 1fr", alignItems center, justifyContent center ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "city")
                        , Html.Styled.Attributes.value h.city
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | city = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "state")
                        , Html.Styled.Attributes.value h.state
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | state = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "3/4" ]
                        , Html.Styled.Attributes.placeholder (i18n model "zip-code")
                        , Html.Styled.Attributes.value h.zipCode
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | zipCode = r } })
                        ]
                        []
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 2fr", alignItems left, justifyContent left, alignSelf flexStart ] ]
                    [ input
                        [ css [ defaultMargin, property "grid-column" "1/2" ]
                        , Html.Styled.Attributes.placeholder (i18n model "area-code")
                        , Html.Styled.Attributes.value h.areaCode
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | areaCode = r } })
                        ]
                        []
                    , input
                        [ css [ defaultMargin, property "grid-column" "2/3" ]
                        , Html.Styled.Attributes.placeholder (i18n model "phone-number")
                        , Html.Styled.Attributes.value h.phoneNumber
                        , type_ "text"
                        , onInput (\r -> SetPersonalData { d | mailingAddress = { h | phoneNumber = r } })
                        ]
                        []
                    ]
                , nextButton model
                ]

        EnterGender ->
            let
                d =
                    model.state.personal

                gender =
                    d.gender

                maleChecked =
                    case gender of
                        Just MALE ->
                            True

                        _ ->
                            False

                femaleChecked =
                    case gender of
                        Just FEMALE ->
                            True

                        _ ->
                            False
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "enter-gender") ]
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model maleChecked "male" SetPersonalData { d | gender = setMaybe maleChecked MALE }
                    , checkBox model femaleChecked "female" SetPersonalData { d | gender = setMaybe femaleChecked FEMALE }
                    ]
                , nextButton model
                ]

        EnterMaritalStatus ->
            let
                d =
                    model.state.personal

                status =
                    d.maritalStatus

                singleChecked =
                    case status of
                        Just SINGLE ->
                            True

                        _ ->
                            False

                marriedChecked =
                    case status of
                        Just MARRIED ->
                            True

                        _ ->
                            False

                divorcedChecked =
                    case status of
                        Just DIVORCED ->
                            True

                        _ ->
                            False

                widowedChecked =
                    case status of
                        Just WIDOWED ->
                            True

                        _ ->
                            False
            in
            centerWrap
                [ backButton model
                , div [ css [ defaultMargin ] ] [ text (i18n model "enter-marital-status") ]
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model singleChecked "single" SetPersonalData { d | maritalStatus = setMaybe singleChecked SINGLE }
                    , checkBox model marriedChecked "married" SetPersonalData { d | maritalStatus = setMaybe marriedChecked MARRIED }
                    , checkBox model divorcedChecked "divorced" SetPersonalData { d | maritalStatus = setMaybe divorcedChecked DIVORCED }
                    , checkBox model widowedChecked "widowed" SetPersonalData { d | maritalStatus = setMaybe widowedChecked WIDOWED }
                    ]
                , nextButton model
                ]



-- Personal Data views


checkBox : Model -> Bool -> String -> (x -> Msg) -> x -> Html Msg
checkBox model isChecked labelTextId dataMessage newData =
    label
        [ css [ padding (Css.em 1) ]
        ]
        [ input
            [ type_ "checkbox"
            , Html.Styled.Attributes.checked isChecked
            , onCheck (\r -> dataMessage newData)
            ]
            []
        , text (i18n model labelTextId)
        ]



-- Alias views


aliasRemoveButton : Model -> Int -> String -> Html Msg
aliasRemoveButton model index alias_ =
    let
        d =
            model.state.personal

        aliases =
            d.aliases

        newAliases =
            List.Extra.removeAt index aliases
    in
    form
        [ css
            [ property "grid-column" "2"
            , property "grid-row" (String.fromInt (index + 2))
            ]
        , onSubmit (SetPersonalData { d | aliases = newAliases })
        ]
        [ button
            [ type_ "submit"
            ]
            [ text (i18n model "remove") ]
        ]


aliasElement : Int -> String -> Html Msg
aliasElement index alias_ =
    div
        [ css
            [ property "grid-column" "1"
            , property "grid-row" (String.fromInt (index + 2))
            ]
        ]
        [ text alias_ ]



-- Progress bar views


progressView : Model -> Html Msg
progressView model =
    div [ css [ property "grid-column" "1", displayFlex, flexDirection column, alignItems top, margin (Css.em 1) ] ]
        (List.append
            [ h2 [ css [ textAlign center ] ] [ text (i18n model "progress") ] ]
            (getProgressList model)
        )


getProgressList : Model -> List (Html Msg)
getProgressList model =
    getProgressListHelper Eligibility CurrentlyInUS True model []


getProgressListHelper : SectionTitle -> FormEntryElement -> Bool -> Model -> List (Html Msg) -> List (Html Msg)
getProgressListHelper title element printSection model currentList =
    let
        next =
            getNext element model

        nextTitle =
            getSectionFromElement next

        clickable =
            if model.debug then
                True

            else
                List.member element model.visitedElements

        toBeAdded =
            if printSection && title == model.focusedSection then
                [ titleHtml title element clickable model, elementNameHtml element clickable model ]

            else if title == model.focusedSection then
                [ elementNameHtml element clickable model ]

            else if printSection then
                [ titleHtml title element clickable model ]

            else
                []

        appendedList =
            List.append currentList toBeAdded

        printNextSection =
            title /= nextTitle

        nextList =
            if element == next then
                appendedList

            else
                getProgressListHelper nextTitle next printNextSection model appendedList
    in
    nextList


titleHtml : SectionTitle -> FormEntryElement -> Bool -> Model -> Html Msg
titleHtml title elementLink clickable model =
    let
        description =
            sectionToDescription title model

        html =
            if clickable then
                h3 [ onClick (SetFormEntryElement elementLink) ] [ text description ]

            else
                h3 [ css [ color gray ] ] [ text description ]
    in
    html


elementNameHtml : FormEntryElement -> Bool -> Model -> Html Msg
elementNameHtml element clickable model =
    let
        description =
            formElementToDescription element model

        html =
            if clickable then
                div [ onClick (SetFormEntryElement element) ] [ text description ]

            else
                div [ css [ color gray ] ] [ text description ]
    in
    html


sectionToDescription : SectionTitle -> Model -> String
sectionToDescription title model =
    case title of
        Eligibility ->
            i18n model "eligibility"

        PersonalInfo ->
            i18n model "personal-info"


formElementToDescription : FormEntryElement -> Model -> String
formElementToDescription element model =
    case element of
        CurrentlyInUS ->
            i18n model "us-residency"

        InUSLessThanOneYear ->
            i18n model "length-of-stay"

        NotEligible ->
            i18n model "not-eligible"

        FirstName ->
            i18n model "first-name"

        LastName ->
            i18n model "last-name"

        MiddleName ->
            i18n model "middle-name"

        Aliases ->
            i18n model "aliases"

        HomeAddress ->
            i18n model "home-address"

        HomeMailingSame ->
            i18n model "home-mailing-same"

        EnterMailingAddress ->
            i18n model "mailing-address"

        EnterGender ->
            i18n model "gender"

        EnterMaritalStatus ->
            i18n model "marital-status"



-- Help view


helpView : Model -> Html Msg
helpView model =
    div [ css [ property "grid-column" "3", displayFlex, flexDirection column, alignItems top, margin (Css.em 1) ] ]
        [ h2 [ css [ textAlign center ] ] [ text (i18n model "help") ]
        , text (i18n model "help-description")
        ]


webNav : Model -> Html Msg
webNav model =
    div [ css [ gridStyles, standardStyles, backgroundColor accent, alignItems center ] ]
        [ div [ css [ navContainerStyles ] ]
            [ a [ href "/", css [ linkStyles ] ] [ text "DIY Asylum" ]
            , a [ href "/i589", css [ linkStyles, marginLeft auto ] ] [ text (i18n model "get-started") ]
            , a [ href "/about", css [ linkStyles ] ] [ text (i18n model "about-us") ]
            , a [ href "/contact", css [ linkStyles ] ] [ text (i18n model "contact-us") ]
            , select [ onInput SetLanguage ] (List.map (\r -> option [ Html.Styled.Attributes.selected (r == model.language) ] [ text r ]) (languages model.languageDict))
            ]
        ]


footer : Html msg
footer =
    div [ css [ gridStyles, standardStyles, alignItems center, backgroundColor dark, color background, minHeight (Css.em 2.5), padding (px 10) ] ]
        [ div [ css [ property "grid-column" "2" ] ]
            [ text "© 2020 DIY Asylum LLC"
            ]
        ]



-- STYLES


standardStyles : Style
standardStyles =
    batch [ fontSize (vmin 2.15), fontFamilies [ "Lato", "sans-serif" ], color dark ]


gridStyles : Style
gridStyles =
    batch [ property "display" "grid", property "grid-template-columns" "1fr 2fr 1fr" ]


linkStyles : Style
linkStyles =
    batch [ standardStyles, color dark, textDecoration none, padding (px 10) ]


navContainerStyles : Style
navContainerStyles =
    batch [ minHeight (vh 5), maxHeight (vh 5), padding (Css.em 0.1), property "grid-column" "2", color dark, displayFlex, alignItems center, justifyContent start ]


defaultMargin : Style
defaultMargin =
    margin (px 10)



-- REQUESTS


parseBytes : Http.Response Bytes -> Result Http.Error Bytes
parseBytes response =
    case response of
        Http.BadUrl_ url ->
            Err (Http.BadUrl url)

        Http.Timeout_ ->
            Err Http.Timeout

        Http.NetworkError_ ->
            Err Http.NetworkError

        Http.BadStatus_ metadata body ->
            Err (Http.BadStatus metadata.statusCode)

        Http.GoodStatus_ metadata body ->
            Ok body


downloadFilledForm : UserData -> Cmd Msg
downloadFilledForm data =
    Http.post
        { url = "http://localhost:12345/fill-i589"
        , body = Http.jsonBody (encode data)
        , expect = Http.expectBytesResponse FinishDownload parseBytes
        }


savePdf : Bytes -> Cmd msg
savePdf bytes =
    Download.bytes "completed-i589.pdf" "application/pdf" bytes



-- COLOR PALETTE


dark : Color
dark =
    hex "162521"


background : Color
background =
    hex "C0E0DE"


accent : Color
accent =
    hex "4F7CAC"


bold : Color
bold =
    hex "FF1654"


neutral : Color
neutral =
    hex "3C474B"


gray : Color
gray =
    hex "717878"



-- Headers and "Next" need to know about what data has been entered and what entries are valid.
-- Headers only appear if you are working on a section or have completed it.
-- "Next" must be dynamic, not just going through a list, since control flow is needed
-- State should include a "focused element", which is the content being worked on
-- Next can only be initiated if the data entered in the focused element is valid
-- If valid, all next needs to know is how to move from one focused element to the next
-- Focused elements are organized under sections
-- Once a focused element has been selected, it is included in the headings and clicking refocuses that element
-- Re-validation is needed at the end of the process in case things get messed with out of order
-- Rendering applies a function taking focused element name -> content (rendering function)
-- Each focused element has its own help section as well
-- "Next" and "Back" both just change the focused element and may add to the list of headings, headings are stored separately
-- headings are keyed off of the name of the focused element (or section)
--
