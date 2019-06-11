import React from 'react';
import Cookies from 'universal-cookie';
import * as moment from 'moment'

class Auth{

    constructor(){

        this.cookies = new Cookies();
        
    }

    isAuthenticated(){

        // const cookies = new Cookies();
        

         return (this.cookies.get('id_token') != null && this.cookies.get('id_token') !== '' && new Date().valueOf() < this.getExpiration().valueOf() );
        
    }

  getExpiration() {
       
   


    const expiration = this.cookies.get('expires_at');

    const expiresAt = JSON.parse(expiration);

    const date = new Date(0);
    date.setUTCSeconds(expiresAt);
    return date;
     }
}

export default Auth;