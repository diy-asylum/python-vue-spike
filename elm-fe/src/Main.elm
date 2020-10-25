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
    , spouse : SpouseData
    , numberOfChildren : Maybe Int
    , children : List ChildData
    , addresses : AddressData
    }


defaultFormState : FormState
defaultFormState =
    { eligibility = defaultEligibilityData
    , personal = defaultPersonalData
    , spouse = defaultSpouseData
    , numberOfChildren = Nothing
    , children = []
    , addresses = defaultAddressData
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
    , mostRecentEntry : ExpandableTravelEvent
    , entryExpirationDay : String
    , entryExpirationMonth : String
    , entryExpirationYear : String
    , otherEntries : List ExpandableTravelEvent
    , currentEntryDay : String
    , currentEntryMonth : String
    , currentEntryYear : String
    , currentEntryPlace : String
    , currentEntryStatus : String
    , hasPassport : Maybe Bool
    , hasOtherTravelDoc : Maybe Bool
    , travelDocNumber : String
    , travelDocExpirationDay : String
    , travelDocExpirationMonth : String
    , travelDocExpirationYear : String
    , travelDocCountry : String
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
    , mostRecentEntry = defaultTravelEvent
    , entryExpirationDay = ""
    , entryExpirationMonth = ""
    , entryExpirationYear = ""
    , otherEntries = []
    , currentEntryDay = ""
    , currentEntryMonth = ""
    , currentEntryYear = ""
    , currentEntryPlace = ""
    , currentEntryStatus = ""
    , hasPassport = Nothing
    , hasOtherTravelDoc = Nothing
    , travelDocNumber = ""
    , travelDocExpirationDay = ""
    , travelDocExpirationMonth = ""
    , travelDocExpirationYear = ""
    , travelDocCountry = ""
    }


type alias ExpandableTravelEvent =
    { day : String
    , month : String
    , year : String
    , place : String
    , status : String
    }


defaultTravelEvent : ExpandableTravelEvent
defaultTravelEvent =
    { day = ""
    , month = ""
    , year = ""
    , place = ""
    , status = ""
    }


type alias SpouseData =
    { firstName : String
    , lastName : String
    , middleName : String
    , aliases : List String
    , currentAliasInput : String
    , dayOfBirth : String
    , monthOfBirth : String
    , yearOfBirth : String
    , cityOfBirth : String
    , countryOfBirth : String
    , nationality : String
    , gender : Maybe Gender
    , raceEthnicityOrTribalGroup : String
    , alienRegistrationNumber : String
    , travelDocNumber : String
    , socialSecurityNumber : String
    , marriageDay : String
    , marriageMonth : String
    , marriageYear : String
    , placeOfMarriage : String
    , inUS : Maybe Bool
    , currentLocation : String
    , lastEntryDay : String
    , lastEntryMonth : String
    , lastEntryYear : String
    , lastEntryPlace : String
    , i94Number : String
    , statusOnLastAdmission : String
    , currentStatus : String
    , statusExpirationDay : String
    , statusExpirationMonth : String
    , statusExpirationYear : String
    , previousEntryDay : String
    , previousEntryMonth : String
    , previousEntryYear : String
    , inImmigrationCourt : Maybe Bool
    , includedInApplication : Maybe Bool
    }


defaultSpouseData : SpouseData
defaultSpouseData =
    { firstName = ""
    , middleName = ""
    , lastName = ""
    , aliases = []
    , currentAliasInput = ""
    , dayOfBirth = ""
    , monthOfBirth = ""
    , yearOfBirth = ""
    , cityOfBirth = ""
    , countryOfBirth = ""
    , nationality = ""
    , gender = Nothing
    , raceEthnicityOrTribalGroup = ""
    , alienRegistrationNumber = ""
    , travelDocNumber = ""
    , socialSecurityNumber = ""
    , marriageDay = ""
    , marriageMonth = ""
    , marriageYear = ""
    , placeOfMarriage = ""
    , inUS = Nothing
    , currentLocation = ""
    , lastEntryDay = ""
    , lastEntryMonth = ""
    , lastEntryYear = ""
    , lastEntryPlace = ""
    , i94Number = ""
    , statusOnLastAdmission = ""
    , currentStatus = ""
    , statusExpirationDay = ""
    , statusExpirationMonth = ""
    , statusExpirationYear = ""
    , previousEntryDay = ""
    , previousEntryMonth = ""
    , previousEntryYear = ""
    , inImmigrationCourt = Nothing
    , includedInApplication = Nothing
    }


type alias ChildData =
    { firstName : String
    , middleName : String
    , lastName : String
    , dayOfBirth : String
    , monthOfBirth : String
    , yearOfBirth : String
    , cityOfBirth : String
    , countryOfBirth : String
    , gender : Maybe Gender
    , raceEthnicityOrTribalGroup : String
    , nationality : String
    , maritalStatus : Maybe MaritalStatus
    , alienRegistrationNumber : String
    , travelDocNumber : String
    , socialSecurityNumber : String
    , inUS : Maybe Bool
    , currentLocation : String
    , lastEntryDay : String
    , lastEntryMonth : String
    , lastEntryYear : String
    , lastEntryPlace : String
    , i94Number : String
    , statusOnLastAdmission : String
    , currentStatus : String
    , statusExpirationDay : String
    , statusExpirationMonth : String
    , statusExpirationYear : String
    , inImmigrationCourt : Maybe Bool
    , includedInApplication : Maybe Bool
    }


defaultChildData : ChildData
defaultChildData =
    { firstName = ""
    , middleName = ""
    , lastName = ""
    , dayOfBirth = ""
    , monthOfBirth = ""
    , yearOfBirth = ""
    , cityOfBirth = ""
    , countryOfBirth = ""
    , gender = Nothing
    , raceEthnicityOrTribalGroup = ""
    , nationality = ""
    , maritalStatus = Nothing
    , alienRegistrationNumber = ""
    , travelDocNumber = ""
    , socialSecurityNumber = ""
    , inUS = Nothing
    , currentLocation = ""
    , lastEntryDay = ""
    , lastEntryMonth = ""
    , lastEntryYear = ""
    , lastEntryPlace = ""
    , i94Number = ""
    , statusOnLastAdmission = ""
    , currentStatus = ""
    , statusExpirationDay = ""
    , statusExpirationMonth = ""
    , statusExpirationYear = ""
    , inImmigrationCourt = Nothing
    , includedInApplication = Nothing
    }


type alias AddressData =
    { lastAddressBeforeUS : GranularAddressWithDates
    , sameAsWhereFearsPersecution : Maybe Bool
    , lastAddressFearsPersecution : GranularAddressWithDates
    , pastResidences : List GranularAddressWithDates
    }


defaultAddressData : AddressData
defaultAddressData =
    { lastAddressBeforeUS = defaultGranularAddressWithDates
    , sameAsWhereFearsPersecution = Maybe.Nothing
    , lastAddressFearsPersecution = defaultGranularAddressWithDates
    , pastResidences = []
    }


type alias GranularAddressWithDates =
    { streetName : String
    , streetNumber : String
    , cityOrTown : String
    , departmentProvinceOrState : String
    , country : String
    , fromYear : String
    , fromMonth : String
    , toYear : String
    , toMonth : String
    }


defaultGranularAddressWithDates : GranularAddressWithDates
defaultGranularAddressWithDates =
    { streetName = ""
    , streetNumber = ""
    , cityOrTown = ""
    , departmentProvinceOrState = ""
    , country = ""
    , fromYear = ""
    , fromMonth = ""
    , toYear = ""
    , toMonth = ""
    }


