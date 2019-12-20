import axios from 'axios';


const USER_API_URL = 'https://sunshine-fe-ms.cfapps.io'
const token = sessionStorage.getItem('access_token');
const AuthStr = `Bearer ${token}`

class UserDataService {

    getAllUsers(){
        return axios.get(USER_API_URL + '/api/users', {headers: { Authorization: AuthStr }})
            .then(response => {
                console.log(response.data);
                return response.data;
            })
    }

    getUserById(userId) {
        return axios.get(`${user_API_URL}/api/users/${userId}`, {headers: { Authorization: AuthStr }})
            .then(response => {
                console.log(response.data);
                return response.data;
            }).catch( error => {
                console.log(`Error: ${error}`)
            })
    }

    createUser(user) {
        console.log("creating user");
        return axios.post(`${user_API_URL}/api/users`, user, {headers: { Authorization: AuthStr }})
                    .then(res => {
                        console.log(res.data)
                    })
    }

    updateUser(id, user) {
        console.log('Editing user')
        return axios.put(`${user_API_URL}/api/users/${id}`, user,{headers: { Authorization: AuthStr }})
            .then(res=>{
                console.log(res.data)
            })
    }

    deleteUser(userId) {
        return axios.delete(`${user_API_URL}/api/users/${userId}`, {headers: { Authorization: AuthStr }})
            .then(res => {
                console.log("user deleted")
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }
}

export default new UserDataService()
