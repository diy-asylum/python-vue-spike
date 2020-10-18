module Main exposing (Model, Msg(..), main, subscriptions, update, view)

import Array exposing (Array)
import Browser
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Bytes exposing (Bytes)
import Css exposing (..)
import DataTypes exposing (..)
import Date exposing (Date)
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
import Task
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
    , currentYear : Maybe Int
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
    , yearOfBirth : String
    , dayOfBirth : String
    , monthOfBirth : String
    , cityOfBirth : String
    , countryOfBirth : String
    , presentNationality : String
    , nationalityAtBirth : String
    , raceEthnicOrTribalGroup : String
    , religion : String
    , nativeLanguage : String
    , fluentInEnglish : Maybe Bool
    , otherLanguages : List String
    , currentLanguagesInput : String
    , immigrationCourtHistory : Maybe ImmigrationCourtHistory
    , i94Number : String
    , alienRegistrationNumber : String
    , socialSecurityNumber : String
    , uscisAccountNumber : String
    , lastLeftHomeCountryDay : String
    , lastLeftHomeCountryMonth : String
    , lastLeftHomeCountryYear : String
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
    , yearOfBirth = ""
    , monthOfBirth = ""
    , dayOfBirth = ""
    , cityOfBirth = ""
    , countryOfBirth = ""
    , presentNationality = ""
    , nationalityAtBirth = ""
    , raceEthnicOrTribalGroup = ""
    , religion = ""
    , nativeLanguage = ""
    , fluentInEnglish = Nothing
    , otherLanguages = []
    , currentLanguagesInput = ""
    , immigrationCourtHistory = Nothing
    , i94Number = ""
    , alienRegistrationNumber = ""
    , socialSecurityNumber = ""
    , uscisAccountNumber = ""
    , lastLeftHomeCountryDay = ""
    , lastLeftHomeCountryMonth = ""
    , lastLeftHomeCountryYear = ""
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
    | DateOfBirth
    | CountryOfBirth
    | CityOfBirth
    | PresentNationality
    | NationalityAtBirth
    | RaceEthnicity
    | Religion
    | NativeLanguage
    | FluentInEnglish
    | OtherLanguages
    | ImmigrationCourtHistoryEntry
    | I94
    | AlienRegistration
    | SSN
    | USCISAccount
    | LeftHomeCountry


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
    ( Model key url page (pageToTitle page) (Element.classifyDevice flags) Nothing defaultFormState Eligibility CurrentlyInUS [ CurrentlyInUS ] lang languageDict True, now )


now : Cmd Msg
now =
    Task.perform SetDate Date.today



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | DeviceClassified Device
    | SetDate Date
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

        SetDate d ->
            ( { model | currentYear = Just (Date.year d) }, Cmd.none )

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
            DateOfBirth

        DateOfBirth ->
            CountryOfBirth

        CountryOfBirth ->
            CityOfBirth

        CityOfBirth ->
            PresentNationality

        PresentNationality ->
            NationalityAtBirth

        NationalityAtBirth ->
            RaceEthnicity

        RaceEthnicity ->
            Religion

        Religion ->
            NativeLanguage

        NativeLanguage ->
            FluentInEnglish

        FluentInEnglish ->
            OtherLanguages

        OtherLanguages ->
            ImmigrationCourtHistoryEntry

        ImmigrationCourtHistoryEntry ->
            I94

        I94 ->
            AlienRegistration

        AlienRegistration ->
            SSN

        SSN ->
            USCISAccount

        USCISAccount ->
            LeftHomeCountry

        LeftHomeCountry ->
            LeftHomeCountry


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

        DateOfBirth ->
            EnterMaritalStatus

        CountryOfBirth ->
            DateOfBirth

        CityOfBirth ->
            CountryOfBirth

        PresentNationality ->
            CityOfBirth

        NationalityAtBirth ->
            PresentNationality

        RaceEthnicity ->
            NationalityAtBirth

        Religion ->
            RaceEthnicity

        NativeLanguage ->
            Religion

        FluentInEnglish ->
            NativeLanguage

        OtherLanguages ->
            FluentInEnglish

        ImmigrationCourtHistoryEntry ->
            OtherLanguages

        I94 ->
            ImmigrationCourtHistoryEntry

        AlienRegistration ->
            I94

        SSN ->
            AlienRegistration

        USCISAccount ->
            SSN

        LeftHomeCountry ->
            USCISAccount


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

        DateOfBirth ->
            PersonalInfo

        CountryOfBirth ->
            PersonalInfo

        CityOfBirth ->
            PersonalInfo

        PresentNationality ->
            PersonalInfo

        NationalityAtBirth ->
            PersonalInfo

        RaceEthnicity ->
            PersonalInfo

        Religion ->
            PersonalInfo

        NativeLanguage ->
            PersonalInfo

        FluentInEnglish ->
            PersonalInfo

        OtherLanguages ->
            PersonalInfo

        ImmigrationCourtHistoryEntry ->
            PersonalInfo

        I94 ->
            PersonalInfo

        AlienRegistration ->
            PersonalInfo

        SSN ->
            PersonalInfo

        USCISAccount ->
            PersonalInfo

        LeftHomeCountry ->
            PersonalInfo


