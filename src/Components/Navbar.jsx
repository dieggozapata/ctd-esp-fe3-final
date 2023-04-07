import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {  
  const {state, changeTheme} = useGlobalStates()
  const theme = state.theme  
  return (
    <nav className={theme}>      
      <div className='div-logo'>
        <img src="./DH.ico" alt="" />
        <h2>Odonto</h2>
      </div>
      <div className='div-menu'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>      

      {/*  Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme {theme!='dark'?'Dark':'Light'}</button>
      </div>
    </nav>
  )
}

export default Navbar