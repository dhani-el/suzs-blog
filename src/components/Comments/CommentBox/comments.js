import './comments.css';
import { useSelector } from 'react-redux';
import { useState, useRef } from "react";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { fetchComments, postComment } from "../../../actions/commentActions";
import LogReminder from "../../LogReminder/Reminder";

const Comments = ({ title, pag }) => {
    const { comments, loading, error } = useSelector((state) => state?.fetchComments);
    const dispatch = useDispatch();
    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const [reminder, setReminder] = useState(false);
    const data = new FormData();
    data.append("title", title);
    data.append("comment", comment);


    const loginStatus = Cookies.get('loginStatus');

    const form = useRef()
    // posting a comment to the API
    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.reset();
        setIsPending(true);
        if (loginStatus) {
            dispatch(postComment({
                title: `${title}`,
                comment: `${comment}`,
            })).then(() => {
                setIsPending(false);
                dispatch(fetchComments(title, pag));
            }).catch(() => {
                setIsPending(false);
            })
        } else {
            setReminder(true);
        }
    }

    return (
        <div className="comments-wrapper">
            {loading ? (<div className="header">Loading...</div>) : (<div className="header">Comments</div>)}
            {error && <div className="err-msg">{error}</div>}
            <div className="comment-form-container">
                <form action="" onSubmit={handleSubmit} ref={form}>
                    <textarea type="text" name="" id="" placeholder="Leave a comment..." onChange={(e) => { setComment(e.target.value) }}></textarea>
                    {IsPending ? (<button disabled id="disabled">sending</button>) : (<button>send</button>)}
                </form>
                {reminder && <LogReminder reminder={reminder} setReminder={setReminder} />}
            </div>
            {comments &&
                <div className="comment-wrapper">
                    <p>({comments?.length}) comments</p>
                    {comments?.map((comment) => (
                        <div className="comment-stn" key={comment?._id}>
                            <h3>{comment?.username}</h3>
                            <p>{comment?.body}</p>
                        </div>
                    ))}
                </div>
                }

        </div>
    );
}

export default Comments;