export interface GhreadConfig {
  name: string;
  username: string;
  title: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  github?: string;
  stackoverflow?: string;
  theme: Theme;
  sections: {
    aboutMe: boolean;
    githubStats: boolean;
    topLanguages: boolean;
    streak: boolean;
    contributionGraph: boolean;
    achievementGallery: boolean;
    techTools: boolean;
    blogArticles: boolean;
    featuredProjects: boolean;
    funSections: boolean;
    realTimeStats: boolean;
  };
  customSections?: string[];
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
  github: string;
  stackoverflow: string;
  theme: Theme;
  sections: string[];
}

export interface GenerateOptions {
  config?: string;
}
