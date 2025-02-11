import React from 'react'
import Art from '../assets/art.jpg'

const Article = () => {
  return (
    <div className="Article">
      <div className="featured-image">
        <img 
          src={Art} 
          alt="Development Journey" 
          className="main-image"
        />
        <div className="content-wrapper">
          <div className="article-header">
            <h1>Start Your Development Journey</h1>
            <p>Choose your path and begin learning today</p>
          </div>
          <div className="image-overlay">
            <h2>Full Stack Development Path</h2>
            <p>Master both frontend and backend technologies</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
