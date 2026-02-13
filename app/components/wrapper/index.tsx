"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import RequestQuoteModal from '../RequestQuoteModal'

export interface WrapperProps {
    children: React.ReactNode
    isQuoteModalOpen: boolean
    setIsQuoteModalOpen: (open: boolean) => void
    page?: "services" | "home" | "about_us" | "contact_us" | "products" | "news"
}

const Wrapper = ({ children, isQuoteModalOpen, setIsQuoteModalOpen, page = "home" }: WrapperProps) => {
    return (
        <div className="bg-white text-gray-900">
            <Header page={page} isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />
            {page && page !== "home" && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="text-sm text-gray-600">
                    <a href="/" className="hover:text-gray-900">Home</a>
                    <span className="mx-2">&gt;</span>
                    <span className="text-gray-900 font-medium capitalize">{page.split("_").join(" ")}</span>
                </div>
            </div>}
            {children}
            <Footer />

            {/* Request Quote Modal */}
            <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </div>
    )
}

export default Wrapper