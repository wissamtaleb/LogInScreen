import React from 'react';
import Cookies from 'universal-cookie';
import * as moment from 'moment'

class Auth{

    constructor(){

        
    }

    isAuthenticated(){

        let cookies = new Cookies();
        console.log(moment());
        console.log(this.getExpiration());
        console.log(moment().isBefore(this.getExpiration()));
         return (cookies.get('id_token') != null && cookies.get('id_token') !== '' && moment().isBefore(this.getExpiration()));
        
    }

    getExpiration() {
        let cookies = new Cookies();
        const expiration = cookies.get('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
     }
}

export default Auth;