---
layout: default
title: "Props & Speed Zones"
nav_order: 5
has_children: false
has_toc: true
last_modified_date: "2022-06-25 00:31:00"
---

<img class="cover-img" src="/assets/img/propsAndSpeedZones.png" alt="Props & Speed Zones Resource" draggable="false">

# Props & Speed Zones
{: .no_toc }

A guide to install Props & Speed Zones for FiveM
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

Base: [https://store.ea-rp.com/package/5087747](https://store.ea-rp.com/package/5087747)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Installing the resource

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. 
Example:
```lua
ensure night_prop_system
```

1. Configure /config/config.lua.

1. Note: Custom props are not included. The ones used in the video showcase is obtainable at Cell 1 Modding: [https://discord.gg/59yamPENYn](https://discord.gg/59yamPENYn) (Partner).

## Export functions

1. Use this export function to open the menu from a different script, like a boot script or such.

1. Example:
```lua
exports['night_prop_system']:OpenPropMenu(src, toggle) -- toggle means wether you want to open it (true) or -force- close it (false).
exports['night_prop_system']:OpenSpeedZoneMenu(src, toggle) -- toggle means wether you want to open it (true) or -force- close it (false).
```

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? 
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}
