from data_types import *
from form import Page, BooleanField, Field
from typing import Optional

class Page_4(Page):
    def __init__(self,
                 last_address: AddressFields,
                 fear_address: Optional[AddressFields],
                 prev_address_1: Optional[AddressFields],
                 prev_address_2: Optional[AddressFields],
                 prev_address_3: Optional[AddressFields],
                 prev_address_4: Optional[AddressFields],
                 prev_address_5: Optional[AddressFields],
                 school_1: Optional[SchoolFields],
                 school_2: Optional[SchoolFields],
                 school_3: Optional[SchoolFields],
                 school_4: Optional[SchoolFields],
                 employer_1: Optional[EmployerFields],
                 employer_2: Optional[EmployerFields],
                 employer_3: Optional[EmployerFields],
                 mother: RelativeFields,
                 father: RelativeFields,
                 sibling_1: Optional[RelativeFields],
                 sibling_2: Optional[RelativeFields],
                 sibling_3: Optional[RelativeFields],
                 sibling_4: Optional[RelativeFields]
                 ):
        fields = []
        fields.append(Field(
                    "%s %s" % (last_address.house_number, last_address.street),
                    (40,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        fields.append(Field(
                    last_address.city,
                    (173,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        fields.append(Field(
                    last_address.state,
                    (270,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        fields.append(Field(
                    last_address.country,
                    (389,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        fields.append(Field(
                    last_address.start_date.strftime('%m/%Y'),
                    (475,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        fields.append(Field(
                    last_address.end_date.strftime('%m/%Y'),
                    (530,
                     648),
                    10,
                    False,
                    "A.III.",
                    "1"))
        if fear_address:
            fields.append(Field(
                    "%s %s" % (fear_address.house_number, fear_address.street),
                    (40,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
            fields.append(Field(
                    fear_address.city,
                    (173,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
            fields.append(Field(
                    fear_address.state,
                    (270,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
            fields.append(Field(
                    fear_address.country,
                    (389,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
            fields.append(Field(
                    fear_address.start_date.strftime('%m/%Y'),
                    (475,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
            fields.append(Field(
                    fear_address.end_date.strftime('%m/%Y'),
                    (530,
                     630),
                    10,
                    False,
                    "A.III.",
                    "1"))
        if prev_address_1:
            fields.append(Field(
                    "%s %s" % (prev_address_1.house_number, prev_address_1.street),
                    (40,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_1.city,
                    (173,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_1.state,
                    (270,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_1.country,
                    (389,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_1.start_date.strftime('%m/%Y'),
                    (475,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_1.end_date.strftime('%m/%Y'),
                    (530,
                     552),
                    10,
                    False,
                    "A.III.",
                    "2"))
        if prev_address_2:
            fields.append(Field(
                    "%s %s" % (prev_address_2.house_number, prev_address_2.street),
                    (40,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_2.city,
                    (173,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_2.state,
                    (270,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_2.country,
                    (389,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_2.start_date.strftime('%m/%Y'),
                    (475,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_2.end_date.strftime('%m/%Y'),
                    (530,
                     534),
                    10,
                    False,
                    "A.III.",
                    "2"))
        if prev_address_3:
            fields.append(Field(
                    "%s %s" % (prev_address_3.house_number, prev_address_3.street),
                    (40,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_3.city,
                    (173,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_3.state,
                    (270,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_3.country,
                    (389,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_3.start_date.strftime('%m/%Y'),
                    (475,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_3.end_date.strftime('%m/%Y'),
                    (530,
                     516),
                    10,
                    False,
                    "A.III.",
                    "2"))
        if prev_address_4:
            fields.append(Field(
                    "%s %s" % (prev_address_4.house_number, prev_address_4.street),
                    (40,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_4.city,
                    (173,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_4.state,
                    (270,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_4.country,
                    (389,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_4.start_date.strftime('%m/%Y'),
                    (475,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_4.end_date.strftime('%m/%Y'),
                    (530,
                     498),
                    10,
                    False,
                    "A.III.",
                    "2"))
        if prev_address_5:
            fields.append(Field(
                    "%s %s" % (prev_address_5.house_number, prev_address_5.street),
                    (40,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_5.city,
                    (173,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_5.state,
                    (270,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_5.country,
                    (389,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_5.start_date.strftime('%m/%Y'),
                    (475,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
            fields.append(Field(
                    prev_address_5.end_date.strftime('%m/%Y'),
                    (530,
                     480),
                    10,
                    False,
                    "A.III.",
                    "2"))
        if school_1:
            school_1.add_fields(fields, (40, 402), (203, 402), (329, 402), (475, 402), (530, 402))
        if school_2:
            school_2.add_fields(fields, (40, 384), (203, 384), (329, 384), (475, 384), (530, 384))
        if school_3:
            school_3.add_fields(fields, (40, 366), (203, 366), (329, 366), (475, 366), (530, 366))
        if school_4:
            school_4.add_fields(fields, (40, 348), (203, 348), (329, 348), (475, 348), (530, 348))

        if employer_1:
            employer_1.add_fields(fields, (40, 270), (316, 270), (475, 270), (530, 270))
        if employer_2:
            employer_2.add_fields(fields, (40, 252), (316, 252), (475, 252), (530, 252))
        if employer_3:
            employer_3.add_fields(fields, (40, 234), (316, 234), (475, 234), (530, 234))

        mother.add_fields(fields, (70, 162), (203, 162), (450, 162), (401, 162))
        father.add_fields(fields, (70, 144), (203, 144), (450, 144), (401, 144))
        if sibling_1:
            sibling_1.add_fields(fields, (70, 126), (203, 126), (450, 126), (401, 126))
        if sibling_2:
            sibling_2.add_fields(fields, (70, 108), (203, 108), (450, 108), (401, 108))
        if sibling_3:
            sibling_3.add_fields(fields, (70, 90), (203, 90), (450, 90), (401, 90))
        if sibling_4:
            sibling_4.add_fields(fields, (70, 72), (203, 72), (450, 72), (401, 72))
        Page.__init__(self, fields, "resources/i-589-page-4.pdf")