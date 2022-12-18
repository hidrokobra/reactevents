import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react';
import {auth} from '../firebase/firebase'

export default function Login() {

  const [currentUser, setCurrentUser] = useState(null);
  /*
  State
  0: Initialized
  1: Loading
  2: Login
  3: Login (Without register)
  4: No login state
  */
  const [state, setCurrentState] = useState(0);

  useEffect(() => {
    setCurrentState(1);
    onAuthStateChanged(auth, handleUserStateChanged)
  },[]);

  function handleUserStateChanged(user){
    if(user){
      setCurrentState(3);
      console.log(user.displayName);
    }else{
      setCurrentState(4);
      console.log('No hay nadie autenticado');
    }
  }
  async function handleOnClick(){
/* Login auth const */
    const googleProvider = new GoogleAuthProvider();
    await singInWithGoogle(googleProvider);

    async function singInWithGoogle(){
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  if (state === 3){
    return (
    <>
        <div><button className='btn' onClick={handleOnClick}>Logout</button></div>
    </>
    );
  }

  if (state === 4){
    return (
    <>
        <div><button className='btn' onClick={handleOnClick}>Login</button></div>
    </>
    );
  }

  return <div>Loading...</div>;
}