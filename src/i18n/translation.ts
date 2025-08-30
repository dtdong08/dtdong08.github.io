import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { vi } from "./languages/vi";

export type Translation = {
	[K in I18nKey]: string;
};

export const siteLanguage = "vi"; // or "en"

const map: { [key: string]: Translation } = {
	en: en,
	vi: vi,
};

export function i18n(key: I18nKey): string {
	return map[siteLanguage.toLowerCase()][key];
};
