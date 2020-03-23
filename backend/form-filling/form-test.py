from form_constructor import form_constructor
import json
from form import Form
import sys
import os
import timeit
from io import BytesIO
from PyPDF2 import PdfFileWriter, PdfFileReader, PdfFileMerger
from time import time
def fill():
    with open(os.path.dirname(sys.path[0]) + '/tests/resources/dummy_example.json', 'r') as f:
        data = ''
        for line in f:
            data += line
        data = json.loads(data)
        data['childInfo'] = data['childInfo'] * 5

    pages, num_copies = form_constructor(data)
    merger = Form(pages).assemble()
    tmp = BytesIO()
    for i in range(num_copies):
        merger.write(tmp)
    tmp.seek(0)
    with open("i-589-test.pdf",'wb') as out:
        out.write(tmp.getvalue())
    merger.close()
    tmp.close()

if __name__ == '__main__':
    start = time()
    fill()
    end = time()
    print(end - start)
