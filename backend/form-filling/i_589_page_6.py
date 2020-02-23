from data_types import *
from form import Page, BooleanField, Field
from typing import Optional

class Page_6(Page):
    def __init__(self,
                 been_imprisoned: bool,
                 imprisoned_explanation: Optional[str],
                 belong_group: bool,
                 belong_group_explanation: Optional[str],
                 continue_group: Optional[bool],
                 continue_group_explanation: Optional[str],
                 afraid_torture: bool,
                 afraid_torture_explanation: Optional[str]
                 ):
        fields = []
        if been_imprisoned:
            fields.append(BooleanField(
            True, (143, 678), "B", "2"))
            if imprisoned_explanation:
            	fields.append(
                Field(
                    imprisoned_explanation,
                    (59,
                     645),
                    10,
                    False,
                    "B",
                    "2"))
        else: 
        	fields.append(BooleanField(
            True, (59, 678), "B", "2"))

        if belong_group:
            fields.append(BooleanField(
            True, (143, 498), "B", "3A"))
            if belong_group_explanation:
            	fields.append(
                Field(
                    belong_group_explanation,
                    (59,
                     458),
                    10,
                    False,
                    "B",
                    "3A"))
        else: 
        	fields.append(BooleanField(
            True, (59, 498), "B", "3A"))

        if continue_group is not None:
            if continue_group:
                fields.append(BooleanField(
                True, (143, 336), "B", "3B"))
                if continue_group_explanation:
                    fields.append(
                    Field(
                        continue_group_explanation,
                        (59,
                         296),
                        10,
                        False,
                        "B",
                        "3B"))
            else: 
                fields.append(BooleanField(
                True, (59, 336), "B", "3B"))

        if afraid_torture:
            fields.append(BooleanField(
            True, (143, 174), "B", "4"))
            if afraid_torture_explanation:
            	fields.append(
                Field(
                    afraid_torture_explanation,
                    (59,
                     140),
                    10,
                    False,
                    "B",
                    "4"))
        else: 
        	fields.append(BooleanField(
            True, (59, 174), "B", "4"))
        Page.__init__(self, fields, "resources/i-589-page-6.pdf")