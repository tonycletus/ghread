#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { generateReadme } from '../lib/generator';
import { GhreadConfig, InquirerAnswers, GenerateOptions, Theme } from '../types';

program
  .name('ghread')
  .description('Generate beautiful GitHub README profiles instantly')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize a new README with interactive setup')
  .action(async () => {
    console.log(chalk.blue.bold('\n🚀 Welcome to ghread! Let\'s create your GitHub profile\n'));
    
    const answers: InquirerAnswers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your name?',
        default: 'Your Name'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What\'s your GitHub username?',
        default: 'yourusername'
      },
      {
        type: 'input',
        name: 'title',
        message: 'What\'s your professional title?',
        default: 'Developer'
      },
      {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio about yourself:',
        default: 'Passionate developer building amazing things'
      },
      {
        type: 'input',
        name: 'twitter',
        message: 'Your Twitter handle (without @):',
        default: ''
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Your LinkedIn username:',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email:',
        default: ''
      },
      {
        type: 'input',
        name: 'website',
        message: 'Your website URL:',
        default: ''
      },
      {
        type: 'list',
        name: 'theme',
        message: 'Choose a theme:',
        choices: [
          { name: 'Tokyo Night', value: 'tokyonight' },
          { name: 'Dark', value: 'dark' },
          { name: 'Radical', value: 'radical' },
          { name: 'Merko', value: 'merko' },
          { name: 'Gruvbox', value: 'gruvbox' },
          { name: 'Dracula', value: 'dracula' }
        ],
        default: 'tokyonight'
      }
    ]);

    try {
      const config: GhreadConfig = {
        name: answers.name,
        username: answers.username,
        title: answers.title,
        bio: answers.bio,
        twitter: answers.twitter || undefined,
        linkedin: answers.linkedin || undefined,
        email: answers.email || undefined,
        website: answers.website || undefined,
        theme: answers.theme
      };

      await generateReadme(config);
      console.log(chalk.green.bold('\n✅ README.md generated successfully!'));
      console.log(chalk.yellow('\n📝 Next steps:'));
      console.log('1. Review your README.md file');
      console.log('2. Commit and push to your GitHub profile repository');
      console.log(`3. Your profile will be live at github.com/${answers.username}`);
    } catch (error) {
      console.error(chalk.red.bold('\n❌ Error generating README:'), (error as Error).message);
    }
  });

program
  .command('generate')
  .description('Generate README from config file')
  .option('-c, --config <file>', 'Config file path', 'ghread.config.json')
  .action(async (options: GenerateOptions) => {
    try {
      const configPath = path.resolve(options.config || 'ghread.config.json');
      if (!fs.existsSync(configPath)) {
        console.error(chalk.red.bold('❌ Config file not found:'), configPath);
        console.log(chalk.yellow('💡 Run "ghread init" to create a config file'));
        return;
      }

      const config: GhreadConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      await generateReadme(config);
      console.log(chalk.green.bold('\n✅ README.md generated from config!'));
    } catch (error) {
      console.error(chalk.red.bold('\n❌ Error generating README:'), (error as Error).message);
    }
  });

program.parse();
