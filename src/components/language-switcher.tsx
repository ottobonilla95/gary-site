"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import { LANGUAGE_COOKIE, type Language } from "@/lib/i18n";

export function LanguageSwitcher({ language, label }: { language: Language; label: string }) {
  const router = useRouter();

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    document.cookie = `${LANGUAGE_COOKIE}=${event.target.value}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <label className="language-switcher">
      <select value={language} onChange={changeLanguage} aria-label={label}>
        <option value="sv">🇸🇪 SV</option>
        <option value="en">🇬🇧 EN</option>
      </select>
    </label>
  );
}
