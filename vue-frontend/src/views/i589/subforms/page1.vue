<i18n>
	{
	"en": {
	"instructions": "Numbers that help identify you and track your application",
	"form-name": "Registration Numbers",
	"alien-reg-num": "Alien Registration Number(s)",
	"alien-reg-num-help": "If you have multiple, enter them separated by commas. If you do not have any, please leave this blank",
	"us-ssn": "U.S. Social Security Number",
	"us-ssn-help": "If you do not have one, please leave this blank",
	"uscis-acctnum" : "USCIS Online Account Number",
	"uscis-acctnum-help": "If you do not have one, please leave this blank"
	},
	"es": {
	"instructions": "Números que ayudan a identificarlo y rastrear su solicitud",
	"form-name": "Números de registro",
	"alien-reg-num": "Número (s) de registro de extranjero",
	"alien-reg-num-help": "Si tiene múltiples, ingréselos separados por comas. Si no tiene ninguno, déjelo en blanco",
	"us-ssn": "Número de Seguro Social EE.UU",
		"us-ssn-help": "Si no tiene uno, déjelo en blanco",
	"uscis-acctnum": "Número de cuenta en línea de USCIS",
	"uscis-acctnum-help": "Si no tiene uno, déjelo en blanco"
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				<ValidationObserver>
					<h4>{{$t("form-name")}}</h4>
						<TextInput @focus="focused" v-model="AlienRegNumber" form="alien-reg-num" type="text" rules="aregnum" />
						<TextInput @focus="focused" v-model="USSSN" form="us-ssn" type="text" rules="ssn" />
						<TextInput @focus="focused" v-model="USCISAcctNum" form="uscis-acctnum" type="text"
							rules="uscisnum" />
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
	import i589FormPage from "@/components/i589FormPage";

	// Define the component in class-style
	@Component
	export default class page1 extends i589FormPage {

		get pageState() {
			return i589State.pageStates.find(ps => ps.FormPage === 1) as Page1
		}

		get AlienRegNumber() {
			return this.pageState.AlienRegNumber;
		}
		set AlienRegNumber(value) {
			this.SetStateVal(value, "AlienRegNumber", this.pageState );
		}

		get USSSN() {
			return this.pageState.USSSN;
		}
		set USSSN(value) {
			this.SetStateVal(value, "USSSN", this.pageState );
		}
		get USCISAcctNum() {
			return this.pageState.USCISAcctNum;
		}
		set USCISAcctNum(value) {
			this.SetStateVal(value, "USCISAcctNum", this.pageState );
		}
	}
</script>

<style lang="scss" scoped>

</style>