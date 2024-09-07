import React, { useState } from "react";
import { Comments, CommentsForm, PostDetail, PostWidget } from "@/components";
import { getPosts, getPostsDetails, getComments } from "@/services";
import { FaLink, FaRegCommentDots } from "react-icons/fa";

const PostDetails = ({ post, initialCommentCount }) => {
  const [newComment, setNewComment] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(initialCommentCount);
  const [showPopup, setShowPopup] = useState(false);

  const handleNewComment = (comment) => {
    setNewComment(comment);
    setCommentCount((prevCount) => prevCount + 1); // Update comment count
  };

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000); // Popup duration
      })
      .catch((err) => {
        console.error("Failed to copy the link: ", err);
      });
  };

  const slug = post.slug;
  const category = post.category;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Post Content */}
        <div className="mb-12">
          <PostDetail post={post} />
        </div>

        {/* Interaction Navbar at the Bottom */}
        <div className="mx-6 sm:mx-12 lg:mx-48 border flex justify-between items-center p-4 rounded-lg mb-8 bg-white shadow-md">
          <button
            className="flex items-center text-secondary text-opacity-70 hover:text-secondary transition duration-300"
            onClick={handleToggleComments}
          >
            <FaRegCommentDots size={24} className="mr-2" />
            <span className="hidden sm:inline">Comment ({commentCount})</span>
          </button>
          <button
            className="flex items-center text-secondary text-opacity-70 hover:text-secondary transition duration-300"
            onClick={handleCopyLink}
          >
            <FaLink size={24} className="mr-2" />
            <span className="hidden sm:inline">Copy Link</span>
          </button>
        </div>

        {/* Popup for Copy Link */}
        {showPopup && (
          <div className="fixed p-6  inset-0 flex items-center justify-center z-50">
            <div className="bg-secondary bg-opacity-30 text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Ready to be shared!</p>
            </div>
          </div>
        )}

        {/* Flex Container for Related Posts and Comments Form */}
        <div className="relative">
          {/* Related Posts Section */}
          {!showComments && (
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
              <div className="flex flex-col gap-4">
                <PostWidget slug={post.slug} category={category} />
              </div>
            </div>
          )}

          {/* Conditional Rendering for Comments Form and Comments Section */}
          {showComments && (
            <div className="transition-opacity duration-300 ease-in-out w-full">
              <div className="w-full bg-white shadow-md rounded-lg p-6 mb-8">
                <CommentsForm slug={slug} onNewComment={handleNewComment} />
              </div>
              <div className="w-full bg-white shadow-md rounded-lg p-6">
                <Comments
                  slug={slug}
                  newComment={newComment}
                  onCommentCountChange={setCommentCount}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await getPostsDetails(slug);
  const comments = await getComments(slug);

  return {
    props: {
      post: data,
      initialCommentCount: comments.length,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostDetails;
