import insta from "../images/instalogo.png";
import tweet from "../images/twitterlogo.png";

const Footer = () => {
    return ( 
        <footer className="footer">
            <article>
                <div className="logo">Susan o.</div>
                <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                <div className="socials-wrapper">
                    <a href="https://instagram.com/existentialcrisisgirl_?r=nametag" target="_blank" rel="noopener noreferrer" className="socials">
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://mobile.twitter.com/jupiter_knows" target="_blank" rel="noopener noreferrer" className="socials">
                        <img src={tweet} alt="" />
                    </a>
                </div>
                <p id="facebook-joke">If you still use facebook we want better for you.</p>
            </article>
        </footer>
     );
}
 
export default Footer;