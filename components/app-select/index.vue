<template>
	<picker mode="selector" @change="onPickerChange" :value="current" :range="datas" range-key="label">
		<view class="app-select-value" :class="'app-select-value--' + size">
			<view v-if="currentValue == ''" class="app-select-text app-select-text--unselect">{{ placeholder }}</view>
			<view v-else class="app-select-text">{{ datas[current].label }}</view>
			<view class="app-select-icon"><uni-icons class="uni-icon-wrapper" :size="20" color="#333" type="arrowright" /></view>
		</view>
	</picker>
</template>

<script>
import uniIcons from '../uni-icons/uni-icons.vue';
export default {
	name: 'appSelect',
	components: {
		uniIcons
	},
	props: {
		value: {
			required: true
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		// sm base lg
		size: {
			type: String,
			default: 'base'
		},
		datas: {
			type: Array,
			default: function() {
				return [{ label: '请选择', value: '' }];
			}
		}
	},
	data() {
		return {
			current: 0,
			currentValue: ''
		};
	},
	computed: {
		list() {
			return [...this.datas];
		}
	},
	created() {
		console.log(this.value, 'datas');
		this.value && this.setInitValue();
	},
	methods: {
		setInitValue() {
			this.currentValue = this.value;
			this.datas &&
				this.datas.length > 0 &&
				this.datas.map((item, index) => {
					if (item.value === this.value) {
						this.current = index;
					}
				});
		},
		onPickerChange(e) {
			this.current = e.mp.detail.value;
			const arr = this.datas.filter((item, index) => index === Number(this.current));
			this.currentValue = arr && arr.length > 0 ? arr[0].value : '';
			this.$emit('input', this.currentValue);
			this.$emit('change', arr ? arr[0] : {});
		}
	}
};
</script>

<style lang="scss" scoped>
.app-select-value {
	display: flex;

	.app-select-text {
		flex: 1;
		margin-right: 30upx;
		font-size: 28upx;
		color: #333;
		overflow: hidden;
		&--unselect {
			color: #ccc;
		}
	}

	.app-select-icon {
		margin-left: 10upx;
		font-size: 32upx;
		color: #333;
	}

	&.app-select-value--sm {
		.app-select-text {
			font-size: 24upx;
		}
	}
	&.app-select-value--lg {
		font-size: 32upx;
	}
}
</style>
