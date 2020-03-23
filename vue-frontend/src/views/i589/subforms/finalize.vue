inputVal<i18n>
	{
	"en": {
		"form-name": "Finalize i589"
	},
	"es": {
	"form-name": "Finalizar i589"
	}
	}
</i18n>
<template>
	<div class="container" v-if="loaded">
		<div class="row">
			<div class="center-form col-md-8">
				
					<h4>{{$t("form-name")}}</h4>
					<p>
						Let's check over your form to make sure we have all the information we need.
					</p>
					<button class="btn btn-info">Generate PDF Form</button>
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