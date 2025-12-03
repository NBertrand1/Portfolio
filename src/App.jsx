import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
