import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
    <Navbar/>
    <div className='min-h-9'>
    <h1 className='text-4xl font-semibold md:text-80x10 justify-center text-center'> About Us </h1>
    <div className='min-h-5'></div>
        <p className='text-lg justify-center text-center ml-5 mr-5' >
        Welcome to StoryVerse, where passion for literature meets the joy of reading. Our bookstore is more than just a place to purchase books; it's a community hub, a sanctuary for bookworms, and a haven for the curious mind.

Founded with a vision to inspire and enrich lives through the written word, Our Bookstore is committed to fostering a love for reading in all its forms. We believe that books have the power to educate, entertain, and enlighten, and we're dedicated to sharing that power with our community.

Our shelves are stocked with a carefully curated selection of books spanning various genres, from timeless classics to contemporary bestsellers, from thought-provoking non-fiction to heartwarming fiction. Whether you're searching for a gripping mystery, an inspiring memoir, or an insightful work of literature, you'll find it here at Our Bookstore.

But we're more than just a bookstore; we're a gathering place for book lovers to come together, share their passion, and celebrate the written word. Our knowledgeable staff are avid readers themselves, always ready to offer personalized recommendations, host engaging events, and facilitate thought-provoking discussions.

From author signings and book clubs to literary workshops and community events, there's always something exciting happening at Our Bookstore. Whether you're a lifelong reader or just beginning your literary journey, we invite you to join us in exploring the magic of books and experiencing the endless possibilities they offer. Welcome to Our Bookstore – where every page is a new adventure waiting to be discovered. 
            
        </p>
    </div>
    <Footer/>
    </>
  )
}

export default About