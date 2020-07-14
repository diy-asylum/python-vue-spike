from form_constructor import form_constructor
import json
from form import Form
import sys
import os

with open(os.path.dirname(sys.path[0]) + '/tests/resources/dummy_example.json', 'r') as f:
    data = ''
    for line in f:
        data += line
    data = json.loads(data)
    data['childInfo'] = data['childInfo'] * 2

output = Form(form_constructor(data)).assemble()
with open("i-589-test.pdf",'wb') as out:
    output.write(out)
