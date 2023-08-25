import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SplitText from "../utilities/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
import { gsap } from "gsap";
import { Power2 } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews/Reviews-wrapper/Reviews";
import lap from "../images/lap.jpg";
import newsletter1 from "../images/newsletter1.png";
import newsletter2 from "../images/newsletter2.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import like from "../images/like.png";
import m from "../images/m.png";
import m2 from "../images/m2.png";
import arrow from "../images/Arrow 1.png";
import { newsletterSub } from "../actions/userActions.js";
import Preloader from "../components/Preloader/Preloader.js";
import Circle from "../components/Circle.js";
import Cursor from "../components/Cursor/cursor.js";
import NavBar from "../components/Navbar/Navbar.js";

const Home = ({ updateCurse, updateLeave }) => {
    // newsletter submission implementation

    const [btnState, setBtnstate] = useState(false);
    const [emailState, setEmail] = useState();
    const form = useRef();
    const dispatch = useDispatch();

    // opening animation using GSAP and minimized version of splitText

    let container = useRef(null);
    let image = useRef(null);
    gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
    let imageReveal = CSSRulePlugin.getRule(".hero-stn-img-wrapper::after");

    const tl = new Timeline();
    useEffect(() => {
        tl.to(container, 1, { css: { visibility: "visible", overflow: "visible" } }).to(
            imageReveal,
            1,
            { height: "0%", ease: Power2.easeInOut, delay: 7.5 }
        ).to(image, 2, { scale: 1, ease: Power2.easeInOut, delay: -1.6 });
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 8
        });
        const split2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split2.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 8.1
        });
    }, []);

    let ata = new FormData();
    ata.append('email', emailState);
    const email = new URLSearchParams(ata);
    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.reset();
        dispatch(newsletterSub({email: `${email}`})).then(() => {
            setBtnstate(true);
        })
    }

    return (
        <div className="home-stn">
            <NavBar
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
            <Preloader />
            <Circle />
            {/* <div className={btnState ? 'sub-active' : 'sub-null'}>
                You're now an active subscriber!
            </div> */}
            <div className="hero-stn">
                <div className="hero-stn-texts">
                    <h1 id="split-text">Confused about living as a twenty <span id="raleway">-something?</span> You're not alone!</h1>
                    <p id="split-text2">Get in touch with Zee’s lifestyle rants for the imperfect twenty-somethings!</p>
                    <Link to="/blogs/0" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>explore</Link>
                </div>
                <div className="hero-stn-img-wrapper2">
                    <div ref={el => container = el} className="hero-stn-img-wrapper">
                        <img ref={el => image = el} src={lap} alt="" />
                    </div>
                    <div className="ellipses1">
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="ellipses2">
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ellipse">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-stn">
                <img className="m" src={m} alt="m curve" />
                <img src={m2} alt="m curve" className="m2" />
                <div className="graphics">
                    <div className="img-tile1">
                        <img className="newsletter-img-wrappers" src={newsletter2} alt="" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                    <img src={avatar4} alt="" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-tile2">
                        <img className="newsletter-img-wrappers" src={newsletter1} alt="pencils" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="profile images" />
                                    <img src={avatar2} alt="profile images" />
                                    <img src={avatar3} alt="profile images" />
                                    <img src={avatar4} alt="profile images" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="heart shape" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-sub-stn">
                    <h2>subscribe to our newsletter</h2>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <form action="" onSubmit={handleSubmit} ref={form}>
                        <input required type="email" name="" id="" placeholder="Email" onChange={(e) => (setEmail(e.target.value))} />
                        <button onMouseOver={updateCurse} onMouseLeave={updateLeave}> <span>Subscribe</span> <img src={arrow} alt="arrow" /> </button>
                    </form>
                </div>
            </div>
            <div className="reviews-stn">
                <Reviews
                    updateCurse={updateCurse}
                    updateLeave={updateLeave}
                />
            </div>
            <Footer
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
        </div>
    );
}

export default Home;
