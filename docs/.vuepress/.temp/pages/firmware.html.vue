<template><div><h1 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware"><span>Firmware</span></a></h1>
<h2 id="m5burner" tabindex="-1"><a class="header-anchor" href="#m5burner"><span>M5Burner</span></a></h2>
<p>A quick mention about M5Stack's desktop application that allows you to flash community firmware. If you are just getting started, then we recommend using this. It won't have everything listed below, but you also won't need to compile it yourself the firmware yourself.</p>
<h2 id="launchers" tabindex="-1"><a class="header-anchor" href="#launchers"><span>Launchers</span></a></h2>
<p>This is firmware that is specifically built to be able to launch <code v-pre>.bin</code> files(or <code v-pre>.py</code> in the case of MicroHydra) either from the flash memory or from the SDCard.</p>
<h3 id="m5-launcher" tabindex="-1"><a class="header-anchor" href="#m5-launcher"><span><a href="https://github.com/bmorcelli/M5Stick-Launcher" target="_blank" rel="noopener noreferrer">M5 Launcher<ExternalLinkIcon/></a></span></a></h3>
<p>A <code v-pre>.bin</code> launcher that supports a wide range of M5Stack products. Note that this requires the <code v-pre>.bin</code> files to be placed on the SDCard to launch them.</p>
<h3 id="microhydra" tabindex="-1"><a class="header-anchor" href="#microhydra"><span><a href="https://github.com/echo-lalia/Cardputer-MicroHydra/blob/main/README.md" target="_blank" rel="noopener noreferrer">MicroHydra<ExternalLinkIcon/></a></span></a></h3>
<p>MicroHydra is a simple MicroPython based app launcher designed for the M5Stack Cardputer. The main function of MicroHydra is to provide an interface to easily switch between MicroPython apps. And to help lower the barriers to entry for anyone wanting to develop apps for their Cardputer. Python scripts can be placed in the /apps folder on the flash, or in a /apps folder on a micro sd card. The launcher scans these two locations on startup.</p>
<p>And since MicroHydra supports apps, find their app repository <a href="https://github.com/echo-lalia/MicroHydra-Apps/tree/main/apps" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<h2 id="general-firmware" tabindex="-1"><a class="header-anchor" href="#general-firmware"><span>General Firmware</span></a></h2>
<h3 id="webradio" tabindex="-1"><a class="header-anchor" href="#webradio"><span><a href="https://github.com/cyberwisk/M5Cardputer_WebRadio" target="_blank" rel="noopener noreferrer">WebRadio<ExternalLinkIcon/></a></span></a></h3>
<p>Stream internet radio directly to your cardputer</p>
<h3 id="userdemo-extended" tabindex="-1"><a class="header-anchor" href="#userdemo-extended"><span><a href="https://github.com/JohnZ03/M5Cardputer-UserDemo" target="_blank" rel="noopener noreferrer">UserDemo Extended<ExternalLinkIcon/></a></span></a></h3>
<p>An extension of the demo that came with the cardputer to a countdown timer and a text editor.</p>
<h3 id="math-game" tabindex="-1"><a class="header-anchor" href="#math-game"><span><a href="https://github.com/seanbutler/M5CardputerMathGame" target="_blank" rel="noopener noreferrer">Math Game<ExternalLinkIcon/></a></span></a></h3>
<p>A maths game written for the new M5 Cardputer. Suitable for a primary/middle schooler.</p>
<h3 id="gameboy-emulator" tabindex="-1"><a class="header-anchor" href="#gameboy-emulator"><span><a href="https://github.com/matthew-5pl/gb_cardputer" target="_blank" rel="noopener noreferrer">Gameboy Emulator<ExternalLinkIcon/></a></span></a></h3>
<p>Makes use of Peanut-GB - Warning: this is an unpolished port, audio doesn't work.</p>
<h3 id="ssh-client" tabindex="-1"><a class="header-anchor" href="#ssh-client"><span><a href="https://github.com/aat440hz/SSHClient-M5Cardputer" target="_blank" rel="noopener noreferrer">SSH Client<ExternalLinkIcon/></a></span></a></h3>
<p>This project demonstrates how to create an SSH terminal using an M5Cardputer device and an ESP32 microcontroller. With this setup, you can remotely connect to an SSH server and interact with it using the M5Cardputer's keyboard and display.</p>
<h3 id="telnet-client" tabindex="-1"><a class="header-anchor" href="#telnet-client"><span><a href="https://github.com/aat440hz/TelnetClient-M5Cardputer" target="_blank" rel="noopener noreferrer">Telnet Client<ExternalLinkIcon/></a></span></a></h3>
<p>This is a simple Telnet client example for the M5Cardputer, an ESP32-based development board with a built-in screen and keyboard. This sketch allows you to connect to a Telnet server over Wi-Fi and send/receive text data.</p>
<h3 id="lora-chat-app" tabindex="-1"><a class="header-anchor" href="#lora-chat-app"><span><a href="https://github.com/nonik0/CardputerLoRaChat" target="_blank" rel="noopener noreferrer">Lora Chat App<ExternalLinkIcon/></a></span></a></h3>
<p>Simple chat app for M5 Cardputer and the M5 E220 LoRa modules. Work in progress.</p>
<h3 id="volos-remote" tabindex="-1"><a class="header-anchor" href="#volos-remote"><span><a href="https://github.com/VolosR/M5CardRemote/" target="_blank" rel="noopener noreferrer">Volos Remote<ExternalLinkIcon/></a></span></a></h3>
<p>A TV Remote App using the built in IR LED. As seen on the Volos Projects YouTube Channel.</p>
<h2 id="pentesting-firmware" tabindex="-1"><a class="header-anchor" href="#pentesting-firmware"><span>Pentesting Firmware</span></a></h2>
<p><strong>IMPORTANT</strong>: The Cardputer Dev Community does not condone using penetration testing tools as a way to prank or otherwise conduct illegal activities. These tools are only for use on your own devices/networks/property.</p>
<h3 id="nemo" tabindex="-1"><a class="header-anchor" href="#nemo"><span><a href="https://github.com/n0xa/m5stick-nemo" target="_blank" rel="noopener noreferrer">nemo<ExternalLinkIcon/></a></span></a></h3>
<p>Inspired by other handheld penetration testing tools, this offers functionality like TV B-Gone, Applejuice, Wifi Spam and more.</p>
<h3 id="bruce" tabindex="-1"><a class="header-anchor" href="#bruce"><span><a href="https://github.com/pr3y/m5-bruce" target="_blank" rel="noopener noreferrer">bruce<ExternalLinkIcon/></a></span></a></h3>
<p>A fork of nemo with similar intentions, but with added functionality (SSH and Telnet clients, usb keyboard emulation and more).</p>
<h3 id="marauder" tabindex="-1"><a class="header-anchor" href="#marauder"><span><a href="https://github.com/marivaaldo/ESP32Marauder/tree/feature/add-m5cardputer-support" target="_blank" rel="noopener noreferrer">marauder<ExternalLinkIcon/></a></span></a></h3>
<p>A suite of WiFi/Bluetooth offensive and defensive tools for the ESP32.</p>
</div></template>


