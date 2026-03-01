import React, { useState, useEffect, useRef } from 'react';
import { Code, Briefcase, Award, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

function AnamorphicPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      overflowX: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    heroGradient: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #2a2a2a 100%)'
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '0 20px'
    },
    mainTitle: {
      fontSize: '6rem',
      fontWeight: 'bold',
      letterSpacing: '-0.05em',
      textShadow: '0 0 80px rgba(255,255,255,0.5)',
      marginBottom: '20px',
      transition: 'transform 0.3s'
    },
    subtitle: {
      fontSize: '1.5rem',
      letterSpacing: '0.3em',
      color: '#999',
      fontWeight: '300'
    },
    socialIcons: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center',
      marginTop: '40px'
    },
    iconLink: {
      padding: '12px',
      border: '1px solid white',
      transition: 'all 0.3s',
      cursor: 'pointer',
      display: 'inline-block'
    },
    section: {
      padding: '128px 32px',
      position: 'relative'
    },
    sectionDark: {
      padding: '128px 32px',
      backgroundColor: '#0a0a0a',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '64px',
      letterSpacing: '-0.02em'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    experienceItem: {
      borderLeft: '2px solid white',
      paddingLeft: '32px',
      transition: 'all 0.3s',
      marginBottom: '48px'
    },
    projectCard: {
      border: '1px solid white',
      padding: '32px',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    footer: {
      padding: '48px 32px',
      borderTop: '1px solid #333',
      textAlign: 'center',
      color: '#666'
    }
  };

  return (
    <div ref={containerRef} style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroGradient}></div>
        <div style={styles.heroContent}>
          <div style={styles.mainTitle}>
            ARPITA KHOT
          </div>
          <div style={styles.subtitle}>
            SOFTWARE ENGINEER
          </div>
          <div style={styles.socialIcons}>
            <a href="https://github.com/arpikhot" target="_blank" rel="noopener noreferrer" 
               style={styles.iconLink}
               onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'black';}}
               onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/arpita-khot-185" target="_blank" rel="noopener noreferrer" 
               style={styles.iconLink}
               onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'black';}}
               onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:khotarpita02@gmail.com" 
               style={styles.iconLink}
               onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'black';}}
               onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>ABOUT</h2>
          <div style={styles.grid}>
            <div>
              <p style={{fontSize: '1.25rem', color: '#ccc', lineHeight: '1.8', marginBottom: '24px'}}>
                Graduate student pursuing Master of Science in Computer Science at Syracuse University, 
                with a strong foundation in AI/ML and full-stack development. Bachelor of Engineering in 
                Electronics and Computer Science with Honours in Artificial Intelligence and Machine Learning 
                from Mumbai University.
              </p>
              <p style={{fontSize: '1.25rem', color: '#ccc', lineHeight: '1.8'}}>
                Experienced in building scalable applications, from Android mobile apps to AI-powered search 
                engines, with expertise in machine learning, natural language processing, and modern web technologies.
              </p>
            </div>
            <div style={{borderLeft: '4px solid white', paddingLeft: '32px'}}>
              <div style={{color: '#999', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '16px'}}>
                Core Competencies
              </div>
              <div style={{fontSize: '1.125rem', marginBottom: '8px'}}>Python, Java, C++, React, Node.js</div>
              <div style={{fontSize: '1.125rem', marginBottom: '8px'}}>Machine Learning, NLP, TensorFlow</div>
              <div style={{fontSize: '1.125rem', marginBottom: '8px'}}>Android Development, Full-Stack</div>
              <div style={{fontSize: '1.125rem'}}>SQL, Firebase, RESTful APIs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.sectionDark}>
        <div style={styles.container}>
          <h2 style={{...styles.heading, display: 'flex', alignItems: 'center', gap: '16px'}}>
            <Briefcase size={48} /> EXPERIENCE
          </h2>
          
          <div style={styles.experienceItem}>
            <div style={{fontSize: '0.875rem', color: '#999', textTransform: 'uppercase', marginBottom: '8px'}}>
              May 2024 - July 2024
            </div>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px'}}>Android Development Intern</h3>
            <div style={{fontSize: '1.25rem', color: '#999', marginBottom: '16px'}}>JustJobsHR, Mumbai</div>
            <ul style={{color: '#ccc', lineHeight: '1.8'}}>
              <li>• Developed JustJobsHR Android app for job search portal with intuitive and responsive UI</li>
              <li>• Designed user-friendly UI components improving navigation and user experience</li>
              <li>• Collaborated on backend integration with SQL for seamless data storage</li>
            </ul>
          </div>

          <div style={styles.experienceItem}>
            <div style={{fontSize: '0.875rem', color: '#999', textTransform: 'uppercase', marginBottom: '8px'}}>
              December 2023 - May 2024
            </div>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px'}}>AI & Machine Learning Intern</h3>
            <div style={{fontSize: '1.25rem', color: '#999', marginBottom: '16px'}}>Lawyantra, Mumbai</div>
            <ul style={{color: '#ccc', lineHeight: '1.8'}}>
              <li>• Created and deployed legal search engine using Python, ML, and LLMs</li>
              <li>• Applied generative AI and prompt engineering to enhance search accuracy</li>
              <li>• Performed data analysis to refine algorithms</li>
            </ul>
          </div>

          <div style={styles.experienceItem}>
            <div style={{fontSize: '0.875rem', color: '#999', textTransform: 'uppercase', marginBottom: '8px'}}>
              August 2021 - May 2023
            </div>
            <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px'}}>Data Acquisition System Head</h3>
            <div style={{fontSize: '1.25rem', color: '#999', marginBottom: '16px'}}>Team Vaayushastra, Mumbai</div>
            <ul style={{color: '#ccc', lineHeight: '1.8'}}>
              <li>• Led design of high-performance data acquisition systems</li>
              <li>• Directed media and sponsorship efforts, securing key partnerships</li>
              <li>• Collaborated with cross-functional teams to optimize data flow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <div style={{...styles.container, textAlign: 'center'}}>
          <h2 style={{fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '32px'}}>
            LET'S CONNECT
          </h2>
          <p style={{fontSize: '1.5rem', color: '#999', marginBottom: '48px'}}>
            Currently pursuing MS in Computer Science at Syracuse University<br/>
            Open to internships and collaborative opportunities
          </p>
          <a href="mailto:khotarpita02@gmail.com" 
             style={{
               fontSize: '1.5rem',
               border: '2px solid white',
               padding: '24px 48px',
               display: 'inline-block',
               transition: 'all 0.3s',
               textDecoration: 'none',
               color: 'white'
             }}
             onMouseOver={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'black';}}
             onMouseOut={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
            khotarpita02@gmail.com
          </a>
          <div style={{color: '#999', marginTop: '24px'}}>Syracuse, NY | (315) 746-1158</div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Arpita Khot. Designed with precision and passion.</p>
      </footer>
    </div>
  );
}

export default AnamorphicPortfolio;