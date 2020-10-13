module DataTypes exposing (..)

import Json.Encode as E
import TypedSvg.Types exposing (YesNo(..))


type alias UserData =
    { applicantInfo : ApplicantInfo
    , usTravelHistory : USTravelHistory
    , isMarried : Bool
    , spouseInfo : SpouseInfo
    , childInfo : List ChildInfo
    , lastAddressBeforeUS : AddressWithDates
    , lastAddressPersecuted : AddressWithDates
    , residencesInLastFiveYears : List AddressWithDates
    , educationInfo : List SchoolInfo
    , employmentInfo : List EmploymentInfo
    , motherInfo : RelativeInfo
    , fatherInfo : RelativeInfo
    , siblingInfo : List RelativeInfo
    , whyApplying : List WhyApplying
    , experiencedHarm : QuestionWithExplanation
    , fearsHarm : QuestionWithExplanation
    , arrestedInOtherCountry : QuestionWithExplanation
    , organizationInfo : OrganizationInfo
    , afraidOfTorture : QuestionWithExplanation
    , relativeAppliedForAsylum : QuestionWithExplanation
    , otherCountryApplications : OtherCountryApplications
    , causedHarm : QuestionWithExplanation
    , returnCountry : QuestionWithExplanation
    , applyAfterOneYear : QuestionWithExplanation
    , crimeInUS : QuestionWithExplanation
    , relativeHelpPrepare : RelativeHelpPrepare
    }


userDataMock : UserData
userDataMock =
    { applicantInfo = applicantInfoMock
    , usTravelHistory = usTravelHistoryMock
    , isMarried = True
    , spouseInfo = spouseInfoMock
    , childInfo = [ childInfoMock ]
    , lastAddressBeforeUS = addressWithDatesMock
    , lastAddressPersecuted = addressWithDatesMock
    , residencesInLastFiveYears = [ addressWithDatesMock ]
    , educationInfo = [ schoolInfoMock ]
    , employmentInfo = [ employmentInfoMock ]
    , motherInfo = relativeInfoMock
    , fatherInfo = relativeInfoMock
    , siblingInfo = [ relativeInfoMock ]
    , whyApplying = [ RACE, RELIGION ]
    , experiencedHarm = questionWithExplanationMock
    , fearsHarm = questionWithExplanationMock
    , arrestedInOtherCountry = questionWithExplanationMock
    , organizationInfo = organizationInfoMock
    , afraidOfTorture = questionWithExplanationMock
    , relativeAppliedForAsylum = questionWithExplanationMock
    , otherCountryApplications = otherCountryApplicationsMock
    , causedHarm = questionWithExplanationMock
    , returnCountry = questionWithExplanationMock
    , applyAfterOneYear = questionWithExplanationMock
    , crimeInUS = questionWithExplanationMock
    , relativeHelpPrepare = relativeHelpPrepareMock
    }


encode : UserData -> E.Value
encode o =
    E.object
        [ ( "applicantInfo", encodeApplicantInfo o.applicantInfo )
        , ( "usTravelHistory", encodeUSTravelHistory o.usTravelHistory )
        , ( "isMarried", E.bool o.isMarried )
        , ( "spouseInfo", encodeSpouseInfo o.spouseInfo )
        , ( "childInfo", E.list encodeChildInfo o.childInfo )
        , ( "lastAddressBeforeUS", encodeAddressWithDates o.lastAddressBeforeUS )
        , ( "lastAddressPersecuted", encodeAddressWithDates o.lastAddressPersecuted )
        , ( "residencesInLastFiveYears", E.list encodeAddressWithDates o.residencesInLastFiveYears )
        , ( "educationInfo", E.list encodeSchoolInfo o.educationInfo )
        , ( "employmentInfo", E.list encodeEmploymentInfo o.employmentInfo )
        , ( "motherInfo", encodeRelativeInfo o.motherInfo )
        , ( "fatherInfo", encodeRelativeInfo o.fatherInfo )
        , ( "siblingInfo", E.list encodeRelativeInfo o.siblingInfo )
        , ( "whyApplying", E.list encodeWhyApplying o.whyApplying )
        , ( "experiencedHarm", encodeQuestionWithExplanation o.experiencedHarm )
        , ( "fearsHarm", encodeQuestionWithExplanation o.fearsHarm )
        , ( "arrestedInOtherCountry", encodeQuestionWithExplanation o.arrestedInOtherCountry )
        , ( "organizationInfo", encodeOrganizationInfo o.organizationInfo )
        , ( "afraidOfTorture", encodeQuestionWithExplanation o.afraidOfTorture )
        , ( "relativeAppliedForAsylum", encodeQuestionWithExplanation o.relativeAppliedForAsylum )
        , ( "otherCountryApplications", encodeOtherCountryApplications o.otherCountryApplications )
        , ( "causedHarm", encodeQuestionWithExplanation o.causedHarm )
        , ( "returnCountry", encodeQuestionWithExplanation o.returnCountry )
        , ( "applyAfterOneYear", encodeQuestionWithExplanation o.applyAfterOneYear )
        , ( "crimeInUS", encodeQuestionWithExplanation o.crimeInUS )
        , ( "relativeHelpPrepare", encodeRelativeHelpPrepare o.relativeHelpPrepare )
        ]


