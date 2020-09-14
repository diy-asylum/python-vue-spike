module DataTypes exposing (..)


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


type WhyApplying
    = RACE
    | RELIGION
    | NATIONALITY
    | POLITICAL_OPINION
    | MEMBERSHIP_IN_SOCIAL_GROUP
    | TORTURE_CONVENTION


type alias QuestionWithExplanation =
    { yesNoAnswer : YesNoAnswer
    , explanation : String
    }


type YesNoAnswer
    = YES
    | NO


type alias AddressWithDates =
    { streetName : String
    , streetNumber : String
    , cityOrTown : String
    , departmentProvinceOrState : String
    , country : String
    , fromDate : String
    , toDate : String
    }


type alias RelativeInfo =
    { fullName : String
    , cityOrTownOfBirth : String
    , countryOfBirth : String
    , currentLocation : String
    , isDeceased : Bool
    }


type alias RelativeHelpPrepare =
    { didRelativeHelp : YesNoAnswer
    , firstRelative : Relative
    , secondRelative : Relative
    }


type alias Relative =
    { name : String
    , relationship : String
    }


type alias OtherCountryApplications =
    { travelThroughOtherCountry : YesNoAnswer
    , applyOtherCountry : YesNoAnswer
    , explanation : String
    }


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


type alias ApplicantInfo =
    { lastName : String
    , firstName : String
    , middleName : String
    , aliases : List String
    , usResidence : MailingAddress
    , usMailingAddress : MailingAddress
    , gender : Gender
    , maritalStatus : MaritalStatus
    , dateOfBrith : String
    , cityOfBirth : String
    , countryOfBirth : String
    , presentNationality : String
    , nationalityAtBirth : String
    , raceEthnicOrTribalGroup : String
    , religion : String
    , nativeLanguage : String
    , fluentInEnglish : Bool
    , otherLangiages : List String
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


type ImmigrationCourtHistory
    = NEVER
    | CURRENTLY
    | NOT_NOW_BUT_IN_THE_PAST


type Gender
    = MALE
    | FEMALE


type MaritalStatus
    = SINGLE
    | MARRIED
    | DIVORCED
    | WIDOWED


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


type alias USTravelHistory =
    { travelEvents : List USTravelEvent
    , lastLeftHomeCountry : String
    , i94Number : String
    , dateStatusExpires : String
    }


type alias USTravelEvent =
    { date : String
    , place : String
    , status : String
    }


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


type alias OrganizationInfo =
    { associatedWithOrganizations : QuestionWithExplanation
    , continueToParticipate : QuestionWithExplanation
    }


type alias SchoolInfo =
    { schoolName : String
    , typeOfSchool : String
    , address : String
    , fromDate : String
    , toDate : String
    }


type alias EmploymentInfo =
    { employerName : String
    , employerAddress : String
    , applicantOccupation : String
    , fromDate : String
    , toDate : String
    }
