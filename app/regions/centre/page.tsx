import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const learningDomains = [
  {
    domain: 'Domain 1',
    title: 'Governance and System Coherence',
    questions: [
      'How do coordination and accountability arrangements across central, decentralised and school levels affect foundational learning outcomes?',
      'Where do feedback mechanisms between schools, councils and the Ministry fail to inform corrective action?',
      'Is there a case for a dedicated national policy or strategic framework focused specifically on foundational learning?',
    ],
    evidence: 'Partial',
    evidenceColor: '#F0C24B',
  },
  {
    domain: 'Domain 2',
    title: 'Pedagogy and Teacher Practice',
    questions: [
      'Which classroom practices are most consistently associated with improved foundational literacy and numeracy outcomes?',
      'To what extent do current teacher training and supervision approaches influence classroom instruction and learner progress?',
    ],
    evidence: 'Weak',
    evidenceColor: '#d7936b',
  },
  {
    domain: 'Domain 3',
    title: 'Inclusion, Equity and Social-Emotional Learning',
    questions: [
      'Which inclusive education approaches are effective for learners with disabilities and other vulnerable groups?',
      'Why do inclusive education policies encounter persistent implementation challenges at the school level?',
      'How do social and emotional learning competencies influence foundational learning outcomes?',
    ],
    evidence: 'Weak',
    evidenceColor: '#d7936b',
  },
  {
    domain: 'Domain 4',
    title: 'Parents, Communities and Learner Behaviour',
    questions: [
      'How does parental and community engagement shape early grade learning outcomes?',
      'What role do learner motivation and attitudes toward schooling play in learning trajectories?',
      'How does the age of school entry affect foundational learning progression?',
    ],
    evidence: 'Partial',
    evidenceColor: '#F0C24B',
  },
  {
    domain: 'Domain 5',
    title: 'Financing, Decentralisation and Resources',
    questions: [
      'How do education investments translate into learning-supportive conditions at the school level?',
      'How do financing arrangements between the State and local councils affect the quality and equity of foundational learning provision?',
      'What accountability mechanisms ensure that decentralised education spending supports learning outcomes?',
    ],
    evidence: 'Weak',
    evidenceColor: '#d7936b',
  },
  {
    domain: 'Domain 6',
    title: 'Technology and Education Data Systems',
    questions: [
      'How can existing education information systems better support learning-focused decision-making?',
      'Which digital tools are relevant, credible and appropriate for improving data timeliness, analysis and feedback at different system levels?',
    ],
    evidence: 'Weak',
    evidenceColor: '#d7936b',
  },
]

const governingBoard = [
  { role: 'Chair', name: '[To be confirmed]', org: 'Regional Delegation of MINEDUB, Centre' },
  { role: 'Technical Secretariat', name: '—', org: 'eBASE Africa' },
  { role: 'Board Member', name: '[To be confirmed]', org: '[Organisation to be confirmed]' },
  { role: 'Board Member', name: '[To be confirmed]', org: '[Organisation to be confirmed]' },
  { role: 'Board Member', name: '[To be confirmed]', org: '[Organisation to be confirmed]' },
]

export default function CentrePage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(240,194,75,0.06) 0%, transparent 60%)',
        }}
      >
        <div className="cop-container">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/regions" className="text-xs font-medium hover:text-primary" style={{ color: '#9a8976' }}>
              ← Regions
            </Link>
            <span style={{ color: '#9a8976' }}>/</span>
            <span className="eyebrow">Centre Region</span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <h1
              className="text-4xl md:text-6xl font-bold max-w-3xl text-balance"
              style={{ color: '#4b371c', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
            >
              Centre Regional CoP
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
            The Centre Regional CoP was inaugurated in Yaoundé under the leadership of MINEDUB and
            in partnership with eBASE Africa. Established as a permanent multi-stakeholder platform
            for sustained system learning, structured around shared priorities and the routine use of
            evidence to improve foundational learning outcomes for children aged 4 to 10 years.
          </p>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-16 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-8">At a Glance</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '6', label: 'Priority Learning Domains' },
              { value: '2', label: 'Convening Organisations' },
              { value: '2025', label: 'CoP Established' },
              { value: 'Yaoundé', label: 'CoP Headquarters' },
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

      {/* ── GOVERNANCE ── */}
      <section
        className="py-16 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.06)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-6">Governance</div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Governing Board
          </h2>
          <p className="text-base mb-8 max-w-2xl" style={{ color: '#9a8976' }}>
            MINEDUB serves as the institutional chair of the Centre Regional CoP, with eBASE Africa as
            Technical Secretariat. Task-based working groups aligned to the priority learning domains
            may be established as the CoP matures.
          </p>
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
                <div className="px-5 py-4 font-semibold" style={{ color: '#4b371c' }}>
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

      {/* ── LEARNING DOMAINS ── */}
      <section className="py-16 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-4">Learning Agenda</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Priority learning domains and questions
          </h2>
          <p className="text-base mb-10 max-w-2xl" style={{ color: '#9a8976' }}>
            The Learning Agenda was articulated and validated in plenary at the inaugural Yaoundé
            meeting. It is organised across six domains reflecting the Centre Region&apos;s most pressing
            evidence gaps.
          </p>

          <div className="flex flex-col gap-5">
            {learningDomains.map((domain, di) => (
              <div
                key={di}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(0,158,96,0.1)' }}
              >
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{ background: '#009e60' }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-bold"
                      style={{ color: '#ffffff', letterSpacing: '0.08em' }}
                    >
                      {domain.domain}
                    </span>
                    <h3
                      className="text-base font-bold"
                      style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                      {domain.title}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-4"
                    style={{
                      background: `${domain.evidenceColor}18`,
                      color: domain.evidenceColor,
                      border: `1px solid ${domain.evidenceColor}40`,
                    }}
                  >
                    {domain.evidence}
                  </span>
                </div>
                <div
                  className="px-6 py-4"
                  style={{ background: '#f5f9f7' }}
                >
                  <ul className="flex flex-col gap-3">
                    {domain.questions.map((q, qi) => (
                      <li key={qi} className="flex items-start gap-3 text-sm" style={{ color: '#5d4730' }}>
                        <span
                          className="flex-shrink-0 text-xs font-mono"
                          style={{ color: '#9a8976', minWidth: '24px', marginTop: '1px' }}
                        >
                          {di + 1}.{qi + 1}
                        </span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/downloads/cop-workshop-yaounde-learning-agenda.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{
                background: '#009e60',
                border: '1px solid rgba(0,158,96,0.3)',
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
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(240,194,75,0.05) 0%, transparent 70%)',
        }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Get Involved</div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Join the Centre CoP
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#9a8976' }}>
            Membership is open and free to any individual or organisation working on foundational
            learning data and evidence in the Centre Region.
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
                background: 'rgba(215,224,218,0.06)',
                border: '1px solid rgba(215,224,218,0.15)',
                color: '#5d4730',
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
