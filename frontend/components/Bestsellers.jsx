import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'


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
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div className='mt--20 items-center justify-center text-center'></div>
      <div>
        <h1 className='text-20x10 font-semibold md:text-80x10'>Delighted to Have you here!</h1>
        <p className=''>
        A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
        </p>
        <button className='bg-blue-500 text-white rounded-md px-5 py-1.5'>
          Back
        </button>
        <div className='mt-12 grid-cols-1 md:grid-cols-4'>
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
            

          }
        </div>

      </div>

        
    </div>
    </>
  )
}

export default Bestsellers