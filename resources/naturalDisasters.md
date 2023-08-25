---
layout: default
title: "Natural Disasters (Normal / DLC)"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2022-06-25 00:31:00"
---

<img class="cover-img" src="/assets/img/naturalDisasters.gif" alt="Natural Disasters Resource" draggable="false">

# Natural Disasters (Normal / DLC 1, 2, 3 & 4)
{: .no_toc }

A guide to install Natural Disasters for FiveM
{: .fs-5 .fw-300 }

Just released: DLC 4!
{: .label .label-purple }

---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Purchasing the resource

Find this product and it's DLC's at:

* Base: [https://store.nights-software.com/package/5131340](https://store.nights-software.com/package/5131340)
* DLC 1: [https://store.nights-software.com/package/5154004](https://store.nights-software.com/package/5154004)
* DLC 2: [https://store.nights-software.com/package/5183358](https://store.nights-software.com/package/5183358)
* DLC 3: [https://store.nights-software.com/package/5314042](https://store.nights-software.com/package/5314042)
* DLC 4: [https://store.nights-software.com/package/5673677](https://store.nights-software.com/package/5673677)

*You require the base resource to be able to purchase the DLC(s).*
*You require DLC1 resource to be able to purchase the DLC2.*
*You require DLC2 resource to be able to purchase the DLC3.*
*You require DLC3 resource to be able to purchase the DLC4.*

## Installation Notice
*Got all of the Natural Disasters? Install just DLC4, this contains all code required. The latest resource is the one you install! The pack includes Air Raid Sirens which you can seperately install.*

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Optional: Built in or external sound resources.

1. If you are using the built in sound system, skip this whole step and move on to 'Installing the resource'.

1. Drag "PlayCustomSounds" and/or "xsound" in your /resources/ folder. Download these from the creators. Using integrations? You will require both resources if you use Air Raid Sirens 
Integration: [https://store.nights-software.com/package/5030134](https://store.nights-software.com/package/5030134)

1. Ensure or start the resource in server.cfg. 
Example:
```lua
ensure xsound
```
xSound must be somewhere on top of server.cfg and preferably downloaded fresh from: [https://github.com/Xogy/xsound](https://github.com/Xogy/xsound)
PlayCustomSounds can be downloaded fresh from: [https://github.com/LondonStudios/PlayCustomSounds](https://github.com/LondonStudios/PlayCustomSounds)
* Note: Don't forget to add the .ogg sound files, located in folder: SoundFiles (found in your purchased resource for Air Raid Sirens & Natural Disasters) to the sound resource (PlayCustomSounds). If you use xSound make sure to update c_functions.lua with your desired sound URL.

1. Configure natural_disasters/config/config.lua in the next step and set the sound resource you are using to **true** and the other to **false**.

1. Note: If you use xsound, use the `dependency 'xsound'` in fxmanifest.lua, otherwise comment it or leave it out.
Example of a comment: `-- dependency 'xsound'`

1. xSound must be installed fresh from [https://github.com/Xogy/xsound](https://github.com/Xogy/xsound)

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.
    - NOTE: If you are installing the DLC, replace the base resource! Overwrite it with the DLC!

1. Carefully read the instructions given in natural_disasters/config/config.lua, it offers you all kinds of customization options!

1. Ensure or start the resource in server.cfg. 
Example:
```lua
ensure night_natural_disasters
```

## Permissions

You have 3 options in config.lua:

1. Discord Admin System, supported by our Discord API: [Discord linked admin system](https://store.nights-software.com/package/5054917) & [Discord API ](https://store.nights-software.com/package/5035729)

2. Ace Permissions: (Ace Permissions Documentation)[https://docs.nights-software.com/resources/acePerms/]

3. Set both to false in the config.lua to use no permissions.

## Weather Compatibility

*You need @Customer roles in our Discord to see the channel link below: Claim your purchase or create a ticket in our Discord!* 

In our Discord we provide free weather script edits [#free-files](https://discord.com/channels/989438923925229598/989479452209733662) which in most cases you require to prevent flickering lights on your screen. This is due to your current weather file overwriting the weather the disaster is trying to set. The same goes for blackouts.

So weather script compatibility is found in 3 resources: qb-weathersync or cd_easytime (No longer supported) or vSyncR.

## How to add sound files for disasters?

1. Enter the NUI/sounds/ folder and drag your soundfile into this folder. After you've done that, head to config/config.lua and assign the file name without .ogg in the designated area.

## How to add sound files for the Air Raid Sirens?

1. Enter the night_air_raid_sirens folder and head to the NUI/sounds/ folder. Drag the sound file in there. Head back to night_natural_disasters and place the sound file name without .ogg in the `SoundFileNameForAirRaidSirens = "yourfilename",` variable. 

## Exports

1. We provide a configuration option for the following export (config.lua -> CustomSoundResource = "ResName" & s_functions.lua -> Server event = Accessible code):
```lua
exports[Config.Integrations.CustomSoundResource]:StartExternalSound(coords --[[Vector 3]], disasterID --[[index nr]], soundFileName --[[File name]], soundFileVolume --[[Volume]])
```

## Recommended!

* [https://store.nights-software.com/package/5131340](https://store.nights-software.com/package/5131340) - Natural Disasters base (Purchase this one, do not install, you need this one to be able to buy DLC 1)
* [https://store.nights-software.com/package/5154004](https://store.nights-software.com/package/5154004) - Natural Disasters DLC 1 (Install this one and remove the older versions: base.)
* [https://store.nights-software.com/package/5183358](https://store.nights-software.com/package/5183358) - Natural Disasters DLC 2 (Install this one and remove the older versions: base AND DLC 1.)
* [https://store.nights-software.com/package/5314042](https://store.nights-software.com/package/5314042) - Natural Disasters DLC 3 (Install this one and remove the older versions: base, DLC 1 AND DLC 2)
* [https://store.nights-software.com/package/5673677](https://store.nights-software.com/package/5673677) - Natural Disasters DLC 4 (Install this one and remove the older versions: Base, DLC 1, DLC2 AND DLC3)
* [https://store.nights-software.com/package/5030134](https://store.nights-software.com/package/5030134) - Air Raid Sirens, for the nice integration. (Install this one as well as the selected above.) 

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still?
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}
