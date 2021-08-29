import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from './api';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayCommenst] = useState(false);
  const { article_id } = useParams();

  const onClick = () => {
    setDisplayCommenst(true);
  };

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  console.log(displayComments);

  return (
    <div>
      <section id="comments">
        <div className="container">
          <div className="comment-container">
            <div className="comments-header">
              <h2>{comments.length} Comments</h2>
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={onClick}
              >
                Show Comments
              </button>
            </div>
            {comments.map((comment) => {
              return (
                <div key={comment.comment_id} className="comment-card">
                  <h5>
                    {comment.author} Likes: {comment.votes}
                  </h5>
                  {comment.body}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
