import React from 'react'
import Navbar from '../../components/Navbar'
import Bestsellers from '../../components/Bestsellers'
import Footer from '../../components/Footer'

function Bestseller() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'></div>
    <Bestsellers/>
    <Footer/>
    </>

    
  )
}

export default Bestseller