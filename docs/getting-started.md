# Getting Started

The Cardputer itself is an ESP32 based development board with a screen and keyboard (among other awesome features). Normally this would mean that you have to program it yourself, however we are lucky to have a budding community making cool software you can run on your Cardputer. Check out the [firmware][].

## Technical Details

- the [ESP32-S3FN8 datasheet][s3datasheet]
- the [Cardputer Docs][cardputer-docs]
- this [awesome repo][awesome-cardputer] that covers most things

## Developing for the Cardputer

### High Level Development

#### UIFlow

UIFlow is a visual programming interface provided by M5Stack that allows users to create firmware for their devices without needing to write code. It's designed to simplify the development process, particularly for beginners or those who prefer a more intuitive approach to programming.

- M5Stack's [Getting Started Guide][uiflow].
- M5Stack's [Tutorial Series][uiflow-tutorials] on Youtube

#### MicroPython

The stock [MicroPython][micropython] firmware for the ESP32-S3 works great out of the box. If you know what you are doing, just flash this and have at it. Otherwise we recommend installing [Thonny][thonny] as your main IDE and getting started with some of the examples below.

- [Cardputer Examples][micropython-examples] - A collection of MicroPython examples specifically for the Cardputer
- [tinyknight][] - A simple game for the cardputer written in MicroPython
- [st7789py][] - A micropython library for drawing to the Cardputer's screen - docs [here](https://russhughes.github.io/st7789py_mpy/)

### Low Level Development

#### ESP IDF

ESPIDF stands for Espressif IoT Development Framework. It's an official software development framework maintained by Espressif Systems. It provides a comprehensive set of tools, libraries, and documentation for developing firmware for ESP32 and ESP8266-based devices. The [demo][usedemo] that comes with the board uses this. If you want to get started with C/C++ and want a robust dependency management solution check out their [Getting Started Guide][espidf].

#### Arduino IDE

If you are coming from an Arduino background and want to continue using that, then you absolutely can. Follow [M5Stacks Guide][arduino] on how to set up the board and install the libraries you will need.

## Other Resources

### Programming

- M5Stack's [StampS3 Docs][stamps3-docs]
- [Volos Projects][volos] on YouTube - for M5Stack tutorials and code examples

### Models for 3D Printing

- [Angled Stand](https://www.printables.com/model/724751-angled-stand-for-m5stack-cardputer)
- [Wrist Mount](https://www.printables.com/model/748880-cardputer-wrist-mount)
- [Replacement Case](https://www.thingiverse.com/thing:6363317)
- [Cardputer](https://grabcad.com/library/m5stack-cardputer-kit-w-m5stamps3-1)
- [Protective Cover](https://www.printables.com/model/766964-m5stack-cardputer-front-protector)

### Hardware Mods

There are quite a few people doing hardware mods on the cardputer. If you are interested in adding a wifi antenna, modding the display keyboard - go have a look at the relevant channels in the Discord.

[firmware]: /firmware.html
[s3datasheet]: https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf
[cardputer-docs]: https://docs.m5stack.com/en/core/Cardputer
[awesome-cardputer]: https://github.com/terremoth/awesome-m5stack-cardputer
[uiflow]: https://docs.m5stack.com/en/quick_start/m5core/uiflow
[uiflow-tutorials]: https://www.youtube.com/playlist?list=PLgvIHLw9-cydbokzAKhi7lWcOVJ67RRTR
[micropython]: https://micropython.org/
[thonny]: https://thonny.org/
[micropython-examples]: https://github.com/echo-lalia/Cardputer-Micropython-Examples/
[tinyknight]: https://github.com/foopod/tinyknight
[st7789py]: https://github.com/russhughes/st7789py_mpy
[espidf]: https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/
[arduino]: http://docs.m5stack.com/en/quick_start/Cardputer/arduino
[userdemo]: https://github.com/m5stack/M5Cardputer-UserDemo
[stamps3-docs]: https://docs.m5stack.com/en/core/stamps3
[volos]: https://www.youtube.com/@VolosProjects