<template>
	<div class="form-group"><label>{{name}}</label>
		<ValidationProvider tag="div" :rules="rules" :vid="vid" v-slot="{ errors }">
			<input class="form-control" :name="name" :form="form" v-on="inputListeners" :type="type" v-model="inputVal">
			<span class="text-danger">{{ errors[0] }}</span>
		</ValidationProvider>
	</div>
</template>

<script>
	import {
		ValidationProvider
	} from 'vee-validate';

	export default {
		name: 'TextInput',
		components: {
			ValidationProvider
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			rules: {
				type: [String, Object],
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			form: {
				type: String,
				default: ''
			},
			vid: {
				type: String,
				default: undefined
			},
			type: {
				type: String,
				default: 'text'
			}
		},
		data: () => ({
			currentValue: ''
		}),
		computed: {
			inputVal: {
				get() {
					return this.value;
				},
				set(val) {
					this.$emit('input', val);
				}
			},
			inputListeners: function () {
				/* eslint-disable */
				const vm = this;
				/* eslint-enable */
				// `Object.assign` merges objects together to form a new object
				return Object.assign({},
					// We add all the listeners from the parent
					this.$listeners,
					// Then we can add custom listeners or override the
					// behavior of some listeners.
					{
						// This ensures that the component works with v-model
						input: function (event) {
							vm.$emit('input', event.target.value)
						}
					}
				)
			}
		}
	};
</script>