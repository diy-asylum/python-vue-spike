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
	<div>
		<h4>{{$t("form-name")}}</h4>
		<div class="form-group"><label>{{$t("alien-reg-num")}}</label><input v-model="alienRegNum" type="text"
				class="form-control" value="">
		</div>
		<div class="form-group"><label>{{$t("us-ssn")}}</label><input v-model="usSsn" type="text" class="form-control"
				value=""></div>
		<div class="form-group"><label>{{$t("uscis-acctnum")}}</label><input v-model="uscisAcctNum" type="text"
				class="form-control" value=""></div>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from 'vue-property-decorator'

	// Define the component in class-style
	@Component
	export default class page1 extends Vue {
		alienRegNum = "";
		usSsn = "";
		uscisAcctNum = "";
	}
</script>

<style lang="scss" scoped>

</style>