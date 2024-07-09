import React, { useRef, useState } from 'react'

export default function From() {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [number, setNumber]= useState("")
    const [file, setFile]= useState("")
    const [check, setCheck]= useState(false)
    const [select, setSelect]= useState("")
    let userData={}
    const form = useRef();
    console.log(form);
    const handleSubmit=(e)=>{
        e.preventDefault();
        userData= {
            name, 
            email,
            number,
            file,
            check,
            select
        }
        console.log(userData);
    }

   


    console.log(name, email, number, file, check, select);
  return (
    <div>
        <form ref={form} onSubmit={handleSubmit}>
            <input onChange={(e)=> setName(e.target.value)} type="text" /> <br />
            <input  onChange={(e)=> setEmail(e.target.value)} type="email" name="" id="" /> <br />
            <input  onChange={(e)=> setNumber(e.target.value)} type="number" name="" id="" /> <br />
           
            <input  onChange={(e)=> setFile(e.target.files[0])} type="file" name="" id="" /> <br />
            <input  onChange={(e)=> setCheck(e.target.checked)} type="checkbox" name="" id="" /> <br />
            <select  onChange={(e)=> setSelect(e.target.value)} name="" id="">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select> <br />
            <input type="submit" value={"Submit"} />
        </form>
    </div>
  )
}
