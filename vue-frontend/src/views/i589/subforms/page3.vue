<i18n>
	{
	"en": {
		"instructions": "Use the address where you are currently staying in the United States. This may be a government facility.",
		"form-name": "Residence in the U.S.",
		"street-namenum": "Street Number and Name",
		"apt-num": ""
	},
	"es": {
		"instructions": "Use la dirección donde se encuentra actualmente en los Estados Unidos. Esto puede ser una instalación del gobierno.",
		"form-name": "Residencia en los EE. UU.",
		"street-namenum": "Número y nombre de la calle",
		"apt-num": ""
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				<ValidationObserver>
					<h4>{{$t("form-name")}}</h4>
					<TextInput @focus="focused" v-model="StreetNameNum" form="street-namenum" type="text"
						rules="required" />
							<TextInput @focus="focused" v-model="AptNum" form="street-namenum" type="text" rules="required" />
								<TextInput @focus="focused" v-model="StreetNameNum" form="street-namenum" type="text" rules="required" />

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

		get AptNum() {
			return this.pageState.AptNum;
		}
		set AptNum(value) {
			this.SetStateVal(value, "AptNum", this.pageState );
		}

		get StreetNameNum() {
			return this.pageState.StreetNameNum;
		}
		set StreetNameNum(value) {
			this.SetStateVal(value, "StreetNameNum", this.pageState );
		}

	}
</script>

<style lang="scss" scoped>

</style>