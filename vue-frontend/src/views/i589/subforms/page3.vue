<i18n>
	{
	"en": {
	"instructions": "Use the address where you are currently staying in the United States. This may be a government facility.",
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
	"instructions": "Use la dirección donde se encuentra actualmente en los Estados Unidos. Esto puede ser una instalación del gobierno.",
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
					<TextInput @focus="focused" v-model="LastName" form="last-name" :name="$t('last-name')"
						rules="required" />
					<TextInput @focus="focused" v-model="FirstName" form="first-name" :name="$t('first-name')"
						rules="required" />
					<TextInput @focus="focused" v-model="MiddleName" form="middle-name" :name="$t('middle-name')" />
					<TextInput @focus="focused" v-model="OtherNames" form="other-names" :name="$t('other-names')" />
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
		Page3
	} from '@/data/pageStates/i589/page3';

	// Define the component in class-style
	@Component
	export default class page3 extends i589FormPage {
		get pageState() {
			return i589State.pageStates.find(ps => ps.FormPage === 3) as Page3
		}

		get StreetNameNum() {
			return this.pageState.StreetNameNum;
		}
		set StreetNameNum(value) {
			const state = {
				...this.pageState
			};
			state.StreetNameNum = value;
			//console.log(state);
			i589State.setPageStateAction(state);
		}


	}
</script>

<style lang="scss" scoped>

</style>