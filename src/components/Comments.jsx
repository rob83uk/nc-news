import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from './api';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  const [page, setPage] = useState(1);
  const { article_id } = useParams();

  const onClick = () => {
    setDisplayComments((displayComments) => !displayComments);
  };

  const loadMoreComments = () => {
    setPage((page) => page + 1);
  };

  console.log(comments);

  useEffect(() => {
    getComments(article_id, page).then((comments) => {
      setComments((currentComments) => {
        return currentComments.concat(comments);
      });
    });
  }, [article_id, page]);

  return (
    <div>
      <section id="comments">
        <div className="container">
          <div className="comment-container">
            <div className="comments-header-footer">
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={onClick}
              >
                {displayComments ? 'Hide Comments' : 'Show Comments'}
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
            <div className="comments-header-footer">
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={loadMoreComments}
              >
                Load More Comments
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
