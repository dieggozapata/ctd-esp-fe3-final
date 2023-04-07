import { createContext, useContext, useEffect, useReducer} from "react";
import axios from 'axios';
const initialState = {theme: "", data: [], favs: JSON.parse(localStorage.getItem('favs')) || [] }
const ContextGlobal = createContext();

const reducer = (state, action) => {  
  let initFavs = state.favs
  switch (action.type){
      case 'CHANGE_THEME':
          return {...state, theme: state.theme == '' ? 'dark':''}          
      case 'UPDATE_DATA':    
          return {...state, data: action.payload}
      case 'ADD_FAVS':  
          const dentistSelectAdd = action.payload                                                  
          if (!initFavs ){                        
            initFavs = [dentistSelectAdd]
          }else{              
              const findDentist = initFavs.filter(value => value.id ==  dentistSelectAdd.id)                    
              if (findDentist.length == 0){
                initFavs = [...initFavs,dentistSelectAdd]              
              }                          
          }             
          return {...state, favs: initFavs}
      case 'DEL_FAVS':            
          let filterDentist = []
          const dentistSelectDel = action.payload
          if(initFavs){                    
            filterDentist = initFavs.filter(value => value.id !=  dentistSelectDel.id)                                
          }
          return {...state, favs: filterDentist}
      case 'DEL_ALL_FAVS':          
        return {...state , favs : []}
      default:
          throw new Error
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo  
  const [state, dispatch] = useReducer(reducer, initialState)    
  const url = 'https://jsonplaceholder.typicode.com/users'  
  
  const changeTheme = () => {                  
    dispatch({type: 'CHANGE_THEME'})
  }
   
  const addFavs = (dentist) => {       
    dispatch({type: 'ADD_FAVS', payload : dentist})
  }

  const delFavs = (dentist) => {       
    dispatch({type: 'DEL_FAVS', payload : dentist})
  }

  const delAllFavs = () => {       
    dispatch({type: 'DEL_ALL_FAVS'})
  }

  useEffect( () => {            
      axios(url).then(res => dispatch({type: 'UPDATE_DATA' ,payload : res.data}))
  }, [])   

  useEffect( () => {
    localStorage.setItem('favs',JSON.stringify(state.favs))   
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{state,changeTheme, addFavs, delFavs, delAllFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useGlobalStates = () => useContext(ContextGlobal)