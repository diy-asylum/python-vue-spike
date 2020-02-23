from typing import Optional, Dict, Tuple, List
from enum import Enum
from datetime import date
from form import Field, BooleanField


class AsylumReason(Enum):
    RACE = "RACE"
    RELIGION = "RELIGION"
    NATIONALITY = "NATIONALITY"
    POLITICAL_OPINION = "POLITICAL_OPINION"
    MEMBERSHIP_IN_SOCIAL_GROUP = "MEMBERSHIP_IN_SOCIAL_GROUP"
    TORTURE_CONVENTION = "TORTURE_CONVENTION"


class Gender(Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"


class MaritalStatus(Enum):
    SINGLE = "Single"
    MARRIED = "Married"
    DIVORCED = "Divorced"
    WIDOWED = "Widowed"


class ImmigrationCourtStatus(Enum):
    NEVER = "NEVER"
    CURRENT = "CURRENT"
    PAST = "NOT_NOW_BUT_IN_THE_PAST"


class UsEntry():
    def __init__(self, date: str, place: str, status: str,
                 expiration_date: Optional[date] = None):
        self.date = date
        self.place = place
        self.status = status
        self.expiration_date = expiration_date

class AddressFields():
    def __init__(self,
                 house_number: str,
                 street: str,
                 city: str,
                 state: str,
                 country: str,
                 start_date: date,
                 end_date: date):
        self.house_number = house_number
        self.street = street
        self.city = city
        self.state = state
        self.country = country
        self.start_date = start_date
        self.end_date = end_date

class SchoolFields():
    def __init__(self,
                 name: str,
                 school_type: str,
                 location: str,
                 start_date: str,
                 end_date: str):
        self.name = name
        self.school_type = school_type
        self.location = location
        self.start_date = start_date
        self.end_date = end_date

    def add_fields(self,
                   fields: List[Field],
                   name_position: Tuple[int, int],
                   type_position: Tuple[int, int],
                   location_position: Tuple[int, int],
                   start_date_position: Tuple[int, int],
                   end_date_position: Tuple[int, int]):
        fields.append(Field(
                    self.name,
                    name_position,
                    10,
                    False,
                    "A.III.",
                    "3"))
        fields.append(Field(
                    self.school_type,
                    type_position,
                    10,
                    False,
                    "A.III.",
                    "3"))
        fields.append(Field(
                    self.location,
                    location_position,
                    10,
                    False,
                    "A.III.",
                    "3"))
        fields.append(Field(
                    self.start_date,
                    start_date_position,
                    10,
                    False,
                    "A.III.",
                    "3"))
        fields.append(Field(
                    self.end_date,
                    end_date_position,
                    10,
                    False,
                    "A.III.",
                    "3"))

class EmployerFields():
    def __init__(self,
                 name_and_address: str,
                 occupation: str,
                 start_date: str,
                 end_date: str):
        self.name_and_address = name_and_address
        self.occupation = occupation
        self.start_date = start_date
        self.end_date = end_date

    def add_fields(self,
                   fields: List[Field],
                   name_position: Tuple[int, int],
                   occupation_position: Tuple[int, int],
                   start_date_position: Tuple[int, int],
                   end_date_position: Tuple[int, int]):
        fields.append(Field(
                    self.name_and_address,
                    name_position,
                    10,
                    False,
                    "A.III.",
                    "4"))
        fields.append(Field(
                    self.occupation,
                    occupation_position,
                    10,
                    False,
                    "A.III.",
                    "4"))
        fields.append(Field(
                    self.start_date,
                    start_date_position,
                    10,
                    False,
                    "A.III.",
                    "4"))
        fields.append(Field(
                    self.end_date,
                    end_date_position,
                    10,
                    False,
                    "A.III.",
                    "4"))

class RelativeFields():
    def __init__(self,
                 full_name: str,
                 city_birth: str,
                 country_birth: str,
                 location: Optional[str],
                 is_deceased: bool):
        self.full_name = full_name
        self.city_birth = city_birth
        self.country_birth = country_birth
        self.location = location
        self.is_deceased = is_deceased

    def add_fields(self,
                   fields,
                   name_position: Tuple[int, int],
                   city_position: Tuple[int, int],
                   location_position: Tuple[int, int],
                   is_deceased_position: Tuple[int, int]):
        fields.append(Field(
                    self.full_name,
                    name_position,
                    10,
                    False,
                    "A.III.",
                    "5"))
        fields.append(Field(
                    "%s, %s" % (self.city_birth, self.country_birth),
                    city_position,
                    10,
                    False,
                    "A.III.",
                    "5"))
        fields.append(Field(
                    self.location,
                    location_position,
                    10,
                    False,
                    "A.III.",
                    "5"))
        fields.append(BooleanField(
                    self.is_deceased,
                    is_deceased_position,
                    "A.III.",
                    "5"))

class ChildFields():
    def __init__(self,
                 a_number: str,
                 passport_number: str,
                 marital_status: MaritalStatus,
                 ssn: str,
                 last_name: str,
                 first_name: str,
                 middle_name: str,
                 date_of_birth: date,
                 city_birth: str,
                 country_birth: str,
                 nationality: str,
                 race_ethnic_tribal: str,
                 gender: Gender,
                 in_us: bool,
                 location: Optional[str],
                 last_entry: UsEntry,
                 i_94: str,
                 current_status: str,
                 in_immigration_court: bool,
                 included_in_application: bool):
        self.a_number = a_number
        self.passport_number = passport_number
        self.marital_status = marital_status
        self.ssn = ssn
        self.last_name = last_name
        self.first_name = first_name
        self.middle_name = middle_name
        self.date_of_birth = date_of_birth
        self.city_birth = city_birth
        self.country_birth = country_birth
        self.nationality = nationality
        self.race_ethnic_tribal = race_ethnic_tribal
        self.gender = gender
        self.in_us = in_us
        self.location = location
        self.last_entry = last_entry
        self.i_94 = i_94
        self.current_status = current_status
        self.in_immigration_court = in_immigration_court
        self. included_in_application = included_in_application
