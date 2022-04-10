import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shippment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const getName = (e) => {
        setName(e.target.value)
    }
    const getAddress = (e) => {
        setAddress(e.target.value)
    }
    const getPhone = (e) => {
        setPhone(e.target.value)
    }
    const shipping = (e) => {
        e.preventDefault()
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={shipping}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={getName} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={getAddress} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNum">PhoneNum</label>
                        <input onBlur={getPhone} type="tel" name="phoneNum" id="" required />
                    </div>
                    <input className='submit-btn' type="submit" value="Shipping" />
                </form>
                <br />
            </div>
        </div>
    );
};

export default Shippment;