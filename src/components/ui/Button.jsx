export function Button({ children, variant = "primary", size = "md", disabled = false, loading = false, onClick, type = "button", className = "", fullWidth = false, }) {

    const base = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700 shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(220,38,38,0.5)] hover:-translate-y-0.5",
        secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] hover:-translate-y-0.5",
        ghost: "bg-slate-100 text-slate-700 hover:bg-slate-200",
        outline: "border border-slate-200 text-slate-700 hover:border-slate-400 bg-white hover:bg-slate-50",
        danger: "bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white",
        success: "bg-emerald-500 text-white hover:bg-emerald-600",
    };

    const sizes = {
        xs: "text-[10px] px-3 py-1.5 rounded-lg",
        sm: "text-xs px-4 py-2 rounded-xl",
        md: "text-sm px-5 py-2.5 rounded-xl",
        lg: "text-base px-8 py-3.5 rounded-2xl",
    };

    return (
        <button type={type} disabled={disabled || loading} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}>
            {loading && (
                <svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            )}
            {children}
        </button>
    );
}