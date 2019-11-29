/**
 * app环境地址相关配置
 * Created by liliang on 2019/11/26.
 */

const PACKAGE_ENV = 'pro'

// 环境配置
const ENV_URL = {
	// 测试
	dev: {
		APP_ID: 'wxfd5bcc9893fac909', // 小程序id
		REQUEST_URL: 'http://192.168.11.102:9999', // 接口地址
		IMG_BASE_URL: '', // 图片地址
		IMG_UPLOAD_URL: '', // 图片上传地址
	},

	// 线上
	pro: {
		APP_ID: 'wxfd5bcc9893fac909', // 公众号id
		REQUEST_URL: 'https://www.hanchenzhibao.com', // 接口地址
		IMG_BASE_URL: '', // 图片地址
		IMG_UPLOAD_URL: '', // 图片上传地址
	}
}

export const BASE_ADRESS = ENV_URL[PACKAGE_ENV]
