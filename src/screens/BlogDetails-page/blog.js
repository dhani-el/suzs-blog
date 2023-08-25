import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { deleteBlog, fetchBlogDetails } from "../../actions/blogActions";
import "./blog.css";
import "../Blogs-page/blog.css";
import Comments from "../../components/Comments/comments";
import { fetchComments } from "../../actions/commentActions";
import Circle from "../../components/Circle";

// one imports left

const BlogDetails = ({updateCurse, updateLeave}) => {
    const cBlock = useRef();
    const tl = useRef();
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogDetails(id));
    }, [dispatch, id]);
    const { blogDetails, loading, error } = useSelector((state) => state?.blogDetails);
    const handleDelete = () => {
        dispatch(deleteBlog(id)).then(() => {
            navigate('/blogs/0');
        });
    }
    const [copied, setCopied] = useState(false);
    const [commentPage, setCommentPage] = useState(0);
    const [showDel, setShowDel] = useState(false);
    const [closed, setClosed] = useState(false);
    const username = Cookies.get('username');
    const handleCopy = () => {
        setCopied(true);
    }
    const handleOpen = () => {
        setClosed(!closed);
        dispatch(fetchComments(blogDetails[0]?.title, commentPage));
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

    }, [blogDetails, username]);
    // animations control
    useEffect(() => {
        closed ? tl.current.play() : tl.current.reverse();
    }, [closed]);
    return (
        <div className="blog-details-container">
            <NavBar 
            updateCurse={updateCurse}
            updateLeave={updateLeave}
             />
            <Circle/>
            <div className="blog-details-container-2">
                <div className="blog-details">
                    {loading ? (<div className="load-msg">ZEE.</div>) : (
                        <article>
                            <div className="blog-nav">
                                <div className="blog-stuff">
                                    <div className="zee-img-wrapper">
                                        <div className="zee-head-wrapper">
                                            <img src={zeehead} alt="" />
                                        </div>
                                        <div className="name">susan omono</div>
                                    </div>
                                    <div className="blog-stats">
                                        <div className="date">{new Date(blogDetails[0]?.date).toString() === "Invalid Date" ? blogDetails[0]?.date : formatDistanceToNowStrict(new Date(blogDetails[0]?.date))} ago</div>
                                        <span className="dot">.</span>
                                        <div className="read-time">{blogDetails[0]?.readTime} read</div>
                                    </div>
                                </div>
                                <Share handleCopy={handleCopy} />
                            </div>
                            <h2>{blogDetails[0]?.title}</h2>
                            <div className="header-image-wrapper">
                                <img src={blogDetails[0]?.image} alt="blog" className="header-image" />
                            </div>
                            <p id="blog-body">{blogDetails[0]?.body}</p>
                            {showDel && <button onClick={handleDelete}>delete blog</button>}
                            <div className="like-comment-hover">
                                <Like blogTitle={blogDetails[0]?.title} updateCurse={updateCurse} updateLeave={updateLeave}/>
                                <div className="comments-btn-wrapper" onClick={handleOpen} onMouseOver={updateCurse} onMouseLeave={updateLeave}><img src={commentsBtn} alt="message button" /></div>
                            </div>
                            <div ref={cBlock} className={closed ? 'comments-wall played' : 'comments-wall reversed'}>
                                <Comments title={blogDetails[0]?.title} pag={commentPage} />
                                <div className="close-button-wrapper" onClick={handleOpen} onMouseOver={updateCurse} onMouseLeave={updateLeave}><img src={closeBtn} alt="close button" /></div>
                            </div>
                        </article>
                    )}
                    {error && <div className="err-msg">{error}</div>}
                    {copied && <div className="copy-alert">Copied to Clipboard!</div>}
                </div>
                <div className="sticky-footer-container">
                    <div className="name">Susan O.</div>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <div className="links-wrapper">
                        <div className="socials-wrapper">
                            <a href="https://instagram.com/existentialcrisisgirl_?r=nametag" target="_blank" rel="noopener noreferrer" className="socials" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>
                                <img src={insta} alt="instagram logo" />
                            </a>
                            <a href="https://mobile.twitter.com/jupiter_knows" target="_blank" rel="noopener noreferrer" className="socials" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>
                                <img src={tweet} alt="twitter logo" />
                            </a>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs/0" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>Blog</Link>
                            </li>
                            <li>
                                <Link to="/about" onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;