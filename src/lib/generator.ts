import * as fs from 'fs';
import * as path from 'path';
import { GhreadConfig, Theme } from '../types';

export const generateReadme = async (config: GhreadConfig): Promise<void> => {
  const template = getTemplate(config);

  // Write README.md
  fs.writeFileSync('README.md', template);
  
  // Create config file for future use
  const configContent = JSON.stringify(config, null, 2);
  fs.writeFileSync('ghread.config.json', configContent);
};

const getTemplate = (config: GhreadConfig): string => {
  const sections = config.sections;
  
  let template = `# Hi there

**Welcome to my corner of the digital world!**

I'm **${config.name}**, and this profile is a glimpse into my journey as a ${config.title}.

---

`;

  // About Me Section
  if (sections.aboutMe) {
    template += `### About Me
- **Passion**: ${config.bio}
- **Growth**: Continuously learning and exploring new technologies
- **Collaboration**: Open to open-source contributions and research collaborations
- **Focus**: Building innovative solutions and solving complex problems
- **Beyond Code**: Technology, innovation, and continuous improvement

---
`;
  }

  // Contact Section
  template += `### Connect with Me
`;
  if (config.twitter) {
    template += `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${config.twitter})
`;
  }
  if (config.linkedin) {
    template += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/${config.linkedin})
`;
  }
  if (config.github) {
    template += `[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${config.github})
`;
  }
  if (config.website) {
    template += `[![Website](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](${config.website})
`;
  }
  if (config.email) {
    template += `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${config.email})
`;
  }

  template += `
---

`;

  // GitHub Analytics Section
  if (sections.githubStats || sections.topLanguages) {
    template += `### GitHub Analytics
<p align="center">
`;
    if (sections.githubStats) {
      template += `  <img src="https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&count_private=true&theme=${config.theme}" height="180"/>
`;
    }
    if (sections.topLanguages) {
      template += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&count_private=true&theme=${config.theme}" height="180"/>
`;
    }
    template += `</p>

`;
  }

  // Streak Section
  if (sections.streak) {
    template += `<p align="center">
  <img src="https://streak-stats.demolab.com?user=${config.username}&theme=${config.theme}&hide_border=false" height="180"/>
</p>

---
`;
  }

  // Contribution Heatmap Section
  if (sections.contributionGraph) {
    template += `### Contribution Heatmap
![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=${config.username}&theme=${config.theme}&hide_border=false)

---
`;
  }

  // Achievement Gallery Section
  if (sections.achievementGallery) {
    template += `### Achievement Gallery
<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${config.username}&theme=${config.theme}&no-frame=true&row=1&column=6&margin-h=10&margin-w=10" />
</div>

---
`;
  }

  // Tech & Tools Section
  if (sections.techTools) {
    template += `### Tech & Tools
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)

**Databases**  
![Postgres](https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

---
`;
  }

  // Latest Articles Section
  if (sections.blogArticles) {
    template += `### Latest Articles
I also write about technology and innovation:  

<!-- BLOG-POST-LIST:START -->
- [Your Latest Article Title](https://your-blog.com/latest-article)  
- [Another Great Article](https://your-blog.com/another-article)  
- [Tech Insights and Tips](https://your-blog.com/tech-insights)  
<!-- BLOG-POST-LIST:END -->

---
`;
  }

  // Featured Projects Section
  if (sections.featuredProjects) {
    template += `### Featured Projects
[![${config.username}](https://github-readme-stats.vercel.app/api/pin/?username=${config.username}&repo=your-repo&theme=${config.theme})](https://github.com/${config.username}/your-repo)  

---
`;
  }

  // Fun & Inspiration Section
  if (sections.funSections) {
    template += `### Fun & Inspiration
![Dev Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${config.theme})  
![Jokes](https://readme-jokes.vercel.app/api?theme=${config.theme})

---
`;
  }

  // Real-Time Stats Section
  if (sections.realTimeStats) {
    template += `### Real-Time Stats
![Profile Views](https://komarev.com/ghpvc/?username=${config.username}&label=Profile%20Views&color=0e75b6&style=for-the-badge)
![Followers](https://img.shields.io/github/followers/${config.username}?label=Followers&style=for-the-badge&color=blue)
![Stars](https://img.shields.io/github/stars/${config.username}?style=for-the-badge&color=yellow)

---
`;
  }

  // Custom Sections
  if (config.customSections && config.customSections.length > 0) {
    config.customSections.forEach(section => {
      template += `### ${section}
Add your custom content here.

---
`;
    });
  }

  template += `*"Building the future, one line of code at a time."*`;

  return template;
};
