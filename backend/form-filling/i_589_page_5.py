from data_types import *
from form import Field, BooleanField, Page
from typing import List, Optional

asylum_reason_fields = {
    AsylumReason.RACE: BooleanField(
        True, (59, 535), "B", "1"),
    AsylumReason.RELIGION: BooleanField(
        True, (59, 516), "B", "1"),
    AsylumReason.NATIONALITY: BooleanField(
        True, (59, 497), "B", "1"),
    AsylumReason.POLITICAL_OPINION: BooleanField(
        True, (227, 535), "B", "1"),
    AsylumReason.MEMBERSHIP_IN_SOCIAL_GROUP: BooleanField(
        True, (227, 516), "B", "1"),
    AsylumReason.TORTURE_CONVENTION: BooleanField(
        True, (227, 497), "B", "1")}


class Page_5(Page):
    def __init__(self,
                 asylum_reasons: List[AsylumReason],
                 experienced_harm: bool,
                 experienced_harm_explanation: Optional[str],
                 fear_harm: bool,
                 fear_harm_explanation: Optional[str]
                 ):
        fields = []
        for reason in asylum_reasons:
            fields.append(asylum_reason_fields[reason])
        if experienced_harm:
            fields.append(BooleanField(
                True, (143, 456), "B", "A"))
        else:
            fields.append(BooleanField(
                True, (59, 456), "B", "A"))
        fields.append(
            Field(
                experienced_harm_explanation,
                (59,
                 380),
                10,
                False,
                "B",
                "A"))

        if fear_harm:
            fields.append(BooleanField(
                True, (143, 234), "B", "A"))
        else:
            fields.append(BooleanField(
                True, (59, 234), "B", "A"))
        fields.append(
            Field(
                fear_harm_explanation,
                (59,
                 170),
                10,
                False,
                "B",
                "A"))
        Page.__init__(self, fields, "resources/i-589-page-5.pdf")
