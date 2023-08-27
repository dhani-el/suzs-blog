import { Link } from "react-router-dom";
import '../../screens/Blogs-page/blog.css';
import './BlogList.css';
import { formatDistanceToNowStrict } from "date-fns";

const Bloglist = ({ blog, updateCurse, updateLeave }) => {

    return (
        <div className="bloglist">
            <div className="blog-preview" key={blog?._id}>
                <div className="blog-text">
                    <div className="writer"><div className="author">zee</div><div className="point">.</div> <div className="date">
                        {new Date(blog?.date).toString() === "Invalid Date" ? blog?.date : formatDistanceToNowStrict(new Date(blog?.date))} ago</div></div>
                    <Link to={`/blog/${blog?.title}`} onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>
                        <div className="blog-title">{blog?.title}</div>
                        <p>{blog?.body.slice(0, 200)}...</p>
                    </Link>
                    <div className="blog-stuff">
                        <div className="blog-stats">
                            <Link to={`/genre?name=${blog?.genre}`} onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>
                                <div className="genre">{blog?.genre}</div>
                            </Link>
                            <span className="read-time">{blog?.readTime} read</span>
                        </div>
                    </div>
                </div>
                <div className="blog-preview-img-wraper">
                    <div style={{ backgroundImage: `url(${blog?.image})` }}></div>
                </div>
            </div>
        </div>
    );
}

export default Bloglist;