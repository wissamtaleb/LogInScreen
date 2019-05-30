import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class LogIn extends Component{

    state = {
        username: '',
        password: ''
    }

    constructor(){
        super();
    }


    handleChange(e){

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){

        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;

        let loginCredentials = {
            username: username,
            password: password
        }
        axios.post('http://localhost:8080/Quiz_app-0.0.1-SNAPSHOT/index/logIn', loginCredentials).then(response => {
             console.log(response.data);
        })

    }
    
    render(){
        return(<div>
            <form>
             <input type = "text" name = "username" value = {this.state.username} onChange = {(e) => this.handleChange(e)}/>
             <input type = "password" name = "password" value = {this.state.password} onChange = {(e) => this.handleChange(e)}/>
             <button onClick = {(e)=> this.handleSubmit(e)}>LogIn</button>
            </form>
        </div>)
    }

}

export default LogIn