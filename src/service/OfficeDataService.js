import axios from 'axios';


const OFFICE_API_URL = 'https://sunshine-office-crud.cfapps.io/'

class OfficeDataService {

    updateOffice() {
        return axios.put(`${OFFICE_API_URL}/offices/office/${id}`)
    }

    createOffice() {
        return axios.post(`${OFFICE_API_URL}/offices`)
    }
}

export default new OfficeDataService()