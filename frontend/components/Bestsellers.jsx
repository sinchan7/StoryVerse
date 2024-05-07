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
  },[])
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'></div>
      <div>
        <h1 className='text-2x1 font-semibold md:text-8x1'>Delighted to Have you here!</h1>
        <p className='mt-12'>
        A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
        </p>
        <button className='-mt-6 bg-pink-500'>
          back
        </button>
        <div>
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