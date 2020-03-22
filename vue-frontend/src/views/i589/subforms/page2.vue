<i18n>
	{
	"en": {
			"instructions": "Your complete name",
	"form-name": "Your Name",
	"last-name": "Last Name",
	"last-name-help": "Your complete last (family) name",
	"first-name": "First Name",
	"first-name-help": "Your first (given) name",
	"middle-name" : "Middle Name",
	"middle-name-help" : "Your middle name",
	"other-names" : "Other Names",
	"other-names-help" : "Other Names"
	},
	"es": {
			"instructions": "Tu nombre completo",
	"form-name": "Tu Nombre",
	"last-name": "Apellido",
	"last-name-help": "Su apellido completo (familia)",
	"first-name": "Nombre de pila",
	"first-name-help": "Tu nombre (dado)",
	"middle-name": "Segundo nombre",
	"middle-name-help" : "Tu segundo nombre",
	"other-names": "Otros nombres",
	"other-names-help" : "Incluya nombre de soltera y alias, si los hay. Separados por comas. Si no hay otros nombres,déjelo en blanco."
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				<ValidationObserver>
					<h4>{{$t("form-name")}}</h4>
					<TextInput @focus="focused" v-model="LastName" form="last-name" type="text"
						rules="required" />
					<TextInput @focus="focused" v-model="FirstName" form="first-name" type="text"
						rules="required" />
					<TextInput @focus="focused" v-model="MiddleName" form="middle-name" type="text" />
					<TextInput @focus="focused" v-model="OtherNames" form="other-names" type="text" />
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
	import i589FormPage from "@/components/i589FormPage";
	import {
		i589State
	} from "@/store/index";
	import {
		Page2
	} from '@/data/pageStates/i589/page2';

	// Define the component in class-style
	@Component
	export default class page2 extends i589FormPage {
		get pageState() {
			return i589State.pageStates.find(ps => ps.FormPage === 2) as Page2
		}

		get LastName() {
			return this.pageState.LastName;
		}
		set LastName(value) {
			this.SetStateVal(value, "LastName", this.pageState );
		}

		get FirstName() {
			return this.pageState.FirstName;
		}
		set FirstName(value) {
			this.SetStateVal(value, "FirstName", this.pageState );
		}
		get MiddleName() {
			return this.pageState.MiddleName;
		}
		set MiddleName(value) {
			this.SetStateVal(value, "MiddleName", this.pageState );
		}

		get OtherNames() {
			return this.pageState.OtherNames;
		}
		set OtherNames(value) {
			this.SetStateVal(value, "OtherNames", this.pageState );
		}
	}
</script>

<style lang="scss" scoped>

</style>