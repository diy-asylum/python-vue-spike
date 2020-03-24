import FormPageState from "@/data/FormPageState";
import { ImmCourtProc } from "@/data/enums";

export class Page6 extends FormPageState {
	ImmCourtProc: ImmCourtProc | null = null;
	LastLeftCountry: Date | null = null;
	I94Num: string | null = null;
	DateRecentEnterUS: Date | null = null;
	PlaceRecentEnterUS: string | null = null;
	StatusRecentEnterUS: string | null = null;
	CurrentStatusExpire: Date | null = null;
}