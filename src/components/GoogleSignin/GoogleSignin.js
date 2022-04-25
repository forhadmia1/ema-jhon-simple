import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        console.error(error)
    }
    return (
        <button onClick={() => { signInWithGoogle() }} className='google-btn'>Continue with Google</button>
    );
};

export default GoogleSignin;
