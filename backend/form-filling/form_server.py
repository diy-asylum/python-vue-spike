from datetime import date
from form import Form
from io import BytesIO
import tornado.ioloop
import tornado.web
import tornado
import json
from form_constructor import form_constructor

class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.set_header('Access-Control-Allow-Headers',
                        'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')
    def post(self):
        self.set_header('Content-Type', 'application/pdf; charset="utf-8"')
        self.set_header('Content-Disposition', 'attachment; filename="i-589-filled.pdf"')
        data = tornado.escape.json_decode(self.request.body)
        pages = form_constructor(data)
        form = Form(pages)
        output = form.assemble()
        tmp = BytesIO()
        output.write(tmp)
        self.write(tmp.getvalue())
        self.set_status(status_code=200)
        self.finish()
    
    def options(self):
        self.set_status(status_code=204)
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