validate : Model -> Bool
validate model =
    let
        elig =
            model.state.eligibility

        d =
            model.state.personal
    in
    if not model.debug then
        case model.focusedEntry of
            CurrentlyInUS ->
                case elig.currentlyInUS of
                    Nothing ->
                        False

                    _ ->
                        True

            InUSLessThanOneYear ->
                case elig.lessThanOneYear of
                    Nothing ->
                        False

                    _ ->
                        True

            NotEligible ->
                False

            FirstName ->
                d.firstName /= ""

            MiddleName ->
                True

            LastName ->
                d.lastName /= ""

            Aliases ->
                True

            HomeAddress ->
                let
                    address =
                        d.homeAddress

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
                        d.mailingAddress

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
                d.homeMailingSame /= Nothing

            EnterGender ->
                d.gender /= Nothing

            EnterMaritalStatus ->
                d.maritalStatus /= Nothing

            DateOfBirth ->
                d.yearOfBirth /= "" && d.monthOfBirth /= "" && d.dayOfBirth /= ""

            CountryOfBirth ->
                d.countryOfBirth /= ""

            CityOfBirth ->
                d.cityOfBirth /= ""

            PresentNationality ->
                d.presentNationality /= ""

            NationalityAtBirth ->
                d.nationalityAtBirth /= ""

            RaceEthnicity ->
                d.raceEthnicOrTribalGroup /= ""

            Religion ->
                True

            NativeLanguage ->
                d.nativeLanguage /= ""

            FluentInEnglish ->
                d.fluentInEnglish /= Nothing

            OtherLanguages ->
                True

            ImmigrationCourtHistoryEntry ->
                d.immigrationCourtHistory /= Nothing

            I94 ->
                True

            AlienRegistration ->
                True

            SSN ->
                True

            USCISAccount ->
                True

            LeftHomeCountry ->
                d.lastLeftHomeCountryDay /= "" && d.lastLeftHomeCountryMonth /= "" && d.lastLeftHomeCountryYear /= ""

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


