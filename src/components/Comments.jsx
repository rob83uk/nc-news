import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from './api';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  const { article_id } = useParams();

  const onClick = () => {
    setDisplayComments(true);
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
              {/* <h2>{comments.length} Comments</h2> */}
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={onClick}
              >
                Show Comments
              </button>
            </div>
            {!displayComments
              ? null
              : comments.map((comment) => {
                  return (
                    <div key={comment.comment_id} className="comment-card">
                      <h5>
                        <i class="far fa-user" /> {comment.author}{' '}
                        <span id="likes">
                          <i class="far fa-thumbs-up" /> Likes: {comment.votes}
                        </span>
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
