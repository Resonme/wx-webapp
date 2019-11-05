/**
 * app 缓存数据
 * Created by liliang on 2019/11/05.
 */
const user_login_key = 'YB_APP_LOGIN_INFO'
const time = 30 * 24 * 60 * 60 * 1000 // 30天过期

// 用户 缓存登录数据
export function setLoginInfo(user) {
	const data = {
		time: +new Date(),
		content: user
	}
	console.log('缓存登录信息...' + user_login_key, JSON.stringify(data))
	uni.setStorageSync(user_login_key, data)
}
// 用户 获取缓存数据
export function getLoginInfo() {
	const info = uni.getStorageSync(user_login_key);
	if (!info) { return null }
	if (+new Date() - info.time > time) {
		uni.removeStorageSync(user_login_key)
		console.log('登录信息过期 已清除 ... ' + user_login_key)
		return null
	}
	return info.content
}
// 用户 清楚登录数据
export function removeLoginInfo() {
	console.log('清除登录信息 ... ' + user_login_key)
	uni.removeStorageSync(user_login_key)
}

// 系统 清楚所有缓存
export function clearStorage() {
	uni.clearStorageSync()
}
