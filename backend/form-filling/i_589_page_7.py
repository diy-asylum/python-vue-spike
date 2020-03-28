from data_types import *
from form import Page, BooleanField, Field
from typing import Optional


class Page_7(Page):
    def __init__(self,
                 previously_applied: bool,
                 previously_applied_explanation: Optional[str],
                 reside_other_country: bool,
                 lawful_other_country: bool,
                 other_country_explanation: Optional[str],
                 caused_harm: bool,
                 caused_harm_explanation: Optional[str]
                 ):
        fields = []
        if previously_applied:
            fields.append(BooleanField(
                True, (143, 653), "C", "1"))
        else:
            fields.append(BooleanField(
                True, (59, 653), "C", "1"))
        fields.append(
            Field(
                previously_applied_explanation,
                (59,
                 576),
                10,
                False,
                "C",
                "1"))
        if reside_other_country:
            fields.append(BooleanField(
                True, (143, 432), "C", "2A"))
        else:
            fields.append(BooleanField(
                True, (59, 432), "C", "2A"))

        if lawful_other_country:
            fields.append(BooleanField(
                True, (143, 384), "C", "2B"))
        else:
            fields.append(BooleanField(
                True, (59, 384), "C", "2B"))

        fields.append(
            Field(
                other_country_explanation,
                (59,
                 324),
                10,
                False,
                "C",
                "2B"))

        if caused_harm:
            fields.append(BooleanField(
                True, (143, 180), "C", "3"))

        else:
            fields.append(BooleanField(
                True, (59, 180), "C", "3"))
        fields.append(
            Field(
                caused_harm_explanation,
                (59,
                 145),
                10,
                False,
                "C",
                "3"))
        Page.__init__(self, fields, "resources/i-589-page-7.pdf")
