import axios from 'axios';
import React from 'react';
class LogInService{


    constructor(){

    }

    login(username,password){

        let credentials = {
            username: username,
            password: password,
            className: 'LoginRequestPayload'
        }

        let payload = {
            payload: credentials
        }

       let headers = {
            'Content-Type':  'application/json',
            'Authorization' : 'id_token'
          };
       return axios.post('http://localhost:8081/core-services/login', payload, headers);
    }
}

export default LogInService;