import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const regions = [
  {
    slug: 'northwest',
    name: 'Northwest Region',
    subtitle: 'Conflict-sensitive system strengthening',
    description:
      'The Northwest Regional CoP was established in November 2025 in Bamenda. It operates in one of Cameroon\'s most complex education contexts — a region where socio-political conflict has disrupted schooling and fragmented data systems, yet where significant evidence on foundational learning continues to be generated every day.',
    stats: [
      { value: '8', label: 'Priority Research Questions' },
      { value: '3', label: 'Convening Organisations' },
      { value: 'Nov 2025', label: 'Established' },
    ],
    focusAreas: [
      'Teacher retention in conflict-affected areas',
      'Safe and trustworthy data sharing protocols',
      'Learner disability inclusion and accommodations',
      'Parental and caregiver engagement in learning',
      'FLN outcomes despite increasing trained teachers',
    ],
    charter: 'The Bamenda Charter',
    color: '#009e60',
  },
  {
    slug: 'centre',
    name: 'Centre Region',
    subtitle: 'Policy anchoring & ecosystem expansion',
    description:
      'The Centre Regional CoP was inaugurated in Yaoundé under the leadership of MINEDUB and in partnership with eBASE Africa. Rather than launching new isolated projects, the CoP was established as a permanent multi-stakeholder platform for sustained system learning, structured around shared priorities and collective sense-making.',
    stats: [
      { value: '6', label: 'Priority Learning Domains' },
      { value: '2', label: 'Convening Organisations' },
      { value: '2025', label: 'Established' },
    ],
    focusAreas: [
      'Governance and system coherence',
      'Pedagogy and teacher practice',
      'Inclusion, equity and social-emotional learning',
      'Parents, communities and learner behaviour',
      'Financing, decentralisation and resources',
      'Technology and education data systems',
    ],
    color: '#F0C24B',
  },
]

export default function RegionsPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,158,96,0.07) 0%, transparent 60%)',
        }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Regional Communities</div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
          >
            Two active regional clusters
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#5d4730' }}>
            Regional proximity enables context-specific evidence and data work. Each cluster has its
            own learning agenda, governance charter and evidence products, while contributing to a
            shared national knowledge base.
          </p>
        </div>
      </section>

      {/* ── REGION CARDS ── */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container flex flex-col gap-8">
          {regions.map((region) => (
            <div
              key={region.slug}
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,158,96,0.2)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,158,96,0.15)',
                        color: '#009e60',
                        border: '1px solid rgba(0,158,96,0.3)',
                      }}
                    >
                      ACTIVE
                    </span>
                    <span className="eyebrow" style={{ color: region.color }}>
                      {region.name}
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4 text-balance"
                    style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                  >
                    {region.subtitle}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#5d4730' }}>
                    {region.description}
                  </p>

                  {region.charter && (
                    <div
                      className="flex items-center gap-3 p-3 rounded-lg mb-6 w-fit"
                      style={{
                        background: 'rgba(0,158,96,0.06)',
                        border: '1px solid rgba(0,158,96,0.15)',
                      }}
                    >
                      <span className="text-xs" style={{ color: '#5d4730' }}>
                        Governing instrument:
                      </span>
                      <span className="text-xs font-semibold" style={{ color: '#009e60' }}>
                        {region.charter}
                      </span>
                    </div>
                  )}

                  <Link
                    href={`/regions/${region.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                    style={{
                      background: 'rgba(0,158,96,0.1)',
                      border: '1px solid rgba(0,158,96,0.3)',
                      color: '#009e60',
                    }}
                  >
                    View {region.name} →
                  </Link>
                </div>

                <div className="lg:w-72">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {region.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl"
                        style={{
                          background: '#009e60',
                        }}
                      >
                        <div
                          className="text-lg font-bold mb-1"
                          style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs leading-tight" style={{ color: '#ffffff' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Focus areas */}
                  <div>
                    <div className="eyebrow mb-3">Focus Areas</div>
                    <ul className="flex flex-col gap-2">
                      {region.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4b371c' }}>
                          <span style={{ color: '#009e60', marginTop: '3px', flexShrink: 0 }}>◆</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONNECTING SECTION ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.06)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">What Connects Both Regions</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            One shared platform, two regional contexts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Shared Evidence Base', d: 'Both regions contribute to and draw from a common Evidence Gap Map and evidence synthesis process.' },
              { t: 'MINEDUB Anchoring', d: 'Both CoPs are chaired by the Regional Delegate of MINEDUB, ensuring ministry integration and policy relevance.' },
              { t: 'Common Methodology', d: 'Both use the same Evidence Rush methodology, learning agenda format and CoP governance structure.' },
              { t: 'eBASE Secretariat', d: 'eBASE Africa serves as Technical Secretariat for both regions, providing coordination and technical support.' },
            ].map((item) => (
              <div
                key={item.t}
                className="p-5 rounded-xl"
                style={{ background: '#ffffff', border: '1px solid rgba(0,158,96,0.15)' }}
              >
                <h4
                  className="text-base font-bold mb-2"
                  style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                >
                  {item.t}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#5d4730' }}>
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 border-t text-center"
        style={{
          borderColor: 'rgba(0,158,96,0.06)',
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,158,96,0.06) 0%, transparent 70%)',
        }}
      >
        <div className="cop-container">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Join a regional cluster
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#5d4730' }}>
            Membership is open and free to anyone working on foundational learning in Cameroon.
            Members may join one or both regional clusters.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ background: '#009e60', color: '#ffffff' }}
            >
              Join the CoP →
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{
                background: 'rgba(215,224,218,0.06)',
                border: '1px solid rgba(215,224,218,0.15)',
                color: '#5d4730',
              }}
            >
              Learn More About the CoP
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
