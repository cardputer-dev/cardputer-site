# Firmware

## [M5Burner][]

A quick mention about M5Stack's desktop application that allows you to flash community firmware. If you are just getting started, then we recommend using this. It won't have everything listed below, but you also won't need to compile it yourself.

## Launchers

This is firmware that is specifically built to be able to launch `.bin` files (or `.py` in the case of MicroHydra) either from the flash memory or from the SDCard.

### [M5 Launcher][m5launcher]

A `.bin` launcher that supports a wide range of M5Stack products. Note that this requires the `.bin` files to be placed on the SDCard to launch them.

### [MicroHydra][microhydra]

MicroHydra is a simple MicroPython based app launcher designed for the M5Stack Cardputer. The main function of MicroHydra is to provide an interface to easily switch between MicroPython apps. And to help lower the barriers to entry for anyone wanting to develop apps for their Cardputer. Python scripts can be placed in the /apps folder on the flash, or in a /apps folder on a micro sd card. The launcher scans these two locations on startup.

- [Apps Repository][mhydra-apps] - A repo for the apps that people have made for microhydra
- [Wiki][mhydra-wiki] - The Mirohydra Wiki, this includes an overview of the libraries used.

## General Firmware

### [UserDemo][userdemo]

The demo that came preloaded on the cardputer.

### [UserDemo Extended][userdemo-extended]

An extension of the demo that came with the cardputer, now with a countdown timer and a text editor.

### [WebRadio][webradio]

Stream internet radio directly to your cardputer.

### [Math Game][mathgame]

A maths game written for the new M5 Cardputer. Suitable for a primary/middle schooler.

### [Gameboy Emulator][gb-emulator]

Makes use of Peanut-GB - Warning: this is an unpolished port, audio doesn't work.

### [SSH Client][sshclient]

This project demonstrates how to create an SSH terminal using an M5Cardputer device and an ESP32 microcontroller. With this setup, you can remotely connect to an SSH server and interact with it using the M5Cardputer's keyboard and display.

### [Telnet Client][telnetclient]

This is a simple Telnet client example for the M5Cardputer, an ESP32-based development board with a built-in screen and keyboard. This sketch allows you to connect to a Telnet server over Wi-Fi and send/receive text data.

### [Lora Chat App][lora-chat]

Simple chat app for M5 Cardputer and the M5 E220 LoRa modules. Work in progress.

### [Volos Remote][volos-remote]

A TV Remote App using the built in IR LED. As seen on the Volos Projects YouTube Channel.

## Pentesting Firmware

**IMPORTANT**: The Cardputer Dev Community does not condone using penetration testing tools as a way to prank or otherwise conduct illegal activities. These tools are only for use on your own devices/networks/property.

### [nemo][]

Inspired by other handheld penetration testing tools, this offers functionality like TV B-Gone, Applejuice, Wifi Spam and more.

### [bruce][]

A fork of nemo with similar intentions, but with added functionality (SSH and Telnet clients, usb keyboard emulation and more).

### [marauder][]

A suite of WiFi/Bluetooth offensive and defensive tools for the ESP32.

### [Evil-Cardputer][]

Firmware for redteam, pentest and learning which focuses on WiFi, Bluetooth and network vulnerabilities, but also on the attack and detection of other hacking tools like pwnagotchi or flipper zero.

---

Submit firmware contributions on [Github](https://github.com/cardputer-dev/cardputer-site) by submitting a Pull Request

[M5Burner]: https://docs.m5stack.com/en/download#m5burner
[m5launcher]: https://github.com/bmorcelli/M5Stick-Launcher
[microhydra]: https://github.com/echo-lalia/Cardputer-MicroHydra/blob/main/README.md
[webradio]: https://github.com/cyberwisk/M5Cardputer_WebRadio
[nemo]: https://github.com/n0xa/m5stick-nemo
[bruce]: https://github.com/pr3y/m5-bruce
[marauder]: https://github.com/marivaaldo/ESP32Marauder/tree/feature/add-m5cardputer-support
[userdemo]: https://github.com/m5stack/M5Cardputer-UserDemo
[userdemo-extended]: https://github.com/JohnZ03/M5Cardputer-UserDemo
[mathgame]: https://github.com/seanbutler/M5CardputerMathGame
[gb-emulator]: https://github.com/matthew-5pl/gb_cardputer
[sshclient]: https://github.com/aat440hz/SSHClient-M5Cardputer
[telnetclient]: https://github.com/aat440hz/TelnetClient-M5Cardputer
[lora-chat]: https://github.com/nonik0/CardputerLoRaChat
[volos-remote]: https://github.com/VolosR/M5CardRemote/
[mhydra-apps]: https://github.com/echo-lalia/MicroHydra-Apps/tree/main/apps
[mhydra-wiki]: https://github.com/echo-lalia/Cardputer-MicroHydra/wiki/MicroHydra-Wiki
