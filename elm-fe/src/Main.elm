module Main exposing (Model, Msg(..), main, subscriptions, update, view)

import Array exposing (Array)
import Browser
import Browser.Events exposing (onResize)
import Browser.Navigation as Nav
import Bytes exposing (Bytes)
import Css exposing (..)
import DataTypes exposing (..)
import Element exposing (Device)
import File.Download as Download
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, type_)
import Html.Styled.Events exposing (..)
import Http
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
    , focusedSectionIndex : Int
    , focusedEntryIndex : Int
    , directory : Array FormSection
    }


type alias FormState =
    { eligibility : EligibilityData
    }


defaultFormState : FormState
defaultFormState =
    { eligibility = defaultEligibilityData
    }


type alias EligibilityData =
    { currentlyInUS : Maybe Bool
    , lessThanOneYear : Maybe Bool
    }


defaultEligibilityData : EligibilityData
defaultEligibilityData =
    { currentlyInUS = Nothing
    , lessThanOneYear = Nothing
    }


type FormEntryElement
    = CurrentlyInUS
    | InUSLessThanOneYear


type SectionTitle
    = Eligibility


type alias FormSection =
    { title : SectionTitle
    , formElements : Array FormEntryElement
    }


defaultDirectory : Array FormSection
defaultDirectory =
    Array.fromList [ { title = Eligibility, formElements = Array.fromList [ CurrentlyInUS, InUSLessThanOneYear ] } ]


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
    }


init : Flags -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        page =
            pathMatch url.path
    in
    ( Model key url page (pageToTitle page) (Element.classifyDevice flags) defaultFormState 0 0 defaultDirectory, Cmd.none )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | DeviceClassified Device
    | StartDownload
    | FinishDownload (Result Http.Error Bytes)
    | Next
    | Back


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

        Next ->
            ( model, Cmd.none )

        Back ->
            ( model, Cmd.none )



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
                    [ webNav, footer ]

                I589 ->
                    [ webNav, i589View model, footer ]

                AboutUs ->
                    [ webNav, footer ]

                Contact ->
                    [ webNav, footer ]

                Error ->
                    [ webNav, footer ]
    in
    content


i589View : Model -> Html Msg
i589View model =
    div [ css [ gridStyles, standardStyles, alignItems center, backgroundColor background, minHeight (vh 95), color dark ] ]
        [ headerView model
        , formEntryView model
        , helpView model
        ]


getCurrentSection : Model -> ( Maybe SectionTitle, Maybe FormEntryElement )
getCurrentSection model =
    let
        section =
            Array.get model.focusedSectionIndex model.directory

        title =
            Maybe.map (\r -> r.title) section

        element =
            Maybe.andThen (\r -> Array.get model.focusedEntryIndex r.formElements) section
    in
    ( title, element )


formEntryView : Model -> Html Msg
formEntryView model =
    let
        section =
            getCurrentSection model

        element =
            Tuple.second section

        html =
            case element of
                Just e ->
                    render e

                Nothing ->
                    text "Error"
    in
    html


render : FormEntryElement -> Html Msg
render e =
    case e of
        CurrentlyInUS ->
            div [ css [ property "grid-column" "2", displayFlex, flexDirection column, alignItems center, justifyContent center, alignItems center ] ]
                [ div
                    [ css [ displayFlex, flexDirection column, backgroundColor accent, padding (px 10) ] ]
                    [ text "Do you currently reside in the US?"
                    , div [ css [ displayFlex, flexDirection row, justifyContent center ] ]
                        [ label [] [ input [ type_ "checkbox" ] [], text "Yes" ]
                        , label [] [ input [ type_ "checkbox" ] [], text "No" ]
                        ]
                    ]
                ]

        InUSLessThanOneYear ->
            div [ css [ property "grid-column" "2" ] ]
                [ h1 [] [ text "Entry" ]
                ]


headerView : Model -> Html Msg
headerView model =
    div [ css [ property "grid-column" "1" ] ]
        [ h1 [] [ text "Progress" ]
        ]


helpView : Model -> Html Msg
helpView model =
    div [ css [ property "grid-column" "3" ] ]
        [ h1 [] [ text "Help" ]
        ]


webNav : Html msg
webNav =
    div [ css [ gridStyles, standardStyles, backgroundColor accent, alignItems center ] ]
        [ div [ css [ navContainerStyles ] ]
            [ a [ href "/", css [ linkStyles ] ] [ text "DIY Asylum" ]
            , a [ href "/i589", css [ linkStyles, marginLeft auto ] ] [ text "Get Started" ]
            , a [ href "/about", css [ linkStyles ] ] [ text "About Us" ]
            , a [ href "/contact", css [ linkStyles ] ] [ text "Contact Us" ]
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
    batch [ property "display" "grid", property "grid-template-columns" "1fr 3fr 1fr" ]


linkStyles : Style
linkStyles =
    batch [ standardStyles, color dark, textDecoration none, padding (px 10) ]


navContainerStyles : Style
navContainerStyles =
    batch [ minHeight (vh 5), maxHeight (vh 5), padding (Css.em 0.1), property "grid-column" "2", color dark, displayFlex, alignItems center, justifyContent start ]



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
