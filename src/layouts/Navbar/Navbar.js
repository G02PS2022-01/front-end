import React, {useState} from 'react';  // pode ser usado React.Component na class ou apenas assim//
import LoginModal from '../../components/LoginModal';
import { DogContext } from '../../DogCodeContext/DogContext';
//import {MenuItems} from './Menuitems';
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  

    return(
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DogCode
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
         
          <li className='nav-item'>
            <Link to='/what-coding' className='nav-links' onClick={closeMobileMenu} >
                 O que é Programação?
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu} >
                 Sobre
            </Link>
          </li>
          <li>
            <Link
              to='#'
              className='nav-links-mobile'
             
            >
                  Sign Up
            </Link>
          </li>
        </ul>
        <Button  />
      </nav>
      <LoginModal />
    </>
    
    )
    }

 export default Navbar;