<template>
	<div class="login">
		<h1 class="login-title">登录</h1>
		<div class="login-input-border"><input class="login-input" type="text" v-model="form.account" placeholder="请输入用户名" placeholder-style="color:#ccc;" /></div>
		<div class="login-input-border input-password">
			<input class="mui-input-clear login-input" type="password" v-model="form.password" placeholder="请输入密码" placeholder-style="color:#ccc;" />
		</div>
		<div class="login-info">若忘记密码，可联系管理员重置密码</div>
		<button class="login-btn" type="primary" :disabled="mCheckRequired()" :loading="loading" @click="login">登 录</button>
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
	margin-bottom: 34upx;
	height: 120upx;
	padding-top: 46upx;
	.login-input {
		height: 50upx;
		line-height: 50upx;
		font-size: 36upx;
		color: $uni-text-color;
	}

	&.input-password {
		margin-bottom: 20upx;
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
	margin-bottom: 80upx;
	font-size: 26upx;
	color: $uni-text-color-grey;
}

.login-btn {
	box-shadow: 0 10upx 10upx 0 rgba(83, 185, 151, 0.2);
	border-radius: 100upx;
	border-radius: 50upx;
}
</style>