type WhyApplying
    = RACE
    | RELIGION
    | NATIONALITY
    | POLITICAL_OPINION
    | MEMBERSHIP_IN_SOCIAL_GROUP
    | TORTURE_CONVENTION


encodeWhyApplying : WhyApplying -> E.Value
encodeWhyApplying o =
    let
        encoding =
            case o of
                RACE ->
                    E.string "RACE"

                RELIGION ->
                    E.string "RELIGION"

                NATIONALITY ->
                    E.string "NATIONALITY"

                POLITICAL_OPINION ->
                    E.string "POLITICAL_OPINION"

                MEMBERSHIP_IN_SOCIAL_GROUP ->
                    E.string "MEMBERSHIP_IN_SOCIAL_GROUP"

                TORTURE_CONVENTION ->
                    E.string "TORTURE_CONVENTION"
    in
    encoding


type alias QuestionWithExplanation =
    { yesNoAnswer : YesNoAnswer
    , explanation : String
    }


questionWithExplanationMock : QuestionWithExplanation
questionWithExplanationMock =
    { yesNoAnswer = YES
    , explanation = "Mock explanation."
    }


encodeQuestionWithExplanation : QuestionWithExplanation -> E.Value
encodeQuestionWithExplanation o =
    E.object
        [ ( "yesNoAnswer", encodeYesNoAnswer o.yesNoAnswer )
        , ( "explanation", E.string o.explanation )
        ]


type YesNoAnswer
    = YES
    | NO


encodeYesNoAnswer : YesNoAnswer -> E.Value
encodeYesNoAnswer o =
    let
        encoding =
            case o of
                YES ->
                    E.string "YES"

                NO ->
                    E.string "NO"
    in
    encoding


type alias AddressWithDates =
    { streetName : String
    , streetNumber : String
    , cityOrTown : String
    , departmentProvinceOrState : String
    , country : String
    , fromDate : String
    , toDate : String
    }


addressWithDatesMock : AddressWithDates
addressWithDatesMock =
    { streetName = "Mulberry St"
    , streetNumber = "123"
    , cityOrTown = "Boston"
    , departmentProvinceOrState = "MA"
    , country = "USA"
    , fromDate = "03/12/1988"
    , toDate = "03/15/1988"
    }


encodeAddressWithDates : AddressWithDates -> E.Value
encodeAddressWithDates o =
    E.object
        [ ( "streetName", E.string o.streetName )
        , ( "streetNumber", E.string o.streetNumber )
        , ( "cityOrTown", E.string o.cityOrTown )
        , ( "departmentProvinceOrState", E.string o.departmentProvinceOrState )
        , ( "country", E.string o.country )
        , ( "fromDate", E.string o.fromDate )
        , ( "toDate", E.string o.toDate )
        ]


type alias RelativeInfo =
    { fullName : String
    , cityOrTownOfBirth : String
    , countryOfBirth : String
    , currentLocation : String
    , isDeceased : Bool
    }


