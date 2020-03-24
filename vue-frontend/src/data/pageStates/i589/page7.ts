import FormPageState from "@/data/FormPageState";
import { TravelDocType } from "@/data/enums";

export class Page7 extends FormPageState {
	CountryLastTravelDoc: string | null = null;
	TravelDocType: TravelDocType | null = null;
	TravelDocNum: string | null = null;
	TravelDocExpire: Date | null = null;
}