from i_589_page_1 import Page_1
from i_589_page_2 import Page_2
from i_589_page_3 import Page_3
from i_589_page_4 import Page_4
from i_589_page_5 import Page_5
from i_589_page_6 import Page_6
from i_589_page_7 import Page_7
from i_589_page_8 import Page_8
from i_589_page_9 import Page_9
from i_589_page_10 import Page_10

from data_types import *
from data_conversion import *
from child_supplement import construct_child_supplements
from datetime import datetime

def form_constructor(data):
    applicant_info = data['applicantInfo']
    date = datetime.now().strftime("%m/%d/%y")
    residence = applicant_info['usResidence']
    mailing_address = applicant_info['usMailingAddress']
    travel_history = data['usTravelHistory']
    travel_events = travel_history['travelEvents']
    most_recent_event = travel_events[0]
    if len(travel_events) > 1:
        second_event = UsEntry(travel_events[1]['date'], travel_events[1]['place'], travel_events[1]['status'])
    else:
        second_event = None
    if len(travel_events) > 2:
        third_event = UsEntry(travel_events[2]['date'], travel_events[2]['place'], travel_events[2]['status'])
    else:
        third_event = None
    page_1 = Page_1(applicant_info['alsoApplyingConventionAgainstTorture'],
            applicant_info['alienRegistrationNumber'],
            applicant_info['socialSecurityNumber'],
            applicant_info['uscisAccountNumber'],
            applicant_info['firstName'],
            applicant_info['middleName'],
            applicant_info['lastName'],
            applicant_info['aliases'],
            residence['streetNumber'] + " " + residence['streetName'],
            residence['apartmentNumber'],
            residence['city'],
            residence['state'],
            residence['zipCode'],
            residence['areaCode'],
            residence['phoneNumber'],
            mailing_address['inCareOf'],
            mailing_address['areaCode'],
            mailing_address['phoneNumber'],
            mailing_address['streetNumber'] + " " + mailing_address['streetName'],
            mailing_address['apartmentNumber'],
            mailing_address['city'],
            mailing_address['state'],
            mailing_address['zipCode'],
            Gender[applicant_info['gender']],
            MaritalStatus[applicant_info['maritalStatus']],
            applicant_info['dateOfBirth'],
            applicant_info['cityOfBirth'],
            applicant_info['countryOfBirth'],
            applicant_info['presentNationality'],
            applicant_info['nationalityAtBirth'],
            applicant_info['raceEthnicOrTribalGroup'],
            applicant_info['religion'],
            ImmigrationCourtStatus[applicant_info['immigrationCourtHistory']],
            travel_history['lastLeftHomeCountry'],
            travel_history['i94Number'],
            UsEntry(most_recent_event['date'], most_recent_event['place'], most_recent_event['status'], travel_history['dateStatusExpires']),
            applicant_info['countryWhoLastIssuedPassport'],
            applicant_info['travelDocumentExpirationDate'],
            applicant_info['nativeLanguage'],
            applicant_info['fluentInEnglish'],
            applicant_info['otherLanguages'],
            applicant_info['passportNumber'],
            applicant_info['travelDocumentNumber'],
            second_event,
            third_event)
    spouse_info = data['spouseInfo']
    child_info = [child_data_to_fields(x) for x in data['childInfo']]
    if spouse_info is None:
        spouse_last_entry = default_entry
        spouse_info = {}
    else:
        spouse_last_entry = UsEntry(spouse_info['dateOfLastEntry'], spouse_info['placeOfLastEntry'], spouse_info['immigrationStatusWhenLastAdmitted'], spouse_info['statusExpirationDate'])
    if len(child_info) == 0:
        first_child = None
        num_children = None
        has_children = False
    else:
        num_children = len(child_info)
        has_children = True
        first_child = child_info[0]
    page_2 = Page_2(data['isMarried'],
                    spouse_info.get('alienRegistrationNumber'),
                    spouse_info.get('passportNumber'),
                    spouse_info.get('dateOfBirth'),
                    spouse_info.get('socialSecurityNumber'),
                    spouse_info.get('lastName'),
                    spouse_info.get('firstName'),
                    spouse_info.get('middleName'),
                    spouse_info.get('aliases', []),
                    spouse_info.get('dateOfMarriage'),
                    spouse_info.get('placeOfMarriage'),
                    spouse_info.get('cityOfBirth'),
                    spouse_info.get('countryOfBirth'),
                    spouse_info.get('nationality'),
                    spouse_info.get('raceEthnicOrTribalGroup'),
                    Gender[spouse_info['gender']] if ('gender' in spouse_info and spouse_info['gender'] is not None) else None,
                    spouse_info.get('inUS'),
                    spouse_info.get('locationInUS'),
                    spouse_last_entry,
                    spouse_info.get('i94Number'),
                    spouse_info.get('currentImmigrationStatus'),
                    spouse_info.get('isInImmigrationCourt'),
                    spouse_info.get('previousArrivalDate'),
                    spouse_info.get('includeInApplication'),
                    has_children,
                    num_children,
                    first_child
                    )
    if len(child_info) > 1:
        child_2 = child_info[1]
    else:
        child_2 = None
    if len(child_info) > 2:
        child_3 = child_info[2]
    else:
        child_3 = None
    if len(child_info) > 3:
        child_4 = child_info[3]
    else:
        child_4 = None
    page_3 = Page_3(child_2, child_3, child_4)

    residences = [address_to_fields(x) for x in data['residencesInLastFiveYears']]
    if len(residences) > 0:
        res_1 = residences[0]
    else:
        res_1 = None
    if len(residences) > 1:
        res_2 = residences[1]
    else:
        res_2 = None
    if len(residences) > 2:
        res_3 = residences[2]
    else:
        res_3 = None
    if len(residences) > 3:
        res_4 = residences[3]
    else:
        res_4 = None
    if len(residences) > 4:
        res_5 = residences[4]
    else:
        res_5 = None

    schools = [school_to_fields(x) for x in data['educationInfo']]
    if len(schools) > 0:
        school_1 = schools[0]
    else:
        school_1 = None
    if len(schools) > 1:
        school_2 = schools[1]
    else:
        school_2 = None
    if len(schools) > 2:
        school_3 = schools[2]
    else:
        school_3 = None
    if len(schools) > 3:
        school_4 = schools[3]
    else:
        school_4 = None

    employers = [employer_to_fields(x) for x in data['employmentInfo']]
    if len(employers) > 0:
        job_1 = employers[0]
    else:
        job_1 = None
    if len(employers) > 1:
        job_2 = employers[1]
    else:
        job_2 = None
    if len(employers) > 2:
        job_3 = employers[2]
    else:
        job_3 = None

    siblings = [relative_to_fields(x) for x in data['siblingInfo']]
    if len(siblings) > 0:
        sibling_1 = siblings[0]
    else:
        sibling_1 = None
    if len(siblings) > 1:
        sibling_2 = siblings[1]
    else:
        sibling_2 = None
    if len(siblings) > 2:
        sibling_3 = siblings[2]
    else:
        sibling_3 = None
    if len(siblings) > 3:
        sibling_4 = siblings[3]
    else:
        sibling_4 = None

    page_4 = Page_4(address_to_fields(data['lastAddressBeforeUS']),
                    address_to_fields(data['lastAddressPersecuted']),
                    res_1,
                    res_2,
                    res_3,
                    res_4,
                    res_5,
                    school_1,
                    school_2,
                    school_3,
                    school_4,
                    job_1,
                    job_2,
                    job_3,
                    relative_to_fields(data['motherInfo']),
                    relative_to_fields(data['fatherInfo']),
                    sibling_1,
                    sibling_2,
                    sibling_3,
                    sibling_4,
                    )

    page_5 = Page_5([AsylumReason[reason] for reason in data['whyApplying']],
                    data['experiencedHarm']['yesNoAnswer'] == "YES",
                    data['experiencedHarm']['explanation'],
                    data['fearsHarm']['yesNoAnswer'] == "YES",
                    data['fearsHarm']['explanation']
                    )

    page_6 = Page_6(data['arrestedInOtherCountry']['yesNoAnswer'] == "YES",
                    data['arrestedInOtherCountry']['explanation'],
                    data['organizationInfo']['associatedWithOrganizations']['yesNoAnswer'] == "YES",
                    data['organizationInfo']['associatedWithOrganizations']['explanation'],
                    data['organizationInfo']['continueToParticipate']['yesNoAnswer'] == "YES",
                    data['organizationInfo']['continueToParticipate']['explanation'],
                    data['afraidOfTorture']['yesNoAnswer'] == "YES",
                    data['afraidOfTorture']['explanation']
                    )
    page_7 = Page_7(data['relativeAppliedForAsylum']['yesNoAnswer'] == "YES",
                    data['relativeAppliedForAsylum']['explanation'],
                    data['otherCountryApplications']['travelThroughOtherCountry'] == "YES",
                    data['otherCountryApplications']['applyOtherCountry'] == "YES",
                    data['otherCountryApplications']['explanation'],
                    data['causedHarm']['yesNoAnswer'] == "YES",
                    data['causedHarm']['explanation']
                    )

    page_8 = Page_8(data['returnCountry']['yesNoAnswer'] == "YES",
                    data['returnCountry']['explanation'],
                    data['applyAfterOneYear']['yesNoAnswer'] == "YES",
                    data['applyAfterOneYear']['explanation'],
                    data['crimeInUS']['yesNoAnswer'] == "YES",
                    data['crimeInUS']['explanation']
                    )
    page_9 = Page_9()
    page_10 = Page_10()

    child_supplements = construct_child_supplements(child_info,
                                                    applicant_info['firstName'] + ' ' + applicant_info['lastName'],
                                                    applicant_info.get('alienRegistrationNumber'),
                                                    date
                                                    )
    pages = [page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8, page_9, page_10] + child_supplements
    return pages
