import React, { useEffect, useState } from 'react';

function CommentList({ castId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/casts/${castId}/comments`)
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [castId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p className="comment-content">{comment.content}</p>
          <p className="comment-author">Posted by: {comment.author}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
