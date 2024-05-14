import Menu from "../components/Menu";
import "./statparequipe.css";
import React from 'react';
import { useState, useEffect } from "react";

function StatParEquipe() {

  const [city, getSkatersByCity] = useState();
  const [skaters, setSkaters] = useState([]);
  const [name , setName] = useState('');
  


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
            <h3 className="ff">Equipe :</h3>
            <input type="text"
             onChange={e => setName(e.target.value)}
            value={name}
            />

             <button type="button" onClick={() => getSkatersByCity(name)}>Get Data for TORONTO</button> 
            </div>

<h1>{city}</h1>
<div className="tableau">
     <thead>
     <tr>
      <th className="blc" scope="col">Prénom</th> 
      <th className="blc" scope="col">Nom</th>
      <th className="blc" scope="col">Poste</th>
      <th className="blc" scope="col">MJ</th>
      <th className="blc" scope="col">Buts</th>
      <th className="blc" scope="col">Assistances</th>
      <th className="blc" scope="col">Points</th>
      <th className="blc" scope="col">Min Pén</th>
      <th className="blc" scope="col">tir</th>
      <th className="blc" scope="col">Image</th>
    </tr>
  </thead>
  
  {skaters.map(player => (   
    <tr>
      <th scope="row">{player.firstName.default}</th> 
      <td>{player.lastName.default}</td>
        <td>{player.positionCode}</td>
        <td>{player.gamesPlayed}</td>
        <td>{player.goals}</td>
        <td>{player.assists}</td>
        <td>{player.points}</td>
        <td>{player.penaltyMinutes}</td>
        <td>{player.shots}</td>
        <td><img className="photoJ"src={player.headshot}></img></td>
        

    </tr>
  ))}
    </div>

    </div>

   
    
  );
}

export default StatParEquipe;
