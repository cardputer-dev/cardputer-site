# Get Started

The Cardputer itself is an ESP32 based development board with a screen and keyboard (among other awesome features). Normally this would mean that you have to program it yourself, however we are lucky to have a budding community making cool software you can run on your Cardputer. Check out the [firmware][].

## Technical Details

Have a look at..
- the [ESP32-S3FN8 datasheet][s3datasheet]
- the Cardputer listing on the [M5Stack website][cardputer-shop]
- this [repo][awesome-cardputer] that covers most things

## Developing for the Cardputer

There are many approaches to developing for the cardputer.

### High Level Development

#### UIFlow

UIFlow is a visual programming interface provided by M5Stack that allows users to create firmware for their devices without needing to write code. It's designed to simplify the development process, particularly for beginners or those who prefer a more intuitive approach to programming.. You can find out more in the [Getting Started Guide][uiflow]

#### MicroPython

The stock [MicroPython][micropython] firmware for the ESP32-S3 works great out of the box, if you know what you are doing just flash this and have at it. Otherwise we recommend installing [Thonny][thonny], following a tutorial or two and then getting stuck into some of these [examples][micropython-examples].

### Low Level Development

#### ESP IDF

ESPIDF stands for Espressif IoT Development Framework. It's an official software development framework maintained by Espressif Systems. It provides a comprehensive set of tools, libraries, and documentation for developing firmware for ESP32 and ESP8266-based devices. The [demo][usedemo] that comes with the board uses this. If you want to get started with C/C++ and want a robust dependency management solution check out their [Getting Started Guide][espidf].

#### Arduino IDE

If you are coming from an Arduino background and want to continue using that, then you absolutely can. Follow [M5Stacks Guide][arduino] on how to set up the board and install the libraries you will need.

[firmware]: /firmware.html
[s3datasheet]: https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf
[cardputer-shop]: https://shop.m5stack.com/products/m5stack-cardputer-kit-w-m5stamps3
[awesome-cardputer]: https://github.com/terremoth/awesome-m5stack-cardputer
[uiflow]: https://docs.m5stack.com/en/quick_start/m5core/uiflow
[micropython]: https://micropython.org/
[thonny]: https://thonny.org/
[micropython-examples]: https://github.com/echo-lalia/Cardputer-Micropython-
[espidf]: https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/
[arduino]: http://docs.m5stack.com/en/quick_start/Cardputer/arduino
[userdemo]: https://github.com/m5stack/M5Cardputer-UserDemo