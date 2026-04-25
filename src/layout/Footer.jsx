import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/SocialIcons";

const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/rudrashukla7", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/shukla-rudra/", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:rudra.shukla@uwaterloo.ca", label: "Email" },
]

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className="py-12"
            style={{ borderTop: "1px solid var(--color-border)" }}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            aria-label="Home"
                            className="inline-block transition-transform duration-200"
                            style={{ textDecoration: "none" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)" }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
                        >
                            <img
                                src="/profilephoto.png"
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover inline-block"
                                style={{
                                    border: "2px solid var(--color-primary)",
                                    boxShadow: "0 0 10px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                                }}
                            />
                        </a>
                        <p className="text-sm mt-2" style={{ color: "var(--color-muted-foreground)" }}>
                            © {currentYear} Rudra Shukla. All rights reserved.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm transition-colors duration-200"
                                style={{ color: "var(--color-muted-foreground)", textDecoration: "none" }}
                                onMouseEnter={e => { e.currentTarget.style.color = "var(--color-foreground)" }}
                                onMouseLeave={e => { e.currentTarget.style.color = "var(--color-muted-foreground)" }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full glass transition-all duration-200"
                                style={{ color: "var(--color-foreground)", textDecoration: "none" }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = "var(--color-primary)"
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--color-primary) 10%, transparent)"
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = "var(--color-foreground)"
                                    e.currentTarget.style.backgroundColor = "transparent"
                                }}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}