<template><div><h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1>
<p>The Cardputer itself is an ESP32 based development board with a screen and keyboard (among other awesome features). Normally this would mean that you have to program it yourself, however we are lucky to have a budding community making cool software you can run on your Cardputer. Check out the <RouteLink to="/firmware.html">firmware</RouteLink>.</p>
<h2 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h2>
<h3 id="processor-from-the-esp32-sfn8-datasheet" tabindex="-1"><a class="header-anchor" href="#processor-from-the-esp32-sfn8-datasheet"><span>Processor (from the <a href="https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf" target="_blank" rel="noopener noreferrer">ESP32-SFN8 datasheet<ExternalLinkIcon/></a>)</span></a></h3>
<ul>
<li>Dual 32bit Xtensa LX7 cores running up to 240Mhz</li>
<li>RISC-V Ultra Low Power Co-processor</li>
<li>ULTRA LOW Deep Sleep Current</li>
</ul>
<h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory"><span>Memory</span></a></h3>
<ul>
<li>128-bit data bus and SIMD commands</li>
<li>384 KB ROM - for booting and core functions</li>
<li>512 KB SRAM - for data and instructions, running at a configurable frequency of up to 240 MHz</li>
<li>16 KB SRAM in RTC - can retain data in Deep-sleep mode</li>
<li>4 Kbit eFuse - reserved for user data, such as encryption key and device ID</li>
<li>SPI, Dual SPI, Quad SPI, Octal SPI, QPI and OPI interfaces that allow connection to multiple flash and external RAM</li>
</ul>
<h3 id="devices-resources" tabindex="-1"><a class="header-anchor" href="#devices-resources"><span>Devices/Resources</span></a></h3>
<ul>
<li>Bluetooth: 5.0, BLE + Mesh</li>
<li>Wi-Fi: 802.11b/g/n 2.4Ghz</li>
<li>Display: IPS LCD, 1,14&quot;, 240x135px</li>
<li>Battery: internal 120mAh + 1400mAh (in the base) lithium battery</li>
<li>TF-Card (MicroSD) slot</li>
<li>1 USB-C OTG in/out</li>
<li>Keyboard: 56 keys, QWERTY type, ortholinear with tactile click switches</li>
<li>Infrared ∠0° : 410cm, &lt; 90° : 66cm, &lt; 45° : 170cm</li>
<li>Digital MEMS Microphone</li>
<li>Sound: I2S-Speaker, 8Ω@1W</li>
<li>2 magnets on the back to stick it somewhere metallic</li>
<li>It comes with a little hexagonal screwdriver to open it</li>
</ul>
<h2 id="developing-for-the-cardputer" tabindex="-1"><a class="header-anchor" href="#developing-for-the-cardputer"><span>Developing for the Cardputer</span></a></h2>
<p>There are many approaches to developing for the cardputer.</p>
<h3 id="high-level-development" tabindex="-1"><a class="header-anchor" href="#high-level-development"><span>High Level Development</span></a></h3>
<h4 id="uiflow" tabindex="-1"><a class="header-anchor" href="#uiflow"><span>UIFlow</span></a></h4>
<p>UIFlow is a visual programming interface provided by M5Stack that allows users to create firmware for their devices without needing to write code. It's designed to simplify the development process, particularly for beginners or those who prefer a more intuitive approach to programming.. You can find out more in the <a href="https://docs.m5stack.com/en/quick_start/m5core/uiflow" target="_blank" rel="noopener noreferrer">Getting Started Guide<ExternalLinkIcon/></a></p>
<h4 id="micropython" tabindex="-1"><a class="header-anchor" href="#micropython"><span>MicroPython</span></a></h4>
<p>The stock <a href="https://micropython.org/" target="_blank" rel="noopener noreferrer">MicroPython<ExternalLinkIcon/></a> firmware for the ESP32-S3 works great out of the box, if you know what you are doing just flash this and have at it. Otherwise we recommend installing <a href="https://thonny.org/" target="_blank" rel="noopener noreferrer">Thonny<ExternalLinkIcon/></a>, following a tutorial or two and then getting stuck into some of these <a href="https://github.com/echo-lalia/Cardputer-Micropython-" target="_blank" rel="noopener noreferrer">examples<ExternalLinkIcon/></a>.</p>
<h3 id="low-level-development" tabindex="-1"><a class="header-anchor" href="#low-level-development"><span>Low Level Development</span></a></h3>
<h4 id="esp-idf" tabindex="-1"><a class="header-anchor" href="#esp-idf"><span>ESP IDF</span></a></h4>
<p>ESPIDF stands for Espressif IoT Development Framework. It's an official software development framework maintained by Espressif Systems. It provides a comprehensive set of tools, libraries, and documentation for developing firmware for ESP32 and ESP8266-based devices. The [demo][usedemo] that comes with the board uses this. If you want to get started with C/C++ and want a robust dependency management solution check out their <a href="https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/" target="_blank" rel="noopener noreferrer">Getting Started Guide<ExternalLinkIcon/></a>.</p>
<h4 id="arduino-ide" tabindex="-1"><a class="header-anchor" href="#arduino-ide"><span>Arduino IDE</span></a></h4>
<p>If you are coming from an Arduino background and want to continue using that, then you absolutely can. Follow <a href="http://docs.m5stack.com/en/quick_start/Cardputer/arduino" target="_blank" rel="noopener noreferrer">M5Stacks Guide<ExternalLinkIcon/></a> on how to set up the board and install the libraries you will need.</p>
</div></template>


