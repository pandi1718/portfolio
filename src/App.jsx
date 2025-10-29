import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from'./pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SkillBar from './pages/SkillBar'

const App = () => {
  return (
    <BrowserRouter basename='/portfolio'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/skillbar' element={<SkillBar />} />
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App