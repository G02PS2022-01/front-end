import React, { useState } from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
import ModalLogin from './Modals/ModalLogin/ModalLogin'

export function Button() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false)

  return (
    <>
      <button
        className="btn openModalBtn"
        onClick={() => {
          setModalLoginOpen(true)
        }}
      >
        Sign In
      </button>
      {modalLoginOpen && <ModalLogin setOpenModalLogin={setModalLoginOpen} />}
    </>
  )
}
