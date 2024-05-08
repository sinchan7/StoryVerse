import React from 'react'
import Home from '../home/Home'
import {Route,Routes} from 'react-router-dom'
import Bestsellers from '../components/Bestsellers'
import Signup from '../components/Signup'


function App() {
  return (
    <>
    {/*<Home/>
    <Bestsellers/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bestsellers" element={<Bestsellers/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </>
 )
}

export default App