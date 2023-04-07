import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useGlobalStates()
  const theme = state.theme
  return (
    <div className={theme}>            
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>        
      <br />     
      <Form/>
    </div>
  )
}

export default Contact