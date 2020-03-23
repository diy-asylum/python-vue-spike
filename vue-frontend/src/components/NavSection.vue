<template>
	<li @click="gotoSection()" v-bind:class="{current: isCurrentSection(), unfinished: isUnfinished()}">
		<slot></slot>
	</li>

</template>

<script lang="ts">
	import {
		Vue,
		Component,
		Prop
	} from 'vue-property-decorator';
	import {
		i589State
	} from "@/store";
	import router from "@/router";
	import {
		FormCompletion
	} from "@/enums";

	@Component
	export default class NavSection extends Vue {
		@Prop(Number) readonly section!: number;

		get loaded() {
			return i589State.loaded;
		}

		gotoSection() {
			if (this.section === -1) {
				i589State.setPageNumber(this.section);
				router.push(`/i589/finalize`);
			} else if (this.section !== i589State.currentPageNumber) {
				i589State.setPageNumber(this.section);
				router.push(`/i589/${this.section}`);
			}
		}

		isCurrentSection() {
			if (this.section && this.loaded) {
				return this.section === i589State.currentPageNumber;
			}
			return false;
		}

		isUnfinished() {
			if (this.section && this.loaded) {
				if (this.section !== -1) {
					return i589State.pageStates[this.section - 1].Completion !== FormCompletion.Completed;
				}
				return true;

			} else {
				return false;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>