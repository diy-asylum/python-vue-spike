from form import Field, BooleanField, Page
from data_types import *

child_1_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 654), "A.II.", "12"), Gender.FEMALE: BooleanField(
            True, (515, 654), "A.II.", "12")}

child_2_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 420), "A.II.", "12"), Gender.FEMALE: BooleanField(
            True, (515, 420), "A.II.", "12")}

child_3_gender_fields = {
    Gender.MALE: BooleanField(
        True, (460, 185), "A.II.", "12"), Gender.FEMALE: BooleanField(
            True, (515, 185), "A.II.", "12")}


class Page_3(Page):
    def __init__(self,
                 child_1: Optional[ChildFields],
                 child_2: Optional[ChildFields],
                 child_3: Optional[ChildFields]
                 ):
        fields = []
        if child_1 is None:
            child_1 = default_child
        fields.append(
            Field(
                child_1.a_number,
                (40,
                 712),
                10,
                False,
                "A.II.",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_1.passport_number,
                (202,
                 712),
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
                     712),
                    10,
                    False,
                    "A.II.",
                    "3"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (317,
                     712),
                    10,
                    False,
                    "A.II.",
                    "3"))
        fields.append(
            Field(
                child_1.ssn,
                (454,
                 712),
                10,
                False,
                "A.II.",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_1.last_name,
                (40,
                 682),
                10,
                False,
                "A.II.",
                "5"))
        fields.append(
            Field(
                child_1.first_name,
                (197,
                 682),
                10,
                False,
                "A.II.",
                "6"))
        fields.append(
            Field(
                child_1.middle_name,
                (317,
                 682),
                10,
                False,
                "A.II.",
                "7"))
        fields.append(
            Field(
                child_1.date_of_birth,
                (454,
                 682),
                10,
                False,
                "A.II.",
                "8"))
        if child_1.city_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (child_1.city_birth, child_1.country_birth),
                    (40,
                     652),
                    10,
                    False,
                    "A.II.",
                    "9"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     652),
                    10,
                    False,
                    "A.II.",
                    "9"))
        fields.append(
            Field(
                child_1.nationality,
                (197,
                 652),
                10,
                False,
                "A.II.",
                "10"))
        fields.append(
            Field(
                child_1.race_ethnic_tribal,
                (317,
                 652),
                10,
                False,
                "A.II.",
                "11"))
        if child_1.gender:
            fields.append(child_1_gender_fields[child_1.gender])
        if child_1.in_us:
            fields.append(BooleanField(
                True,
                (154,
                 636),
                "A.II.",
                "13"))
        elif child_1.in_us is False:
            fields.append(BooleanField(
                True,
                (294,
                 636),
                "A.II.",
                "13"))
            child_1.included_in_application = False
        if child_1.last_entry is None:
            child_1.last_entry = default_entry
        fields.append(
            Field(
                child_1.last_entry.place,
                (40,
                 599),
                10,
                False,
                "A.II.",
                "14"))
        fields.append(
            Field(
                child_1.last_entry.date,
                (197,
                 599),
                10,
                False,
                "A.II.",
                "15"))
        fields.append(
            Field(
                child_1.i_94,
                (317,
                 599),
                10,
                False,
                "A.II.",
                "16"))
        fields.append(
            Field(
                child_1.last_entry.status,
                (454,
                 599),
                10,
                False,
                "A.II.",
                "17"))
        fields.append(
            Field(
                child_1.current_status,
                (40,
                 564),
                10,
                False,
                "A.II.",
                "18"))
        fields.append(
            Field(
                child_1.last_entry.expiration_date,
                (220,
                 564),
                10,
                False,
                "A.II.",
                "19"))
        if child_1.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 569),
                "A.II.",
                "20"))
        elif child_1.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (455,
                 569),
                "A.II.",
                "20"))
        if child_1.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 534),
                "A.II.",
                "21"))
        elif child_1.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 516),
                "A.II.",
                "21"))

        fields.append(
            Field(
                child_1.location,
                (398,
                 636),
                10,
                False,
                "A.II.",
                "13"))
        if child_2 is None:
            child_2 = default_child
        fields.append(
            Field(
                child_2.a_number,
                (40,
                 479),
                10,
                False,
                "A.II.",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_2.passport_number,
                (202,
                 479),
                10,
                False,
                "A.II.",
                "2",
                "NONE"))
        if child_2.marital_status is not None:
            fields.append(
                Field(
                    child_2.marital_status.value,
                    (317,
                     479),
                    10,
                    False,
                    "A.II.",
                    "3"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (317,
                     479),
                    10,
                    False,
                    "A.II.",
                    "3"))
        fields.append(
            Field(
                child_2.ssn,
                (454,
                 479),
                10,
                False,
                "A.II.",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_2.last_name,
                (40,
                 449),
                10,
                False,
                "A.II.",
                "5"))
        fields.append(
            Field(
                child_2.first_name,
                (197,
                 449),
                10,
                False,
                "A.II.",
                "6"))
        fields.append(
            Field(
                child_2.middle_name,
                (317,
                 449),
                10,
                False,
                "A.II.",
                "7"))
        fields.append(
            Field(
                child_2.date_of_birth,
                (454,
                 449),
                10,
                False,
                "A.II.",
                "8"))
        if child_2.city_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (child_2.city_birth, child_2.country_birth),
                    (40,
                     419),
                    10,
                    False,
                    "A.II.",
                    "9"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     419),
                    10,
                    False,
                    "A.II.",
                    "9"))
        fields.append(
            Field(
                child_2.nationality,
                (197,
                 419),
                10,
                False,
                "A.II.",
                "10"))
        fields.append(
            Field(
                child_2.race_ethnic_tribal,
                (317,
                 419),
                10,
                False,
                "A.II.",
                "11"))
        if child_2.gender:
            fields.append(child_2_gender_fields[child_2.gender])
        if child_2.in_us:
            fields.append(BooleanField(
                True,
                (154,
                 403),
                "A.II.",
                "13"))
        elif child_2.in_us is False:
            fields.append(BooleanField(
                True,
                (294,
                 403),
                "A.II.",
                "13"))
            child_2.included_in_application = False
        if child_2.last_entry is None:
            child_2.last_entry = default_entry
        fields.append(
            Field(
                child_2.last_entry.place,
                (40,
                 366),
                10,
                False,
                "A.II.",
                "14"))
        fields.append(
            Field(
                child_2.last_entry.date,
                (197,
                 366),
                10,
                False,
                "A.II.",
                "15"))
        fields.append(
            Field(
                child_2.i_94,
                (317,
                 366),
                10,
                False,
                "A.II.",
                "16"))
        fields.append(
            Field(
                child_2.last_entry.status,
                (454,
                 366),
                10,
                False,
                "A.II.",
                "17"))
        fields.append(
            Field(
                child_2.current_status,
                (40,
                 331),
                10,
                False,
                "A.II.",
                "18"))
        fields.append(
            Field(
                child_2.last_entry.expiration_date,
                (220,
                 331),
                10,
                False,
                "A.II.",
                "19"))
        if child_2.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 333),
                "A.II.",
                "20"))
        elif child_2.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (455,
                 333),
                "A.II.",
                "20"))
        if child_2.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 301),
                "A.II.",
                "21"))
        elif child_2.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 282),
                "A.II.",
                "21"))
        fields.append(
            Field(
                child_2.location,
                (398,
                 403),
                10,
                False,
                "A.II.",
                "13"))

        if child_3 is None:
            child_3 = default_child
        fields.append(
            Field(
                child_3.a_number,
                (40,
                 244),
                10,
                False,
                "A.II.",
                "1",
                "NONE"))
        fields.append(
            Field(
                child_3.passport_number,
                (202,
                 244),
                10,
                False,
                "A.II.",
                "2",
                "NONE"))
        if child_3.marital_status is not None:
            fields.append(
                Field(
                    child_3.marital_status.value,
                    (317,
                     244),
                    10,
                    False,
                    "A.II.",
                    "3"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (317,
                     244),
                    10,
                    False,
                    "A.II.",
                    "3"))
        fields.append(
            Field(
                child_3.ssn,
                (454,
                 244),
                10,
                False,
                "A.II.",
                "4",
                "NONE"))
        fields.append(
            Field(
                child_3.last_name,
                (40,
                 214),
                10,
                False,
                "A.II.",
                "5"))
        fields.append(
            Field(
                child_3.first_name,
                (197,
                 214),
                10,
                False,
                "A.II.",
                "6"))
        fields.append(
            Field(
                child_3.middle_name,
                (317,
                 214),
                10,
                False,
                "A.II.",
                "7"))
        fields.append(
            Field(
                child_3.date_of_birth,
                (454,
                 214),
                10,
                False,
                "A.II.",
                "8"))
        if child_3.city_birth is not None:
            fields.append(
                Field(
                    "%s, %s" % (child_3.city_birth, child_3.country_birth),
                    (40,
                     184),
                    10,
                    False,
                    "A.II.",
                    "9"))
        else:
            fields.append(
                Field(
                    'N/A',
                    (40,
                     184),
                    10,
                    False,
                    "A.II.",
                    "9"))
        fields.append(
            Field(
                child_3.nationality,
                (197,
                 184),
                10,
                False,
                "A.II.",
                "10"))
        fields.append(
            Field(
                child_3.race_ethnic_tribal,
                (317,
                 184),
                10,
                False,
                "A.II.",
                "11"))
        if child_3.gender:
            fields.append(child_3_gender_fields[child_3.gender])
        if child_3.in_us:
            fields.append(BooleanField(
                True,
                (155,
                 168),
                "A.II.",
                "13"))
        elif child_3.in_us is False:
            fields.append(BooleanField(
                True,
                (298,
                 168),
                "A.II.",
                "13"))
            child_3.included_in_application = False
        if child_3.last_entry is None:
            child_3.last_entry = default_entry

        fields.append(
            Field(
                child_3.last_entry.place,
                (40,
                 131),
                10,
                False,
                "A.II.",
                "14"))
        fields.append(
            Field(
                child_3.last_entry.date,
                (197,
                 131),
                10,
                False,
                "A.II.",
                "15"))
        fields.append(
            Field(
                child_3.i_94,
                (317,
                 131),
                10,
                False,
                "A.II.",
                "16"))
        fields.append(
            Field(
                child_3.last_entry.status,
                (454,
                 131),
                10,
                False,
                "A.II.",
                "17"))
        fields.append(
            Field(
                child_3.current_status,
                (40,
                 96),
                10,
                False,
                "A.II.",
                "18"))
        fields.append(
            Field(
                child_3.last_entry.expiration_date,
                (220,
                 96),
                10,
                False,
                "A.II.",
                "19"))
        if child_3.in_immigration_court:
            fields.append(BooleanField(
                True,
                (397,
                 98),
                "A.II.",
                "20"))
        elif child_3.in_immigration_court is False:
            fields.append(BooleanField(
                True,
                (456,
                 98),
                "A.II.",
                "20"))
        if child_3.included_in_application:
            fields.append(BooleanField(
                True,
                (52,
                 66),
                "A.II.",
                "21"))
        elif child_3.included_in_application is False:
            fields.append(BooleanField(
                True,
                (52,
                 48),
                "A.II.",
                "21"))
        fields.append(
            Field(
                child_3.location,
                (398,
                 168),
                10,
                False,
                "A.II.",
                "13"))
        Page.__init__(self, fields, "resources/i-589-page-3.pdf")
