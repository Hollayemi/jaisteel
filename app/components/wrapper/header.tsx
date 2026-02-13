"use client"
import { navigation } from '@/app/data/menu'
import { useState } from 'react'

const Header = ({ isQuoteModalOpen, page, setIsQuoteModalOpen }: {
    isQuoteModalOpen: boolean
    page: string
    setIsQuoteModalOpen: (open: boolean) => void
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isActivePage = (linkLabel: string) =>
        page.split("_").join(" ").toLowerCase() === linkLabel.toLowerCase()

    return (
        <div className='w-full sticky top-0 z-50'>
            <header className="bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ── Top bar ── */}
                    <div className="flex justify-between items-center py-2 border-b border-blue-800">

                        {/* Contact icons — always visible */}
                        <div className="flex items-center gap-3">
                            {/* Email — icon only on mobile, icon + text on md+ */}
                            <a
                                href="mailto:jaisteelconstructionandmgtltd@gmail.com"
                                title="jaisteelconstructionandmgtltd@gmail.com"
                                className="flex items-center gap-1.5 hover:text-primary-yellow transition-colors text-sm"
                            >
                                {/* Mail icon */}
                                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="hidden lg:inline">jaisteelconstructionandmgtltd@gmail.com</span>
                                <span className="hidden md:inline lg:hidden">Email Us</span>
                            </a>

                            <span className="text-blue-600 hidden md:block">|</span>

                            {/* Phone */}
                            <a
                                href="tel:+2348012345678"
                                className="flex items-center gap-1.5 hover:text-primary-yellow transition-colors text-sm"
                            >
                                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="hidden md:inline">+234 801 234 5678</span>
                            </a>
                        </div>

                        {/* Right side: social icons + badge */}
                        <div className="flex items-center gap-3">
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/company/jaisteel-mgt"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="hover:text-primary-yellow transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/share/jaisteelmgt"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                                className="hover:text-primary-yellow transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
                                </svg>

                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/jaisteel.mgt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                className="hover:text-primary-yellow transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>

                            {/* Excellence badge — hidden on small screens */}
                            <div className="hidden sm:flex bg-black text-primary-yellow px-3 py-1 rounded-full text-xs font-bold items-center gap-1 whitespace-nowrap">
                                <span className="text-yellow-400">⭐⭐⭐</span>
                                <span className="hidden md:inline">OVER 7 YEARS DELIVERING EXCELLENCE</span>
                                <span className="md:hidden">7+ YRS EXCELLENCE</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Main nav bar ── */}
                    <nav className="py-3">
                        <div className="flex items-center justify-between gap-4">

                            {/* Logo */}
                            <a href="/" className="flex items-center gap-2 flex-shrink-0">
                                <div className="w-12 h-12 flex items-center justify-center rounded">
                                    <img
                                        src="/images/logoWhite.PNG"
                                        alt="JAI Steel Works Logo"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div className="leading-tight">
                                    <div className="text-base font-bold font-heading">JAI STEEL WORKS</div>
                                    <div className="text-xs text-primary-yellow">& MANAGEMENT LTD</div>
                                </div>
                            </a>

                            {/* Desktop nav links */}
                            <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
                                {navigation.map((link: any) => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        className={
                                            isActivePage(link.label)
                                                ? "text-primary-yellow"
                                                : "hover:text-primary-yellow transition-colors"
                                        }
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            {/* Right side: CTA + hamburger */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="bg-primary-yellow text-primary-blue px-4 py-2 text-xs sm:text-sm font-bold hover:bg-yellow-500 transition-colors rounded whitespace-nowrap"
                                >
                                    <span className="hidden sm:inline">REQUEST QUOTE</span>
                                    <span className="sm:hidden">QUOTE</span>
                                </button>

                                {/* Hamburger — visible below lg */}
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    aria-label="Toggle menu"
                                    className="lg:hidden p-2 rounded hover:bg-blue-800 transition-colors"
                                >
                                    {mobileMenuOpen ? (
                                        /* X icon */
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        /* Hamburger icon */
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* ── Mobile dropdown menu ── */}
                        {mobileMenuOpen && (
                            <div className="lg:hidden mt-3 pb-3 border-t border-blue-800">
                                <div className="flex flex-col pt-3 gap-1">
                                    {navigation.map((link: any) => (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                                                isActivePage(link.label)
                                                    ? "bg-primary-yellow text-primary-blue"
                                                    : "hover:bg-blue-800 hover:text-primary-yellow"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}

                                    {/* Mobile contact links */}
                                    <div className="mt-3 pt-3 border-t border-blue-800 flex flex-col gap-2 px-3">
                                        <a
                                            href="mailto:jaisteelconstructionandmgtltd@gmail.com"
                                            className="flex items-center gap-2 text-sm hover:text-primary-yellow transition-colors"
                                        >
                                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span className="truncate">jaisteelconstructionandmgtltd@gmail.com</span>
                                        </a>
                                        <a
                                            href="tel:+2348012345678"
                                            className="flex items-center gap-2 text-sm hover:text-primary-yellow transition-colors"
                                        >
                                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            +234 801 234 5678
                                        </a>

                                        {/* Social icons in mobile menu */}
                                        <div className="flex items-center gap-4 pt-1">
                                            <a
                                                href="https://linkedin.com/company/jaisteelworks"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm hover:text-primary-yellow transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                            <a
                                                href="https://instagram.com/jaisteelworks"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm hover:text-primary-yellow transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                                Instagram
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header