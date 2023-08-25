import './comments.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CommentForm from './CommentForm/commentForm';
import Comment from './CommentList/comment';

const Comments = ({title , pag}) => {
    const {comments, loading, error} = useSelector((state)=>state?.fetchComments)

    return (
        <div className="comments-wrapper">
            {loading ? <div className="header">Loading...</div> : <div className="header">Comments</div> }
            {error && <div className="err-msg">{error}</div>}
            <CommentForm title = {title} pag={pag} />
            { comments && <Comment comments={comments}/> }
        </div>
    );
}

export default Comments;