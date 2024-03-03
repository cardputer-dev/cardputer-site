import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'cardputerDev',
  description: 'Cardputer development community',

  theme: defaultTheme({
    logo: '/images/icon.png',

    navbar: [
      {'text': 'Get Started', 'link':'/get-started'},
      {'text': 'Firmware', 'link':'/firmware'},
      {'text': 'FAQ', 'link':'/faqs'},
      {'text': 'Discord', 'link':'https://discord.com/invite/GJW8kYYJCg'},
      {'text': 'Reddit', 'link':'https://www.reddit.com/r/CardPuter/'}
    ],
  }),

  bundler: viteBundler(),
})
