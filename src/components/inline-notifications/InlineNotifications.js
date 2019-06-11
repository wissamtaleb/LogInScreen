import React from 'react';
import {Component} from 'react';
import './InlineNotifications.scss';

class InlineNotifications extends Component{

    constructor(props){
        super(props);
    }

    render(){

        
        let myjsx = <div></div>
        if(this.props.notifications.length >0){
         myjsx = this.props.notifications.map(notification => {

           return ( <div key={notification.id} id = {notification.id} className="alert alert-danger">
            <button type="button" className="close" onClick ={(e)=>this.props.remove(e)}>×</button>
            <strong className="header"><span>{notification.header}</span></strong>
            <strong >:</strong>
            <span className="detail">{notification.detail}</span>
        </div>)
        })
    }

    
        return(<div className="inline-notification">
       {myjsx}
    </div>)
    }
}

export default InlineNotifications;