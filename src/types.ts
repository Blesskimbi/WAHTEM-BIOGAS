export type Language = 'en' | 'fr';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: Record<Language, string>;
  category: string;
  image: string;
  description: Record<Language, string>;
}

export interface Stat {
  label: Record<Language, string>;
  value: string;
  suffix?: string;
}
