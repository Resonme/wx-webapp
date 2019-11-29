<template>
	<div class="nav-container">
		<div class="nav-btn">
			<span class="nav-btn-item" v-for="item in arrs" :key="item.value" @click="onItemClick(item)" :class="[value === item.value ? 'nav-btn-item--active' : '']">
				{{ item.label }}
			</span>
		</div>
		<div v-if="hasFilter" class="nav-filter" @click="filter">
			<i class="iconfont title-input__icon">&#xe66c;</i>
			<span>筛选</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			required: true
		},
		arrs: {
			type: Array,
			default: function() {
				return [
					{
						label: '全部',
						value: ''
					}
				];
			}
		},
		hasFilter: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		onItemClick(item) {
			if (item.value !== this.value) {
				this.value = item.value;
				this.$emit('input', this.value);
				this.$emit('change', this.value);
			}
		},
		filter() {
			this.$emit('onFilter');
		}
	}
};
</script>

<style lang="scss" scoped>
.nav-container {
	position: relative;
	flex: 0 0 90upx;
	height: 90upx;
	padding: 12upx 40upx;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.03);
	box-sizing: border-box;
	z-index: 8;
	.nav-btn {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		.nav-btn-item {
			position: relative;
			margin: 0;
			height: 34upx;
			line-height: 34upx;
			padding: 0 20upx;
			background: transparent;
			font-size: 28upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			&--active {
				font-size: 34upx;
				font-weight: bold;
				&:before {
					position: absolute;
					content: '';
					left: 50%;
					margin-left: -23upx;
					width: 46upx;
					height: 7upx;
					background-color: #3d67f0;
					bottom: -22upx;
					top: auto;
				}
			}
		}
	}
	.nav-filter {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		flex: 0 0 120upx;
		font-size: 24upx;
	}
}
</style>
