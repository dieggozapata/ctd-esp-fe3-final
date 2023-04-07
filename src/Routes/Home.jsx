import Card from '../Components/Card'
import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalStates()
  const dentists = state.data
  const theme = state.theme
  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists && dentists.map(dentist => (<Link key = {dentist.id} to={'/detail/' + dentist.id}  > <Card dentist={dentist} /></Link>))                   
        }        
      </div>
    </main>
  )
}

export default Home