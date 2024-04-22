import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";

function App() {

   const [city, getSkatersByCity] = useState();
   const [skaters, setSkaters] = useState();


  useEffect(() => {
    if( city !== undefined ){
      fetch('http://localhost:4000/skaters/city/'+city)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setSkaters(data);
      })
    }
  },[city, getSkatersByCity])


  return (
    <div className="App">
      <header className="App-header">
       <h1>NHL</h1>
       <button type="button" onClick={() => getSkatersByCity('TORONTO')}>Get Data for TORONTO</button>
       <pre>{JSON.stringify(skaters, null, 4)}</pre>
      </header>
    </div>
  );
}

export default App;
