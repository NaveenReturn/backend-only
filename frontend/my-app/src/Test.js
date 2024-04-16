import React, { useState } from 'react'

export const Test = () => {


  const [userdata,setUserdata] = useState(["hii","welcome","to my company"])

   const [name,setName] = useState("")
  function check(){
      let app = document.getElementById("demo");
        app.appendChild(React.createElement("p",null,"dud"))
  }


  return (
    <div id='demo'>
        <h1>WELCOME</h1>
        <button type='button' onClick={check} >click</button>
        {/* {userdata.reverse().map((items)=>(
            <p>{items}</p>
        ))}
        <input type='text' name='name' onChange={(e)=>setName(e.target.value)} />
        <button type='button' onClick={check} >click</button> */}
    </div>
  )
}
