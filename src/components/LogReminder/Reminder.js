import './Reminder.css';
import closeBtn from "../../images/close.svg";
import { Link } from "react-router-dom";

const LogReminder = ({reminder, setReminder}) => {

    const handleClick = () => {
        setReminder(false);
    }
    return (
        <div className="login-reminder-overlay">
            <div className="login-reminder-overlay-child">
                You need to be logged in!
            </div>
            <div className="login-link"><Link to="/login">Login</Link></div>
            <div className="button-wrapper" onClick={handleClick}>
                <img src={closeBtn} alt="cancel button" />
            </div>
        </div>
    );
}

export default LogReminder;