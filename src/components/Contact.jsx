import React from 'react'

export default function Contact(){
  // If you want to use Formspree, replace the action with your Formspree endpoint
  const formspreeAction = "" // e.g. "https://formspree.io/f/yourformid"

  return (
    <section id="contact" className="card contact">
      <h2>Contact</h2>
      <p style={{color:'var(--muted)'}}>Email me at <a href="mailto:thivyanthbaratvaj@gmail.com">thivyanthbaratvaj@gmail.com</a> or connect on <a href="www.linkedin.com/in/thivyanth-baratvaj" target="_blank" rel="noreferrer">LinkedIn</a>.</p>

      <div style={{marginTop:10}}>
        <h4>Send a quick message</h4>
        { formspreeAction ? (
          <form action={formspreeAction} method="POST">
            <input name="name" placeholder="Thivyanth Baratvaj" required style={{padding:8,width:'100%',marginBottom:8}} />
            <input name="email" placeholder="Email" required style={{padding:8,width:'100%',marginBottom:8}} />
            <textarea name="message" placeholder="Message" required style={{padding:8,width:'100%',height:100,marginBottom:8}} />
            <button type="submit" className="cta">Send</button>
          </form>
        ) : (
          <p style={{color:'var(--muted)'}}>Form disabled — use mailto or set up Formspree (see README)</p>
        )}
      </div>
    </section>
  )
}
