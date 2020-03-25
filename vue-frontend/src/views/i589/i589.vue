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
			<h2 class="mb-0">{{$t("form-name")}}</h2>
		</div>

		<div class="row top-pad data-entry card-body">
			<div class="progress-panel col-lg-3">
				<h4 class="ml-4">{{$t("progress-title")}}</h4>

				<div>
					<i class='fa fa-caret-right start' aria-hidden='true'></i>
					<NavSection class="anchor-section" :section="0">Start
					</NavSection>
				</div>
				<div role="tablist">
					<div v-for="subject in FormSubjects" :key="subject.Subject" no-body class="mb-1 border-0">
						<div header-tag="header" role="tab">
							<div class="accordion-header" v-b-toggle="'accordion-' + subject.SubjectTypeString"><i
									class="fa fa-caret-right"></i>{{subject.SubjectTypeString}}
							</div>
						</div>
						<b-collapse :id="'accordion-' + subject.SubjectTypeString" accordion="my-accordion" role="tabpanel">
							<div>
								<NavSection :subject="subject.Subject" :section="1">Registration Numbers</NavSection>
								<NavSection :subject="subject.Subject" :section="2">Name</NavSection>
								<NavSection :subject="subject.Subject" :section="3">Residence in the U.S.</NavSection>
								<NavSection :subject="subject.Subject" :section="4">Mailing Address in the U.S.</NavSection>
							</div>
						</b-collapse>
					</div>
				</div>
				<!--<li @click="gotoSection(5)" class="unfinished">Demographic Information</li>
					<li @click="gotoSection(6)" class="unfinished">Immigration Status</li>
					<li @click="gotoSection(7)" class="unfinished">Travel Documents</li>
					<li @click="gotoSection(8)" class="unfinished">Language</li> -->
				<div>
					<i class='fa fa-caret-right finalize' aria-hidden='true'></i>
					<NavSection class="anchor-section" :section="-1">Finalize
					</NavSection>
				</div>
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

		get FormSubjects()
		{
			return i589State.formSubjectList;
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

	.start {
		color: lightgreen;
	}

	.finalize {
		color: darkred;
	}

	.accordion-header {
		cursor: pointer;
	}

	i {
		padding-right: 0.7em;
	}

	.anchor-section {
		display: inline;
		margin-left: -1em;
	}
</style>