import FormPageState from "@/data/FormPageState";
import { Gender } from "@/data/enums";

export class Page5 extends FormPageState {
	Gender: Gender | null = null;
	DateOfBirth: Date | null = null;
	CityCountryBirth: string | null = null;
	Nationality: string | null = null;
	BirthNationality: string | null = null;
	RaceEthnicTribal: string | null = null;
	Religion: string | null = null;
}