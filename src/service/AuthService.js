import authService from "./common/CommonCall";

class AuthService {

    login(username, password) {
        const authServiceUrl = "https://sunshine-auth-service.cfapps.io/oauth/token";
        const content = 'grant_type=password&username=admin&password=admin';
        const headerOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa( 'ClientId:ClientSecret')
            }
        };

        var token;
        httpClient.postCall(authServiceUrl, content, headerOptions).then(response => {
            token = response;
            console.log('response',response);
        });

    }
}

export default new AuthService()




