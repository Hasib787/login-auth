import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

const GithubLogin = () => {
    const handleSignInWithGithub = () => {

    }
    return (
        <div>
            <button onClick={handleSignInWithGithub}>Sign In With Github</button>
        </div>
    );
};
export default GithubLogin;