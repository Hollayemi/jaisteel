"use client"

import { useState } from 'react'
import Wrapper from '../components/wrapper'

// ─── Product data ────────────────────────────────────────────────────────────

const productCategories = [
  {
    id: "structural-steel",
    tag: "Category 01",
    title: "Structural Steel Products",
    subtitle: "The backbone of every great structure",
    description:
      "We supply and fabricate a comprehensive range of structural steel products designed to meet the demands of modern construction. Every item is produced to industry standards with rigorous quality checks before delivery or installation.",
    accent: "left",
    items: [
      {
        id: 1,
        name: "Steel Beams & Columns",
        description:
          "Universal beams (UB), universal columns (UC), and H-sections fabricated for load-bearing applications in warehouses, bridges, commercial buildings, and industrial facilities. Available in a wide range of sizes and grades.",
        specs: ["Grade 43 / Grade 50", "Custom lengths available", "Hot-rolled & welded sections"],
        icon: "🏗️",
        image: "/images/steelbeam.jpg",
      },
      {
        id: 2,
        name: "Girders & Trusses",
        description:
          "Plate girders and roof trusses designed for long-span structures. Ideal for industrial sheds, aircraft hangars, sports halls, and bridges where large clear spans are required without intermediate supports.",
        specs: ["Custom span design", "Single & double-pitch trusses", "Gable and hip roof options"],
        icon: "⚙️",
        image: "/images/GirdersTrusses.jpg",
      },
    //   {
    //     id: 3,
    //     name: "Steel Frameworks",
    //     description:
    //       "Complete primary and secondary steel framework packages for pre-engineered buildings and bespoke structures. Supplied as fully fabricated components ready for on-site erection, reducing construction time significantly.",
    //     specs: ["Pre-engineered systems", "3D design detailing", "Bolt-together assembly"],
    //     icon: "🔩",
    //     image: "/images/GirdersTrusses.jpg",
    //   },
      {
        id: 4,
        name: "Steel Roofing Systems",
        description:
          "Profiled steel roof sheets, purlins, and associated fixings for durable, weather-resistant roofing. Suitable for factories, warehouses, and commercial premises requiring long-lasting weather protection.",
        specs: ["Coloured & galvanised options", "Insulated panels available", "Concealed & exposed fix"],
        icon: "🏠",
        image: "/images/stealRoofing.jpg",
      },
      {
        id: 5,
        name: "Mezzanine Floors & Platforms",
        description:
          "Structural mezzanine floors that maximise vertical space in existing buildings. Designed for storage, offices, or production areas. Supplied with steel decking, handrails, stairs, and all supporting steelwork.",
        specs: ["Load ratings from 250–750 kg/m²", "Modular & bespoke designs", "Fire-rated options"],
        icon: "📐",
        image: "/images/mezzanineFloor.jpg",
      },
      {
        id: 6,
        name: "Staircases & Landings",
        description:
          "Industrial and commercial steel staircases with open or closed risers, including intermediate landings. Designed for safety and durability in both indoor and outdoor environments.",
        specs: ["Mild steel & stainless options", "Anti-slip treads", "Bespoke balustrades"],
        icon: "🪜",
        image: "/images/staircasLanding.jpg",
      },
    ],
  },
  {
    id: "fabricated-metal",
    tag: "Category 02",
    title: "Fabricated Metal Products",
    subtitle: "Precision-made to your exact specification",
    description:
      "Our fabrication workshop produces a wide variety of custom metal products for residential, commercial, and industrial clients. From decorative metalwork to heavy-duty industrial components, every item is crafted with precision and care.",
    accent: "right",
    items: [
      {
        id: 7,
        name: "Gates & Fences",
        description:
          "Bespoke security and decorative gates, sliding gates, swing gates, and perimeter fencing fabricated from mild steel, wrought iron, or stainless steel. Powder-coated or galvanised for long-term corrosion protection.",
        specs: ["Manual & automated options", "Security ratings available", "Custom designs & finishes"],
        icon: "🚧",
        image: "/images/gateFence.jpg",
      },
      {
        id: 8,
        name: "Railings & Balustrades",
        description:
          "Handrails, balustrades, and guardrails for staircases, mezzanines, balconies, and roof edges. Manufactured in mild steel, stainless steel, or aluminium to comply with safety standards and aesthetic requirements.",
        specs: ["Glass infill compatible", "Mild steel & stainless steel", "Compliant with safety codes"],
        icon: "🛡️",
        image: "/images/railBalustrades.jpg",
      },
      {
        id: 9,
        name: "Metal Doors & Frames",
        description:
          "Heavy-duty steel doors and door frames for industrial, commercial, and security-sensitive applications. Supplied with or without fire-rating, and available in a range of thicknesses and face finishes.",
        specs: ["Fire-rated options", "Flush & panelled faces", "Standard & bespoke sizes"],
        icon: "🚪",
        image: "/images/doors.jpg",
      },
      {
        id: 10,
        name: "Sheet Metal & Cladding Panels",
        description:
          "Custom-cut and folded sheet metal components including wall cladding panels, fascias, soffits, flashings, and enclosures. Produced from galvanised steel, aluminium, or stainless steel sheet to tight tolerances.",
        specs: ["CNC cutting & folding", "1mm – 12mm thickness", "Powder coat & mill finish"],
        icon: "📦",
        image: "/images/sheetMetal.jpg",
      },
      {
        id: 11,
        name: "Walkways, Ladders & Decking",
        description:
          "Industrial walkways, access ladders, grating panels, and chequer-plate decking for safe access in plant rooms, refineries, rooftops, and elevated structures. Galvanised for outdoor durability.",
        specs: ["Open bar & chequer plate", "Hot-dip galvanised", "GRP grating available"],
        icon: "🪝",
        image: "/images/ladderDecking.jpg",
      },
      {
        id: 12,
        name: "Ducts & Metal Enclosures",
        description:
          "Rectangular and circular ductwork, cable trays, cable management enclosures, and bespoke sheet metal boxes for electrical and mechanical services. Fabricated to project drawings or site measurements.",
        specs: ["Galvanised & stainless steel", "Custom dimensions", "Seam-welded or riveted"],
        icon: "🔧",
        image: "/images/ducting.jpg",
      },
    ],
  },
  {
    id: "raw-materials",
    tag: "Category 03",
    title: "Steel & Metal Materials Supply",
    subtitle: "Quality materials delivered to your site",
    description:
      "Beyond fabricated products, we supply raw steel and metal materials sourced from certified mills. Whether you need one length or a full project package, we can procure and deliver to your site or yard in Abuja and across Nigeria.",
    accent: "left",
    items: [
      {
        id: 13,
        name: "Steel Rods & Reinforcement Bars",
        description:
          "High-yield and mild steel reinforcement bars (rebars) for reinforced concrete construction. Supplied in standard lengths or cut to your specified dimensions. Available in all standard diameters.",
        specs: ["Y8 – Y32 diameters", "BS 4449 Grade 500B", "Cut & bent to schedule"],
        icon: "📏",
        image: "/images/steelRod..png",
      },
      {
        id: 14,
        name: "Steel Pipes & Hollow Sections",
        description:
          "Circular hollow sections (CHS), rectangular hollow sections (RHS), and square hollow sections (SHS) for structural and mechanical applications. Seamless and welded options available.",
        specs: ["Structural & mechanical grades", "Galvanised & black steel", "Various wall thicknesses"],
        icon: "⭕",
        image: "/images/steelPipe.jpg",
      },
      {
        id: 15,
        name: "Steel Sheets & Plates",
        description:
          "Hot-rolled and cold-rolled steel sheets and plates for fabrication, cladding, and construction. Supplied as standard stock sizes or cut to exact dimensions. Stainless and aluminium sheets also available.",
        specs: ["1.2mm – 50mm thickness", "Hot & cold rolled", "Stainless & aluminium options"],
        icon: "🔲",
        image: "/images/steelSheet.jpg",
      },
      {
        id: 16,
        name: "Fittings, Flanges & Connectors",
        description:
          "Structural bolts, nuts, washers, pipe flanges, end plates, and weld-on fittings for structural and pipework connections. Supplied to BS and ASTM standards in hot-dip galvanised or plain finishes.",
        specs: ["Grade 4.6, 8.8, 10.9 bolts", "BS & ASTM standards", "Hot-dip galvanised"],
        icon: "🔗",
        image: "/images/connectors.jpg",
      },
    ],
  },
]