type FormEntryElement
    = CurrentlyInUS
    | InUSLessThanOneYear
    | NotEligible
    | Name
    | Aliases
    | HomeAddress
    | HomeMailingSame
    | EnterMailingAddress
    | EnterGender
    | EnterMaritalStatus
    | BirthInfo
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
    | MostRecentEntry
    | MostRecentEntryExpiration
    | OtherEntries
    | HasPassport
    | HasOtherTravelDoc
    | TravelDocCountry
    | TravelDocNumber
    | TravelDocExpiration
    | SpouseName
    | SpouseAliases
    | SpouseBirth
    | SpouseNationality
    | SpouseGender
    | SpouseRaceEthnicity
    | SpouseAlienRegistration
    | SpouseTravelDoc
    | SpouseSSN
    | MarriageInfo
    | SpouseInUS
    | SpouseLocation
    | SpouseLastEntry
    | SpouseI94
    | SpouseCurrentStatus
    | SpousePreviousArrival
    | SpouseImmigrationCourt
    | SpouseIncluded
    | NumberOfChildren
    | ChildName Int
    | ChildBirth Int
    | ChildNationality Int
    | ChildGender Int
    | ChildRaceEthnicity Int
    | ChildMaritalStatus Int
    | ChildAlienRegistration Int
    | ChildTravelDoc Int
    | ChildSSN Int
    | ChildInUS Int
    | ChildLocation Int
    | ChildLastEntry Int
    | ChildI94 Int
    | ChildCurrentStatus Int
    | ChildImmigrationCourt Int
    | ChildIncluded Int
    | LastAddressBeforeUS


type SectionTitle
    = Eligibility
    | PersonalInfo
    | ImmigrationInfo
    | SpouseInfo
    | ChildInfo (Maybe Int)
    | AddressInfo


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
    | SetSpouseData SpouseData
    | SetNumChildren String
    | SetChildData Int ChildData
    | SetAddressData AddressData
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

        SetSpouseData d ->
            let
                s =
                    model.state

                newS =
                    { s | spouse = d }
            in
            ( { model | state = newS }, Cmd.none )

        SetNumChildren n ->
            let
                s =
                    model.state

                newNumChildren =
                    String.toInt n

                oldNumChildren =
                    model.state.numberOfChildren

                newChildList =
                    case newNumChildren of
                        Just newNum ->
                            case oldNumChildren of
                                Just oldNum ->
                                    if newNum > oldNum then
                                        List.append model.state.children (List.repeat (newNum - oldNum) defaultChildData)

                                    else if oldNum > newNum then
                                        List.take newNum model.state.children

                                    else
                                        model.state.children

                                _ ->
                                    List.repeat newNum defaultChildData

                        _ ->
                            []

                newS =
                    { s | numberOfChildren = newNumChildren, children = newChildList }
            in
            ( { model | state = newS }, Cmd.none )

        SetChildData n newChild ->
            let
                c =
                    model.state.children

                index =
                    n - 1

                updated =
                    List.Extra.setAt index newChild c

                s =
                    model.state

                newS =
                    { s | children = updated }
            in
            ( { model | state = newS }, Cmd.none )

        SetAddressData a ->
            let
                s =
                    model.state

                newS =
                    { s | addresses = a }
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
                        Name

                    Just False ->
                        NotEligible

                    Nothing ->
                        InUSLessThanOneYear

            else
                Name

        NotEligible ->
            NotEligible

        Name ->
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
            BirthInfo

        BirthInfo ->
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
            MostRecentEntry

        MostRecentEntry ->
            MostRecentEntryExpiration

        MostRecentEntryExpiration ->
            OtherEntries

        OtherEntries ->
            HasPassport

        HasPassport ->
            if model.state.personal.hasPassport == Just True then
                TravelDocCountry

            else
                HasOtherTravelDoc

        HasOtherTravelDoc ->
            if model.state.personal.hasOtherTravelDoc == Just True then
                TravelDocCountry

            else if model.state.personal.maritalStatus == Just MARRIED then
                SpouseName

            else
                NumberOfChildren

        TravelDocCountry ->
            TravelDocNumber

        TravelDocNumber ->
            TravelDocExpiration

        TravelDocExpiration ->
            if model.state.personal.maritalStatus == Just MARRIED then
                SpouseName

            else
                NumberOfChildren

        SpouseName ->
            SpouseAliases

        SpouseAliases ->
            SpouseBirth

        SpouseBirth ->
            SpouseNationality

        SpouseNationality ->
            SpouseGender

        SpouseGender ->
            SpouseRaceEthnicity

        SpouseRaceEthnicity ->
            SpouseAlienRegistration

        SpouseAlienRegistration ->
            SpouseTravelDoc

        SpouseTravelDoc ->
            SpouseSSN

        SpouseSSN ->
            MarriageInfo

        MarriageInfo ->
            SpouseInUS

        SpouseInUS ->
            if model.state.spouse.inUS == Just False then
                SpouseLocation

            else
                SpouseLastEntry

        SpouseLocation ->
            NumberOfChildren

        SpouseLastEntry ->
            SpouseI94

        SpouseI94 ->
            SpouseCurrentStatus

        SpouseCurrentStatus ->
            SpousePreviousArrival

        SpousePreviousArrival ->
            SpouseImmigrationCourt

        SpouseImmigrationCourt ->
            SpouseIncluded

        SpouseIncluded ->
            NumberOfChildren

        NumberOfChildren ->
            case model.state.numberOfChildren of
                Just n ->
                    if n > 0 then
                        ChildName 1

                    else
                        LastAddressBeforeUS

                _ ->
                    LastAddressBeforeUS

        ChildName n ->
            ChildBirth n

        ChildBirth n ->
            ChildNationality n

        ChildNationality n ->
            ChildGender n

        ChildGender n ->
            ChildRaceEthnicity n

        ChildRaceEthnicity n ->
            ChildMaritalStatus n

        ChildMaritalStatus n ->
            ChildAlienRegistration n

        ChildAlienRegistration n ->
            ChildTravelDoc n

        ChildTravelDoc n ->
            ChildSSN n

        ChildSSN n ->
            ChildInUS n

        ChildInUS n ->
            let
                child =
                    getChildByIndex n model.state.children
            in
            if child.inUS == Just True then
                ChildLastEntry n

            else
                ChildLocation n

        ChildLocation n ->
            case model.state.numberOfChildren of
                Just numChildren ->
                    if numChildren > n then
                        ChildName (n + 1)

                    else
                        LastAddressBeforeUS

                _ ->
                    LastAddressBeforeUS

        ChildLastEntry n ->
            ChildI94 n

        ChildI94 n ->
            ChildCurrentStatus n

        ChildCurrentStatus n ->
            ChildImmigrationCourt n

        ChildImmigrationCourt n ->
            ChildIncluded n

        ChildIncluded n ->
            case model.state.numberOfChildren of
                Just numChildren ->
                    if numChildren > n then
                        ChildName (n + 1)

                    else
                        LastAddressBeforeUS

                _ ->
                    LastAddressBeforeUS

        LastAddressBeforeUS ->
            LastAddressBeforeUS


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

        Name ->
            InUSLessThanOneYear

        Aliases ->
            Name

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

        BirthInfo ->
            EnterMaritalStatus

        PresentNationality ->
            BirthInfo

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

        MostRecentEntry ->
            LeftHomeCountry

        MostRecentEntryExpiration ->
            MostRecentEntry

        OtherEntries ->
            MostRecentEntryExpiration

        HasPassport ->
            OtherEntries

        HasOtherTravelDoc ->
            HasPassport

        TravelDocCountry ->
            if model.state.personal.hasPassport == Just True then
                HasPassport

            else
                HasOtherTravelDoc

        TravelDocNumber ->
            TravelDocCountry

        TravelDocExpiration ->
            TravelDocNumber

        SpouseName ->
            if model.state.personal.hasPassport == Just False && model.state.personal.hasOtherTravelDoc == Just False then
                HasOtherTravelDoc

            else
                TravelDocExpiration

        SpouseAliases ->
            SpouseName

        SpouseBirth ->
            SpouseAliases

        SpouseNationality ->
            SpouseBirth

        SpouseGender ->
            SpouseNationality

        SpouseRaceEthnicity ->
            SpouseGender

        SpouseAlienRegistration ->
            SpouseRaceEthnicity

        SpouseTravelDoc ->
            SpouseAlienRegistration

        SpouseSSN ->
            SpouseTravelDoc

        MarriageInfo ->
            SpouseSSN

        SpouseInUS ->
            MarriageInfo

        SpouseLocation ->
            SpouseInUS

        SpouseLastEntry ->
            SpouseInUS

        SpouseI94 ->
            SpouseLastEntry

        SpouseCurrentStatus ->
            SpouseI94

        SpousePreviousArrival ->
            SpouseCurrentStatus

        SpouseImmigrationCourt ->
            SpousePreviousArrival

        SpouseIncluded ->
            SpouseImmigrationCourt

        NumberOfChildren ->
            if model.state.personal.maritalStatus == Just MARRIED then
                if model.state.spouse.inUS == Just False then
                    SpouseLocation

                else
                    SpouseIncluded

            else
                TravelDocExpiration

        ChildName n ->
            if n <= 1 then
                NumberOfChildren

            else
                ChildBirth (n - 1)

        ChildBirth n ->
            ChildName n

        ChildNationality n ->
            ChildBirth n

        ChildGender n ->
            ChildNationality n

        ChildRaceEthnicity n ->
            ChildGender n

        ChildMaritalStatus n ->
            ChildRaceEthnicity n

        ChildAlienRegistration n ->
            ChildMaritalStatus n

        ChildTravelDoc n ->
            ChildAlienRegistration n

        ChildSSN n ->
            ChildTravelDoc n

        ChildInUS n ->
            ChildSSN n

        ChildLocation n ->
            ChildInUS n

        ChildLastEntry n ->
            ChildInUS n

        ChildI94 n ->
            ChildLastEntry n

        ChildCurrentStatus n ->
            ChildI94 n

        ChildImmigrationCourt n ->
            ChildCurrentStatus n

        ChildIncluded n ->
            ChildImmigrationCourt n

        LastAddressBeforeUS ->
            case model.state.numberOfChildren of
                Just n ->
                    if n > 0 then
                        let
                            child =
                                getChildByIndex n model.state.children
                        in
                        case child.inUS of
                            Just True ->
                                ChildIncluded n

                            Just False ->
                                ChildLocation n

                            Nothing ->
                                ChildInUS n

                    else
                        NumberOfChildren

                _ ->
                    NumberOfChildren


