import { Forms, FormCompletion } from "@/enums";

export default class FormPageState {
	constructor(form: Forms, formPage: number) {
		this.FormPage = formPage;
		this.Form = form;
		this.Completion = FormCompletion.NotStarted;
	}

	FormPage: number;
	Form: Forms;
	Completion: FormCompletion;
}