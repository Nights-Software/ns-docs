---
layout: default
title: "Coma & Down System"
nav_order: 39
has_children: false
has_toc: true
last_modified_date: "2025-01-27 16:00:00"
---

<img class="cover-img" src="/assets/img/comaAndDownSystem.png" alt="Coma & Down System! Resource" draggable="false">

# Coma & Down System!
{: .no_toc}

A guide to install Coma & Down System! for FiveM

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

Base: [https://store.nights-software.com/package/5009962](https://store.nights-software.com/package/5009962)

## Downloading the resource

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets)

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> Set your File Transfer Protocol (FTP) type to binary -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. Example:
```lua
ensure night_coma_down_system
```

1. Configure /config/config.lua.

## Export Functions

1. Use these exports from other (serversided) scripts to trigger respawn/revival of the given source player.

```lua
exports['night_coma_down_system']:RevivePlayer(source)
exports['night_coma_down_system']:RespawnPlayer(source)
exports['night_coma_down_system']:GetPlayerComaType(source)
```

## Compatibility

1. Compatible with night_discord_spawn -> [https://store.nights-software.com/package/5197594](https://store.nights-software.com/package/5197594)

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
