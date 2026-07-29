export interface AdvisoryLink {
  label: string;
  url: string;
  description?: string;
  category?: 'company' | 'studio' | 'initiative' | 'people' | 'news' | 'registry';
}

export interface NewsletterInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  url: string;
  icon: string;
}

export type ThemeMode = 'light' | 'dark';
export type LanguageMode = 'en' | 'fi';
