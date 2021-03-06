import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ButtonLogado } from '../../components/Button-Logado/ButtonLogado'
import ModalLogin from '../../components/Modals/ModalLogin/ModalLogin'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [modalLoginOpen, setModalLoginOpen] = useState(false)

  return (
    <nav id="header">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <p className="logo">
          Dog<span>Code</span>.
        </p>
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {window.location.pathname !== '/' &&
        window.location.pathname !== '/what-coding' &&
        window.location.pathname !== '/glossary' &&
        window.location.pathname !== '/about-us' &&
        window.location.pathname !== '/sign-up' ? (
          ''
        ) : (
          <li className="nav-item">
            <Link
              to="/what-coding"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              O que é Programação?
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link
            to="/curriculum"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Curriculum
          </Link>
        </li>
        {window.location.pathname !== '/' &&
        window.location.pathname !== '/what-coding' &&
        window.location.pathname !== '/glossary' &&
        window.location.pathname !== '/about-us' &&
        window.location.pathname !== '/sign-up' ? (
          ''
        ) : (
          <li className="nav-item">
            <Link
              to="/glossary"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dicionário
            </Link>
          </li>
        )}
        {window.location.pathname !== '/' &&
        window.location.pathname !== '/what-coding' &&
        window.location.pathname !== '/glossary' &&
        window.location.pathname !== '/about-us' &&
        window.location.pathname !== '/sign-up' ? (
          ''
        ) : (
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sobre
            </Link>
          </li>
        )}
        {window.location.pathname !== '/' &&
        window.location.pathname !== '/what-coding' &&
        window.location.pathname !== '/glossary' &&
        window.location.pathname !== '/about-us' &&
        window.location.pathname !== '/sign-up' ? (
          ''
        ) : (
          <li>
            <Link
              className="nav-links-mobile openModalBtn"
              onClick={() => {
                setModalLoginOpen(true)
              }}
            >
              Sign Up
            </Link>
            {modalLoginOpen && (
              <ModalLogin setOpenModalLogin={setModalLoginOpen} />
            )}
          </li>
        )}
      </ul>
      {window.location.pathname !== '/' &&
      window.location.pathname !== '/what-coding' &&
      window.location.pathname !== '/glossary' &&
      window.location.pathname !== '/about-us' &&
      window.location.pathname !== '/sign-up' ? (
        ''
      ) : (
        <Button />
      )}
      {window.location.pathname !== '/' &&
      window.location.pathname !== '/what-coding' &&
      window.location.pathname !== '/glossary' &&
      window.location.pathname !== '/about-us' &&
      window.location.pathname !== '/sign-up' ? (
        <ButtonLogado />
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
