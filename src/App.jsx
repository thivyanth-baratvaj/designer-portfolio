import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import projectsData from './data/projects'

function App() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <div>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects projects={projectsData} onOpen={(p)=>setModalProject(p)} />
        <Contact />
      </main>

      {modalProject && (
        <ProjectModal project={modalProject} onClose={()=>setModalProject(null)} />
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name — Graphic Designer</p>
      </footer>
    </div>
  )
}

export default App
