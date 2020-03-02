<i18n>
	{
	"en": {
	"form-name": "Your Name",
	"last-name": "Last Name",
	"first-name": "First Name",
	"middle-name" : "Middle Name",
	"other-names" : "Other Names"
	},
	"es": {
	"form-name": "Tu Nombre",
	"last-name": "Apellido",
	"first-name": "Nombre de pila",
	"middle-name": "Segundo nombre",
	"other-names": "Otros nombres"
	}
	}
</i18n>
<template>
	<div>
		<h4>{{$t("form-name")}}</h4>
		<div class="form-group"><label>{{$t("last-name")}}</label><input v-model="lastName" type="text"
				class="form-control" value="">
		</div>
		<div class="form-group"><label>{{$t("first-name")}}</label><input v-model="firstName" type="text"
				class="form-control" value=""></div>
		<div class="form-group"><label>{{$t("middle-name")}}</label><input v-model="middleName" type="text"
				class="form-control" value=""></div>
		<div class="form-group"><label>{{$t("other-names")}}</label><input v-model="otherNames" type="text"
				class="form-control" value=""></div>
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
		lastName = "";
		firstName = "";
		middleName = "";
		otherNames = "";
	}
</script>

<style lang="scss" scoped>

</style>