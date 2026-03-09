import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded">
                <img
                  src="/images/logoWhite.PNG"
                  alt="JAI Steel Consultation Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold font-heading">JAI STEEL WORKS</div>
                <div className="text-xs text-primary-yellow">& MANAGEMENT LTD</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A forward-thinking engineering, steel-construction, and project-management company based in Abuja, Nigeria. We specialize in structural steel works, metal fabrication, welding services, consultancy, and turnkey project execution for private, commercial and industrial clients.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+234 812 855 8718</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>jaisteelconstructionandmgtltd@gmail.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primary-yellow mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-primary-yellow">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Steel Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metal Fabrication</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Welding Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4 text-primary-yellow">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400 text-sm">
                Get the latest news from JAI Steel Works, project updates and industry insights.
              </p>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white text-black px-4 py-2 text-sm focus:outline-none w-64"
              />
              <button className="bg-primary-yellow text-primary-blue px-6 py-2 text-sm font-bold hover:bg-yellow-500 transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} JAI Steel Construction & Management Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer