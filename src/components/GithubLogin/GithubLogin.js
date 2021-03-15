import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const GithubLogin = () => {
    const [user, setUser] = useState({})
    var githubProvider = new firebase.auth.GithubAuthProvider();
    
     const handleSignInWithGithub = () => {
        firebase
        .auth()
        .signInWithPopup(githubProvider)
        .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(user);
          setUser(user);

        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
         });
    }
    return (
        <div>
            <button onClick={handleSignInWithGithub}>Sign In With Github</button>
            <h3>User: {user.displayName}</h3>
            <img src={user.photoURL} alt="" />
        </div>
    );
};
export default GithubLogin;