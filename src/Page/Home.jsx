import "./Home.css";
import NavBar from "../components/Menu";

function Home() {


  return (
    <div className="App">
      
        <div className="top">
        <NavBar />
        <h1 className="title">Stat'Hockey</h1>
        <img className="stanley" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlgY2s0IasezTeLAPdxPGHrmFZhE2rw-anA&usqp=CAU"/>
        </div>
        <div className="photo">
       <img className="image" src="https://media.istockphoto.com/id/1332278067/fr/photo/ar%C3%A9na-de-la-patinoire-de-hockey-sur-glace-joueur-professionnel-tirant-la-rondelle-avec-un.jpg?s=612x612&w=0&k=20&c=RUJUl4IN7F6ZWor6WAn6i79oFrW0tPZa8cbx7bVclac=" />
       <div className="down">

       </div>
       </div>
       
    </div>
  );
}

export default Home;
