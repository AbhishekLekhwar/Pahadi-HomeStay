import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const ReviewSection = ({ reviews, onAddReview }) => {
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      onAddReview(newReview);
      setNewReview({ rating: 5, comment: "" });
      setShowReviewForm(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>

      {/* Review Stats */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold mr-2">
            {(
              reviews.reduce((sum, review) => sum + review.rating, 0) /
                reviews.length || 0
            ).toFixed(1)}
          </span>
          <div className="flex">
            {renderStars(
              Math.round(
                reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length || 0
              )
            )}
          </div>
          <span className="text-gray-600 ml-2">({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Add Review Button */}
      <button
        onClick={() => setShowReviewForm(!showReviewForm)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Write a Review
      </button>

      {/* Review Form */}
      {showReviewForm && (
        <form
          onSubmit={handleSubmitReview}
          className="mb-6 p-4 bg-gray-50 rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <FaStar
                    className={`text-2xl cursor-pointer ${
                      star <= newReview.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } hover:text-yellow-400`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              placeholder="Share your experience..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Review
            </button>
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex items-start space-x-3">
              <FaUserCircle className="text-3xl text-gray-400 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-800">{review.user}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex mb-2">{renderStars(review.rating)}</div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No reviews yet. Be the first to review!
        </p>
      )}
    </div>
  );
};

export default ReviewSection;