render : FormEntryElement -> Model -> Html Msg
render e model =
    let
        elig =
            model.state.eligibility

        d =
            model.state.personal
    in
    case e of
        CurrentlyInUS ->
            let
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
                [ prompt model [] "currently-in-us"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetEligibility { elig | currentlyInUS = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetEligibility { elig | currentlyInUS = setMaybe noChecked False }
                    ]
                , nextButton model
                ]

        InUSLessThanOneYear ->
            let
                yesChecked =
                    Maybe.withDefault False elig.lessThanOneYear

                noChecked =
                    case elig.lessThanOneYear of
                        Just b ->
                            not b

                        Nothing ->
                            False
            in
            nextBackWrap model
                [ prompt model [] "less-than-one-year"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetEligibility { elig | lessThanOneYear = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetEligibility { elig | lessThanOneYear = setMaybe noChecked False }
                    ]
                ]

        NotEligible ->
            centerWrap [ prompt model [] "not-eligible-explanation", backButton model ]

        FirstName ->
            singleTextEntry model "first-name-entry" d.firstName (\r -> SetPersonalData { d | firstName = r })

        MiddleName ->
            singleTextEntry model "middle-name-entry" d.middleName (\r -> SetPersonalData { d | middleName = r })

        LastName ->
            singleTextEntry model "last-name-entry" d.lastName (\r -> SetPersonalData { d | lastName = r })

        Aliases ->
            multiTextEntry model d.currentAliasInput d.aliases "aliases-entry" "aliases" (\r -> SetPersonalData { d | currentAliasInput = r }) (\r -> SetPersonalData { d | currentAliasInput = "", aliases = r }) (\r -> SetPersonalData { d | aliases = r })

        HomeAddress ->
            let
                h =
                    d.homeAddress
            in
            nextBackWrap model
                [ prompt model [] "home-address-entry"
                , div [ css [ property "display" "grid", property "grid-template-columns" "1fr 4fr 1fr", alignItems center, justifyContent center, alignSelf flexStart ] ]
                    [ textInput h.streetNumber (i18n model "street-number") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | homeAddress = { h | streetNumber = r } })
                    , textInput h.streetName (i18n model "street-name") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | homeAddress = { h | streetName = r } })
                    , textInput h.apartmentNumber (i18n model "apt-number") [ property "grid-column" "3/4" ] (\r -> SetPersonalData { d | homeAddress = { h | apartmentNumber = r } })
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "2fr 2fr 1fr", alignItems center, justifyContent center ] ]
                    [ textInput h.city (i18n model "city") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | homeAddress = { h | city = r } })
                    , textInput h.state (i18n model "state") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | homeAddress = { h | state = r } })
                    , textInput h.zipCode (i18n model "zip-code") [ property "grid-column" "3/4" ] (\r -> SetPersonalData { d | homeAddress = { h | zipCode = r } })
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 2fr", alignItems left, justifyContent left ] ]
                    [ textInput h.areaCode (i18n model "area-code") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | homeAddress = { h | areaCode = r } })
                    , textInput h.phoneNumber (i18n model "phone-number") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | homeAddress = { h | phoneNumber = r } })
                    ]
                ]

        HomeMailingSame ->
            let
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
            nextBackWrap model
                [ prompt model [] "home-mailing-same-text"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetPersonalData { d | homeMailingSame = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetPersonalData { d | homeMailingSame = setMaybe noChecked False }
                    ]
                ]

        EnterMailingAddress ->
            let
                h =
                    d.mailingAddress
            in
            nextBackWrap model
                [ prompt model [] "mailing-address-entry"
                , textInput h.inCareOf (i18n model "in-care-of") [ alignSelf flexStart, minWidth (pc 20) ] (\r -> SetPersonalData { d | mailingAddress = { h | inCareOf = r } })
                , div [ css [ property "display" "grid", property "grid-template-columns" "1fr 4fr 1fr", alignItems center, justifyContent center, alignSelf flexStart ] ]
                    [ textInput h.streetNumber (i18n model "street-number") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | mailingAddress = { h | streetNumber = r } })
                    , textInput h.streetName (i18n model "street-name") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | mailingAddress = { h | streetName = r } })
                    , textInput h.apartmentNumber (i18n model "apt-number") [ property "grid-column" "3/4" ] (\r -> SetPersonalData { d | mailingAddress = { h | apartmentNumber = r } })
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "2fr 2fr 1fr", alignItems center, justifyContent center ] ]
                    [ textInput h.city (i18n model "city") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | mailingAddress = { h | city = r } })
                    , textInput h.state (i18n model "state") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | mailingAddress = { h | state = r } })
                    , textInput h.zipCode (i18n model "zip-code") [ property "grid-column" "3/4" ] (\r -> SetPersonalData { d | mailingAddress = { h | zipCode = r } })
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 2fr", alignItems left, justifyContent left ] ]
                    [ textInput h.areaCode (i18n model "area-code") [ property "grid-column" "1/2" ] (\r -> SetPersonalData { d | mailingAddress = { h | areaCode = r } })
                    , textInput h.phoneNumber (i18n model "phone-number") [ property "grid-column" "2/3" ] (\r -> SetPersonalData { d | mailingAddress = { h | phoneNumber = r } })
                    ]
                ]

        EnterGender ->
            let
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
            nextBackWrap model
                [ prompt model [] "enter-gender"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model maleChecked "male" SetPersonalData { d | gender = setMaybe maleChecked MALE }
                    , checkBox model femaleChecked "female" SetPersonalData { d | gender = setMaybe femaleChecked FEMALE }
                    ]
                ]

        EnterMaritalStatus ->
            let
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
            nextBackWrap model
                [ prompt model [] "enter-marital-status"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model singleChecked "single" SetPersonalData { d | maritalStatus = setMaybe singleChecked SINGLE }
                    , checkBox model marriedChecked "married" SetPersonalData { d | maritalStatus = setMaybe marriedChecked MARRIED }
                    , checkBox model divorcedChecked "divorced" SetPersonalData { d | maritalStatus = setMaybe divorcedChecked DIVORCED }
                    , checkBox model widowedChecked "widowed" SetPersonalData { d | maritalStatus = setMaybe widowedChecked WIDOWED }
                    ]
                ]

        DateOfBirth ->
            let
                month =
                    d.monthOfBirth

                day =
                    d.dayOfBirth

                year =
                    d.yearOfBirth
            in
            nextBackWrap model
                [ prompt model [] "date-of-birth-entry"
                , div [ css [ displayFlex, flexDirection row, justifyContent center ] ]
                    [ div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "month")
                        , select
                            [ onInput (\r -> SetPersonalData { d | monthOfBirth = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == month) ] [ text r ]) monthList)
                        ]
                    , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "day")
                        , select
                            [ onInput (\r -> SetPersonalData { d | dayOfBirth = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == day) ] [ text r ]) dayList)
                        ]
                    , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "year")
                        , select
                            [ onInput (\r -> SetPersonalData { d | yearOfBirth = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == year) ] [ text r ]) (yearList model.currentYear))
                        ]
                    ]
                ]

        CountryOfBirth ->
            singleTextEntry model "country-of-birth-entry" d.countryOfBirth (\r -> SetPersonalData { d | countryOfBirth = r })

        CityOfBirth ->
            singleTextEntry model "city-of-birth-entry" d.cityOfBirth (\r -> SetPersonalData { d | countryOfBirth = r })

        PresentNationality ->
            singleTextEntry model "present-nationality-entry" d.presentNationality (\r -> SetPersonalData { d | presentNationality = r })

        NationalityAtBirth ->
            singleTextEntry model "nationality-at-birth-entry" d.nationalityAtBirth (\r -> SetPersonalData { d | nationalityAtBirth = r })

        RaceEthnicity ->
            singleTextEntry model "race-ethnicity-entry" d.raceEthnicOrTribalGroup (\r -> SetPersonalData { d | raceEthnicOrTribalGroup = r })

        Religion ->
            singleTextEntry model "religion-entry" d.religion (\r -> SetPersonalData { d | religion = r })

        NativeLanguage ->
            singleTextEntry model "native-language-entry" d.nativeLanguage (\r -> SetPersonalData { d | nativeLanguage = r })

        FluentInEnglish ->
            let
                yesChecked =
                    Maybe.withDefault False d.fluentInEnglish

                noChecked =
                    case d.fluentInEnglish of
                        Just b ->
                            not b

                        Nothing ->
                            False
            in
            nextBackWrap model
                [ prompt model [] "fluent-in-english-entry"
                , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
                    [ checkBox model yesChecked "yes" SetPersonalData { d | fluentInEnglish = setMaybe yesChecked True }
                    , checkBox model noChecked "no" SetPersonalData { d | fluentInEnglish = setMaybe noChecked False }
                    ]
                ]

        OtherLanguages ->
            let
                updateFunction =
                    \r -> SetPersonalData { d | currentLanguagesInput = r }

                addFunction =
                    \r -> SetPersonalData { d | currentLanguagesInput = "", otherLanguages = r }

                removeFunction =
                    \r -> SetPersonalData { d | otherLanguages = r }
            in
            multiTextEntry model d.currentLanguagesInput d.otherLanguages "other-languages-entry" "other-languages" updateFunction addFunction removeFunction

        ImmigrationCourtHistoryEntry ->
            let
                history =
                    d.immigrationCourtHistory

                neverChecked =
                    history == Just NEVER

                currentlyChecked =
                    history == Just CURRENTLY

                pastChecked =
                    history == Just NOT_NOW_BUT_IN_THE_PAST
            in
            nextBackWrap model
                [ prompt model [] "immigration-court-history-entry"
                , div [ css [ displayFlex, flexDirection column, justifyContent flexStart, defaultMargin ] ]
                    [ checkBox model neverChecked "court-history-never" SetPersonalData { d | immigrationCourtHistory = setMaybe neverChecked NEVER }
                    , checkBox model currentlyChecked "court-history-currently" SetPersonalData { d | immigrationCourtHistory = setMaybe currentlyChecked CURRENTLY }
                    , checkBox model pastChecked "court-history-past" SetPersonalData { d | immigrationCourtHistory = setMaybe pastChecked NOT_NOW_BUT_IN_THE_PAST }
                    ]
                ]

        I94 ->
            singleTextEntry model "i94-entry" d.i94Number (\r -> SetPersonalData { d | i94Number = r })

        AlienRegistration ->
            singleTextEntry model "alien-registration-entry" d.alienRegistrationNumber (\r -> SetPersonalData { d | alienRegistrationNumber = r })

        SSN ->
            singleTextEntry model "ssn-entry" d.socialSecurityNumber (\r -> SetPersonalData { d | socialSecurityNumber = r })

        USCISAccount ->
            singleTextEntry model "uscis-entry" d.uscisAccountNumber (\r -> SetPersonalData { d | uscisAccountNumber = r })

        LeftHomeCountry ->
            let
                month =
                    d.lastLeftHomeCountryMonth

                day =
                    d.lastLeftHomeCountryDay

                year =
                    d.lastLeftHomeCountryYear
            in
            nextBackWrap model
                [ prompt model [] "left-home-country-entry"
                , div [ css [ displayFlex, flexDirection row, justifyContent center ] ]
                    [ div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "month")
                        , select
                            [ onInput (\r -> SetPersonalData { d | lastLeftHomeCountryMonth = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == month) ] [ text r ]) monthList)
                        ]
                    , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "day")
                        , select
                            [ onInput (\r -> SetPersonalData { d | lastLeftHomeCountryDay = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == day) ] [ text r ]) dayList)
                        ]
                    , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
                        [ text (i18n model "year")
                        , select
                            [ onInput (\r -> SetPersonalData { d | lastLeftHomeCountryYear = r })
                            , css
                                [ dropdownStyles
                                ]
                            ]
                            (List.map (\r -> option [ Html.Styled.Attributes.selected (r == year) ] [ text r ]) (yearList model.currentYear))
                        ]
                    ]
                ]



