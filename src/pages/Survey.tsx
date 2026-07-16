import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Menu, X, ChevronRight, Moon, Sun } from 'lucide-react'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)
import {
  meta,
  navItems,
  abstract,
  introduction,
  methodology,
  summaryTableColumns,
  summaryTable,
  bibliography,
  themes,
  mlComparisonNote,
  baselines,
  featureEngineering,
  metricsSummary,
  datasets,
  simTools,
  gaps,
  researchQuestions,
  experimentalPhases,
  keyPapersIntro,
  keyPapers,
} from '../data/surveyData'

/* ─── primitives ────────────────────────────────────────────── */

function Divider() {
  return <hr className="border-0 border-t border-gray-200 dark:border-white/20 my-0" />
}

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-block text-[10px] font-sans font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border ${
        accent ? 'border-gray-400 dark:border-white/30 text-gray-700 dark:text-white/80' : 'border-gray-200 dark:border-white/20 text-gray-400 dark:text-white/40'
      }`}
    >
      {children}
    </span>
  )
}

function Card({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-5 border ${
        accent ? 'border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-white/5' : 'border-gray-100 dark:border-white/10 bg-white dark:bg-black'
      } shadow-sm dark:shadow-none`}
    >
      {children}
    </div>
  )
}

function Section({
  id, num, title, children,
}: {
  id: string; num: string; title: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 py-12">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-instrument-serif italic text-gray-300 dark:text-white/30 text-lg select-none">{num}</span>
        <h2 className="font-instrument-serif text-gray-900 dark:text-white text-2xl sm:text-3xl leading-tight">{title}</h2>
      </div>
      <Divider />
      <div className="mt-7 space-y-4 text-gray-800 dark:text-white/90 leading-relaxed text-[15px] font-sans">
        {children}
      </div>
    </section>
  )
}

/* ─── main ──────────────────────────────────────────────────── */

