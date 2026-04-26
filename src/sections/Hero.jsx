import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, ExternalLink, ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon} from "@/components/SocialIcons";
import { useState } from "react";

const skills = [
    "React", "TypeScript", "Java", "C/C++", "Python", "ROS", "MATLAB", "Solidworks", "Arduino", "Raspberry Pi",
    "Docker", "PLC Programming", "Sketchup", "Soldering", "ESP32", "OpenCV", "FoxGlove", "3D Printing", "TensorFlow",
    "Tailwind CSS", "AutoCad", "Git",
]

const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/rudrashukla7", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/shukla-rudra/", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:rudra.shukla@uwaterloo.ca", label: "Email" },
]

export const Hero = () => {
    const [skillsExpanded, setSkillsExpanded] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-visible">

            {/* Main Content */}
            <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col items-center text-center">

                {/* Headline */}
                <div className="w-full space-y-4 mb-8 animate-fade-in animation-delay-100">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Rudra Shukla
                    </h1>
                    <p
                        className="text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200"
                        style={{ color: "var(--color-muted-foreground)" }}
                    >
                        Hi, I'm Rudra Shukla, a Mechatronics Engineering student at the University of Waterloo
                        with a passion for robotics, embedded systems, and software development.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in animation-delay-300">
                    <a
                        href="#projects"
                        style={{ textDecoration: "none" }}
                        className="inline-block transition-transform duration-200"
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)" }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                    >
                        <Button size="lg">
                            View Projects <ArrowRight className="w-5 h-5" />
                        </Button>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                        className="inline-block transition-transform duration-200"
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)" }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                    >
                        <Button size="lg">
                            <ExternalLink className="w-5 h-5" />
                            View Resume
                        </Button>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 animate-fade-in animation-delay-400 mb-8">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass transition-all duration-300"
                            style={{ color: "var(--color-foreground)", textDecoration: "none" }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = "var(--color-primary)"
                                e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 10%, transparent)"
                                e.currentTarget.style.transform = "translateY(-3px)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = "var(--color-foreground)"
                                e.currentTarget.style.backgroundColor = "transparent"
                                e.currentTarget.style.transform = "translateY(0)"
                            }}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="w-full animate-fade-in animation-delay-600 flex flex-col items-center">

                    {/* Toggle Button — styled as a badge */}
                    <button
                        onClick={() => setSkillsExpanded(prev => !prev)}
                        className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 mb-6"
                        style={{
                            color: skillsExpanded ? "var(--color-primary)" : "var(--color-muted-foreground)",
                            border: `1px solid ${skillsExpanded
                                ? "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                                : "color-mix(in srgb, var(--color-border) 60%, transparent)"}`,
                            cursor: "pointer",
                            backgroundColor: skillsExpanded
                                ? "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                                : "var(--color-surface)",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color = "var(--color-primary)"
                            e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                            e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color = skillsExpanded ? "var(--color-primary)" : "var(--color-muted-foreground)"
                            e.currentTarget.style.borderColor = skillsExpanded
                                ? "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                                : "color-mix(in srgb, var(--color-border) 60%, transparent)"
                            e.currentTarget.style.backgroundColor = skillsExpanded
                                ? "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                                : "var(--color-surface)"
                        }}
                    >
                        {skillsExpanded ? (
                            <>Hide Skills <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>Show Skills <ChevronDown className="w-4 h-4" /></>
                        )}
                    </button>

                    {/* Collapsed: Marquee */}
                    {!skillsExpanded && (
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
                            <div className="flex animate-marquee w-max">
                                {[...skills, ...skills].map((skill, idx) => (
                                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                                        <span
                                            className="text-xl font-semibold transition-colors cursor-default"
                                            style={{ color: "color-mix(in srgb, var(--color-muted-foreground) 50%, transparent)" }}
                                            onMouseEnter={e => { e.currentTarget.style.color = "var(--color-muted-foreground)" }}
                                            onMouseLeave={e => { e.currentTarget.style.color = "color-mix(in srgb, var(--color-muted-foreground) 50%, transparent)" }}
                                        >
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Expanded: Badge Grid */}
                    {skillsExpanded && (
                        <div className="flex flex-wrap justify-center gap-3 animate-fade-in w-full max-w-3xl">
                            {skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default"
                                    style={{
                                        backgroundColor: "var(--color-surface)",
                                        border: "1px solid color-mix(in srgb, var(--color-border) 50%, transparent)",
                                        color: "var(--color-muted-foreground)",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                                        e.currentTarget.style.color = "var(--color-primary)"
                                        e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 5%, transparent)"
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-border) 50%, transparent)"
                                        e.currentTarget.style.color = "var(--color-muted-foreground)"
                                        e.currentTarget.style.backgroundColor = "var(--color-surface)"
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10 transition-all duration-500"
                style={{ bottom: skillsExpanded ? "-3rem" : "2rem" }}
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 transition-all duration-200"
                    style={{ color: "var(--color-muted-foreground)", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--color-primary)" }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--color-muted-foreground)" }}
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}