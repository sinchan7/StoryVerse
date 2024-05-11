import React from 'react'
import Home from '../home/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
import Bestsellers from '../components/Bestsellers'
import Signup from '../components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import About from '../components/About'
import Contact from '../components/Contact'


function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    {/*<Home/>
    <Bestsellers/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bestsellers" element={authUser?<Bestsellers/>:<Navigate to="/signup"/>} />
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Toaster />
    </>
 )
}

export default App