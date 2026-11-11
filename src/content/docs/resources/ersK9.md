---
title: K9 Dog Handler
description: A K9 dog script for FiveM with Emergency Response Simulator compatibility.
slug: resources/ersK9
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6813075
cover: ../../../assets/covers/ersK9.jpg
---

## Overview

K9 Dog Handler gives a dog handler a K9 dog. The handler takes the dog out of a suitable dog handler vehicle and puts it back in. The dog follows its handler, idles, barks to alert, can be petted and can be carried. The handler can send it to attack, search or taunt a highlighted target.

- **Spawn and dismiss** the dog when you stand near a suitable dog handler vehicle.
- **Orders:** follow, idle, alert, pet, carry and release.
- **Actions on a target:** attack, search a ped or a vehicle, and taunt.
- **Injured dog:** the handler has 10 seconds to revive it, and the dog can pass away.
- **Your vehicles and dog models:** you list the handler vehicles, the dog model each one carries and how the dog is dressed.
- **Blip and target marker** for the dog and for the target.
- **Permissions** for who may work with a dog: Discord roles through Night Discord API, ACE, ESX or QBCore.
- **Messages** in the config, so you can translate them.

## Important Pre-Installation Notes

:::caution[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:
1. Download ZIP Package from CFX Portal
2. Unpack in a folder on your local machine
3. Set your File Transfer Protocol (FTP) type to **binary**
4. Drag files from local machine to server resources folder
5. Add to server.cfg (ensure script)
6. Boot up the server
:::

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## Requirements

- [Emergency Response Simulator](/resources/ers/) (`night_ers`), started before this resource. The resource's manifest declares it as a dependency.
- A player must be on shift in ERS to spawn a dog. Without it the player sees "You cannot spawn a K9 dog whilst not on shift for ERS...".
- Optional: [Night Discord API](/resources/discordAPI/) for Discord role permissions (`Enable_Night_DiscordApi_Permissions`).

## Installation

1. Put the `night_ers_k9` folder in your server's `resources` folder.
2. Add this line to `server.cfg`, below `ensure night_ers`:

```ini
ensure night_ers_k9
```

3. Restart your server.

## Configuration

All settings are in `config/config.lua`. The manifest leaves `config/*.lua` outside the asset escrow, so you can edit it.

### Permissions

```lua
EveryoneHasPermission = true,

Enable_Night_DiscordApi_Permissions = false,   -- server/s_functions.lua
Enable_Ace_Permissions = false,                -- server/s_functions.lua
Enable_ESX_Permissions = {
    Check_By_Job = false,                      -- server/s_functions.lua
    Check_By_Permissions = false,              -- server/s_functions.lua
},
Enable_QBCore_Permissions = {
    Check_By_Job = false,                      -- server/s_functions.lua
    Check_By_Permissions = false,              -- server/s_functions.lua
},

-- The role or group that has permission to work with a K9 dog.
K9HandlerPermissionRoles = {
    "Manager",
    "Administrator",
    "police",
},
```

| Setting | What it does |
|---|---|
| `EveryoneHasPermission` | Gives every player permission to work with a K9 dog |
| `Enable_Night_DiscordApi_Permissions`, `Enable_Ace_Permissions` | Turn on a permission system. The checks are in `server/s_functions.lua` |
| `Enable_ESX_Permissions`, `Enable_QBCore_Permissions` | Turn on a check by job or by permissions for that framework. The checks are in `server/s_functions.lua` |
| `K9HandlerPermissionRoles` | The roles or groups that have permission to work with a K9 dog |

### General Settings

```lua
AddChatSuggestions = true,      -- Adds chat suggestions to the script commands.
DistanceToKeepFromPlayer = 1.0, -- The distance the K9 dog will keep from their handler.
ChanceToSurrenderToDogs = 50,   -- Applies a 50% chance to make the NPC target surrender when being attacked by a K9 dog. The roll only happens once the dog has closed within 20m of the fleeing NPC.
AllowRevivingInjuredK9 = true,  -- Allows the dog handler to revive their own injured K9 dog.
AllowK9InFrontSeat = false,     -- Allows the K9 dog to be in the front passenger seat of a vehicle.
AllowCarryK9 = true,            -- Allows the dog handler to carry the dog.
AllowK9ToKillNPCs = false,      -- Allows the K9 dog to kill NPCs, setting it false will replicate the attack, but not damage the NPC. They will still be able to kill players.
AllowK9ToAttackPlayers = true,  -- Allows the K9 dog to attack players, if set to false the dog will decline attacks on players.
```

| Setting | What it does |
|---|---|
| `AddChatSuggestions` | Adds chat suggestions to the script commands |
| `DistanceToKeepFromPlayer` | The distance the dog keeps from its handler |
| `ChanceToSurrenderToDogs` | The chance, in percent, that an NPC target surrenders when a K9 dog attacks. The roll happens once the dog has closed to within 20 m of the fleeing NPC |
| `AllowRevivingInjuredK9` | Lets the handler revive their own injured dog |
| `AllowK9InFrontSeat` | Lets the dog sit in the front passenger seat of a vehicle |
| `AllowCarryK9` | Lets the handler carry the dog |
| `AllowK9ToKillNPCs` | Lets the dog kill NPCs. When `false` the attack looks the same but does no damage to the NPC. Dogs can still kill players |
| `AllowK9ToAttackPlayers` | Lets the dog attack players. When `false` the dog declines attacks on players |

### Dog Handler Vehicles

`K9Vehicles` lists the vehicles a dog can be taken out of. The config comes with a base game vehicle, a custom vehicle and a third example that is commented out. This is the first entry:

```lua
{
    hash = `policet`, spawnOffset = vector3(0.0 --[[Right/-Left]], -4.0 --[[Front/-Rear]], 0.5 --[[Up/-Down]]),
    dogModelName = "a_c_shepherd",
    props = {
        -- Example: {prop type (Helmet), prop type index (Motorcycle helmet), prop colour index (Black colour)}
        -- { drawable, texture, palette }
        { 0, 1, 1 },    -- Hats / Helments
        { 1, 1, 1 },    -- Glassess
        { 2, 1, 1 },    -- Misc
        { 3, 1, 1 },
    },
    components = {
        -- Example: {component type (Mask), component type index (Clown Mask), component colour index (White colour)}
        -- { drawable, texture, palette }
        { 1, 1, 1 },  -- Mask
        { 2, 1, 1 },  -- Hair
        { 3, 1, 1 },  -- Upper body
        { 4, 1, 1 },  -- Legs / Pants
        { 5, 1, 1 },  -- Bags / Parachutes
        { 6, 1, 1 },  -- Shoes
        { 7, 1, 1 },  -- Neck / Scarfs
        { 8, 1, 1 },  -- Shirt / Accessory (This palette is commonly used for the text on the K9 vest)
        { 9, 1, 1 },  -- Body Armor
        { 10, 1, 1 }, -- Badges / Logos
        { 11, 1, 1 }, -- Jackets
    },
},
```

| Field | What it does |
|---|---|
| `hash` | The vehicle model |
| `spawnOffset` | The offset from the vehicle, as right or left, front or rear, and up or down |
| `dogModelName` | The dog model that this vehicle carries. The examples use `a_c_shepherd`, and the commented-out one uses `a_c_husky` |
| `props` | The dog's props, each as `{ drawable, texture, palette }`. The comments name hats and helmets, glasses and misc |
| `components` | The dog's clothing components, each as `{ drawable, texture, palette }`. Component 8 is the shirt or accessory. Its palette is commonly used for the text on the K9 vest |

### Blip and Marker

```lua
K9BlipData = {
    Enabled = true,
    BlipName = "Canine (K9)",
    BlipSpriteID = 898,
    BlipDisplay = 2,
    BlipCone = true,
    BlipScale = 0.5,
    BlipColourID = 10,
},

MarkerHeight = 2.0,
```

| Setting | What it does |
|---|---|
| `K9BlipData` | The map blip for the dog: whether it is on, its name, sprite, display, view cone, scale and colour |
| `MarkerHeight` and `TargetMarkerData` | The marker drawn on the target: its height, marker id, rotation, scale, colour and alpha. The default colour is red (255, 0, 0) with an alpha of 125 |

### Language

`Messages` holds every line players read, such as `K9Spawned` ("Successfully summoned K9 dog.") and `K9Injured` ("Your K9 dog is injured. You have 10 seconds to revive them."). The last block, marked NUI translations, holds the texts of the controls panel. Translate the values in place.

## Commands and Keys

### Commands

Each command has a default key. Players can change these keys themselves.

| Action | Command | Default key | What it does |
|---|---|---|---|
| Spawn or delete the dog | `/k9spawnordelete` | Numpad 0 | Spawns or deletes a K9 dog when near a suitable dog handler vehicle |
| Follow | `/k9follow` | Numpad 1 | Orders your own K9 dog to follow you |
| Idle | `/k9idle` | Numpad 2 | Orders your own K9 dog to idle at its current position |
| Alert | `/k9alert` | Numpad 3 | Orders your own K9 dog to alert by barking |
| Pet | `/k9pet` | Numpad 4 | Attempts to pet your own nearby K9 dog |
| Carry | `/k9carry` | Numpad 5 | Carries your own K9 dog |
| Release | `/k9release` | Numpad 6 | Releases the last target the dog was interacting with, so the game cleans them up when it finds it suitable |
| Select action mode | `/k9selectactionmode` | Left Alt | Selects the action mode for the dog on the highlighted target: attack, search or taunt |

The commands, their labels, their chat suggestions and their keys are in `Controls` in the config.

### Hotkeys

While the action mode is on, aim at the target and press the hotkey for the action. Players cannot change these keys. Only the config can.

| Hotkey | Key |
|---|---|
| Attack (`K9Attack`) | `E` |
| Search (`K9Search`) | `H` |
| Taunt (`K9Taunt`) | `L` |
| Revive the dog (`K9Revive`) | `E` |
| Cancel | `Backspace` |

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