getSectionFromElement : FormEntryElement -> SectionTitle
getSectionFromElement element =
    case element of
        CurrentlyInUS ->
            Eligibility

        InUSLessThanOneYear ->
            Eligibility

        NotEligible ->
            Eligibility

        Name ->
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

        BirthInfo ->
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
            ImmigrationInfo

        I94 ->
            ImmigrationInfo

        AlienRegistration ->
            ImmigrationInfo

        SSN ->
            ImmigrationInfo

        USCISAccount ->
            ImmigrationInfo

        LeftHomeCountry ->
            ImmigrationInfo

        MostRecentEntry ->
            ImmigrationInfo

        MostRecentEntryExpiration ->
            ImmigrationInfo

        OtherEntries ->
            ImmigrationInfo

        HasPassport ->
            ImmigrationInfo

        HasOtherTravelDoc ->
            ImmigrationInfo

        TravelDocCountry ->
            ImmigrationInfo

        TravelDocNumber ->
            ImmigrationInfo

        TravelDocExpiration ->
            ImmigrationInfo

        SpouseName ->
            SpouseInfo

        SpouseAliases ->
            SpouseInfo

        SpouseBirth ->
            SpouseInfo

        SpouseNationality ->
            SpouseInfo

        SpouseGender ->
            SpouseInfo

        SpouseRaceEthnicity ->
            SpouseInfo

        SpouseAlienRegistration ->
            SpouseInfo

        SpouseTravelDoc ->
            SpouseInfo

        SpouseSSN ->
            SpouseInfo

        MarriageInfo ->
            SpouseInfo

        SpouseInUS ->
            SpouseInfo

        SpouseLocation ->
            SpouseInfo

        SpouseLastEntry ->
            SpouseInfo

        SpouseI94 ->
            SpouseInfo

        SpouseCurrentStatus ->
            SpouseInfo

        SpousePreviousArrival ->
            SpouseInfo

        SpouseImmigrationCourt ->
            SpouseInfo

        SpouseIncluded ->
            SpouseInfo

        NumberOfChildren ->
            ChildInfo Nothing

        ChildName n ->
            ChildInfo (Just n)

        ChildBirth n ->
            ChildInfo (Just n)

        ChildNationality n ->
            ChildInfo (Just n)

        ChildGender n ->
            ChildInfo (Just n)

        ChildRaceEthnicity n ->
            ChildInfo (Just n)

        ChildMaritalStatus n ->
            ChildInfo (Just n)

        ChildAlienRegistration n ->
            ChildInfo (Just n)

        ChildTravelDoc n ->
            ChildInfo (Just n)

        ChildSSN n ->
            ChildInfo (Just n)

        ChildInUS n ->
            ChildInfo (Just n)

        ChildLocation n ->
            ChildInfo (Just n)

        ChildLastEntry n ->
            ChildInfo (Just n)

        ChildI94 n ->
            ChildInfo (Just n)

        ChildCurrentStatus n ->
            ChildInfo (Just n)

        ChildImmigrationCourt n ->
            ChildInfo (Just n)

        ChildIncluded n ->
            ChildInfo (Just n)

        LastAddressBeforeUS ->
            AddressInfo


