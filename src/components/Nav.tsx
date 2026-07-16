import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const NAV_LINKS = ['About', 'Architecture', 'Simulation', 'Team']
const MOBILE_LINKS = ['About', 'Architecture', 'Simulation', 'Team', 'Blog']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()

  // Trigger mount animation after first render
  useEffect(() => {
    if (open) {
      // Small delay so the element is in the DOM before transition fires
      requestAnimationFrame(() => setMounted(true))
    } else {
      setMounted(false)
    }
  }, [open])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <header className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
        {/* Left: Logo + desktop nav links */}
        <div className="flex items-center gap-8 lg:gap-10">
          <span className="text-white font-semibold text-lg tracking-tight font-sans select-none">
            Edge Trust Vanet
          </span>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/edge-trust-vanet"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-white/80 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <button
            onClick={() => navigate('/blog')}
            className="hidden md:inline-flex items-center bg-white text-black text-sm font-medium rounded-full px-5 py-2 hover:bg-white/90 transition-colors duration-200"
          >
            Blog
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          >
            <span
              className="block h-[2px] w-6 bg-white rounded-full"
              style={{ transition: 'transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms cubic-bezier(0.76,0,0.24,1)' }}
            />
            <span
              className="block h-[2px] w-4 bg-white rounded-full"
              style={{ transition: 'transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms cubic-bezier(0.76,0,0.24,1)' }}
            />
            <span
              className="block h-[2px] w-6 bg-white rounded-full"
              style={{ transition: 'transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms cubic-bezier(0.76,0,0.24,1)' }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          style={{
            backgroundColor: `rgba(0,0,0,${mounted ? 0.9 : 0})`,
            backdropFilter: `blur(${mounted ? 24 : 0}px)`,
            WebkitBackdropFilter: `blur(${mounted ? 24 : 0}px)`,
            transition: 'background-color 700ms cubic-bezier(0.76,0,0.24,1), backdrop-filter 700ms cubic-bezier(0.76,0,0.24,1)',
          }}
        >
          {/* Menu content */}
          <div
            className="flex flex-col h-full"
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 700ms cubic-bezier(0.76,0,0.24,1)',
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-white font-semibold text-lg tracking-tight font-sans">
                Edge Trust Vanet
              </span>

              {/* X close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex flex-col gap-0 p-2 -mr-2"
              >
                <span
                  className="block h-[2px] w-6 bg-white rounded-full"
                  style={{ transform: 'rotate(45deg) translateY(1px)' }}
                />
                <span
                  className="block h-[2px] w-6 bg-white rounded-full"
                  style={{ transform: 'rotate(-45deg) translateY(-1px)' }}
                />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {MOBILE_LINKS.map((label, i) =>
                label === 'Blog' ? (
                  <button
                    key={label}
                    onClick={() => { setOpen(false); navigate('/blog') }}
                    className="border-b border-white/10 py-4 text-4xl sm:text-5xl font-instrument-serif text-white hover:pl-4 transition-all duration-300 text-left w-full"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                      transition: `opacity 700ms cubic-bezier(0.76,0,0.24,1) ${150 + i * 80}ms, transform 700ms cubic-bezier(0.76,0,0.24,1) ${150 + i * 80}ms, padding-left 300ms ease`,
                    }}
                  >
                    {label}
                  </button>
                ) : (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 text-4xl sm:text-5xl font-instrument-serif text-white hover:pl-4 transition-all duration-300"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                      transition: `opacity 700ms cubic-bezier(0.76,0,0.24,1) ${150 + i * 80}ms, transform 700ms cubic-bezier(0.76,0,0.24,1) ${150 + i * 80}ms, padding-left 300ms ease`,
                    }}
                  >
                    {label}
                  </a>
                )
              )}
            </nav>

            {/* Footer CTA */}
            <div
              className="px-6 pb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 700ms cubic-bezier(0.76,0,0.24,1) 550ms',
              }}
            >
              <button
                onClick={() => { setOpen(false); navigate('/blog') }}
                className="w-full bg-white text-black font-medium rounded-full py-4 text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Open Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
