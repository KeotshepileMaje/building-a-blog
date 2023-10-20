import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
    const {postId} = props
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([])

    useEffect(() => {
      // Fetch comments on the client side
      fetch('/api/comments/comments')
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
        });
    }, [postId, showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        fetch(`/api/comments/${postId}`, {
            method: 'POST', 
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( async res => {
            if (res.ok) {
                return res.json()
            }

            const data = await res.json();
            throw new Error(data.message || 'Something went wrong!');
        }).then( data => {
            console.log(data)
        })
    }

    return (
        <section className={classes.comments}>
        <button onClick={toggleCommentsHandler}>
            {showComments ? 'Hide' : 'Show'} Comments
        </button>
        {showComments && <NewComment onAddComment={addCommentHandler} />}
        {showComments && <CommentList items={comments} />}
        
        </section>
    );
}

export default Comments;