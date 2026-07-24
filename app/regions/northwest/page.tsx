import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const researchQuestions = [
  'How can we strengthen teacher retention, especially in rural areas?',
  'How can we motivate data actors to share data in a trustworthy, timely and safe manner?',
  'How can we effectively collect and use data on teachers\' Knowledge, Attitude, and Practice (KAP)?',
  'How can educational institutions adapt to better accommodate learners with disabilities?',
  'Why are FLN outcomes declining despite the increasing number of trained teachers?',
  'How can we strengthen parental and caregiver involvement in children\'s learning?',
  'Which factors most influence learning outcomes in the Northwest Region?',
  'What support do FLN stakeholders need to produce, report, share and use data effectively?',
]

const governingBoard = [
  { role: 'Chair', name: '[To be confirmed]', org: 'Regional Delegation of MINEDUB, Northwest' },
  { role: 'Technical Secretariat', name: '—', org: 'eBASE Africa' },
  { role: 'Board Member', name: '—', org: 'UCCC/NW' },
  { role: 'Board Member', name: '[To be confirmed]', org: '[Organisation to be confirmed]' },
  { role: 'Board Member', name: '[To be confirmed]', org: '[Organisation to be confirmed]' },
]

export default function NorthwestPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,158,96,0.08) 0%, transparent 60%)',
        }}
      >
        <div className="cop-container">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/regions"
              className="text-xs font-medium transition-colors hover:text-primary"
              style={{ color: '#9a8976' }}
            >
              ← Regions
            </Link>
            <span style={{ color: '#9a8976' }}>/</span>
            <span className="eyebrow">Northwest Region</span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <h1
              className="text-4xl md:text-6xl font-bold max-w-3xl text-balance"
              style={{ color: '#4b371c', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
            >
              Northwest Regional CoP
            </h1>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full self-start"
              style={{
                background: 'rgba(0,158,96,0.15)',
                color: '#009e60',
                border: '1px solid rgba(0,158,96,0.3)',
              }}
            >
              ACTIVE
            </span>
          </div>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#5d4730' }}>
            The Northwest Regional CoP on Foundational Learning Data was established in November
            2025 in Bamenda. It operates in one of Cameroon&apos;s most complex education contexts —
            a region where socio-political conflict has disrupted schooling and fragmented data
            systems, yet where significant evidence continues to be generated every day.
          </p>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-16 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-8">At a Glance</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '8', label: 'Priority Research Questions' },
              { value: '3', label: 'Convening Organisations' },
              { value: 'Nov 2025', label: 'CoP Established' },
              { value: 'Bamenda', label: 'CoP Headquarters' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl text-center"
                style={{
                  background: '#009e60',
                  border: '1px solid rgba(0,158,96,0.2)',
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: '#ffffff' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAMENDA CHARTER ── */}
      <section
        className="py-16 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.06)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-4">Governing Instrument</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                The Bamenda Charter
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5d4730' }}>
                The Bamenda Charter is a binding regional framework ratified at the inaugural
                November 2025 workshop. It establishes the governance, ethics and technical
                protocols for collaborative data use in the Northwest Region.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#5d4730' }}>
                The charter includes protocols for safe data sharing and a mandate for
                offline-first digital architecture — a direct response to the region&apos;s connectivity
                and security realities.
              </p>
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{
                  background: '#009e60',
                  color: '#ffffff',
                }}
              >
                Download PDF →
              </button>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(0,158,96,0.04)',
                border: '2px solid rgba(0,158,96,0.15)',
              }}
            >
              <div className="text-xs font-bold mb-4" style={{ color: '#009e60', letterSpacing: '0.1em' }}>
                CHARTER KEY PROVISIONS
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  'Governance, ethics and technical protocols for collaborative data use',
                  'Safe data sharing protocols for conflict-affected context',
                  'Mandate for offline-first digital architecture',
                  'Security-conscious data management standards',
                  'Multi-stakeholder decision-making framework',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#5d4730' }}>
                    <span
                      className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: 'rgba(0,158,96,0.15)', color: '#009e60' }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="py-16 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-6">Governance</div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Governing Board
          </h2>
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(0,158,96,0.12)' }}
          >
            <div
              className="grid text-xs font-semibold uppercase"
              style={{
                gridTemplateColumns: '1fr 1fr 2fr',
                background: '#009e60',
                borderBottom: '1px solid rgba(0,158,96,0.2)',
                color: '#ffffff',
                letterSpacing: '0.05em',
              }}
            >
              {['Role', 'Name', 'Organisation'].map((h) => (
                <div key={h} className="px-5 py-3">{h}</div>
              ))}
            </div>
            {governingBoard.map((member, i) => (
              <div
                key={i}
                className="grid items-center text-sm"
                style={{
                  gridTemplateColumns: '1fr 1fr 2fr',
                  borderBottom: i < governingBoard.length - 1 ? '1px solid rgba(0,158,96,0.06)' : 'none',
                }}
              >
                <div className="px-5 py-4 font-semibold" style={{ color: '#009e60' }}>
                  {member.role}
                </div>
                <div className="px-5 py-4" style={{ color: '#5d4730' }}>
                  {member.name}
                </div>
                <div className="px-5 py-4" style={{ color: '#9a8976' }}>
                  {member.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING AGENDA ── */}
      <section
        className="py-16 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.06)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Learning Agenda</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            2025–2026 Research Questions
          </h2>
          <p className="text-base mb-8 max-w-2xl" style={{ color: '#5d4730' }}>
            The following eight research questions were formulated and adopted by consensus at the
            inaugural workshop. They will guide data collection, evidence sprints and synthesis
            activities throughout the 2025–2026 CoP cycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {researchQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,158,96,0.15)',
                }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'rgba(0,158,96,0.15)',
                    color: '#009e60',
                    border: '1px solid rgba(0,158,96,0.25)',
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#5d4730' }}>
                  {q}
                </p>
              </div>
            ))}
          </div>

          <div
            className="p-4 rounded-lg flex items-center gap-3"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(0,158,96,0.15)',
            }}
          >
            <span className="text-xs" style={{ color: '#5d4730' }}>
              Two alternate questions were also adopted and may be activated during the cycle as priorities evolve.
            </span>
          </div>

          <div className="mt-6">
            <a
              href="/downloads/research-agenda-nw-region-2.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{
                background: '#009e60',
                color: '#ffffff',
              }}
            >
              Download Full Learning Agenda →
            </a>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section
        className="py-20 border-t text-center"
        style={{
          borderColor: 'rgba(0,158,96,0.06)',
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,158,96,0.06) 0%, transparent 70%)',
        }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Get Involved</div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Join the Northwest CoP
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#5d4730' }}>
            Membership is open and free to any individual or organisation working on foundational
            learning data and evidence in the Northwest Region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ background: '#009e60', color: '#ffffff' }}
            >
              Join Now →
            </Link>
            <Link
              href="/regions"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,158,96,0.2)',
                color: '#4b371c',
              }}
            >
              View All Regions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
