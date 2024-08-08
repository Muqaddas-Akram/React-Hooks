import React, { useRef, useState } from 'react'

function UnControllForm() {
 const [show, setShow]= useState(false)
const luckyName = useRef(null)

    const submitForm=(e)=>{
      e.preventDefault()
     const name= (luckyName.current.value)
     name === "" ?  alert("Please enter a name") : setShow(true)

    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
            <label htmlFor='luckyName'>my lucky name</label><br/>
            <input  type="text" id="luckyName" ref={luckyName}/>
        </div>
        <button>Submit</button>
      </form>
      <h2>{show ? `lucky name is ${luckyName.current.value}` : "" }</h2>
    </div>
  )
}

export default UnControllForm;