// ─── Small reusable components ───────────────────────────────────────────────

function SpecBadge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-primary-yellow/10 border border-primary-yellow text-primary-blue text-xs font-semibold px-2.5 py-1 rounded-full">
      {text}
    </span>
  )
}

function ProductCard({
  item,
  index,
  onQuote,
}: {
  item: (typeof productCategories)[0]["items"][0]
  index: number
  onQuote: () => void
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100`}
    >
      {/* Image / icon panel */}
      <div className="lg:w-2/5 bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center p-12 min-h-[220px]">
        <div className="text-center">
          <img src={item.image} alt={item.name} className="mx-auto mb-4 h-40" />
          <p className="text-primary-yellow font-bold text-sm tracking-wide uppercase">
            {item.name}
          </p>
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:w-3/5 flex flex-col justify-between p-8">
        <div>
          <h3 className="text-2xl font-bold text-primary-blue mb-3 font-heading">
            {item.name}
          </h3>
          <div className="w-12 h-1 bg-primary-yellow mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {item.specs.map((s) => (
              <SpecBadge key={s} text={s} />
            ))}
          </div>
        </div>
        <button
          onClick={onQuote}
          className="self-start border-2 border-primary-blue text-primary-blue px-6 py-2 text-sm font-bold rounded hover:bg-primary-blue hover:text-white transition-colors flex items-center gap-2"
        >
          REQUEST QUOTE
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <Wrapper page="products" isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen}>

      {/* ── Hero ── */}
      <section className="relative h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 z-10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(253,185,19,.45) 0%, transparent 55%), radial-gradient(circle at 75% 60%, rgba(253,185,19,.25) 0%, transparent 45%)",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-8">
          <div>
            <h1
              className="text-6xl sm:text-7xl font-bold text-white mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR<br />PRODUCTS
            </h1>
            <p className="text-primary-yellow font-semibold text-lg">
              Steel & Metal Solutions for Every Scale
            </p>
          </div>

          <div className="hidden md:block bg-white/95 p-7 max-w-sm rounded-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              From raw steel materials to fully fabricated structures, JAI Steel
              Works & Management Ltd. supplies and manufactures a comprehensive
              range of steel and metal products for private, commercial, and
              industrial clients across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category anchor nav ── */}
      <section className="bg-primary-blue/5 border-b border-primary-blue/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {productCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white transition-colors whitespace-nowrap"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product categories ── */}
      {productCategories.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-20 ${catIdx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="mb-12">
              <span className="inline-block bg-primary-yellow text-primary-blue text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
                {cat.tag}
              </span>
              <h2
                className="text-4xl font-bold text-primary-blue mb-3 font-heading"
              >
                {cat.title}
              </h2>
              <div className="w-20 h-1 bg-primary-yellow mb-4" />
              <p className="text-gray-600 max-w-3xl leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Product list */}
            <div className="flex flex-col gap-8">
              {cat.items.map((item, idx) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={idx}
                  onQuote={() => setIsQuoteModalOpen(true)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA banner ── */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold mb-4 font-heading"
          >
            CAN'T FIND WHAT YOU NEED?
          </h2>
          <p className="text-primary-yellow text-lg mb-8 max-w-2xl mx-auto">
            We supply and fabricate bespoke steel and metal products to your exact
            specification. Get in touch and our team will provide a tailored
            solution and competitive quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary-yellow text-primary-blue px-10 py-4 text-lg font-bold hover:bg-yellow-500 transition-colors rounded-lg inline-flex items-center justify-center gap-3"
            >
              REQUEST A QUOTE
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="/contact"
              className="bg-white/10 border-2 border-white text-white px-10 py-4 text-lg font-bold hover:bg-white/20 transition-colors rounded-lg inline-flex items-center justify-center"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}