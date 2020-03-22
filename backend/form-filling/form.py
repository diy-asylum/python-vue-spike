from typing import Dict, Tuple, List
from PyPDF2 import PdfFileWriter, PdfFileReader, PdfFileMerger
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO


class Field:
    def __init__(self,
                 value: str,
                 location: Tuple[int,
                                 int],
                 container_length: int,
                 overflow_to_supplement: bool,
                 part: str,
                 question: str):
        self.value = value
        self.location = location
        self.container_length = container_length
        self.overflow_to_supplement = overflow_to_supplement
        self.part = part
        self.question = question

class BooleanField(Field):
    def __init__(self, is_marked: bool, location: Tuple[int, int], part: str, question: str):
        if is_marked:
            value = "x"
        else:
            value = ""
        Field.__init__(self, value=value, location=location, container_length=0, overflow_to_supplement=False, part=part, question=question)

class Page:
    def __init__(
        self,
        fields: List[Field],
        filename: str):
        self.fields = fields
        self.filename = filename

    def fill(self):
        # create new PDF
        packet = BytesIO()
        can = canvas.Canvas(packet, pagesize=letter)
        can.setFont("Helvetica", 9)
        for field in self.fields:
            if field.value:
                can.drawString(field.location[0], field.location[1], field.value)
        can.save()
        # move to the beginning of the StringIO buffer
        packet.seek(0)
        new_pdf = PdfFileReader(packet)
        # read existing PDF
        existing_pdf = PdfFileReader(open(self.filename, "rb"))
        page = existing_pdf.getPage(0)
        # merge with existing page
        output = PdfFileWriter()
        page.mergePage(new_pdf.getPage(0))
        output.addPage(page)
        tmp = BytesIO()
        output.write(tmp)
        return tmp


class Form:
    def __init__(self, pages: List[Page]):
        self.pages = pages

    def assemble(self):
        merger = PdfFileMerger()
        filled_pages = [x.fill() for x in self.pages]
        for page in filled_pages:
            merger.append(page)
        return merger
