import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
    {
        title: "AutoniMake – AI Robotics Platform",
        description: "A code-free AI robotics platform enabling real-time computer vision model training and direct hardware control through a web-based interface. Integrated a Raspberry Pi and ESP32 for vision processing and low-level device control, with a lightweight CNN model and custom serial communication for low-latency motor and sensor control.",
        image: "/autonimake-image.jpg",
        tags: ["Raspberry Pi", "ESP32", "Python", "OpenCV", "TensorFlow"],
        github: "https://github.com/rudrashukla7/Autonimake",
    },
    {
        title: "Automatic Blinds Controller",
        description: "An ESP32-based automatic blinds controller with precise bidirectional stepper motor control. Developed an embedded control system with a web-based interface for real-time manual and scheduled control over WiFi, emphasizing IoT connectivity, power management, and real-world automation.",
        image: "/project2.jpg",
        tags: ["ESP32", "C/C++", "Embedded Systems", "IoT"],
        github: "https://github.com/rudrashukla7/Automatic-Blinds-Controller",
    },
    {
        title: "Computer Vision Pong",
        description: "An interactive Pong game controlled entirely through computer vision using real-time hand tracking to replace traditional input devices. Built with OpenCV to detect and track player movement, translating it into responsive in-game controls with optimized latency for smooth gameplay.",
        image: "/CV-Pong.jpg",
        tags: ["Python", "OpenCV", "Computer Vision"],
        github: "https://github.com/rudrashukla7/Computer-Vision-Pong",
    },
    {
        title: "LED Sign Board",
        description: "A custom 28×8 LED sign board built with an ESP32 microcontroller, CNC-machined enclosure, and hand-soldered electronics. Integrated and configured WLED firmware for real-time control via a web interface over a local network, highlighting hands-on hardware design and system integration.",
        image: "/SignBoard.jpg",
        tags: ["ESP32", "WLED", "CNC Machining", "Soldering"],
        github: null,
    },
]

const ProjectCard = ({ project, idx }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={project.github || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-in transition-all duration-300 block relative rounded-2xl"
            style={{
                animationDelay: `${(idx + 1) * 100}ms`,
                textDecoration: "none",
                cursor: project.github ? "pointer" : "default",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Border overlay — sits on top of everything including the image */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 z-10"
                style={{
                    border: hovered
                        ? "1px solid color-mix(in srgb, var(--color-primary) 40%, transparent)"
                        : "1px solid color-mix(in srgb, var(--color-border) 50%, transparent)",
                    boxShadow: hovered
                        ? "0 8px 30px color-mix(in srgb, var(--color-primary) 12%, transparent)"
                        : "none",
                }}
            />

            {/* Card content */}
            <div
                className="glass rounded-2xl overflow-hidden h-full"
                style={{
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "transform 0.3s ease",
                }}
            >
                {/* Image with zoom on hover */}
                <div className="relative overflow-hidden aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                    {/* GitHub icon overlay */}
                    {project.github && (
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                            style={{ opacity: hovered ? 1 : 0 }}
                        >
                            <div className="p-3 rounded-full glass" style={{ color: "var(--color-primary)" }}>
                                <GithubIcon className="w-6 h-6" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <h3
                            className="text-xl font-semibold transition-colors duration-200"
                            style={{ color: hovered ? "var(--color-primary)" : "var(--color-foreground)" }}
                        >
                            {project.title}
                        </h3>
                        <ArrowUpRight
                            className="w-5 h-5 flex-shrink-0 transition-all duration-200"
                            style={{
                                color: hovered ? "var(--color-primary)" : "var(--color-muted-foreground)",
                                transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
                            }}
                        />
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIdx) => (
                            <span
                                key={tagIdx}
                                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default"
                                style={{
                                    backgroundColor: "var(--color-surface)",
                                    border: "1px solid color-mix(in srgb, var(--color-border) 50%, transparent)",
                                    color: "var(--color-muted-foreground)",
                                    display: "inline-block",
                                }}
                                onMouseEnter={e => {
                                    e.stopPropagation()
                                    e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                                    e.currentTarget.style.color = "var(--color-primary)"
                                    e.currentTarget.style.transform = "scale(1.08)"
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-border) 50%, transparent)"
                                    e.currentTarget.style.color = "var(--color-muted-foreground)"
                                    e.currentTarget.style.transform = "scale(1)"
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
            />
            <div
                className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-highlight) 5%, transparent)" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-secondary-foreground)" }}>
                        Featured <span style={{ color: "white" }}>Projects</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>

                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a
                        href="https://github.com/rudrashukla7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    )
}