-- View end
-- Misc


monthList : List String
monthList =
    [ "", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]


dayList : List String
dayList =
    [ ""
    , "01"
    , "02"
    , "03"
    , "04"
    , "05"
    , "06"
    , "07"
    , "08"
    , "09"
    , "10"
    , "11"
    , "12"
    , "13"
    , "14"
    , "15"
    , "16"
    , "17"
    , "18"
    , "19"
    , "20"
    , "21"
    , "22"
    , "23"
    , "24"
    , "25"
    , "26"
    , "27"
    , "28"
    , "29"
    , "30"
    , "31"
    ]


yearList : Maybe Int -> List String
yearList currentYear =
    let
        year =
            Maybe.withDefault 2020 currentYear
    in
    "" :: List.map (\r -> String.fromInt (year - r)) (List.range 0 120)



-- Generic views


setMaybe : Bool -> x -> Maybe x
setMaybe isAlreadyChecked x =
    if isAlreadyChecked then
        Nothing

    else
        Just x


backButton : Model -> Html Msg
backButton model =
    button [ css [ activeButtonStyles ], onClick Back ] [ text (i18n model "back") ]


nextButton : Model -> Html Msg
nextButton model =
    if validate model then
        button
            [ css [ activeButtonStyles ]
            , onClick Next
            ]
            [ text (i18n model "next") ]

    else
        button
            [ css [ disabledButtonStyles ]
            ]
            [ text (i18n model "next") ]


