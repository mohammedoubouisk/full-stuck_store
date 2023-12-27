import React, { useState } from "react";
import './CSS/LoginSignup.css'
// import {Link} from 'react-router-dom'

import Axios from 'axios'

const LoginSignup =()=>{
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    const register = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            alert('You must fill in all the fields');
        } 
        else {
         
            const response = await Axios.get(`http://127.0.0.1:3001/?email=${email}`);
            console.log(response)
            if (response.data.exists) {
                this.setState({ emailExists: true });
                alert('This email already exists');

            }
            else{
                const registrationResponse = await Axios.post('http://127.0.0.1:3001/register', {name,email,password,});
                alert(registrationResponse.data.message);

                if(registrationResponse.data.message === 'addition sucess'){
                    setname('')
                    setemail('')
                    setpassword('')
                }
                else{
                    setname(name)
                    setemail(email)
                    setpassword(password)
                }
             
            }

        }
    };
    

    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text"  placeholder="Your Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <input type="email"  placeholder="Email Adress" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <input type="password"  placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button onClick={register}>Register</button>
                {/* <p className="loginsignup-login">Already have an account ? <Link to='/register'>SignUp here</Link></p> */}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup