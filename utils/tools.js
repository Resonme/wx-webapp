/**
 * app全局工具
 * Created by liliang on 2019/11/05.
 */
import { BASE_ADRESS } from './config.js'

// 参数过滤
export function filterObject(obj) {
	let copyObj = {}
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== "") {
			copyObj[key] = obj[key]
		}
	}
	return copyObj
}

// 图片完整路径转换
export function getImgFullPath(url, w, h, q) {
	const match = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	if (!url || url.length < 1 || match.test(url)) {
		return url ? url.replace(/\\/g, '/') : ''
	}
	let fullpath = BASE_ADRESS.IMG_BASE_URL + '/' + url
	if (w && h) {
		fullpath = fullpath + '?w=' + w + '&h=' + h
	}
	if (q) {
		fullpath = w && h ? fullpath + '&q=' + q : fullpath + '?q=' + q
	}
	console.log('match.test(url)' + url, fullpath)
	return fullpath
}

// 数组去重
export function arrayBreakRepeat(arr) {
	const result = []
	const obj = {}
	for (const i of arr) {
		if (!obj[i]) {
			result.push(i)
			obj[i] = 1
		}
	}
	return result
}
