import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaLock, FaCheckCircle } from "react-icons/fa";
import { Modal } from "../../components/ui/Modal";
import { useAuth } from "../../contexts/AuthContext";

export function PaymentModal({ isOpen, onClose, item }) {
    const { addCoin } = useAuth();
    const [step, setStep] = useState("form");
    const [card, setCard] = useState({ number: "", expiry: "", cvv: "", name: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const formatCard = v => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    const formatExpiry = v => {
        const clean = v.replace(/\D/g, "").slice(0, 4);
        return clean.length >= 3 ? `${clean.slice(0, 2)}/${clean.slice(2)}` : clean;
    };

    const validate = () => {
        const e = {};
        if (card.number.replace(/\s/g, "").length < 16) e.number = "Kart nömrəsi 16 rəqəm olmalıdır";
        if (card.expiry.length < 5) e.expiry = "MM/YY formatında daxil edin";
        if (card.cvv.length < 3) e.cvv = "CVV 3 rəqəm olmalıdır";
        if (!card.name.trim()) e.name = "Kart sahibinin adını daxil edin";
        setErrors(e);
        return !Object.keys(e).length;
    };

    const handlePay = async () => {
        if (!validate()) return;
        setLoading(true);
        await new Promise(r => setTimeout(r, 1500));
        addCoin(item?.coins ?? 0);
        setLoading(false);
        setStep("success");
    };

    const handleClose = () => {
        setStep("form");
        setCard({ number: "", expiry: "", cvv: "", name: "" });
        setErrors({});
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title={step === "form" ? "Ödəniş" : undefined}>
            {step === "success" ? (
                <div className="text-center py-6">
                    <FaCheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-xl font-black text-slate-900 mb-2">Ödəniş Uğurlu!</h3>
                    <p className="text-sm text-slate-500 mb-1">
                        <span className="font-bold text-slate-800">{item?.coins?.toLocaleString()}</span> Coin hesabınıza əlavə edildi.
                    </p>
                    <button onClick={handleClose} className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                        Bağla
                    </button>
                </div>
            ) : (
                <div>
                    <div className="mb-4 p-3 bg-slate-900 rounded-2xl flex items-center justify-between">
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Ödəniləcək məbləğ</p>
                            <p className="text-xl font-black text-white">${item?.price}</p>
                        </div>
                        <div className="flex gap-2">
                            <FaCcVisa className="text-white text-2xl opacity-80" />
                            <FaCcMastercard className="text-white text-2xl opacity-80" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Field label="Kart nömrəsi" error={errors.number}>
                            <input placeholder="0000 0000 0000 0000" value={card.number} onChange={e => setCard(p => ({ ...p, number: formatCard(e.target.value) }))} className="input-style" />
                        </Field>
                        <div className="grid grid-cols-2 gap-3">
                            <Field label="Son istifadə tarixi" error={errors.expiry}>
                                <input placeholder="MM/YY" value={card.expiry} onChange={e => setCard(p => ({ ...p, expiry: formatExpiry(e.target.value) }))} className="input-style" />
                            </Field>
                            <Field label="CVV" error={errors.cvv}>
                                <input placeholder="•••" maxLength={3} value={card.cvv} onChange={e => setCard(p => ({ ...p, cvv: e.target.value.replace(/\D/g, "") }))} className="input-style" />
                            </Field>
                        </div>
                        <Field label="Kart sahibinin adı" error={errors.name}>
                            <input placeholder="AD SOYAD" value={card.name} onChange={e => setCard(p => ({ ...p, name: e.target.value.toUpperCase() }))} className="input-style" />
                        </Field>
                    </div>

                    <button onClick={handlePay} disabled={loading} className="mt-5 w-full py-3.5 bg-red-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors disabled:opacity-60">
                        <FaLock size={12} />
                        {loading ? "Emal edilir..." : `$${item?.price} Ödə`}
                    </button>

                    <p className="text-[9px] text-slate-400 text-center mt-3 font-medium">
                        Bu bir simulyasiyadır. Heç bir real ödəniş aparılmır.
                    </p>
                </div>
            )}
        </Modal>
    );
}

function Field({ label, error, children }) {
    return (
        <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1">{label}</label>
            <div className={`[&_input]:w-full [&_input]:px-3 [&_input]:py-2.5 [&_input]:rounded-xl [&_input]:border [&_input]:text-sm [&_input]:outline-none [&_input]:transition-all [&_input]:bg-slate-50 ${error ? "[&_input]:border-red-300 [&_input]:focus:ring-red-500/10" : "[&_input]:border-slate-200 [&_input]:focus:border-slate-400 [&_input]:focus:ring-4 [&_input]:focus:ring-slate-500/10"}`}>
                {children}
            </div>
            {error && <p className="text-[10px] text-red-600 font-bold mt-1">{error}</p>}
        </div>
    );
}