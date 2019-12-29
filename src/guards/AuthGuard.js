import authService from '../service/common/CommonCall'
import Router from '../router';

const AuthGuard = {
    isAuthenticated: (to) => {
        if (authService.getToken()) {
            if (authService.getToken().exp > (Date.now() / 1000)){
                return true;
            }
        }
        console.log("Not Authenticated!!");
        Router.push({ name: 'login', params: { returnUrl: to } });
    },
    isAdmin: (to) => {
        if (authService.getToken()) {
            if (authService.getToken().exp > (Date.now() / 1000)){
                if(authService.checkAuthority("ROLE_ADMIN")){
                    return true;
                }
                console.log("Not Admin!!")
                Router.push({ name: 'main'});
                return false;
            }
        }
        console.log("Not Authenticated!!");
        Router.push({ name: 'login', params: { returnUrl: to } });
    },
    isManager: (to) => {
        if (authService.getToken()) {
            if (authService.getToken().exp > (Date.now() / 1000)){
                if(authService.checkAuthority("ROLE_MANAGER")){
                    return true;
                }
                console.log("Not MANAGER!!")
                Router.push({ name: 'main'});
                return false;
            }
        }
        console.log("Not Authenticated!!");
        Router.push({ name: 'login', params: { returnUrl: to } });
    }
};

export { AuthGuard };
