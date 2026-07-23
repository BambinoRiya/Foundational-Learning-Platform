'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Mail } from 'lucide-react'

interface CataloguedDataset {
  id: string
  title: string
  producer: string
  coverage: string
  access: 'open' | 'request' | 'restricted' | 'pending'
}

const cataloguedDatasets: CataloguedDataset[] = [
  {
    id: '1',
    title: "SIGE (Systeme d'Information et de Gestion de l'Education)",
    producer: 'MINEDUB',
    coverage: 'National',
    access: 'request',
  },
  {
    id: '2',
    title: 'PASEC 2019 Assessment',
    producer: 'CONFEMEN',
    coverage: 'National',
    access: 'open',
  },
  {
    id: '3',
    title: 'INS Household Survey (ECAM)',
    producer: 'National Institute of Statistics',
    coverage: 'National',
    access: 'request',
  },
  {
    id: '4',
    title: 'EGRA/EGMA Assessment Data',
    producer: 'Various NGOs and partners',
    coverage: 'Regional',
    access: 'request',
  },
  {
    id: '5',
    title: '[Additional datasets to be added as mapping progresses]',
    producer: '',
    coverage: '',
    access: 'pending',
  },
]

const getAccessBadge = (access: string) => {
  switch (access) {
    case 'open':
      return {
        label: 'Open',
        className: 'bg-green-100 text-green-700 border border-green-300',
      }
    case 'request':
      return {
        label: 'By request',
        className: 'bg-amber-100 text-amber-700 border border-amber-300',
      }
    case 'restricted':
      return {
        label: 'Restricted',
        className: 'bg-red-100 text-red-600 border border-red-300',
      }
    case 'pending':
      return {
        label: '[ ]',
        className: 'bg-gray-100 text-gray-500 border border-gray-300',
      }
    default:
      return {
        label: access,
        className: 'bg-gray-100 text-gray-500 border border-gray-300',
      }
  }
}

export default function DataHub() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
          <div className="hero-glow absolute inset-0" />
          <div className="cop-container relative z-10">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Data Resources</p>
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Data Hub
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#5d4730' }}>
                The Data Hub is a growing catalog of education datasets relevant to foundational learning in Cameroon. 
                It maps what data exists, who holds it, and how to access it — so that CoP members, researchers and 
                decision-makers can find and use the data they need without starting from scratch.
              </p>
            </div>
          </div>
        </section>

        {/* Dataset Catalog Section */}
        <section className="py-16 md:py-24">
          <div className="cop-container">
            <div className="mb-8">
              <p className="eyebrow mb-2">Dataset Catalog</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Catalogued Datasets</h2>
              <p className="text-base max-w-3xl" style={{ color: '#5d4730' }}>
                The table below lists datasets that have been identified, verified and catalogued with metadata. 
                Access levels indicate whether data is openly available, available on request, or restricted.
              </p>
            </div>

            {/* Dataset Table */}
            <div className="rounded-xl overflow-hidden border border-border" style={{ borderColor: 'rgba(0,158,96,0.15)' }}>
              {/* Table Header */}
              <div
                className="grid text-sm font-semibold"
                style={{
                  gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
                  background: '#009e60',
                  color: '#ffffff',
                }}
              >
                <div className="px-6 py-4">Dataset</div>
                <div className="px-6 py-4">Producer</div>
                <div className="px-6 py-4">Coverage</div>
                <div className="px-6 py-4 text-center">Access</div>
              </div>

              {/* Table Body */}
              {cataloguedDatasets.map((dataset, idx) => (
                <div
                  key={dataset.id}
                  className="grid text-sm"
                  style={{
                    gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
                    borderTop: '1px solid rgba(0,158,96,0.1)',
                    background: idx % 2 === 0 ? '#ffffff' : '#f9fafb',
                  }}
                >
                  <div className="px-6 py-4 font-medium" style={{ color: '#4b371c' }}>
                    {dataset.title}
                  </div>
                  <div className="px-6 py-4" style={{ color: '#5d4730' }}>
                    {dataset.producer}
                  </div>
                  <div className="px-6 py-4" style={{ color: '#5d4730' }}>
                    {dataset.coverage}
                  </div>
                  <div className="px-6 py-4 flex justify-center items-center">
                    <span
                      className={`inline-block rounded px-3 py-1 text-xs font-semibold ${getAccessBadge(dataset.access).className}`}
                    >
                      {getAccessBadge(dataset.access).label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Access Legend */}
            <div
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
              >
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-sm" style={{ color: '#166534' }}>
                  <strong>Open</strong> — freely downloadable
                </span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}
              >
                <span className="inline-block w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="text-sm" style={{ color: '#92400e' }}>
                  <strong>By request</strong> — contact data holder
                </span>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
              >
                <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-sm" style={{ color: '#991b1b' }}>
                  <strong>Restricted</strong> — formal agreement required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Access Pathways Section */}
        <section className="py-16 md:py-24" style={{ background: '#f5f9f7' }}>
          <div className="cop-container">
            <div className="mb-8">
              <p className="eyebrow mb-2">Access Pathways</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-3">How to Request Data</h2>
              <p className="text-base max-w-3xl" style={{ color: '#5d4730' }}>
                For datasets listed as available by request or restricted, the CoP secretariat can facilitate 
                introductions to data holders and advise on the appropriate process for data sharing agreements. 
                Contact the secretariat to begin the process.
              </p>
            </div>

            {/* Contact Card */}
            <div
              className="rounded-xl p-8 max-w-2xl"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,158,96,0.2)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,158,96,0.1)' }}
                >
                  <Mail size={24} color="#009e60" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#4b371c' }}>
                    Request Data Access
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#5d4730' }}>
                    To request access to a listed dataset or to submit a new dataset for cataloguing, contact:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span style={{ color: '#5d4730' }}>Email: </span>
                      <a 
                        href="mailto:data@eaboratoire.org" 
                        className="font-medium hover:underline"
                        style={{ color: '#009e60' }}
                      >
                        data@ebaseafrica.org
                      </a>
                    </p>
                    <p className="text-sm">
                      <span style={{ color: '#5d4730' }}>Subject line: </span>
                      <span style={{ color: '#4b371c' }}>&quot;Data Hub Request — [Dataset Name]&quot;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border-subtle py-16 md:py-24">
          <div className="cop-container text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">Have Data to Contribute?</h2>
            <p className="mx-auto mb-8 max-w-2xl" style={{ color: '#5d4730' }}>
              If you hold education data relevant to foundational learning in Cameroon and would like it catalogued 
              in the Data Hub, we welcome your contribution. Contact the secretariat to discuss data sharing options.
            </p>
            <Link
              href="/get-involved"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
