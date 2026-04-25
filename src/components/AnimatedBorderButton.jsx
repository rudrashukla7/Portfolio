export const AnimatedBorderButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative bg-transparent transition-all duration-1000 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border"
            style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-foreground)",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-primary) 50%, transparent)"
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--color-border)"
            }}
        >
            {/* Animated SVG Border */}
            <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
            >
                <path
                    d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="400 550"
                    strokeDashoffset="400"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animated-border-path"
                />
            </svg>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};