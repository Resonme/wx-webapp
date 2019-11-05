<template>
	<div class="content">
		<!-- 表单 -->
		<div class="login-form">
			<div class="label-item">
				<div class="label"><i class="iconfont">&#xe6a8;</i></div>
				<div class="info"><input type="text" v-model="form.account" placeholder="请输入用户名/手机号" /></div>
			</div>
			<div class="label-item top-border">
				<div class="label"><i class="iconfont">&#xe600;</i></div>
				<div class="info"><input type="password" v-model="form.password" class="mui-input-clear" placeholder="请输入密码" /></div>
			</div>
		</div>
		<div class="login-form-tools">
			<div class="login-form-remind">若忘记密码，可联系管理员重置密码</div>
			<div class="login-form-forget"><a>忘记密码？</a></div>
		</div>
		<div class="submit-btn"><button type="primary" :loading="loading" @click="login">登 录</button></div>

		<!-- 自动登录载入中 -->
		<div class="auto-login-container" v-if="autoLoading">
			<image class="img" src="/static/images/auto-login.png" mode=""></image>
			<div class="loading">
				<span class="loading-circle"></span>
				<span class="loading-circle" style="animation-delay:0.3s;"></span>
				<span class="loading-circle" style="animation-delay:0.6s;"></span>
			</div>
		</div>

		<!-- end -->
	</div>
</template>

<script>
import { setLoginInfo, getLoginInfo, removeLoginInfo } from '@/utils/data.js';

export default {
	data() {
		return {
			autoLoading: true,
			loading: false,
			form: {
				account: '',
				password: ''
			}
		};
	},

	created() {
		const loginInfo = getLoginInfo();
		if (loginInfo && loginInfo.account && loginInfo.password) {
			this.form.account = loginInfo.account;
			this.form.password = loginInfo.password;
			this.login();
		} else {
			this.autoLoading = false;
		}
	},

	methods: {
		// 登录
		async login() {
			if (!this.form.account || !this.form.password) {
				this.$alert('用户名或密码为空！');
				return;
			}
			try {
				this.loading = true;
				const res = await this.$request({
					url: '/auth/login',
					method: 'POST',
					params: {
						account: this.form.account,
						password: this.form.password
					}
				});
				this.loading = false;
				setLoginInfo({
					...this.form,
					auid: res.auid,
					access_token: res.access_token
				});
				uni.reLaunch({ url: '/pages/tabbar/index' });
			} catch (e) {
				//TODO handle the exception
				this.autoLoading = false;
				this.loading = false;
				this.$alert('用户名或密码错误！');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
// 表单
.login-form {
	width: 694upx;
	margin: 40upx auto 0;
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: 10upx;

	.label-item {
		display: flex;
		font-size: 28upx;
		line-height: 80upx;
		.label {
			flex: 0 0 70upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.info {
			flex: 1;
			display: flex;
			align-items: center;
		}

		&.top-border {
			position: relative;
			&:before {
				position: absolute;
				right: 0;
				top: 0;
				left: 0;
				height: 1px;
				content: '';
				transform: scaleY(0.5);
				background-color: #eaeaea;
			}
		}
	}
}
.login-form-tools {
	margin-top: 20upx;
	padding: 0 20upx;
	font-size: 28upx;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
}
.submit-btn {
	margin-top: 60upx;
	padding: 30upx;
}

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
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
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
