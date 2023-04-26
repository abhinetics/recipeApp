import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Route,Routes} from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import {AnimatePresence } from 'framer-motion'
import {useLocation} from 'react-router-dom'
const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
   <Routes location={location} key={location.pathname} >
    <Route path="/" element={<Home/>}/>
    <Route path="/cuisine/:id" element={<Cuisine/>}/>
    <Route path= "/searched/:search" element={<Searched/>}/>
    <Route path= "/recipe/:name" element={<Recipe/>}/>
   </Routes>
    </AnimatePresence>
  )
}

export default Pages