validate : Model -> Bool
validate model =
    let
        elig =
            model.state.eligibility

        d =
            model.state.personal

        s =
            model.state.spouse

        c =
            model.state.children
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

            Name ->
                d.firstName /= "" && d.lastName /= ""

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

            BirthInfo ->
                d.yearOfBirth /= "" && d.monthOfBirth /= "" && d.dayOfBirth /= "" && d.countryOfBirth /= "" && d.cityOfBirth /= ""

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

            MostRecentEntry ->
                let
                    e =
                        d.mostRecentEntry
                in
                e.day /= "" && e.month /= "" && e.year /= "" && e.place /= "" && e.status /= ""

            MostRecentEntryExpiration ->
                d.entryExpirationDay /= "" && d.entryExpirationMonth /= "" && d.entryExpirationYear /= ""

            OtherEntries ->
                True

            HasPassport ->
                d.hasPassport /= Nothing

            HasOtherTravelDoc ->
                d.hasOtherTravelDoc /= Nothing

            TravelDocCountry ->
                d.travelDocCountry /= ""

            TravelDocNumber ->
                d.travelDocNumber /= ""

            TravelDocExpiration ->
                d.travelDocExpirationDay /= "" && d.travelDocExpirationMonth /= "" && d.travelDocExpirationYear /= ""

            SpouseName ->
                s.firstName /= "" && s.lastName /= ""

            SpouseAliases ->
                True

            SpouseBirth ->
                s.cityOfBirth /= "" && s.countryOfBirth /= "" && s.dayOfBirth /= "" && s.monthOfBirth /= "" && s.yearOfBirth /= ""

            SpouseNationality ->
                s.nationality /= ""

            SpouseGender ->
                s.gender /= Nothing

            SpouseRaceEthnicity ->
                s.raceEthnicityOrTribalGroup /= ""

            SpouseAlienRegistration ->
                True

            SpouseTravelDoc ->
                True

            SpouseSSN ->
                True

            MarriageInfo ->
                s.placeOfMarriage /= "" && s.marriageDay /= "" && s.marriageMonth /= "" && s.marriageYear /= ""

            SpouseInUS ->
                s.inUS /= Nothing

            SpouseLocation ->
                s.currentLocation /= ""

            SpouseLastEntry ->
                s.lastEntryDay /= "" && s.lastEntryMonth /= "" && s.lastEntryYear /= "" && s.lastEntryPlace /= "" && s.statusOnLastAdmission /= ""

            SpouseI94 ->
                True

            SpouseCurrentStatus ->
                s.currentStatus /= ""

            SpousePreviousArrival ->
                True

            SpouseImmigrationCourt ->
                s.inImmigrationCourt /= Nothing

            SpouseIncluded ->
                s.includedInApplication /= Nothing

            NumberOfChildren ->
                True

            ChildName n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.firstName /= "" && child.lastName /= ""

                    _ ->
                        True

            ChildBirth n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.cityOfBirth /= "" && child.countryOfBirth /= "" && child.dayOfBirth /= "" && child.monthOfBirth /= "" && child.yearOfBirth /= ""

                    _ ->
                        True

            ChildNationality n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.nationality /= ""

                    _ ->
                        True

            ChildGender n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.gender /= Nothing

                    _ ->
                        True

            ChildRaceEthnicity n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.raceEthnicityOrTribalGroup /= ""

                    _ ->
                        True

            ChildMaritalStatus n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.maritalStatus /= Nothing

                    _ ->
                        True

            ChildAlienRegistration n ->
                True

            ChildTravelDoc n ->
                True

            ChildSSN n ->
                True

            ChildInUS n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.inUS /= Nothing

                    _ ->
                        True

            ChildLocation n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.currentLocation /= ""

                    _ ->
                        True

            ChildLastEntry n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.lastEntryDay /= "" && child.lastEntryMonth /= "" && child.lastEntryYear /= "" && child.lastEntryPlace /= "" && child.statusOnLastAdmission /= ""

                    _ ->
                        True

            ChildI94 n ->
                True

            ChildCurrentStatus n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.currentStatus /= ""

                    _ ->
                        True

            ChildImmigrationCourt n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.inImmigrationCourt /= Nothing

                    _ ->
                        True

            ChildIncluded n ->
                let
                    maybeChild =
                        List.Extra.getAt (n - 1) c
                in
                case maybeChild of
                    Just child ->
                        child.includedInApplication /= Nothing

                    _ ->
                        True

            LastAddressBeforeUS ->
                True

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
render element model =
    let
        elig =
            model.state.eligibility

        d =
            model.state.personal

        s =
            model.state.spouse

        c =
            model.state.children
    in
    case element of
        CurrentlyInUS ->
            yesNoCheckBox model "currently-in-us" elig.currentlyInUS (\r -> SetEligibility { elig | currentlyInUS = r })

        InUSLessThanOneYear ->
            yesNoCheckBox model "less-than-one-year" elig.lessThanOneYear (\r -> SetEligibility { elig | lessThanOneYear = r })

        NotEligible ->
            centerWrap [ prompt model [] "not-eligible-explanation", backButton model ]

        Name ->
            nextBackWrap model
                [ prompt model [] "name-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "first-name" d.firstName (\r -> SetPersonalData { d | firstName = r })
                    , labeledTextInput model "middle-name" d.middleName (\r -> SetPersonalData { d | middleName = r })
                    , labeledTextInput model "last-name" d.lastName (\r -> SetPersonalData { d | lastName = r })
                    ]
                ]

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
            yesNoCheckBox model "home-mailing-same-text" d.homeMailingSame (\r -> SetPersonalData { d | homeMailingSame = r })

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
            genderSelector model d.gender "enter-gender" (\r -> SetPersonalData { d | gender = r })

        EnterMaritalStatus ->
            maritalStatusSelector model "enter-marital-status" d.maritalStatus (\r -> SetPersonalData { d | maritalStatus = r })

        BirthInfo ->
            let
                month =
                    d.monthOfBirth

                monthUpdate =
                    \r -> SetPersonalData { d | monthOfBirth = r }

                day =
                    d.dayOfBirth

                dayUpdate =
                    \r -> SetPersonalData { d | dayOfBirth = r }

                year =
                    d.yearOfBirth

                yearUpdate =
                    \r -> SetPersonalData { d | yearOfBirth = r }
            in
            nextBackWrap model
                [ prompt model [] "birth-prompt"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "city" d.cityOfBirth (\r -> SetPersonalData { d | cityOfBirth = r })
                    , labeledTextInput model "country" d.countryOfBirth (\r -> SetPersonalData { d | countryOfBirth = r })
                    ]
                ]

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
            yesNoCheckBox model "fluent-in-english-entry" d.fluentInEnglish (\r -> SetPersonalData { d | fluentInEnglish = r })

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

                monthUpdate =
                    \r -> SetPersonalData { d | lastLeftHomeCountryMonth = r }

                day =
                    d.lastLeftHomeCountryDay

                dayUpdate =
                    \r -> SetPersonalData { d | lastLeftHomeCountryDay = r }

                year =
                    d.lastLeftHomeCountryYear

                yearUpdate =
                    \r -> SetPersonalData { d | lastLeftHomeCountryYear = r }
            in
            nextBackWrap model
                [ prompt model [] "left-home-country-entry"
                , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                ]

        MostRecentEntry ->
            let
                e =
                    d.mostRecentEntry

                day =
                    e.day

                dayUpdate =
                    \r -> SetPersonalData { d | mostRecentEntry = { e | day = r } }

                month =
                    e.month

                monthUpdate =
                    \r -> SetPersonalData { d | mostRecentEntry = { e | month = r } }

                year =
                    e.year

                yearUpdate =
                    \r -> SetPersonalData { d | mostRecentEntry = { e | year = r } }
            in
            nextBackWrap model
                [ prompt model [] "most-recent-entry-prompt"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "place" e.place (\r -> SetPersonalData { d | mostRecentEntry = { e | place = r } })
                    , labeledTextInput model "immigration-status" e.status (\r -> SetPersonalData { d | mostRecentEntry = { e | status = r } })
                    ]
                ]

        MostRecentEntryExpiration ->
            let
                day =
                    d.entryExpirationDay

                dayUpdate =
                    \r -> SetPersonalData { d | entryExpirationDay = r }

                month =
                    d.entryExpirationMonth

                monthUpdate =
                    \r -> SetPersonalData { d | entryExpirationMonth = r }

                year =
                    d.entryExpirationYear

                yearUpdate =
                    \r -> SetPersonalData { d | entryExpirationYear = r }
            in
            nextBackWrap model
                [ prompt model [] "status-expiration-prompt"
                , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                ]

        OtherEntries ->
            let
                day =
                    d.currentEntryDay

                dayUpdate =
                    \r -> SetPersonalData { d | currentEntryDay = r }

                month =
                    d.currentEntryMonth

                monthUpdate =
                    \r -> SetPersonalData { d | currentEntryMonth = r }

                year =
                    d.currentEntryYear

                yearUpdate =
                    \r -> SetPersonalData { d | currentEntryYear = r }

                place =
                    d.currentEntryPlace

                placeUpdate =
                    \r -> SetPersonalData { d | currentEntryPlace = r }

                status =
                    d.currentEntryStatus

                statusUpdate =
                    \r -> SetPersonalData { d | currentEntryStatus = r }

                updatedEntries =
                    if day /= "" && month /= "" && year /= "" && place /= "" && status /= "" then
                        List.append d.otherEntries
                            [ { day = day
                              , month = month
                              , year = year
                              , place = place
                              , status = status
                              }
                            ]

                    else
                        d.otherEntries

                submitFunction =
                    SetPersonalData { d | otherEntries = updatedEntries, currentEntryDay = "", currentEntryMonth = "", currentEntryYear = "", currentEntryPlace = "", currentEntryStatus = "" }
            in
            nextBackWrap model
                [ prompt model [] "other-entries-prompt"
                , div [ css [ displayFlex, flexDirection column, alignItems center ] ]
                    [ form [ onSubmit submitFunction ]
                        [ div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                            [ labeledTextInput model "place" place placeUpdate
                            , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                            , labeledTextInput model "immigration-status" status statusUpdate
                            , button
                                [ type_ "submit"
                                , css [ activeButtonStyles ]
                                ]
                                [ text (i18n model "add") ]
                            ]
                        ]
                    , removeList model d.otherEntries "us-entries" printEntry (\r -> SetPersonalData { d | otherEntries = r })
                    ]
                ]

        HasPassport ->
            yesNoCheckBox model "has-passport-entry" d.hasPassport (\r -> SetPersonalData { d | hasPassport = r })

        HasOtherTravelDoc ->
            yesNoCheckBox model "has-other-travel-doc-entry" d.hasOtherTravelDoc (\r -> SetPersonalData { d | hasOtherTravelDoc = r })

        TravelDocCountry ->
            let
                promptId =
                    if d.hasPassport == Just True then
                        "passport-country-entry"

                    else
                        "travel-doc-country-entry"
            in
            singleTextEntry model promptId d.travelDocCountry (\r -> SetPersonalData { d | travelDocCountry = r })

        TravelDocNumber ->
            let
                promptId =
                    if d.hasPassport == Just True then
                        "passport-number-entry"

                    else
                        "travel-doc-number-entry"
            in
            singleTextEntry model promptId d.travelDocNumber (\r -> SetPersonalData { d | travelDocNumber = r })

        TravelDocExpiration ->
            let
                promptId =
                    if d.hasPassport == Just True then
                        "passport-expiration-entry"

                    else
                        "travel-doc-expiration-entry"

                day =
                    d.travelDocExpirationDay

                dayUpdate =
                    \r -> SetPersonalData { d | travelDocExpirationDay = r }

                month =
                    d.travelDocExpirationMonth

                monthUpdate =
                    \r -> SetPersonalData { d | travelDocExpirationMonth = r }

                year =
                    d.travelDocExpirationYear

                yearUpdate =
                    \r -> SetPersonalData { d | travelDocExpirationYear = r }
            in
            nextBackWrap model
                [ prompt model [] promptId
                , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                ]

        SpouseName ->
            nextBackWrap model
                [ prompt model [] "spouse-name-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "first-name" s.firstName (\r -> SetSpouseData { s | firstName = r })
                    , labeledTextInput model "middle-name" s.middleName (\r -> SetSpouseData { s | middleName = r })
                    , labeledTextInput model "last-name" s.lastName (\r -> SetSpouseData { s | lastName = r })
                    ]
                ]

        SpouseAliases ->
            multiTextEntry model s.currentAliasInput s.aliases "spouse-aliases-entry" "aliases" (\r -> SetSpouseData { s | currentAliasInput = r }) (\r -> SetSpouseData { s | currentAliasInput = "", aliases = r }) (\r -> SetSpouseData { s | aliases = r })

        SpouseBirth ->
            let
                day =
                    s.dayOfBirth

                dayUpdate =
                    \r -> SetSpouseData { s | dayOfBirth = r }

                month =
                    s.monthOfBirth

                monthUpdate =
                    \r -> SetSpouseData { s | monthOfBirth = r }

                year =
                    s.yearOfBirth

                yearUpdate =
                    \r -> SetSpouseData { s | yearOfBirth = r }
            in
            nextBackWrap model
                [ prompt model [] "spouse-birth"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "city" s.cityOfBirth (\r -> SetSpouseData { s | cityOfBirth = r })
                    , labeledTextInput model "country" s.countryOfBirth (\r -> SetSpouseData { s | countryOfBirth = r })
                    ]
                ]

        SpouseNationality ->
            singleTextEntry model "spouse-nationality" s.nationality (\r -> SetSpouseData { s | nationality = r })

        SpouseGender ->
            genderSelector model s.gender "spouse-enter-gender" (\r -> SetSpouseData { s | gender = r })

        SpouseRaceEthnicity ->
            singleTextEntry model "spouse-race-ethnicity" s.raceEthnicityOrTribalGroup (\r -> SetSpouseData { s | raceEthnicityOrTribalGroup = r })

        SpouseAlienRegistration ->
            singleTextEntry model "spouse-alien-registration" s.alienRegistrationNumber (\r -> SetSpouseData { s | alienRegistrationNumber = r })

        SpouseTravelDoc ->
            singleTextEntry model "spouse-travel-number" s.travelDocNumber (\r -> SetSpouseData { s | travelDocNumber = r })

        SpouseSSN ->
            singleTextEntry model "spouse-ssn" s.socialSecurityNumber (\r -> SetSpouseData { s | socialSecurityNumber = r })

        MarriageInfo ->
            let
                day =
                    s.marriageDay

                dayUpdate =
                    \r -> SetSpouseData { s | marriageDay = r }

                month =
                    s.marriageMonth

                monthUpdate =
                    \r -> SetSpouseData { s | marriageMonth = r }

                year =
                    s.marriageYear

                yearUpdate =
                    \r -> SetSpouseData { s | marriageYear = r }
            in
            nextBackWrap model
                [ prompt model [] "marriage-info-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "place" s.placeOfMarriage (\r -> SetSpouseData { s | placeOfMarriage = r })
                    , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    ]
                ]

        SpouseInUS ->
            yesNoCheckBox model "spouse-in-us-prompt" s.inUS (\r -> SetSpouseData { s | inUS = r })

        SpouseLocation ->
            singleTextEntry model "spouse-location-entry" s.currentLocation (\r -> SetSpouseData { s | currentLocation = r })

        SpouseLastEntry ->
            let
                day =
                    s.lastEntryDay

                dayUpdate =
                    \r -> SetSpouseData { s | lastEntryDay = r }

                month =
                    s.lastEntryMonth

                monthUpdate =
                    \r -> SetSpouseData { s | lastEntryMonth = r }

                year =
                    s.lastEntryYear

                yearUpdate =
                    \r -> SetSpouseData { s | lastEntryYear = r }
            in
            nextBackWrap model
                [ prompt model [] "spouse-last-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "place" s.lastEntryPlace (\r -> SetSpouseData { s | lastEntryPlace = r })
                    , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "immigration-status" s.statusOnLastAdmission (\r -> SetSpouseData { s | statusOnLastAdmission = r })
                    ]
                ]

        SpouseI94 ->
            singleTextEntry model "spouse-i94-entry" s.i94Number (\r -> SetSpouseData { s | i94Number = r })

        SpouseCurrentStatus ->
            let
                day =
                    s.statusExpirationDay

                dayUpdate =
                    \r -> SetSpouseData { s | statusExpirationDay = r }

                month =
                    s.statusExpirationMonth

                monthUpdate =
                    \r -> SetSpouseData { s | statusExpirationMonth = r }

                year =
                    s.statusExpirationYear

                yearUpdate =
                    \r -> SetSpouseData { s | statusExpirationYear = r }
            in
            nextBackWrap model
                [ prompt model [] "spouse-current-status"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "immigration-status" s.currentStatus (\r -> SetSpouseData { s | currentStatus = r })
                    , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    ]
                ]

        SpousePreviousArrival ->
            let
                day =
                    s.previousEntryDay

                dayUpdate =
                    \r -> SetSpouseData { s | previousEntryDay = r }

                month =
                    s.previousEntryMonth

                monthUpdate =
                    \r -> SetSpouseData { s | previousEntryMonth = r }

                year =
                    s.previousEntryYear

                yearUpdate =
                    \r -> SetSpouseData { s | previousEntryYear = r }
            in
            nextBackWrap model
                [ prompt model [] "previous-entry-prompt"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    ]
                ]

        SpouseImmigrationCourt ->
            yesNoCheckBox model "spouse-in-court" s.inImmigrationCourt (\r -> SetSpouseData { s | inImmigrationCourt = r })

        SpouseIncluded ->
            yesNoCheckBox model "spouse-include" s.includedInApplication (\r -> SetSpouseData { s | includedInApplication = r })

        NumberOfChildren ->
            let
                numChildren =
                    Maybe.withDefault "" (Maybe.map String.fromInt model.state.numberOfChildren)
            in
            nextBackWrap model
                [ prompt model [] "number-of-children-prompt"
                , select
                    [ onInput SetNumChildren
                    , css
                        [ dropdownStyles
                        ]
                    ]
                    (List.map (\r -> option [ Html.Styled.Attributes.selected (r == numChildren) ] [ text r ]) numChildrenList)
                ]

        ChildName n ->
            let
                child =
                    getChildByIndex n c
            in
            nextBackWrap model
                [ prompt model [] "child-name-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "first-name" child.firstName (\r -> SetChildData n { child | firstName = r })
                    , labeledTextInput model "middle-name" child.middleName (\r -> SetChildData n { child | middleName = r })
                    , labeledTextInput model "last-name" child.lastName (\r -> SetChildData n { child | lastName = r })
                    ]
                ]

        ChildBirth n ->
            let
                child =
                    getChildByIndex n c

                day =
                    child.dayOfBirth

                dayUpdate =
                    \r -> SetChildData n { child | dayOfBirth = r }

                month =
                    child.monthOfBirth

                monthUpdate =
                    \r -> SetChildData n { child | monthOfBirth = r }

                year =
                    child.yearOfBirth

                yearUpdate =
                    \r -> SetChildData n { child | yearOfBirth = r }
            in
            nextBackWrap model
                [ prompt model [] "child-birth"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "city" child.cityOfBirth (\r -> SetChildData n { child | cityOfBirth = r })
                    , labeledTextInput model "country" child.countryOfBirth (\r -> SetChildData n { child | countryOfBirth = r })
                    ]
                ]

        ChildNationality n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-nationality" child.nationality (\r -> SetChildData n { child | nationality = r })

        ChildGender n ->
            let
                child =
                    getChildByIndex n c
            in
            genderSelector model child.gender "child-enter-gender" (\r -> SetChildData n { child | gender = r })

        ChildRaceEthnicity n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-race-ethnicity" child.raceEthnicityOrTribalGroup (\r -> SetChildData n { child | raceEthnicityOrTribalGroup = r })

        ChildMaritalStatus n ->
            let
                child =
                    getChildByIndex n c
            in
            maritalStatusSelector model "child-marital-status" child.maritalStatus (\r -> SetChildData n { child | maritalStatus = r })

        ChildAlienRegistration n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-alien-registration" child.alienRegistrationNumber (\r -> SetChildData n { child | alienRegistrationNumber = r })

        ChildTravelDoc n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-travel-doc-number" child.travelDocNumber (\r -> SetChildData n { child | travelDocNumber = r })

        ChildSSN n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-ssn" child.socialSecurityNumber (\r -> SetChildData n { child | socialSecurityNumber = r })

        ChildInUS n ->
            let
                child =
                    getChildByIndex n c
            in
            yesNoCheckBox model "child-in-us-prompt" child.inUS (\r -> SetChildData n { child | inUS = r })

        ChildLocation n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-current-location" child.currentLocation (\r -> SetChildData n { child | currentLocation = r })

        ChildLastEntry n ->
            let
                child =
                    getChildByIndex n c

                day =
                    child.lastEntryDay

                dayUpdate =
                    \r -> SetChildData n { child | lastEntryDay = r }

                month =
                    child.lastEntryMonth

                monthUpdate =
                    \r -> SetChildData n { child | lastEntryMonth = r }

                year =
                    child.lastEntryYear

                yearUpdate =
                    \r -> SetChildData n { child | lastEntryYear = r }
            in
            nextBackWrap model
                [ prompt model [] "child-last-entry"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "place" child.lastEntryPlace (\r -> SetChildData n { child | lastEntryPlace = r })
                    , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    , labeledTextInput model "immigration-status" child.statusOnLastAdmission (\r -> SetChildData n { child | statusOnLastAdmission = r })
                    ]
                ]

        ChildI94 n ->
            let
                child =
                    getChildByIndex n c
            in
            singleTextEntry model "child-i94" child.i94Number (\r -> SetChildData n { child | i94Number = r })

        ChildCurrentStatus n ->
            let
                child =
                    getChildByIndex n c

                day =
                    child.statusExpirationDay

                dayUpdate =
                    \r -> SetChildData n { child | statusExpirationDay = r }

                month =
                    child.statusExpirationMonth

                monthUpdate =
                    \r -> SetChildData n { child | statusExpirationMonth = r }

                year =
                    child.statusExpirationYear

                yearUpdate =
                    \r -> SetChildData n { child | statusExpirationYear = r }
            in
            nextBackWrap model
                [ prompt model [] "child-current-status"
                , div [ css [ displayFlex, flexDirection row, alignItems flexEnd, flexWrap wrap ] ]
                    [ labeledTextInput model "immigration-status" child.currentStatus (\r -> SetChildData n { child | currentStatus = r })
                    , dateSelector model day dayUpdate month monthUpdate year yearUpdate
                    ]
                ]

        ChildImmigrationCourt n ->
            let
                child =
                    getChildByIndex n c
            in
            yesNoCheckBox model "child-in-court" child.inImmigrationCourt (\r -> SetChildData n { child | inImmigrationCourt = r })

        ChildIncluded n ->
            let
                child =
                    getChildByIndex n c
            in
            yesNoCheckBox model "child-included" child.includedInApplication (\r -> SetChildData n { child | includedInApplication = r })

        LastAddressBeforeUS ->
            let
                a =
                    model.state.addresses

                last =
                    a.lastAddressBeforeUS
            in
            nextBackWrap model
                [ prompt model [] "last-address-entry"
                , div [ css [ property "display" "grid", property "grid-template-columns" "1fr 4fr", alignItems center, justifyContent center, alignSelf flexStart, flexWrap wrap ] ]
                    [ textInput last.streetNumber (i18n model "street-number") [ property "grid-column" "1/2" ] (\r -> SetAddressData { a | lastAddressBeforeUS = { last | streetNumber = r } })
                    , textInput last.streetName (i18n model "street-name") [ property "grid-column" "2/3" ] (\r -> SetAddressData { a | lastAddressBeforeUS = { last | streetName = r } })
                    ]
                , div [ css [ alignSelf flexStart, property "display" "grid", property "grid-template-columns" "1fr 2fr 1fr", alignItems center, justifyContent center, flexWrap wrap ] ]
                    [ textInput last.cityOrTown (i18n model "city") [ property "grid-column" "1/2" ] (\r -> SetAddressData { a | lastAddressBeforeUS = { last | cityOrTown = r } })
                    , textInput last.departmentProvinceOrState (i18n model "department-province-state") [ property "grid-column" "2/3" ] (\r -> SetAddressData { a | lastAddressBeforeUS = { last | departmentProvinceOrState = r } })
                    , textInput last.country (i18n model "country") [ property "grid-column" "3/4" ] (\r -> SetAddressData { a | lastAddressBeforeUS = { last | country = r } })
                    ]
                , div [ css [ property "display" "grid", property "grid-template-columns" "1fr 1fr 1fr 1fr", property "grid-template-rows" "1fr 2fr 2fr", property "column-gap" "10px", alignItems center, justifyContent center ] ]
                    [ div [ css [ textAlign center, property "grid-column" "1/3", property "grid-row" "1/2" ] ] [ text (i18n model "from") ]
                    , div [ css [ textAlign center, property "grid-column" "1/2", property "grid-row" "2/3" ] ] [ text (i18n model "month") ]
                    , select
                        [ onInput (\r -> SetAddressData { a | lastAddressBeforeUS = { last | fromMonth = r } })
                        , css
                            [ dropdownStyles
                            , property "grid-column" "1/2"
                            , property "grid-row" "3/4"
                            ]
                        ]
                        (List.map (\r -> option [ Html.Styled.Attributes.selected (r == last.fromMonth) ] [ text r ]) monthList)
                    , div [ css [ textAlign center, property "grid-column" "2/3", property "grid-row" "2/3" ] ] [ text (i18n model "year") ]
                    , select
                        [ onInput (\r -> SetAddressData { a | lastAddressBeforeUS = { last | fromYear = r } })
                        , css
                            [ dropdownStyles
                            , property "grid-column" "2/3"
                            , property "grid-row" "3/4"
                            ]
                        ]
                        (List.map (\r -> option [ Html.Styled.Attributes.selected (r == last.fromYear) ] [ text r ]) (yearList model.currentYear))
                    , div [ css [ textAlign center, property "grid-column" "3/5", property "grid-row" "1/2" ] ] [ text (i18n model "to") ]
                    , div [ css [ textAlign center, property "grid-column" "3/4", property "grid-row" "2/3" ] ] [ text (i18n model "month") ]
                    , select
                        [ onInput (\r -> SetAddressData { a | lastAddressBeforeUS = { last | toMonth = r } })
                        , css
                            [ dropdownStyles
                            , property "grid-column" "3/4"
                            , property "grid-row" "3/4"
                            ]
                        ]
                        (List.map (\r -> option [ Html.Styled.Attributes.selected (r == last.toMonth) ] [ text r ]) monthList)
                    , div [ css [ textAlign center, property "grid-column" "4/5", property "grid-row" "2/3" ] ] [ text (i18n model "year") ]
                    , select
                        [ onInput (\r -> SetAddressData { a | lastAddressBeforeUS = { last | toYear = r } })
                        , css
                            [ dropdownStyles
                            , property "grid-column" "4/5"
                            , property "grid-row" "3/4"
                            ]
                        ]
                        (List.map (\r -> option [ Html.Styled.Attributes.selected (r == last.toYear) ] [ text r ]) (yearList model.currentYear))
                    ]
                ]



