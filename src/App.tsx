import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/section/hero/Hero'
import { ClipPaths } from './components/shared/ClipPaths'

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <ClipPaths />
      <Navbar />

      {/* Content starts here */}
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
