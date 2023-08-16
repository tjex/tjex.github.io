luke smith vid basically covers it all (but no --type luks1): https://www.youtube.com/watch?v=dI3bGeT31Bo

started with trying an encrypted artix install. No luck. Grub wasn't playing well with LUKS decryption and telling me my password was wrong. 
the password was not wrong. Others have had the [same issue](https://forum.garudalinux.org/t/luks-correct-passphrase-not-working/7913)

critical was `cryptosetup luksFormat --type luks1 ...`, as luks2 is not compatible with grub.
`parted` was also ruining the fun with grub. Either giving me "unknown file system" or "cannot find EFI directory" errors when running `grub-install`

auto decrypt after grub is documented well here https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#Avoiding_having_to_enter_the_passphrase_twice



First impressions after succesful arch / kde install. 

- settings are of course much more open
    - modifying keyboard functionality (eg function of caps lock key)
    - software udpate notification NEVER!
    - window behaviour and animation speed
    - 

- external mouse is actually responsive (also like on windows) and not sluggish (like on mac)

- questioning whether its a better idea to start straight away with a winodow manager or desktop environment. 
    - does it even make a difference?
    - the most immediate issue is not having an interface to see what settings are used / needed (eg for muli monitor management)
    - installing kde installs a lot of files in .config....

- Found Hyprland. Looks a bit too shiny... but trying it out and is tempting. 
    - its working quite well. The spelling style and general language of the project makes me feel like a child, but the tech works.
    - tried with dwl, but ran into immediate make failures after running one patch from the base install... Maybe for a future me.

- Got wifi working after accidentally reading that the wireless_tools package needs to be installed alongside network manager.
    - ipconfig and nmcli would not show the wifi card at all. This seemed like a bad situation, then after installing wireless_tools, the devices were found and could be setup.

- the process of researching, installing, configuring and enabling programs is getting much easier.
- It seems like there was a large and critical hump to get over to get arch up and going and also having it work well and look nice. 
- now the system is very smooth and being back on a mac seems clunky and bloated. Too much mouse!
- Also the hardware is noticibly more laggy on mac (keyboard presses and mouse)



