import FormPageState from "./FormPageState";
import { FormSubjectEnum } from "@/enums";
import { Page1, Page2, Page3, Page4 } from "@/data/pageStates/i589/pages";
import { Forms } from "@/enums";

export default class FormSubject {
	Data: Array<FormPageState>;
	Subject: FormSubjectEnum;
	constructor(subject: FormSubjectEnum) {
		this.Data = new Array<FormPageState>();
		this.Data.push(new Page1(Forms.i589, 1));
		this.Data.push(new Page2(Forms.i589, 2));
		this.Data.push(new Page3(Forms.i589, 3));
		this.Data.push(new Page4(Forms.i589, 4));
		this.Subject = subject;
	}
}