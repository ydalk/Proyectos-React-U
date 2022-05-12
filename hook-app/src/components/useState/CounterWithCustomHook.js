//importacones automáticas
import React from 'react'

//importaciones propias
import { useCounter } from '../../hooks/useCounter'

//otras
import './counter.css'

export const CounterWithCustomHook = () => {

const { state, increment, decrement, reset } = useCounter();

  return (
   <>

       <h1> Counter with Hook: {state} </h1>
       <hr />

       <button onClick={ () => increment(2) } className='btn'> +1 </button>
       <button onClick={ () => decrement(2) } className='btn'> -1 </button>
       <button onClick={ reset } className='btn'> Reset </button>
   </>
  )
}
