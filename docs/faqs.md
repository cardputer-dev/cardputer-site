# Frequently Asked Questions

## Where do I buy a Cardputer?

Order directly from the [M5Stack website][m5stack-shop]. Or one of their global distributors below...

- [Digikey](https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K132/21702610)
- [Mouser](https://www.mouser.com/ProductDetail/M5Stack/K132)

## I can't connect to my cardputer, what is wrong?

You can force the cardputer to go into the bootloader by holding the button on the StampS3 or BtnG0 on the back of the Cardputer.

## How can I reset to the stock firmware?

The Demo that came with the Cardputer can be found on [Github][userdemo] here, look in the Releases section to find the `.bin` file.

## How do you charge this thing?

The switch on the back needs to be in the on position to charge the large secondary battery. This is a bit of an oversight as then you probably have an app running the whole time the device is charging (which will lead to screen burn-in). Try to have something like MicroHydra's Fancy Clock running, where there is nothing static on the screen.

## Can the Cardputer do X?

While this device isn't the most powerful, with internet access and an additional Grove connector it can do a lot. You just need to be able to program it to do the thing. If you are unsure or just getting started, have a look around this wiki and hop on into [Discord][] to ask there.

## Does it have RFID/NFC?

No. But it does have an external grove connector (capable of I2C), so it is possible to add this functionality.

## Is the Cardputer an alternative to the Flipper Zero?

In our opinion, not really, at least not without modifications (like adding sub 1-ghz, rfid capability, ir receiver).

## Something else?

Come ask us on [Discord][].


[Discord]: https://discord.com/invite/GJW8kYYJCg
[m5stack-shop]: https://shop.m5stack.com/products/m5stack-cardputer-kit-w-m5stamps3
[userdemo]: https://github.com/m5stack/M5Cardputer-UserDemo