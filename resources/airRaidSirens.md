---
layout: default
title: "Air Raid Sirens"
nav_order: 13
has_children: false
has_toc: true
last_modified_date: "2022-07-08 00:00:00"
---

<img class="cover-img" src="/assets/img/airRaidSirens.png" alt="Air Raid Sirens Resource" draggable="false">

# Air Raid Sirens!
{: .no_toc }

A guide to install Air Raid Sirens! for FiveM
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

Base: [https://store.ea-rp.com/package/5030134](https://store.ea-rp.com/package/5030134)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Video Installation Tutorial

[https://youtu.be/OBzDBxGT0qM](https://youtu.be/OBzDBxGT0qM)

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. 
Example:
```lua
ensure night_air_raid_sirens
```

1. Configure /config/config.lua.

## Export functions

1. Use this export function to trigger the Air Raid Sirens from another (server side) script.

1. Example:
```lua
exports['night_air_raid_sirens']:TriggerAirRaidSirens(src)
```

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? 
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}
