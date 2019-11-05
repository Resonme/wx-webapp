<template>
	<view class="login-out">

		<view class="btn-row">
			<button type="default" @click="bindLogout">退出登录</button>
		</view>

	</view>
</template>

<script>
	// 用户数据
	import { removeLoginInfo } from '@/utils/data.js';
	export default {
		methods: {
			bindLogout() {
				uni.showModal({
					title: '提示',
					content: '确定退出登录',
					success: (res)=> {
						if (res.confirm) {
							removeLoginInfo()
							uni.reLaunch({
								url: '/pages/login/login'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
				
			},
			// 返回上一级菜单
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-out {
		height: 100%;
		width: 100%;
		background-color: #fff;

		.btn-row {
			box-sizing: border-box;
			width: 100%;
			margin-top: 95upx;
			padding: 0 67upx;

			button {
				width: 100%;
				background-color: #fff;
				height: 90upx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				font-weight: 500;
				font-size: 30upx;
				color: #3E68F0;
				border: 1px solid rgba(62, 104, 240, 1);
				border-radius: 45px;

				&:after {
					border: none;
				}
			}
		}
	}
</style>
