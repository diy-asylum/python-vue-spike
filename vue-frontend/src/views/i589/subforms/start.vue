inputVal<i18n>
	{
	"en": {
	"form-name": "Starting Form i589"
	},
	"es": {
	"form-name": "Formulario de inicio i589"
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">

				<h4>{{$t("form-name")}}</h4>
				<p>
					Let's get started with some information about your family.
				</p>
				<b-form-group label="Do you have a spouse?">
					<b-form-radio v-model="hasSpouse" name="spouse" :value="false">No</b-form-radio>
					<b-form-radio v-model="hasSpouse" name="spouse" :value="true">Yes</b-form-radio>
				</b-form-group>

				<label for="children-select">How many children do you have?</label>
				<b-form-select name="children-select" v-model="numChildren">
					<b-form-select-option :value="0"> None</b-form-select-option>
					<b-form-select-option :value="1">1</b-form-select-option>
					<b-form-select-option :value="2">2</b-form-select-option>
					<b-form-select-option :value="3">3</b-form-select-option>
					<b-form-select-option :value="4">4</b-form-select-option>
				</b-form-select>

			</div>

		</div>

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
import { FormSubjectEnum } from '@/enums';

	// Define the component in class-style
	@Component
	export default class Start extends Vue {

		get numChildren () {
			return i589State.numChildren;
		}
		set numChildren(value: number){
			i589State.setFormChildrenAction(value + 2);
		}
		
		get hasSpouse() {
			return i589State.hasSpouse;
		}
		set hasSpouse(value: boolean)
		{
			if (value)
			{
				i589State.addFormSubjectAction(FormSubjectEnum.Spouse);
			}
			else{
				i589State.removeFormSubjectAction(FormSubjectEnum.Spouse);
			}
		}

		get loaded() {
			return i589State.loaded;
		}

	
	}
</script>

<style lang="scss" scoped>

</style>