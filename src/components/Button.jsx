export const Button = ({ className = "", size = "default", children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 transition-all duration-200"

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

    return (
        <button
            className={classes}
            style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
                boxShadow: "0 4px 15px color-mix(in srgb, var(--color-primary) 25%, transparent)",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.9" }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
        >
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}