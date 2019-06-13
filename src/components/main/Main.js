import React from 'react';
import {Component} from 'react';
import MainService from '../../services/mainService';
import Header from './header/Header.js';

class Main extends Component{

    constructor(){

        super();
        this.state = {
            data: null,
        }
    }

    componentDidMount(){
        let mainService = new MainService();
        mainService.getMenu().then(response =>{
            this.setState({

                data: response.data.payload
            })
            
        })
        console.log("Main mounted");

    }

    render(){
        if(this.state.data){
         return (<Header data = {this.state.data}></Header>)
        }
        else{
            return <></>
        }
    }
}

export default Main;