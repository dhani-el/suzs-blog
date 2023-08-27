import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import "./register.css";
import quotes from "../../images/quotes.png";
import mark from '../../images/exclamation.png';
import { useDispatch } from "react-redux";
import { checkUsername, registerUser } from "../../actions/authActions";
import { newsletterSub } from "../../actions/userActions";

const Register = () => {
    // states regulating signing up
    const [name, setName] = useState('');
    const [validName, setvalidName] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const timeoutRef = useRef();

    // checking if the username already exists by cross-referencing with the API
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log("validation starting soon");
        timeoutRef.current = setTimeout(() => {
            dispatch(checkUsername({
                username: `${e.target.value}`
            })).then((res)=> {
                setvalidName(res);
                clearTimeout(timeoutRef.current);
            })
        }, 500);
    }



    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    const updateNewsletter = () => {
        setNewsletter(!newsletter)
    }

    // implementing newsletter functions
    const newsletterDets = () => {
        dispatch(newsletterSub({email: `${email}`}));
    }

    // posting sign up credentials on the API
    const signUp = (e) => {
        dispatch(registerUser({
            userName: `${name}`,
            email: `${email}`,
            password: `${password}`
        })).then(()=> {
            Cookies.set('email', email, { expires: 2 });
            navigate('/login');
            newsletterDets();
        });
    }
    return (
        <div className="signup-container">
            <div className="form">
                <h2>Sign Up for ZEE</h2>
                <p>Become a part of our subscribers.</p>
                <input type="text" value={name} onChange={handleNameChange} placeholder='Name' />
                <input type="email" value={email} onChange={updateEmail} placeholder='Email' />
                <input type="password" value={password} onChange={updatePassword} placeholder='Password' />
                <label>
                    <input type="checkbox" onChange={updateNewsletter} /> i want newsLetters
                </label>
                <button type="submit" onClick={signUp}>sign me up!</button>
            </div>
            <div className="container2">
                <div className="overlay"></div>
                <div className="secondary-overlay">
                    <div className="quotes"><img src={quotes} alt="left quotes" /></div>
                    <div className="quotes"><img src={quotes} alt="right quotes" /></div>
                    <div className="text">Like gemstones, your enduring uniqueness makes you particularly beautiful.</div>
                </div>
            </div>
            <div className="marks mark-1"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-2"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-3"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-4"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-5"><img src={mark} alt="exclamation mark" /></div>
        </div>
    );
}

export default Register;