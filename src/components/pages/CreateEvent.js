import React, { useEffect } from 'react';
import '../CSS/formularios.css';
import { useState } from 'react'

function FirebaseDemo() {

  const [details, setDetails] = useState({
      fName: '',
      lName: '',
      email: '',
     
  })

  const PostData =async(e)=>{
      e.preventDefault()

      const{fName,lName,email}=details;

     const res=await fetch("https://amit-64616-default-rtdb.firebaseio.com/amitform.json",
     {
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({
          fName,
          lName,
          email,
         
         })
      })

  }

return (
  <div className='form' >
      <input type='text' placeholder='Enter your first name' onChange={(e)=>
          setDetails({...details,fName:e.target.value})} />
      <input type='text' placeholder='Enter your last name' onChange={(e)=>
          setDetails({...details,lName:e.target.value})}  />
      <input type='email' placeholder='Enter your Email address' onChange={(e)=>
          setDetails({...details,email:e.target.value})} />
      <button onClick={PostData}>Submit</button>
  </div>
)
}

export default FirebaseDemo

/*export default function Createevent() {
  return (
    <>
      <div class="newevent">
        <div class="formulario">
          <form>
            <label for="fname"  id="email">E-mail</label><br />
            <input type="text" id="femail" name="usuario" placeholder="example@mail.com" />       
            <br />
            <label for="fname" id="password">Password</label><br />
            <input type="password" id="fpassword" name="contrasena" placeholder="**********" />
            <label for="fname"  id="languaje">Language</label>
            <select id="idioma" name="idioma" onChange="Idioma()">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
            </select>
          </form>
          <br />
        </div>
      </div>
    </>
  );
}*/