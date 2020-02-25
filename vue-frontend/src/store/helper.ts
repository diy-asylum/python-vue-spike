import { Forms } from "@/enums";
import SetPageModel from "@/data/SetPageModel";
import StoreConsts from "@/store/storeConsts";
import store from "@/store/index";

export default new class StoreHelper {
	NextPage(form: Forms): void {
		store.dispatch(StoreConsts.NextPageAction, form);
	}

	PreviousPage(form: Forms) {
		store.dispatch(StoreConsts.PrevPageAction, form);
	}

	SetPage(form: Forms, page: number) {
		store.dispatch(StoreConsts.SetPageAction, new SetPageModel(page, form));
	}

	//TODO: Initialize vuex store with actual page states
	InitStore() {
		for (let i = 0; i < 9; i++) {
			console.log(i);
		}
	}
}