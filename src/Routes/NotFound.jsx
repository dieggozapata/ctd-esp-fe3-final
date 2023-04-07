import React from 'react'
import { useGlobalStates } from '../Components/utils/global.context'

const NotFound = () => {
  const {state} = useGlobalStates()
  const theme = state.theme
  return (
    <div className={theme}>
      <br />
      <h1>Page does not exist !!!</h1>
    </div>
  )
}

export default NotFound