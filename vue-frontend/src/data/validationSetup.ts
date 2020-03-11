import { extend } from "vee-validate";
import ValidationRegex from "@/data/validationRegex";

//TODO: Add localization
export default new class ValidateSetup {
	Setup() {
		extend("required", {
			validate(value) {
				return {
					required: true,
					valid: ['', null, undefined].indexOf(value) === -1
				};
			},
			computesRequired: true,
			message: "{_field_} is required"
		});

		extend("ssn", {
			validate(value) {
				return ValidationRegex.SSNRegex.test(value)
			},
			message: "{_value_} is not a valid social security number"
		});

		extend("aregnum", {
			validate(value) {
				return ValidationRegex.AlienRegNumRegex.test(value)
			},
			message: "{_value_} is not a Alien Registration Number"
		});


		extend("uscisnum", {
			validate(value) {
				return ValidationRegex.USCISAcctNumRegex.test(value)
			},
			message: "{_value_} is not a valid USCIS Number (type N/A if none)"
		});
	}
}

