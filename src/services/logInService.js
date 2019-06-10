import axios from 'axios';
import React from 'react';
class LogInService{


    constructor(){

    }

    login(username,password){

        let credentials = {
            username: username,
            password: password
        }

       let headers = {
            'Content-Type':  'application/json',
            'Authorization' : 'id_token'
          };
       return axios.post('http://localhost:8080/Quiz_app-0.0.1-SNAPSHOT/index/logIn', credentials, headers);
    }
}

export default LogInService;