import React from 'react';
import {Component} from 'react';
import MainService from './../../../services/mainService';
import './Header.css';


class Header extends Component{

    constructor(props){

        super(props);
       
    }

 
    componentDidMount(){
        window.$('#main_navbar').bootnavbar();

    }

   

    render(){
       console.log(this.props.data);
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main_navbar">
        <a className="navbar-brand" href="#">Mantle</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               
            {this.props.data.modules.map(module => { return (
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#">{module.dsc}</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {module.menus.map(menu => { return (
                                <li className="nav-item dropdown">
                                        <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            {menu.dsc}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                            {menu.programs.map(program =>{ return (
                                                <li><a className="dropdown-item" href="#">{program.dsc}</a></li>
                                                )})}
                                            </ul>

                           </li> )})}</ul>
                        </li>)})}</ul>
                           
            
        </div>
    </nav>)




    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main_navbar">
    <a className="navbar-brand" href="#">Mantle</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
           
                <li className="nav-item dropdown">
                        <a className="nav-link" href="#">Module1</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                            
                                      <li className="nav-item dropdown">
                                        <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            Menu1
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                            <li><a className="dropdown-item" href="#">Program1</a></li>
                                            <li><a className="dropdown-item" href="#">Program2</a></li>
                                        </ul></li>
    
    
    
                                        <li className="nav-item dropdown">
                                                <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Menu2
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                    <li><a className="dropdown-item" href="#">Program1</a></li>
                                                    <li><a className="dropdown-item" href="#">Program2</a></li>
                                                </ul></li>

                                                
                                                
                                                <li className="nav-item dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            Menu3
                                                        </a>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                            <li><a className="dropdown-item" href="#">Program1</a></li>
                                                            <li><a className="dropdown-item" href="#">Program2</a></li>
                                                        </ul></li>
                           
                                </ul>
                            
                    </li>




                    <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Module2</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    
                                
                                          <li className="nav-item dropdown">
                                            <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                Menu3
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <li><a className="dropdown-item" href="#">Program1</a></li>
                                                <li><a className="dropdown-item" href="#">Program2</a></li>
                                            </ul></li>
        
        
        
                                            <li className="nav-item dropdown">
                                                    <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        Menu3
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                        <li><a className="dropdown-item" href="#">Program1</a></li>
                                                        <li><a className="dropdown-item" href="#">Program2</a></li>
                                                    </ul></li>
                               
                                    </ul>
                                
                        </li>

            
           
                                        </ul>
                      
        
    </div>
</nav>)
    }
}

export default Header;