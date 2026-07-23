import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t"
      style={{
        background: '#ffffff',
        borderColor: 'rgba(0, 158, 96, 0.08)',
      }}
    >
      <div className="cop-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0, 158, 96, 0.12)', border: '1px solid rgba(0, 158, 96, 0.25)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3" fill="#009e60" />
                  <circle cx="8" cy="8" r="6.5" stroke="#009e60" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: '#4b371c' }}>FLN Data &amp; Evidence Platform</div>
                <div className="text-xs" style={{ color: '#9a8976' }}>Cameroon Community of Practice</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#9a8976' }}>
              A Community of Practice anchored with the Ministry of Basic Education (MINEDUB). Secretariat: eBASE Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="eyebrow mb-4">Platform</div>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Evidence Hub', href: '/evidence' },
                { label: 'Data Hub', href: '/data-hub' },
                { label: 'Reports', href: '/reports' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-primary" style={{ color: '#9a8976' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <div className="eyebrow mb-4">Regions</div>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'All Regions', href: '/regions' },
                { label: 'Northwest Region', href: '/regions/northwest' },
                { label: 'Centre Region', href: '/regions/centre' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-primary" style={{ color: '#9a8976' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow mb-4">Contact</div>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: '#9a8976' }}>
              <li>cop-secretariat@ebaseafrica.org</li>
              <li>Yaoundé, Cameroon</li>
              <li className="pt-2">
                <Link
                  href="/get-involved"
                  className="text-sm transition-colors hover:text-primary"
                  style={{ color: '#009e60' }}
                >
                  Join the CoP →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: 'rgba(0, 158, 96, 0.08)', color: '#9a8976' }}
        >
          <span>
            A{' '}
            <a href="#" className="hover:text-primary transition-colors" style={{ color: '#9a8976' }}>
              MINEDUB
            </a>{' '}
            ·{' '}
            <a href="#" className="hover:text-primary transition-colors" style={{ color: '#9a8976' }}>
              eBASE Africa
            </a>{' '}
            initiative, supported by the{' '}
            <a href="#" className="hover:text-primary transition-colors" style={{ color: '#9a8976' }}>
              Unlocking Data Initiative
            </a>
          </span>
          <span>Policy Licensing · About Data · EN | FR</span>
        </div>
      </div>
    </footer>
  )
}
