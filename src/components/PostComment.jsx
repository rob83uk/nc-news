import { useState } from 'react';
import { postComment } from './api';

const PostComment = (props) => {
  const { article_id, user, setComments, setPage, setReloadComments } = props;
  const [newComment, setNewComment] = useState('');

  const handleChange = ({ target: { value } }) => {
    setNewComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, user.username, newComment).then(() => {
      setNewComment('');
      setComments([]);
      setPage(1);
      setReloadComments((reloadComments) => !reloadComments);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form">
        <div>
          <textarea
            class="text-input message-input"
            placeholder="Write Your Comment Here"
            value={newComment}
            onChange={handleChange}
            name="message"
          ></textarea>
        </div>
        <div>
          <button id="comment-button" type="submit" class="btn btn-dark">
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostComment;
