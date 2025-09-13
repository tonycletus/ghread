export interface GhreadConfig {
  name: string;
  username: string;
  title: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  theme: Theme;
}

export type Theme = 
  | 'tokyonight' 
  | 'dark' 
  | 'radical' 
  | 'merko' 
  | 'gruvbox' 
  | 'dracula';

export interface InquirerAnswers {
  name: string;
  username: string;
  title: string;
  bio: string;
  twitter: string;
  linkedin: string;
  email: string;
  website: string;
  theme: Theme;
}

export interface GenerateOptions {
  config?: string;
}
