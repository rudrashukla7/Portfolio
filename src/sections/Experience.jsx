const education = [
    {
        degree: "Honours Mechatronics Engineering, Co-op (BASc)",
        school: "University of Waterloo",
        period: "2025 — 2030",
        detail: "Coursework: Data Structures & Algorithms, Circuits, Statics, Materials GPA: 3.9/4.0 | President's Scholar of Distinction",
    },
    {
        degree: "Ontario Secondary School Diploma",
        school: "J. Clarke Richardson Collegiate",
        period: "2020 — 2025",
        detail: "Academic Bronze Medalist (Top 3 Grade 12 Average: 97%), Ontario Scholar, and Highest Proficiency Award in Computer Engineering.",
    },
]

const experiences = [
    {
        period: "Jan 2026 — Apr 2026",
        role: "Software Quality Analyst",
        company: "i4i (Infrastructures for Information Inc.)",
        description: "Performed structured software testing to ensure product reliability and quality at launch. Executed a high volume of test scripts daily, validating system behavior by comparing expected and actual results and identifying defects across a range of use cases. Collaborated closely with developers to log, track, and verify bugs through detailed reports, ensuring issues were clearly documented and resolved efficiently.",
        technologies: ["Software Testing", "QA", "Bug Tracking", "Test Scripts"],
    },
    {
        period: "Jan 2023 — Aug 2025",
        role: "Robotics Instructor",
        company: "OBOTZ – IQ Brainers Academy",
        description: "Began as a student and progressed into a teaching role, developing and delivering robotics curriculum for over 20 students. Taught core concepts including circuit design, electrical theory, and Arduino programming. Led hands-on sessions where students built obstacle-avoiding robots, robotic arms, and mini humanoid systems. Collaborated with industry professionals to refine curriculum content.",
        technologies: ["Arduino", "Circuit Design", "Python", "Curriculum Design"],
    },
    {
        period: "Sep 2021 — Jun 2025",
        role: "Mechanical & Design Lead – FIRST Tech Challenge",
        company: "J. Clarke Richardson Collegiate Robotics Team (StormBots)",
        description: "Led the mechanical design and development of a competitive robotics system using SolidWorks to design and optimize key subsystems including the drivetrain and scoring mechanisms. Applied torque analysis, gear ratios, and material selection to improve performance. Collaborated with the software team to integrate control systems and contributed to autonomous functionality, improving scoring consistency by 25% in competition.",
        technologies: ["SolidWorks", "C++", "Mechanical Design", "CAD"],
    },
    {
        period: "Sep 2023 — Jun 2025",
        role: "Warrant Officer First Class & Senior Aviation Instructor",
        company: "856 Royal Canadian Air Cadets",
        description: "Held a senior leadership role responsible for over 200 cadets, overseeing training, discipline, and overall operations. Planned and managed large-scale field training exercises involving up to 80 cadets. Completed advanced aviation training and later instructed cadets in flight theory, navigation, and aircraft systems.",
        technologies: ["Leadership", "Aviation Theory", "Training", "Operations"],
    },
]

// Bolds numeric values
const BoldNumbers = ({ text }) => {
    const parts = text.split(/(\b\d+%?\b)/g)
    return (
        <>
            {parts.map((part, i) =>
                /^\d+%?$/.test(part)
                    ? <strong key={i} style={{ color: "var(--color-foreground)", fontWeight: 700 }}>{part}</strong>
                    : part
            )}
        </>
    )
}

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Education ── */}
                <div className="text-center mb-10 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-secondary-foreground)" }}>
                        My <span style={{ color: "white" }}>Education</span>
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-20 max-w-4xl mx-auto">
                    {education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-2xl flex-1 transition-all duration-300 animate-fade-in"
                            style={{
                                padding: "1.4rem 1.6rem",
                                animationDelay: `${(idx + 1) * 100}ms`,
                                border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-4px)"
                                e.currentTarget.style.boxShadow = "0 8px 30px color-mix(in srgb, var(--color-primary) 10%, transparent)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            <span className="text-xs font-medium" style={{ color: "var(--color-primary)" }}>
                                {edu.period}
                            </span>
                            <h3 className="text-base font-semibold mt-1 mb-0.5">{edu.school}</h3>
                            <p className="text-sm" style={{ color: "var(--color-secondary-foreground)" }}>
                                {edu.degree}
                            </p>
                            <p className="text-xs mt-2" style={{ color: "var(--color-muted-foreground)", lineHeight: "1.7" }}>
                                {edu.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Experience */}
                <div className="text-center mb-10 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-secondary-foreground)" }}>
                        My <span style={{ color: "white" }}>Experience</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-2xl flex flex-col gap-4 transition-all duration-300 animate-fade-in"
                            style={{
                                padding: "1.4rem 1.6rem",
                                animationDelay: `${(idx + 1) * 100}ms`,
                                border: "1px solid color-mix(in srgb, var(--color-border) 50%, transparent)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-4px)"
                                e.currentTarget.style.boxShadow = "0 8px 30px color-mix(in srgb, var(--color-primary) 10%, transparent)"
                                e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 30%, transparent)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)"
                                e.currentTarget.style.boxShadow = "none"
                                e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-border) 50%, transparent)"
                            }}
                        >
                            {/* Header */}
                            <div>
                                <span className="text-xs font-medium" style={{ color: "var(--color-primary)" }}>
                                    {exp.period}
                                </span>
                                <h3 className="text-base font-semibold mt-0.5">{exp.role}</h3>
                                <p className="text-sm" style={{ color: "var(--color-secondary-foreground)" }}>
                                    {exp.company}
                                </p>
                            </div>

                            {/* Description  */}
                            <p className="text-sm" style={{ color: "var(--color-muted-foreground)", lineHeight: "1.75" }}>
                                <BoldNumbers text={exp.description} />
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {exp.technologies.map((tech, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            backgroundColor: "var(--color-surface)",
                                            color: "var(--color-muted-foreground)",
                                            border: "1px solid color-mix(in srgb, var(--color-border) 60%, transparent)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}