import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import './LogIn.scss'

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
            
            {/* <form>
             <input type = "text" name = "username" value = {this.state.username} onChange = {(e) => this.handleChange(e)}/>
             <input type = "password" name = "password" value = {this.state.password} onChange = {(e) => this.handleChange(e)}/>
             <button onClick = {(e)=> this.handleSubmit(e)}>LogIn</button>
            </form> */}

<div className="card mt-5" style={{margin: 'auto', width: '600px'}}>
    <div className="card-body">
        <div className="text-left label">
            <h3 className="card-title">Please Login
            </h3>
        </div>
        <br/>
        <form>
            {/* <app-inline-notification className="notification float-none" [notifications]="getnotifications()" (OnNotificationRemoved)="onNotificationRemoved($event)"> </app-inline-notification> */}
            <div className="form-group">
                <label for="username">USERNAME</label> 
                <input placeholder="USERNAME" auto-fill tabindex="1" name="username" type="text" value = {this.state.username} onChange = {(e) => this.handleChange(e)}  autofocus className="form-control" id="username"/>
                <div >
                    <small  className="text-danger">USERNAME is required</small>
                </div>

            </div>
            <div className="form-group">
                <label for="password">PASSWORD</label> 
                <input placeholder="PASSWORD" auto-fill tabindex="2" value = {this.state.password} onChange = {(e) => this.handleChange(e)} name="password" type="password" className="form-control" id="password"/>
                <div >
                    <small  className="text-danger">PASSWORD is required</small>
                </div>
            </div>
            <div className="button-group">
                <div className="float-left">
                    <button tabindex="3"  className="btn btn-danger float-left" onClick={(e)=> this.handleSubmit(e)} type="submit">Login</button>
                    <img  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                </div>
                <div className="float-right">
                    <button className="btn btn-light" >Forget Password
                        </button>
                </div>
            </div>
        </form>

    </div>
</div>
        </div>)
    }

}

export default LogIn