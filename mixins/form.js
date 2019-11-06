/**
 * form表单mixins
 * Created by liliang on 2019/11/06.
 */

const mixin = {
	data() {
		return {}
	},

	methods: {
		// 监测表单必填项
		mCheckRequired(field = 'form', arr = []) {
			let check = false
			arr = arr && arr.length > 0 ? arr : Object.keys(this[field])
			const res = arr.filter(item => !this[field][item])
			return res && res.length > 0 ? true : false
		}

	}
}

export default mixin
