import React from 'react'
import Home from '../home/Home'
import Bestsellers from '../components/Bestsellers'
import {Route,Routes} from 'react-router-dom'
import Bestseller from './bestsellers/Bestseller'

function App() {
  return (
    <>
    {/*<Home/>
    <Bestsellers/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bestsellers" element={<Bestseller/>}/>
    </Routes>
    </>
 )
}

export default App