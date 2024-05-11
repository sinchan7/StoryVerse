import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-9'></div>
    <h1 className='text-4xl font-semibold md:text-80x10 justify-center text-center'> Contact Us </h1>
    <div className='min-h-5'></div>
           <p className='text-xl justify-center text-center ml-5 mr-5' >
           Thank you for your interest in StoryVerse. We value your feedback, questions, and inquiries. Please feel free to reach out to us using the contact information below:</p>
           <div className='min-h-11'></div>
           <h3 className='text-2xl font-semibold md:text-80x10 justify-center text-center'> Email </h3>
           <div className='min-h-3'></div>
           <p className='text-lg justify-center text-center ml-5 mr-5' >Contact us at:ourstoryverse@gmail.com</p>
           <div className='min-h-11'></div>
           <h3 className='text-2xl font-semibold md:text-80x10 justify-center text-center'> Social Media </h3>
           <div className='min-h-3'></div>
           <p className='text-lg justify-center text-center ml-5 mr-5' >Facebook-MyStoryVerse</p>
           <p className='text-lg justify-center text-center ml-5 mr-5' >Instagram:StoryVerse</p>
           <div className='min-h-11'></div>
           <h3 className='text-2xl font-semibold md:text-80x10 justify-center text-center'> Feedback </h3>
           <div className='min-h-3'></div>
           <p className='text-lg justify-center text-center ml-5 mr-5' >We welcome your feedback and suggestions to improve our bookstore. Please feel free to share your thoughts with us via email or social media.</p>
           <p className='text-lg justify-center text-center ml-5 mr-5' >For inquiries about upcoming events, author signings, or book club meetings, please contact our events coordinator at ourstoryversegmail.com.</p>
           <Footer/>
    </>
  )
}

export default Contact