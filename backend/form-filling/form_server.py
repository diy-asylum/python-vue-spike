from datetime import date
from form import Form
from io import BytesIO
import tornado.ioloop
import tornado.web
import tornado
import json
from form_constructor import form_constructor

class MainHandler(tornado.web.RequestHandler):
    def post(self):
        self.set_header('Content-Type', 'application/pdf; charset="utf-8"')
        self.set_header('Content-Disposition', 'attachment; filename="i-589-filled.pdf"')
        data = tornado.escape.json_decode(self.request.body)
        pages, num_copies = form_constructor(data)
        form = Form(pages)
        output = form.assemble()
        tmp = BytesIO()
        for i in range(num_copies):
            output.write(tmp)
        tmp.seek(0)
        self.write(tmp.getvalue())
        self.finish()

class HealthCheckHandler(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Content-Type', 'application/json; charset="utf-8"')
        self.write(json.dumps({'status':'OK'}))


application = tornado.web.Application([
    (r"/", HealthCheckHandler),
    (r"/fill-i589", MainHandler),
])

if __name__ == "__main__":
    application.listen(12345)
    tornado.ioloop.IOLoop.instance().start()
