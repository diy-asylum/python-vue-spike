import { Forms } from "@/enums";
import StoreConsts from "@/store/storeConsts";
import store from "@/store/index";

export default new class StoreHelper {
	NextPage(form: Forms): void {
		switch (form) {
			case Forms.i589:
				store.dispatch(StoreConsts.NextPageI589Action);
				break;
		}
	}

	PreviousPage(form: Forms) {
		switch (form) {
			case Forms.i589:
				store.dispatch(StoreConsts.PrevPageI589Action);
				break;
		}
	}

	SetPage(form: Forms, page: number) {
		switch (form) {
			case Forms.i589:
				store.dispatch(StoreConsts.SetPageI589Action, page);
				break;
		}
	}

	InitStore() {
		for (let i = 0; i < 9; i++) {
			console.log(i);
		}
	}
}