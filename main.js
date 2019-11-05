import Vue from 'vue'
import App from './App'
import './assets/style/index.scss'
import request from './utils/request.js'
import { $alert, $navigateTo } from './utils/uniapp.js'
import { BASE_ADRESS } from './utils/config.js'
// import store from './store'

Vue.config.productionTip = false

Vue.prototype.$request = request;
Vue.prototype.$alert = $alert
Vue.prototype.$navigateTo = $navigateTo
Vue.prototype.$BASE_ADRESS = BASE_ADRESS
// Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	// store,
	...App
})
app.$mount()
