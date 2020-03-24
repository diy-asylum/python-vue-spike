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
		Vue.set(this.currentFormSubject, pageState.FormPage - 1, pageState);
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

	/**
	 * update existing page state
	 * @param pageState 
	 */
	@Action({ commit: "setPageState" })
	setPageStateAction(pageState: FormPageState): FormPageState {
		return pageState;
	}


}