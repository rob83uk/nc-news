import { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router-dom';
import { getComments, setVote } from './api';
import PostComment from './PostComment';
import DeleteComment from './DeleteComment';

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  const [page, setPage] = useState(1);
  const [reloadComments, setReloadComments] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [writeComment, setWriteComment] = useState(false);

  const { article_id } = useParams();
  const { article, user } = props;

  const showComments = () => {
    if (displayComments) {
      setComments([]);
      setPage(1);
      setReloadComments((reloadComments) => !reloadComments);
    }
    setDisplayComments((displayComments) => !displayComments);
  };

  const loadMoreComments = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    getComments(article_id, page).then((comments) => {
      setComments((currentComments) => {
        return currentComments.concat(comments);
      });
    });
  }, [article_id, page, reloadComments]);

  const handleLike = (num, id) => {
    setHasErrored(false);
    setComments((currentComments) => {
      const updatedComments = currentComments.map((comment) => {
        const newComment = { ...comment };
        if (id === newComment.comment_id) newComment.votes += num;
        return newComment;
      });
      return updatedComments;
    });

    setVote(num, id).catch(() => {
      setHasErrored(true);
      console.log(hasErrored);
      setComments((currentComments) => {
        const updatedComments = currentComments.map((comment) => {
          const newComment = { ...comment };
          if (id === newComment.comment_id) newComment.votes -= num;
          return newComment;
        });
        return updatedComments;
      });
    });
    alert('Thanks for your vote!');
  };

  return (
    <div>
      <section id="comments">
        <div className="container">
          <div className="comment-container">
            <div className="comments-header-footer">
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={showComments}
              >
                {displayComments ? 'Hide Comments' : 'Show Comments'}
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  setWriteComment((writeComment) => {
                    return !writeComment;
                  });
                }}
              >
                Write a Comment
              </button>
            </div>
            <div>
              {writeComment && (
                <Route>
                  <PostComment
                    article_id={article_id}
                    user={user}
                    setComments={setComments}
                    setPage={setPage}
                    setReloadComments={setReloadComments}
                  />
                </Route>
              )}
            </div>
            {!displayComments
              ? null
              : comments.map((comment) => {
                  return (
                    <div key={comment.comment_id} className="comment-card">
                      <h5>
                        <i className="far fa-user" /> {comment.author}{' '}
                        <span id="likes">Likes: {comment.votes}</span>
                      </h5>
                      <p>{comment.body}</p>
                      <div className="likes">
                        <span
                          className="like"
                          onClick={() => {
                            handleLike(1, comment.comment_id);
                          }}
                        >
                          <i className="far fa-thumbs-up"></i>
                        </span>
                        <span
                          className="dislike"
                          value={1}
                          onClick={() => {
                            handleLike(-1, comment.comment_id);
                          }}
                        >
                          <i class="far fa-thumbs-down" />
                        </span>
                        {user.username !== comment.author ? null : (
                          <Route>
                            <DeleteComment
                              comment_id={comment.comment_id}
                              setComments={setComments}
                            />
                          </Route>
                        )}
                        {hasErrored && <p>Voting not working right now.</p>}
                      </div>
                    </div>
                  );
                })}
            {!displayComments ? null : article.comment_count <=
              comments.length ? (
              <p>No more comments</p>
            ) : (
              <div className="comments-header-footer">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  onClick={loadMoreComments}
                >
                  Load More Comments
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
