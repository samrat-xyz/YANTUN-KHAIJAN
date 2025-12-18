"use client"
import FeedbackForm from '@/components/cards/FeedbackForm'
import React from 'react'

function AddFeedBack() {
  return (
    <div className='space-y-6 px-8'>
        <h1 className='text-center text-4xl font-semibold'>Add Your Feed back</h1>
      <FeedbackForm></FeedbackForm>
    </div>
  )
}

export default AddFeedBack
