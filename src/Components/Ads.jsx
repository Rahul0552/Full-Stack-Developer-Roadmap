import React from 'react'
// import ReactMaster from '../assets/ReactMasterclass.jpg'

const Ads = () => {
  return (
    <div className="Ads">
      <h3>Featured Courses</h3>
      <div className="ads-container">
        <div className="ad-item">
          <img src="./src/assets/ReactMasterclass.jpg" alt="React Course" />
          <p>React Masterclass</p>
        </div>
        <div className="ad-item">
          <img src="./src/assets/nodejs.jpg" alt="Node.js Course" />
          <p>Node.js Advanced</p>
        </div>
        <div className="ad-item">
          <img src="./src/assets/python.jpg" alt="Python Course" />
          <p>Python Full Course</p>
        </div>
      </div>
    </div>
  )
}

export default Ads
