import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

const httpClient = {

    get: async (url, parameters) => {
        axios({
            method: 'GET',
            url: url,
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
    
    post: async (url, parameters, options) => {
        console.log('postCall');
        axios.post(url, parameters, options).then((response) => {
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

export default httpClient;
