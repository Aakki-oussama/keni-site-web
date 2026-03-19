import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/section/hero/Hero'
import { AboutUs } from './features/section/about/AboutUs'
import { ClipPaths } from './components/shared/ClipPaths'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <ClipPaths />
      <Navbar />

      {/* Content starts here */}
      <main>
        <Hero />
        <AboutUs />
      </main>
    </div>
  )
}

export default App
