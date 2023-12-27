import React, { useContext, useState, useEffect } from "react";

import './Navbar.css';
import './style.scss'
import { Link } from "react-router-dom";

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from "../../Context/ShopContext";
import logout from '../../Component/Assets/logout.png';
import profile from '../../Component/Assets/profile.png';
import update_prof from '../../Component/Assets/update_prof.png';
import { useNavigate } from 'react-router-dom'
// import { Login } from "../../Pages/Login";


const Navbar = () => {
    const [check, setCheck] = useState({})
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setCheck(JSON.parse(localStorage.getItem('token')))
        };
    }, [])

    const nagvigate = useNavigate();
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext)

    const Logout = () => {
        nagvigate('/login');
        window.location.reload()
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <div className="nav-login-cart">
                {
                    Object.keys(check).length > 0 && (
                        <>
                            <ul className="nav-menu">

                                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
                                </li>

                                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu ===     "mens" ? <hr /> : <></>}
                                </li>

                                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='womens'>Women</Link>
                                    {menu === "womens" ? <hr /> : <></>}
                                </li>

                                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kid</Link>{menu === "kids" ? <hr /> : <></>}</li>
                                <Link to='cart'><img src={cart_icon} /></Link>
                                <div className="nav-cart-count">{getTotalCartItems()}</div>
                            </ul>
                            <div class="dropdown">
                                <input type="checkbox" id="dropdown" />

                                <label class="dropdown__face" for="dropdown">
                                    <div class="dropdown__text" id="profile"><img src={profile} alt="" /><span>{check.name}</span></div>

                                    <div class="dropdown__arrow"></div>
                                </label>

                                <ul class="dropdown__items">
                                    <li><button style={{ "border": "none", "outline": "none", "width": "50px", "height": "50px" }} onClick={Logout}><img src={logout} alt="" /></button></li>
                                    <li><button style={{ "border": "none", "outline": "none", "width": "50px", "height": "50px" }}><img src={update_prof} alt="" style={{ "width": "30px" }} /></button></li>
                                </ul>
                            </div>
                        </>
                    )
                }
                
                {
                    Object.keys(check).length === 0 && (
                        <>
                            <Link to='/login'><button>Login</button></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Navbar