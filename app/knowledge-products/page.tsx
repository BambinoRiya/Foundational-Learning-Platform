import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FileText, Video, Presentation, BookOpen, Download } from 'lucide-react'

export default function KnowledgeProductsPage() {
  const products = [
    {
      type: 'Policy Brief',
      title: 'Foundational Learning in Cameroon: State of Evidence 2025',
      description: 'A synthesis of current research on literacy and numeracy outcomes across regions, with policy recommendations for MINEDUB.',
      date: 'March 2025',
      icon: FileText,
      access: 'open',
    },
    {
      type: 'Technical Report',
      title: 'Evidence Gap Map: Northwest & Centre Regions',
      description: 'Comprehensive mapping of existing studies and identified gaps in foundational learning research.',
      date: 'February 2025',
      icon: BookOpen,
      access: 'open',
    },
    {
      type: 'Presentation',
      title: 'CoP Launch Workshop Proceedings',
      description: 'Summary slides and key outcomes from the November 2025 inaugural workshop in Bamenda.',
      date: 'November 2025',
      icon: Presentation,
      access: 'open',
    },
    {
      type: 'Video',
      title: 'Introduction to the FLN Data & Evidence Platform',
      description: 'A short explainer video introducing the platform, its goals, and how stakeholders can participate.',
      date: 'January 2025',
      icon: Video,
      access: 'open',
    },
    {
      type: 'Toolkit',
      title: 'Community of Practice Facilitation Guide',
      description: 'Practical guidance for regional coordinators on running effective CoP meetings and knowledge-sharing sessions.',
      date: 'December 2024',
      icon: BookOpen,
      access: 'request',
    },
  ]

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,158,96,0.06) 0%, transparent 65%)' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Knowledge Products</div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Resources & Publications
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#5d4730' }}>
            Access policy briefs, technical reports, toolkits, and multimedia resources produced by the Community of Practice and its partners.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="cop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,158,96,0.15)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#009e60' }}
                  >
                    <product.icon size={24} color="#ffffff" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-semibold uppercase"
                        style={{ color: '#009e60', letterSpacing: '0.05em' }}
                      >
                        {product.type}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          product.access === 'open'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {product.access === 'open' ? 'Open' : 'By request'}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: '#5d4730' }}>
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: '#9a8976' }}>
                        {product.date}
                      </span>
                      <button
                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: '#009e60' }}
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section
        className="py-16 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: '#f5f9f7' }}
      >
        <div className="cop-container text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            More Resources Coming Soon
          </h2>
          <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: '#5d4730' }}>
            The Knowledge Products library is actively growing. Check back regularly for new publications, or subscribe to receive updates.
          </p>
          <Link
            href="/get-involved"
            className="inline-block px-6 py-3 rounded-lg text-sm font-semibold"
            style={{ background: '#009e60', color: '#ffffff' }}
          >
            Subscribe for Updates
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
