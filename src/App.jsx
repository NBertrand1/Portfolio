import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'


function App() {

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
