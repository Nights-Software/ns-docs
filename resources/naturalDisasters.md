---
layout: default
title: "Natural Disasters (Normal / DLC)"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2022-06-25 00:31:00"
---

<img class="cover-img" src="/assets/img/naturalDisasters.gif" alt="Natural Disasters Resource" draggable="false">

# Natural Disasters (Normal / DLC 1, 2 & 3)
{: .no_toc }

A guide to install Natural Disasters for FiveM
{: .fs-5 .fw-300 }

Just released: DLC 2!
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

Find this product at:

Base: [https://store.ea-rp.com/package/5131340](https://store.ea-rp.com/package/5131340)

DLC 1: [https://store.ea-rp.com/package/5154004](https://store.ea-rp.com/package/5154004)
DLC 2: [https://store.ea-rp.com/package/5183358](https://store.ea-rp.com/package/5183358)
DLC 3: [https://store.ea-rp.com/package/5314042](https://store.ea-rp.com/package/5314042)

*You require the base resource to be able to purchase the DLC(s).*
*You require DLC1 resource to be able to purchase the DLC2.*
*You require DLC2 resource to be able to purchase the DLC3.*

## Installation Notice
*Got all packs? Install just DLC3, this contains all code required. The latest resource is the one you install.*

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.
    - NOTE: If you are installing the DLC, replace the base resource! Overwrite it with the DLC!

1. Drag "PlayCustomSounds" and/or "xsound" in your /resources/ folder. Download these from the creators. Using integrations? You will require both resources if you use Air Raid Sirens 
Integration: [https://store.ea-rp.com/package/5030134](https://store.ea-rp.com/package/5030134)

1. Ensure or start all resources in server.cfg. 
Example:
```lua
# xSound
ensure xsound
```
xSound must be somewhere on top of server.cfg and preferably downloaded fresh from: [https://github.com/Xogy/xsound](https://github.com/Xogy/xsound)
PlayCustomSounds can be downloaded fresh from: [https://github.com/LondonStudios/PlayCustomSounds](https://github.com/LondonStudios/PlayCustomSounds)
* Note: Don't forget to add the .ogg sound files, located in folder: SoundFiles (found in your purchased resource for Air Raid Sirens & Natural Disasters) to the sound resource (PlayCustomSounds). If you use xSound make sure to update c_functions.lua with your desired sound URL.

1. Configure natural_disasters/config/config.lua and set the sound resource you are using to **true** and the other to **false**.

1. Set up Ace permissions in natural_disasters/config/config.lua & natural_disasters/server/s_functions.lua OR choose to use the paid discord linked admin system integration: 
[https://store.ea-rp.com/package/5054917](https://store.ea-rp.com/package/5054917)

1. Note: If you use xsound, use the `dependency 'xsound'` in fxmanifest.lua, otherwise comment it.
Example of a comment: `-- dependency 'xsound'`

1. xSound must be installed fresh from [https://github.com/Xogy/xsound](https://github.com/Xogy/xsound)

1. Carefully read the instructions given in natural_disasters/config/config.lua, it offers you all kinds of customization options!

1. Weather script compatibility is found in 3 resources: qb-weathersync, cd_easytime and vSyncR. We have made edits of these open source assets and offer you these for free. Claim them via our discord in a channel called #free-files! Click the button below this page to join the discord.

## Exports

1. We provide a configuration option for the following export (config.lua -> CustomSoundResource = "ResName" & s_functions.lua -> Server event = Accessible code):
```lua
exports[Config.Integrations.CustomSoundResource]:StartExternalSound(coords --[[Vector 3]], disasterID --[[index nr]], soundFileName --[[File name]], soundFileVolume --[[Volume]])
```

## Recommended!

* [https://store.ea-rp.com/package/5131340](https://store.ea-rp.com/package/5131340) - Natural Disasters (Purchase this one, do not install, you need this one to buy the DLC, but can install just the DLC for it all to work )
* [https://store.ea-rp.com/package/5154004](https://store.ea-rp.com/package/5154004) - Natural Disasters DLC 1 (Install this one as an overwrite for base.)
* [https://store.ea-rp.com/package/5183358](https://store.ea-rp.com/package/5183358) - Natural Disasters DLC 2 (Install this one as an overwrite for base AND DLC 1.)
* [https://store.ea-rp.com/package/5030134](https://store.ea-rp.com/package/5030134) - Air Raid Sirens, for the nice integration. (Install this one as well as the selected above.) 

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still?
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}
