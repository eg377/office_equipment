import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

const authService = {

    getCall: async (url, parameters) => {
        axios({
            method: 'GET',
            url: url,                       
            headers: {                
                "Content-Type": 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Headers" : "x-requested-with, authorization",                
                "Authorization": "Basic " + btoa("admin : ClientSecret")
            },
            params: parameters
        }).then((response) => {
            
                if(response.status >= 400) {                        
                    console.log("RESPONSE STATUS: ", response.status)
                    console.log("RESPONSE: ", response)
                    return;
                }
                if(response.status == 200) {
                return response.data
                }                  
                    
        })
    },
    
    postCall: async (url, parameters, options) => {        
        console.log('postCall');        
        
        axios.post(url, parameters, options).then((response) => {
            console.log("response", response);            
            if(response.status >= 400) {                        
                console.log("RESPONSE STATUS: ", response.status)
                console.log("RESPONSE: ", response)
                return;
            }
            if(response.status == 200) {
                console.log("response.data", response);
                return response.data.access_token;
            }                    
        })
        
    },
} 
export default authService;