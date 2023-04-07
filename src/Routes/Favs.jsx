import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, delAllFavs} = useGlobalStates()  
  const theme = state.theme   
  const favs = state.favs

  const handleDelAllFav = (event)=>{
    event.preventDefault();    
    delAllFavs()        
  }
    
  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs && favs.map((dentist) => (<Link key = {dentist.id} to={'/detail/' + dentist.id}  > <Card dentist={dentist} /></Link>))
        }      
      </div>
      <br />
      {favs.length > 0 ?
        <button className="favButtonDelAll" onClick={handleDelAllFav}>Reset Favs</button>
        :        
        <h2>You don't have favorite dentists</h2>
      }
    </div>
  );
};

export default Favs;
