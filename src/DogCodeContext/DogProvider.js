import React, { useState } from 'react'
import {DogContext} from './DogContext'
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const DogProvider = ({ children }) => {

  const [modalOn, setModalOn] = useState(false);
  function openModal() {
    setModalOn(!modalOn)
  }


  async function userRegister(nome, email, password) {
    try {
      setFetchListings(true)
      await api.post("/listings",
        {
          "nome": `${nome}`,
          "email": `${email}`,
          "password": `${password}`
        }).then((res) => {
         console.log(res.data)
         // resultado do post
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.log('listings err', err);
    }
  }

 
  async function userLoguin(email, password) {
    await api
      .get(`/auth/authenticate/`, {
        "email": `${email}`,
        "password": `${password}`
      })
      .then((response) => {
      console.log(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }


  return (
    <DogContext.Provider
      value={{
        openModal,
        modalOn,
        userRegister,
        userLoguin
      }}
    >
      {children}
    </DogContext.Provider>
  )
}