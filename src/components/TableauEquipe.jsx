import React from 'react';
import "./TableauEquipe.css";

function TableauEquipe( { data }) {

  
  return (
    <div className="tb">

<div className='t1' >
     <thead>
     <tr>
      <th className="Prenom" scope='col'>Prénom</th> 
      <th className="Nom" scope="col">Nom</th>
      <th className="Poste" scope="col">Poste</th>
      <th className="MJ" scope="col">MJ</th>
      <th className="Buts" scope="col">Buts</th>
      <th className="Assistances" scope="col">Assistances</th>
      <th className="Points" scope="col">Points</th>
      <th className="Min pénalité" scope="col">Min Pén</th>
      <th className="tir" scope="col">tir</th>
      <th className="photo" scope="col">Image</th>
    </tr>
  </thead>
  
  {data.map(player => (   
    <tr>
      <th title="Prénom">{player.firstName.default}</th> 
      <td title='Nom' >{player.lastName.default}</td>
        <td title='Poste' >{player.positionCode}</td>
        <td title='Matchs Joués' >{player.gamesPlayed}</td>
        <td title='Buts' >{player.goals}</td>
        <td title='Assistances' >{player.assists}</td>
        <td title='Points' >{player.points}</td>
        <td title='Minutes Pénalités' >{player.penaltyMinutes}</td>
        <td title='Tirs' >{player.shots}</td>
        <td><img className="photoJ"src={player.headshot}></img></td>
    </tr>
  ))}
  </div>
    </div>

    

   
    
  );
}

export default TableauEquipe;
