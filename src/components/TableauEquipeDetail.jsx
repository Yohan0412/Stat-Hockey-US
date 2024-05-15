import React from 'react';
import "./TableauEquipe.css";

function TableauEquipeDetail( { data }) {

  
  return (
    <div className="tb">

<div className='t1' >
     <thead>
     <tr>
      <th className="Prenom" >Prénom</th> 
      <th className="Nom" >Nom</th>
      <th className='poste'>Poste</th>
      <th className="Poste">Efficacité But</th>
      <th className="MJ">Moyenne Point par Match</th>
      <th className="Buts">Moyenne But par Match</th>
      <th className="Assistances">Moyenne Assisstance par match</th>
      <th className="Points" scope="col">Moyenne Minute de pénalitées par match</th>
      <th className="Min pénalité" scope="col">Moyenne tir par Match</th>
      <th className="photo" scope="col">Image</th>
    </tr>
  </thead>
  
  {data.map(player => (   
    <tr>
      <th title="Prénom">{player.firstName.default}</th> 
      <td title='Nom'>{player.lastName.default}</td>
        <td title='Poste'>{player.positionCode}</td>
        <td title='Efficacité but en %'>{(player.goals * 100 / player.shots).toFixed(2)}</td>
        <td title='Moyenne point par match'>{(player.points / player.gamesPlayed).toFixed(2)}</td>
        <td title='Moyenne but par match'>{(player.goals / player.gamesPlayed).toFixed(2)}</td>
        <td title='Moyenne assistance par match'>{(player.assists / player.gamesPlayed).toFixed(2)}</td>
        <td title='Moyenne tir par match'>{(player.shots / player.gamesPlayed).toFixed(2)}</td>
        <td title='Moyenne minutes Pénalités par match'>{(player.penaltyMinutes / player.gamesPlayed).toFixed(2)}</td>
        <td><img className="photoJ"src={player.headshot}></img></td>
    </tr>
  ))} 
  </div>
    </div>

    

   
    
  );
}

export default TableauEquipeDetail;
