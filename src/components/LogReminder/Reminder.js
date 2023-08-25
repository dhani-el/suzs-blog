import './Reminder.css';
import closeBtn from "../../images/close.svg";
import { Link } from "react-router-dom";

const LogReminder = ({reminder, setReminder, updateCurse, updateLeave}) => {

    const handleClick = () => {
        setReminder(false);
    }
    return (
        <div className="login-reminder-overlay">
            <div className="login-reminder-overlay-child">
                You need to be logged in!
            </div>
            <div className="login-link"><Link to="/login" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>Login</Link></div>
            <div className="button-wrapper" onClick={handleClick} onMouseOver={updateCurse} onMouseLeave={updateLeave}>
                <img src={closeBtn} alt="cancel button" />
            </div>
        </div>
    );
}

export default LogReminder;