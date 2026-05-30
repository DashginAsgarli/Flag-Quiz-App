import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export function Modal({ isOpen, onClose, title, children }) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                    <FaTimes size={12} className="text-slate-600" />
                </button>
                {title && (
                    <h3 className="text-lg font-black text-slate-900 mb-4">{title}</h3>
                )}
                {children}
            </div>
        </div>
    );
}