centerWrap : List (Html Msg) -> Html Msg
centerWrap list =
    div [ css [ property "grid-column" "2", displayFlex, flexDirection column, alignItems center, justifyContent center ] ]
        [ div
            [ css [ displayFlex, flexDirection column, backgroundColor accent, justifyContent center, alignItems center, padding (px 10) ] ]
            list
        ]


nextBackWrap : Model -> List (Html Msg) -> Html Msg
nextBackWrap model content =
    centerWrap (List.concat [ [ backButton model ], content, [ nextButton model ] ])


singleTextEntry : Model -> String -> String -> (String -> Msg) -> Html Msg
singleTextEntry model promptTextId value updateFunction =
    nextBackWrap model
        [ prompt model [] promptTextId
        , textInput value "" [] updateFunction
        ]


prompt : Model -> List Style -> String -> Html Msg
prompt model additionalStyles textId =
    p [ css [ textAlign center, maxWidth (px 500), defaultMargin, Css.batch additionalStyles ] ] [ text (i18n model textId) ]


checkBox : Model -> Bool -> String -> (x -> Msg) -> x -> Html Msg
checkBox model isChecked labelTextId dataMessage newData =
    label
        [ css
            [ padding (Css.em 1)
            , position relative
            ]
        ]
        [ input
            [ type_ "checkbox"
            , Html.Styled.Attributes.checked isChecked
            , onCheck (\r -> dataMessage newData)
            , css
                [ position relative
                , width (Css.em 1)
                , height (Css.em 1)
                , border (px 1)
                , borderRadius (px 2)
                , top (Css.em 0.3)
                , borderStyle solid
                , outline zero
                , property "appearance" "none"
                , property "-webkit-appearance" "none"
                , backgroundColor background
                , checked [ backgroundColor dark ]
                ]
            ]
            []
        , text (i18n model labelTextId)
        ]


