import React from 'react';

interface CVData {
  personal: {
    name: string;
    title: string;
    avatar: string;
    email: string;
    phone: string;
    location: string;
    website: string;
  };
  summary: string;
  skills: Array<{ name: string; level: number }>;
  social: Array<{ platform: string; url: string; icon: string }>;
  experience: Array<{
    position: string;
    company: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    period: string;
    details: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
  certificates: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

interface CVTemplateProps {
  data: CVData;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({ data }) => {
  return (
    <div className="cv-container" style={{
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      backgroundColor: '#fff',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      display: 'flex'
    }}>
      {/* Left Sidebar */}
      <div className="cv-sidebar" style={{
        width: '30%',
        backgroundColor: '#4C6EF5',
        color: 'white',
        padding: '40px 30px'
      }}>
        {/* Avatar */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img
            src={data.personal.avatar}
            alt={data.personal.name}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '5px solid white',
              objectFit: 'cover',
              marginBottom: '20px'
            }}
          />
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            lineHeight: '1.2'
          }}>{data.personal.name}</h1>
          <p style={{
            fontSize: '14px',
            opacity: '0.9',
            margin: 0,
            fontWeight: '400'
          }}>{data.personal.title}</p>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '15px',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '8px'
          }}>CONTACT</h3>
          <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
            <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📧</span> {data.personal.email}
            </p>
            <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📱</span> {data.personal.phone}
            </p>
            <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📍</span> {data.personal.location}
            </p>
            <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🌐</span> {data.personal.website}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '15px',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '8px'
          }}>SKILLS</h3>
          <div>
            {data.skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  marginBottom: '5px'
                }}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div style={{
                  height: '6px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: '10px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '15px',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '8px'
          }}>SOCIAL</h3>
          <div style={{ fontSize: '12px' }}>
            {data.social.map((social, index) => (
              <p key={index} style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{social.icon}</span> {social.platform}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="cv-content" style={{
        width: '70%',
        padding: '40px',
        backgroundColor: '#F8F9FA'
      }}>
        {/* Summary */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#4C6EF5',
            marginBottom: '15px',
            borderBottom: '3px solid #4C6EF5',
            paddingBottom: '8px'
          }}>PROFESSIONAL SUMMARY</h2>
          <p style={{
            fontSize: '13px',
            lineHeight: '1.8',
            color: '#495057',
            margin: 0,
            textAlign: 'justify'
          }}>{data.summary}</p>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#4C6EF5',
            marginBottom: '15px',
            borderBottom: '3px solid #4C6EF5',
            paddingBottom: '8px'
          }}>WORK EXPERIENCE</h2>
          {data.experience.map((exp, index) => (
            <div key={index} style={{
              marginBottom: '25px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#212529',
                margin: '0 0 5px 0'
              }}>{exp.position}</h3>
              <p style={{
                fontSize: '13px',
                color: '#4C6EF5',
                fontWeight: '500',
                margin: '0 0 5px 0'
              }}>{exp.company}</p>
              <p style={{
                fontSize: '12px',
                color: '#868E96',
                margin: '0 0 12px 0'
              }}>{exp.period}</p>
              <ul style={{
                fontSize: '12px',
                color: '#495057',
                lineHeight: '1.7',
                margin: 0,
                paddingLeft: '20px'
              }}>
                {exp.description.map((desc, i) => (
                  <li key={i} style={{ marginBottom: '5px' }}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#4C6EF5',
            marginBottom: '15px',
            borderBottom: '3px solid #4C6EF5',
            paddingBottom: '8px'
          }}>EDUCATION</h2>
          {data.education.map((edu, index) => (
            <div key={index} style={{
              marginBottom: '20px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#212529',
                margin: '0 0 5px 0'
              }}>{edu.degree}</h3>
              <p style={{
                fontSize: '13px',
                color: '#4C6EF5',
                fontWeight: '500',
                margin: '0 0 5px 0'
              }}>{edu.school}</p>
              <p style={{
                fontSize: '12px',
                color: '#868E96',
                margin: '0 0 8px 0'
              }}>{edu.period}</p>
              <p style={{
                fontSize: '12px',
                color: '#495057',
                margin: 0
              }}>{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#4C6EF5',
            marginBottom: '15px',
            borderBottom: '3px solid #4C6EF5',
            paddingBottom: '8px'
          }}>PROJECTS</h2>
          {data.projects.map((project, index) => (
            <div key={index} style={{
              marginBottom: '20px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#212529',
                margin: '0 0 10px 0'
              }}>{project.name}</h3>
              <p style={{
                fontSize: '12px',
                color: '#495057',
                margin: '0 0 10px 0',
                lineHeight: '1.6'
              }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: '11px',
                    backgroundColor: '#EDF2FF',
                    color: '#4C6EF5',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontWeight: '500'
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#4C6EF5',
            marginBottom: '15px',
            borderBottom: '3px solid #4C6EF5',
            paddingBottom: '8px'
          }}>CERTIFICATES</h2>
          {data.certificates.map((cert, index) => (
            <div key={index} style={{
              marginBottom: '15px',
              backgroundColor: 'white',
              padding: '15px 20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#212529',
                  margin: '0 0 3px 0'
                }}>{cert.name}</h3>
                <p style={{
                  fontSize: '12px',
                  color: '#4C6EF5',
                  margin: 0
                }}>{cert.issuer}</p>
              </div>
              <span style={{
                fontSize: '11px',
                color: '#868E96',
                fontWeight: '500'
              }}>{cert.date}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

// Sample data for demo
export const sampleCVData: CVData = {
  personal: {
    name: 'Nguyễn Văn A',
    title: 'Full Stack Developer',
    avatar: 'https://via.placeholder.com/150',
    email: 'nguyenvana@email.com',
    phone: '+84 123 456 789',
    location: 'Ho Chi Minh City, Vietnam',
    website: 'www.portfolio.com'
  },
  summary: 'Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications using modern technologies. Passionate about creating elegant solutions to complex problems and continuously learning new technologies. Strong background in React, Node.js, and cloud services.',
  skills: [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'MongoDB/SQL', level: 85 },
    { name: 'AWS/Cloud', level: 80 },
    { name: 'Docker/K8s', level: 75 }
  ],
  social: [
    { platform: 'LinkedIn', url: 'linkedin.com/in/yourname', icon: '💼' },
    { platform: 'GitHub', url: 'github.com/yourname', icon: '💻' },
    { platform: 'Twitter', url: 'twitter.com/yourname', icon: '🐦' }
  ],
  experience: [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: 'Jan 2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'Startup Solutions',
      period: 'Jun 2019 - Dec 2021',
      description: [
        'Built responsive web applications using React and Node.js',
        'Integrated third-party APIs and payment gateways',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Reduced bug reports by 35% through comprehensive testing'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      details: 'GPA: 3.8/4.0 - Specialized in Software Engineering'
    }
  ],
  projects: [
    {
      name: 'E-Commerce Platform',
      description: 'Built a full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
    },
    {
      name: 'Learning Management System',
      description: 'Developed an LMS with video streaming, interactive quizzes, progress tracking, and certificate generation.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'WebRTC']
    }
  ],
  certificates: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2022'
    }
  ]
};
