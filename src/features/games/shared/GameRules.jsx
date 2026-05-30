import { useLanguage } from "../../../contexts/LanguageContext";

export function GameRules() {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 py-3 px-4 md:p-6 mb-4 sm:mb-6 hover:shadow-xl transition-shadow lg:hidden">
      <div className="text-xs text-slate-500">
        <p className="font-medium mb-2 text-sm md:text-base">{t("game.rules")}:</p>
        <ul className="space-y-1 md:leading-6 md:text-[15px] text-slate-400">
          {[t("game.rule1"), t("game.rule2"), t("game.rule3"), t("game.rule4")].map((r, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-bold shrink-0">•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}