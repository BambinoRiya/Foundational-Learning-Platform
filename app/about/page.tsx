import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const objectives = [
  'Build knowledge on the most effective ways to scale the Unlocking Data approach in Cameroon, by piloting, documenting and adapting collaborative data use practices.',
  'Strengthen the capacity of policymakers, researchers, practitioners and other stakeholders to access, interpret and use data on foundational learning.',
  'Facilitate knowledge mobilisation and learning within and beyond the region through regular interactions, evidence sprints, thematic discussions and documentation of lessons learned.',
  'Advance equity and inclusion in data collection, analysis, sharing and use, ensuring that marginalised groups are represented in foundational learning decisions.',
]

const coreFunctions = [
  'Serves as a forum for identifying and analysing key challenges related to foundational learning and data use at the regional level.',
  'Reviews, interprets and discusses available data sources, including SIGE, INS household surveys, learning assessments such as PASEC, NGO data, academic research and locally produced information.',
  'Develops and implements a regional learning agenda that reflects regional priorities, evidence gaps and emerging issues.',
  'Facilitates evidence sprints: focused, collaborative analysis sessions on urgent or strategic FLN issues.',
  'Systematically shares findings, lessons learned and recommendations with MINEDUB at regional and national levels.',
  'Documents and disseminates stories of data-informed decision-making, success cases and tested innovations.',
  'Contributes to the institutionalisation of best practices in foundational learning data use within government structures.',
]

const memberCategories = [
  {
    title: 'Government Officials',
    desc: 'Regional and divisional officials of MINEDUB; representatives of the National Institute of Statistics (INS) and other relevant government agencies.',
    benefits: [
      'Direct access to NGO and CSO field data and insights',
      'Broader data sources complementing EMIS and official reports',
      'Real-time intelligence about barriers to foundational learning',
      'Capacity building in data literacy and evidence interpretation',
    ],
  },
  {
    title: 'Civil Society & NGOs',
    desc: 'CSOs and NGOs engaged in foundational learning programming, research, monitoring or advocacy.',
    benefits: [
      'Direct channel to government to present evidence to decision-makers',
      'Opportunities to discover partners and build joint initiatives',
      'Guidance on aligning data practices with government standards',
      'Field-based peer learning and recognition for contributions',
    ],
  },
  {
    title: 'Researchers & Academia',
    desc: 'Education research institutes, universities and individual researchers working on foundational learning or education data.',
    benefits: [
      'Alignment of research topics with government and field-level priorities',
      'Access to diverse data sources facilitated by CoP relationships',
      'Pathway to share findings directly with policymakers',
      'Collaborative, multi-stakeholder research opportunities',
    ],
  },
  {
    title: 'Councils & Local Authorities',
    desc: 'Regional assemblies, divisional councils and other local authorities.',
    benefits: [
      'Ready access to the latest data and research findings for planning',
      'Evidence and field insights to advocate for local needs',
      'Platform for evidence-informed decision-making and benchmarking',
      'Opportunities to identify and partner with NGOs and researchers',
    ],
  },
  {
    title: 'School Heads & Teachers',
    desc: 'School leaders and classroom practitioners with direct experience of foundational learning delivery.',
    benefits: [
      'Classroom realities heard directly by data producers and decision-makers',
      'Accessible summaries of learning trends and best practices',
      'Professional development through evidence-sharing sessions',
      'Peer exchange: learning from other schools\' successes',
    ],
  },
]

const values = [
  { title: 'Respect', desc: 'Respect for all voices and perspectives, regardless of role or background' },
  { title: 'Inclusion', desc: 'Inclusion and non-discrimination, ensuring equitable participation and access for all' },
  { title: 'Learning', desc: 'Commitment to continuous learning, innovation and the use of evidence in decision-making' },
  { title: 'Children First', desc: 'Dedication to improving foundational learning outcomes for every child in the region' },
  { title: 'Transparency', desc: 'Transparency and accountability in all CoP activities and communications' },
]

const timeline = [
  { year: '2024', event: 'Unlocking Data Initiative launches across Kenya, Malawi and Cameroon.' },
  { year: '2025', event: 'Situational Analysis published documenting FLN data fragmentation in Cameroon. Northwest Regional CoP launched in partnership with MINEDUB-NW.' },
  { year: '2025', event: 'Evidence Gap Map released for Cameroon. Centre Regional CoP launched. Learning agendas developed for both regions. Evidence Rush activities conducted.' },
  { year: '2026', event: 'Platform launched publicly. Ongoing data mapping, CoP meetings, capacity building and evidence sprint activities across both regions.' },
]

const roles = [
  {
    role: 'Chair',
    desc: 'The Regional Delegate of MINEDUB, or their designated representative, chairs the CoP and provides formal leadership and policy oversight.',
  },
  {
    role: 'Technical Secretariat',
    desc: 'eBASE Africa is responsible for coordination, documentation, communication and technical support to ensure the smooth functioning of the CoP.',
  },
  {
    role: 'Working Groups',
    desc: 'The CoP may establish working groups to address specific themes or tasks, such as data analysis, monitoring, capacity building or special projects.',
  },
  {
    role: 'All Members',
    desc: 'Expected to participate actively in meetings, evidence sprints and other activities, and to contribute to learning, documentation and the sharing of outputs.',
  },
]

