import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Moon, Sun, ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogData'

export default function Blog() {
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()
  
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
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#080a0e] text-gray-900 dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      
      {/* ── Top Bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 bg-gray-50/80 dark:bg-[#080a0e]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium hidden sm:inline">Back</span>
          </button>
          <Link to="/" className="font-sans font-semibold text-lg tracking-tight text-gray-900 dark:text-white">
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
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        
        {/* Header */}
        <div 
          className="mb-16 md:mb-24"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <h1 className="font-instrument-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white mb-6">
            Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl font-light leading-relaxed">
            Documenting our journey in building EdgeTrust-VANET. From foundational research to real-world edge deployment simulations.
          </p>
        </div>

        {/* Featured Post */}
        <div 
          onClick={() => navigate(`/blog/${featuredPost.id}`)}
          className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-none transition-all duration-500 mb-8 md:mb-12 flex flex-col md:flex-row cursor-pointer"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 150ms'
          }}
        >
          <div className="md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden">
            <img 
              src={featuredPost.imageUrl} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white/90">
                {featuredPost.category}
              </span>
              <span className="text-xs text-gray-500 dark:text-white/40 flex items-center gap-1.5">
                <Clock size={12} /> {featuredPost.readTime}
              </span>
            </div>
            <h2 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-8">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-gray-900 dark:text-white mt-auto">
              <span>Read article</span>
              <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {otherPosts.map((post, i) => (
            <div 
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg dark:hover:shadow-none transition-all duration-500 flex flex-col cursor-pointer"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 800ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 100}ms`
              }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
                  <span className="text-xs text-gray-500 dark:text-white/40">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-instrument-serif text-xl md:text-2xl text-gray-900 dark:text-white mb-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                  <span>Read article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}