export default function Survey() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('toc')
  const sectionIds = useRef<string[]>([])

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (mobileOpen) requestAnimationFrame(() => setMounted(true))
    else setMounted(false)
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const ids: string[] = ['toc']
    navItems.forEach((n) => {
      ids.push(n.id)
      n.sub?.forEach((s) => ids.push(s.id))
    })
    sectionIds.current = ids

    function onScroll() {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function jump(id: string) {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const linkBase = 'block px-3 py-1.5 rounded-lg text-sm font-sans font-light transition-all duration-150 cursor-pointer w-full text-left'
  const linkClass = (id: string) =>
    active === id
      ? `${linkBase} text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 font-medium`
      : `${linkBase} text-gray-400 dark:text-white/40 hover:text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:bg-white/5`

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-sans">

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-100 dark:border-white/10">
        <Link to="/" className="font-sans font-semibold text-base text-gray-900 dark:text-white tracking-tight">
          Edge Trust Vanet
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} className="text-gray-500 dark:text-white/50" /> : <Moon size={18} className="text-gray-500 dark:text-white/50" />}
          </button>
          <a href="https://github.com/edge-trust-vanet" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={18} className="text-gray-500 dark:text-white/50" />
          </a>
          <button onClick={() => setMobileOpen(true)} aria-label="Open contents">
            <Menu size={20} className="text-gray-500 dark:text-white/50" />
          </button>
        </div>
      </div>

      {/* ── Mobile sidebar overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{
            backgroundColor: `rgba(255,255,255,${mounted ? 0.97 : 0})`,
            backdropFilter: `blur(${mounted ? 16 : 0}px)`,
            WebkitBackdropFilter: `blur(${mounted ? 16 : 0}px)`,
            transition: 'background-color 400ms ease, backdrop-filter 400ms ease',
          }}
        >
          <div
            className="flex flex-col h-full px-6 py-6"
            style={{ opacity: mounted ? 1 : 0, transition: 'opacity 400ms ease' }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-sans font-semibold text-base text-gray-900 dark:text-white">Contents</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X size={20} className="text-gray-400 dark:text-white/40" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              <SidebarNav jump={jump} linkClass={linkClass} />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex">

        {/* ── Desktop sidebar ── */}
        <aside className="hidden md:flex flex-col w-64 lg:w-72 shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-gray-100 dark:border-white/10 px-5 py-8">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <ArrowLeft size={14} className="text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:text-white/50 transition-colors" />
            <span className="text-gray-400 dark:text-white/40 text-xs font-sans group-hover:text-gray-700 dark:text-white/80 transition-colors">
              Back to home
            </span>
          </Link>
          <div className="mb-6">
            <div className="font-sans font-semibold text-sm text-gray-900 dark:text-white mb-0.5">Edge Trust Vanet</div>
            <div className="text-gray-400 dark:text-white/40 text-xs font-light">285 Papers · 2014–2026</div>
          </div>
          <SidebarNav jump={jump} linkClass={linkClass} />
          
          <div className="mt-auto pt-6 flex items-center gap-5 border-t border-gray-100 dark:border-white/10">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-gray-400 dark:text-white/40 hover:text-gray-700 dark:text-white/80 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="https://github.com/edge-trust-vanet" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-white/40 hover:text-gray-700 dark:text-white/80 transition-colors" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 px-6 sm:px-10 pt-20 md:pt-10 pb-32 max-w-4xl">

          {/* ── Document header ── */}
          <header className="pb-10 pt-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <Tag accent>{meta.tag}</Tag>
              <button
                className="flex items-center gap-1.5 text-gray-400 dark:text-white/40 hover:text-gray-700 dark:text-white/80 text-xs font-sans transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <span>📄</span> Download PDF
              </button>
            </div>

            <h1 className="font-instrument-serif text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
              {meta.title}
            </h1>
            <p className="text-gray-600 dark:text-white/70 text-sm mb-8">{meta.subtitle}</p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {meta.pills.map((p) => (
                <span key={p.rest} className="border border-gray-200 dark:border-white/20 rounded-full px-3.5 py-1.5 text-xs font-sans bg-gray-50 dark:bg-white/5">
                  <strong className="text-gray-800 dark:text-white/90 font-medium">{p.strong}</strong>{' '}
                  <span className="text-gray-600 dark:text-white/70">{p.rest}</span>
                </span>
              ))}
            </div>

            <Divider />

            {/* Team */}
            <div className="flex flex-wrap gap-8 pt-7">
              <div>
                <div className="text-gray-500 dark:text-white/50 text-[10px] font-sans uppercase tracking-widest mb-2">Team Guide</div>
                <div className="text-gray-800 dark:text-white/90 text-sm font-medium">{meta.guide}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-white/50 text-[10px] font-sans uppercase tracking-widest mb-2">Team Members</div>
                <div className="flex flex-wrap gap-2">
                  {meta.team.map((m) => (
                    <div key={m.id} className="border border-gray-200 dark:border-white/20 rounded-xl px-3 py-1.5 bg-white dark:bg-black shadow-sm dark:shadow-none">
                      <div className="text-gray-800 dark:text-white/90 text-xs font-medium">{m.name}</div>
                      <div className="text-gray-500 dark:text-white/50 text-[10px]">{m.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* ── TOC ── */}
          <Section id="toc" num="—" title="Table of Contents">
            <div className="grid sm:grid-cols-2 gap-2 !mt-0">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => jump(n.id)}
                  className="group flex items-center gap-3 border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-left hover:bg-gray-50 dark:bg-white/5 hover:border-gray-200 dark:border-white/20 transition-all duration-150 bg-white dark:bg-black shadow-sm dark:shadow-none"
                >
                  <span className="text-gray-300 dark:text-white/30 font-sans text-xs w-5 shrink-0">{n.num}</span>
                  <span className="text-gray-600 dark:text-white/70 text-sm group-hover:text-gray-900 dark:text-white transition-colors flex-1">{n.label}</span>
                  <ChevronRight size={12} className="text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:text-white/50 transition-colors" />
                </button>
              ))}
            </div>
          </Section>

          {/* ── Abstract ── */}
          <Section id="abstract" num="—" title="Abstract">
            {abstract.map((p, i) => <p key={i}>{p}</p>)}
          </Section>

          {/* ── Introduction ── */}
          <Section id="introduction" num="1" title="Introduction">
            {introduction.map((p, i) => <p key={i}>{p}</p>)}
          </Section>

          {/* ── Methodology ── */}
          <Section id="methodology" num="2" title="Search Strategy and Methodology">
            <h3 id="databases" className="scroll-mt-28 text-gray-900 dark:text-white font-sans font-medium text-base !mt-0 mb-3">2.1 Databases Searched</h3>
            <ul className="space-y-1.5 list-none">
              {methodology.databases.map((d) => (
                <li key={d.name} className="flex gap-2">
                  <span className="text-gray-400 dark:text-white/40 mt-1 shrink-0">–</span>
                  <span><strong className="text-gray-900 dark:text-white font-medium">{d.name}</strong> — {d.desc}</span>
                </li>
              ))}
            </ul>

            <h3 id="queries" className="scroll-mt-28 text-gray-900 dark:text-white font-sans font-medium text-base mt-7 mb-3">2.2 Keywords and Search Queries</h3>
            <div className="space-y-4">
              {methodology.queryGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-gray-900 dark:text-white font-medium mb-2 text-sm">{g.label}</div>
                  <ul className="space-y-1">
                    {g.queries.map((q) => (
                      <li key={q} className="font-sans text-xs text-gray-700 dark:text-white/80 pl-3 border-l-2 border-gray-200 dark:border-white/20">"{q}"</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 id="inclusion" className="scroll-mt-28 text-gray-900 dark:text-white font-sans font-medium text-base mt-7 mb-3">2.3 Inclusion Criteria</h3>
            <ol className="space-y-1.5 list-decimal list-inside">
              {methodology.inclusion.map((c) => <li key={c}>{c}</li>)}
            </ol>

            <h3 id="exclusion" className="scroll-mt-28 text-gray-900 dark:text-white font-sans font-medium text-base mt-7 mb-3">2.4 Exclusion Criteria</h3>
            <ol className="space-y-1.5 list-decimal list-inside">
              {methodology.exclusion.map((c) => <li key={c}>{c}</li>)}
            </ol>

            <h3 id="results" className="scroll-mt-28 text-gray-900 dark:text-white font-sans font-medium text-base mt-7 mb-3">2.5 Search Results</h3>
            <ul className="space-y-1.5 list-none">
              {[
                { label: 'Total Papers Retrieved', val: methodology.results.retrieved },
                { label: 'After Deduplication', val: methodology.results.dedup },
                { label: 'Final Analysis Set', val: methodology.results.final },
              ].map((r) => (
                <li key={r.label} className="flex gap-2">
                  <span className="text-gray-400 dark:text-white/40 mt-1 shrink-0">–</span>
                  <span><strong className="text-gray-900 dark:text-white font-medium">{r.label}:</strong> {r.val}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">{methodology.results.note}</p>
          </Section>

          {/* ── Summary Table ── */}
          <Section id="summary" num="3" title="Summary Table of Selected Papers">
            <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none">
              <table className="min-w-[1100px] w-full text-xs font-sans">
                <thead>
                  <tr className="text-left text-gray-600 dark:text-white/70 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                    {summaryTableColumns.map((c) => (
                      <th key={c} className="px-4 py-3 font-medium whitespace-nowrap">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {summaryTable.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/70 dark:bg-white/[0.03] transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 align-top text-gray-800 dark:text-white/90 min-w-[140px]">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Annotated Bibliography ── */}
          <Section id="annotation" num="4" title="Annotated Bibliography: Top 20 Most Relevant Papers">
            <div className="space-y-4 !mt-0">
              {bibliography.map((b) => (
                <Card key={b.id}>
                  <h3 className="text-gray-950 dark:text-white font-sans font-semibold text-sm mb-1">{b.id} {b.title}</h3>
                  <div className="flex gap-2 text-[11px] text-gray-600 dark:text-white/70 mb-3 font-sans">
                    <span>{b.year}</span><span>·</span>
                    <span>{b.venue}</span><span>·</span>
                    <span className="text-gray-800 dark:text-white/90">{b.tag}</span>
                  </div>
                  <p className="mb-3 text-sm">{b.body}</p>
                  <p className="text-sm">
                    <strong className="text-gray-950 dark:text-white font-medium">Relevance:</strong>{' '}
                    <span className="text-gray-900 dark:text-white">{b.relevance}</span>
                  </p>
                </Card>
              ))}
            </div>
          </Section>

          {/* ── Thematic Synthesis ── */}
          <Section id="thematic" num="5" title="Thematic Synthesis">
            <div className="space-y-10 !mt-0">
              {themes.map((t) => (
                <div key={t.id} id={t.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-2 text-gray-950 dark:text-white font-sans font-semibold text-sm mb-4">
                    <span className="text-gray-500 dark:text-white/50">{t.num}</span> {t.title}
                  </div>
                  <div className="space-y-3 mb-4">
                    {t.points.map((p) => (
                      <p key={p.label}>
                        <strong className="text-gray-950 dark:text-white font-semibold">{p.label}:</strong> {p.body}
                      </p>
                    ))}
                  </div>
                  <div className="rounded-xl p-4 border-l-2 border-gray-50 dark:border-white/50 dark:border-white/50 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <strong className="text-gray-900 dark:text-white font-semibold text-xs uppercase tracking-wide">Key Finding:</strong>{' '}
                    <span className="text-gray-950 dark:text-white">{t.finding}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── ML Comparison ── */}
          <Section id="ml-comparison" num="6" title="Comparison of ML Approaches">
            <p>{mlComparisonNote}</p>
            <h3 className="text-gray-900 dark:text-white font-sans font-medium text-sm mt-7 mb-3">6.1 Recommended Baseline Approaches</h3>
            <ol className="space-y-1.5 list-decimal list-inside">
              {baselines.map((b) => <li key={b}>{b}</li>)}
            </ol>
            <h3 className="text-gray-900 dark:text-white font-sans font-medium text-sm mt-7 mb-3">6.2 Feature Engineering Insights</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {featureEngineering.map((f) => (
                <Card key={f.label}>
                  <div className="text-gray-950 dark:text-white text-xs font-semibold mb-1.5">{f.label}</div>
                  <div className="text-gray-800 dark:text-white/90 text-sm">{f.body}</div>
                </Card>
              ))}
            </div>
            <h3 className="text-gray-900 dark:text-white font-sans font-medium text-sm mt-7 mb-3">6.3 Evaluation Metrics Summary</h3>
            <ul className="space-y-1.5 list-none">
              {metricsSummary.map((m) => (
                <li key={m} className="flex gap-2">
                  <span className="text-gray-500 dark:text-white/50 mt-1 shrink-0">–</span><span>{m}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ── Datasets & Tools ── */}
          <Section id="datasets-tools" num="7" title="Datasets and Tools Inventory">
            <h3 className="text-gray-900 dark:text-white font-sans font-medium text-sm mb-3">7.1 Public Datasets</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none">
              <table className="min-w-[700px] w-full text-xs font-sans">
                <thead>
                  <tr className="text-left text-gray-600 dark:text-white/70 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                    {['Dataset', 'Description', 'Use Cases', 'Papers'].map((h) => (
                      <th key={h} className="px-4 py-3 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {datasets.map((d) => (
                    <tr key={d.name} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/70 dark:bg-white/[0.03] transition-colors">
                      <td className="px-4 py-3 text-gray-950 dark:text-white font-medium">{d.name}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-white/80">{d.desc}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-white/80">{d.use}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-white/70">{d.papers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-gray-900 dark:text-white font-sans font-medium text-sm mt-8 mb-3">7.2 Simulation Tools</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none">
              <table className="min-w-[700px] w-full text-xs font-sans">
                <thead>
                  <tr className="text-left text-gray-600 dark:text-white/70 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                    {['Tool', 'Description', 'Papers Using'].map((h) => (
                      <th key={h} className="px-4 py-3 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {simTools.map((t) => (
                    <tr key={t.name} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/70 dark:bg-white/[0.03] transition-colors">
                      <td className="px-4 py-3 text-gray-950 dark:text-white font-medium">{t.name}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-white/80">{t.desc}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-white/70">{t.papers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="italic text-gray-600 dark:text-white/70 text-sm mt-3">
              Recommendation: Future research should prioritize open-source code release for reproducibility and community validation.
            </p>
          </Section>

          {/* ── Gaps ── */}
          <Section id="gaps" num="8" title="Gaps and Open Problems">
            <div className="grid sm:grid-cols-2 gap-3 !mt-0">
              {gaps.map((g) => (
                <Card key={g.n}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-gray-800 dark:text-white/90 text-sm">{g.n}. {g.title}</span>
                  </div>
                  <span
                    className={`inline-block text-[10px] font-sans uppercase tracking-wide px-2 py-0.5 rounded-full border mb-3 ${
                      g.priority === 'High'
                        ? 'border-gray-600 text-gray-800 dark:text-white/90'
                        : g.priority === 'Medium'
                          ? 'border-gray-50 dark:border-white/50 dark:border-white/50 text-gray-700 dark:text-white/80'
                          : 'border-gray-400 dark:border-white/30 text-gray-600 dark:text-white/70'
                    }`}
                  >
                    {g.priority} priority
                  </span>
                  <p className="text-gray-800 dark:text-white/90 text-sm">{g.body}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* ── Research Questions ── */}
          <Section id="research-questions" num="9" title="Research Questions and Hypotheses">
            <div className="space-y-4 !mt-0">
              {researchQuestions.map((rq) => (
                <Card key={rq.id} accent>
                  <h3 className="text-gray-950 dark:text-white font-semibold text-sm mb-3">{rq.id}: {rq.title}</h3>
                  <p className="mb-2 text-sm">
                    <strong className="text-gray-950 dark:text-white font-semibold">Question:</strong> {rq.question}
                  </p>
                  <p className="mb-3 text-sm">
                    <strong className="text-gray-950 dark:text-white font-semibold">Hypothesis:</strong> {rq.hypothesis}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {rq.targets.map((t) => (
                      <li key={t} className="flex gap-2 text-gray-800 dark:text-white/90">
                        <span className="text-gray-500 dark:text-white/50 mt-1 shrink-0">–</span><span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          {/* ── Experimental Design ── */}
          <Section id="experimental" num="10" title="Suggested Experimental Design">
            <div className="space-y-8 !mt-0">
              {experimentalPhases.map((phase) => (
                <div key={phase.id}>
                  <h3 className="text-gray-950 dark:text-white font-sans font-semibold text-sm mb-3">{phase.id} {phase.title}</h3>
                  {phase.body && <p className="mb-4">{phase.body}</p>}
                  {phase.table && (
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none mt-3">
                      <table className="min-w-[600px] w-full text-xs font-sans">
                        <thead>
                          <tr className="text-left text-gray-600 dark:text-white/70 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                            {phase.table.columns.map((c) => (
                              <th key={c} className="px-4 py-3 font-medium">{c}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {phase.table.rows.map((row, i) => (
                            <tr key={i} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50/70 dark:bg-white/[0.03] transition-colors">
                              {row.map((cell, j) => (
                                <td key={j} className="px-4 py-3 text-gray-800 dark:text-white/90">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {phase.groups && (
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      {phase.groups.map((g) => (
                        <Card key={g.label}>
                          <div className="text-gray-900 dark:text-white text-xs font-semibold mb-2">{g.label}</div>
                          <ul className="space-y-1">
                            {g.items.map((it) => (
                              <li key={it} className="flex gap-2 text-gray-800 dark:text-white/90 text-sm">
                                <span className="text-gray-500 dark:text-white/50 shrink-0">–</span><span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* ── Key Papers ── */}
          <section id="key-papers" className="scroll-mt-28 py-12">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-instrument-serif italic text-gray-300 dark:text-white/30 text-lg">★</span>
              <h2 className="font-instrument-serif text-gray-900 dark:text-white text-2xl sm:text-3xl leading-tight">
                Key Papers Closely Related to Proposed Work
              </h2>
            </div>
            <Divider />
            <p className="mt-7 text-gray-700 dark:text-white/80 text-sm mb-8">{keyPapersIntro}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyPapers.map((p) => (
                <div
                  key={p.title}
                  className={`rounded-2xl p-5 border border-gray-100 dark:border-white/10 border-l-2 ${
                    p.tier === 1 ? 'border-l-gray-500' : 'border-l-gray-300'
                  } bg-white dark:bg-black shadow-sm dark:shadow-none`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-sans uppercase tracking-wide px-2 py-1 rounded-full border ${
                      p.tier === 1 ? 'border-gray-400 dark:border-white/30 text-gray-600 dark:text-white/70' : 'border-gray-200 dark:border-white/20 text-gray-400 dark:text-white/40'
                    }`}>
                      {p.badge}
                    </span>
                    <span className="text-gray-400 dark:text-white/40 text-xs font-sans">{p.year}</span>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-sans font-semibold text-sm mb-1">{p.title}</h3>
                  <div className="text-gray-600 dark:text-white/70 text-xs mb-3">{p.venue}</div>
                  <ul className="space-y-1 text-gray-700 dark:text-white/80 text-sm mb-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-gray-300 dark:text-white/30 shrink-0">–</span><span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-700 dark:text-white/80">
                    <strong className="text-gray-900 dark:text-white font-semibold">Relevance:</strong>{' '}{p.relevance}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

/* ─── Sidebar nav ───────────────────────────────────────────── */

function SidebarNav({ jump, linkClass }: { jump: (id: string) => void; linkClass: (id: string) => string }) {
  return (
    <nav className="space-y-0.5">
      <div className="text-[10px] font-sans uppercase tracking-widest text-gray-300 dark:text-white/30 px-3 pt-1 pb-2">Contents</div>
      {navItems.map((n) => (
        <div key={n.id}>
          <button onClick={() => jump(n.id)} className={linkClass(n.id)}>{n.label}</button>
          {n.sub && (
            <div className="ml-3 border-l border-gray-100 dark:border-white/10 pl-2 mt-0.5 mb-0.5">
              {n.sub.map((s) => (
                <button key={s.id} onClick={() => jump(s.id)} className={`${linkClass(s.id)} text-xs`}>
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="text-[10px] font-sans uppercase tracking-widest text-gray-300 dark:text-white/30 px-3 pt-4 pb-2">Highlights</div>
      <button onClick={() => jump('key-papers')} className={linkClass('key-papers')}>★ Key Related Papers</button>
    </nav>
  )
}
