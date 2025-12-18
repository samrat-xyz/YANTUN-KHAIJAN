import React from "react";

function FeedbackForm() {
  const handleSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const rating = form.rating.value;
    const message = form.message.value;
    const newFeedback = {
      userName,
      rating,
      message,
    };
    fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Feed back added");
      });
  };
  return (
    <div className="max-w-xl mx-auto border shadow-md rounded-xl p-6 md:p-8">
      <form onSubmit={handleSubmite} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            name="userName"
            required
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Rating</label>
          <input
            type="text"
            name="rating"
            required
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
            placeholder="Rate (1 - 5)"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Feedback</label>
          <textarea
            required
            name="message"
            rows="4"
            className="border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-stone-500"
            placeholder="Write your feedback..."
          ></textarea>
        </div>

        <button className="btn w-full mt-2">Add Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
