import { Cpu, Bot, Eye, Cable } from "lucide-react";

const highlights = [
    {
        icon: Cpu,
        title: "Embedded Systems",
        description: "Building real-time systems using ESP32, Arduino, and Raspberry Pi.",
    },
    {
        icon: Bot,
        title: "Robotics & Automation",
        description: "Designing and controlling hardware-software systems for real-world tasks.",
    },
    {
        icon: Eye,
        title: "Computer Vision",
        description: "Developing vision-based applications using OpenCV and machine learning.",
    },
    {
        icon: Cable,
        title: "Hardware-Software Integration",
        description: "Connecting web interfaces with physical systems for interactive control.",
    },
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
            <div className="w-full px-8 xl:px-16 relative z-10" style={{ maxWidth: "1400px", margin: "0 auto" }}>

                {/* Section Header*/}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--color-secondary-foreground)" }}>
                        About <span style={{ color: "white" }}>Me</span>
                    </h2>
                </div>

                {/* Main layout */}
                <div
                    className="flex flex-col lg:flex-row items-stretch w-full"
                    style={{ gap: "2.5rem", minHeight: "60vh" }}
                >
                    {/* Profile Image*/}
                    <div
                        className="relative animate-fade-in animation-delay-200 flex-shrink-0 self-stretch hidden lg:block"
                        style={{ width: "clamp(280px, 25vw, 420px)" }}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl animate-pulse"
                            style={{
                                background: "linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary) 30%, transparent), transparent, color-mix(in srgb, var(--color-primary) 10%, transparent))",
                                zIndex: 1
                            }}
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border h-full">
                            <img
                                src="/large-photo.jpg"
                                alt="Rudra Shukla"
                                className="w-full h-full object-cover rounded-2xl"
                                style={{ objectPosition: "center top", minHeight: "400px" }}
                            />
                        </div>
                    </div>

                    {/* Mobile image */}
                    <div className="relative animate-fade-in animation-delay-200 mx-auto lg:hidden" style={{ width: "280px" }}>
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl animate-pulse"
                            style={{
                                background: "linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary) 30%, transparent), transparent, color-mix(in srgb, var(--color-primary) 10%, transparent))"
                            }}
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                                src="/large-photo.jpg"
                                alt="Rudra Shukla"
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                                style={{ objectPosition: "center top" }}
                            />
                        </div>
                    </div>

                    {/* Bio + Badges  */}
                    <div className="flex flex-col gap-6 animate-fade-in animation-delay-300 flex-1 min-w-0">

                        {/* Bio */}
                        <div
                            className="space-y-4 text-base xl:text-lg"
                            style={{ color: "var(--color-muted-foreground)", lineHeight: "1.85" }}
                        >
                            <p>
                                I am a Mechatronics Engineering student at the University of Waterloo with a strong interest in
                                building systems that bridge hardware and software, especially embedded systems, robotics, and computer vision.
                            </p>
                            <p>
                                I have worked with platforms like ESP32, Arduino, and Raspberry Pi to build interactive, automated systems, and I have also spent several years teaching robotics and mentoring students along the way.
                            </p>
                            <p>
                                I enjoy turning theoretical engineering concepts into working systems, from hardware prototypes to software-controlled automation, and I am particularly interested in building projects that combine real-time sensing, control systems, and intelligent decision-making.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3 flex-1">
                            {highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="glass rounded-xl animate-fade-in transition-all duration-300 flex flex-col gap-2"
                                    style={{
                                        animationDelay: `${(idx + 1) * 100}ms`,
                                        padding: "1rem 1.1rem",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-3px)"
                                        e.currentTarget.style.boxShadow = "0 8px 24px color-mix(in srgb, var(--color-primary) 10%, transparent)"
                                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 50%, transparent)"
                                        e.currentTarget.style.color = "var(--color-primary)"
                                        e.currentTarget.style.transform = "scale(1.08)"
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "none"
                                        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-border) 50%, transparent)"
                                        e.currentTarget.style.color = "var(--color-muted-foreground)"
                                        e.currentTarget.style.transform = "scale(1)"
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
                                        >
                                            <item.icon className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                                        </div>
                                        <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                                    </div>
                                    <p style={{ color: "var(--color-muted-foreground)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}