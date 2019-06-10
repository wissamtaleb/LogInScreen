import React from 'react';
import {Component} from 'react';
import Route from 'react-router-dom/Route';
import {Redirect} from 'react-router-dom';
import Auth from './../services/auth';

class PrivateRoute extends Component{

    constructor({component: MyComponent, ...rest},props){

        super({component: MyComponent, ...rest},props)
    }
    render(){
        let auth = new Auth();
        if(auth.isAuthenticated()){
        return (<Route {...this.props} render = {(props) =><MyComponent {...props}/>} />)
    }

    else return <Redirect to ="/login"/>
    }
}

export default PrivateRoute;

