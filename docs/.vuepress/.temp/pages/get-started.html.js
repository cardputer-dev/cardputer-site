import comp from "/home/foo/src/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Technical Details\",\"slug\":\"technical-details\",\"link\":\"#technical-details\",\"children\":[{\"level\":3,\"title\":\"Processor (from the ESP32-SFN8 datasheet)\",\"slug\":\"processor-from-the-esp32-sfn8-datasheet\",\"link\":\"#processor-from-the-esp32-sfn8-datasheet\",\"children\":[]},{\"level\":3,\"title\":\"Memory\",\"slug\":\"memory\",\"link\":\"#memory\",\"children\":[]},{\"level\":3,\"title\":\"Devices/Resources\",\"slug\":\"devices-resources\",\"link\":\"#devices-resources\",\"children\":[]}]},{\"level\":2,\"title\":\"Developing for the Cardputer\",\"slug\":\"developing-for-the-cardputer\",\"link\":\"#developing-for-the-cardputer\",\"children\":[{\"level\":3,\"title\":\"High Level Development\",\"slug\":\"high-level-development\",\"link\":\"#high-level-development\",\"children\":[]},{\"level\":3,\"title\":\"Low Level Development\",\"slug\":\"low-level-development\",\"link\":\"#low-level-development\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
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
