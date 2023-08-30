import { useState, useEffect } from "react";
import "./like.css";
import Cookies from 'js-cookie';
import liked from "../../images/liked.png";
import unliked from "../../images/unliked.png";
import LogReminder from "../LogReminder/Reminder";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogLikes, likeBlog, unLikeBlog } from "../../actions/blogActions";

const Like = ({ blogTitle, updateCurse, updateLeave }) => {
    const [like, setLike] = useState(false);
    const [no_Of_Likes, set_no_of_likes] = useState(0);
    const [reminder, setReminder] = useState(false);
    const loginStatus = Cookies.get('loginStatus');
    const dispatch = useDispatch();

    // like and unlike functions
    const handleLike = () => {
        if (loginStatus) {
            dispatch(likeBlog({blogTitle: `${blogTitle}`})).then(() => {
                setLike((like) => !like);
            })
        } else {
            setReminder(true);
        }
    }
    const handleUnLike = () => {
        if (loginStatus) {
            dispatch(unLikeBlog({blogTitle: `${blogTitle}`})).then(()=> {
                setLike((like) => !like);
            })
        } else {
            setReminder(true);
        }
    }
    useEffect(() => {
        dispatch(fetchBlogLikes({blogTitle: `${blogTitle}`})).then((value)=> {
            value?.json();
        }).then((data)=> {
            set_no_of_likes(data);
        })
    }, [like, blogTitle, no_Of_Likes]);
    return (
        <div className="like-container">
            <button onClick={like ? handleUnLike : handleLike} onMouseOver={updateCurse} onMouseLeave={updateLeave}> <img className={like ? 'liked' : 'unliked'} src={like ? liked : unliked} alt="heart shape" /></button>
            <p>{no_Of_Likes}</p>
            {reminder && <LogReminder reminder={reminder} setReminder={setReminder}  updateCurse={updateCurse} updateLeave={updateLeave}/>}
        </div>
    );
}

export default Like;