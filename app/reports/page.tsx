import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FileText, BookOpen, Download } from 'lucide-react'

export default function Reports() {
  const products = [
    {
      type: 'Situational Analysis',
      title: "Cameroon's Situational Analysis: Exploring the Foundational Learning Data and Knowledge Ecosystem in Sub-Saharan Africa",
      description: 'An assessment of foundational learning data availability and use in Cameroon, mapping the knowledge ecosystem across the education system.',
      date: 'January 2025',
      icon: FileText,
      access: 'open',
      file: '/downloads/situational-analysis-cameroon-en.pdf',
    },
    {
      type: 'Analyse Situationnelle',
      title: "Analyse de la Situation du Cameroun : Exploration de l'Écosystème des Données et des Connaissances sur l'Apprentissage Fondamental en Afrique Subsaharienne",
      description: "Édition en français de l'analyse situationnelle du Cameroun sur les données et connaissances relatives à l'apprentissage fondamental.",
      date: 'September 2025',
      icon: FileText,
      access: 'open',
      file: '/downloads/situational-analysis-cameroon-fr.pdf',
    },
    {
      type: 'Evidence Review',
      title: 'Evidence Gap Map Report: Foundational Learning in Cameroon',
      description: 'A systematic review and visual mapping of the evidence base on foundational learning interventions and outcomes in Cameroon, identifying priority areas for future research.',
      date: 'September 2025',
      icon: BookOpen,
      access: 'open',
      file: '/downloads/evidence-gap-map-foundational-learning-cameroon.pdf',
    },
    {
      type: 'Evidence Review',
      title: 'Cross-Country Analysis of Evidence Gap Maps in Malawi, Kenya, and Cameroon',
      description: 'A thematic comparison of Evidence Gap Maps across three countries, synthesising methodological approaches, evidence distribution, and findings on foundational learning interventions and outcomes.',
      date: 'June 2025',
      icon: BookOpen,
      access: 'open',
      file: '/downloads/cross-country-egm-analysis-malawi-kenya-cameroon.pdf',
    },
    {
      type: 'Policy Brief',
      title: 'Strengthening Foundational Literacy and Numeracy in Cameroon',
      description: "Policy recommendations for strengthening foundational literacy and numeracy outcomes in Cameroon, drawn from the Unlocking Data Initiative's evidence base.",
      date: 'August 2025',
      icon: FileText,
      access: 'open',
      file: '/downloads/policy-brief-strengthening-fln-cameroon.pdf',
    },
    {
      type: 'Collaborative Evaluation',
      title: 'Design-Based Implementation Research Report: Cycle 1 — Improving Collaboration through Communities of Practice to Inform Foundational Learning Policies in Cameroon',
      description: 'First-cycle findings from a design-based implementation research process examining how Communities of Practice can improve collaboration and inform foundational learning policy in Cameroon.',
      date: 'September 2025',
      icon: FileText,
      access: 'open',
      file: '/downloads/design-based-implementation-research-cycle-1.pdf',
    },
    {
      type: 'Learning Brief',
      title: 'Strengthening System Learning Through Evidence: Inaugural Report of the Regional Community of Practice in the Centre Region',
      description: 'Inaugural report of the Regional Community of Practice in the Centre Region, sharing early lessons on strengthening system-level learning through evidence.',
      date: 'February 2026',
      icon: BookOpen,
      access: 'open',
      file: '/downloads/cop-inaugural-report-2026.pdf',
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
                      {product.file ? (
                        <a
                          href={product.file}
                          download
                          className="inline-flex items-center gap-1.5 text-sm font-medium"
                          style={{ color: '#009e60' }}
                        >
                          <Download size={14} />
                          Download
                        </a>
                      ) : (
                        <button
                          className="inline-flex items-center gap-1.5 text-sm font-medium"
                          style={{ color: '#009e60' }}
                        >
                          <Download size={14} />
                          Download
                        </button>
                      )}
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
