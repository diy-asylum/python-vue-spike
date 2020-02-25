import Vue from "vue";
import Vuex from "vuex";
import FormPageState from "@/data/FormPageState";
import { Forms } from "@/enums";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		i589Page: 1,
		i589PageStates: new Array<FormPageState>()
	},
	mutations: {
		nextI589(state) {
			state.i589Page++;
		},
		prevI589(state) {
			state.i589Page--;
		},
		setI589Page(state, page: number) {
			state.i589Page = page;
		},
		addPageState(state, pageState: FormPageState) {
			switch (pageState.Form) {
				case Forms.i589:
					state.i589PageStates.push(pageState);
					break;
			}
		},
		editPageState(state, pageState: FormPageState) {
			let index = -1;
			switch (pageState.Form) {
				case Forms.i589:
					index = state.i589PageStates.findIndex(ps => ps.FormPage === pageState.FormPage);
					if (index !== -1) {
						state.i589PageStates.splice(index, 1, pageState);
					}
					break;
			}
		}
	},
	actions: {
		nextI589(context) {
			context.commit("nextI589");
		},
		prevI589(context) {
			context.commit("prevI589");
		},
		setI589Page(context, page: number) {
			context.commit("setI589Page", page);
		},
		addPageState(context, pageState: FormPageState) {
			context.commit("addPageState", pageState);
		},
		editPageState(context, pageState: FormPageState) {
			context.commit("editPageState", pageState);
		}
	},
	modules: {
	},
	getters: {
		getI589Page: state => {
			return state.i589Page;
		},
		getPageState: (state) => (form: Forms, page: number) => {
			switch (form) {
				case Forms.i589:
					return state.i589PageStates.find(ps => ps.FormPage === page);
			}
			return undefined;
		}
	}
})
