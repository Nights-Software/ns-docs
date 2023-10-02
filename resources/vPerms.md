---
layout: default
title: "Discord vPerms"
nav_order: 23
has_children: false
has_toc: true
last_modified_date: "2022-07-21 00:40:00"
---

<img class="cover-img" src="/assets/img/vPerms.png" alt="Discord vPerms! Resource" draggable="false">

# Discord vPerms!
{: .no_toc}

A guide to install Discord vPerms (Vehicle allowlist)! for FiveM

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

## Installation Tutorial

**Youtube!** Watch this installation tutorial video:

[Installation Tutorial](https://youtu.be/DhWaT_NqNiM?si=xDJcUQ5wcD-oaXdj){: .btn .btn-red}

## Purchasing the resource

Find this product at:

Base: [https://store.nights-software.com/package/5205763](https://store.nights-software.com/package/5205763)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants) after purchasing it. It can take a few minutes for the resource to appear in keymaster after purchase.

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start this resource in your server.cfg. Example:
```lua
ensure night_discord_vperms
```

1. Configure /config/config.lua.

## Troubleshoot

1. Are you being kicked out of the vehicle, but do have the requires roles for it? 

- There are 2 options: Discord API is not working (Check it's config and server console printouts)
- You have defined the wrong vehicle model name. Turn on debug in the config.lua, restart the script, enter the vehicle, check F8 console logs for it's actual name. Is it a weird number? Fix your vehicles.meta file for that vehicle. We do not provide support for this.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
