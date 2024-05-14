
import React, { useState } from 'react';
import {  useEffect } from "react";
import Routeur from './Routeur/Routeur';


function App() {

  const [city, getSkatersByCity] = useState();
  const [skaters, setSkaters] = useState();


  useEffect(() => {
    if( city !== undefined ){
      fetch('http://localhost:4000/skaters/city/'+city)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSkaters(data);
      })
    }
  },[city, getSkatersByCity])



return (
    <div className="App">
      <header className="App-header">
       <Routeur /> 
      </header>
    </div>
  );
}

export default App;
