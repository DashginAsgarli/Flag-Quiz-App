export function Spinner({ size = "md", color = "red", fullScreen = false }) {
    const sizes = { sm: "w-5 h-5 border-2", md: "w-8 h-8 border-2", lg: "w-12 h-12 border-[3px]", xl: "w-16 h-16 border-4" };
    const colors = { red: "border-red-600", blue: "border-blue-500", slate: "border-slate-600", white: "border-white" };

    const spinner = (<div className={`${sizes[size]} ${colors[color]} border-t-transparent rounded-full animate-spin`} />);

    if (fullScreen) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-linear-to-br from-slate-50 to-slate-100">
                {spinner}
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest animate-pulse">Yüklənir...</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-8">
            {spinner}
        </div>
    );
}