textInput : String -> String -> List Style -> (String -> Msg) -> Html Msg
textInput value placeholder additionalStyles updateFunction =
    input
        [ css [ inputStyles, Css.batch additionalStyles ]
        , type_ "input"
        , Html.Styled.Attributes.value value
        , Html.Styled.Attributes.placeholder placeholder
        , onInput updateFunction
        ]
        []


multiEntryRemoveButton : Model -> List String -> (List String -> Msg) -> Int -> String -> Html Msg
multiEntryRemoveButton model currentList removeFunction index alias_ =
    let
        newList =
            List.Extra.removeAt index currentList
    in
    form
        [ css
            [ property "grid-column" "2"
            , property "grid-row" (String.fromInt (index + 2))
            ]
        , onSubmit (removeFunction newList)
        ]
        [ button
            [ type_ "submit"
            , css [ activeButtonStyles ]
            ]
            [ text (i18n model "remove") ]
        ]


multiEntryElement : Int -> String -> Html Msg
multiEntryElement index entry =
    div
        [ css
            [ property "grid-column" "1"
            , property "grid-row" (String.fromInt (index + 2))
            ]
        ]
        [ text entry ]


multiTextEntry : Model -> String -> List String -> String -> String -> (String -> Msg) -> (List String -> Msg) -> (List String -> Msg) -> Html Msg
multiTextEntry model currentInput currentList promptTextId listNameId updateFunction addFunction removeFunction =
    let
        newList =
            if currentInput /= "" then
                currentInput :: currentList

            else
                currentList

        numEntries =
            List.length currentList

        gridRows =
            String.repeat (numEntries + 1) "1fr "

        entryList =
            case numEntries of
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
                        (h4 [ css [ property "grid-column" "1/3", property "grid-row" "1", textAlign center ] ] [ text (i18n model listNameId) ]
                            :: List.append
                                (List.indexedMap multiEntryElement currentList)
                                (List.indexedMap (multiEntryRemoveButton model currentList removeFunction) currentList)
                        )
    in
    nextBackWrap model
        [ prompt model [] promptTextId
        , form [ onSubmit (addFunction newList) ]
            [ div [ css [ displayFlex, flexDirection row, alignItems center, justifyContent center ] ]
                [ textInput currentInput "" [] updateFunction
                , button [ type_ "submit", css [ activeButtonStyles ] ] [ text (i18n model "add") ]
                ]
            ]
        , entryList
        ]



-- Progress bar views


progressView : Model -> Html Msg
progressView model =
    div [ css [ property "grid-column" "1", displayFlex, flexDirection column, alignItems top, margin (Css.em 3) ] ]
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
                h3 [ onClick (SetFormEntryElement elementLink), css [ marginTop (px 10), marginBottom (px 10) ] ] [ text description ]

            else
                h3 [ css [ color gray, marginTop (px 10), marginBottom (px 10) ] ] [ text description ]
    in
    html


