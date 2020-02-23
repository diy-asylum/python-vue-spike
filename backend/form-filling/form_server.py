from i_589_page_1 import Page_1
from data_types import Gender, MaritalStatus, ImmigrationCourtStatus, UsEntry
from datetime import date
from form import Form
from io import BytesIO
import tornado.ioloop
import tornado.web
import tornado


class MainHandler(tornado.web.RequestHandler):
    def post(self):
        self.set_header('Content-Type', 'application/pdf; charset="utf-8"')
        self.set_header('Content-Disposition', 'attachment; filename="i-589-filled.pdf"')
        data = tornado.escape.json_decode(self.request.body)
        applicant_info = data['applicantInfo']
        residence = applicant_info['usResidence']
        mailing_address = applicant_info['usMailingAddress']
        travel_history = data['usTravelHistory']
        travel_events = travel_history['travelEvents']
        most_recent_event = travel_events[0]
        if len(travel_events) > 1:
            second_event = UsEntry(travel_events[1]['date'], travel_events[1]['place'], travel_events[1]['status'])
        else:
            second_event = None
        if len(travel_events) > 2:
            third_event = UsEntry(travel_events[2]['date'], travel_events[2]['place'], travel_events[2]['status'])
        else:
            third_event = None
        page_1 = Page_1(applicant_info['alsoApplyingConventionAgainstTorture'],
                applicant_info['alienRegistrationNumber'],
                applicant_info['socialSecurityNumber'],
                applicant_info['uscisAccountNumber'],
                applicant_info['firstName'],
                applicant_info['middleName'],
                applicant_info['lastName'],
                applicant_info['aliases'],
                residence['streetNumber'] + " " + residence['streetName'],
                residence['apartmentNumber'],
                residence['city'],
                residence['state'],
                residence['zipCode'],
                residence['areaCode'] + "-" + residence['phoneNumber'],
                mailing_address['inCareOf'],
                mailing_address['phoneNumber'],
                mailing_address['streetNumber'] + mailing_address['streetName'],
                mailing_address['apartmentNumber'],
                mailing_address['city'],
                mailing_address['state'],
                mailing_address['zipCode'],
                Gender[applicant_info['gender']],
                MaritalStatus[applicant_info['maritalStatus']],
                applicant_info['dateOfBirth'],
                applicant_info['cityOfBirth'],
                applicant_info['countryOfBirth'],
                applicant_info['presentNationality'],
                applicant_info['nationalityAtBirth'],
                applicant_info['raceEthnicOrTribalGroup'],
                applicant_info['religion'],
                ImmigrationCourtStatus[applicant_info['immigrationCourtHistory']],
                travel_history['lastLeftHomeCountry'],
                travel_history['i94Number'],
                UsEntry(most_recent_event['date'], most_recent_event['place'], most_recent_event['status'], travel_history['dateStatusExpires']),
                applicant_info['countryWhoLastIssuedPassport'],
                applicant_info['travelDocumentExpirationDate'],
                applicant_info['nativeLanguage'],
                applicant_info['fluentInEnglish'],
                applicant_info['otherLanguages'],
                applicant_info['passportNumber'],
                applicant_info['travelDocumentNumber'],
                second_event,
                third_event)
        pages = [page_1]
        form = Form(pages)
        output = form.assemble()
        tmp = BytesIO()
        output.write(tmp)
        self.write(tmp.getvalue())
        self.finish()


application = tornado.web.Application([
    (r"/fill-i589", MainHandler),
])

if __name__ == "__main__":
    application.listen(12345)
    tornado.ioloop.IOLoop.instance().start()
