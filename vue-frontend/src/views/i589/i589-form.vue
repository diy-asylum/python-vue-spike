<template>
	<form v-on:submit.prevent>
		<page1 v-if="currentPage === 1"></page1>
		<page2 v-else-if="currentPage === 2"></page2>
		<div class="btn-group" role="group">
			<button class="btn btn-secondary" @click="previousClick">Previous</button>
			<button class="btn btn-primary" @click="nextClick">Next</button>
		</div>
	</form>

</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from 'vue-property-decorator'
	import storeHelper from "@/store/helper";
	import {
		Forms
	} from "@/enums";
	import page1 from "@/views/i589/subforms/page1.vue";
	import page2 from "@/views/i589/subforms/page2.vue";

	const maxPages = 2;

	// Define the component in class-style
	@Component({
		components: {
			page1,
			page2
		}
	})
	export default class formI589 extends Vue {
		get currentPage(): number {
			return this.$store.getters.getI589Page;
		}

		nextClick() {
			if (this.currentPage < maxPages) {
				storeHelper.NextPage(Forms.i589);
			}
		}

		previousClick() {
			if (this.currentPage > 1) {
				storeHelper.PreviousPage(Forms.i589);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>