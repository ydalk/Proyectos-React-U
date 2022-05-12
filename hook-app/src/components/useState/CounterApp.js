import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {
    // podemos definir el useState con cualquier tipo de datos, en este caso, un objeto
    const [state, setState] = useState({
        counter1 : 10,
        counter2: 20
    });
    //definimos la constante state con un objeto que posee los valores que vamos a cambiar
    const { counter1, counter2} = state;

  return (
   <>
       <h1> Counter1 {counter1} </h1>
       <h1> Counter2 {counter2} </h1>
       <hr />
       <button 
        className='btn btn-primary'
        onClick={() => {

            setState({
                //spread mantiene los datos anteriores y modifica los que se indiquen
                ...state,
                counter1 : counter1 +1
            } )
        }}       
       >
           +1
       </button>
   </>
  )
}
