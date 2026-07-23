'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useState } from 'react'
import { BarChart2, Users, Lightbulb, Landmark, Handshake, Coins } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  organization: string
  type: string
  message: string
}

export default function GetInvolved() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    organization: '',
    type: 'partnership',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
          <div className="hero-glow absolute inset-0" />
          <div className="cop-container relative z-10">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Join the Movement</p>
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Get Involved
              </h1>
              <p className="text-lg text-body leading-relaxed">
                We're building a coordinated community of practitioners, researchers, and policy makers committed to improving
                foundational learning in Cameroon. Learn how you can contribute.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="border-b border-border-subtle py-16 md:py-24">
          <div className="cop-container">
            <div className="mb-12">
              <p className="eyebrow mb-2">Opportunities</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Ways to Contribute</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Research Partnership',
                  description: 'Collaborate on evidence generation, evaluation, or research studies in foundational learning.',
                  icon: BarChart2,
                },
                {
                  title: 'Implementation Support',
                  description: 'Support classroom implementation, teacher training, or school-based interventions.',
                  icon: Users,
                },
                {
                  title: 'Data & Knowledge Sharing',
                  description: 'Contribute data, insights, or knowledge to strengthen our collective evidence base.',
                  icon: Lightbulb,
                },
                {
                  title: 'Policy Engagement',
                  description:
                    'Participate in policy forums, contribute to policy briefs, or advise on sector-wide strategies.',
                  icon: Landmark,
                },
                {
                  title: 'Community Mobilization',
                  description: 'Help strengthen community engagement, parent involvement, or local advocacy efforts.',
                  icon: Handshake,
                },
                {
                  title: 'Funding & Resources',
                  description: 'Support the platform through funding, in-kind donations, or resource contributions.',
                  icon: Coins,
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card glow-green p-8">
                  <div className="mb-4 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,158,96,0.1)', border: '1px solid rgba(0,158,96,0.2)' }}>
                    <item.icon size={20} color="#009e60" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="py-16 md:py-24">
          <div className="cop-container">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form */}
              <div>
                <div className="mb-8">
                  <p className="eyebrow mb-2">Contact</p>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Get in Touch</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border-color bg-surface-raised px-4 py-2 text-foreground placeholder-muted-text focus:border-primary focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border-color bg-surface-raised px-4 py-2 text-foreground placeholder-muted-text focus:border-primary focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border-color bg-surface-raised px-4 py-2 text-foreground placeholder-muted-text focus:border-primary focus:outline-none"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Interest</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border-color bg-surface-raised px-4 py-2 text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="partnership">Research Partnership</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="data">Data Sharing</option>
                      <option value="policy">Policy Engagement</option>
                      <option value="community">Community Mobilization</option>
                      <option value="funding">Funding & Resources</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-lg border border-border-color bg-surface-raised px-4 py-2 text-foreground placeholder-muted-text focus:border-primary focus:outline-none"
                      placeholder="Tell us about your interest in the platform..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all hover:bg-opacity-90"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="rounded-lg border border-green-accent bg-green-accent/10 p-4 text-green-accent">
                      Thank you! We'll get back to you shortly.
                    </div>
                  )}
                </form>
              </div>

              {/* Information */}
              <div className="space-y-8">
                <div>
                  <p className="eyebrow mb-3">Quick Links</p>
                  <div className="space-y-3">
                    <div className="glass-card p-4">
                      <h3 className="mb-1 font-serif font-semibold text-foreground">MINEDUB Partnership</h3>
                      <p className="text-sm text-body">Our platform is anchored with the Ministry of Education of Cameroon.</p>
                    </div>
                    <div className="glass-card p-4">
                      <h3 className="mb-1 font-serif font-semibold text-foreground">eBASE Africa</h3>
                      <p className="text-sm text-body">Our platform is supported by eBASE Africa, a network of learning platforms.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="eyebrow mb-3">Key Documents</p>
                  <div className="space-y-2">
                    {['Partnership Guidelines', 'Data Sharing Agreement', 'Community Guidelines'].map((doc) => (
                      <a key={doc} href="#" className="block text-sm text-primary hover:text-accent">
                        → {doc}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-card glow-green p-6">
                  <h3 className="mb-2 font-serif font-semibold text-foreground">Follow Our Work</h3>
                  <p className="mb-4 text-sm text-body">Stay updated on platform news, reports, and research findings.</p>
                  <div className="flex gap-3">
                    {['Twitter', 'LinkedIn', 'Newsletter'].map((platform) => (
                      <button
                        key={platform}
                        className="text-xs font-medium text-primary hover:text-accent"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-t border-border-subtle py-16 md:py-24">
          <div className="cop-container">
            <p className="eyebrow mb-4">Our Team</p>
            <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">Coordinating Partners</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { name: 'MINEDUB', role: 'Ministry of Education' },
                { name: 'eBASE Africa', role: 'Platform Secretariat' },
                { name: 'Local Partners', role: 'Implementation Support' },
              ].map((partner) => (
                <div key={partner.name} className="glass-card p-6 text-center">
                  <h3 className="mb-1 font-serif font-semibold text-foreground">{partner.name}</h3>
                  <p className="text-sm text-body">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
