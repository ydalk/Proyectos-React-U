import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {
  //useEffect permite ejecutar al gun efecto secundarip cuando algo sucede en al componente
  const [formState, setformState] = useState({
    name:'',
    email: ''
  })

  const {name, email} = formState;

  //se puede usar tantos useEffect como sean necesarios haciendo foco en la propiedad que requerimos
  //o queremos revisar si esta cambiando quiza para disparar un mensaje o efectuarl algún cambio puntual
  //pasandolo como segundo argumento, si este queda vacio indica que el useEffect solo se disparará una vez 
  //en el momento en que se renderiza la primera vez el componente

  useEffect ( ()=>{
    
  }, [])

  useEffect ( ()=>{
    
  }, [formState])

  useEffect ( ()=>{
    
  }, [email])

  
  const handleInputChange = ({ target }) =>{

    setformState({
      ...formState,
      [target.name] : target.value
    })
    
  }


  return (
   <>
     <h1>UseEffect</h1> 
     <hr />

     <div className='form-group'>
     <input 
       type="text"
       name="name"
       className='form-control'
       placeholder='Tu nombre'
       autoComplete='off'
       value={name}
       onChange={handleInputChange}
     />
     </div>

     <div className='form-group'>
     <input 
       type="text"
       name="email"
       className='form-control'
       placeholder='Tu email'
       autoComplete='off'
       value={email}
       onChange={handleInputChange}
     />
     </div>

   </>
  )
}
