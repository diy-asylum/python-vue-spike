export default class ValidationRegex {
	static SSNRegex = /^\d{3}-?\d{2}-?\d{4}$/
	static AlienRegNumRegex = /^((\d{8})|(\d{9}))$/
	static USCISAcctNumRegex = /^\d+$/
}