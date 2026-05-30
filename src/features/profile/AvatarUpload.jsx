import { useRef } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

export function AvatarUpload() {
    const { user, updateUser } = useAuth();
    const inputRef = useRef();

    const handleFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            alert("Şəkil maksimum 2MB ola bilər");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => updateUser({ avatar: reader.result });
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative group w-20 h-20 cursor-pointer" onClick={() => inputRef.current?.click()}>
            {user?.avatar ? (
                <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-lg" />
            ) : (
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-lg">
                    <FaUserCircle size={48} className="text-red-400" />
                </div>
            )}
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaCamera size={20} className="text-white" />
            </div>
            <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleFile} />
        </div>
    );
}