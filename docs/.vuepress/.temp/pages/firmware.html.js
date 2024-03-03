import comp from "/home/foo/src/vuepress-starter/docs/.vuepress/.temp/pages/firmware.html.vue"
const data = JSON.parse("{\"path\":\"/firmware.html\",\"title\":\"Firmware\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"M5Burner\",\"slug\":\"m5burner\",\"link\":\"#m5burner\",\"children\":[]},{\"level\":2,\"title\":\"Launchers\",\"slug\":\"launchers\",\"link\":\"#launchers\",\"children\":[{\"level\":3,\"title\":\"M5 Launcher\",\"slug\":\"m5-launcher\",\"link\":\"#m5-launcher\",\"children\":[]},{\"level\":3,\"title\":\"MicroHydra\",\"slug\":\"microhydra\",\"link\":\"#microhydra\",\"children\":[]}]},{\"level\":2,\"title\":\"General Firmware\",\"slug\":\"general-firmware\",\"link\":\"#general-firmware\",\"children\":[{\"level\":3,\"title\":\"WebRadio\",\"slug\":\"webradio\",\"link\":\"#webradio\",\"children\":[]},{\"level\":3,\"title\":\"UserDemo Extended\",\"slug\":\"userdemo-extended\",\"link\":\"#userdemo-extended\",\"children\":[]},{\"level\":3,\"title\":\"Math Game\",\"slug\":\"math-game\",\"link\":\"#math-game\",\"children\":[]},{\"level\":3,\"title\":\"Gameboy Emulator\",\"slug\":\"gameboy-emulator\",\"link\":\"#gameboy-emulator\",\"children\":[]},{\"level\":3,\"title\":\"SSH Client\",\"slug\":\"ssh-client\",\"link\":\"#ssh-client\",\"children\":[]},{\"level\":3,\"title\":\"Telnet Client\",\"slug\":\"telnet-client\",\"link\":\"#telnet-client\",\"children\":[]},{\"level\":3,\"title\":\"Lora Chat App\",\"slug\":\"lora-chat-app\",\"link\":\"#lora-chat-app\",\"children\":[]},{\"level\":3,\"title\":\"Volos Remote\",\"slug\":\"volos-remote\",\"link\":\"#volos-remote\",\"children\":[]}]},{\"level\":2,\"title\":\"Pentesting Firmware\",\"slug\":\"pentesting-firmware\",\"link\":\"#pentesting-firmware\",\"children\":[{\"level\":3,\"title\":\"nemo\",\"slug\":\"nemo\",\"link\":\"#nemo\",\"children\":[]},{\"level\":3,\"title\":\"bruce\",\"slug\":\"bruce\",\"link\":\"#bruce\",\"children\":[]},{\"level\":3,\"title\":\"marauder\",\"slug\":\"marauder\",\"link\":\"#marauder\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"firmware.md\"}")
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
