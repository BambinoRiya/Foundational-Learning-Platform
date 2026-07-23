import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const workstreams = [
  {
    number: '01',
    title: 'Evidence Mapping & Synthesis',
    description:
      'Evidence Gap Map identifying where research is strong, limited, or absent across FLN outcomes, regions, population groups and intervention types.',
    link: '/evidence',
    linkLabel: 'View Evidence Hub',
  },
  {
    number: '02',
    title: 'Research Agenda & Evidence Rush',
    description:
      'Priority research questions from regional stakeholders. Traffic-light matrices showing evidence strength. Rapid syntheses commissioned on key gaps.',
    link: '/evidence',
    linkLabel: 'View Research Agenda',
  },
  {
    number: '03',
    title: 'Data Ecosystem & Transparency',
    description:
      'Mapped data sources with access pathways, metadata catalog and alignment with SIGE — transparency even where microdata cannot be made public.',
    link: '/data-hub',
    linkLabel: 'Explore Data Hub',
  },
  {
    number: '04',
    title: 'Systems Innovation & DBIR Cycles',
    description:
      'Political economy analysis, dashboard pilots, institutional capacity building and routines to embed evidence use in education decision cycles.',
    link: '/about',
    linkLabel: 'Learn More',
  },
]

const trustItems = [
  { label: '2 Regional CoPs', sub: 'Active' },
  { label: '1 Evidence Gap Map', sub: 'Published' },
  { label: '2 Learning Agendas', sub: 'Developed' },
  { label: 'Datasets Mapped', sub: '& Catalogued' },
  { label: 'Ministry Anchored', sub: 'MINEDUB' },
]

const outputs = [
  {
    tag: 'EVIDENCE PRODUCT',
    title: 'Evidence Gap Map (EGM)',
    description: 'Evidence coverage across FLN outcomes, interventions, regions and populations — interactive and downloadable.',
  },
  {
    tag: 'ANALYSIS',
    title: 'FLN Situational Analysis',
    description: 'Data ecosystem mapping: who holds what data, where gaps exist, and how the system currently functions.',
  },
  {
    tag: 'LEARNING AGENDA',
    title: 'Northwest Regional Learning Agenda',
    description: 'Priority research questions by theme and evidence readiness for the Northwest cluster.',
  },
  {
    tag: 'LEARNING AGENDA',
    title: 'Centre Regional Learning Agenda',
    description: 'Priority questions with Evidence Rush traffic-light matrix for the Centre region cluster.',
  },
]

const dataRows = [
  { name: 'SIGE Administrative Data', owner: 'MINEDUB', access: 'BY REQUEST', badge: 'badge-request' },
  { name: 'PASEC Assessment 2019', owner: 'CONFEMEN', access: 'OPEN', badge: 'badge-open' },
  { name: 'EGRA/EGMA NW Baseline', owner: 'eBASE Africa', access: 'BY REQUEST', badge: 'badge-request' },
  { name: 'School Mapping Database', owner: 'MINEDUB', access: 'RESTRICTED', badge: 'badge-restricted' },
  { name: 'UNICEF MICS 2018', owner: 'UNICEF / INS', access: 'OPEN', badge: 'badge-open' },
]

const gapRows = [
  { domain: 'Literacy', nw: 'strong', centre: 'strong', lit: 'strong', num: 'weak', equity: 'moderate', crisis: 'weak' },
]

const evidenceGaps = [
  {
    label: 'KEY GAP · NUMERACY',
    text: 'Very limited evidence on what works for numeracy acquisition across all Cameroon regions and population groups.',
  },
  {
    label: 'KEY GAP · CRISIS & CONFLICT CONTEXTS',
    text: 'Evidence on learning continuity in conflict-affected areas is sparse despite high policy relevance for the Northwest.',
  },
  {
    label: 'KEY GAP · LANGUAGE OF INSTRUCTION',
    text: 'Limited comparative evidence on bilingual and multilingual instructional approaches and FLN outcomes.',
  },
]

