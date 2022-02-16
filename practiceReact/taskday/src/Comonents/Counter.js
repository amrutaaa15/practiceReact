import React, { useState } from 'react'

function Counter() {
    const[data,setData]=useState()
   const handler=(event)=>{
    const{name,value}=event.target
    setData({...data,[name]:value})
   }
   const submitData=(e)=>{
     e.preventDefault()
     alert(`${data.names} ${data.email}`)
   }
  return (
    <div><h1>Counter</h1>
   <form>
    Name: <input type="text" name="names" onChange={handler}/><br/>
     Email:<input type="text" name="email" onChange={handler}/><br/>
     <button onClick={submitData}>Submit</button>
   </form>
    
    </div>
  )
}

export default Counter