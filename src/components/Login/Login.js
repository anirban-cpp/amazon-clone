import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory(); 

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            history.push('/');
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(Authuser => {
            console.log(Authuser);
            if(Authuser) {
                history.push('/');
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png' 
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' className='login__signInButton' onClick={signin}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Internet-Based Ads Notice.
                </p>
            </div>
            <div className='login__registerButton__container'>
                <p>New to Amazon?</p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;