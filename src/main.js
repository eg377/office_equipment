/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.6
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueI18Next from '@panter/vue-i18next';

import './vendor.js'

import App from './App.vue'
import router from './router'
import i18next from './i18n.js';
import authService from './service/common/CommonCall'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueI18Next);
//Vue.use(VueAxios, axios);


const i18n = new VueI18Next(i18next);

//const token = authService.getCall();
/*
To get token, send [POST] requests to https://sunshine-auth-service.cfapps.io/oauth/token with:

Basic Auth:
username: ClientId
password: ClientSecret

in Body (form-data):
username: admin
password: admin
grant_type: password
  
 */

const authServiceUrl = `https://sunshine-auth-service.cfapps.io/oauth/token`;
const content = {
    grant_type: 'password',
    username: 'admin',
    password:'admin'
};

const headerOptions = {  
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : "x-requested-with, authorization",    
    'Authorization': 'Basic ' + btoa('admin : ClientSecret')
};

const token = authService.postCall(authServiceUrl, content, headerOptions);
// var url = "./test.js"        
// const token = Vue.axios.get(url).then((response) => {
//     console.log(response.data)
//     return response.data
// });
console.log('TOKEN',token);

new Vue({
  i18n,
    router,
    render: h => h(App)
}).$mount('#app')
