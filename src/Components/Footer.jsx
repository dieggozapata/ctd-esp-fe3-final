import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {
  const {state} = useGlobalStates()
  const theme = state.theme
  return (
    <footer className={theme}>
        <p>Powered by Diego Zapata</p>                
        <img src='./images/DH.png' alt="DH-logo"/>
    </footer>
  )
}

export default Footer
