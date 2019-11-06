<template>
	<picker @change="onPickerChange" :value="current" :range="datas" range-key="label">
		<view class="app-select-value">
			<view v-if="currentValue" class="app-select-active">{{ datas[current].label }}</view>
			<view v-else class="app-select-unselect">{{ placeholder }}</view>
			<i class="iconfont app-select-icon">→</i>
		</view>
	</picker>
</template>

<script>
export default {
	props: {
		value: {
			required: true
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		isNull: {
			type: Boolean,
			default: true
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
			return this.isNull ? [{ label: '请选择', value: '' }, ...this.datas] : [...this.datas];
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
	justify-content: flex-end;

	.app-select-active {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
	}
	.app-select-unselect {
		font-size: $uni-font-size-base;
		color: $uni-text-color-placeholder;
	}
	.app-select-icon {
		margin-left: $uni-spacing-row-sm;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
	}
}
</style>
