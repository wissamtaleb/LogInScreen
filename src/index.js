import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';


let cookie = new Cookies();
axios.interceptors.request.use(request => {

    if(cookie.get("id_token")){

        request.headers.Authorization = `Bearer ${cookie.get("id_token")}`;
    }
    
    console.log(request);

    
    return request;
},
error =>{
    // console.log("wissam taleb");
    
    Promise.reject(error);
})

axios.interceptors.response.use(response => {

    if(response.headers.token){
        const token = response.headers.token;
        cookie.set("id_token",token);
        const tokenInfo = jwt_decode(token);
        const expireDate = tokenInfo.exp;
        cookie.set("expires_at",  JSON.stringify(expireDate.valueOf())  );

    }
    
    return response;
    
},
error =>{
    console.log("wissam taleb");
    
    let myError = JSON.parse(JSON.stringify(error));
    
    
    Promise.reject(error);
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
