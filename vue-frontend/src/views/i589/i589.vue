<i18n>
	{
	"en": {
	"form-name": "Form i589",
	"progress-title": "Application Progress"
	},
	"es": {
	"form-name": "Formulario i589",
	"progress-title": "Progreso de la aplicación"
	}
	}
</i18n>
<template>
	<div class="container card">
		<div class="row card-header">
			<h2 >{{$t("form-name")}}</h2>
		</div>
		
		<div class="row top-pad data-entry card-body">
			<div class="progress-panel col-lg-3">
				<h4 class="ml-4">{{$t("progress-title")}}</h4>
				<ol v-if="loaded">
					<NavSection :section="1">Registration Numbers</NavSection>
					<NavSection :section="2">Your Name</NavSection>
					<NavSection :section="3">Residence in the U.S.</NavSection>
					<NavSection :section="4">Mailing Address in the U.S.</NavSection>
					<NavSection :section="-1">Finalize</NavSection>

					<!--<li @click="gotoSection(5)" class="unfinished">Demographic Information</li>
					<li @click="gotoSection(6)" class="unfinished">Immigration Status</li>
					<li @click="gotoSection(7)" class="unfinished">Travel Documents</li>
					<li @click="gotoSection(8)" class="unfinished">Language</li> -->
				</ol>
			</div>
			<div class="col-lg-9">
				<i589-form></i589-form>
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
	import NavSection from "@/components/NavSection.vue";

	// Define the component in class-style
	@Component({
		components: {
			'i589-form': formI589,
			'NavSection': NavSection
		}
	})
	export default class i589 extends Vue {

		get loaded() {
			return i589State.loaded;
		}

		
	}
</script>

<style lang="scss">
	.unfinished {
		color: #aaa;
	}

	.current {
		color: black;
	}

	.progress-panel ol {
		cursor: pointer;
	}
</style>