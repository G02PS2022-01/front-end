import React, {useState} from 'react'; 
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
    
      <nav id="header">


          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <p className="logo">Dog<span>Code</span>.</p>
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
              <Link to='/curriculum' className='nav-links' onClick={closeMobileMenu} >
                  Curriculum
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/glossary' className='nav-links' onClick={closeMobileMenu} >
                  Dicionário
              </Link>
            </li>
            <li className='nav-item' >
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu} >
                  Sobre
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                    Sign Up
              </Link>
            </li>
          </ul>
          <Button />
      </nav>
    
    
    )
    }

 export default Navbar;