import ErrorImg from "../../images/404.png";
import "./404Image.css";

const ErrorImage = () => {
    return (
        <div className="fun-image-container">
            <img src={ErrorImg} alt="" />
        </div>
    );
}

export default ErrorImage;