-- View end
-- Misc


getChildByIndex : Int -> List ChildData -> ChildData
getChildByIndex n c =
    Maybe.withDefault defaultChildData (List.Extra.getAt (n - 1) c)


printEntry : ExpandableTravelEvent -> String
printEntry e =
    String.concat [ e.place, ", ", e.month, "/", e.day, "/", e.year, ", ", e.status ]


monthList : List String
monthList =
    [ "", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]


numChildrenList : List String
numChildrenList =
    "" :: List.map String.fromInt (List.range 0 20)


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


maritalStatusSelector : Model -> String -> Maybe MaritalStatus -> (Maybe MaritalStatus -> Msg) -> Html Msg
maritalStatusSelector model promptId status updateFunction =
    let
        singleChecked =
            status == Just SINGLE

        marriedChecked =
            status == Just MARRIED

        divorcedChecked =
            status == Just DIVORCED

        widowedChecked =
            status == Just WIDOWED
    in
    nextBackWrap model
        [ prompt model [] promptId
        , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
            [ checkBox model singleChecked "single" updateFunction (setMaybe singleChecked SINGLE)
            , checkBox model marriedChecked "married" updateFunction (setMaybe marriedChecked MARRIED)
            , checkBox model divorcedChecked "divorced" updateFunction (setMaybe divorcedChecked DIVORCED)
            , checkBox model widowedChecked "widowed" updateFunction (setMaybe widowedChecked WIDOWED)
            ]
        ]


