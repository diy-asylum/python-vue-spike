import {
	Vue,
	Component
} from 'vue-property-decorator'
import {
	i589State
} from "@/store/index";

@Component
export default class i589FormPage extends Vue {
	helpField: string | null = null;

	focused(arg: Event) {
		this.helpField = (arg.target as HTMLElement).getAttribute("form");
	}
	get help(): string {
		return this.$t(`${this.helpField ? this.helpField : "shared.select"}-help`).toString();
	}

	get loaded() {
		return i589State.loaded;
	}

}