relativeInfoMock : RelativeInfo
relativeInfoMock =
    { fullName = "Thomas Jefferson"
    , cityOrTownOfBirth = "Privoz"
    , countryOfBirth = "Austria"
    , currentLocation = "Arlington, VA"
    , isDeceased = False
    }


encodeRelativeInfo : RelativeInfo -> E.Value
encodeRelativeInfo o =
    E.object
        [ ( "fullName", E.string o.fullName )
        , ( "cityOrTownOfBirth", E.string o.cityOrTownOfBirth )
        , ( "countryOfBirth", E.string o.countryOfBirth )
        , ( "currentLocation", E.string o.currentLocation )
        , ( "isDeceased", E.bool o.isDeceased )
        ]


type alias RelativeHelpPrepare =
    { didRelativeHelp : YesNoAnswer
    , firstRelative : Relative
    , secondRelative : Relative
    }


relativeHelpPrepareMock : RelativeHelpPrepare
relativeHelpPrepareMock =
    { didRelativeHelp = YES
    , firstRelative = relativeMock
    , secondRelative = relativeMock
    }


encodeRelativeHelpPrepare : RelativeHelpPrepare -> E.Value
encodeRelativeHelpPrepare o =
    E.object
        [ ( "didRelativeHelp", encodeYesNoAnswer o.didRelativeHelp )
        , ( "firstRelative", encodeRelative o.firstRelative )
        , ( "secondRelative", encodeRelative o.secondRelative )
        ]


type alias Relative =
    { name : String
    , relationship : String
    }


relativeMock : Relative
relativeMock =
    { name = "Albert Einstein"
    , relationship = "Brother"
    }


encodeRelative : Relative -> E.Value
encodeRelative o =
    E.object
        [ ( "name", E.string o.name )
        , ( "relationship", E.string o.relationship )
        ]


type alias OtherCountryApplications =
    { travelThroughOtherCountry : YesNoAnswer
    , applyOtherCountry : YesNoAnswer
    , explanation : String
    }


otherCountryApplicationsMock : OtherCountryApplications
otherCountryApplicationsMock =
    { travelThroughOtherCountry = YES
    , applyOtherCountry = YES
    , explanation = "Mock explanation"
    }


encodeOtherCountryApplications : OtherCountryApplications -> E.Value
encodeOtherCountryApplications o =
    E.object
        [ ( "travelThroughOtherCountry", encodeYesNoAnswer o.travelThroughOtherCountry )
        , ( "applyOtherCountry", encodeYesNoAnswer o.applyOtherCountry )
        , ( "explanation", E.string o.explanation )
        ]


type alias MailingAddress =
    { inCareOf : String
    , streetName : String
    , streetNumber : String
    , apartmentNumber : String
    , city : String
    , state : String
    , zipCode : String
    , areaCode : String
    , phoneNumber : String
    }


mailingAddressMock : MailingAddress
mailingAddressMock =
    { inCareOf = "Albert Einstein"
    , streetName = "Mulberry St"
    , streetNumber = "456"
    , apartmentNumber = "1"
    , city = "Washington"
    , state = "DC"
    , zipCode = "20000"
    , areaCode = "202"
    , phoneNumber = "123-4567"
    }


defaultMailingAddress : MailingAddress
defaultMailingAddress =
    { inCareOf = ""
    , streetName = ""
    , streetNumber = ""
    , apartmentNumber = ""
    , city = ""
    , state = ""
    , zipCode = ""
    , areaCode = ""
    , phoneNumber = ""
    }


encodeMailingAddress : MailingAddress -> E.Value
encodeMailingAddress o =
    E.object
        [ ( "inCareOf", E.string o.inCareOf )
        , ( "streetName", E.string o.streetName )
        , ( "streetNumber", E.string o.streetNumber )
        , ( "apartmentNumber", E.string o.apartmentNumber )
        , ( "city", E.string o.city )
        , ( "state", E.string o.state )
        , ( "zipCode", E.string o.zipCode )
        , ( "areaCode", E.string o.areaCode )
        , ( "phoneNumber", E.string o.phoneNumber )
        ]


