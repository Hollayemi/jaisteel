'use client'

import { useState } from 'react'
import RequestQuoteModal from './components/RequestQuoteModal'
import Wrapper from './components/wrapper'
import { projectsData } from './data/projects'

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <Wrapper isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen}>
      <div className="min-h-screen bg-white pb-10">
       

        {/* Hero Section */}
        <section className="relative h-100 mb-16">
          <img src="/images/image3.jpg" alt="Hero Background" className="w-full absolute h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30 z-10 opacity-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)',
            }}
          >
            {/* Simulated welding sparks background */}
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(253, 185, 19, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(253, 185, 19, 0.3) 0%, transparent 40%)',
            }}></div>
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="flex justify-between items-center w-full">
              <div>
                <h1 className="text-7xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  OUR<br />SERVICES
                </h1>
              </div>
              
              <div className="bg-white/95 p-8 max-w-md">
                <p className="text-gray-700 text-sm leading-relaxed">
                  At <strong>JAI Steel Works & Management Ltd.</strong>, we specialize in providing top-tier steel construction, metal fabrication, and project-management services to meet the diverse needs of our clients. Our commitment to quality, safety, and precision ensures exceptional results for every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fabrication Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:-mr-10 bg-gray-100 pb-10">
              <div className="bg-primary-blue text-white p-6  mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>STRUCTURAL STEEL & CONSTRUCTION</h2>
                <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="space-y-8 px-15">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Design, Detailing and Fabrication:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    We design, detail and fabricate structural steel components to exact specifications for all types of construction projects.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Supply and Installation:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Supply and installation of beams, columns, girders, trusses, and steel frameworks for industrial, commercial and residential projects.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Construction of Buildings:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Construction of warehouses, industrial/commercial buildings, and pre-engineered steel structures with professional expertise.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Turnkey Steel-Construction Projects:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete turnkey steel-construction projects from design through to completion with on-site supervision, quality assurance/quality control.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-150 -ml-10">
              <img src="/images/image1.jpg" alt="Structural Steel Construction" className="w-full h-full absolute object-cover rounded-lg" />
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                {/* Steel construction image placeholder */}
                <div className="w-full h-full opacity-20 bg-linear-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏗️</div>
                    <div className="text-gray-600 text-lg font-bold">Structural Steel Construction</div>
                    <div className="text-gray-500 text-sm mt-2">Professional Engineering Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welding Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-150">
                <img src="/images/fabricator.jpg" alt="Hero Background" className="w-full absolute h-full object-cover" />
              <div className="absolute inset-0  rounded-lg overflow-hidden">
                {/* Welding operations image placeholder */}
                {/* <div className="w-full h-full bg-linear-to-br opacity-40 from-yellow-600 via-orange-600 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">⚡</div>
                    <div className="text-white text-lg font-bold">Metal Fabrication & Welding</div>
                    <div className="text-primary-yellow text-sm mt-2">Expert Craftsmanship</div>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <div className="bg-primary-blue text-white p-6 mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>METAL FABRICATION & WELDING</h2>
                <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Custom Fabrication of Metal Items:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Custom fabrication of gates, fences, railings, doors, metal frames, fixtures and fittings for all applications.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Sheet-Metal Fabrication:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Sheet-metal fabrication, cladding, metal panels, ducts, and enclosures for industrial and commercial use.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Welding Services:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Professional welding services for mild steel, stainless steel, aluminum — including mobile/on-site welding.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Bespoke Fabrication:</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Bespoke fabrication for industrial, commercial or residential clients with metal maintenance and repair services.
                  </p>
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold flex items-center text-primary-blue" style={{ fontFamily: 'var(--font-heading)' }}>
              OUR PROJECTS
              <svg className="w-8 h-8 ml-4 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </h2>
            
            <div className="flex space-x-2">
              <button className="border-2 border-primary-blue text-primary-blue p-2 hover:bg-primary-blue hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-primary-yellow text-primary-blue p-2 hover:bg-yellow-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project:any) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-gray-300 h-64 mb-4 overflow-hidden rounded-lg">
                  <div className={`w-full h-full bg-linear-to-br ${project.gradient} transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                    {/* <div className="text-center"> */}
                        {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" /> : "🏗️"}
                      {/* <span className="text-white text-lg font-bold">
                        {project.badge}
                      </span> */}
                    {/* </div> */}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  READ MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
    </div>
        </section>
      </div>
    </Wrapper>
  )
}