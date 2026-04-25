import { Button } from "@/components/Button";
import { Menu, X, Home } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${isScrolled ? "py-3" : "bg-transparent py-5"}`}
            style={isScrolled ? {
                backgroundColor: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "none",
                borderTop: "none",
            } : {
                borderTop: "none",
                borderBottom: "none",
                boxShadow: "none",
            }}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                
                {/* Left: Profile Picture Logo */}
                <div className="flex-1 flex justify-start">
                    <a
                        aria-label="Home"
                        className="transition-transform duration-200"
                        style={{ textDecoration: "none", display: "inline-block" }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)" }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                    >
                        <img
                            src="/profilephoto.png"
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                            style={{
                                border: "2px solid var(--color-primary)",
                                boxShadow: "0 0 10px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                            }}
                        />
                    </a>
                </div>

                {/* Center: Desktop Nav — Home | About Projects Experience */}
                <div className="hidden md:flex flex-[2] items-center justify-center shrink-0">
                    <div className="glass rounded-full px-1 py-1 flex items-center justify-center">

                        {/* Home Icon */}
                        <a
                            href="#"
                            aria-label="Home"
                            className="px-3 py-2 rounded-full transition-all duration-200 flex items-center"
                            style={{
                                color: "var(--color-muted-foreground)",
                                textDecoration: "none",
                                backgroundColor: "transparent",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = "var(--color-foreground)"
                                e.currentTarget.style.backgroundColor = "var(--color-surface)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = "var(--color-muted-foreground)"
                                e.currentTarget.style.backgroundColor = "transparent"
                            }}
                        >
                            <Home size={16} />
                        </a>

                        {/* Divider */}
                        <div
                            className="w-px h-4 mx-1"
                            style={{ backgroundColor: "var(--color-border)" }}
                        />

                        {/* Nav Links */}
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-3 py-2 text-sm rounded-full transition-all duration-200"
                                style={{
                                    color: "var(--color-muted-foreground)",
                                    textDecoration: "none",
                                    backgroundColor: "transparent",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = "var(--color-foreground)"
                                    e.currentTarget.style.backgroundColor = "var(--color-surface)"
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = "var(--color-muted-foreground)"
                                    e.currentTarget.style.backgroundColor = "transparent"
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Desktop CTA Button & Mobile Menu Button */}
                <div className="flex-1 flex justify-end">
                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            style={{ textDecoration: "none" }}
                            className="inline-block transition-transform duration-200"
                            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)" }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                        >
                            <Button size="sm">Contact Me</Button>
                        </a>
                    </div>
    
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 cursor-pointer"
                        style={{ color: "var(--color-foreground)", background: "none", border: "none" }}
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg py-2 transition-colors duration-200"
                                style={{ color: "var(--color-muted-foreground)", textDecoration: "none" }}
                                onMouseEnter={e => { e.currentTarget.style.color = "var(--color-foreground)" }}
                                onMouseLeave={e => { e.currentTarget.style.color = "var(--color-muted-foreground)" }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            style={{ textDecoration: "none" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Button className="w-full">Contact Me</Button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}