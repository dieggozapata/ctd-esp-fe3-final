import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useGlobalStates()
  const theme = state.theme
  const {id} = useParams()  
  const [dentist, setDentist] = useState({})
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = 'https://jsonplaceholder.typicode.com/users/' + id  
  useEffect( () => {            
      axios(url).then(res => setDentist(res.data))
  }, [])   
  
  return (
    <div className={theme}>      
      <h1>Detail Dentist</h1>      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <img className='img-detail' src='/images/doctor.jpg' alt="Image Dentist"/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>WebSite</th>            
          </tr>
        </thead>
        <tbody>          
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>                    
        </tbody>
      </table>
    </div>
  )
}

export default Detail