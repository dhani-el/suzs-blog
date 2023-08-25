import { useEffect, useState } from "react";
import quotes from "../../images/quotes.png";
import mark from '../../images/exclamation.png';
import './login.css';
import { useNavigate, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/authActions";

const Login = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleUserChange = (e) => {
        setUserName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const { check, loading, error } = useSelector((state) => state?.loginUser);

    // posting the login credentials to the API
    const login = () => {
        setIsPending(true);
        dispatch(loginUser({
            userName,
            password,
        }));
    }
    //  storing login credentials in local storage
    useEffect(()=> {
        if (loading === false) {
            Cookies.set('loginStatus', true, { expires: 2 });
            Cookies.set('username', userName, { expires: 2 });
            setIsPending(false);
            navigate('/');
        } 
    },[dispatch, loading]) 

    return (
        <div className="login-container">
            <div className="form">
                <h2>Welcome back to ZEE</h2>
                <p>Username</p>
                <input type="name" placeholder='UserName' onChange={handleUserChange} />
                <p>Password</p>
                <input type="password" placeholder='Password' onChange={handlePasswordChange} />
                {isPending ? <button disabled id="disabled">Logging In</button> : <button type="submit" onClick={login}>log in</button>}
            </div>
            <div className="container2">
                <div className="overlay"></div>
                <div className="secondary-overlay">
                    <div className="quotes"><img src={quotes} alt="" /></div>
                    <div className="quotes"><img src={quotes} alt="" /></div>
                    <div className="text">Like gemstones, your enduring uniqueness makes you particularly beautiful.</div>
                </div>
            </div>
            <div className="marks mark-1"><img src={mark} alt="" /></div>
            <div className="marks mark-2"><img src={mark} alt="" /></div>
            <div className="marks mark-3"><img src={mark} alt="" /></div>
            <div className="marks mark-4"><img src={mark} alt="" /></div>
            <div className="marks mark-5"><img src={mark} alt="" /></div>
            <p className="signup-sticker"><Link to='/signup'>Don't have an account? Sign up here</Link></p>
        </div>
    );
}

export default Login;