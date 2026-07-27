import { cookies, headers } from "next/headers";
import { LANGUAGE_COOKIE, type Language } from "@/lib/i18n";

export async function getRequestLanguage(): Promise<Language> {
  const stored = (await cookies()).get(LANGUAGE_COOKIE)?.value;
  if (stored === "sv" || stored === "en") return stored;

  const accepted = (await headers()).get("accept-language") ?? "";
  for (const preference of accepted.split(",")) {
    const code = preference.trim().split(";")[0].split("-")[0].toLowerCase();
    if (code === "sv" || code === "en") return code;
  }

  return "sv";
}
