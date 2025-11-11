import React from 'react'

export default function Projects({projects, onOpen}){
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <div key={p.id} className="project" onClick={()=>onOpen(p)}>
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>{p.short}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
