import React from 'react';
import thivyanth from '../assets/thivyanth.jpg'; // ✅ Import image from assets folder

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi — I'm <span style={{ color: 'var(--accent)' }}>Thivyanth Baratvaj</span>
        </h1>
        <p className="hero-sub">
          Graphic Designer & Visual Storyteller. I craft brand identities, posters, digital campaigns,
          and UI assets that connect creativity with purpose. My work blends thoughtful design, color,
          and composition to create visuals that engage and inspire.
        </p>
        <a className="cta" href="#projects">
          View Projects
        </a>
      </div>

      <div className="hero-right">
        <div
          style={{
            width: 220,
            height: 220,
            background: '#f1f5ff',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={thivyanth} // ✅ image reference
            alt="Thivyanth Baratvaj"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  );
}
