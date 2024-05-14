import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import {  useEffect } from "react";
import instance from './service/instance';

function App() {

   const [joueurswash , setJoueurswash] = useState("");


  const getEmployee = () => {
    // Send the request
     fetch('http://localhost:4000' ,  {method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',       
     }})
      // Use this data to update the state
      .then((response) => response.json() )
      .then((responseJson) => {
        console.log(responseJson);
        // setJoueurswash(response.data.skaters);
      });
  };


  const [joueurs, setJoueurs] = useState([]);

  useEffect(() => {
    instance
      .get(`/skatersWASHINGTON`)
      .then((result) => {
        console.log(result);
        setJoueurs(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


return (
    <div className="App">
      <header className="App-header">
       <h1>NHL</h1>
       <button type="button" onClick={getEmployee}>Get Data</button>
       
      </header>
    </div>
  );
}

export default App;
