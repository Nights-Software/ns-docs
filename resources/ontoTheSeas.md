---
layout: default
title: "Onto the seas!"
nav_order: 3
has_children: false
has_toc: true
last_modified_date: "2022-06-25 00:31:00"
---

<img class="cover-img" src="/assets/img/ontoTheSeas.png" alt="Onto the Seas! Resource" draggable="false">

# Onto the seas!
{: .no_toc }

A guide to install Onto the seas! for FiveM
{: .fs-5 .fw-300 }

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

Base: [https://store.nights-software.com/package/5117650](https://store.nights-software.com/package/5117650)

## Downloading the resource

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets).

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. 
Example:
```lua
ensure night_onto_the_sea
```

1. Configure /config/config.lua.

1. Set up Ace permissions in natural_disasters/config/config.lua & natural_disasters/server/s_functions.lua OR choose the discord linked admin system integration: 
[https://store.nights-software.com/package/5054917](https://store.nights-software.com/package/5054917)

1. Note: If you use xsound, use the `dependency 'xsound'` in fxmanifest.lua, otherwise comment it. 
Example of a comment: `-- dependency 'xsound'`

1. xSound can be downloaded via: https://github.com/Xogy/xsound

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? 
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
