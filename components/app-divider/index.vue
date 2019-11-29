<template>
	<div class="app-divider">
		<span class="app-divider-title">{{ title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '标题'
		}
	}
};
</script>

<style lang="scss" scoped>
.app-divider {
	width: 100%;
	height: 40upx;
	margin-bottom: 30upx;
	display: flex;
	align-items: center;
	&-title {
		margin: 0 28upx;
		font-size: 28upx;
		color: #333333;
	}
	&::before {
		content: '';
		flex: 1;
		border-top: 1upx dashed #ccc;
	}
	&::after {
		content: '';
		flex: 1;
		border-top: 1upx dashed #ccc;
	}
}
</style>
