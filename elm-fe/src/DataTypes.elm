module DataTypes exposing (..)

import Json.Encode as E


type alias UserData =
    { applicantInfo : ApplicantInfo
    , usTravelHistory : USTravelHistory
    , isMarried : Bool
    , spouseInfo : SpouseInfo
    , childInfo : List ChildInfo
    , lastAddressBeforeUS : AddressWithDates
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


encode : UserData -> E.Value
encode o =
    E.object
        [ ( "applicantInfo", encodeApplicantInfo o.applicantInfo )
        , ( "usTravelHistory", encodeUSTravelHistory o.usTravelHistory )
        , ( "isMarried", E.bool o.isMarried )
        , ( "spouseInfo", encodeSpouseInfo o.spouseInfo )
        , ( "childInfo", E.list encodeChildInfo o.childInfo )
        , ( "lastAddressBeforeUS", encodeAddressWithDates o.lastAddressBeforeUS )
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
    , i94Number : String
    , immigrationStatusWhenLastAdmitted : String
    , currentImmigrationStatus : String
    , statusExpirationDate : String
    , isInImmigrationCourt : Bool
    , includeInApplication : Bool
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


encodeEmploymentInfo : EmploymentInfo -> E.Value
encodeEmploymentInfo o =
    E.object
        [ ( "employerName", E.string o.employerName )
        , ( "employerAddress", E.string o.employerAddress )
        , ( "applicantOccupation", E.string o.applicantOccupation )
        , ( "fromDate", E.string o.fromDate )
        , ( "toDate", E.string o.toDate )
        ]
