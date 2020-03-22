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
	<div class="container">
		<h2>{{$t("form-name")}}</h2>
		<div class="row top-pad data-entry">
			<div class="progress-panel col-lg-3">
				<h4 class="ml-4">{{$t("progress-title")}}</h4>
				<ol v-if="loaded">
					<li @click="gotoSection(1)"
						v-bind:class="{current: isCurrentSection(1), unfinished: isUnfinished(1)}">
						Registration Numbers
					</li>
					<li @click="gotoSection(2)"
						v-bind:class="{current: isCurrentSection(2), unfinished: isUnfinished(2)}">
						Your name
					</li>
					<li @click="gotoSection(3)" v-bind:class="{current: isCurrentSection(3), unfinished: isUnfinished(3)}">
						Residence in
						the U.S.
					</li>
					<li @click="gotoSection(4)" class="unfinished">Mailing Address in the U.S.</li>
					<li @click="gotoSection(5)" class="unfinished">Demographic Information</li>
					<li @click="gotoSection(6)" class="unfinished">Immigration Status</li>
					<li @click="gotoSection(7)" class="unfinished">Travel Documents</li>
					<li @click="gotoSection(8)" class="unfinished">Language</li>
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
	import {
		FormCompletion
	} from "@/enums";
	import router from "@/router";
	// Define the component in class-style
	@Component({
		components: {
			'i589-form': formI589
		}
	})
	export default class i589 extends Vue {

		get loaded() {
			return i589State.loaded;
		}

		gotoSection(section: number) {
			if (section !== i589State.currentPageNumber) {
				i589State.setPageNumber(section);
				router.push(`/i589/${section}`);
			}
		}

		isCurrentSection(pageNumber: number) {
			return pageNumber === i589State.currentPageNumber;
		}

		isUnfinished(pageNumber: number) {
			return i589State.pageStates[pageNumber - 1].Completion !== FormCompletion.Completed;
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