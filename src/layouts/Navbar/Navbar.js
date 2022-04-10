import React, {Component} from 'react';  // pode ser usado React.Component na class ou apenas assim//
import {MenuItems} from './Menuitems';
import {Button} from '../../components/Button';
import './Navbar.css';

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'> 
                <h1 className='navbar-logo'> DogCode <i className='fas fa-paw'></i> </h1>
                <div className='menu-icon'onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars' }></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}

                                </a>
                            </li>
                
                        )
                    } )}
                </ul>
                <Button>Sign in </Button>
            </nav>
        )
    }

 } 

 export default Navbar