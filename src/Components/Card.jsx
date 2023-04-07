import React from "react";
import { useGlobalStates } from "./utils/global.context";
const Card = ({dentist}) => {  
  const {state, addFavs, delFavs} = useGlobalStates()
  const { name, username, id } = dentist
  const favs = state.favs
  let findDentist = []  
  if (favs){        
    findDentist = favs.filter(value => value.id ==  id)     
  }
  
  const handleAddFav = (event)=>{
    event.preventDefault();    
    addFavs(dentist)        
  }

  const handleDelFav = (event)=>{
    event.preventDefault();    
    delFavs(dentist)        
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src='/images/doctor.jpg' alt="Image Dentist"/>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{username}</h3>        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {findDentist.length == 0 ? 
          <button onClick={handleAddFav} className="favButton">Add fav</button>
          :
          <button onClick={handleDelFav} className="favButtonDel">Delete fav</button>
        }        
    </div>
  );
};

export default Card;
