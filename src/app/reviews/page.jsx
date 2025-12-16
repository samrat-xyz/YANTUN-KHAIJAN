import React from 'react'
import ReviewsPage from './Reviews'
export const metadata = {
  title: {
    absolute:'Satisfied User'
  },
  description: "Best Fast Food In Noakhali",
};
function AllReviews() {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  )
}

export default AllReviews
