import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const readSaved = (): Language => {
  try {
    return localStorage.getItem('wedding_lang') === 'hi' ? 'hi' : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(readSaved);

  useEffect(() => {
    // CSS keys Hindi typography off html[lang="hi"]
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('wedding_lang', lang);
    } catch {}
  }, [lang]);

  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
