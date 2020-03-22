export default class ValidationRegex {
	static SSNRegex = /^\d{3}-?\d{2}-?\d{4}$/
	static AlienRegNumRegex = /^((\d{8})|(\d{9}))$/
	static USCISAcctNumRegex = /^\d+$/
	static ZipCodeRegex = /^\d{5}(-\d{4})?$/
	static PhoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
}