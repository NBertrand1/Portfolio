import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ParticlesBackground from './components/ParticlesBackground'
import Testimonies from './components/Testimonies'

function App() {

  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen space-y-8">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Testimonies />
        <Footer />
      </div>
    </>
  )
}

export default App