const joinPathways = [
  { icon: '✉', label: 'Join mailing list & updates' },
  { icon: '📊', label: 'Submit a dataset or metadata' },
  { icon: '📋', label: 'Register an FLN project' },
  { icon: '📄', label: 'Share research or a thesis' },
  { icon: '🤝', label: 'Request technical support' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,158,96,0.06) 0%, transparent 65%)',
        }}
      >
        <div className="cop-container relative z-10">
          {/* Partner logos strip */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            {['MINEDUB', 'eBASE Africa', 'Unlocking Data'].map((p) => (
              <span
                key={p}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  border: '1px solid rgba(0,158,96,0.2)',
                  color: '#9a8976',
                  letterSpacing: '0.06em',
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="eyebrow mb-4">Ministry of Basic Education · Cameroon</div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6"
              style={{
                color: '#4b371c',
                fontFamily: 'Georgia, "Times New Roman", serif',
                letterSpacing: '-0.02em',
              }}
            >
              Foundational Learning{' '}
              <span style={{ color: '#009e60' }}>Data &amp; Evidence</span>{' '}
              Platform
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-2xl text-pretty"
              style={{ color: '#5d4730' }}
            >
              Coordinating evidence, data and collective action to improve foundational literacy and
              numeracy across Cameroon — anchored with MINEDUB, active in two regional Communities
              of Practice.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/evidence-hub"
                className="px-5 py-3 text-sm font-semibold rounded-lg transition-all"
                style={{ background: '#009e60', color: '#ffffff' }}
              >
                Explore Evidence
              </Link>
              <Link
                href="/data-hub"
                className="px-5 py-3 text-sm font-semibold rounded-lg transition-all"
                style={{
                  background: 'rgba(0,158,96,0.1)',
                  border: '1px solid rgba(0,158,96,0.3)',
                  color: '#009e60',
                }}
              >
                View Available Data
              </Link>
              <Link
                href="/regions"
                className="px-5 py-3 text-sm font-semibold rounded-lg transition-all"
                style={{
                  background: 'rgba(207,207,225,0.06)',
                  border: '1px solid rgba(207,207,225,0.15)',
                  color: '#5d4730',
                }}
              >
                Regional Communities
              </Link>
              <Link
                href="/get-involved"
                className="px-5 py-3 text-sm font-semibold rounded-lg transition-all"
                style={{
                  background: '#ffffff',
                  border: '1px solid #cfcfe1',
                  color: '#4b371c',
                }}
              >
                Join the CoP
              </Link>
            </div>
          </div>

          {/* Regional map placeholder */}
          <div className="mt-14 flex items-center gap-8">
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{ background: 'rgba(0,158,96,0.06)', border: '1px solid rgba(0,158,96,0.12)' }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: '#009e60', boxShadow: '0 0 8px rgba(0,158,96,0.6)' }}
              />
              <span className="text-sm font-medium" style={{ color: '#5d4730' }}>
                Northwest CoP
              </span>
            </div>
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{ background: 'rgba(0,158,96,0.06)', border: '1px solid rgba(0,158,96,0.12)' }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: '#009e60', boxShadow: '0 0 8px rgba(0,158,96,0.6)' }}
              />
              <span className="text-sm font-medium" style={{ color: '#5d4730' }}>
                Centre CoP
              </span>
            </div>
            <span className="text-sm" style={{ color: '#9a8976' }}>
              2 Active Regional Clusters
            </span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div
        className="border-y"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: 'rgba(255,255,255,0.5)' }}
      >
        <div className="cop-container py-5">
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#009e60' }}
                />
                <span>
                  <span className="text-sm font-semibold" style={{ color: '#4b371c' }}>
                    {item.label}
                  </span>{' '}
                  <span className="text-sm" style={{ color: '#9a8976' }}>
                    {item.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WORKSTREAMS ── */}
      <section className="py-24">
        <div className="cop-container">
          <div className="eyebrow mb-3">What We Do</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Four integrated workstreams
          </h2>
          <p className="text-base mb-12 max-w-2xl" style={{ color: '#9a8976' }}>
            The platform operates across evidence, data, research and systems — designed to reduce
            fragmentation and strengthen decision-making at every level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workstreams.map((ws) => (
              <div
                key={ws.number}
                className="glass-card p-6 group"
                style={{ transition: 'border-color 0.2s' }}
              >
                <div
                  className="text-xs font-bold mb-4 font-mono"
                  style={{ color: '#009e60', letterSpacing: '0.1em' }}
                >
                  {ws.number}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                >
                  {ws.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#9a8976' }}>
                  {ws.description}
                </p>
                <Link
                  href={ws.link}
                  className="text-xs font-semibold transition-colors"
                  style={{ color: '#009e60', letterSpacing: '0.05em' }}
                >
                  {ws.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGIONAL COMMUNITIES ── */}
      <section
        className="py-24"
        style={{ background: '#f5f9f7', borderTop: '1px solid rgba(0,158,96,0.08)' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-3">Regional Communities</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Two active regional clusters
          </h2>
          <p className="text-base mb-12 max-w-2xl" style={{ color: '#9a8976' }}>
            Regional proximity enables context-specific evidence and data work. Each cluster has its
            own learning agenda, governance charter and evidence products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Northwest */}
            <div
              className="rounded-xl p-8 flex flex-col"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,158,96,0.2)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow">Northwest Region</span>
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
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Conflict-sensitive system strengthening
              </h3>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'Conflict-sensitive data strengthening and learning continuity',
                  'Regional CoP charter and governance manifesto adopted',
                  'Regional learning agenda — 8 stakeholder priority questions',
                  'Evidence Rush: traffic-light matrix published',
                  'Evidence gaps: access, equity, language, crisis impacts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4b371c' }}>
                    <span style={{ color: '#009e60', marginTop: '2px', flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/regions/northwest"
                className="mt-auto text-sm font-semibold self-start"
                style={{ color: '#009e60' }}
              >
                View Northwest Page →
              </Link>
            </div>

            {/* Centre */}
            <div
              className="rounded-xl p-8 flex flex-col"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,158,96,0.2)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow">Centre Region</span>
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
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Policy anchoring &amp; ecosystem expansion
              </h3>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  'National administrative hub — coordination with policy actors',
                  'Data fragmentation and access barriers identified',
                  'Regional learning agenda — 6 priority domains articulated',
                  'Evidence Rush outputs: rapid synthesis underway',
                  'FLN ecosystem expansion and actor mapping',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4b371c' }}>
                    <span style={{ color: '#009e60', marginTop: '2px', flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/regions/centre"
                className="mt-auto text-sm font-semibold self-start"
                style={{ color: '#009e60' }}
              >
                View Centre Page →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED OUTPUTS ── */}
      <section className="py-24">
        <div className="cop-container">
          <div className="eyebrow mb-3">What We Have Produced</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Featured outputs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outputs.map((o, i) => (
              <div
                key={i}
                className="glass-card p-5 flex flex-col"
              >
                <span
                  className="text-xs font-bold mb-3 block"
                  style={{ color: '#009e60', letterSpacing: '0.08em' }}
                >
                  {o.tag}
                </span>
                <h4
                  className="text-base font-bold mb-3 leading-snug"
                  style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                >
                  {o.title}
                </h4>
                <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: '#9a8976' }}>
                  {o.description}
                </p>
                <Link
                  href="/reports"
                  className="text-xs font-semibold mt-auto"
                  style={{
                    color: '#009e60',
                    borderTop: '1px solid rgba(0,158,96,0.12)',
                    paddingTop: '0.75rem',
                    display: 'block',
                  }}
                >
                  Download PDF →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVIDENCE HUB TEASER ── */}
      <section
        className="py-24"
        style={{ background: '#f5f9f7', borderTop: '1px solid rgba(0,158,96,0.08)' }}
      >
        <div className="cop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="eyebrow mb-3">Evidence Hub</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Where is the evidence — and where are the gaps?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9a8976' }}>
                Evidence is concentrated in literacy. Numeracy evidence remains limited across all
                regions. The platform exists to make evidence discoverable, policy-relevant and
                actionable.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {evidenceGaps.map((gap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg"
                    style={{
                      background: 'rgba(0,158,96,0.05)',
                      border: '1px solid rgba(0,158,96,0.12)',
                    }}
                  >
                    <div
                      className="text-xs font-bold mb-1"
                      style={{ color: '#4b7a5c', letterSpacing: '0.08em' }}
                    >
                      {gap.label}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#9a8976' }}>
                      {gap.text}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/evidence"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: 'rgba(0,158,96,0.1)',
                  border: '1px solid rgba(0,158,96,0.3)',
                  color: '#009e60',
                }}
              >
                Explore Full Evidence Hub →
              </Link>
            </div>

            {/* EGM Preview Grid */}
            <div>
              <div className="eyebrow mb-4">Evidence Gap Map — Coverage Snapshot</div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(0,158,96,0.12)' }}
              >
                <div
                  className="grid text-xs font-semibold"
                  style={{
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    background: '#009e60',
                    borderBottom: '1px solid rgba(0,158,96,0.2)',
                  }}
                >
                  {['Outcome', 'NW', 'Centre', 'Littoral', 'Other'].map((h) => (
                    <div key={h} className="px-3 py-3 font-semibold" style={{ color: '#ffffff' }}>
                      {h}
                    </div>
                  ))}
                </div>
                {[
                  { label: 'Literacy', values: ['strong', 'strong', 'moderate', 'weak'] },
                  { label: 'Numeracy', values: ['weak', 'weak', 'none', 'none'] },
                  { label: 'Equity / Girls', values: ['moderate', 'partial', 'weak', 'none'] },
                  { label: 'Crisis / Conflict', values: ['partial', 'none', 'none', 'none'] },
                  { label: 'Language', values: ['weak', 'partial', 'weak', 'none'] },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid text-xs"
                    style={{
                      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                      borderBottom: i < 4 ? '1px solid rgba(0,158,96,0.06)' : 'none',
                    }}
                  >
                    <div className="px-3 py-3 font-medium" style={{ color: '#5d4730' }}>
                      {row.label}
                    </div>
                    {row.values.map((v, j) => (
                      <div key={j} className="px-3 py-3 flex items-center">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            background:
                              v === 'strong'
                                ? '#009e60'
                                : v === 'moderate' || v === 'partial'
                                ? '#F0C24B'
                                : v === 'weak'
                                ? '#d7936b'
                                : '#e0e0e0',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
                <div
                  className="px-3 py-3 flex items-center gap-5 flex-wrap text-xs"
                  style={{
                    background: '#f5f9f7',
                    borderTop: '1px solid rgba(0,158,96,0.1)',
                  }}
                >
                  {[
                    { color: '#009e60', label: 'Strong' },
                    { color: '#F0C24B', label: 'Moderate' },
                    { color: '#d7936b', label: 'Limited' },
                    { color: '#e0e0e0', label: 'None' },
                  ].map((leg) => (
                    <div key={leg.label} className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: leg.color }}
                      />
                      <span style={{ color: '#9a8976' }}>{leg.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA HUB TEASER ── */}
      <section className="py-24">
        <div className="cop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Data table */}
            <div>
              <div className="eyebrow mb-3">Data Hub</div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(0,158,96,0.12)' }}
              >
                <div
                  className="grid text-xs font-semibold"
                  style={{
                    gridTemplateColumns: '2fr 1fr 1fr',
                    background: '#009e60',
                    borderBottom: '1px solid rgba(0,158,96,0.2)',
                  }}
                >
                  {['Dataset', 'Owner', 'Access'].map((h) => (
                    <div key={h} className="px-4 py-3 font-semibold" style={{ color: '#ffffff', letterSpacing: '0.05em' }}>
                      {h}
                    </div>
                  ))}
                </div>
                {dataRows.map((row, i) => (
                  <div
                    key={i}
                    className="grid text-sm items-center"
                    style={{
                      gridTemplateColumns: '2fr 1fr 1fr',
                      borderBottom: i < dataRows.length - 1 ? '1px solid rgba(0,158,96,0.06)' : 'none',
                    }}
                  >
                    <div className="px-4 py-3 font-medium" style={{ color: '#5d4730' }}>
                      {row.name}
                    </div>
                    <div className="px-4 py-3 text-xs" style={{ color: '#9a8976' }}>
                      {row.owner}
                    </div>
                    <div className="px-4 py-3">
                      <span className={row.badge}>{row.access}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs" style={{ color: '#9a8976' }}>
                We publish metadata and access pathways even when microdata cannot be made fully
                public.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Mapped data sources with clear access pathways
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9a8976' }}>
                The Data Hub is a growing catalog of education datasets relevant to foundational
                learning in Cameroon. It maps what data exists, who holds it, and how to access it —
                so that researchers and decision-makers can find and use the data they need.
              </p>
              <Link
                href="/data-hub"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: 'rgba(0,158,96,0.1)',
                  border: '1px solid rgba(0,158,96,0.3)',
                  color: '#009e60',
                }}
              >
                Explore Available Data →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED CTA ── */}
      <section
        className="py-24"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,158,96,0.07) 0%, transparent 70%)',
          borderTop: '1px solid rgba(0,158,96,0.08)',
        }}
      >
        <div className="cop-container text-center">
          <div className="eyebrow mb-4">Get Involved</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Join or contribute to the CoP
          </h2>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: '#9a8976' }}>
            The platform grows through collective contribution — from government partners,
            researchers, CSOs and development actors.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              'Join mailing list',
              'Submit a dataset',
              'Register an FLN project',
              'Share research',
              'Request support',
            ].map((p, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,158,96,0.25)',
                  color: '#4b371c',
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
            style={{ background: '#009e60', color: '#ffffff' }}
          >
            Join the CoP →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
