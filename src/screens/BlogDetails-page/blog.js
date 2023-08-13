import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import './blog.css';
import Share from "../../utilities/Share";
import NavBar from "../../components/Navbar/Navbar";
import insta from "../../images/instalogo.png";
import tweet from "../../images/twitterlogo.png";
import commentsBtn from "../../images/comments.svg";
import zeehead from "../../images/zeehead.png";
import closeBtn from "../../images/close.svg";
import { formatDistanceToNowStrict } from "date-fns";
import { gsap } from "gsap";
import Cookies from 'js-cookie';
import Like from "../../components/LikeButton/like";

// one imports left

const BlogDetails = () => {
    const cBlock = useRef();
    const tl = useRef();
    const { id } = useParams();
    const navigate = useNavigate();
    // DELETE FUNC NEEDED
    const [copied, setCopied] = useState(false);
    const [commentPage, setCommentPage] = useState(0);
    const [showDel, setShowDel] = useState(true);
    const [closed, setClosed] = useState(false);
    const username = Cookies.get('username');
    const handleCopy = () => {
        setCopied(true);
    }
    const handleOpen = () => {
        setClosed(!closed);
    }
        // animating comments section
        useEffect(() => {
            window.scrollTo(0, 0);
            tl.current = gsap.timeline({
                paused: true
            })
            tl.current.fromTo(cBlock.current, {
                x: "100%",
                duration: 0
            }, {
                x: "0%",
                duration: 0.5,
                ease: 'power3.inOut'
            });
            if (username === 'rashadx' || username === 'daniel') {
                setShowDel(true)
                // correct this!!!
            }
    
        }, [blog, username]);
        // animations control
        useEffect(() => {
            closed ? tl.current.play() : tl.current.reverse();
        }, [closed]);
    return (
        <div className="blog-details-container">
            <NavBar />
            <div className="blog-details-container-2">
                <div className="blog-details">
                    {IsPending && <div className="load-msg">ZEE.</div>}
                    {error && <div className="err-msg">{error}</div>}
                    {blog && <article>
                        <div className="blog-nav">
                            <div className="blog-stuff">
                                <div className="zee-img-wrapper">
                                    <div className="zee-head-wrapper">
                                        <img src={zeehead} alt="" />
                                    </div>
                                    <div className="name">susan omono</div>
                                </div>
                                <div className="blog-stats">
                                    <div className="date">{new Date(blog[0].date).toString() === "Invalid Date" ? blog[0].date : formatDistanceToNowStrict(new Date(blog[0].date))} ago</div>
                                    <span className="dot">.</span>
                                    <div className="read-time">{blog[0].readTime} read</div>
                                </div>
                            </div>
                            <Share handleCopy={handleCopy} />
                        </div>
                        <h2>{blog[0].title}</h2>
                        <div className="header-image-wrapper">
                            <img src={blog[0].image} alt="blog" className="header-image" />
                        </div>
                        <p id="blog-body">{blog[0].body}</p>
                        {showDel && <button onClick={handleDelete}>delete blog</button>}
                        <div className="like-comment-hover">
                            <Like blogTitle={blog[0].title} />
                            <div className="comments-btn-wrapper" onClick={handleOpen}><img src={commentsBtn} alt="message button" /></div>
                        </div>
                        <div ref={cBlock} className={closed ? 'comments-wall played' : 'comments-wall reversed'}>
                            {/* <Comments title={blog[0].title} pag={commentPage} /> */}
                            <div className="close-button-wrapper" onClick={handleOpen}><img src={closeButton} alt="close button" /></div>
                        </div>
                    </article>}
                    {copied && <div className="copy-alert">Copied to Clipboard!</div>}
                </div>
                <div className="sticky-footer-container">
                    <div className="name">Susan O.</div>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <div className="links-wrapper">
                        <div className="socials-wrapper">
                            <a href="https://instagram.com/existentialcrisisgirl_?r=nametag" target="_blank" rel="noopener noreferrer" className="socials">
                                <img src={insta} alt="instagram logo" />
                            </a>
                            <a href="https://mobile.twitter.com/jupiter_knows" target="_blank" rel="noopener noreferrer" className="socials">
                                <img src={tweet} alt="twitter logo" />
                            </a>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs/0">Blog</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;