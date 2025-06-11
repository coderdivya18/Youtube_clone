import React from "react";
import Comment from "./Comment";

const comments = [
  {
    id: 1,
    username: "John Doe",
    avatarUrl: "https://i.pravatar.cc/40?img=1",
    comment: "This video was super helpful. Thanks a lot!",
  },
  {
    id: 2,
    username: "Jane Smith",
    avatarUrl: "https://i.pravatar.cc/40?img=2",
    comment: "I didn’t understand the second part, can someone explain?",
  },
  {
    id: 3,
    username: "Techie Tom",
    avatarUrl: "https://i.pravatar.cc/40?img=3",
    comment: "Amazing content! Subscribed.",
  },
];

const CommentsContainer = () => {
  return (
    <div className="mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">{comments.length} Comments</h2>
      {comments.map((item) => (
        <Comment key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CommentsContainer;
