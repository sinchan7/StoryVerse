import React from 'react'
import Home from '../home/Home'
import Bestsellers from '../components/Bestsellers'
import {Route,Routes} from "react-dom"

function App() {
  return (
    <>
    {/*<Home/>
    <Bestsellers/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bestsellers" element={<Bestsellers/>}/>
    </Routes>
    </>
 )
}

export default App