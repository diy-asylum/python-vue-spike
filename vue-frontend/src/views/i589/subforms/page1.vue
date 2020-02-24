<template>
	<div>
		<h4>Registration Numbers</h4>
		<div class="form-group"><label>Alien Registration Number(s)</label><input name="alien-registration-number"
				type="text" class="form-control undefined" value="">

		</div>
		<div class="form-group"><label>U.S. Social Security Number</label><input name="us-ssn" type="text"
				class="form-control undefined" value=""></div>
		<div class="form-group"><label>USCIS Online Account Number</label><input name="uscis-acct-number" type="text"
				class="form-control undefined" value=""></div>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from 'vue-property-decorator'

	// Define the component in class-style
	@Component
	export default class page1 extends Vue {

	}
</script>

<style lang="scss" scoped>

</style>