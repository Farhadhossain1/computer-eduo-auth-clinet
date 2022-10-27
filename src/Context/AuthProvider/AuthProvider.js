
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';



 export const AuthContext = createContext();
 const auth = getAuth(app) ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const githubProvider = new GithubAuthProvider();
    
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const cerateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const userProfileUpdate = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('thes is inside state change', currentUser)
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user,providerLogin,logOut ,cerateUser,signIn, userProfileUpdate, githubLogin  }

    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;