type alias ApplicantInfo =
    { lastName : String
    , firstName : String
    , middleName : String
    , aliases : List String
    , usResidence : MailingAddress
    , usMailingAddress : MailingAddress
    , gender : Gender
    , maritalStatus : MaritalStatus
    , dateOfBirth : String
    , cityOfBirth : String
    , countryOfBirth : String
    , presentNationality : String
    , nationalityAtBirth : String
    , raceEthnicOrTribalGroup : String
    , religion : String
    , nativeLanguage : String
    , fluentInEnglish : Bool
    , otherLanguages : List String
    , alsoApplyingConventionAgainstTorture : Bool
    , alienRegistrationNumber : String
    , socialSecurityNumber : String
    , uscisAccountNumber : String
    , immigrationCourtHistory : ImmigrationCourtHistory
    , countryWhoLastIssuedPassport : String
    , passportNumber : String
    , travelDocumentNumber : String
    , travelDocumentExpirationDate : String
    }


applicantInfoMock : ApplicantInfo
applicantInfoMock =
    { lastName = "K"
    , firstName = "M"
    , middleName = "C"
    , aliases = [ "ABC" ]
    , usResidence = mailingAddressMock
    , usMailingAddress = mailingAddressMock
    , gender = MALE
    , maritalStatus = MARRIED
    , dateOfBirth = "01/01/2020"
    , cityOfBirth = "Kansas City"
    , countryOfBirth = "China"
    , presentNationality = "Chinese"
    , nationalityAtBirth = "US"
    , raceEthnicOrTribalGroup = "White"
    , religion = "Christian"
    , nativeLanguage = "Chinese"
    , fluentInEnglish = True
    , otherLanguages = [ "English" ]
    , alsoApplyingConventionAgainstTorture = True
    , alienRegistrationNumber = "12345"
    , socialSecurityNumber = "98245"
    , uscisAccountNumber = "432525"
    , immigrationCourtHistory = NOT_NOW_BUT_IN_THE_PAST
    , countryWhoLastIssuedPassport = "USA"
    , passportNumber = "1234"
    , travelDocumentNumber = "32122453521"
    , travelDocumentExpirationDate = "03/04/05"
    }


encodeApplicantInfo : ApplicantInfo -> E.Value
encodeApplicantInfo o =
    E.object
        [ ( "lastName", E.string o.lastName )
        , ( "firstName", E.string o.firstName )
        , ( "middleName", E.string o.middleName )
        , ( "aliases", E.list E.string o.aliases )
        , ( "usResidence", encodeMailingAddress o.usResidence )
        , ( "usMailingAddress", encodeMailingAddress o.usMailingAddress )
        , ( "gender", encodeGender o.gender )
        , ( "maritalStatus", encodeMaritalStatus o.maritalStatus )
        , ( "dateOfBirth", E.string o.dateOfBirth )
        , ( "cityOfBirth", E.string o.cityOfBirth )
        , ( "countryOfBirth", E.string o.countryOfBirth )
        , ( "presentNationality", E.string o.presentNationality )
        , ( "nationalityAtBirth", E.string o.nationalityAtBirth )
        , ( "raceEthnicOrTribalGroup", E.string o.raceEthnicOrTribalGroup )
        , ( "religion", E.string o.religion )
        , ( "nativeLanguage", E.string o.nativeLanguage )
        , ( "fluentInEnglish", E.bool o.fluentInEnglish )
        , ( "otherLanguages", E.list E.string o.otherLanguages )
        , ( "alsoApplyingConventionAgainstTorture", E.bool o.alsoApplyingConventionAgainstTorture )
        , ( "alienRegistrationNumber", E.string o.alienRegistrationNumber )
        , ( "socialSecurityNumber", E.string o.socialSecurityNumber )
        , ( "uscisAccountNumber", E.string o.uscisAccountNumber )
        , ( "immigrationCourtHistory", encodeImmigrationCourtHistory o.immigrationCourtHistory )
        , ( "countryWhoLastIssuedPassport", E.string o.countryWhoLastIssuedPassport )
        , ( "passportNumber", E.string o.passportNumber )
        , ( "travelDocumentNumber", E.string o.travelDocumentNumber )
        , ( "travelDocumentExpirationDate", E.string o.travelDocumentExpirationDate )
        ]


type ImmigrationCourtHistory
    = NEVER
    | CURRENTLY
    | NOT_NOW_BUT_IN_THE_PAST


encodeImmigrationCourtHistory : ImmigrationCourtHistory -> E.Value
encodeImmigrationCourtHistory o =
    let
        encoding =
            case o of
                NEVER ->
                    E.string "NEVER"

                CURRENTLY ->
                    E.string "CURRENTLY"

                NOT_NOW_BUT_IN_THE_PAST ->
                    E.string "NOT_NOW_BUT_IN_THE_PAST"
    in
    encoding


type Gender
    = MALE
    | FEMALE


encodeGender : Gender -> E.Value
encodeGender o =
    let
        encoding =
            case o of
                MALE ->
                    E.string "MALE"

                FEMALE ->
                    E.string "FEMALE"
    in
    encoding


type MaritalStatus
    = SINGLE
    | MARRIED
    | DIVORCED
    | WIDOWED


encodeMaritalStatus : MaritalStatus -> E.Value
encodeMaritalStatus o =
    let
        encoding =
            case o of
                SINGLE ->
                    E.string "SINGLE"

                MARRIED ->
                    E.string "MARRIED"

                DIVORCED ->
                    E.string "DIVORCED"

                WIDOWED ->
                    E.string "WIDOWED"
    in
    encoding


type alias SpouseInfo =
    { lastName : String
    , firstName : String
    , middleName : String
    , aliases : List String
    , dateOfBirth : String
    , alienRegistrationNumber : String
    , socialSecurityNumber : String
    , passportNumber : String
    , dateOfMarriage : String
    , placeOfMarriage : String
    , cityOfBirth : String
    , countryOfBirth : String
    , nationality : String
    , raceEthnicOrTribalGroup : String
    , gender : Gender
    , inUS : Bool
    , locationInUS : String
    , placeOfLastEntry : String
    , dateOfLastEntry : String
    , i94Number : String
    , immigrationStatusWhenLastAdmitted : String
    , currentImmigrationStatus : String
    , statusExpirationDate : String
    , isInImmigrationCourt : Bool
    , previousArrivalDate : String
    , includeInApplication : Bool
    }


spouseInfoMock : SpouseInfo
spouseInfoMock =
    { lastName = "J"
    , firstName = "M"
    , middleName = "F"
    , aliases = [ "bbbb" ]
    , dateOfBirth = "02/03/04"
    , alienRegistrationNumber = "2145"
    , socialSecurityNumber = "2145252521"
    , passportNumber = "3141"
    , dateOfMarriage = "03/04/05"
    , placeOfMarriage = "Yosemite, CA"
    , cityOfBirth = "Dallas"
    , countryOfBirth = "USA"
    , nationality = "US"
    , raceEthnicOrTribalGroup = "White"
    , gender = FEMALE
    , inUS = True
    , locationInUS = "Walla Walla, WA"
    , placeOfLastEntry = "Seattle"
    , dateOfLastEntry = "02/06/09"
    , i94Number = "131352"
    , immigrationStatusWhenLastAdmitted = "STUDENT"
    , currentImmigrationStatus = "VISITOR"
    , statusExpirationDate = "05/09/20"
    , isInImmigrationCourt = True
    , previousArrivalDate = "04/02/09"
    , includeInApplication = True
    }


