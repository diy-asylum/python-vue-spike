import { i589State } from "@/store";
import messages from "@/i18n/messages/messages.json";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	messages: messages,
	silentFallbackWarn: true
})

i589State.setupPageStatesAction();

export default i18n;

