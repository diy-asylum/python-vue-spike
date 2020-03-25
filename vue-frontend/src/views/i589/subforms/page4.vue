<i18n>
	{
	"en": {
	"instructions": "Use an address in the United States where you can currently receive mail. This may be a government facility. If this is the same as your answer to the previous set of questions, leave it blank.",
	"form-name": "Residence in the U.S. for",
	"incare-of": "In Care Of",
	"incare-of-help": "The name of a person who will receive the mail and deliver it to you. If you will receive the mail, leave this blank.",
	"street-namenum": "Street Number and Name",
	"street-namenum-help": "For example, 123 Freedom Street",
	"apt-num": "Apartment Number",
	"apt-num-help": "For example, 5. If not applicable, leave blank.",
	"city": "City",
	"city-help": "For example, Winstonville.",
	"state": "State",
	"state-help": "Use the full name of the state. For example, Arizona.",
	"zip": "Zip Code",
	"zip-help": "For example, 12345",
	"phone": "Phone Number",
	"phone-help": "This should be a phone number you can receive calls to at your current residence in the U.S. For example (850)-555-1234."
	},
	"es": {
	"instructions": "Use una dirección en los Estados Unidos donde actualmente puede recibir correo. Esto puede ser una instalación del gobierno. Si esto es lo mismo que su respuesta al conjunto de preguntas anterior, déjelo en blanco.",
	"form-name": "Residencia en los EE. UU. para",
	"incare-of": "Street Number and Name",
	"incare-of-help": "El nombre de una persona que recibirá el correo y se lo entregará. Si recibirá el correo, déjelo en blanco.",
	"street-namenum": "Número y nombre de la calle",
	"street-namenum-help": "Por ejemplo, 123 Freedom Street",
	"apt-num": "Número de apartamento",
	"apt-num-help": "Por ejemplo, 5. Si no corresponde, déjelo en blanco.",
	"city": "Ciudad",
	"city-help": "Por ejemplo, Winstonville.",
	"state": "Estado",
	"state-help": "Use el nombre completo del estado. Por ejemplo, Arizona.",
	"zip": "Código Postal",
	"zip-help": "Por ejemplo, 12345",
	"phone": "Número de teléfono",
	"phone-help": "Este debe ser un número de teléfono al que pueda recibir llamadas en su residencia actual en los EE. UU. Por ejemplo (850) -555-1234."
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				<ValidationObserver>
					<h4>{{$t("form-name")}} {{subjectString}}</h4>
					<TextInput @focus="focused" v-model="InCareOf" form="incare-of" type="text" />
					<TextInput @focus="focused" v-model="StreetNameNum" form="street-namenum" type="text" />
					<TextInput @focus="focused" v-model="AptNum" form="apt-num" type="text" />
					<TextInput @focus="focused" v-model="City" form="city" type="text"  />
					<TextInput @focus="focused" v-model="State" form="state" type="text"  />
					<TextInput @focus="focused" v-model="Zip" form="zip" type="text" rules="zip" />
					<TextInput @focus="focused" v-model="Phone" form="phone" type="tel" rules="phone" />

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
		Page4
	} from '@/data/pageStates/i589/page4';

	// Define the component in class-style
	@Component
	export default class page4 extends i589FormPage {
		get pageState() {
			return i589State.currentFormSubject.Data.find(ps => ps.FormPage === 4) as Page4;
		}

		get InCareOf() {
		return this.pageState.InCareOf;
		}
		set InCareOf(value) {
		this.SetStateVal(value, "InCareOf", this.pageState);
		}

		get AptNum() {
			return this.pageState.AptNum;
		}
		set AptNum(value) {
			this.SetStateVal(value, "AptNum", this.pageState);
		}

		get StreetNameNum() {
			return this.pageState.StreetNameNum;
		}
		set StreetNameNum(value) {
			this.SetStateVal(value, "StreetNameNum", this.pageState);
		}

		get City() {
			return this.pageState.City;
		}
		set City(value) {
			this.SetStateVal(value, "City", this.pageState);
		}

		get State() {
			return this.pageState.State;
		}
		set State(value) {
			this.SetStateVal(value, "State", this.pageState);
		}

		get Zip() {
			return this.pageState.Zip;
		}
		set Zip(value) {
			this.SetStateVal(value, "Zip", this.pageState);
		}

		get Phone() {
			return this.pageState.Phone;
		}
		set Phone(value) {
			this.SetStateVal(value, "Phone", this.pageState);
		}

	}
</script>

<style lang="scss" scoped>

</style>