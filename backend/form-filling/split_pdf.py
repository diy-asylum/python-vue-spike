from PyPDF2 import PdfFileWriter, PdfFileReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import tornado.ioloop
import tornado.web
from io import BytesIO

existing_pdf = PdfFileReader(open("resources/i-589.pdf", "rb"))

for i in range(12):
    output = PdfFileWriter()
    page = existing_pdf.getPage(i)
    output.addPage(page)
    outfp=open("resources/i-589-page-" + str(i+1) + ".pdf",'wb')
    output.write(outfp)