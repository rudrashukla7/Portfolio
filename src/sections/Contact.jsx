import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { Button } from "@/components/Button";
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "rudra.shukla@uwaterloo.ca",
        href: "mailto:rudra.shukla@uwaterloo.ca",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (647) 654-9116",
        href: "tel:+16476549116",
    },
    {
        icon: LinkedinIcon,
        label: "LinkedIn",
        value: "linkedin.com/in/shukla-rudra",
        href: "https://www.linkedin.com/in/shukla-rudra/",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Waterloo, ON, Canada",
        href: null,
    },
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );

            // Trigger mailto link
            window.location.href = `mailto:rudra.shukla@uwaterloo.ca?subject=${subject}&body=${body}`;

            setSubmitStatus({
                type: "success",
                message: "Opening your email client...",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("Mailto error:", err);
            setSubmitStatus({
                type: "error",
                message: "Failed to open email client. Please try again or email directly.",
            });
        } finally {
            setIsLoading(false);
            // Clear status message after 5 seconds to be clean
            setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-highlight) 5%, transparent)" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-sm font-medium tracking-wider uppercase animate-fade-in"
                        style={{ color: "var(--color-secondary-foreground)" }}
                    >
                        Get In Touch
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100"
                        style={{ color: "var(--color-secondary-foreground)" }}
                    >
                        Let's build{" "}
                        <span className="font-serif italic font-normal" style={{ color: "white" }}>
                            something great.
                        </span>
                    </h2>
                    <p className="animate-fade-in animation-delay-200" style={{ color: "var(--color-muted-foreground)" }}>
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div
                        className="glass p-8 rounded-3xl animate-fade-in animation-delay-300"
                        style={{ border: "1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)" }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                                    style={{
                                        backgroundColor: "var(--color-surface)",
                                        border: "1px solid var(--color-border)",
                                        color: "var(--color-foreground)",
                                    }}
                                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-primary)" }}
                                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border)" }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                                    style={{
                                        backgroundColor: "var(--color-surface)",
                                        border: "1px solid var(--color-border)",
                                        color: "var(--color-foreground)",
                                    }}
                                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-primary)" }}
                                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border)" }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                                    style={{
                                        backgroundColor: "var(--color-surface)",
                                        border: "1px solid var(--color-border)",
                                        color: "var(--color-foreground)",
                                    }}
                                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-primary)" }}
                                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border)" }}
                                />
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className="flex items-center gap-3 p-4 rounded-xl"
                                    style={{
                                        backgroundColor: submitStatus.type === "success"
                                            ? "color-mix(in srgb, #22c55e 10%, transparent)"
                                            : "color-mix(in srgb, #ef4444 10%, transparent)",
                                        border: `1px solid ${submitStatus.type === "success"
                                            ? "color-mix(in srgb, #22c55e 20%, transparent)"
                                            : "color-mix(in srgb, #ef4444 20%, transparent)"}`,
                                        color: submitStatus.type === "success" ? "#4ade80" : "#f87171",
                                    }}
                                >
                                    {submitStatus.type === "success"
                                        ? <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        : <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    }
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-2">
                                {contactInfo.map((item, i) => {
                                    const content = (
                                        <div
                                            className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200"
                                            style={{ textDecoration: "none" }}
                                            onMouseEnter={e => {
                                                if (item.href) e.currentTarget.style.backgroundColor = "var(--color-surface)"
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.backgroundColor = "transparent"
                                            }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                                                style={{
                                                    backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                                                    color: "var(--color-primary)",
                                                }}
                                            >
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                                                    {item.label}
                                                </div>
                                                <div className="font-medium" style={{ color: "var(--color-foreground)" }}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        </div>
                                    )

                                    return item.href ? (
                                        <a key={i} href={item.href} style={{ textDecoration: "none", display: "block" }}>
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={i}>{content}</div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div
                            className="glass rounded-3xl p-8"
                            style={{ border: "1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)" }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                                I'm currently open to new opportunities and exciting projects.
                                Whether you need a full-time engineer or a freelance consultant,
                                let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}