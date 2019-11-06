<template>
	<!-- 自动登录载入中 -->
	<div class="auto-login-container">
		<image class="img" src="/static/images/auto-login.png" mode=""></image>
		<div class="loading">
			<span class="loading-circle"></span>
			<span class="loading-circle" style="animation-delay:0.3s;"></span>
			<span class="loading-circle" style="animation-delay:0.6s;"></span>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
// 自动登录加载
@keyframes loading-animation {
	from {
		background: #bababa;
	}
	to {
		background: #dadada;
	}
}

.auto-login-container {
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 9;
	display: flex;
	flex-direction: column;
	align-items: center;

	.img {
		margin-top: 10vh;
		width: 194upx;
		height: 234upx;
	}

	.loading {
		margin-top: 30upx;
		display: flex;
		justify-content: center;
		.loading-circle {
			width: 16upx;
			height: 16upx;
			animation: loading-animation 0.9s infinite;
			background: #dadada;
			border-radius: 50%;
			& + .loading-circle {
				margin-left: 20upx;
			}
		}
	}
}
</style>
