<i18n>
	{
	"en": {
	"instructions": "Numbers that help identify you and track your application",
	"form-name": "Registration Numbers",
	"alien-reg-num": "Alien Registration Number(s)",
	"alien-reg-num-help": "If you have multiple, enter them separated by commas. If you do not have any, please leave this blank",
	"us-ssn": "U.S. Social Security Number",
	"us-ssn-help": "Alien Registration Number(s)",
	"uscis-acctnum" : "USCIS Online Account Number",
	"uscis-acctnum-help": "Alien Registration Number(s)"
	},
	"es": {
	"instructions": "Números que ayudan a identificarlo y rastrear su solicitud",
	"form-name": "Números de registro",
	"alien-reg-num": "Número (s) de registro de extranjero",
	"alien-reg-num-help": "Si tiene múltiples, ingréselos separados por comas. Si no tiene ninguno, déjelo en blanco",
	"us-ssn": "Número de Seguro Social EE.UU",
	"uscis-acctnum": "Número de cuenta en línea de USCIS"
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				<ValidationObserver>
					<h4>{{$t("form-name")}}</h4>
					<div class="form-group"><label>{{$t("alien-reg-num")}}</label>
						<TextInput @focus="focused" v-model="AlienRegNumber" form="alien-reg-num" :name="$t('alien-reg-num')" rules="required|aregnum" />
					</div>
					<div class="form-group"><label>{{$t("us-ssn")}}</label>
						<TextInput v-model="USSSN" :name="$t('us-ssn')" type="text" rules="required|ssn" />
					</div>
					<div class="form-group"><label>{{$t("uscis-acctnum")}}</label>
						<TextInput v-model="USCISAcctNum" :name="$t('uscis-acctnum')" type="text"
							rules="required|uscisnum" />
					</div>
				</ValidationObserver>
			</div>
			<HelpSideBar class="col-md-4" :help="help" :instructions="$t('instructions')"></HelpSideBar>
		</div>

	</div>
</template>

<script lang="ts">
	import {
		Component
	} from 'vue-property-decorator'
	import {
		i589State
	} from "@/store/index";
	import {
		Page1
	} from "@/data/pageStates/i589/page1";
	import HelpSideBar from "@/components/HelpSideBar.vue";
	import i589FormPage from "@/components/i589FormPage";

	// Define the component in class-style
	@Component({
		components: {
			HelpSideBar
		}
	})
	export default class page1 extends i589FormPage {

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
			//console.log(state);
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
			//console.log(state);
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