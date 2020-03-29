from form import Field, BooleanField, Page
from data_types import *
from typing import Optional

child_1_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 504), "", ""), Gender.FEMALE: BooleanField(
            True, (515, 504), "", "")}

child_2_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 270), "", "12"), Gender.FEMALE: BooleanField(
            True, (515, 270), "", "12")}


class Page_11(Page):
    def __init__(self,
                 a_number: Optional[str],
                 name: str,
                 date: str,
                 child_1: Optional[ChildFields],
                 child_2: Optional[ChildFields]
                 ):
        fields = []
        fields.append(Field(
            a_number,
            (40,
             695),
            10,
            False,
            "",
            "",
            "NONE"))
        fields.append(Field(
            date,
            (310,
             695),
            10,
            False,
            "",
            ""))
        fields.append(Field(
            name,
            (40,
             665),
            10,
            False,
            "",
            ""))
        if child_1 is None:
            child_1 = default_child
        fields.append(
            Field(
                child_1.a_number,
                (40,
                 562),
                10,
                False,
                "",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_1.passport_number,
                (202,
                 562),
                10,
                False,
                "",
                "2",
                "NONE"))
        if child_1.marital_status is not None:
            fields.append(
                Field(
                    child_1.marital_status.value,
                    (317,
                     562),
                    10,
                    False,
                    "",
                    "3"))
        fields.append(
            Field(
                child_1.ssn,
                (454,
                 562),
                10,
                False,
                "",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_1.last_name,
                (40,
                 532),
                10,
                False,
                "",
                "5"))
        fields.append(
            Field(
                child_1.first_name,
                (197,
                 532),
                10,
                False,
                "",
                "6"))
        fields.append(
            Field(
                child_1.middle_name,
                (317,
                 532),
                10,
                False,
                "",
                "7"))
        fields.append(
            Field(
                child_1.date_of_birth,
                (454,
                 532),
                10,
                False,
                "",
                "8"))
        if child_1.city_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (child_1.city_birth, child_1.country_birth),
                    (40,
                     502),
                    10,
                    False,
                    "",
                    "9"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     502),
                    10,
                    False,
                    "",
                    "9"))
        fields.append(
            Field(
                child_1.nationality,
                (197,
                 502),
                10,
                False,
                "",
                "10"))
        fields.append(
            Field(
                child_1.race_ethnic_tribal,
                (317,
                 502),
                10,
                False,
                "",
                "11"))
        if child_1.gender is not None:
            fields.append(child_1_gender_fields[child_1.gender])

        if child_1.in_us:
            fields.append(BooleanField(
                True,
                (154,
                 486),
                "",
                "13"))
        elif child_1.in_us is False:
            fields.append(BooleanField(
                True,
                (298,
                 486),
                "",
                "13"))
            child_1.included_in_application = False
        if child_1.last_entry is None:
            child_1.last_entry = default_entry
        fields.append(
            Field(
                child_1.last_entry.place,
                (40,
                 449),
                10,
                False,
                "",
                "14"))
        fields.append(
            Field(
                child_1.last_entry.date,
                (197,
                 449),
                10,
                False,
                "",
                "15"))
        fields.append(
            Field(
                child_1.i_94,
                (317,
                 449),
                10,
                False,
                "",
                "16"))
        fields.append(
            Field(
                child_1.last_entry.status,
                (454,
                 449),
                10,
                False,
                "",
                "17"))
        fields.append(
            Field(
                child_1.current_status,
                (40,
                 414),
                10,
                False,
                "",
                "18"))
        fields.append(
            Field(
                child_1.last_entry.expiration_date,
                (220,
                 414),
                10,
                False,
                "",
                "19"))
        if child_1.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 419),
                "",
                "20"))
        elif child_1.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (455,
                 419),
                "",
                "20"))
        if child_1.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 384),
                "",
                "21"))
        elif child_1.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 366),
                "",
                "21"))
        fields.append(
            Field(
                child_1.location,
                (398,
                 486),
                10,
                False,
                "",
                "13"))
        if child_2 is None:
            child_2 = default_child
        fields.append(
            Field(
                child_2.a_number,
                (40,
                 329),
                10,
                False,
                "",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_2.passport_number,
                (202,
                 329),
                10,
                False,
                "",
                "2",
                "NONE"))
        if child_2.marital_status is not None:
            fields.append(
                Field(
                    child_2.marital_status.value,
                    (317,
                     329),
                    10,
                    False,
                    "",
                    "3"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (317,
                     329),
                    10,
                    False,
                    "",
                    "3"))
        fields.append(
            Field(
                child_2.ssn,
                (454,
                 329),
                10,
                False,
                "",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_2.last_name,
                (40,
                 299),
                10,
                False,
                "",
                "5"))
        fields.append(
            Field(
                child_2.first_name,
                (197,
                 299),
                10,
                False,
                "",
                "6"))
        fields.append(
            Field(
                child_2.middle_name,
                (317,
                 299),
                10,
                False,
                "",
                "7"))
        fields.append(
            Field(
                child_2.date_of_birth,
                (454,
                 299),
                10,
                False,
                "",
                "8"))
        if child_2.city_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (child_2.city_birth, child_2.country_birth),
                    (40,
                     269),
                    10,
                    False,
                    "",
                    "9"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     269),
                    10,
                    False,
                    "",
                    "9"))
        fields.append(
            Field(
                child_2.nationality,
                (197,
                 269),
                10,
                False,
                "",
                "10"))
        fields.append(
            Field(
                child_2.race_ethnic_tribal,
                (317,
                 269),
                10,
                False,
                "",
                "11"))
        if child_2.gender is not None:
            fields.append(child_2_gender_fields[child_2.gender])
        if child_2.in_us:
            fields.append(BooleanField(
                True,
                (155,
                 252),
                "",
                "13"))
        elif child_2.in_us is False:
            fields.append(BooleanField(
                True,
                (299,
                 252),
                "",
                "13"))
            child_2.included_in_application = False
        if child_2.last_entry is None:
            child_2.last_entry = default_entry
        fields.append(
            Field(
                child_2.last_entry.place,
                (40,
                 216),
                10,
                False,
                "",
                "14"))
        fields.append(
            Field(
                child_2.last_entry.date,
                (197,
                 216),
                10,
                False,
                "",
                "15"))
        fields.append(
            Field(
                child_2.i_94,
                (317,
                 216),
                10,
                False,
                "",
                "16"))
        fields.append(
            Field(
                child_2.last_entry.status,
                (454,
                 216),
                10,
                False,
                "",
                "17"))
        fields.append(
            Field(
                child_2.current_status,
                (40,
                 181),
                10,
                False,
                "",
                "18"))
        fields.append(
            Field(
                child_2.last_entry.expiration_date,
                (220,
                 181),
                10,
                False,
                "",
                "19"))
        if child_2.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 186),
                "",
                "20"))
        elif child_2.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (455,
                 186),
                "",
                "20"))
        if child_2.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 151),
                "",
                "21"))
        elif child_2.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 133),
                "",
                "21"))
        fields.append(
            Field(
                child_2.location,
                (398,
                 253),
                10,
                False,
                "",
                "13"))
        Page.__init__(self, fields, "resources/i-589-page-11.pdf")
