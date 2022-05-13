import React, { useEffect, useState } from 'react'

export const Message = () => {
    //la funcion que se retorna en useEffect
    
    const [coord, setCoors] = useState({x:0, y:0})

    const {x, y} = coord;

    useEffect(() => {

        const mouseMove = (e) =>{
            const coord = { x : e.x, y : e.y}
            setCoors(coord);
        }

        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    


  return (
    <>
        <h3> Esres genial </h3>
        <p> x:{x} y:{y} </p>
    </>
  )
}
