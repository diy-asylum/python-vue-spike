from typing import List, Optional
from form import Field, BooleanField, Page
from data_types import *
from datetime import date

spouse_gender_fields = {
    Gender.MALE: BooleanField(
        True, (458, 576), "A.II.", "14"), Gender.FEMALE: BooleanField(
            True, (521, 576), "A.II.", "14")}

child_1_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 252), "A.II.", "12"), Gender.FEMALE: BooleanField(
            True, (515, 252), "A.II.", "12")}


class Page_2(Page):
    def __init__(self,
                 is_married: bool,
                 spouse_a_number: str,
                 spouse_passport_id: str,
                 spouse_date_of_birth: str,
                 spouse_ssn: str,
                 spouse_last_name: str,
                 spouse_first_name: str,
                 spouse_middle_name: str,
                 spouse_other_names: List[str],
                 date_of_marriage: str,
                 place_of_marriage: str,
                 spouse_city_birth: str,
                 spouse_country_birth: str,
                 spouse_nationality: str,
                 spouse_race_ethnic_tribal: str,
                 spouse_gender: Gender,
                 spouse_in_us: bool,
                 spouse_location: Optional[str],
                 spouse_last_entry: Optional[UsEntry],
                 spouse_i94: str,
                 spouse_current_status: str,
                 spouse_in_immigration_court: bool,
                 spouse_previous_arrival_date: str,
                 spouse_included_in_application: bool,
                 has_children: bool,
                 num_children: Optional[int],
                 child_1: Optional[ChildFields]
                 ):
        fields = []
        fields.append(BooleanField(not is_married, (166, 708), "A.II.", ""))
        fields.append(
            Field(
                spouse_a_number,
                (40,
                 671),
                10,
                False,
                "A.II.",
                "1"))
        fields.append(
            Field(
                spouse_passport_id,
                (203,
                 671),
                10,
                False,
                "A.II.",
                "2"))
        fields.append(
            Field(
                spouse_date_of_birth,
                (333,
                 671),
                10,
                False,
                "A.II.",
                "3"))
        fields.append(Field(spouse_ssn, (454, 671), 10, False, "A.II.", "4"))
        fields.append(
            Field(
                spouse_last_name,
                (40,
                 637),
                10,
                False,
                "A.II.",
                "5"))
        fields.append(
            Field(
                spouse_first_name,
                (203,
                 637),
                10,
                False,
                "A.II.",
                "6"))
        fields.append(
            Field(
                spouse_middle_name,
                (333,
                 637),
                10,
                False,
                "A.II.",
                "7"))
        fields.append(Field(", ".join(spouse_other_names),
                            (454, 637), 10, False, "A.II.", "8"))
        fields.append(
            Field(
                date_of_marriage,
                (40,
                 607),
                10,
                False,
                "A.II.",
                "9"))
        fields.append(
            Field(
                place_of_marriage,
                (203,
                 607),
                10,
                False,
                "A.II.",
                "10"))
        if spouse_city_birth is not None and spouse_country_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (spouse_city_birth, spouse_country_birth),
                    (377,
                     607),
                    10,
                    False,
                    "A.II.",
                    "11"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (377,
                     607),
                    10,
                    False,
                    "A.II.",
                    "11"))
        fields.append(
            Field(
                spouse_nationality,
                (40,
                 577),
                10,
                False,
                "A.II.",
                "12"))
        fields.append(
            Field(
                spouse_race_ethnic_tribal,
                (245,
                 577),
                10,
                False,
                "A.II.",
                "13"))
        if spouse_gender:
            fields.append(spouse_gender_fields[spouse_gender])
        if spouse_in_us:
            fields.append(BooleanField(True, (59, 546), "A.II.", "15"))
        elif spouse_in_us is False:
            fields.append(BooleanField(True, (203, 546), "A.II.", "15"))
        fields.append(Field(
            spouse_location,
            (305,
             547),
            10,
            False,
            "A.II.",
            "15"))
        if spouse_last_entry is None:
            spouse_last_entry = default_entry
        fields.append(Field(
            spouse_last_entry.place,
            (40,
             510),
            10,
            False,
            "A.II.",
            "16"))
        fields.append(Field(
            spouse_last_entry.date,
            (172,
             510),
            10,
            False,
            "A.II.",
            "17"))
        fields.append(Field(
            spouse_i94,
            (311,
             510),
            10,
            False,
            "A.II.",
            "18"))
        fields.append(Field(
            spouse_last_entry.status,
            (439,
             510),
            10,
            False,
            "A.II.",
            "19"))
        fields.append(Field(
            spouse_current_status,
            (40,
             474),
            10,
            False,
            "A.II.",
            "20"))
        fields.append(Field(
            spouse_last_entry.expiration_date,
            (155,
                474),
            10,
            False,
            "A.II.",
            "21"))
        if spouse_in_immigration_court:
            fields.append(BooleanField(
                True,
                (325,
                 474),
                "A.II.",
                "22"))
        elif spouse_in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (371,
                 474),
                "A.II.",
                "22"))
        fields.append(Field(
            spouse_previous_arrival_date,
            (439,
             474),
            10,
            False,
            "A.II.",
            "23"))
        if spouse_included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 444),
                "A.II.",
                "24"))
        elif spouse_included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 426),
                "A.II.",
                "24"))
        if has_children:
            fields.append(BooleanField(
                True,
                (40,
                 372),
                "A.II.",
                "25"))
            fields.append(Field(
                str(num_children),
                (250,
                    372),
                10,
                False,
                "A.II.",
                "23"))
        elif has_children is False:
            fields.append(BooleanField(
                True,
                (40,
                 390),
                "A.II.",
                "25"))
            fields.append(Field(
                'N/A',
                (250,
                    372),
                10,
                False,
                "A.II.",
                "23"))
        else:
            fields.append(Field(
                'N/A',
                (250,
                    372),
                10,
                False,
                "A.II.",
                "23"))
        if child_1 is None:
            child_1 = default_child
        fields.append(
            Field(
                child_1.a_number,
                (40,
                 310),
                10,
                False,
                "A.II.",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_1.passport_number,
                (197,
                 310),
                10,
                False,
                "A.II.",
                "2",
                "NONE"))
        if child_1.marital_status is not None:
            fields.append(
                Field(
                    child_1.marital_status.value,
                    (317,
                     310),
                    10,
                    False,
                    "A.II.",
                    "3"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (317,
                     310),
                    10,
                    False,
                    "A.II.",
                    "3"))
        fields.append(
            Field(
                child_1.ssn,
                (454,
                 310),
                10,
                False,
                "A.II.",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_1.last_name,
                (40,
                 280),
                10,
                False,
                "A.II.",
                "5"))
        fields.append(
            Field(
                child_1.first_name,
                (197,
                 280),
                10,
                False,
                "A.II.",
                "6"))
        fields.append(
            Field(
                child_1.middle_name,
                (317,
                 280),
                10,
                False,
                "A.II.",
                "7"))
        fields.append(
            Field(
                child_1.date_of_birth,
                (454,
                 280),
                10,
                False,
                "A.II.",
                "8"))
        if child_1.city_birth is None:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     250),
                    10,
                    False,
                    "A.II.",
                    "9"))
        else:
            fields.append(
                Field(
                    "%s, %s" % (child_1.city_birth, child_1.country_birth),
                    (40,
                     250),
                    10,
                    False,
                    "A.II.",
                    "9"))
        fields.append(
            Field(
                child_1.nationality,
                (197,
                 250),
                10,
                False,
                "A.II.",
                "10"))
        fields.append(
            Field(
                child_1.race_ethnic_tribal,
                (317,
                 250),
                10,
                False,
                "A.II.",
                "11"))
        if child_1.gender:
            fields.append(child_1_gender_fields[child_1.gender])
        if child_1.in_us:
            fields.append(BooleanField(
                True,
                (155,
                 234),
                "A.II.",
                "13"))
        elif child_1.in_us is False:
            fields.append(BooleanField(
                True,
                (299,
                 234),
                "A.II.",
                "13"))
            child_1.included_in_application = False
        if child_1.last_entry is None:
            child_1.last_entry = default_entry
        fields.append(
            Field(
                child_1.last_entry.place,
                (40,
                 197),
                10,
                False,
                "A.II.",
                "14"))
        fields.append(
            Field(
                child_1.last_entry.date,
                (197,
                 197),
                10,
                False,
                "A.II.",
                "15"))
        fields.append(
            Field(
                child_1.i_94,
                (317,
                 197),
                10,
                False,
                "A.II.",
                "16"))
        fields.append(
            Field(
                child_1.last_entry.status,
                (454,
                 197),
                10,
                False,
                "A.II.",
                "17"))
        fields.append(
            Field(
                child_1.current_status,
                (40,
                 162),
                10,
                False,
                "A.II.",
                "18"))
        fields.append(
            Field(
                child_1.last_entry.expiration_date,
                (220,
                 162),
                10,
                False,
                "A.II.",
                "19"))
        if child_1.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 167),
                "A.II.",
                "20"))
        elif child_1.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (455,
                 167),
                "A.II.",
                "20"))
        if child_1.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 132),
                "A.II.",
                "21"))
        elif child_1.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 114),
                "A.II.",
                "21"))

        fields.append(
            Field(
                child_1.location,
                (398,
                 234),
                10,
                False,
                "A.II.",
                "13"))
        Page.__init__(self, fields, "resources/i-589-page-2.pdf")
