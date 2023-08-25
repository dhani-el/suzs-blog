import { Link } from "react-router-dom";
import './Navbar.css';
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import menuBtn from "../../images/hamburger.svg";
import closeButton from "../../images/close.svg";
import Cookies from 'js-cookie';

const NavBar = ({ updateCurse, updateLeave }) => {
    const nav = useRef();
    const tl = useRef();
    const username = Cookies.get('username');

    const loginStatus = Cookies.get('loginStatus');
    const [closed, setClosed] = useState(false);
    const handleOpen = () => {
        setClosed(!closed);
    }
    useEffect(() => {
        tl.current = gsap.timeline({
            paused: true
        })
        tl.current.fromTo(nav.current, {
            x: "100%",
            duration: 0
        }, {
            x: "0%",
            duration: 0.5,
            ease: 'power3.inOut'
        })

    }, []);
    useEffect(() => {
        closed ? tl.current.play() : tl.current.reverse();
    }, [closed]);
    return (
        <div className="navbar">
            <div className="logo-wrapper">ZEE</div>
            <ul id="mobile-nav" ref={nav}>
                <li onClick={handleOpen}><Link to="/">home</Link></li>
                <li onClick={handleOpen}><Link to="/blogs/0">blog</Link></li>
                <li onClick={handleOpen}><Link to="/about">about</Link></li>
                {loginStatus ? <li>Hi {username}</li> : <li onClick={handleOpen}><Link to="/login" id="signup"><button>log in</button></Link></li>}
                <div className="closeBtn-wrapper" onClick={handleOpen}>
                    <img src={closeButton} alt="close button" />
                </div>
            </ul>
            <ul>
                <li><Link to="/" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave} >home</Link></li>
                <li><Link to="/blogs/0" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave} >blog</Link></li>
                <li><Link to="/about" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave} >about</Link></li>
                {loginStatus ? <li>Hi {username}</li> : <li><Link to="/login" id="signup" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}><button> Log In</button></Link></li>}
            </ul>
            <div className="menu-btn-wrapper" onClick={handleOpen}>
                <img src={menuBtn} alt="hamburger" />
            </div>
        </div>
    );
}

export default NavBar;