<template>
	<div @click="gotoSection()" class="subitem" v-bind:class="{current: isCurrentSection(), unfinished: isUnfinished()}">
		<slot></slot>
	</div>

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
			if (this.section === i589State.currentPageNumber) {
				return;
			} else if (this.section === -1) {
				i589State.setPageNumber(this.section);
				router.push(`/i589/finalize`);
			} else if (this.section === 0) {
				i589State.setPageNumber(this.section);
				router.push("/i589/start");
			} else {
				i589State.setPageNumber(this.section);
				router.push(`/i589/${this.section}`);
			}
		}

		isCurrentSection() {
			if (this.loaded) {
				return this.section === i589State.currentPageNumber;
			}
			return false;
		}

		isUnfinished() {
			if (this.loaded) {
				if (this.section > 0) {
					return i589State.currentFormSubject.Data[this.section - 1].Completion !== FormCompletion.Completed;
				}
				return false;

			} else {
				return false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.subitem {
		padding-left: 1em;
		cursor: pointer;
	}
</style>