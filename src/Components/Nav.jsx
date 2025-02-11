import React, { useState } from 'react'

const Nav = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    frontend: {
      name: 'Frontend Development',
      courses: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular']
    },
    backend: {
      name: 'Backend Development',
      courses: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby']
    },
    database: {
      name: 'Database',
      courses: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    tools: {
      name: 'Development Tools',
      courses: ['Git', 'Docker', 'AWS', 'VS Code', 'Terminal']
    }
  };

  return (
    <div className="Nav">
      <h2>Learning Paths</h2>
      <div className="nav-categories">
        {Object.keys(categories).map((category) => (
          <div key={category} className="category-section">
            <button 
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
            >
              {categories[category].name}
            </button>
            
            {activeCategory === category && (
              <div className="course-links">
                {categories[category].courses.map((course) => (
                  <a key={course} href={`#${course.toLowerCase()}`} className="course-link">
                    {course}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Nav
