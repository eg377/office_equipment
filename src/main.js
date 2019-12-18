import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
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

const VUE_APP_TEST = process.env.VUE_APP_TEST;

console.log(VUE_APP_TEST);

const authServiceUrl = "https://sunshine-auth-service.cfapps.io/oauth/token";
const content = 'grant_type=password&username=admin&password=admin';
const headerOptions = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa( 'ClientId:ClientSecret')
    }     
};

var token;
authService.postCall(authServiceUrl, content, headerOptions).then(response => {
    token = response;
    console.log('response',response);
});

//const token = await authService.postCall(authServiceUrl, content, headerOptions);
//console.log('TOKEN',token);

new Vue({
  i18n,
    router,
    render: h => h(App)
}).$mount('#app')
