import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/layout/Footer";




function App() {
  return (
    
    <div className="min-h-screen w-screen max-w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}

export default App
