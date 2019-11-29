<template>
	<div class="app-order">
		<!-- nav  -->
		<app-tabbar></app-tabbar>
		<!--  -->
	</div>
</template>

<script>
import AppTabbar from '@/components/app-tabbar/index.vue';
export default {
	components: {
		AppTabbar
	}
};
</script>

<style lang="scss" scoped>
.top-nav {
	width: 100%;
	height: 120upx;
	background-color: white;
	text-align: center;
	height: 60upx;
	border-bottom: 1upx solid #ddd;
	z-index: 9990;
}
</style>
