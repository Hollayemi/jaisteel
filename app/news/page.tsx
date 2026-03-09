"use client"

import { useState } from 'react'
import Wrapper from '../components/wrapper'

// ─── News data (add more objects here as news grows) ─────────────────────────
const news = [
  {
    id: 1,
    slug: "jai-steel-works-expands-operations-abuja",
    tag: "Company News",
    date: "February 2025",
    readTime: "3 min read",
    title: "JAI Steel Construction & Management Ltd. Expands Operations Across Abuja",
    excerpt:
      "JAI Steel Construction & Management Ltd. is proud to announce a significant expansion of its operations in Abuja, bringing enhanced steel construction and metal fabrication capabilities to a wider range of clients across the Federal Capital Territory and beyond.",
    body: [
      {
        type: "paragraph",
        content:
          "JAI Steel Construction & Management Ltd. is proud to announce a significant expansion of its operations in Abuja, Federal Capital Territory. This strategic growth marks a major milestone in our journey to become the leading steel construction and project-management company in Nigeria.",
      },
      {
        type: "heading",
        content: "What This Means for Our Clients",
      },
      {
        type: "paragraph",
        content:
          "The expansion brings increased workshop capacity, a larger team of certified welders and structural engineers, and upgraded fabrication equipment — enabling us to take on bigger, more complex projects with even shorter turnaround times. Clients across the residential, commercial, and industrial sectors will benefit directly from this growth.",
      },
      {
        type: "quote",
        content:
          "Our goal has always been to provide reliable, innovative, and cost-effective steel solutions. This expansion puts us in a stronger position to serve more clients without compromising the quality and precision we are known for.",
        author: "Managing Director, JAI Steel Construction & Management Ltd.",
      },
      {
        type: "heading",
        content: "New Capabilities Now Available",
      },
      {
        type: "list",
        items: [
          "Larger structural steel fabrication for warehouses and multi-storey buildings",
          "Faster turnaround on custom metal fabrication orders",
          "Expanded on-site welding fleet for remote and large-scale projects",
          "Full turnkey project delivery from design through to handover",
          "Enhanced project management and consultancy services",
        ],
      },
      {
        type: "paragraph",
        content:
          "Whether you are planning a new industrial facility, need bespoke metal fabrication, or require professional project management support, JAI Steel Construction is ready to deliver. Contact us today to discuss your project requirements and request a free quote.",
      },
    ],
    author: {
      name: "JAI Steel Construction Team",
      role: "Communications",
      initials: "JAI",
    },
    relatedLinks: [
      { label: "View Our Services", href: "/services" },
      { label: "View Our Products", href: "/products" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
]

// ─── Block renderer ───────────────────────────────────────────────────────────
function BodyBlock({ block }: { block: (typeof news)[0]["body"][0] }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-gray-600 leading-relaxed text-[15px]">{block.content}</p>
    )
  }
  if (block.type === "heading") {
    return (
      <h3 className="text-xl font-bold text-primary-blue mt-2 font-heading">
        {block.content}
      </h3>
    )
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-primary-yellow bg-primary-blue/5 rounded-r-lg px-6 py-5 my-2">
        <p className="text-primary-blue font-semibold italic text-[15px] leading-relaxed mb-2">
          "{block.content}"
        </p>
        {block.author && (
          <p className="text-sm text-gray-500 font-medium">— {block.author}</p>
        )}
      </blockquote>
    )
  }
  if (block.type === "list" && block.items) {
    return (
      <ul className="space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
            <span className="mt-1 w-5 h-5 rounded-full bg-primary-yellow text-primary-blue flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return null
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NewsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [activeId, setActiveId] = useState<number | null>(null)

  const article = activeId ? news.find((n) => n.id === activeId) : null

  return (
    <Wrapper
      page="news"
      isQuoteModalOpen={isQuoteModalOpen}
      setIsQuoteModalOpen={setIsQuoteModalOpen}
    >

      {/* ── Hero ── */}
      <section className="relative h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 z-10" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(253,185,19,.45) 0%, transparent 55%), radial-gradient(circle at 75% 60%, rgba(253,185,19,.25) 0%, transparent 45%)",
            }}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            {article && (
              <button
                onClick={() => setActiveId(null)}
                className="flex items-center gap-2 text-primary-yellow text-sm font-semibold mb-4 hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </button>
            )}
            <h1
              className="text-6xl sm:text-7xl font-bold text-white mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {article ? "ARTICLE" : "LATEST NEWS"}
            </h1>
            <p className="text-primary-yellow font-semibold text-lg">
              {article
                ? article.tag
                : "Updates, Projects & Industry Insights"}
            </p>
          </div>
        </div>
      </section>

      {/* ── News list view ── */}
      {!article && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-12">
              <div>
                <span className="inline-block bg-primary-yellow text-primary-blue text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-widest uppercase">
                  All Articles
                </span>
                <h2 className="text-4xl font-bold text-primary-blue font-heading">
                  NEWS & UPDATES
                </h2>
                <div className="w-20 h-1 bg-primary-yellow mt-3" />
              </div>
            </div>

            {/* Article cards */}
            <div className="flex flex-col gap-8">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 cursor-pointer"
                  onClick={() => setActiveId(item.id)}
                >
                  {/* Left colour panel */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-primary-blue to-secondary-blue flex flex-col items-center justify-center p-10 min-h-[200px] relative overflow-hidden">
                    {/* Decorative circle */}
                    <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-primary-yellow/10" />
                    <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/5" />

                    <span className="bg-primary-yellow text-primary-blue text-xs font-bold px-3 py-1 rounded-full mb-4 z-10">
                      {item.tag}
                    </span>
                    <div className="text-white text-center z-10">
                      <p className="text-4xl font-bold font-heading leading-none">
                        {item.date.split(" ")[0].slice(0, 3).toUpperCase()}
                      </p>
                      <p className="text-primary-yellow font-semibold text-sm">
                        {item.date.split(" ")[1]}
                      </p>
                    </div>
                    <p className="text-white/60 text-xs mt-3 z-10">{item.readTime}</p>
                  </div>

                  {/* Right content */}
                  <div className="lg:w-2/3 flex flex-col justify-between p-8">
                    <div>
                      <h2 className="text-2xl font-bold text-primary-blue mb-3 font-heading group-hover:text-primary-yellow transition-colors leading-snug">
                        {item.title}
                      </h2>
                      <div className="w-12 h-1 bg-primary-yellow mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Author chip */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary-blue text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {item.author.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{item.author.name}</p>
                          <p className="text-xs text-gray-500">{item.author.role}</p>
                        </div>
                      </div>

                      <button className="flex items-center gap-2 bg-primary-blue text-white px-5 py-2 text-sm font-bold rounded hover:bg-secondary-blue transition-colors">
                        READ MORE
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state placeholder for when more news is added */}
            {news.length === 0 && (
              <div className="text-center py-24 text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-semibold">No articles yet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Article detail view ── */}
      {article && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main article */}
              <div className="lg:col-span-2">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-primary-yellow text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue mb-4 font-heading leading-snug">
                  {article.title}
                </h2>
                <div className="w-20 h-1 bg-primary-yellow mb-8" />

                {/* Article body */}
                <div className="space-y-6">
                  {article.body.map((block, i) => (
                    <BodyBlock key={i} block={block} />
                  ))}
                </div>

                {/* Author footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {article.author.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.role}</p>
                  </div>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setActiveId(null)}
                  className="mt-8 flex items-center gap-2 border-2 border-primary-blue text-primary-blue px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-blue hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  BACK TO NEWS
                </button>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Quick contact */}
                <div className="bg-primary-blue text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold font-heading mb-2">INTERESTED?</h3>
                  <div className="w-12 h-1 bg-primary-yellow mb-4" />
                  <p className="text-sm text-gray-200 mb-5">
                    Ready to discuss your next steel project? Request a free quote today.
                  </p>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full bg-primary-yellow text-primary-blue px-4 py-3 text-sm font-bold rounded hover:bg-yellow-500 transition-colors"
                  >
                    REQUEST A QUOTE
                  </button>
                </div>

                {/* Related links */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary-blue font-heading mb-4">
                    EXPLORE MORE
                  </h3>
                  <div className="space-y-2">
                    {article.relatedLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-primary-blue hover:border-primary-yellow hover:bg-primary-yellow/5 transition-colors group"
                      >
                        {link.label}
                        <svg className="w-4 h-4 text-primary-yellow group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="rounded-xl border border-gray-100 p-6 space-y-4">
                  <h3 className="text-lg font-bold text-primary-blue font-heading">CONTACT US</h3>
                  <a
                    href="tel:+2348128558718"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +234 812 855 8718
                  </a>
                  <a
                    href="mailto:jaisteelconstructionandmgtltd@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="truncate">jaisteelconstructionandmgtltd@gmail.com</span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA banner (list view only) ── */}
      {!article && (
        <section className="bg-primary-blue text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-1">READY TO START A PROJECT?</h2>
              <p className="text-primary-yellow text-sm">Get a free quote from our team today.</p>
            </div>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex-shrink-0 bg-primary-yellow text-primary-blue px-10 py-4 text-base font-bold hover:bg-yellow-500 transition-colors rounded-lg inline-flex items-center gap-3"
            >
              REQUEST A QUOTE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>
      )}

    </Wrapper>
  )
}