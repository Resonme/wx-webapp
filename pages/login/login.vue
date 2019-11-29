<template>
	<div class="login">
		<h1 class="login-title">登录</h1>
		<div class="login-input-border">
			<span class="login-input-label" :class="{ 'login-input-label--show': form.account || focus === 'account' }">用户名</span>
			<input
				class="login-input"
				type="text"
				v-model="form.account"
				placeholder="请输入用户名"
				@focus="focus = 'account'"
				@blur="focus = ''"
				placeholder-class="uni-input-placeholder"
			/>
		</div>
		<div class="login-input-border">
			<span class="login-input-label" :class="{ 'login-input-label--show': form.password || focus === 'password' }">密码</span>
			<input
				class="login-input"
				type="password"
				:password="true"
				v-model="form.password"
				placeholder="请输入密码"
				@focus="focus = 'password'"
				@blur="focus = ''"
				placeholder-class="uni-input-placeholder"
			/>
		</div>
		<div class="login-info">若忘记密码，可联系管理员重置密码</div>
		<button class="login-btn" type="primary" :disabled="loading || !mCheckRequired('form')" :loading="loading" @click="login">登 录</button>
	</div>
</template>

<script>
import { setLoginInfo, getLoginInfo, removeLoginInfo } from '@/utils/data.js';
import formMixins from '@/mixins/form.js';
import { Login } from '@/api/login.js';
import AppSelect from '@/components/app-select/index.vue';

export default {
	data() {
		return {
			loading: false, //提交loading
			focus: '',
			form: {
				type: 2,
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
		}
	},
	mixins: [formMixins],
	methods: {
		// 登录
		async login() {
			this.loading = true;
			try {
				const res = await Login({ ...this.form });
				setLoginInfo({ ...this.form, access_token: res.access_token }); // 缓存登录数据
				this.loading = false;
				uni.reLaunch({ url: '/pages/tabbar/index' });
			} catch (e) {
				//TODO handle the exception
				this.loading = false;
				this.$alert('用户名或密码错误！');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
// 表单
.login {
	padding: 160upx 80upx;
}
.login-title {
	margin-bottom: 60upx;
	font-size: $uni-font-size-title;
	color: $uni-color-title;
	letter-spacing: 1.2upx;
}

.login-input-border {
	position: relative;
	height: 120upx;
	padding: 0 0 24upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& + .login-input-border {
		margin-top: 34upx;
	}
	.login-input-label {
		font-size: $uni-font-size-base;
		color: #8da1af;
		visibility: hidden;
		&--show {
			visibility: visible;
		}
	}
	.login-input {
		height: 50upx;
		line-height: 50upx;
		font-size: 36upx;
		color: $uni-text-color;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-bottom: 1px solid $uni-border-color;
		transform: translateY(0.5);
	}
}

.login-info {
	margin-top: 20upx;
	font-size: 26upx;
	color: #999999;
}

.login-btn {
	width: 420upx;
	height: 90upx;
	margin-top: 80upx;
	line-height: 90upx;
	font-size: 30upx;
	color: #ffffff;
	box-shadow: 0 10upx 10upx 0 rgba(83, 185, 151, 0.2);
	border-radius: 100upx;
	border-radius: 50upx;
	background-color: #4fc294;
	&::after {
		border-width: 0;
	}
	&[disabled][type='primary'] {
		background-color: #4fc294;
	}
	&[disabled][type='primary']::after {
		background-color: rgba(255, 255, 255, 0.5);
	}
}
</style>
