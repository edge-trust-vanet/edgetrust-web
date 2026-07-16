import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Moon, Sun, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogData'

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  const post = blogPosts.find(p => p.id === id)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
    requestAnimationFrame(() => setMounted(true))
  }, [id])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#080a0e] text-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-instrument-serif mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/blog')} className="text-blue-500 hover:underline">
            Return to Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#080a0e] text-gray-900 dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 pb-24">
      
      {/* ── Top Bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 bg-gray-50/80 dark:bg-[#080a0e]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium hidden sm:inline">Back to Blog</span>
          </button>
          <Link to="/" className="font-sans font-semibold text-lg tracking-tight text-gray-900 dark:text-white hidden sm:block">
            Edge Trust Vanet
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/survey" className="text-sm font-medium text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors">
            Survey
          </Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main 
        className="pt-32 px-6 md:px-12 max-w-3xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
            <span className="text-xs text-gray-500 dark:text-white/40">
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
            <span className="text-xs text-gray-500 dark:text-white/40 flex items-center gap-1.5">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
          <h1 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight mb-8">
            {post.title}
          </h1>
        </div>

        <div className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden mb-12 shadow-lg">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <article className="prose prose-lg dark:prose-invert prose-gray max-w-none font-sans font-light text-gray-800 dark:text-white/80 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? "text-xl md:text-2xl font-instrument-serif leading-relaxed text-gray-900 dark:text-white mb-8" : "mb-6"}>
              {paragraph}
            </p>
          ))}
        </article>

      </main>
    </div>
  )
}