encodeSpouseInfo : SpouseInfo -> E.Value
encodeSpouseInfo o =
    E.object
        [ ( "lastName", E.string o.lastName )
        , ( "firstName", E.string o.firstName )
        , ( "middleName", E.string o.middleName )
        , ( "aliases", E.list E.string o.aliases )
        , ( "dateOfBirth", E.string o.dateOfBirth )
        , ( "alienRegistrationNumber", E.string o.alienRegistrationNumber )
        , ( "socialSecurityNumber", E.string o.socialSecurityNumber )
        , ( "passportNumber", E.string o.passportNumber )
        , ( "dateOfMarriage", E.string o.dateOfMarriage )
        , ( "placeOfMarriage", E.string o.placeOfMarriage )
        , ( "cityOfBirth", E.string o.cityOfBirth )
        , ( "countryOfBirth", E.string o.countryOfBirth )
        , ( "nationality", E.string o.nationality )
        , ( "raceEthnicOrTribalGroup", E.string o.raceEthnicOrTribalGroup )
        , ( "gender", encodeGender o.gender )
        , ( "inUS", E.bool o.inUS )
        , ( "locationInUS", E.string o.locationInUS )
        , ( "placeOfLastEntry", E.string o.placeOfLastEntry )
        , ( "dateOfLastEntry", E.string o.dateOfLastEntry )
        , ( "i94Number", E.string o.i94Number )
        , ( "immigrationStatusWhenLastAdmitted", E.string o.immigrationStatusWhenLastAdmitted )
        , ( "currentImmigrationStatus", E.string o.currentImmigrationStatus )
        , ( "statusExpirationDate", E.string o.statusExpirationDate )
        , ( "isInImmigrationCourt", E.bool o.isInImmigrationCourt )
        , ( "previousArrivalDate", E.string o.previousArrivalDate )
        , ( "includeInApplication", E.bool o.includeInApplication )
        ]


type alias USTravelHistory =
    { travelEvents : List USTravelEvent
    , lastLeftHomeCountry : String
    , i94Number : String
    , dateStatusExpires : String
    }


usTravelHistoryMock : USTravelHistory
usTravelHistoryMock =
    { travelEvents = [ usTravelEventMock ]
    , lastLeftHomeCountry = "09/10/20"
    , i94Number = "092491"
    , dateStatusExpires = "06/07/08"
    }


encodeUSTravelHistory : USTravelHistory -> E.Value
encodeUSTravelHistory o =
    E.object
        [ ( "travelEvents", E.list encodeUSTravelEvent o.travelEvents )
        , ( "lastLeftHomeCountry", E.string o.lastLeftHomeCountry )
        , ( "i94Number", E.string o.i94Number )
        , ( "dateStatusExpires", E.string o.dateStatusExpires )
        ]


type alias USTravelEvent =
    { date : String
    , place : String
    , status : String
    }


usTravelEventMock : USTravelEvent
usTravelEventMock =
    { date = "02/02/02"
    , place = "Lexington"
    , status = "VISITOR"
    }


encodeUSTravelEvent : USTravelEvent -> E.Value
encodeUSTravelEvent o =
    E.object
        [ ( "date", E.string o.date )
        , ( "place", E.string o.place )
        , ( "status", E.string o.status )
        ]


type alias ChildInfo =
    { lastName : String
    , firstName : String
    , middleName : String
    , dateOfBirth : String
    , alienRegistrationNumber : String
    , socialSecurityNumber : String
    , passportNumber : String
    , maritalStatus : MaritalStatus
    , cityOfBirth : String
    , countryOfBirth : String
    , nationality : String
    , raceEthnicOrTribalGroup : String
    , gender : Gender
    , inUS : Bool
    , location : String
    , placeOfLastEntry : String
    , dateOfLastEntry : String
    , i94Number : String
    , immigrationStatusWhenLastAdmitted : String
    , currentImmigrationStatus : String
    , statusExpirationDate : String
    , isInImmigrationCourt : Bool
    , includeInApplication : Bool
    }


childInfoMock : ChildInfo
childInfoMock =
    { lastName = "J"
    , firstName = "M"
    , middleName = "F"
    , dateOfBirth = "03/04/05"
    , alienRegistrationNumber = "2145"
    , socialSecurityNumber = "2145252521"
    , passportNumber = "3141"
    , maritalStatus = MARRIED
    , cityOfBirth = "Dallas"
    , countryOfBirth = "USA"
    , nationality = "US"
    , raceEthnicOrTribalGroup = "White"
    , gender = FEMALE
    , inUS = True
    , location = "Walla Walla, WA"
    , placeOfLastEntry = "Seattle"
    , dateOfLastEntry = "12/03/56"
    , i94Number = "131352"
    , immigrationStatusWhenLastAdmitted = "STUDENT"
    , currentImmigrationStatus = "VISITOR"
    , statusExpirationDate = "05/09/20"
    , isInImmigrationCourt = True
    , includeInApplication = True
    }


