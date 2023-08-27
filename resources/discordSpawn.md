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

Base: [https://store.nights-software.com/package/5197594](https://store.nights-software.com/package/5197594)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants)

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

1. Ensure or start all resources in server.cfg. Example:
```lua
ensure night_discord_spawn
```

1. Configure /config/config.lua.

*Read the instructions below to understand the configuration*
*Make sure night_discordapi is working before you install this resource. night_discordapi comes with a documentation.pdf file on how to install it.*

## Configuration example

* To define what roles can spawn at a certain location, you can use the variable RequiredDiscordRoles.
* To define what roles can spawn in a certain outfit, you can use the variable requiredDiscordRolesForThisEUP.
* To add multiple roles, follow the example format: (RequiredDiscordRoles = {"rolename1", "rolename2"}). The same goes for weapons.

## Props and components?

* {0, 40, 1} is a weird listing. What it basically means is that the first number represents the prop/component type (helmet, shoe, shirt). The second number represents the prop ID. A usefull way to figure this out is vMenu. You will learn that MP Peds differ in numbers (by 1) compared to editing player appearance (in vMenu). Play around with it and see the result. The third number represents the texture type. So a green, yellow or red helmet, shoe or shirt for example.

```lua
[1] = {
    SpawnLocationName = "Vespucci Police Station",
    GroupSpawningHereName = "Police",
    RequiredDiscordRoles = {"Manager", "Senior_Admin", "Admin", "Allowlisted"},     -- Used when discord API is enabled, match these to your role names in night_discordapi.
    SpawnPoint = {x = -1113.6825, y = -822.6157, z = 19.3160},      -- Location where the player will spawn.
    CameraPoint = {x = -1117.2706, y = -818.3685, z = 21.2160},     -- Location from where the camera will face the spawnpoint.
    SpawnWeapons = {"WEAPON_FLASHLIGHT"},                           -- Weapons which the player of this section will spawn with.
    SpawnHP = 200,                                                  -- Health ,,
    SpawnArmour = 200,                                              -- Armour ,,
    EUPData = {                                                     -- EUPData defines the player clothing, props and textures.
        [1] = {                    -- This is a default uniform, you will have to change this.
            requiredDiscordRolesForThisEUP = {"Manager", "Senior_Admin", "Admin", "PCSO", "Essex_Police_Force"},
            outfitname = 'Response PCSO Uniform',
            ped = 'mp_m_freemode_01', 
            props = {
                { 0, 40, 1 },   -- Hats / Helments
                { 1, 0, 0 },    -- Glasses
                { 2, 0, 0 },
                { 3, 0, 0 },
            },
            components = {
                { 1, 121, 1 },  -- Mask
                { 3, 31, 1 },   -- Upper body
                { 4, 53, 1 },   -- Legs / Pants
                { 5, 53, 1 },   -- Bags / Parachutes
                { 6, 52, 1 },   -- Shoes
                { 7, 4, 1 },    -- Neck / Scarfs
                { 8, 16, 1 },   -- Shirt / Accessory
                { 9, 15, 1 },   -- Body Armor
                { 10, 1, 1 },   -- Badges / Logos
                { 11, 209, 1 }, -- Jackets
            },
        },
    }
},
```

## Export Functions

1. Use this export to force the player into spawn selection.
```lua
exports['night_discord_spawn']:ForceRespawn(src)
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}