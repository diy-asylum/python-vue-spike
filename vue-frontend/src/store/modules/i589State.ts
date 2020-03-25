import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import FormPageState from "@/data/FormPageState";
import FormSubject from "@/data/FormSubject";
import { FormSubjectEnum } from "@/enums";
import Vue from "vue";

@Module({ name: "i589State", stateFactory: true })
export default class I589State extends VuexModule {
	loaded = false;
	currentFormSubject = new FormSubject(FormSubjectEnum.Self);
	currentPageNumber = 0;

	hasSpouse = false;
	numChildren = 0;

	formSubjectList = new Array<FormSubject>();

	@Mutation
	setPageNumber(pageNumber: number): void {
		this.currentPageNumber = pageNumber;
	}

	@Mutation
	setupPageStates(): void {
		this.formSubjectList.push(this.currentFormSubject);
		this.loaded = true;
	}

	@Mutation
	setPageState(pageState: FormPageState): void {
		Vue.set(this.currentFormSubject.Data, pageState.FormPage - 1, pageState);
	}

	@Mutation
	setFormChildren(subject: FormSubjectEnum): void {
		const newNumChildren = subject - 2; // Convert from enum
		const currentSubject = this.numChildren + 2;
		const childrenDiff = newNumChildren - this.numChildren;


		console.log(subject, this.numChildren);

		// Add / remove children as necessary
		if (childrenDiff === 0) {
			return;
		}
		else if (childrenDiff > 0) {
			for (let i = currentSubject; i < subject; i++) {
				this.formSubjectList.push(new FormSubject(i));
			}
		}
		else {
			for (let i = subject + 1; i <= currentSubject; i++) {
				const childIndex = this.formSubjectList.findIndex(s => s.Subject === i);
				this.formSubjectList.splice(childIndex, 1);
			}
		}

		this.numChildren = newNumChildren;
	}

	@Mutation
	addFormSubject(subject: FormSubjectEnum): void {
		const subjectExists = this.formSubjectList.find(s => s.Subject === subject);
		if (!subjectExists) {
			this.formSubjectList.push(new FormSubject(subject));
		}

		if (subject === FormSubjectEnum.Spouse) {
			this.hasSpouse = true;
		}
	}

	@Mutation
	removeFormSubject(subject: FormSubjectEnum): void {
		const subjectIndex = this.formSubjectList.findIndex(s => s.Subject === subject);
		if (subjectIndex >= 0) {
			this.formSubjectList.splice(subjectIndex, 1);
		}

		if (subject === FormSubjectEnum.Spouse) {
			this.hasSpouse = false;
		}
	}

	/**
	 * set form page number
	 * @param pageNumber
	 */
	@Action({ commit: "setPageNumber" })
	setPageNumberAction(pageNumber: number): number {
		return pageNumber;
	}

	@Action({ commit: "setupPageStates" })
	setupPageStatesAction(): void {
		return;
	}

	@Action({ commit: "setFormChildren" })
	setFormChildrenAction(subject: FormSubjectEnum) {
		return subject;
	}

	/**
	 * Use for spouse
	 * @param subject 
	 */
	@Action({ commit: "addFormSubject" })
	addFormSubjectAction(subject: FormSubjectEnum) {
		return subject;
	}

	/**
	* Use for spouse
	* @param subject
	*/
	@Action({ commit: "removeFormSubject" })
	removeFormSubjectAction(subject: FormSubjectEnum) {
		return subject;
	}

	/**
	 * update existing page state
	 * @param pageState 
	 */
	@Action({ commit: "setPageState" })
	setPageStateAction(pageState: FormPageState): FormPageState {
		return pageState;
	}


}