import Menu from "../components/Menu";
import "./statparequipe.css";
import React from 'react';
import { useState, useEffect } from "react";
import TableauEquipe from "../components/TableauEquipe";

function StatParEquipe() {

  const [city, getSkatersByCity] = useState();
  const [skaters, setSkaters] = useState([]);
  const [name , setName] = useState('Quelle Ville ?');
  const [active , setActive] = useState(false);


  useEffect(() => {
    if( city !== undefined ){
      fetch('http://localhost:4000/skaters/city/'+city)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSkaters(data);
        setActive(true);
      })
    } 
  },[city, getSkatersByCity])

console.log(skaters);


useEffect((e) => {
  console.log(name);
});



  return (
    <div className="spe">
      <div className="topp">
    <Menu />
    <h1>Stat'Hockey</h1>
    </div>
        
      <div className="input" >
            <input type="text"
             onChange={e => setName(e.target.value)}
            value={name}
            /> 

             <button type="button" onClick={() => getSkatersByCity(name)}> Obtenir les statistiques de {name}</button> 
            </div>

<h1>{city}</h1>

{ active ? <TableauEquipe data={skaters}/> : ""  }

    </div>

   
    
  );
}

export default StatParEquipe;
