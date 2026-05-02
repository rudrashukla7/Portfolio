import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Analytics } from "@vercel/analytics/react"

const dots = Array.from({ length: 30 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 20}s`,
    delay: `${Math.random() * 5}s`,
}))

function App() {
    return (
        <div className="relative">
            {/* Global Floating Dots */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {dots.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            left: dot.left,
                            top: dot.top,
                            animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                            animationDelay: dot.delay,
                        }}
                    />
                ))}
            </div>

            <Navbar />
            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <Analytics />
        </div>
    )
}

export default App;