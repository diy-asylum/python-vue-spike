/* import Vue from "vue";
import Vuex from "vuex";
import FormPageState from "@/data/FormPageState";
import SetPageModel from "@/data/SetPageModel";
import { Forms } from "@/enums";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		i589Page: 1,
		i589PageStates: new Array<FormPageState>()
	},
	mutations: {
		nextPage(state, form: Forms) {
			switch (form) {
				case Forms.i589:
					state.i589Page++;
					break;
			}

		},
		prevPage(state, form: Forms) {
			switch (form) {
				case Forms.i589:
					state.i589Page--;
					break;
			}
		},
		setPage(state, pageModel: SetPageModel) {
			switch (pageModel.Form) {
				case Forms.i589:
					state.i589Page = pageModel.Page;
					break;
			}
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
		nextPage(context, form: Forms) {
			context.commit("nextPage", form);
		},
		prevPage(context, form: Forms) {
			context.commit("prevPage", form);
		},
		setPage(context, pageModel: SetPageModel) {
			context.commit("setPage", pageModel);
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
 */

import Vue from "vue";
import Vuex from "vuex";
import I589State from "@/store/modules/i589State";
import {
	getModule
} from "vuex-module-decorators";

Vue.use(Vuex);

/* const vuexLocal = new VuexPersistence({
	storage: window.localStorage
}); */

const store = new Vuex.Store({
	modules: {
		i589State: I589State
	},
	//plugins: [vuexLocal.plugin]
});
export default store;
export const i589State: I589State = getModule(I589State, store);