export default function AboutPage() {
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
          <div className="eyebrow mb-4">About the Platform</div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
          >
            Foundational Learning Data and Evidence Community of Practice
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#5d4730' }}>
            This platform is the public face of the Cameroon FLN Data and Evidence CoP: a
            multi-stakeholder, ministry-led structure established to strengthen how education data is
            generated, shared and used. The work happens in the CoP. This platform makes it visible,
            accessible and actionable.
          </p>
        </div>
      </section>

      {/* ── BACKGROUND ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.06)' }}
      >
        <div className="cop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="eyebrow mb-4">The Parent Initiative</div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-5"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Unlocking Data Initiative
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9a8976' }}>
                The Unlocking Data Initiative (UDI) is a pan-African partnership, led by Zizi Afrique,
                ESSA, EdTech Hub and eBASE Africa, with support from GPE KIX and IDRC, designed
                to improve how education data is generated, shared and used for decision-making
                across Kenya, Malawi and Cameroon.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#9a8976' }}>
                In Cameroon, UDI is implemented by eBASE Africa in partnership with MINEDUB. This
                platform — the Foundational Learning Data &amp; Evidence Community of Practice — is a
                core UDI activity.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-4">Background</div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-5"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Why this platform exists
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9a8976' }}>
                The Ministry of Basic Education (MINEDUB), recognising the critical importance of
                foundational literacy and numeracy for Cameroon&apos;s children, is committed to
                evidence-based decision-making to improve learning outcomes at all levels of the
                education system.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#9a8976' }}>
                In partnership with eBASE Africa and as part of UDI, MINEDUB has established
                Regional Communities of Practice to address systemic challenges in education data
                use and to foster an ecosystem where evidence, collaboration and innovation can
                thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AIMS ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Purpose</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            What this platform aims to do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { n: '01', t: 'Map Education Data', d: 'Map education data across Cameroon and close evidence gaps to improve planning and targeting.' },
              { n: '02', t: 'Strengthen Evidence Use', d: 'Strengthen evidence-based decision-making in MINEDUB and partner institutions.' },
              { n: '03', t: 'Build Community', d: 'Build a Community of Practice for collaborative, multi-stakeholder data use across regions.' },
              { n: '04', t: 'Create a Scalable Model', d: 'Create a scalable, replicable model for evidence use in education — for Cameroon and beyond.' },
            ].map((aim) => (
              <div
                key={aim.n}
                className="glass-card p-6"
              >
                <div
                  className="text-xs font-bold mb-3 font-mono"
                  style={{ color: '#009e60', letterSpacing: '0.1em' }}
                >
                  {aim.n}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                >
                  {aim.t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9a8976' }}>
                  {aim.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <div className="eyebrow mb-4">Objectives</div>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
              >
                Four core objectives
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="flex flex-col gap-5">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        background: 'rgba(0,158,96,0.12)',
                        color: '#009e60',
                        border: '1px solid rgba(0,158,96,0.25)',
                      }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed" style={{ color: '#5d4730' }}>
                      {obj}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FUNCTIONS ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Core Functions</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Seven functions, one mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreFunctions.map((fn, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ background: 'rgba(0,158,96,0.04)', border: '1px solid rgba(0,158,96,0.1)' }}
              >
                <span
                  className="flex-shrink-0 text-xs font-mono font-bold mt-0.5"
                  style={{ color: '#009e60', minWidth: '24px' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#5d4730' }}>
                  {fn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-4">Membership</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Open, free, and multi-stakeholder
          </h2>
          <p className="text-base mb-12 max-w-2xl" style={{ color: '#9a8976' }}>
            Membership is open to all stakeholders in the region with a commitment to improving
            foundational learning through the use of data and evidence. It is voluntary and free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {memberCategories.map((cat) => (
              <div key={cat.title} className="glass-card p-6">
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
                >
                  {cat.title}
                </h3>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: '#9a8976' }}>
                  {cat.desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {cat.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#5d4730' }}>
                      <span style={{ color: '#009e60', marginTop: '1px' }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRUCTURE & ROLES ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Governance</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Structure and roles
          </h2>
          <div className="flex flex-col gap-4">
            {roles.map((r) => (
              <div
                key={r.role}
                className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,158,96,0.15)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="flex-shrink-0 sm:w-48 text-sm font-bold"
                  style={{ color: '#009e60' }}
                >
                  {r.role}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#5d4730' }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(0,158,96,0.06)' }}>
        <div className="cop-container">
          <div className="eyebrow mb-4">Values</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            What guides us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-5 rounded-xl text-center"
                style={{ background: 'rgba(0,158,96,0.04)', border: '1px solid rgba(0,158,96,0.1)' }}
              >
                <h4
                  className="text-base font-bold mb-2"
                  style={{ color: '#009e60', fontFamily: 'Georgia, serif' }}
                >
                  {v.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: '#9a8976' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'rgba(0,158,96,0.08)', background: '#f5f9f7' }}
      >
        <div className="cop-container">
          <div className="eyebrow mb-4">Timeline</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: '#4b371c', fontFamily: 'Georgia, serif' }}
          >
            Key milestones
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-20 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'rgba(0,158,96,0.15)' }}
            />
            <div className="flex flex-col gap-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-8">
                  <div
                    className="flex-shrink-0 text-sm font-bold w-16 text-right pt-1 hidden sm:block"
                    style={{ color: '#009e60' }}
                  >
                    {t.year}
                  </div>
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5 hidden sm:block"
                    style={{
                      background: '#009e60',
                      border: '2px solid #ffffff',
                      boxShadow: '0 0 8px rgba(0,158,96,0.4)',
                    }}
                  />
                  <div
                    className="flex-1 p-4 rounded-xl"
                    style={{ background: '#ffffff', border: '1px solid rgba(0,158,96,0.15)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    <span className="text-xs font-bold sm:hidden mr-2" style={{ color: '#009e60' }}>
                      {t.year}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#5d4730' }}>
                      {t.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
            Join the CoP
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#9a8976' }}>
            Membership is open and free. If you work on foundational learning in Cameroon, there is a
            place for you here.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
            style={{ background: '#009e60', color: '#ffffff' }}
          >
            Get Involved →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
