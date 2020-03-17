import { extend, configure } from "vee-validate";
import ValidationRegex from "@/data/validationRegex";
import i18n from "@/i18n/setup";

configure({
	// this will be used to generate messages.
	defaultMessage: (_, values) => i18n.t(`validations.${(values as Record<string, any>)._rule_}`, values) as string
});

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
			//message: (_, values) => i18n.t('validations.required', values) as string
			//message: "{_field_} is required"
		});

		extend("ssn", {
			validate(value) {
				return ValidationRegex.SSNRegex.test(value)
			},
			//message: (_, values) => i18n.t('validations.ssn', values) as string
		});

		extend("aregnum", {
			validate(value) {
				return ValidationRegex.AlienRegNumRegex.test(value)
			},
			//message: "{_value_} is not a Alien Registration Number"
		});


		extend("uscisnum", {
			validate(value) {
				return ValidationRegex.USCISAcctNumRegex.test(value)
			},
			//message: "{_value_} is not a valid USCIS Number (type N/A if none)"
		});
	}
}

