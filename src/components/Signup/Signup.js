import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookerror,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop')
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }
    const getPassword = (event) => {
        setPassword(event.target.value)
    }
    const getConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const createUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={createUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={getEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={getPassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input onBlur={getConfirmPassword} type="password" name="confirmpassword" id="" required />
                    </div>
                    <p className='error'>{error}</p>
                    <p className='error'>{hookerror && hookerror.message}</p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p className='form-link'>Have an account?<Link to={'/login'}>Log In</Link></p>
                <p className='or'>or</p>
                <button className='google-btn'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;