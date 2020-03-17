import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueI18n from "vue-i18n";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import TextInput from "@/components/TextInput.vue";
import ValidateSetup from "@/data/validationSetup";
import i18n from "@/i18n/setup";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("TextInput", TextInput);
ValidateSetup.Setup();

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueI18n);

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app');
