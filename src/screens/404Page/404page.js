import { Link } from "react-router-dom";
import "./404page.css";
import m2 from "../../images/m2.png";
import ErrorImage from "../../components/404Image/404Image";

const ErrorPage = () => {
    return (
        <div className="parent">
            <div className="error-page-container">
                <div className="error-texts">
                    <p>
                        <span>Page not found</span>
                    </p>
                    <h2>OH NO! Error 404</h2>
                    <p className="description">We can't seem to find the page you're looking for</p>
                    <Link to="/">Homepage</Link>
                </div>
                <ErrorImage/>
                <img className="m2" src={m2} alt="s curve" />
            </div>
        </div>
    );
}

export default ErrorPage;