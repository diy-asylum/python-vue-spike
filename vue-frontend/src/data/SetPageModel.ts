import { Forms } from "@/enums";
export default class SetPageModel {
	constructor(page: number, form: Forms) {
		this.Page = page;
		this.Form = form;
	}
	Page: number;
	Form: Forms;
}