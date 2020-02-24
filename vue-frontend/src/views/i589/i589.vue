<template>
	<div class="container">
		<h2>Form i589</h2>
		<div class="row top-pad data-entry">
			<div class="progress-panel col-lg-3">
				<h4>Application Progress</h4>
				<ol>
					<li class="completed">Registration Numbers</li>
					<li class="unfinished">Your name</li>
					<li class="unfinished">Residence in the U.S.</li>
					<li class="unfinished">Mailing Address in the U.S.</li>
					<li class="unfinished">Demographic Information</li>
					<li class="unfinished">Immigration Status</li>
					<li class="unfinished">Travel Documents</li>
					<li class="unfinished">Language</li>
				</ol>
			</div>
			<div class="center-form col-lg-6">
				<i589-form></i589-form>
			</div>
			<div class="instructions-panel col-lg-3">
				<h4>Instructions</h4>
				<p>Numbers that help identify you and track your application</p>
				<div>
					<h5>Help</h5>
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

	// Define the component in class-style
	@Component({
		components: {
			'i589-form': formI589
		}
	})
	export default class i589 extends Vue {




	}
</script>

<style lang="scss">
	.unfinished {
		color: #aaa;
	}
</style>