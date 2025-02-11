import React from 'react'

const Footer = () => {
  return (
    <div className="Footer_pg">
      
      <div className="footer-content">
      {/* <div className="footer-bottom">
        <p>© 2024 Full Stack Developer Roadmap. All rights reserved.</p>
      </div> */}
        <div className="footer-section">
          <h3>Learning Paths</h3>
          <ul>
            <li><a href="#frontend">Frontend Development</a></li>
            <li><a href="#backend">Backend Development</a></li>
            {/* <li><a href="#database">Database</a></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            {/* <li><a href="#documentation">Documentation</a></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="#forum">Forum</a></li>
            <li><a href="#discord">Discord</a></li>
            {/* <li><a href="#github">GitHub</a></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Full Stack Development</h3>
          <ul>
            <li><a href="#forum">React Masterclass</a></li>
            <li><a href="#discord">Node.js Advanced</a></li>
          {/* <li><a href="#tools">Python Full Course</a></li> */}

          </ul>
        </div>
        {/* <div className="footer-section">
          <h3>Development Tools</h3>
          <ul>
          <li><a href="#tools">VS Code</a></li>
            <li><a href="#forum">Terminal</a></li>
            <li><a href="#discord">AWS Dev Tools</a></li>

          </ul>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>© 2024 Full Stack Developer Roadmap. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
