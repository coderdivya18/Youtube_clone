import React from "react";
import Comment from "./Comment.jsx";

const CommentsList = ({ comments }) => {
  // console.log(comments);
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment item={comment} />
      {Array.isArray(comment.replies) && comment.replies.length > 0 && (
        <div className="ml-10 mt-4 space-y-4">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
