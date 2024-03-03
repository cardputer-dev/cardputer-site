# Get Started

The Cardputer itself is an ESP32 based development board with a screen and keyboard (among other awesome features). Normally this would mean that you have to program it yourself, however we are lucky to have a budding community making cool software you can run on your Cardputer. Check out the [firmware][].

## Technical Details

### Processor (from the [ESP32-S3FN8 datasheet][s3datasheet])
- Dual 32bit Xtensa LX7 cores running up to 240Mhz
- RISC-V Ultra Low Power Co-processor
- ULTRA LOW Deep Sleep Current

### Memory
- 128-bit data bus and SIMD commands
- 384 KB ROM - for booting and core functions
- 512 KB SRAM - for data and instructions, running at a configurable frequency of up to 240 MHz
- 16 KB SRAM in RTC - can retain data in Deep-sleep mode
- 4 Kbit eFuse - reserved for user data, such as encryption key and device ID
- SPI, Dual SPI, Quad SPI, Octal SPI, QPI and OPI interfaces that allow connection to multiple flash and external RAM

### Devices/Resources

- Bluetooth: 5.0, BLE + Mesh
- Wi-Fi: 802.11b/g/n 2.4Ghz
- Display: IPS LCD, 1,14", 240x135px
- Battery: internal 120mAh + 1400mAh (in the base) lithium battery
- TF-Card (MicroSD) slot
- 1 USB-C OTG in/out
- Keyboard: 56 keys, QWERTY type, ortholinear with tactile click switches
- Infrared ∠0° : 410cm, < 90° : 66cm, < 45° : 170cm
- Digital MEMS Microphone
- Sound: I2S-Speaker, 8Ω@1W
- 2 magnets on the back to stick it somewhere metallic
- It comes with a little hexagonal screwdriver to open it

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
[uiflow]: https://docs.m5stack.com/en/quick_start/m5core/uiflow
[micropython]: https://micropython.org/
[thonny]: https://thonny.org/
[micropython-examples]: https://github.com/echo-lalia/Cardputer-Micropython-
[espidf]: https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/
[arduino]: http://docs.m5stack.com/en/quick_start/Cardputer/arduino
[userdemo]: https://github.com/m5stack/M5Cardputer-UserDemo