import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const NAV_ITEMS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Threats', href: '#threats' },
  { label: 'Dataset', href: '#dataset' },
  { label: 'Edge ML', href: '#models' },
  { label: 'Ablation', href: '#ablation' },
  { label: 'Scalability', href: '#scalability' },
  { label: 'Survey', href: '/survey', isRoute: true },
  { label: 'Team', href: '#team' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setMounted(true))
    } else {
      setMounted(false)
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = (item: { label: string; href: string; isRoute?: boolean }) => {
    setOpen(false)
    if (item.isRoute) {
      navigate(item.href)
      return
    }
    if (location.pathname !== '/') {
      navigate('/' + item.href)
    } else {
      const el = document.querySelector(item.href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* ── Always Fixed Constant Navbar (Minimalist, Zero-Lag) ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-14 py-3.5 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#080a0e]/95 border-b border-white/10 shadow-sm'
            : 'bg-[#080a0e]/85 border-b border-white/[0.06]'
        }`}
      >
        {/* Left: Clean Brand Logo */}
        <div className="flex items-center gap-8 lg:gap-10">
          <button
            onClick={() => {
              if (location.pathname !== '/') navigate('/')
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 text-left group"
          >
            <span className="text-white font-medium text-base sm:text-lg tracking-tight font-sans">
              EdgeTrust<span className="text-white/40">·VANET</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-white/60 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors duration-150 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: GitHub + Blog + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/edge-trust-vanet"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono"
            aria-label="GitHub"
          >
            <GithubIcon size={14} />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <button
            onClick={() => navigate('/blog')}
            className="hidden sm:inline-flex items-center bg-white text-black text-xs font-semibold rounded-full px-4 py-1.5 hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Dev Blog
          </button>

          {/* Hamburger — mobile / tablet */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2 text-white hover:text-white/80"
          >
            <span className="block h-[2px] w-6 bg-white rounded-full transition-all" />
            <span className="block h-[2px] w-4 bg-white/70 rounded-full transition-all" />
            <span className="block h-[2px] w-6 bg-white rounded-full transition-all" />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{
            backgroundColor: `rgba(8,10,14,${mounted ? 0.96 : 0})`,
            backdropFilter: `blur(${mounted ? 28 : 0}px)`,
            WebkitBackdropFilter: `blur(${mounted ? 28 : 0}px)`,
            transition: 'background-color 500ms cubic-bezier(0.76,0,0.24,1), backdrop-filter 500ms cubic-bezier(0.76,0,0.24,1)',
          }}
        >
          <div
            className="flex flex-col h-full"
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 500ms cubic-bezier(0.76,0,0.24,1)',
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-white font-semibold text-base tracking-tight font-sans">
                EdgeTrust<span className="text-white/40">·VANET</span>
              </span>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-white/80 hover:text-white"
              >
                <span className="block h-[2px] w-6 bg-white rounded-full rotate-45 translate-y-[1px]" />
                <span className="block h-[2px] w-6 bg-white rounded-full -rotate-45 -translate-y-[1px]" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col justify-center gap-1">
              {NAV_ITEMS.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="py-3 text-2xl sm:text-3xl font-instrument-serif text-white/80 hover:text-white border-b border-white/5 hover:pl-3 transition-all duration-200 text-left w-full"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 500ms ease ${100 + i * 40}ms, transform 500ms ease ${100 + i * 40}ms, padding-left 200ms ease`,
                  }}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => { setOpen(false); navigate('/blog') }}
                className="py-3 text-2xl sm:text-3xl font-instrument-serif text-white/80 hover:text-white border-b border-white/5 hover:pl-3 transition-all duration-200 text-left w-full"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 500ms ease 420ms, transform 500ms ease 420ms, padding-left 200ms ease`,
                }}
              >
                Dev Blog
              </button>
            </nav>

            {/* Footer Actions */}
            <div
              className="p-6 border-t border-white/10 flex flex-col gap-3"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 500ms ease 450ms',
              }}
            >
              <a
                href="https://github.com/edge-trust-vanet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-white/20 text-white rounded-full py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <GithubIcon size={16} />
                GitHub Repository
              </a>
              <button
                onClick={() => { setOpen(false); navigate('/survey') }}
                className="w-full bg-white text-black font-semibold rounded-full py-3 text-sm hover:bg-white/90 transition-colors"
              >
                Read Driver Trust Survey
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

