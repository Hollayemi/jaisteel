'use client'

import { useState } from 'react'
import Wrapper from './components/wrapper'

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <Wrapper page="home" isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen}>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — MASSIVE, EMOTIONAL, BENEFIT-DRIVEN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br bg-primary-blue via-secondary-blue to-primary-blue overflow-hidden">
        {/* Animated background elements */}
        <img src="/images/image1.jpg" className='w-full h-full absolute object-cover' />
        <div className='w-full h-full absolute bg-black opacity-70' />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-yellow/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Compelling copy */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight font-heading">
                Building Nigeria's
                <span className="block text-primary-yellow mt-2">Steel Future</span>
              </h1>

              <p className="text-xl sm:text-md text-gray-100 leading-relaxed max-w-2xl font-light">
                From concept to completion, we deliver <span className="text-primary-yellow font-semibold">world-class steel construction</span> that stands the test of time. Over 20 years of engineering excellence across Abuja and beyond.
              </p>

              {/* Stat pills */}
              {/* <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-primary-yellow font-heading">20+</div>
                  <div className="text-sm text-gray-300">Years Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-primary-yellow font-heading">150+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-primary-yellow font-heading">100%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div> */}

              {/* CTAs that POP */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="group relative px-10 py-5 bg-primary-yellow text-primary-blue text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-3"
                >
                  <span>Get Free Quote</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <a
                  href="#services"
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>View Services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Dynamic visual element */}
            <div className="hidden lg:block relative">
              <div className="relative">

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold text-primary-yellow font-heading">20+</div>
                    <div className="text-sm text-gray-300">Years Excellence</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold text-primary-yellow font-heading">150+</div>
                    <div className="text-sm text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold text-primary-yellow font-heading">100%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className=" -bottom-6 -left-6 bg-primary-yellow text-primary-blue rounded-2xl px-8 py-6 shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                    <div className="text-sm font-semibold mb-1">Certified & Trusted</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-primary-blue fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-bold">5.0</span>
                    </div>
                  </div>
                </div>
                {/* Main image container */}
                {/* <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-primary-yellow/20 to-transparent rounded-2xl p-12 text-center">
                    <div className="text-9xl mb-6">🏗️</div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">Premium Steel Solutions</h3>
                    <p className="text-gray-200">Structural Excellence • Metal Fabrication • Project Management</p>
                  </div>
                </div> */}

                {/* Floating badge */}
                {/* <div className="absolute -bottom-6 -left-6 bg-primary-yellow text-primary-blue rounded-2xl px-8 py-6 shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <div className="text-sm font-semibold mb-1">Certified & Trusted</div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-primary-blue fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold">5.0</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SOCIAL PROOF — TESTIMONIALS & TRUST SIGNALS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-yellow/10 text-primary-blue px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Trusted by Leading Companies
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-4 font-heading">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1.5 bg-primary-yellow mx-auto" />
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "JAI Steel Works delivered our warehouse project 2 weeks ahead of schedule. The structural integrity and quality of their work is exceptional. Highly recommended for any steel construction needs.",
                author: "Chidi Okafor",
                role: "Project Manager",
                company: "Eagle Industrial Ltd.",
                rating: 5,
              },
              {
                quote: "Professional team, transparent pricing, and outstanding craftsmanship. They handled our metal fabrication requirements with precision and care. Will definitely work with them again.",
                author: "Aisha Mohammed",
                role: "Operations Director",
                company: "Zenith Manufacturing",
                rating: 5,
              },
              {
                quote: "From design to installation, JAI Steel Works exceeded our expectations. Their engineering expertise and attention to safety standards is impressive. A reliable partner for steel projects.",
                author: "David Adeleke",
                role: "Facility Manager",
                company: "Prime Logistics Nigeria",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-yellow hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary-yellow/10 group-hover:text-primary-yellow/20 transition-colors">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary-yellow fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-primary-blue">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          NARRATIVE FRAMING — THE PROBLEM → OUR SOLUTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: The problem/challenge */}
            <div>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                The Challenge
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-6 font-heading leading-tight">
                Nigerian Construction Needs <span className="text-primary-yellow">Reliable Steel Partners</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Many construction projects in Nigeria face delays, quality issues, and budget overruns due to unreliable steel suppliers and fabricators. Projects stall. Timelines slip. Costs balloon.
                </p>
                <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    {/* <div className="text-3xl">⚠️</div> */}
                    <div>
                      <div className="font-bold text-red-700 mb-2">Common Industry Problems:</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span>Substandard materials that compromise structural integrity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span>Missed deadlines causing project delays</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span>Poor project management and coordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Our solution */}
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                Our Solution
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-6 font-heading leading-tight">
                We Build Steel Solutions <span className="text-primary-yellow">That Last</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  JAI Steel Works delivers precision-engineered steel construction with guaranteed quality, on-time delivery, and professional project management from start to finish.
                </p>
                <div className="bg-primary-blue/5 border-l-4 border-primary-yellow rounded-r-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    {/* <div className="text-3xl">✨</div> */}
                    <div>
                      <div className="font-bold text-primary-blue mb-2">The JAI Difference:</div>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-primary-yellow mt-1 font-bold">✓</span>
                          <span><strong>Certified Quality:</strong> ISO-standard materials & processes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-yellow mt-1 font-bold">✓</span>
                          <span><strong>On-Time Delivery:</strong> 98% projects completed ahead of schedule</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-yellow mt-1 font-bold">✓</span>
                          <span><strong>Turnkey Expertise:</strong> From design to handover, we manage everything</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-yellow mt-1 font-bold">✓</span>
                          <span><strong>20+ Years Trusted:</strong> Proven track record across Nigeria</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="mt-6 px-8 py-4 bg-primary-yellow text-primary-blue font-bold rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg flex items-center gap-3 group"
                >
                  <span>Start Your Project Today</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SERVICES — CLEAR HIERARCHY WITH BIG HEADLINES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header with strong hierarchy */}
          <div className="text-center mb-20">
            <span className="inline-block bg-primary-yellow text-primary-blue px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide mb-4">
              What We Do
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-3 font-heading">
              Our Services
            </h2>
            <div className="w-32 h-2 bg-primary-yellow mx-auto mb-6" />
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Comprehensive steel construction and metal fabrication solutions engineered for durability, safety, and performance.
            </p>
          </div>

          {/* Service cards with strong visual contrast */}
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Structural Steel & Construction",
                subtitle: "Building the backbone of modern infrastructure",
                description: "From warehouse frameworks to multi-story building structures, we design, fabricate, and install structural steel components that meet international standards. Our turnkey approach covers everything from initial design through to final handover.",
                icon: "🏗️",
                image: "/images/image1.jpg",
                features: ["Steel Beams & Columns", "Complete Frameworks", "Roofing Systems", "Mezzanine Floors", "Turnkey Projects"],
                color: "from-blue-500 to-primary-blue",
              },
              {
                number: "02",
                title: "Metal Fabrication & Welding",
                subtitle: "Precision craftsmanship for every project",
                description: "Custom metal fabrication services including gates, railings, doors, sheet metal work, and professional welding for mild steel, stainless steel, and aluminum. We combine traditional craftsmanship with modern technology.",
                icon: "⚡",
                image: "/images/image2.jpg",
                features: ["Custom Fabrication", "Professional Welding", "Sheet Metal Work", "Gates & Railings", "On-Site Services"],
                color: "from-yellow-500 to-orange-600",
              },
              {
                number: "03",
                title: "Project Management & Consultancy",
                subtitle: "Expert guidance from concept to completion",
                description: "End-to-end project management services ensuring your steel construction project stays on schedule, within budget, and meets all quality standards. Our engineering consultants provide expert guidance at every stage.",
                icon: "📋",
                image: "/images/image3.jpg",
                features: ["Construction Planning", "Engineering Consultancy", "Quality Control", "Safety Compliance", "Procurement Support"],
                color: "from-green-500 to-teal-600",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white border-2 border-gray-100 hover:border-primary-yellow rounded-md md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[350px_1fr] gap-0">
                  {/* Left: Visual panel with gradient */}
                  <div className={`bg-gradient-to-br ${service.color} p-12 flex flex-col justify-between relative overflow-hidden`}>
                    <img src={service.image} className="w-full h-full object-cover absolute top-0 left-0" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10">
                      <div className="text-white/30 text-8xl font-bold font-heading mb-4">{service.number}</div>
                      {/* <div className="text-7xl mb-6 drop-shadow-lg">{service.icon}</div> */}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-2 font-heading leading-tight">{service.title}</h3>
                      <p className="text-white/90 text-sm font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-4 lg:p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 group-hover:bg-primary-yellow/10 transition-colors">
                            <svg className="w-5 h-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="self-start px-8 py-4 bg-primary-blue text-white font-bold rounded-xl hover:bg-secondary-blue transition-all hover:scale-105 shadow-lg flex items-center gap-3 group"
                    >
                      <span>Request Quote</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA — MASSIVE, UNMISSABLE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-gradient-to-br bg-primary-blue via-secondary-blue to-primary-blue overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 font-heading leading-tight">
            Ready to Build Something
            <span className="block text-primary-yellow">Extraordinary?</span>
          </h2>
          <p className="text-md text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a free quote and professional consultation from Nigeria's trusted steel construction experts. Zero obligation. Fast response.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group px-4 bg-primary-yellow text-primary-blue text-md font-bold rounded-2xl hover:bg-yellow-400 transition-all duration-300 hover:scale-110 shadow-2xl flex items-center justify-center gap-4"
            >
              <span>Get Your Free Quote</span>
              <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="/contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-3 border-white text-white text-sm font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Us Now</span>
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-yellow font-heading">24hrs</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-yellow font-heading">100%</div>
                <div className="text-sm text-gray-300">Free Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary-yellow font-heading">20+</div>
                <div className="text-sm text-gray-300">Years Trusted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Wrapper>
  )
}
