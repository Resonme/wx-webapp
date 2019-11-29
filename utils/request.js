/**
 * axios 封装
 * Created by liliang on 2019/11/05.
 */
import { getLoginInfo } from './data.js'
import { filterObject } from './tools.js'
import { BASE_ADRESS } from './config.js'

const Request = function({ url, method, params }) {
	return new Promise((resolve, reject) => {
		const loginInfo = getLoginInfo()
		const data = params ? filterObject(params) : {}
		uni.request({
			url: BASE_ADRESS.REQUEST_URL + url,
			method: method || "GET",
			data,
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'auid': loginInfo ? loginInfo.auid : '',
				'access_token': loginInfo ? loginInfo.access_token : ''
			},
			success: res => {
				if (res && res.data && res.data.code === 0) {
					resolve(res.data)
				} else {
					console.log('请求异常：' + BASE_ADRESS.REQUEST_URL + ' => ' + url + JSON.stringify(res.data))
					uni.showToast({ title: res.data.msg || '系统异常', icon: 'none' });
					reject(res.data)
				}
			},
			fail: err => {
				console.log('请求失败 ：' + JSON.stringify(err) + ' 参数：' + JSON.stringify(data));
				uni.showToast({ title: '系统异常', icon: 'none' });
				reject(err)
			}
		})
	})
}

export default Request
