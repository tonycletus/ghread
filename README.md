# ghread

Generate beautiful GitHub README profiles instantly with a simple command.

[![npm version](https://badge.fury.io/js/ghread.svg)](https://badge.fury.io/js/ghread)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![tsup](https://img.shields.io/badge/bundled%20with-tsup-FF6B6B?logo=esbuild&logoColor=white)](https://tsup.egoist.dev/)

## Quick Start

```bash
# Install globally
npm install -g ghread

# Generate your README interactively
ghread init
```

## Examples

### Interactive Setup
```bash
$ ghread init

Welcome to ghread! Let's create your GitHub profile

? What's your name? Tony Cletus
? What's your GitHub username? tonycletus
? What's your professional title? Full Stack Developer
? Write a short bio about yourself: Passionate developer building amazing things
? Your Twitter handle (without @): iamtonycletus
? Your LinkedIn username: tonycletus
? Your email: hello@tonycletus.com
? Your website URL: https://tonycletus.com
? Choose a theme: Tokyo Night

README.md generated successfully!

Next steps:
1. Review your README.md file
2. Commit and push to your GitHub profile repository
3. Your profile will be live at github.com/tonycletus
```

### Generated README Preview
```markdown
# Hi there

**Welcome to my corner of the digital world!**

I'm **Tony Cletus**, and this profile is a glimpse into my journey as a Full Stack Developer.

---

### About Me
- **Passion**: Passionate developer building amazing things
- **Growth**: Lifelong learner, exploring tech and coding every day  
- **Collaboration**: Open to open-source and research collaborations  
- **Focus**: Tech, AI, coding, and privacy-aware systems  
- **Beyond Code**: Traveler, family-oriented, and driven by curiosity  
- **Fun fact**: I drink Garri, not Coffee  

Connect with me:  
[![Twitter Badge](https://img.shields.io/badge/-@iamtonycletus-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/iamtonycletus)  
[![LinkedIn Badge](https://img.shields.io/badge/-Tony%20Cletus-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tonycletus)  
[![Email Badge](https://img.shields.io/badge/-hello@tonycletus.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:hello@tonycletus.com)
[![Website Badge](https://img.shields.io/badge/-Website-000000?style=flat&logo=About.me&logoColor=white)](https://tonycletus.com)

---

### GitHub Stats (auto-updating)
![Tony Cletus's GitHub stats](https://github-readme-stats.vercel.app/api?username=tonycletus&show_icons=true&count_private=true&theme=tokyonight)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=tonycletus&layout=compact&count_private=true&theme=tokyonight)

![GitHub Streak](https://streak-stats.demolab.com?user=tonycletus&theme=tokyonight&hide_border=false)

---

### Contribution Graph
![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=tonycletus&theme=tokyonight&hide_border=false)

---

*"Let's change the world one code at a time."*
```

## Usage

### Interactive Setup
```bash
ghread init
```
This will guide you through creating your profile with prompts for:
- Name and GitHub username
- Professional title and bio
- Social media links (Twitter, LinkedIn, etc.)
- Theme selection

### From Config File
```bash
ghread generate
```
Uses your `ghread.config.json` file to generate the README.

### Programmatic Usage
```typescript
import { generateReadme, GhreadConfig } from 'ghread';

const config: GhreadConfig = {
  name: 'Tony Cletus',
  username: 'tonycletus',
  title: 'Full Stack Developer',
  bio: 'Passionate developer building amazing things',
  twitter: 'iamtonycletus',
  linkedin: 'tonycletus',
  email: 'hello@tonycletus.com',
  website: 'https://tonycletus.com',
  theme: 'tokyonight'
};

// Generate README
await generateReadme(config);
```

## Features

- **Comprehensive Templates**: Professional GitHub profile layouts with advanced sections
- **Multiple Themes**: Choose from 6+ color themes (tokyonight, dark, radical, etc.)
- **Modular Sections**: Choose which sections to include (11 different sections available)
- **Advanced Analytics**: GitHub stats, contribution graphs, achievement gallery
- **Tech Stack Showcase**: Professional tech badges and tools display
- **Blog Integration**: Latest articles and blog posts section
- **Featured Projects**: Highlight your best projects with GitHub stats
- **Fun Elements**: Developer quotes and jokes for personality
- **Real-time Stats**: Profile views, followers, and stars tracking
- **Auto-updating Content**: All stats update automatically
- **Fast Build**: Powered by [tsup](https://www.npmjs.com/package/tsup) and esbuild
- **TypeScript**: Full type safety and modern development experience

## Themes

- `tokyonight` (default)
- `dark`
- `radical`
- `merko`
- `gruvbox`
- `dracula`

## Available Sections

Choose from 11 different sections to customize your profile:

- **About Me** - Personal introduction and bio
- **GitHub Analytics** - Stats and top languages
- **GitHub Streak** - Contribution streak display
- **Contribution Heatmap** - Visual activity graph
- **Achievement Gallery** - GitHub profile trophies
- **Tech & Tools** - Technology stack badges
- **Latest Articles** - Blog posts and articles
- **Featured Projects** - Highlighted repositories
- **Fun & Inspiration** - Developer quotes and jokes
- **Real-Time Stats** - Profile views and followers
- **Custom Sections** - Add your own sections

## Configuration

Your `ghread.config.json` looks like this:

```json
{
  "name": "Tony Cletus",
  "username": "tonycletus",
  "title": "Full Stack Developer",
  "bio": "Passionate developer building innovative solutions",
  "twitter": "iamtonycletus",
  "linkedin": "tonycletus",
  "email": "hello@tonycletus.com",
  "website": "https://tonycletus.com",
  "github": "tonycletus",
  "stackoverflow": "123456",
  "theme": "tokyonight",
  "sections": {
    "aboutMe": true,
    "githubStats": true,
    "topLanguages": true,
    "streak": true,
    "contributionGraph": true,
    "achievementGallery": false,
    "techTools": false,
    "blogArticles": false,
    "featuredProjects": false,
    "funSections": false,
    "realTimeStats": false
  }
}
```

## Development

```bash
# Clone the repo
git clone https://github.com/tonycletus/ghread.git
cd ghread

# Install dependencies
npm install

# Build with tsup (powered by esbuild)
npm run build

# Link for local development
npm link

# Watch mode for development
npm run dev
```

## License

MIT © [Tony Cletus](https://github.com/tonycletus)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.