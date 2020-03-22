from data_types import *

def relative_to_fields(relative):
    if relative is None:
        return None
    return RelativeFields(relative['fullName'],
                          relative['cityOrTownOfBirth'],
                          relative['countryOfBirth'],
                          relative['currentLocation'],
                          relative['isDeceased']
                         )

def employer_to_fields(employer):
    if employer is None:
        return None
    return EmployerFields(employer['employerName'] + ", " + employer['employerAddress'],
                          employer['applicantOccupation'],
                          employer['fromDate'],
                          employer['toDate']
                         )

def school_to_fields(school):
    if school is None:
        return None
    return SchoolFields(school['schoolName'],
                        school['typeOfSchool'],
                        school['address'],
                        school['fromDate'],
                        school['toDate']
                        )

def address_to_fields(address):
    if address is None:
        return None
    return AddressFields(address['streetNumber'],
                         address['streetName'],
                         address['cityOrTown'],
                         address['departmentProvinceOrState'],
                         address['country'],
                         address['fromDate'],
                         address['toDate']
                         )

def child_data_to_fields(child):
    if child is None:
        return None
    child_last_entry = UsEntry(child['dateOfLastEntry'], child['placeOfLastEntry'], child['immigrationStatusWhenLastAdmitted'], child['statusExpirationDate'])
    return ChildFields(child['alienRegistrationNumber'],
                              child['passportNumber'],
                              MaritalStatus[child['maritalStatus']],
                              child['socialSecurityNumber'],
                              child['lastName'],
                              child['firstName'],
                              child['middleName'],
                              child['dateOfBirth'],
                              child['cityOfBirth'],
                              child['countryOfBirth'],
                              child['nationality'],
                              child['raceEthnicOrTribalGroup'],
                              Gender[child['gender']],
                              child['inUS'],
                              child['location'],
                              child_last_entry,
                              child['i94Number'],
                              child['currentImmigrationStatus'],
                              child['isInImmigrationCourt'],
                              child['includeInApplication']
                             )
