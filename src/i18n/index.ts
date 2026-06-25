import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import da from './locales/da.json'
import en from './locales/en.json'
import de from './locales/de.json'

export const SUPPORTED_LANGUAGES = [
  { code: 'da', label: 'DA' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
] as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      da: { translation: da },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'da',
    supportedLngs: ['da', 'en', 'de'],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  })

// Keep <html lang> and the document title in sync with the active language.
const syncDocumentLang = (lng: string) => {
  document.documentElement.lang = lng
  document.title = i18n.t('meta.title')
}
syncDocumentLang(i18n.resolvedLanguage ?? 'da')
i18n.on('languageChanged', syncDocumentLang)

export default i18n
