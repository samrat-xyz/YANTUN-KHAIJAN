import React from "react";

const FeedbackCard = ({ feedback }) => {
  const { userName, rating, comment, date } = feedback;

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{userName}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400 text-lg">
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default FeedbackCard;
