import React from 'react';
import {Component} from 'react';

class Main extends Component{

    constructor(){

        super();
    }

    componentDidMount(){
        console.log("Main mounted");
    }

    render(){
        return (<h1>Main Component</h1>)
    }
}

export default Main;