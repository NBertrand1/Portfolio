import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'));
const Testimonies = lazy(() => import('./components/Testimonies'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

  return (
    <>
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <div className="min-h-screen space-y-8">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="flex justify-center items-center py-20"><span className="loading loading-spinner loading-lg"></span></div>}>
          <Skills />
          <Projects />
          <Testimonies />
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App
