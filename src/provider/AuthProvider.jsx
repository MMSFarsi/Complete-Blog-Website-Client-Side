import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import { auth } from '../firebase/firebase.init';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';



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
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser?.email) {
            setUser(currentUser);
            try {
              const { data } = await axios.post(`https://assignment-11-server-zeta-liart.vercel.app/jwt`, {
                email: currentUser.email,
              },{withCredentials:true}
            );
             
            } catch (error) {
              console.error("Error fetching token:", error);
            }
          } else {
          
            setUser(currentUser); 
            const { data } = await axios.get(`https://assignment-11-server-zeta-liart.vercel.app/logout`,{withCredentials:true}
            )



          }
          setLoading(false);
        });
      
        return () => unSubscribe();
      }, []);
      
  return (
    <AuthContext.Provider value={userInfo}>
 
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider