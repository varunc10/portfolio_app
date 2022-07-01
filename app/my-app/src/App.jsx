import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Courses from './components/Courses/Courses'
import Testimonials from './components/Testimonials/Testimonials'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Courses />
      <Testimonials />
      <Socials />
      <Projects />
      <Footer />
    </>
  )
}

export default App