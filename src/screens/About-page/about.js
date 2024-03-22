import typewriter from "../../images/type.png";
import newsletter1 from "../../images/newsletter1.png";
import newsletter2 from "../../images/newsletter2.png";
import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";
import avatar4 from "../../images/avatar4.png";
import like from "../../images/like.png";
import m from "../../images/m.png";
import m2 from "../../images/m2.png";
import arrow from "../../images/Arrow 1.png";
import './about.css';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../../utilities/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import { Timeline } from "gsap/gsap-core";
import CSSPlugin from "gsap/CSSPlugin";
import Footer from "../../components/Footer";
import { newsletterSub } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import NavBar from "../../components/Navbar/Navbar";
import Circle from "../../components/Circle";

const About = ({updateCurse, updateLeave}) => {
    // opening animation 
    const dispatch = useDispatch();
    let container = useRef(null);
    let image = useRef(null);
    gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
    let imageReveal = CSSRulePlugin.getRule(".zee .img-wrapper::after");

    const tl = new Timeline();
    useEffect(() => {
        tl?.to(container, 1, { css: { visibility: "visible", overflow: "visible" } }).to(
            imageReveal,
            1,
            { height: "0%", ease: Power2.easeInOut }
        ).to(image, 2, { scale: 1, ease: Power2.easeInOut, delay: -1.6 });
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap?.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "power2",
            delay: .5
        });
        window.scrollTo(0, 0);
    }, [])
    // Newsletter Implementation

    const [btnState, setBtnstate] = useState(false);
    const [emailState, setEmail] = useState();
    let ata = new FormData();
    ata.append('email', emailState);
    const email = new URLSearchParams(ata);
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.reset();
        dispatch(newsletterSub(email)).then(() => {
            setBtnstate(true);
        })
    }
    return (
        <div className="about-wrapper">
            <NavBar 
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
            <Circle />
            <div className={btnState ? 'sub-active' : 'sub-null'}>
                You're now an active subscriber!
            </div>
            <div className="about-container">
                <div className="zee">
                    <div ref={el => container = el} className="img-wrapper">
                        <img ref={el => image = el} src={typewriter} alt="Typewriter" />
                    </div>
                    <article>
                        <h2 id="split-text">about zee</h2>
                        <p id="split-text" className="lorem">Hello, my name is Susan, I am a multifaceted creative (writer, marketer, designer and so much more)</p>
                        <ul>
                            <li className="aboutZee" id="split-text">I am an aspiring UI/UX writer/researcher.</li>
                            <li className="aboutZee" id="split-text">I have marketed, managed and helped create content for a company that specializes in making luxurious adornment for women.</li>
                            <li className="aboutZee" id="split-text">Apart from my 9-5 jobs, I have a website where I share resources dedicated to helping young people everywhere become their best selves and to better hold themselves accountable.</li>
                        </ul>
                    </article>
                </div>
                <article className="article">
                    <p>
                        Whether they are discovering themself, finding their feet in a new career, navigating relationships, keeping up with academics, or exploring that new and thrilling hobby, they need support, even if it is just a little.
                    </p>
                    <p>
                        Zee is for them. Zee is for every twenty-something, by a twenty-something.
                    </p>
                    <p>
                        Zee provides guidance and inspiration to twenty-something-year-olds steering through life with intricately delivered how-to guides, inspiring features, and relatable firsthand accounts. Zee is rooting for every young person to have a well-balanced and fulfilling life and wants them always to remember that we are their biggest and loudest cheerleaders. In my free time, I'm a crochet designer.</p>
                </article>
            </div>
            <div className="newsletter-stn">
                <img className="m" src={m} alt="s curve" />
                {/* <img src={m2} alt="s curve" className="m2" /> */}
                <div className="graphics">
                    <div className="img-tile1">
                        <img className="newsletter-img-wrappers" src={newsletter2} alt="pencils" />
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
                    <div className="img-tile2">
                        <img className="newsletter-img-wrappers" src={newsletter1} alt="someone reading a blog post" />
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
                        <input type="email" name="" id="" placeholder="Email" onChange={(e) => (setEmail(e.target.value))} />
                        <button onMouseOver={updateCurse} onMouseLeave={updateLeave}> <span>Subscribe</span> <img src={arrow} alt="arrow" /> </button>
                    </form>
                </div>
            </div>
            <Footer 
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
        </div>
    );
}

export default About;