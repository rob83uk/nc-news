import { deleteComment } from './api';

const DeleteComment = (props) => {
  const { comment_id, setComments } = props;

  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      setComments((currentComments) => {
        const newComments = [];
        currentComments.forEach((comment) => {
          if (comment.comment_id != comment_id)
            newComments.push({ ...comment });
        });
        return newComments;
      });
    });
  };
  return (
    <div>
      <span className="delete">
        <button className="btn btn-primary" onClick={handleDelete}>
          <i className="fas fa-trash-alt" />
        </button>
      </span>
    </div>
  );
};

export default DeleteComment;
