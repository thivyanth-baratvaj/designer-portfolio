import React from 'react'

export default function ProjectModal({project, onClose}){
  if(!project) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} style={{float:'right',border:'none',background:'transparent',fontSize:18}}>✕</button>
        <h3>{project.title}</h3>
        <p style={{color:'var(--muted)'}}>{project.description}</p>
        <div style={{marginTop:12}}>
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  )
}
