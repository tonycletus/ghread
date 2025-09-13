import * as fs from 'fs';
import * as path from 'path';
import { GhreadConfig, Theme } from '../types';

export const generateReadme = async (config: GhreadConfig): Promise<void> => {
  const template = getTemplate(config.theme);
  
  // Replace placeholders with user data
  const readmeContent = template
    .replace(/\{\{name\}\}/g, config.name || 'Your Name')
    .replace(/\{\{username\}\}/g, config.username || 'yourusername')
    .replace(/\{\{title\}\}/g, config.title || 'Developer')
    .replace(/\{\{bio\}\}/g, config.bio || 'Passionate developer building amazing things')
    .replace(/\{\{twitter\}\}/g, config.twitter || '')
    .replace(/\{\{linkedin\}\}/g, config.linkedin || '')
    .replace(/\{\{email\}\}/g, config.email || '')
    .replace(/\{\{website\}\}/g, config.website || '')
    .replace(/\{\{theme\}\}/g, config.theme || 'tokyonight');

  // Write README.md
  fs.writeFileSync('README.md', readmeContent);
  
  // Create config file for future use
  const configContent = JSON.stringify(config, null, 2);
  fs.writeFileSync('ghread.config.json', configContent);
};

const getTemplate = (theme: Theme): string => {
  return `# Hi there 👋

**Welcome to my corner of the digital world!** ✨

I'm **{{name}}**, and this profile is a glimpse into my journey as a {{title}}.

---

### 🚀 About Me
- 🔥 **Passion**: {{bio}}
- 🌱 **Growth**: Lifelong learner, exploring tech and coding every day
- 👯 **Collaboration**: Open to open-source and research collaborations
- 💬 **Focus**: Tech, AI, coding, and privacy-aware systems
- 💎 **Beyond Code**: Traveler, family-oriented, and driven by curiosity
- 💡 **Fun fact**: I drink Garri, not Coffee 😅

📫 Connect with me:{{#if twitter}}
[![Twitter Badge](https://img.shields.io/badge/-@{{twitter}}-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/{{twitter}}){{/if}}{{#if linkedin}}
[![LinkedIn Badge](https://img.shields.io/badge/-{{name}}-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/{{linkedin}}){{/if}}{{#if email}}
[![Email Badge](https://img.shields.io/badge/-{{email}}-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:{{email}}){{/if}}{{#if website}}
[![Website Badge](https://img.shields.io/badge/-Website-000000?style=flat&logo=About.me&logoColor=white)]({{website}}){{/if}}

---

### 📊 GitHub Stats (auto-updating)
![{{name}}'s GitHub stats](https://github-readme-stats.vercel.app/api?username={{username}}&show_icons=true&count_private=true&theme={{theme}})

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={{username}}&layout=compact&count_private=true&theme={{theme}})

![GitHub Streak](https://streak-stats.demolab.com?user={{username}}&theme={{theme}}&hide_border=false)

---

### 🖼 Contribution Graph
![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username={{username}}&theme={{theme}}&hide_border=false)

---

✨ *"Let's change the world one code at a time."*`;
};
