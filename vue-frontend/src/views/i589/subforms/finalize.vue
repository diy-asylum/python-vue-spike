inputVal<i18n>
	{
	"en": {
	"form-name": "Registration Numbers",
	"alien-reg-num": "Alien Registration Number(s)",
	"us-ssn": "U.S. Social Security Number",
	"uscis-acctnum" : "USCIS Online Account Number"
	},
	"es": {
	"form-name": "Números de registro",
	"alien-reg-num": "Número (s) de registro de extranjero",
	"us-ssn": "Número de Seguro Social EE.UU",
	"uscis-acctnum": "Número de cuenta en línea de USCIS"
	}
	}
</i18n>
<template>
	<div v-if="loaded">
		<button>Generate PDF</button>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from 'vue-property-decorator'
	import {
		i589State
	} from "@/store/index";
	import Consts from "@/data/consts";
	import
	I589DataGenerator
	from "@/data/api/I589DataGenerator";
	import axios from "axios";

	// Define the component in class-style
	@Component
	export default class page1 extends Vue {

		submitting = false;

		get loaded() {
			return i589State.loaded;
		}

		finalizeClicked() {
			if (this.submitting) {
				return;
			}
			this.submitting = true;

			const data = I589DataGenerator.Generate();

			axios.post(`${Consts.ServerBase}fill-i589`, data)
				.then(response => {
					console.log("Submit success", response)
				})
				.catch(err => {
					console.error("Submit error", err);
				})
				.finally(() => {
					this.submitting = false;
				});
		}
	}
</script>

<style lang="scss" scoped>

</style>