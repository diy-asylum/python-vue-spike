from data_types import *
from form import Field, Page

class Page_12(Page):
    def __init__(self,
                 a_number: Optional[str],
                 name: str,
                 date: date,
                 part: str,
                 question: str,
                 text: str
                 ):
        fields = []
        if a_number:
            fields.append(Field(
                    a_number,
                    (40,
                     677),
                    10,
                    False,
                    "",
                    ""))
        fields.append(Field(
                    date.strftime('%m/%d/%Y'),
                    (310,
                     677),
                    10,
                    False,
                    "",
                    ""))
        fields.append(Field(
                    name,
                    (40,
                     647),
                    10,
                    False,
                    "",
                    ""))
        fields.append(Field(
                    part,
                    (85,
                     600),
                    10,
                    False,
                    "",
                    ""))
        fields.append(Field(
                    question,
                    (85,
                     583),
                    10,
                    False,
                    "",
                    ""))
        fields.append(Field(
                    text,
                    (40,
                     555),
                    10,
                    False,
                    "",
                    ""))
        Page.__init__(self, fields, "resources/i-589-page-12.pdf")