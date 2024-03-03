import comp from "/home/foo/src/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/cardputer.webp\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Firmware\",\"link\":\"/firmware.html\",\"type\":\"secondary\"},{\"text\":\"FAQ\",\"link\":\"/faqs.html\",\"type\":\"secondary\"},{\"text\":\"Join Us on Discord\",\"link\":\"https://discord.com/invite/GJW8kYYJCg\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Firmware\",\"details\":\"We make it easy to find firmware that runs on your Cardputer and give you all the info you need to get started.\"},{\"title\":\"Documentation\",\"details\":\"We maintain a collection of resources to get started with cardputer development and we're doing our best to write new tutorials and documentation.\"},{\"title\":\"Community\",\"details\":\"We have an active Discord server and a Reddit forum where developers and users hang out, help each other and share what they are working on.\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present Cardputer Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
