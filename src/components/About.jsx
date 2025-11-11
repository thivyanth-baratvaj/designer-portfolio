import React from 'react'

export default function About(){
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      <p style={{marginTop:8,color:'var(--muted)'}}></p>
      <div style={{marginTop:12}}>
        <h4>Skills</h4>Passionate about branding, digital campaigns, and UI design  skilled in Photoshop, Illustrator, Figma, After Effects, Premiere Pro, Blender, Canva, and Lightroom.
        <div className="skills">
          <span className="skill">Adobe Photoshop</span>
          <span className="skill">Adobe Illustrator</span>
          <span className="skill">After Effects</span>
          <span className="skill">Figma</span>
          <span className="skill">Canva</span>
          <span className="skill">HTML/CSS</span>
        </div>
      </div>
    </section>
  )
}
