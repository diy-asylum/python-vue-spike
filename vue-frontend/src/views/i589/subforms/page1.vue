<i18n>
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
		<ValidationObserver>
			<h4>{{$t("form-name")}}</h4>
			<div class="form-group"><label>{{$t("alien-reg-num")}}</label>
				<TextInput v-model="AlienRegNumber" v-bind:name="$t('alien-reg-num')" rules="required" />
			</div>
			<div class="form-group"><label>{{$t("us-ssn")}}</label>
				<TextInput v-model="USSSN" v-bind:name="$t('us-ssn')" type="text" rules="required|ssn" />
			</div>
			<div class="form-group"><label>{{$t("uscis-acctnum")}}</label>
				<TextInput v-model="USCISAcctNum" v-bind:name="$t('uscis-acctnum')" type="text" rules="required" />
			</div>
		</ValidationObserver>
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
	import {
		Page1
	} from "@/data/pageStates/i589/page1";
	// Define the component in class-style
	@Component
	export default class page1 extends Vue {

		get loaded() {
			return i589State.loaded;
		}

		get pageState() {
			return i589State.pageStates.find(ps => ps.FormPage === 1) as Page1
		}

		get AlienRegNumber() {
			return this.pageState.AlienRegNumber;
		}
		set AlienRegNumber(value) {
			const state = {
				...this.pageState
			};
			state.AlienRegNumber = value;
			console.log(state);
			i589State.setPageStateAction(state);
		}

		get USSSN() {
			return this.pageState.USSSN;
		}
		set USSSN(value) {
			const state = {
				...this.pageState
			};
			state.USSSN = value;
			console.log(state);
			i589State.setPageStateAction(state);
		}
		get USCISAcctNum() {
			return this.pageState.USCISAcctNum;
		}
		set USCISAcctNum(value) {
			const state = {
				...this.pageState
			};
			state.USCISAcctNum = value;
			i589State.setPageStateAction(state);
		}
	}
</script>

<style lang="scss" scoped>

</style>