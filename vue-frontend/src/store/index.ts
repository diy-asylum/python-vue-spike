import Vue from "vue";
import Vuex from "vuex";
import I589State from "@/store/modules/i589State";
import {
	getModule
} from "vuex-module-decorators";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		i589State: I589State
	}
});

export default store;
export const i589State: I589State = getModule(I589State, store);