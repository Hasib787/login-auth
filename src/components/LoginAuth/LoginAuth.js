import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';

firebase.initializeApp(firebaseConfig);

const LoginAuth = () => {
    const [user, setUser] = useState({});
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            console.log(user);
            setUser(user);
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
    }

    return (
        <div>
            <h1>This is Authentication</h1>
            <button onClick={handleSignIn}>Sign in With Google</button>
            <h3>Email: {user.email}</h3>
            <img src={user.photoURL} alt=""/>
        </div>
    );
};

export default LoginAuth;
