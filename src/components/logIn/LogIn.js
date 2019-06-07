import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import './LogIn.scss';
import {withFormik , Form , Field} from 'formik';
import * as Yup from 'yup';
import { watchFile } from 'fs';

class LogIn extends Component{

    state = {
        username: '',
        password: '',
        loading: false
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
        


        <Form>
            {/* <app-inline-notification className="notification float-none" [notifications]="getnotifications()" (OnNotificationRemoved)="onNotificationRemoved($event)"> </app-inline-notification> */}
            <div className="form-group">
                
                <Field placeholder="USERNAME"   name="username" type="text"  className="form-control" id="username"/>
                <div >
                    {/* <small  >USERNAME is required</small> */}
                    {this.props.errors.username && this.props.touched.username && <small className="text-danger">{this.props.errors.username}</small>}
                </div>

            </div>
            <div className="form-group">
                
                <Field placeholder="PASSWORD"   name="password" type="password" className="form-control" id="password"/>
                <div >
                    {/* <small  className="text-danger">PASSWORD is required</small> */}
                    {this.props.errors.password && this.props.touched.password && <small className="text-danger">{this.props.errors.password}</small>}
                </div>
            </div>
            <div className="button-group">
                <div className="float-left">
                    <button   className="btn btn-danger float-left" type="submit">Login</button>
                    {this.props.errors.loading && <img  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />}
                </div>
                <div className="float-right">
                    <button className="btn btn-light" >Forget Password
                        </button>
                </div>
            </div>
        </Form>
        
    </div>
</div>
        </div>)
    }


    

}

const FormikLogIn = withFormik({
    enableReinitialize: true,
    
    mapPropsToValues(){
        return {
        username: '',
        password: '',
        error: '',
       loading: false

               }
    },
    validationSchema: Yup.object().shape({
username: Yup.string().email().required(),
password: Yup.string().min(8).required()
    }),
    handleSubmit(values , {props,setErrors,setStatus}){

        const accountFields = {
            username: values.username,
            password: values.password
        }

       
        // setErrors({password: 'PASSWORD Invalid'});
        axios.post("http://localhost:8080/Quiz_app-0.0.1-SNAPSHOT/index/logIn" , accountFields).then((response) => {
            setErrors({loading: true})
           
            if(response.data){
                // console.log("props in handleSubmit parameter");
                // console.log(props);
                
                // console.log("props of LoginTest: ")
                // console.log(this.props);
                // const cookies = new Cookies();
                // cookies.set('loggedIn','true');
                // cookies.set('account',accountFields.username);
                // console.log(cookies.get('account'));
                // console.log(cookies.get('loggedIn'));
                // props.changeState('true',accountFields.username);
                // props.history.push('/quiz');   

         

              wait(4000);
               setErrors({
                   loading: false
               })
               
              
               
            
                console.log(response.data);
            }
            else{
                // setErrors({error:'invalid email or password'})
               


            }
        }).catch(
            (err) => {
                setErrors({error: 'Error connecting to server'});
                console.log(err);
            }
        );
       
    }
})(LogIn)

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

export default FormikLogIn