'use client'

import { useState } from 'react'
import RequestQuoteModal from '../components/RequestQuoteModal'
import Wrapper from '../components/wrapper'

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  return (
    <Wrapper page='contact_us' isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen}>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-50 md:h-100 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(253, 185, 19, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(253, 185, 19, 0.3) 0%, transparent 40%)',
          }}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              CONTACT US
            </h1>
            <p className="text-xl text-primary-yellow font-semibold">
              Get in Touch with Our Team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-yellow text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-2">CALL US</h3>
            <p className="text-gray-600 mb-2">Monday - Friday: 8AM - 6PM</p>
            <a href="tel:+2348128558718" className="text-primary-yellow font-bold hover:text-yellow-600">
              +234 812 855 8718
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-yellow text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-2">EMAIL US</h3>
            <p className="text-gray-600 mb-2">Send us your inquiries</p>
            <a href="mailto:jaisteelconstructionandmgtltd@gmail.com" className="text-primary-yellow font-bold hover:text-yellow-600">
              jaisteelconstructionandmgtltd@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-yellow text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-2">VISIT US</h3>
            <p className="text-gray-600 mb-2">Our Office Location</p>
            <p className="text-primary-yellow font-bold">
              Abuja, Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-primary-blue mb-4 font-heading">SEND US A MESSAGE</h2>
              <div className="w-24 h-1 bg-primary-yellow mb-4"></div>
              <p className="text-gray-600">
                Have a question or want to discuss your project? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">Thank you for contacting us. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary-yellow text-primary-blue font-bold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-primary-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Office Info & Business Hours */}
          <div>
            <div className="bg-primary-blue text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 font-heading">OFFICE HOURS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-blue-700">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-primary-yellow">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-blue-700">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-primary-yellow">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-4 font-heading">QUICK CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-primary-blue mb-1">Address</h4>
                    <p className="text-gray-600">Abuja, Federal Capital Territory, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-primary-blue mb-1">Phone</h4>
                    <a href="tel:+2348128558718" className="text-gray-600 hover:text-primary-blue">+234 812 855 8718</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-primary-blue mb-1">Email</h4>
                    <a href="mailto:jaisteelconstructionandmgtltd@gmail.com" className="text-gray-600 hover:text-primary-blue">jaisteelconstructionandmgtltd@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Need an immediate quote? Click the button below to request a detailed quote for your project.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-primary-blue text-white px-6 py-3 font-bold hover:bg-secondary-blue transition-colors rounded-lg"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary-blue mb-4 font-heading">FIND US ON MAP</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
              <div className="text-center text-white p-8">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Abuja, Nigeria</h3>
                <p className="text-primary-yellow">JAI Steel Works & Management Ltd.</p>
                <p className="text-sm mt-4 text-gray-200">
                  Interactive map integration available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    </Wrapper>
  )
}