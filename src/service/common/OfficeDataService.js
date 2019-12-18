import axios from 'axios';


const OFFICE_API_URL = 'https://sunshine-fe-ms.cfapps.io'
const AuthStr = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzY3MjY2NDQsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJmMjA3M2MzNS02YjUyLTRlZTUtODY3Ni03ZmZkODdhODg2OTkiLCJjbGllbnRfaWQiOiJDbGllbnRJZCIsInNjb3BlIjpbImFsbCJdfQ.qOPui8E4dB3wnZGenhoPJ5ITNF6WssQfA2ffbkLyQHk'

class OfficeDataService {

    getAllOffices(){
        
        return axios.get(OFFICE_API_URL + '/api/offices', {headers: { Authorization: AuthStr }})
            .then(response => {
                console.log(response.data);
                return response.data;
            })
    }

    createOffice(office) {
        console.log("creating office");
        return axios.post(`${OFFICE_API_URL}/api/offices`, office, {headers: { Authorization: AuthStr }})
                    .then(res => {
                        console.log(res.data)
                    })
    }

    updateOffice() {
        // return axios.put(`${OFFICE_API_URL}/offices/office/${id}`)
    }

   
}

export default new OfficeDataService()