/**
 * uni工具全局封装
 * Created by liliang on 2019/11/05.
 */

// 弹窗提醒
export function $alert(content, showCancel = false, title = '提示', confirmText = '确定', cancelText = '取消') {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title,
			content,
			showCancel,
			confirmText,
			cancelText,
			success(res) {
				res.confirm ? resolve() : reject()
			},
			fail() {
				reject()
			}
		})
	})
}

// 路由跳转
export function $navigateTo(url) {
	uni.navigateTo({
		url
	})
}

// 路由返回
export function $back(delta = 1) {
	uni.navigateBack({
		delta
	})
}