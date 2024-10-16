import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";

const Comments = ({ slug, newComment, onCommentCountChange }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (slug) {
      getComments(slug).then((result) => {
        setComments(result);
        if (onCommentCountChange) {
          onCommentCountChange(result.length); // Pass the comment count to the parent
        }
      });
    }
  }, [slug, newComment, onCommentCountChange]); // Include onCommentCountChange here

  useEffect(() => {
    if (newComment) {
      setComments((prevComments) => [newComment, ...prevComments]); // Add new comment to the beginning of the list
    }
  }, [newComment]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-secondary bg-opacity-15 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
