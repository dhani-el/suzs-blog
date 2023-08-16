import { useState, useRef } from "react";
import './commentForm.css';
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { fetchComments, postComment } from "../../../actions/commentActions";
import LogReminder from "../../LogReminder/Reminder";

const CommentForm = ({ title, pag }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const [reminder, setReminder] = useState(false);
    const data = new FormData();
    data.append("title", title);
    data.append("comment", comment);
    const commentX = new URLSearchParams(data);

    const loginStatus = Cookies.get('loginStatus');

    const form = useRef()
    // posting a comment to the API
    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.reset();
        if (loginStatus) {
            dispatch(postComment(commentX)).then(() => {
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
        <div className="comment-form-container">
            <form action="" onSubmit={handleSubmit} ref={form}>
                <textarea type="text" name="" id="" placeholder="Leave a comment..." onChange={(e) => { setComment(e.target.value) }}></textarea>
                {!IsPending && <button>send</button>}
                {IsPending && <button disabled id="disabled">sending</button>}
            </form>
            {reminder && <LogReminder reminder={reminder} setReminder={setReminder} />}
        </div>
    );
}

export default CommentForm;