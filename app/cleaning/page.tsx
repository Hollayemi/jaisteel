'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const services = [
    {
      title: 'Office Cleaning',
      description: 'Professional workspace sanitization that maintains productivity and creates inspiring work environments',
      icon: '🏢',
      features: ['Daily maintenance', 'Deep sanitization', 'After-hours service']
    },
    {
      title: 'House Cleaning',
      description: 'Transform your home into a pristine sanctuary with meticulous attention to every detail',
      icon: '🏠',
      features: ['Custom schedules', 'Eco-friendly products', 'Move-in/move-out']
    },
    {
      title: 'Yacht Cleaning',
      description: 'Marine-grade cleaning excellence for luxury vessels, preserving elegance on the open water',
      icon: '⛵',
      features: ['Hull to deck care', 'Marine-safe products', 'Interior detailing']
    },
    {
      title: 'Private Jet Cleaning',
      description: 'Aviation-certified cleaning services that maintain the luxury your aircraft deserves',
      icon: '✈️',
      features: ['Pre-flight ready', 'Certified products', 'Leather & upholstery']
    }
  ];

  const expertise = [
    'Every nook and cranny thoroughly inspected',
    'Crystal-clear window perfection',
    'Floor scraping and restoration',
    'Deep rug extraction and cleaning',
    'Executive laundry services',
    'Signature fragrance finishing'
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --deep-navy: #0a1628;
          --rich-gold: #d4af37;
          --soft-cream: #f8f6f1;
          --accent-teal: #2c5f6f;
          --light-gold: #e8d4a0;
          --shadow-lg: 0 20px 60px rgba(10, 22, 40, 0.15);
        }

        body {
          font-family: 'Montserrat', sans-serif;
          background: var(--soft-cream);
          color: var(--deep-navy);
          overflow-x: hidden;
        }

        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          z-index: 9999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-scale {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>

      <div className="grain-overlay" />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 22, 40, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '32px',
            fontWeight: 600,
            color: scrolled ? 'var(--rich-gold)' : '#fff',
            letterSpacing: '2px',
            transition: 'color 0.3s ease',
          }}>
            PRESTIGE CLEAN
          </div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Services', 'Expertise', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: scrolled ? 'var(--soft-cream)' : '#fff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards ${i * 0.1 + 0.3}s`,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--rich-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? 'var(--soft-cream)' : '#fff';
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--deep-navy) 0%, var(--accent-teal) 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(232, 212, 160, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            color: '#fff',
            marginBottom: '30px',
            lineHeight: 1.1,
            letterSpacing: '3px',
            opacity: 0,
            animation: 'fadeInUp 1s ease forwards 0.2s',
          }}>
            Executive Cleaning
            <br />
            <span style={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--rich-gold) 0%, var(--light-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Refined to Perfection
            </span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto 50px',
            lineHeight: 1.8,
            fontWeight: 300,
            opacity: 0,
            animation: 'fadeInUp 1s ease forwards 0.4s',
          }}>
            Where meticulous craftsmanship meets luxury. Every surface restored, 
            every space transformed, every detail perfected with our signature fragrance finish.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeInUp 1s ease forwards 0.6s',
          }}>
            <a
              href="#quote"
              style={{
                display: 'inline-block',
                padding: '18px 45px',
                background: 'linear-gradient(135deg, var(--rich-gold) 0%, #c19a2e 100%)',
                color: 'var(--deep-navy)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '1.5px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
              }}
            >
              REQUEST A QUOTE
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-block',
                padding: '18px 45px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '1.5px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
          animation: 'fadeInUp 1s ease forwards 1s',
        }}>
          <div style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '20px',
            position: 'relative',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              background: 'var(--rich-gold)',
              borderRadius: '50%',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'float 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '120px 40px',
        background: 'var(--soft-cream)',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: 'var(--deep-navy)',
              marginBottom: '20px',
              letterSpacing: '2px',
            }}>
              Our Premium Services
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--rich-gold), transparent)',
              margin: '0 auto',
            }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{
                  background: '#fff',
                  padding: '50px 40px',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-lg)',
                  transition: 'all 0.4s ease',
                  opacity: 0,
                  animation: `scaleIn 0.6s ease forwards ${index * 0.15}s`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(10, 22, 40, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--rich-gold), var(--accent-teal))',
                }} />
                
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                }}>
                  {service.icon}
                </div>
                
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '28px',
                  fontWeight: 600,
                  color: 'var(--deep-navy)',
                  marginBottom: '15px',
                  letterSpacing: '1px',
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: 1.8,
                  marginBottom: '25px',
                }}>
                  {service.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                }}>
                  {service.features.map((feature) => (
                    <li key={feature} style={{
                      fontSize: '14px',
                      color: 'var(--accent-teal)',
                      marginBottom: '10px',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--rich-gold)',
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" style={{
        padding: '120px 40px',
        background: 'linear-gradient(180deg, var(--deep-navy) 0%, #0d1d35 100%)',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '20px',
              letterSpacing: '2px',
            }}>
              The Prestige Standard
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--rich-gold), transparent)',
              margin: '0 auto 30px',
            }} />
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Our executive cleaning service goes beyond surface-level cleaning. 
              We deliver perfection in every detail, leaving your space immaculate with our signature fragrance.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {expertise.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '40px 30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--rich-gold)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  color: 'var(--rich-gold)',
                  marginBottom: '15px',
                  fontWeight: 700,
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#fff',
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Quote Section */}
      <section id="quote" style={{
        padding: '120px 40px',
        background: 'var(--soft-cream)',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: 'var(--deep-navy)',
              marginBottom: '20px',
              letterSpacing: '2px',
            }}>
              Request Your Quote
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--rich-gold), transparent)',
              margin: '0 auto 30px',
            }} />
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Experience the difference of executive cleaning. Share your requirements 
              and we'll create a customized solution for your space.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            padding: '60px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '30px',
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--deep-navy)',
                  marginBottom: '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--deep-navy)',
                  marginBottom: '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '30px',
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--deep-navy)',
                  marginBottom: '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--deep-navy)',
                  marginBottom: '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  Service Type *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Montserrat, sans-serif',
                    background: '#fff',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="office">Office Cleaning</option>
                  <option value="house">House Cleaning</option>
                  <option value="yacht">Yacht Cleaning</option>
                  <option value="jet">Private Jet Cleaning</option>
                  <option value="laundry">Executive Laundry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--deep-navy)',
                marginBottom: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                Additional Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  fontSize: '16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Montserrat, sans-serif',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rich-gold)';
                  e.currentTarget.style.outline = 'none';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
                placeholder="Tell us about your space, preferred schedule, or any special requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '20px',
                background: isSubmitting 
                  ? '#ccc' 
                  : 'linear-gradient(135deg, var(--rich-gold) 0%, #c19a2e 100%)',
                color: 'var(--deep-navy)',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '2px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
              }}
            >
              {isSubmitting ? 'SUBMITTING...' : 'REQUEST YOUR QUOTE'}
            </button>

            {submitted && (
              <div style={{
                marginTop: '20px',
                padding: '20px',
                background: 'rgba(76, 175, 80, 0.1)',
                border: '2px solid #4caf50',
                borderRadius: '4px',
                textAlign: 'center',
                color: '#2e7d32',
                fontWeight: 600,
                animation: 'scaleIn 0.3s ease forwards',
              }}>
                Thank you! We'll contact you within 24 hours.
              </div>
            )}
          </form>

          {/* Quick Contact */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '20px',
            }}>
              Or reach us directly
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}>
              <a
                href="tel:+1234567890"
                style={{
                  fontSize: '18px',
                  color: 'var(--accent-teal)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--rich-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-teal)'}
              >
                📞 +1 (234) 567-890
              </a>
              <a
                href="mailto:hello@prestigeclean.com"
                style={{
                  fontSize: '18px',
                  color: 'var(--accent-teal)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--rich-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-teal)'}
              >
                ✉️ hello@prestigeclean.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--deep-navy)',
        padding: '60px 40px 30px',
        color: '#fff',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '36px',
            fontWeight: 600,
            color: 'var(--rich-gold)',
            marginBottom: '20px',
            letterSpacing: '2px',
          }}>
            PRESTIGE CLEAN
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px',
          }}>
            Executive cleaning services for discerning clients. 
            Every surface perfected, every space transformed.
          </p>
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '30px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.5)',
          }}>
            © 2025 Prestige Clean. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}