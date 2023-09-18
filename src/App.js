import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./index.css"
import { HomePage } from './component'
import Navbar from './component/Navbar'
import {Checkout,SearchResult,ProductPage} from './component'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path='/search' element={<SearchResult/>}/>
        <Route  path='/product/:id' element={<ProductPage/>}/>
        <Route  path='/checkout' element={<Checkout/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
