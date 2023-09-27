import './loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div class="typewriter">
                <div class="slide"><i></i></div>
                <div class="paper"></div>
                <div class="keyboard"></div>
            </div>
        </div>
    );
}

export default Loader;