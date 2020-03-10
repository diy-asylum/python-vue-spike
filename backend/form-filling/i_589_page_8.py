from data_types import *
from form import Page, BooleanField, Field
from typing import Optional

class Page_8(Page):
    def __init__(self,
                returned: bool,
                returned_explanation: Optional[str],
                over_a_year: bool,
                over_a_year_explanation: Optional[str],
                committed_crime: bool,
                committed_crime_explanation: Optional[str]
                 ):
        fields = []
        if returned:
            fields.append(BooleanField(
            True, (143, 696), "C", "4"))
            if returned_explanation:
                fields.append(
                Field(
                    returned_explanation,
                    (59,
                     656),
                    10,
                    False,
                    "C",
                    "4"))
        else: 
            fields.append(BooleanField(
            True, (59, 696), "C", "4"))

        if over_a_year:
            fields.append(BooleanField(
            True, (143, 486), "C", "5"))
            if over_a_year_explanation:
                fields.append(
                Field(
                    over_a_year_explanation,
                    (59,
                     434),
                    10,
                    False,
                    "C",
                    "5"))
        else: 
            fields.append(BooleanField(
            True, (59, 486), "C", "5"))

        if committed_crime:
            fields.append(BooleanField(
            True, (143, 252), "C", "6"))
            if committed_crime_explanation:
                fields.append(
                Field(
                    committed_crime_explanation,
                    (59,
                     188),
                    10,
                    False,
                    "C",
                    "6"))
        else: 
            fields.append(BooleanField(
            True, (59, 252), "C", "6"))

        Page.__init__(self, fields, "resources/i-589-page-8.pdf")