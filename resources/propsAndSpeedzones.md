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

Base: [https://store.nights-software.com/package/5087747](https://store.nights-software.com/package/5087747)

## Downloading the resource

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets).

## Installing the resource

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. 
Example:
```lua
ensure night_prop_system
```

1. Configure /config/config.lua.

1. Note: Custom props are not included. The ones used in the video showcase is obtainable at Cell 1 Modding: [https://discord.gg/XSrqSTtF5M](https://discord.gg/XSrqSTtF5M).

## Export functions

1. Use this export function to open the menu from a different script, like a boot script or such.

1. Example:
```lua
-- Usage example exports client side
exports['night_prop_system']:TogglePlaceObjectsTool()
exports['night_prop_system']:ToggleSpeedzoneTool()
exports['night_prop_system']:ToggleRoadNodeTool()

-- Usage Example exports server side (we kept the old naming server side for easy compatibility for previous users)
exports['night_prop_system']:OpenPropMenu(source)
exports['night_prop_system']:OpenSpeedZoneMenu(source)
exports['night_prop_system']:ToggleRoadNodeTool(source)
```

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? 
Create a ticket through our dedicated support system in Discord: 

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
