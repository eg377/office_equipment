import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

const authService = {

    getCall: async (url, parameters) => {
            axios.get(url,{
                params: parameters
              }).then((response) => {
                  if(response != error) {
                      if(response.status >= 400) {                        
                            console.log("RESPONSE STATUS: ", response.status)
                            console.log("RESPONSE: ", response)
                            return;
                      }
                      if(response.status == 200) {
                        return response.data
                      }                  
                  } else {
                      return error;
                  }        
            })
        },
    
    postCall: async (url, parameters, header) => {
        console.log('postCall');
        console.log(url, parameters, header);
        axios.post(url,{
            params: parameters,
            header: header,            
            },
            ).then((response) => {
                if(response != error) {
                    if(response.status >= 400) {                        
                        console.log("RESPONSE STATUS: ", response.status)
                        console.log("RESPONSE: ", response)
                        return;
                    }
                    if(response.status == 200) {
                    return response.data
                    }                  
                } else {
                    return error;
                }        
        })
        
    },
} 
export default authService;
