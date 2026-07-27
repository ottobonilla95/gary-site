import Link from "next/link";
import { getUi, type Language } from "@/lib/i18n";

export function Brand({ language, footer = false }: { language: Language; footer?: boolean }) {
  const t = getUi(language);
  return (
    <Link className={`brand ${footer ? "brand--footer" : ""}`} href="/" aria-label={t.brandHome}>
      <span className="brand__mark" aria-hidden="true">F</span>
      <span className="brand__copy">
        <strong>Flyttiva</strong>
        <small>{t.brandTagline}</small>
      </span>
    </Link>
  );
}
