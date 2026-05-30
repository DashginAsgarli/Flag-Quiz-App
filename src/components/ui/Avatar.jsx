import { FaUserCircle } from "react-icons/fa";

export function Avatar({ src, name, size = "md", className = "" }) {
    const sizes = {
        sm: "w-8 h-8 text-lg rounded-xl",
        md: "w-12 h-12 text-2xl rounded-2xl",
        lg: "w-20 h-20 text-4xl rounded-2xl",
        xl: "w-28 h-28 text-6xl rounded-3xl",
    };

    if (src) {
        return (
            <img src={src} alt={name ?? "avatar"} className={`${sizes[size]} object-cover border-2 border-white shadow-lg ${className}`} />
        );
    }

    const initials = name ? name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() : null;

    if (initials) {
        const colors = ["bg-red-100 text-red-600", "bg-emerald-100 text-emerald-600", "bg-blue-100 text-blue-600", "bg-purple-100 text-purple-600", "bg-amber-100 text-amber-600"];
        const colorIdx = name.charCodeAt(0) % colors.length;
        const textSizes = { sm: "text-xs", md: "text-sm", lg: "text-xl", xl: "text-3xl" };
        return (
            <div className={`${sizes[size]} ${colors[colorIdx]} flex items-center justify-center font-black border-2 border-white shadow-lg ${textSizes[size]} ${className}`}>
                {initials}
            </div>
        );
    }

    return (
        <div className={`${sizes[size]} bg-red-100 flex items-center justify-center border-2 border-white shadow-lg ${className}`}>
            <FaUserCircle className="text-red-400 w-3/4 h-3/4" />
        </div>
    );
}