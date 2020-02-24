import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		i589Page: 1
	},
	mutations: {
		nextI589(state) {
			state.i589Page++;
		},
		prevI589(state) {
			state.i589Page--;
		}
	},
	actions: {
		nextI589(context) {
			context.commit("nextI589");
		},
		prevI589(context) {
			context.commit("prevI589");
		}
	},
	modules: {
	},
	getters: {
		getI589Page: state => {
			return state.i589Page;
		}
	}
})
