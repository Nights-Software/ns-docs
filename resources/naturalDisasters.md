---
layout: default
title: "Natural Disasters (Normal / DLC)"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2022-06-22 21:30:00"
---

<img class="cover-img" src="/earp-docs/assets/img/naturalDisasters.gif" alt="Natural Disasters Resource" draggable="false">

# Natural Disasters (Normal / DLC)
{: .no_toc }

A guide to install Natural Disasters for FiveM
{: .fs-5 .fw-300 }

Just released: DLC 1!
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

*You require the base resource to be able to purchase the DLC(s).*

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Installing the resource

1. Drag the resource into your resources folder.

1. Drag "PlayCustomSounds" and/or "xsound" in your /resources/ folder. Download these from the creators. Using integrations? You will require both resources if you use Air Raid Sirens 
Integration: [https://store.ea-rp.com/package/5030134](https://store.ea-rp.com/package/5030134)

1. Ensure or start all resources in server.cfg. 
Example:
```lua
# xSound
ensure xsound
```
xSound must be somewhere on top of server.cfg and preferably downloaded fresh from: [https://github.com/Xogy/xsound](https://github.com/Xogy/xsound)

1. Configure natural_disasters/config/config.lua and set the sound resource you are using to **true** and the other to **false**.

1. Set up Ace permissions in natural_disasters/config/config.lua & natural_disasters/server/s_functions.lua OR choose the discord linked admin system integration: 
[https://store.ea-rp.com/package/5054917](https://store.ea-rp.com/package/5054917)

1. Note: If you use xsound, use the `dependency 'xsound'` in fxmanifest.lua, otherwise comment it.
Example of a comment: `-- dependency 'xsound'`

1. xSound CAN cause (syntax) issues, to fix it: Download a fresh install ->  (Sometimes with ESX servers)

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still?
Create a ticket through our dedicated support system in Discord: [https://dc.ea-rp.com](https://dc.ea-rp.com)
