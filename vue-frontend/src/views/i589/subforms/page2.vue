<template>
	<div>
		<div class="form-group"><label>Last Name</label><input name="last-name" type="text"
				class="form-control undefined" value="">
		</div>
		<div class="form-group"><label>First Name</label><input name="first-name" type="text"
				class="form-control undefined" value=""></div>
		<div class="form-group"><label>Middle Name</label><input name="middle-name" type="text"
				class="form-control undefined" value=""></div>
		<div class="form-group"><label>Other names</label><input name="other-names" type="text"
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
	export default class page2 extends Vue {

	}
</script>

<style lang="scss" scoped>

</style>