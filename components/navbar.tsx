'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Regions',
    href: '/regions',
    children: [
      { label: 'Northwest Region', href: '/regions/northwest' },
      { label: 'Centre Region', href: '/regions/centre' },
    ],
  },
  {
    label: 'Evidence & Data',
    href: '/evidence-hub',
    children: [
      { label: 'Evidence Hub', href: '/evidence-hub' },
      { label: 'Data Hub', href: '/data-hub' },
    ],
  },
  {
    label: 'Resources',
    href: '/reports',
    children: [
      { label: 'Reports', href: '/reports' },
    ],
  },
  { label: 'Get Involved', href: '/get-involved' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,158,96,0.1)',
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      }}
    >
      <nav className="cop-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(0,158,96,0.12)', border: '1px solid rgba(0,158,96,0.25)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#009e60" />
              <circle cx="8" cy="8" r="6.5" stroke="#009e60" strokeWidth="1" strokeOpacity="0.4" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-semibold leading-tight" style={{ color: '#4b371c' }}>
              FLN Data &amp; Evidence
            </div>
            <div className="text-xs leading-tight" style={{ color: '#9a8976' }}>
              Cameroon CoP
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded transition-colors"
                  style={{ color: isActive(item.href) ? '#009e60' : '#4b371c' }}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* invisible bridge fills the gap so cursor doesn't leave the hover zone */}
                {openDropdown === item.label && <div className="absolute top-full left-0 h-2 w-full" />}
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 py-1 rounded-lg min-w-[180px]"
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0,158,96,0.15)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm transition-colors hover:text-primary"
                        style={{ color: isActive(child.href) ? '#009e60' : '#4b371c' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm rounded transition-colors"
                style={{ color: isActive(item.href) ? '#009e60' : '#4b371c' }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="text-xs font-medium"
            style={{ color: '#9a8976' }}
          >
            EN <span style={{ color: '#cfcfe1' }}>|</span> FR
          </button>
          <Link
            href="/get-involved"
            className="px-4 py-2 text-xs font-semibold rounded transition-all"
            style={{
              background: '#009e60',
              color: '#ffffff',
              letterSpacing: '0.05em',
            }}
          >
            JOIN THE CoP
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded"
          style={{ color: '#4b371c' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden py-4 border-t"
          style={{
            background: '#ffffff',
            borderColor: 'rgba(0,158,96,0.08)',
          }}
        >
          <div className="cop-container flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded"
                  style={{ color: isActive(item.href) ? '#009e60' : '#4b371c' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-6 pr-3 py-2 text-sm rounded"
                    style={{ color: isActive(child.href) ? '#009e60' : '#9a8976' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-3 pt-3 flex items-center gap-3 border-t" style={{ borderColor: 'rgba(139, 226, 139, 0.08)' }}>
              <button className="text-xs" style={{ color: '#9a8976' }}>EN | FR</button>
              <Link
                href="/get-involved"
                className="px-4 py-2 text-xs font-semibold rounded"
                style={{
                  background: '#009e60',
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
                onClick={() => setMobileOpen(false)}
              >
                JOIN THE CoP
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
