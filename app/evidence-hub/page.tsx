'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const evidenceRushData = [
  { domain: 'Governance and system coherence', northwest: 'Partial', centre: 'Partial' },
  { domain: 'Pedagogy and teacher practice', northwest: 'Partial', centre: 'Weak' },
  { domain: 'Inclusion, equity and social and emotional learning', northwest: 'Weak', centre: 'Weak' },
  { domain: 'Parents, communities and learner behaviour', northwest: 'Partial', centre: 'Partial' },
  { domain: 'Financing, decentralisation and resources', northwest: 'Weak', centre: 'Weak' },
  { domain: 'Technology and education data systems', northwest: 'Partial', centre: 'Weak' },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'Strong':
      return { bg: '#d4edda', text: '#155724' }
    case 'Partial':
      return { bg: '#fff3cd', text: '#856404' }
    case 'Weak':
      return { bg: '#f8d7da', text: '#721c24' }
    default:
      return { bg: '#f5f5f5', text: '#666666' }
  }
}

export default function EvidenceHub() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
          <div className="hero-glow absolute inset-0" />
          <div className="cop-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Evidence Hub
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#5d4730' }}>
                The Evidence Hub brings together the evidence produced, reviewed and mapped through the CoP&apos;s
                work across both regions. It is designed to show what is known about foundational learning in
                Cameroon, where the evidence is strong, where it is partial, and where the critical gaps lie.
              </p>
            </div>
          </div>
        </section>

        {/* Evidence Gap Map Section */}
        <section className="border-b border-border-subtle py-16 md:py-24">
          <div className="cop-container">
            <p className="eyebrow mb-4">Evidence Gap Map</p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What the evidence tells us
            </h2>
            <p className="mb-6 max-w-3xl text-base leading-relaxed" style={{ color: '#5d4730' }}>
              The Cameroon FLN Evidence Gap Map (EGM) is the CoP&apos;s primary evidence mapping tool. It
              provides a structured visual overview of existing research and evidence on foundational literacy and
              numeracy across Cameroon, organised by intervention type and outcome.
            </p>

            {/* Highlighted quote box */}
            <div
              className="mb-8 max-w-3xl border-l-4 py-4 pl-6"
              style={{ borderColor: '#009e60', background: '#f5f9f7' }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#5d4730' }}>
                The EGM makes it possible to see at a glance where evidence is concentrated, where it is thin,
                and where targeted research is most urgently needed. It draws on systematic searches of
                published and grey literature, including government reports, NGO evaluations, academic{' '}
                <Link href="#" className="underline" style={{ color: '#009e60' }}>
                  studies
                </Link>{' '}
                and assessment data.
              </p>
            </div>

            {/* Embed placeholder */}
            <div
              className="mb-6 max-w-3xl border-l-4 py-4 pl-6"
              style={{ borderColor: '#f0c24b', background: '#fffbeb' }}
            >
              <p className="text-sm italic" style={{ color: '#92400e' }}>
                Embed interactive Evidence Gap Map here (EPPI-Reviewer / EGM tool embed code)
              </p>
            </div>

            {/* PDF download */}
            <div
              className="max-w-3xl border-l-4 py-4 pl-6"
              style={{ borderColor: '#cfcfe1', background: '#fafafa' }}
            >
              <p className="text-sm" style={{ color: '#4b371c' }}>
                Download the full Evidence Gap Map:{' '}
                <Link href="#" className="underline" style={{ color: '#009e60' }}>
                  [Insert PDF download link]
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Evidence Rush Section */}
        <section className="border-b border-border-subtle py-16 md:py-24" style={{ background: '#f5f9f7' }}>
          <div className="cop-container">
            <p className="eyebrow mb-4">Evidence Rush</p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What we found in the regions
            </h2>
            <p className="mb-4 max-w-3xl text-base leading-relaxed" style={{ color: '#5d4730' }}>
              Evidence Rush exercises were conducted in both the Northwest and Centre regions as part of the
              inaugural CoP workshops. Stakeholders assessed existing evidence against each region&apos;s{' '}
              <Link href="#" className="underline" style={{ color: '#009e60' }}>
                Learning Agenda
              </Link>{' '}
              using a traffic light approach: green for strong evidence, amber for partial evidence, and red
              for weak or absent evidence.
            </p>
            <p className="mb-10 max-w-3xl text-base leading-relaxed" style={{ color: '#5d4730' }}>
              The table below summarises findings by thematic domain across both regions. Full findings are
              available in the regional Learning Agenda documents.
            </p>

            {/* Evidence Rush Table */}
            <div className="max-w-4xl overflow-hidden rounded-lg border" style={{ borderColor: 'rgba(0,158,96,0.15)' }}>
              {/* Table Header */}
              <div
                className="grid text-sm font-semibold"
                style={{
                  gridTemplateColumns: '2fr 1fr 1fr',
                  background: '#009e60',
                  color: '#ffffff',
                }}
              >
                <div className="px-6 py-4">Thematic domain</div>
                <div className="px-6 py-4 text-center">Northwest</div>
                <div className="px-6 py-4 text-center">Centre</div>
              </div>

              {/* Table Rows */}
              {evidenceRushData.map((row, idx) => (
                <div
                  key={idx}
                  className="grid text-sm"
                  style={{
                    gridTemplateColumns: '2fr 1fr 1fr',
                    background: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                    borderTop: '1px solid rgba(0,158,96,0.1)',
                  }}
                >
                  <div className="px-6 py-4 font-medium" style={{ color: '#4b371c' }}>
                    {row.domain}
                  </div>
                  <div className="px-6 py-4 text-center">
                    <span
                      className="inline-block rounded px-3 py-1 text-xs font-semibold"
                      style={{
                        background: getStatusColor(row.northwest).bg,
                        color: getStatusColor(row.northwest).text,
                      }}
                    >
                      {row.northwest}
                    </span>
                  </div>
                  <div className="px-6 py-4 text-center">
                    <span
                      className="inline-block rounded px-3 py-1 text-xs font-semibold"
                      style={{
                        background: getStatusColor(row.centre).bg,
                        color: getStatusColor(row.centre).text,
                      }}
                    >
                      {row.centre}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div
              className="mt-8 max-w-4xl border-l-4 py-4 pl-6"
              style={{ borderColor: '#f0c24b', background: '#fffbeb' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#92400e' }}>
                Note: Traffic light ratings are based on stakeholder assessments during the Evidence Rush
                exercises and should be read as indicative rather than exhaustive. They reflect what is known
                and available to CoP members, not a comprehensive global literature review.
              </p>
            </div>
          </div>
        </section>

        {/* Systematic Reviews Section */}
        <section className="py-16 md:py-24">
          <div className="cop-container">
            <p className="eyebrow mb-4">Systematic Reviews and Syntheses</p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Synthesised evidence
            </h2>
            <p className="max-w-3xl text-base leading-relaxed" style={{ color: '#5d4730' }}>
              The CoP draws on systematic reviews and evidence syntheses to anchor its{' '}
              <Link href="#" className="underline" style={{ color: '#009e60' }}>
                Learning Agenda
              </Link>{' '}
              questions in the best available global and regional evidence. These are reviewed and discussed
              during CoP evidence sprints and used to contextualise local findings.
            </p>

            {/* Divider */}
            <div className="mt-12 border-t" style={{ borderColor: 'rgba(0,158,96,0.15)' }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
