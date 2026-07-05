import React from 'react'
import mainPhoto from '../assets/mainphoto.JPG'
import './Coder.css'

const Coder = () => {
  return (
    <div className="coder-container">
      {/* Left Column: Premium Profile Frame */}
      <div className="left-content">
        <div className="photo-wrapper">
          <img src={mainPhoto} alt="Devani Mayur - Full Stack Developer" className="profile-photo" />
        </div>
      </div>

      {/* Right Column: High-Impact Professional Copy */}
      <div className="right-content">
        <span className="badge">Available for Opportunity</span>
        <h1 className="hero-title">Devani Mayur</h1>
        <h2 className="hero-subtitle">Full Stack Web Developer</h2>
        
        <p className="bio-text">
          I craft robust, highly interactive user interfaces and scalable digital products. 
          With a strong foundation in modern JavaScript ecosystems, I specialize in transforming 
          complex requirements into elegant, pixel-perfect web experiences.
        </p>
        
        <div className="skills-showcase">
          <h3>Core Technical Arsenal</h3>
          <ul className="skills-list">
            <li><strong>Frontend Engineering:</strong> React.js, HTML5 Semantic Architecture, CSS3 / Sass</li>
            <li><strong>Ecosystem & Tools:</strong> Tailwind CSS, RESTful APIs, Git, Vite</li>
          </ul>
        </div>

        {/* Professional Call to Actions */}
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Coder