genderSelector : Model -> Maybe Gender -> String -> (Maybe Gender -> Msg) -> Html Msg
genderSelector model currentGender promptId updateFunction =
    let
        maleChecked =
            case currentGender of
                Just MALE ->
                    True

                _ ->
                    False

        femaleChecked =
            case currentGender of
                Just FEMALE ->
                    True

                _ ->
                    False
    in
    nextBackWrap model
        [ prompt model [] promptId
        , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
            [ checkBox model maleChecked "male" updateFunction (setMaybe maleChecked MALE)
            , checkBox model femaleChecked "female" updateFunction (setMaybe femaleChecked FEMALE)
            ]
        ]


yesNoCheckBox : Model -> String -> Maybe Bool -> (Maybe Bool -> Msg) -> Html Msg
yesNoCheckBox model promptId value updateFunction =
    let
        yesChecked =
            Maybe.withDefault False value

        noChecked =
            case value of
                Just b ->
                    not b

                Nothing ->
                    False
    in
    nextBackWrap model
        [ prompt model [] promptId
        , div [ css [ displayFlex, flexDirection row, justifyContent center, defaultMargin ] ]
            [ checkBox model yesChecked "yes" updateFunction (setMaybe yesChecked True)
            , checkBox model noChecked "no" updateFunction (setMaybe noChecked False)
            ]
        ]


