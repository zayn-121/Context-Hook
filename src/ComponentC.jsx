import React, { useContext } from 'react'
import { nameContext } from './App'

const ComponentC = () => {
    const myname = useContext(nameContext)
    console.log(myname);
    
  return (
    <div>
       <h1>{myname.data}</h1>
       
    </div>
  )
}

export default ComponentC