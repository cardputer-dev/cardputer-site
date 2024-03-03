import comp from "/home/foo/src/vuepress-starter/docs/.vuepress/.temp/pages/faqs.html.vue"
const data = JSON.parse("{\"path\":\"/faqs.html\",\"title\":\"Frequently Asked Questions\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Can the Carputer do X?\",\"slug\":\"can-the-carputer-do-x\",\"link\":\"#can-the-carputer-do-x\",\"children\":[]},{\"level\":2,\"title\":\"Does it have RFID/NFC?\",\"slug\":\"does-it-have-rfid-nfc\",\"link\":\"#does-it-have-rfid-nfc\",\"children\":[]},{\"level\":2,\"title\":\"Is the Cardputer an alternative to the Flipper Zero?\",\"slug\":\"is-the-cardputer-an-alternative-to-the-flipper-zero\",\"link\":\"#is-the-cardputer-an-alternative-to-the-flipper-zero\",\"children\":[]},{\"level\":2,\"title\":\"Something else?\",\"slug\":\"something-else\",\"link\":\"#something-else\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"faqs.md\"}")
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
