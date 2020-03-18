import {
	Vue,
	Component
} from 'vue-property-decorator'
import {
	i589State
} from "@/store/index";
import HelpSideBar from "@/components/HelpSideBar.vue";

@Component({
	components: {
		HelpSideBar
	}
})
export default class i589FormPage extends Vue {
	helpField: string | null = null;

	focused(arg: Event) {
		this.helpField = (arg.target as HTMLElement).getAttribute("form");
	}
	get help(): string {
		console.log(`${this.helpField ? this.helpField : "shared.select"}-help`);
		return this.$t(`${this.helpField ? this.helpField : "shared.select"}-help`).toString();
	}

	get loaded() {
		return i589State.loaded;
	}

}