elementNameHtml : FormEntryElement -> Bool -> Model -> Html Msg
elementNameHtml element clickable model =
    let
        description =
            formElementToDescription element model

        html =
            if clickable then
                div [ onClick (SetFormEntryElement element), css [ marginTop (px 5), marginBottom (px 5) ] ] [ text description ]

            else
                div [ css [ color gray, marginTop (px 5), marginBottom (px 5) ] ] [ text description ]
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

        DateOfBirth ->
            i18n model "date-of-birth"

        CountryOfBirth ->
            i18n model "country-of-birth"

        CityOfBirth ->
            i18n model "city-of-birth"

        PresentNationality ->
            i18n model "present-nationality"

        NationalityAtBirth ->
            i18n model "nationality-at-birth"

        RaceEthnicity ->
            i18n model "race-ethnicity"

        Religion ->
            i18n model "religion"

        NativeLanguage ->
            i18n model "native-language"

        FluentInEnglish ->
            i18n model "fluent-in-english"

        OtherLanguages ->
            i18n model "other-languages"

        ImmigrationCourtHistoryEntry ->
            i18n model "immigration-court-history"

        I94 ->
            i18n model "i94"

        AlienRegistration ->
            i18n model "alien-registration"

        SSN ->
            i18n model "ssn"

        USCISAccount ->
            i18n model "uscis"

        LeftHomeCountry ->
            i18n model "left-home-country"



-- Help view


helpView : Model -> Html Msg
helpView model =
    div [ css [ property "grid-column" "3", displayFlex, flexDirection column, alignItems top, margin (Css.em 3) ] ]
        [ h2 [ css [ textAlign center ] ] [ text (i18n model "help") ]
        , text (i18n model "help-description")
        ]



-- Nav


webNav : Model -> Html Msg
webNav model =
    div [ css [ gridStyles, standardStyles, backgroundColor accent, alignItems center ] ]
        [ div [ css [ navContainerStyles ] ]
            [ a [ href "/", css [ linkStyles ] ] [ text "DIY Asylum" ]
            , a [ href "/i589", css [ linkStyles, marginLeft auto ] ] [ text (i18n model "get-started") ]
            , a [ href "/about", css [ linkStyles ] ] [ text (i18n model "about-us") ]
            , a [ href "/contact", css [ linkStyles ] ] [ text (i18n model "contact-us") ]
            , select
                [ onInput SetLanguage
                , css
                    [ dropdownStyles
                    ]
                ]
                (List.map (\r -> option [ Html.Styled.Attributes.selected (r == model.language) ] [ text r ]) (languages model.languageDict))
            ]
        ]



-- footer


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
    batch [ fontSize (px 15), fontFamilies [ "Lato", "sans-serif" ], color dark ]


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


dropdownStyles : Style
dropdownStyles =
    Css.batch
        [ property "appearance" "none"
        , property "-webkit-appearance" "none"
        , borderRadius (px 5)
        , borderStyle solid
        , outline zero
        , padding (px 5)
        , boxSizing borderBox
        ]


inputStyles : Style
inputStyles =
    Css.batch
        [ defaultMargin
        , property "appearance" "none"
        , property "-webkit-appearance" "none"
        , borderRadius (px 3)
        , outline zero
        , borderWidth (px 2)
        , borderStyle solid
        , borderColor transparent
        , focus [ borderColor highlight ]
        , padding (px 7)
        ]


activeButtonStyles : Style
activeButtonStyles =
    Css.batch
        [ backgroundColor background
        , color dark
        , defaultMargin
        , borderRadius (px 5)
        , borderTopColor gray
        , borderLeftColor gray
        , borderBottomColor dark
        , borderRightColor dark
        , borderStyle solid
        , property "appearance" "none"
        , property "-webkit-appearance" "none"
        , padding (px 4)
        , outline zero
        , active
            [ focus
                [ borderTopColor dark
                , borderLeftColor dark
                , borderBottomColor gray
                , borderRightColor gray
                ]
            ]
        ]


disabledButtonStyles : Style
disabledButtonStyles =
    Css.batch
        [ backgroundColor dark
        , color background
        , defaultMargin
        , borderRadius (px 5)
        , borderTopColor dark
        , borderLeftColor dark
        , borderBottomColor dark
        , borderRightColor dark
        , borderStyle solid
        , property "appearance" "none"
        , property "-webkit-appearance" "none"
        , padding (px 4)
        , outline zero
        ]



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


highlight : Color
highlight =
    hex "f06e11"


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
