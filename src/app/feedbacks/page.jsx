import FeedbackCard from '@/components/cards/FeedbackCard'
import Link from 'next/link'
import React from 'react'


const getFeedbacks = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`)
  const data = await res.json()
  return data
}

async function Feedbacks() {
  const feedbacks = await getFeedbacks();
  console.log(feedbacks)
  return (
    <div>
      <h1 className='text-4xl font-semibold my-6'>{feedbacks.length} Feed backs Found</h1>
      <div>
       <Link href='/addfeedback'> <button className='btn my-3'>Add Feed Back</button></Link>
      </div>
      <div className='flex flex-col gap-3'>
      {
        feedbacks.map(feedback =><FeedbackCard feedback={feedback} key={feedback._id}></FeedbackCard>)
      }
    </div>
    </div>
  )
}

export default Feedbacks
