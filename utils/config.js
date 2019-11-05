/**
 * app环境地址相关配置
 * Created by liliang on 2019/11/05.
 */

const PACKAGE_ENV = 'intnet'

// 环境配置
const ENV_URL = {
	// 外网47
	outnet: {
		APP_ID: 'wxfd5bcc9893fac909', // 小程序id
		REQUEST_URL: 'http://wx.lzyzn.net', // 接口地址
		IMG_BASE_URL: 'https://wx.lzyzn.net', // 图片地址
		IMG_UPLOAD_URL: 'https://wx.lzyzn.net', // 图片上传地址
	},

	// 内网183
	intnet: {
		APP_ID: 'wx15135e171ce2a846', // 公众号id
		REQUEST_URL: 'https://wx.zmnbx.com:8443', // 接口地址
		IMG_BASE_URL: 'http://47.98.186.110', // 图片地址
		IMG_UPLOAD_URL: 'https://wx.zmnbx.com:8444/', // 图片上传地址
	}
}

export const BASE_ADRESS = ENV_URL[PACKAGE_ENV]
