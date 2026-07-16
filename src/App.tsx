import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Survey from './pages/Survey'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  )
}
