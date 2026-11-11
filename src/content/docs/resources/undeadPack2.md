---
title: NS Undead Pack 2 - Bundle (5 peds)
description: Five undead peds in one resource, usable as NPCs or player models, with a zombie walk built in.
slug: resources/undeadPack2
lastUpdated: 2026-11-11
group: assets
store: https://store.nights-software.com/package/ns-undead-pack-2-bundle-5-peds
cover: ../../../assets/covers/undeadPack2.jpg
---

## Overview

NS Undead Pack 2 adds five custom zombie peds with their own models and textures. Every ped works as an NPC and as a player model. The pack has no commands: you spawn the peds by model name from your own scripts or ped menu.

| Ped | Model name | Looks |
|---|---|---|
| The Husk | `ns_ud_2_hk` | A starved, bone-thin undead with cracked grey skin and glowing eyes |
| Bile Mouth | `ns_ud_2_bm` | A rotting walker with a swollen, bile-green growth around its throat |
| Chitin Brute | `ns_ud_2_cb` | A heavy brute covered in cracked chitin armour plates and glowing eyes |
| The Veil | `ns_ud_2_vl` | A hooded, ragged figure with a scaled face and pale glowing eyes |
| Hive Lord | `ns_ud_2_hl` | A bloated hive host with a crown of spines and glowing yellow eyes |

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

- **Game build 3258 or newer** for the zombie walk. On older builds the peds use a drunk walk instead.
- No framework and no other resource is needed.

To enforce the game build, set it in `server.cfg`:

```ini
sv_enforceGameBuild 3258
```

## Installation

1. Unzip the download and put the folder `ns_undead_pack_2` in your server's resources folder.
2. Add this line to `server.cfg`:

```ini
ensure ns_undead_pack_2
```

3. Restart the server fully, not just the resource, then reconnect.

## Using the Peds

Use a model name in any script that takes a ped model:

```lua
local model = GetHashKey('ns_ud_2_hk')   -- or `ns_ud_2_hk`
```

The same names work in a spawn script or a ped menu, for NPCs and for players.

## Configuration

All settings are in `config.lua`. GTA sometimes drops a ped's walk style after jumping, falling, ragdoll or a fight. The resource puts the zombie walk back on peds that use one of its models.

```lua
-- NPCs using one of the models get the zombie walk back when GTA drops it
Config.NPC = { ReapplyWalk = true, Interval = 1000 }   -- Interval = how often to check, in ms

-- players whose model is one of them get it back when lost
Config.Player = { ReapplyWalk = true, Interval = 1000 }
```

| Setting | What it does |
|---|---|
| `Config.NPC.ReapplyWalk` | Puts the zombie walk back on NPCs that use these models |
| `Config.NPC.Interval` | How often NPCs are checked, in milliseconds |
| `Config.Player.ReapplyWalk` | Puts the zombie walk back on players that use these models |
| `Config.Player.Interval` | How often players are checked, in milliseconds |

With both `ReapplyWalk` settings off, the script does nothing at all. Restart the resource after changing `config.lua`.

## Bundle or Single Peds

The five peds are also sold one by one. Do not install this bundle together with the single NS Undead Pack 2 resources (`ns_ud_2_hk`, `ns_ud_2_bm`, `ns_ud_2_cb`, `ns_ud_2_vl`, `ns_ud_2_hl`): the bundle already contains all of them.

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
