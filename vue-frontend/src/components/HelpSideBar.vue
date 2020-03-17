<template>
	<div class="instructions-panel" :instructions="instructions" :help="help">
		<h4>{{$t("shared.instructions-title")}}</h4>
		<p>{{instructions}}</p>
		<div>
			<h5>{{$t("shared.help-title")}}</h5>
			<p>{{help}}</p>
		</div>
	</div>

</template>

<script lang="ts">
	import {
		Vue,
		Component,
		Prop
	} from 'vue-property-decorator'

	@Component
	export default class HelpSideBar extends Vue {
		@Prop(String) readonly instructions: string | undefined;
		@Prop(String) readonly help: string | undefined;
	}
</script>

<style lang="scss" scoped>

</style>