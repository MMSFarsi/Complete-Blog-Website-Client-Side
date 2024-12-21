import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import { auth } from '../firebase/firebase.init';
import { createContext, useEffect, useState } from 'react';


export const AuthContext= createContext(null)
export const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };
    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }
    const signWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userInfo={
        user,loading,createUser,signInUser,setUser,logOut,updateUserProfile,signWithGoogle
    }
    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser)
              setLoading(false)
           
          })
          return ()=>{
              unSubscribe()
          }
  
      },[])
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider