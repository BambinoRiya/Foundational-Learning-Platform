'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface Report {
  id: string
  title: string
  description: string
  category: string
  date: string
  pages: number
  link: string
}

const reports: Report[] = [
  {
    id: '1',
    title: '2023 Annual Learning Report: Foundational Literacy & Numeracy',
    description:
      'Comprehensive annual report presenting learning outcomes, implementation progress, and key findings across both program regions.',
    category: 'Annual Report',
    date: 'February 2024',
    pages: 48,
    link: '#',
  },
  {
    id: '2',
    title: 'Regional Equity Analysis: Learning Disparities in Northwest & Centre',
    description:
      'Deep-dive analysis examining gender gaps, urban-rural disparities, and equity challenges in foundational learning outcomes.',
    category: 'Research Brief',
    date: 'March 2024',
    pages: 24,
    link: '#',
  },
  {
    id: '3',
    title: 'Teacher Professional Development: Impact Evaluation Report',
    description:
      'Longitudinal study evaluating the effectiveness of structured professional development programs on classroom teaching quality.',
    category: 'Evaluation',
    date: 'December 2023',
    pages: 36,
    link: '#',
  },
  {
    id: '4',
    title: 'Early Grade Reading Assessment: Baseline & Midline Findings',
    description:
      'Technical report on reading assessment methodology, baseline results, and progress toward learning targets across schools.',
    category: 'Assessment Report',
    date: 'January 2024',
    pages: 42,
    link: '#',
  },
  {
    id: '5',
    title: 'Numeracy Intervention Pilot: Feasibility & Effectiveness Study',
    description:
      'Feasibility study examining the implementation and impact of low-cost numeracy interventions in Grade 1-3 classrooms.',
    category: 'Pilot Report',
    date: 'November 2023',
    pages: 28,
    link: '#',
  },
  {
    id: '6',
    title: 'School Infrastructure & Learning Environment Assessment',
    description:
      'Comprehensive assessment of physical school conditions, teaching resources, and learning environments across program schools.',
    category: 'Diagnostic Report',
    date: 'October 2023',
    pages: 32,
    link: '#',
  },
  {
    id: '7',
    title: 'Cost-Effectiveness Analysis of Learning Interventions',
    description:
      'Economic analysis examining implementation costs, cost per learner, and return on investment for different program activities.',
    category: 'Economics Report',
    date: 'September 2023',
    pages: 26,
    link: '#',
  },
  {
    id: '8',
    title: 'Community Engagement & Parent Involvement: Qualitative Findings',
    description:
      'Qualitative research examining community mobilization strategies, parent engagement, and sustainability factors.',
    category: 'Research Brief',
    date: 'August 2023',
    pages: 20,
    link: '#',
  },
]

export default function Reports() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
          <div className="hero-glow absolute inset-0" />
          <div className="cop-container relative z-10">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Knowledge Hub</p>
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Reports & Findings
              </h1>
              <p className="text-lg text-body leading-relaxed">
                Access comprehensive reports, research findings, and evidence syntheses documenting our work in foundational
                learning across Cameroon.
              </p>
            </div>
          </div>
        </section>

        {/* Report Categories */}
        <section className="border-b border-border-subtle py-12 md:py-16">
          <div className="cop-container">
            <div className="flex flex-wrap gap-3">
              {['All', 'Annual Report', 'Research Brief', 'Evaluation', 'Assessment', 'Pilot Report'].map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    cat === 'All'
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border-color bg-transparent text-body hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Reports List */}
        <section className="py-16 md:py-24">
          <div className="cop-container">
            <div className="space-y-6">
              {reports.map((report) => (
                <div key={report.id} className="glass-card glow-green overflow-hidden transition-all hover:border-border-color">
                  <div className="flex flex-col gap-6 p-8 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="badge-open">{report.category}</span>
                      </div>
                      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{report.title}</h3>
                      <p className="mb-4 text-body leading-relaxed">{report.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-text">
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.pages} pages</span>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 gap-3 md:flex-col">
                      <Link
                        href={report.link}
                        className="rounded-lg bg-primary px-6 py-2 text-center font-medium text-primary-foreground transition-all hover:bg-opacity-90"
                      >
                        Read
                      </Link>
                      <button className="rounded-lg border border-border-color bg-transparent px-6 py-2 font-medium text-foreground transition-all hover:bg-surface">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citation & Data Section */}
        <section className="border-t border-border-subtle py-16 md:py-24">
          <div className="cop-container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="eyebrow mb-4">Citation</p>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">How to Cite Our Work</h2>
                <div className="rounded-lg bg-surface-raised p-4 font-mono text-sm text-body">
                  <p>Cameroon COP (2024). Foundational Learning</p>
                  <p>Data & Evidence Platform. Annual Report.</p>
                  <p>Retrieved from cop-cameroon.org/reports</p>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-4">Data Access</p>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Access Underlying Data</h2>
                <p className="mb-4 text-body">
                  All reports are supported by open datasets and research data available through our Data Hub.
                </p>
                <Link
                  href="/data-hub"
                  className="inline-block rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-opacity-90"
                >
                  Browse Data Hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
