---
layout: default
title: "Boat Rescue (Tow) for FiveM!"
nav_order: 27
has_children: false
has_toc: true
last_modified_date: "2022-10-01 23:56:00"
---

<img class="cover-img" src="/assets/img/boatRescue.png" alt="Boat Rescue (Tow) for FiveM! Resource" draggable="false">

# Boat Rescue (Tow) for FiveM!
{: .no_toc}

A guide to install Boat Rescue (Tow) for FiveM! for FiveM

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

Base: [https://store.nights-software.com/package/5317442](https://store.nights-software.com/package/5317442)

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
ensure night_boatRescue
```

1. Configure /config/config.lua. You will notice there is explanation in green text and variables for you to edit in this configuration file.

1. Make sure you list your desired rescue boats in the config.lua:

```lua
    TowBoats = { -- In debug = true mode you will see the modelname of the vehicle your in once you perform the boattow command, press F8 to see the actual modelHash name which is read by the script.
        [1] = {modelHash = "TUG"},          -- Native boat
        [2] = {modelHash = "redjb"},        -- A custom boat
        [3] = {modelHash = "MARQUIS"},      -- Native boat (we used a replace boat)
    },
```

*Note: You can find the model hash of the boat in F8 if you enable debug and type /boattow in-game. This is for when you can't find the right model hash name of the vehicle. Some are case sensitive.*

1. There's other variables you can edit, the commented text will explain what the variables do. I would recommend trying out the script with the current settings.

1. Custom rope colours: https://forum.cfx.re/t/free-improved-rope-textures-v2/4903907 (Credits to StoicDesigns) These rope textures are applied on rope ID 2, which is set as default in config.lua.

*Note: Please report any bugs to us via our discord ticket support system.*

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