dateSelector : Model -> String -> (String -> Msg) -> String -> (String -> Msg) -> String -> (String -> Msg) -> Html Msg
dateSelector model dayValue dayInput monthValue monthInput yearValue yearInput =
    div [ css [ displayFlex, flexDirection row, justifyContent center ] ]
        [ div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
            [ div [ css [ defaultMargin ] ] [ text (i18n model "month") ]
            , select
                [ onInput monthInput
                , css
                    [ dropdownStyles
                    ]
                ]
                (List.map (\r -> option [ Html.Styled.Attributes.selected (r == monthValue) ] [ text r ]) monthList)
            ]
        , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
            [ div [ css [ defaultMargin ] ] [ text (i18n model "day") ]
            , select
                [ onInput dayInput
                , css
                    [ dropdownStyles
                    ]
                ]
                (List.map (\r -> option [ Html.Styled.Attributes.selected (r == dayValue) ] [ text r ]) dayList)
            ]
        , div [ css [ displayFlex, flexDirection column, defaultMargin ] ]
            [ div [ css [ defaultMargin ] ] [ text (i18n model "year") ]
            , select
                [ onInput yearInput
                , css
                    [ dropdownStyles
                    ]
                ]
                (List.map (\r -> option [ Html.Styled.Attributes.selected (r == yearValue) ] [ text r ]) (yearList model.currentYear))
            ]
        ]


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


