<i18n>
	{
	"en": {
	"form-name": "Form i589",
	"progress-title": "Application Progress",
	"instructions-title": "Instructions",
	"help-title" : "Help"
	},
	"es": {
	"form-name": "Formulario i589",
	"progress-title": "Progreso de la aplicación",
	"instructions-title": "Instrucciones",
	"help-title": "Ayuda"
	}
	}
</i18n>
<template>
	<div class="container">
		<h2>{{$t("form-name")}}</h2>
		<div class="row top-pad data-entry">
			<div class="progress-panel col-lg-3">
				<h4>{{$t("progress-title")}}</h4>
				<ol>
					<li @click="gotoSection(1)" class="unfinished">Registration Numbers</li>
					<li @click="gotoSection(2)" class="unfinished">Your name</li>
					<li @click="gotoSection(3)" class="unfinished">Residence in the U.S.</li>
					<li @click="gotoSection(4)" class="unfinished">Mailing Address in the U.S.</li>
					<li @click="gotoSection(5)" class="unfinished">Demographic Information</li>
					<li @click="gotoSection(6)" class="unfinished">Immigration Status</li>
					<li @click="gotoSection(7)" class="unfinished">Travel Documents</li>
					<li @click="gotoSection(8)" class="unfinished">Language</li>
				</ol>
			</div>
			<div class="center-form col-lg-6">
				<i589-form></i589-form>
			</div>
			<div class="instructions-panel col-lg-3">
				<h4>{{$t("instructions-title")}}</h4>
				<p>Numbers that help identify you and track your application</p>
				<div>
					<h5>{{$t("help-title")}}</h5>
					<p>Click on a question box to for specific instructions</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component,
		//Prop,
		//Watch
	} from 'vue-property-decorator'
	import formI589 from "@/views/i589/i589-form.vue";
	import {
		i589State
	} from "@/store/index";
	// Define the component in class-style
	@Component({
		components: {
			'i589-form': formI589
		}
	})
	export default class i589 extends Vue {
		gotoSection(section: number) {
			i589State.setPageNumber(section);

			//storeHelper.SetPage(Forms.i589, section);
		}
	}
</script>

<style lang="scss">
	.unfinished {
		color: #aaa;
	}

	.progress-panel ol {
		cursor: pointer;
	}
</style>