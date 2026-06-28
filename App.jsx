import React from 'react';

export default function App() {
  return (
    <div className="portfolio-layout">
      
      {/* Left Sidebar Layout */}
      <aside className="sidebar">
        <div className="profile-info">
          <h1>Teena Choudhary</h1>
          <h2>BCA Student & Aspiring Full Stack Developer</h2>
          <p>I build accessible, performant web experiences and love turning ideas into functional code.</p>
          
          <nav className="side-nav">
            <a href="#about">➔ About</a>
            <a href="#education">➔ Education</a>
          </nav>
        </div>

        <div className="sidebar-footer">
          <a href="mailto:teena@example.com" style={{textDecoration: 'none', fontSize: '1.2rem'}}>✉️</a>
          <a href="#" style={{textDecoration: 'none', fontSize: '1.2rem'}}>💼</a>
          <a href="#" style={{textDecoration: 'none', fontSize: '1.2rem'}}>💻</a>
        </div>
      </aside>

      {/* Right Content Stream */}
      <main className="main-content">
        
        {/* About Section */} 
        <section id="about">
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            When I'm not coding, you'll find me exploring new tech concepts, analyzing system logic, and building functional projects. I believe deep structural learning combined with immediate hands-on building is the fastest route to software mastery.
          </p>
        </section>

        {/* Education History Section */}
        <section id="education">
          <div className="timeline-item">
            <div className="timeline-year">2023 — 2024</div>
            <div className="timeline-card">
              <h3>First Year — Foundation</h3>
              <h4>Bachelor of Computer Applications</h4>
              <p>Built a strong foundation in computer science fundamentals. Studied Operating Systems concepts including process management, memory allocation, and file systems. Learned the basics of C++ programming including syntax, control structures, and object-oriented principles AGPA 7.65.</p>
              <div className="badge-container">
                <span className="badge-tech">C++</span>
                <span className="badge-tech">Operating Systems</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2024 — 2025</div>
            <div className="timeline-card">
              <h3>Second Year — Core Development</h3>
              <h4>Bachelor of Computer Applications</h4>
              <p>Dived into application development with Java and database management with SQL. Learned object-oriented programming in depth, relational database design, query optimization, and how to securely wire systems together AGPA 8.65.</p>
              <div className="badge-container">
                <span className="badge-tech">Java</span>
                <span className="badge-tech">SQL</span>
                <span className="badge-tech">DBMS</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2025 — PRESENT</div>
            <div className="timeline-card">
              <h3>Current — Full Stack Journey</h3>
              <h4>Bachelor of Computer Applications</h4>
              <p>Currently mastering modern web development using the MERN stack. Building full-stack dashboard applications with MongoDB for flexible databases, Express and Node.js for robust backends, and React for fluid, interactive frontend experiences. </p>
              <div className="badge-container">
                <span className="badge-tech" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>MongoDB</span>
                <span className="badge-tech" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>Express</span>
                <span className="badge-tech" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>React</span>
                <span className="badge-tech" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>Node.js</span>
              </div>
            </div>
          </div>
        </section>


{/*skills section */}
 <section id="skills" style={{paddingBottom: '5rem'}}>
          <h2 style={{color: '#f8fafc', fontSize: '1.5rem', marginBottom: '2rem'}}>Technical Expertise</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px'}}>
            {[
              { name: 'MERN Stack (React, Node.js, Express, MongoDB)', level: '50%' },
              { name: 'Relational Databases & Structured SQL', level: '70%' },
              { name: 'Java Programming (Core & JDBC Architecture)', level: '70%' },
              { name: 'C++ & Object-Oriented Principles', level: '75%' },
              { name: 'Operating Systems & System Architecture', level: '70%' }
            ].map((skill, i) => (
              <div key={i}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500'}}>
                  <span style={{color: '#cbd5e1'}}>{skill.name}</span>
                  <span style={{color: '#38bdf8'}}>{skill.level}</span>
                </div>
                <div style={{height: '6px', background: '#1e293b', borderRadius: '9999px', overflow: 'hidden'}}>
                  <div style={{height: '100%', background: '#38bdf8', width: skill.level, borderRadius: '9999px'}}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{paddingBottom: '5rem'}}>
          <h2 style={{color: '#f8fafc', fontSize: '1.5rem', marginBottom: '2rem'}}>Selected Projects</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            
            <div style={{background: '#111827', padding: '2rem', borderRadius: '12px', border: '1px solid #1e293b'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem'}}>
                <h3 style={{color: '#f8fafc', fontSize: '1.2rem'}}>ClinikX Management System</h3>
                <span style={{fontSize: '0.8rem', color: '#64748b'}}>Featured Project</span>
              </div>
              <p style={{fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.25rem'}}>
                A comprehensive full-stack administrative dashboard engineered to coordinate healthcare operations. Tracks medical logs, logs user appointments, and optimizes administrative schedules smoothly across multiple branches.
              </p>
              <div className="badge-container">
                <span className="badge-tech" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8'}}>MongoDB</span>
                <span className="badge-tech" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8'}}>Express</span>
                <span className="badge-tech" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8'}}>React</span>
                <span className="badge-tech" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8'}}>Node.js</span>
              </div>
            </div>

            <div style={{background: '#111827', padding: '2rem', borderRadius: '12px', border: '1px solid #1e293b'}}>
              <h3 style={{color: '#f8fafc', fontSize: '1.2rem', marginBottom: '0.5rem'}}> Portfolio  website </h3>
              <p style={{fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.25rem'}}>
                This portfolio website showcases my educational background, personal profile, projects, and skills, providing a comprehensive overview of my qualifications and experience.
              </p>
              <div className="badge-container">
                <span className="badge-tech">React.js</span>
                <span className="badge-tech">HTML</span>
                <span className="badge-tech">css</span>
              </div>
            </div>

          </div>
        </section>

         




      </main>
    </div>
  );
}