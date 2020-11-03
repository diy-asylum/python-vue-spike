from typing import List, Optional
from form import Field, BooleanField, Page
from data_types import *
from datetime import date

gender_fields = {Gender.MALE: BooleanField(True, (89, 360), "A.I.", "10"),
                 Gender.FEMALE: BooleanField(True, (143, 360), "A.I.", "10")}

marital_status_fields = {
    MaritalStatus.SINGLE: BooleanField(
        True, (280, 360), "A.I.", "11"), MaritalStatus.MARRIED: BooleanField(
            True, (347, 360), "A.I.", "11"), MaritalStatus.DIVORCED: BooleanField(
                True, (425, 360), "A.I.", "11"), MaritalStatus.WIDOWED: BooleanField(
                    True, (509, 360), "A.I.", "11"), }

immigration_court_fields = {
    ImmigrationCourtStatus.NEVER: BooleanField(
        True, (220, 285), "A.I.", "18"), ImmigrationCourtStatus.CURRENT: BooleanField(
            True, (70, 270), "A.I.", "18"), ImmigrationCourtStatus.NOT_NOW_BUT_IN_THE_PAST: BooleanField(
                True, (280, 270), "A.I.", "18"), }


class Page_1(Page):
    def __init__(
            self,
            apply_cat: bool,
            a_number: str,
            ssn: str,
            uscis_number: str,
            first_name: str,
            middle_name: str,
            last_name: str,
            other_names: List[str],
            res_st_number_and_name: str,
            res_apt_number: str,
            res_city: str,
            res_state: str,
            res_zipcode: str,
            res_area_code: str,
            res_phone_number: str,
            in_care_of: str,
            mail_area_code: str,
            mail_phone_number: str,
            mail_st_number_and_name: str,
            mail_apt_number: str,
            mail_city: str,
            mail_state: str,
            mail_zipcode: str,
            gender: Gender,
            marital_status: MaritalStatus,
            date_of_birth: str,
            city_birth: str,
            country_birth: str,
            present_nationality: str,
            birth_nationality: str,
            race_ethnic_tribal: str,
            religion: str,
            immigration_court_status: ImmigrationCourtStatus,
            last_left_country: str,
            i_94: str,
            most_recent_us_entry: UsEntry,
            passport_country: str,
            passport_expiration: str,
            native_language: str,
            english_fluency: bool,
            other_languages: List[str],
            passport_number: Optional[str] = None,
            travel_doc_number: Optional[str] = None,
            us_entry_2: Optional[UsEntry] = None,
            us_entry_3: Optional[UsEntry] = None
    ):
        fields = []
        fields.append(BooleanField(apply_cat, (76, 672), "", ""))
        fields.append(
            Field(
                a_number,
                (40,
                 625),
                10,
                False,
                "A.I.",
                "1",
                "NONE"))
        fields.append(Field(ssn, (237, 625), 10, False, "A.I.", "2", "NONE"))
        fields.append(
            Field(
                uscis_number,
                (388,
                 625),
                10,
                False,
                "A.I.",
                "3",
                "NONE"))
        fields.append(Field(last_name, (40, 595), 10, False, "A.I.", "4"))
        fields.append(Field(first_name, (280, 595), 10, False, "A.I.", "5"))
        fields.append(Field(middle_name, (441, 595), 10, False, "A.I.", "6"))
        fields.append(
            Field(
                ", ".join(other_names),
                (40,
                 565),
                10,
                False,
                "A.I.",
                "7"))
        fields.append(
            Field(
                res_st_number_and_name,
                (40,
                 517),
                10,
                False,
                "A.I.",
                "8"))
        fields.append(
            Field(
                res_apt_number,
                (405,
                 517),
                10,
                False,
                "A.I.",
                "8"))
        fields.append(Field(res_city, (40, 487), 10, False, "A.I.", "8"))
        fields.append(Field(res_state, (220, 487), 10, False, "A.I.", "8"))
        fields.append(Field(res_zipcode, (352, 487), 10, False, "A.I.", "8"))
        fields.append(
            Field(res_area_code, (455, 487), 10, False, "A.I.", "8"))
        fields.append(Field(
            res_phone_number, (490, 487), 10, False, "A.I.", "8"))
        fields.append(Field(in_care_of, (40, 439), 10, False, "A.I.", "9"))
        if (mail_area_code == res_area_code and
            mail_phone_number == res_phone_number and
            mail_city == res_city and
            mail_state == res_state and
            mail_zipcode == res_zipcode and
            mail_apt_number == res_apt_number and
                mail_st_number_and_name == res_st_number_and_name):
            mail_area_code = ''
            mail_phone_number = 'SAME'
            mail_city = 'SAME'
            mail_state = 'SAME'
            mail_zipcode = 'SAME'
            mail_apt_number = 'SAME'
            mail_st_number_and_name = 'SAME'
        fields.append(
            Field(mail_area_code, (412, 439), 10, False, "A.I.", "9", ""))
        fields.append(Field(
            mail_phone_number, (447, 439), 10, False, "A.I.", "9"))
        fields.append(
            Field(
                mail_st_number_and_name,
                (40,
                 409),
                10,
                False,
                "A.I.",
                "9"))
        fields.append(
            Field(
                mail_apt_number,
                (405,
                 409),
                10,
                False,
                "A.I.",
                "9"))
        fields.append(Field(mail_city, (40, 379), 10, False, "A.I.", "9"))
        fields.append(Field(mail_state, (220, 379), 10, False, "A.I.", "9"))
        fields.append(
            Field(
                mail_apt_number,
                (405,
                 379),
                10,
                False,
                "A.I.",
                "9"))
        fields.append(gender_fields[gender])
        fields.append(marital_status_fields[marital_status])
        fields.append(Field(date_of_birth,
                            (40, 329), 10, False, "A.I.", "12"))
        fields.append(
            Field(
                "%s, %s" %
                (city_birth, country_birth), (203, 329), 10, False, "A.I.", "13"))
        fields.append(
            Field(
                present_nationality,
                (40,
                 299),
                10,
                False,
                "A.I.",
                "14"))
        fields.append(
            Field(
                birth_nationality,
                (203,
                 299),
                10,
                False,
                "A.I.",
                "15"))
        fields.append(
            Field(
                race_ethnic_tribal,
                (347,
                 299),
                10,
                False,
                "A.I.",
                "16"))
        fields.append(Field(religion, (477, 299), 10, False, "A.I.", "17"))
        fields.append(immigration_court_fields[immigration_court_status])
        fields.append(
            Field(
                last_left_country,
                (260,
                 240),
                10,
                False,
                "A.I.",
                "19"))
        fields.append(Field(i_94, (493, 240), 10, False, "A.I.", "19"))
        fields.append(
            Field(
                most_recent_us_entry.date,
                (72,
                 200),
                10,
                False,
                "A.I.",
                "19"))
        fields.append(
            Field(
                most_recent_us_entry.place,
                (180,
                 200),
                10,
                False,
                "A.I.",
                "19"))
        fields.append(
            Field(
                most_recent_us_entry.status,
                (325,
                 200),
                10,
                False,
                "A.I.",
                "19"))
        fields.append(Field(most_recent_us_entry.expiration_date,
                            (493, 200), 10, False, "A.I.", "19"))
        if us_entry_2:
            fields.append(
                Field(
                    us_entry_2.date,
                    (72,
                     182),
                    10,
                    False,
                    "A.I.",
                    "19"))
            fields.append(
                Field(
                    us_entry_2.place,
                    (180,
                     182),
                    10,
                    False,
                    "A.I.",
                    "19"))
            fields.append(
                Field(
                    us_entry_2.status,
                    (325,
                     182),
                    10,
                    False,
                    "A.I.",
                    "19"))
        if us_entry_3:
            fields.append(
                Field(
                    us_entry_3.date,
                    (72,
                     164),
                    10,
                    False,
                    "A.I.",
                    "19"))
            fields.append(
                Field(
                    us_entry_3.place,
                    (180,
                     164),
                    10,
                    False,
                    "A.I.",
                    "19"))
            fields.append(
                Field(
                    us_entry_3.status,
                    (325,
                     164),
                    10,
                    False,
                    "A.I.",
                    "19"))
        fields.append(
            Field(
                passport_country,
                (40,
                 125),
                10,
                False,
                "A.I.",
                "20",
                "NO PASSPORT AVAILABLE"))
        fields.append(
            Field(
                passport_number,
                (323,
                 145),
                10,
                False,
                "A.I.",
                "21",
                "NONE"))
        fields.append(
            Field(
                travel_doc_number,
                (341,
                 125),
                10,
                False,
                "A.I.",
                "21",
                "NONE"))
        fields.append(
            Field(
                passport_expiration,
                (467,
                 125),
                10,
                False,
                "A.I.",
                "22"))
        fields.append(
            Field(
                native_language,
                (40,
                 95),
                10,
                False,
                "A.I.",
                "23"))
        if english_fluency:
            fields.append(BooleanField(True, (293, 96), "A.I.", "24"))
        else:
            fields.append(BooleanField(True, (341, 96), "A.I.", "24"))
        fields.append(
            Field(
                ", ".join(other_languages),
                (395,
                 95),
                10,
                False,
                "A.I.",
                "25",
                "NONE"))
        Page.__init__(self, fields, "resources/i-589-page-1.pdf")
