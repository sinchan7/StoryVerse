import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';




function Bestsellers() {
  const [book,setBook]=useState([])
  useEffect(() =>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[]);
  return (
    <>
    <Navbar/>
    <div className='min-h-12'></div>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div className='mt--20 items-center justify-center text-center'></div>
      <div>
        <h1 className='text-4xl font-semibold md:text-80x10 justify-center text-center'>Delighted to Have you <span className='text-blue-700'>Here!!!</span></h1>
        <div className='min-h-4'></div>
        <p className='text-lg justify-center text-center'>
        Welcome to StoryVerse! Dive into a world of imagination and knowledge with our vast collection of books catering to all ages and interests. Whether you seek adventure, romance, or academic enlightenment, we've got you covered. Explore our shelves and embark on a journey of discovery. Experience the joy of reading with us at our bookstore, your gateway to endless stories and ideas.
        </p>
        
        <div className='min-h-5'></div>
        <div class="flex justify-center">
        <Link to='/'>
        <button className='bg-blue-500 text-white rounded-md px-5 py-1.5 rounded items-center'>
          Back
        </button></Link></div>
        
        <div className='mr-2 -ml-7 mt-11 grid grid-cols-3 md-grid-cols-4 gap-16 '>
          {
            
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
              
            ))
            
            

          }
          
        </div>

      </div>

        
    </div>
    <Footer/>
    </>
  )
}
export default Bestsellers