---
layout: default
title: "Discord Linked Advanced Spawn Selector"
nav_order: 22
has_children: false
has_toc: true
last_modified_date: "2022-07-15 00:45:00"
---

<img class="cover-img" src="/assets/img/discordSpawn.png" alt="Discord Linked Advanced Spawn Selector! Resource" draggable="false">

# Discord Linked Advanced Spawn Selector!
{: .no_toc}

A guide to install Discord Linked Advanced Spawn Selector! for FiveM

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

Base: [https://store.ea-rp.com/package/5197594](https://store.ea-rp.com/package/5197594)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants)

## Installing the resource

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. Example:
```lua
ensure night_discord_spawn
```

1. Configure /config/config.lua.

## Export Functions

1. Use this export to force the player into spawn selection.
```lua
exports['night_discord_spawn']:ForceRespawn(src)
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}