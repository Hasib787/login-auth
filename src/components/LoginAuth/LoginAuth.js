import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';
import GithubLogin from '.././GithubLogin/GithubLogin'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const LoginAuth = () => {
    const [user, setUser] = useState({});
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleSignInWithGoogle = () => {
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

    const handleSignInWithFacebook = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log(user)
                setUser(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message; 
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);
            });

    }

    return (
        <div>
            <h1>Sign In Authentication</h1>
            <button onClick={handleSignInWithGoogle}>Sign in With Google</button>
            <br/>
            <button onClick={handleSignInWithFacebook}>Sign in With Facebook</button>
            <br/>
            <GithubLogin></GithubLogin>
            <h3>User: {user.displayName}</h3>
            <img src={user.photoURL} alt="" />
            

        </div>
    );
};

export default LoginAuth;
