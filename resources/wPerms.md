---
layout: default
title: "Discord wPerms"
nav_order: 27
has_children: false
has_toc: true
last_modified_date: "2022-10-17 17:25:00"
---

<img class="cover-img" src="/assets/img/wPerms.png" alt="Discord wPerms! Resource" draggable="false">

# Discord wPerms!
{: .no_toc}

A guide to install Discord wPerms! for FiveM

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

[Installation Tutorial](https://youtu.be/xwEWLrmzz84?si=dxEOsX9lZipAzJj1){: .btn .btn-red}

## Purchasing the resource

Find this product at:

Base: [https://store.nights-software.com/package/5336351](https://store.nights-software.com/package/5336351)

## Downloading the resource

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets) after purchasing it. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> Set your File Transfer Protocol (FTP) type to binary -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start this resource in your server.cfg. Example:
```lua
ensure night_discord_wperms
```

1. Configure /config/config.lua. You will notice there is explanation in green text and variables for you to edit in this configuration file.

1. List each weapon seperately if you want multiple roles to be able to wield this particular weapon. So Pistol -> Roles. The logic is that you list the weapon and then the roles. If you have duplicate weapons in lists it might go wrong!

A functional Example:

```lua
[1] = {
    SectionName = "Firearms units", 
    PermLockedWeapons = {          -- List the weapons you wish to restrict. So: You need atleast 1 role from RequiredDiscordRoleOrGroupNames to wield the weapon in this list.
        "WEAPON_COMBATPISTOL",
        "WEAPON_ASSAULTRIFLE",
    },
    RequiredDiscordRoleOrGroupNames = {
        "SWAT",
        "AFO",
        "DSI",
        "BSB",
        "MARSOF",
        -- Add more roles if you like.
    },
},
[2] = {
    SectionName = "Sniper units",
    PermLockedWeapons = {
        "WEAPON_SNIPERRIFLE",
        "WEAPON_HEAVYSNIPER",
        "WEAPON_HEAVYSNIPER_MK2",
        "WEAPON_MARKSMANRIFLE",
        "WEAPON_MARKSMANRIFLE_MK2",
    },
    RequiredDiscordRoleOrGroupNames = {
        "SWAT",
        "AFO",
        "DSI",
        "BSB",
        "MARSOF",
        -- Add more roles if you like.
    },
},
[3] = {
    SectionName = "Server banned weapons",
    PermLockedWeapons = {
        "WEAPON_RPG",
        "WEAPON_HOMINGLAUNCHER",
        "WEAPON_RAILGUN",
        "WEAPON_MINIGUN",
        "WEAPON_RAYMINIGUN"
    },
    RequiredDiscordRoleOrGroupNames = {
        -- None..
        -- "Manager", -- or
        -- "Senior_Admin", -- or
        -- Add more roles if you like.
    },
},
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
