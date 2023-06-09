import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithCustomToken, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = {displayName: 'Hashwala'};

    const [user, setUser] = useState(null);

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUserWithEmail,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;