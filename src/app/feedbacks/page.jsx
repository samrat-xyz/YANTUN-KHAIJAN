export const dynamic = 'force-dynamic'

import FeedbackCard from '@/components/cards/FeedbackCard'
import Link from 'next/link'
import React from 'react'

const getFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
    cache: 'no-store',
  })
  return res.json()
}

async function Feedbacks() {
  const feedbacks = await getFeedbacks()

  return (
    <div>
      <h1 className='text-4xl font-semibold my-6'>
        {feedbacks.length} Feed backs Found
      </h1>

      <Link href='/addfeedback'>
        <button className='btn my-3'>Add Feed Back</button>
      </Link>

      <div className='flex flex-col gap-3'>
        {feedbacks.map(feedback => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  )
}

export default Feedbacks
