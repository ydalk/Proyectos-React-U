import { useState } from "react"

export const useCounter = ( initialState = 10) => {

  const [state, setState] = useState( initialState);

  const increment = ( factor = 1) =>{
      setState( state + factor);
  }
  
  const decrement = ( factor = 1) =>{
    setState( state - factor );
  }
//realiza reset de acuerdo con el valr inicial por defecto sino recibe ningún argumento
  const reset = () =>{
    setState( initialState );
  }

  return {
      state,
      decrement,
      increment,
      reset
  };

}
