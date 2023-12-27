import React, { useState, useEffect } from 'react'
import './CSS/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Axios from 'axios';

// import {useCookies} from 'react-cookie'

export const Login = () => {

    localStorage.setItem("token", JSON.stringify({}))
    const [allUsers, setAllusers] = useState([])
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const[_,setCookies] = useCookies(["access_token"])

    useEffect(()=>{
        Axios.get('http://127.0.0.1:3001/')
        .then((response)=>{
            setAllusers(response.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[])

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('You must fill in all the fields');
        }
        else {
            try {
                const response = await Axios.post("http://127.0.0.1:3001/login", { email, password });
                // get data from db and set it in localstorage
                if (response.data.message === "success") {
        
                    allUsers.map((e) => {
                        if (e.email === email) {
                            localStorage.setItem('token', JSON.stringify(e))
                        }
                    })           
                    navigate('/')
                    window.location.reload()
                }
                else {
                    alert("Email or Password icorrect");
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred during login');
            }
        }
    }



    return (
        <>

            <div className='login'>

                <div className="loginsignup-container">
                    <h1>Login</h1>
                    <div className="loginsignup-fields">
                        <input type="email" placeholder="Email Adress" value={email} onChange={(e) => setemail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button onClick={login}>Login</button>
                    <p className="loginsignup-login">you don't have account ? <Link to='/register'>sign up here</Link></p>
                    <div className="loginsignup-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>

    )
}
