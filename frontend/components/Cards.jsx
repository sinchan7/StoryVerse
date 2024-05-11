import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4'>
      <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="books" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
     
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs{item.price}</div> 
      <div className="badge badge-outline hover:bg-blue-700 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
