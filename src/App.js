import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Services from './pages/Services'
import About from './pages/About'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage/>}/>
          <Route path='/services' exact element= {<Services/>}/>
          <Route path='/about' exact element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}
