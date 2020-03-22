import { extend, configure } from "vee-validate";
import ValidationRegex from "@/data/validationRegex";
import i18n from "@/i18n/setup";

configure({
	// this will be used to generate messages.
	/* eslint-disable */
	defaultMessage: (_, values) => i18n.t(`validations.${(values as Record<string, any>)._rule_}`, values) as string
	/* eslint-enable */
});

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
		});

		extend("ssn", {
			validate(value) {
				return ValidationRegex.SSNRegex.test(value)
			},
		});

		extend("aregnum", {
			validate(value) {
				return ValidationRegex.AlienRegNumRegex.test(value)
			},
		});


		extend("uscisnum", {
			validate(value) {
				return ValidationRegex.USCISAcctNumRegex.test(value)
			},
		});

		extend("phone", {
			validate(value) {
				return ValidationRegex.PhoneRegex.test(value)
			},
		});

		extend("zip", {
			validate(value) {
				return ValidationRegex.ZipCodeRegex.test(value)
			},
		});
	}
}

