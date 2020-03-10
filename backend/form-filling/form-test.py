from form import Field, Page, Form

pages = [Page(fields=[Field("hhhihihihhihhi", (50,50),50, False, "","")], filename="resources/i-589-page-" + str(i)+ ".pdf") for i in range(1,13)]
form = Form(pages)
output = form.assemble()
with open("i-589-test.pdf",'wb') as out:
    output.write(out)