import React from "react";
import CommentsList from "./CommentsList.jsx";
import { commentsData } from "../utils/mockCommentData.js";

const CommentsContainer = () => {
  return (
    <div className="mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">
        {commentsData.length} Comments
      </h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
