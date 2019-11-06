/**
 * 登录相关api
 * Created by liliang on 2019/11/05.
 */
import request from '@/utils/request'


export async function Login(params) {
	return request({
		url: '/auth/login',
		method: 'POST',
		params
	})
}
