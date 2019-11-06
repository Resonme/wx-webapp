import Vue from 'vue'
import App from './App'
import './assets/style/index.scss'
import { $alert, $navigateTo } from './utils/uniapp.js'
import { BASE_ADRESS } from './utils/config.js'

Vue.config.productionTip = false
Vue.prototype.$alert = $alert
Vue.prototype.$navigateTo = $navigateTo
Vue.prototype.$BASE_ADRESS = BASE_ADRESS
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
