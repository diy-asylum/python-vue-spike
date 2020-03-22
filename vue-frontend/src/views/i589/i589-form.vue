<template>
	<form v-on:submit.prevent>
		<router-view></router-view>
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
	import {
		i589State
	} from "@/store/index";
	import router from "@/router";

	const maxPages = 2;

	// Define the component in class-style
	@Component
	export default class formI589 extends Vue {
		get currentPage(): number {
			return i589State.currentPageNumber;
		}

		nextClick() {
			if (this.currentPage < maxPages) {
				const newPage = this.currentPage + 1;
				i589State.setPageNumberAction(newPage);
				router.push(`/i589/${newPage}`);
			}
		}

		previousClick() {
			if (this.currentPage > 1) {
				const newPage = this.currentPage - 1;
				i589State.setPageNumberAction(newPage);
				router.push(`/i589/${newPage}`);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>