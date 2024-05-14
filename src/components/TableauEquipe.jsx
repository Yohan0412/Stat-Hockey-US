import React from 'react';
import "./TableauEquipe.css";

function TableauEquipe( { data }) {

  
  return (
    <div className="tb">

<div className='t1' >
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
  
  {data.map(player => (   
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

export default TableauEquipe;
