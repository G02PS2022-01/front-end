import React, { useState } from 'react'
import {DogContext} from './DogContext'
//import { web3FromSource } from '@polkadot/extension-dapp'


export const DogProvider = ({ children }) => {

  const [modalOn, setModalOn] = useState(false);
  function openModal() {
    setModalOn(!modalOn)
  }

  return (
    <DogContext.Provider
      value={{
        openModal,
        modalOn,
      }}
    >
      {children}
    </DogContext.Provider>
  )
}