labeledTextInput : Model -> String -> String -> (String -> Msg) -> Html Msg
labeledTextInput model labelId value updateFunction =
    div [ css [ displayFlex, flexDirection column ] ]
        [ div [ css [ marginLeft (px 10) ] ] [ text (i18n model labelId) ], textInput value "" [] updateFunction ]


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


multiEntryRemoveButton : Model -> List x -> (List x -> Msg) -> Int -> x -> Html Msg
multiEntryRemoveButton model currentList removeFunction index _ =
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
            , css [ activeButtonStyles, defaultMargin ]
            ]
            [ text (i18n model "remove") ]
        ]


multiEntryElement : Int -> String -> Html Msg
multiEntryElement index entry =
    div
        [ css
            [ property "grid-column" "1"
            , property "grid-row" (String.fromInt (index + 2))
            , defaultMargin
            , textAlign center
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
    in
    nextBackWrap model
        [ prompt model [] promptTextId
        , form [ onSubmit (addFunction newList) ]
            [ div [ css [ displayFlex, flexDirection row, alignItems center, justifyContent center ] ]
                [ textInput currentInput "" [] updateFunction
                , button [ type_ "submit", css [ activeButtonStyles ] ] [ text (i18n model "add") ]
                ]
            ]
        , removeList model currentList listNameId (\r -> r) removeFunction
        ]


removeList : Model -> List x -> String -> (x -> String) -> (List x -> Msg) -> Html Msg
removeList model currentList listNameId printFunction removeFunction =
    let
        numEntries =
            List.length currentList

        gridRows =
            String.repeat (numEntries + 1) "1fr "
    in
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
                        (List.indexedMap multiEntryElement (List.map printFunction currentList))
                        (List.indexedMap (multiEntryRemoveButton model currentList removeFunction) currentList)
                )



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
                h3 [ onClick (SetFormEntryElement elementLink), css [ fontSize (px 12), marginTop (px 10), marginBottom (px 10), cursor pointer ] ] [ text description ]

            else
                h3 [ css [ color gray, fontSize (px 10), marginTop (px 10), marginBottom (px 10), cursor notAllowed ] ] [ text description ]
    in
    html


elementNameHtml : FormEntryElement -> Bool -> Model -> Html Msg
elementNameHtml element clickable model =
    let
        description =
            formElementToDescription element model

        html =
            if clickable then
                div [ onClick (SetFormEntryElement element), css [ fontSize (px 10), marginTop (px 5), marginBottom (px 5), cursor pointer ] ] [ text description ]

            else
                div [ css [ color gray, fontSize (px 12), marginTop (px 5), marginBottom (px 5), cursor notAllowed ] ] [ text description ]
    in
    html


sectionToDescription : SectionTitle -> Model -> String
sectionToDescription title model =
    case title of
        Eligibility ->
            i18n model "eligibility"

        PersonalInfo ->
            i18n model "personal-info"

        ImmigrationInfo ->
            i18n model "immigration-info"

        SpouseInfo ->
            i18n model "spouse-info"

        ChildInfo maybeNumChildren ->
            case maybeNumChildren of
                Just n ->
                    String.concat [ i18n model "child", " ", String.fromInt n ]

                _ ->
                    i18n model "child-info"

        AddressInfo ->
            i18n model "address-info"


formElementToDescription : FormEntryElement -> Model -> String
formElementToDescription element model =
    case element of
        CurrentlyInUS ->
            i18n model "us-residency"

        InUSLessThanOneYear ->
            i18n model "length-of-stay"

        NotEligible ->
            i18n model "not-eligible"

        Name ->
            i18n model "name"

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

        BirthInfo ->
            i18n model "birth-info"

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

        MostRecentEntry ->
            i18n model "most-recent-entry"

        MostRecentEntryExpiration ->
            i18n model "status-expiration"

        OtherEntries ->
            i18n model "other-entries"

        HasPassport ->
            i18n model "has-passport"

        HasOtherTravelDoc ->
            i18n model "has-other-travel-doc"

        TravelDocCountry ->
            i18n model "travel-doc-country"

        TravelDocNumber ->
            i18n model "travel-doc-number"

        TravelDocExpiration ->
            i18n model "travel-doc-expiration"

        SpouseName ->
            i18n model "name"

        SpouseAliases ->
            i18n model "aliases"

        SpouseBirth ->
            i18n model "birth-info"

        SpouseNationality ->
            i18n model "present-nationality"

        SpouseGender ->
            i18n model "gender"

        SpouseRaceEthnicity ->
            i18n model "race-ethnicity"

        SpouseAlienRegistration ->
            i18n model "alien-registration"

        SpouseTravelDoc ->
            i18n model "travel-doc-info"

        SpouseSSN ->
            i18n model "ssn"

        MarriageInfo ->
            i18n model "marriage-info"

        SpouseInUS ->
            i18n model "spouse-in-us"

        SpouseLocation ->
            i18n model "current-location"

        SpouseLastEntry ->
            i18n model "last-entry"

        SpouseI94 ->
            i18n model "i94"

        SpouseCurrentStatus ->
            i18n model "immigration-status"

        SpousePreviousArrival ->
            i18n model "previous-arrival"

        SpouseImmigrationCourt ->
            i18n model "immigration-court"

        SpouseIncluded ->
            i18n model "include-in-application"

        NumberOfChildren ->
            i18n model "number-of-children"

        ChildName _ ->
            i18n model "name"

        ChildBirth _ ->
            i18n model "birth-info"

        ChildNationality _ ->
            i18n model "present-nationality"

        ChildGender _ ->
            i18n model "gender"

        ChildRaceEthnicity _ ->
            i18n model "race-ethnicity"

        ChildMaritalStatus _ ->
            i18n model "marital-status"

        ChildAlienRegistration _ ->
            i18n model "alien-registration"

        ChildTravelDoc _ ->
            i18n model "travel-doc-info"

        ChildSSN _ ->
            i18n model "ssn"

        ChildInUS _ ->
            i18n model "child-in-us"

        ChildLocation _ ->
            i18n model "current-location"

        ChildLastEntry _ ->
            i18n model "last-entry"

        ChildI94 _ ->
            i18n model "i94"

        ChildCurrentStatus _ ->
            i18n model "immigration-status"

        ChildImmigrationCourt _ ->
            i18n model "immigration-court"

        ChildIncluded _ ->
            i18n model "include-in-application"

        LastAddressBeforeUS ->
            i18n model "last-address-before-us"



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
        , padding (px 8)
        , boxSizing borderBox
        , defaultMargin
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
        , padding (px 8)
        , outline zero
        , cursor pointer
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
        , cursor notAllowed
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
