import React from 'react';
import {Component} from 'react';
import MainService from '../../services/mainService';
import Header from './header/Header.js';

class Main extends Component{

    constructor(){

        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        let mainService = new MainService();
        mainService.getMenu().then(response =>{
            this.setState({

                data: response.data
            })
            console.log(response.data);
        })
        console.log("Main mounted");

    }

    render(){
        return (<Header data = {this.state.data}></Header>)
    }
}

export default Main;