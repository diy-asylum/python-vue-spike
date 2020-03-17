import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import FormPageState from "@/data/FormPageState";
import { Page1, Page2 } from "@/data/pageStates/i589/pages";
import { Forms } from "@/enums";
import Vue from "vue";

@Module({ name: "i589State", stateFactory: true })
export default class I589State extends VuexModule {
	loaded = false;
	pageStates = new Array<FormPageState>();
	currentPageNumber = 1;

	@Mutation
	setPageNumber(pageNumber: number): void {
		this.currentPageNumber = pageNumber;
	}

	@Mutation
	setupPageStates(): void {
		this.pageStates.push(new Page1(Forms.i589, 1));
		this.pageStates.push(new Page2(Forms.i589, 2));
		this.loaded = true;
	}

	@Mutation
	setPageState(pageState: FormPageState): void {
		Vue.set(this.pageStates, pageState.FormPage - 1, pageState);
	}

	/**
	 * set form page number
	 * @param pageNumber
	 */
	@Action({ commit: "setPageNumber" })
	setPageNumberAction(pageNumber: number): number {
		return pageNumber;
	}

	/**
	 * setup initial page states
	 */
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