encodeChildInfo : ChildInfo -> E.Value
encodeChildInfo o =
    E.object
        [ ( "lastName", E.string o.lastName )
        , ( "firstName", E.string o.firstName )
        , ( "middleName", E.string o.middleName )
        , ( "dateOfBirth", E.string o.dateOfBirth )
        , ( "alienRegistrationNumber", E.string o.alienRegistrationNumber )
        , ( "socialSecurityNumber", E.string o.socialSecurityNumber )
        , ( "passportNumber", E.string o.passportNumber )
        , ( "maritalStatus", encodeMaritalStatus o.maritalStatus )
        , ( "cityOfBirth", E.string o.cityOfBirth )
        , ( "countryOfBirth", E.string o.countryOfBirth )
        , ( "nationality", E.string o.nationality )
        , ( "raceEthnicOrTribalGroup", E.string o.raceEthnicOrTribalGroup )
        , ( "gender", encodeGender o.gender )
        , ( "inUS", E.bool o.inUS )
        , ( "location", E.string o.location )
        , ( "placeOfLastEntry", E.string o.placeOfLastEntry )
        , ( "dateOfLastEntry", E.string o.dateOfLastEntry )
        , ( "i94Number", E.string o.i94Number )
        , ( "immigrationStatusWhenLastAdmitted", E.string o.immigrationStatusWhenLastAdmitted )
        , ( "currentImmigrationStatus", E.string o.currentImmigrationStatus )
        , ( "statusExpirationDate", E.string o.statusExpirationDate )
        , ( "isInImmigrationCourt", E.bool o.isInImmigrationCourt )
        , ( "includeInApplication", E.bool o.includeInApplication )
        ]


type alias OrganizationInfo =
    { associatedWithOrganizations : QuestionWithExplanation
    , continueToParticipate : QuestionWithExplanation
    }


organizationInfoMock : OrganizationInfo
organizationInfoMock =
    { associatedWithOrganizations = questionWithExplanationMock
    , continueToParticipate = questionWithExplanationMock
    }


encodeOrganizationInfo : OrganizationInfo -> E.Value
encodeOrganizationInfo o =
    E.object
        [ ( "associatedWithOrganizations", encodeQuestionWithExplanation o.associatedWithOrganizations )
        , ( "continueToParticipate", encodeQuestionWithExplanation o.continueToParticipate )
        ]


type alias SchoolInfo =
    { schoolName : String
    , typeOfSchool : String
    , address : String
    , fromDate : String
    , toDate : String
    }


schoolInfoMock : SchoolInfo
schoolInfoMock =
    { schoolName = "Wilson High School"
    , typeOfSchool = "Secondary"
    , address = "123 A St"
    , fromDate = "10/12/13"
    , toDate = "10/12/14"
    }


encodeSchoolInfo : SchoolInfo -> E.Value
encodeSchoolInfo o =
    E.object
        [ ( "schoolName", E.string o.schoolName )
        , ( "typeOfSchool", E.string o.typeOfSchool )
        , ( "address", E.string o.address )
        , ( "fromDate", E.string o.fromDate )
        , ( "toDate", E.string o.toDate )
        ]


type alias EmploymentInfo =
    { employerName : String
    , employerAddress : String
    , applicantOccupation : String
    , fromDate : String
    , toDate : String
    }


employmentInfoMock : EmploymentInfo
employmentInfoMock =
    { employerName = "Wilson High School"
    , applicantOccupation = "Welder"
    , employerAddress = "123 A St"
    , fromDate = "10/12/13"
    , toDate = "10/12/14"
    }


encodeEmploymentInfo : EmploymentInfo -> E.Value
encodeEmploymentInfo o =
    E.object
        [ ( "employerName", E.string o.employerName )
        , ( "employerAddress", E.string o.employerAddress )
        , ( "applicantOccupation", E.string o.applicantOccupation )
        , ( "fromDate", E.string o.fromDate )
        , ( "toDate", E.string o.toDate )
        ]
