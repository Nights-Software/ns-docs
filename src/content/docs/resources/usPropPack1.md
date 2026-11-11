---
title: US Prop Pack 1
description: Eleven US road-works props in three quality tiers, with real-world weights and full collision.
slug: resources/usPropPack1
lastUpdated: 2026-11-11
group: assets
store: https://store.nights-software.com/package/us-prop-pack-1
cover: ../../../assets/covers/usPropPack1.jpg
---

## Overview

US Prop Pack 1 adds eleven road-works props: cones, channelizer drums, barricades, a work-zone sign and a site barrier. They are dynamic props like GTA's own cones and barriers, so vehicles can knock them over, and each one collides with players, NPCs, vehicles, bullets and explosions.

| Prop | Model name | Mass | Size W x D x H (m) |
|---|---|---|---|
| 28 in traffic cone, orange, 2 reflective bands, square base | `ns_us_1_cone_small` | 4.6 kg | 0.38 x 0.38 x 0.71 |
| 36 in traffic cone, 2 reflective bands, black recycled-rubber base | `ns_us_1_cone_large` | 6.4 kg | 0.45 x 0.45 x 0.91 |
| Channelizer drum, 4 reflective bands, top handle, rubber tire-ring base | `ns_us_1_drum` | 28.8 kg | 0.86 x 0.86 x 1.02 |
| Channelizer drum with DO NOT ENTER (R5-1) sign on a steel bracket | `ns_us_1_drum_dne` | 33.4 kg | 0.86 x 0.86 x 1.55 |
| Vertical striped panel on a galvanized post, rubber base | `ns_us_1_vpanel` | 20.1 kg | 0.46 x 0.69 x 1.50 |
| Tall tubular channelizer / delineator with loop handle, rubber base | `ns_us_1_delineator` | 8.6 kg | 0.39 x 0.43 x 1.10 |
| Type II barricade, 2 striped rails, orange steel posts, rubber feet | `ns_us_1_barricade2` | 17.3 kg | 1.06 x 0.41 x 1.00 |
| Type II barricade with centred orange ROAD CLOSED sign | `ns_us_1_barricade2_rc` | 23.0 kg | 1.32 x 0.46 x 1.65 |
| 36 in orange diamond 'worker' sign (W21-1) on a spring stand | `ns_us_1_sign_worker` | 17.3 kg | 0.99 x 0.64 x 1.60 |
| Orange plastic site barrier, straight panel, 5 openings, reflective strip | `ns_us_1_fence` | 8.6 kg | 1.92 x 0.60 x 1.00 |
| Type III barricade, 3 striped rails, perforated steel posts, white ROAD CLOSED sign | `ns_us_1_barricade3_rc` | 64.4 kg | 1.70 x 0.77 x 1.60 |

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

- Runs on current FiveM server artifacts and game builds. No game DLC is needed.
- No dependencies and no framework: it works standalone and beside ESX, QBCore and Qbox.
- The pack only streams models. No script runs.
- All model names start with `ns_us_1_`, so they do not clash with other prop packs.

## Installation

The download holds three versions of the same resource: Low, Medium and High. Install only one of them. All three use the resource name `ns_props_us_1` and the same model names.

1. Pick a tier folder: Low, Medium or High. Medium is recommended for most servers.
2. Copy the `ns_props_us_1` folder from that tier into your server's resources folder.
3. Add this line to `server.cfg`:

```ini
ensure ns_props_us_1
```

To switch tiers later, replace the folder with the one from another tier. Your scripts and maps keep working.

## Choosing a Tier

- **Low** has the smallest textures and the simplest models. It suits busy servers, scenes with many props on screen and players on weak PCs.
- **Medium** is the best balance and is recommended for most servers.
- **High** has the sharpest textures and the most detail. It suits close-up scenes, screenshots and smaller roleplay servers.

From a distance the tiers look the same. The difference is texture sharpness and detail up close. Every prop in every tier is far below FiveM's 16 MB warning for a single asset.

| Tier | Largest texture | Texture memory, whole pack | Streaming memory, whole pack | Largest single prop | Drawn up to |
|---|---|---|---|---|---|
| Low | 512 px | 4.79 MB | 8.48 MB | 1.25 MB | 80 m |
| Medium | 1024 px | 19.17 MB | 30.48 MB | 4.25 MB | 120 m |
| High | 2048 px | 70.67 MB | 104.46 MB | 12.41 MB | 150 m |

Streaming memory is what the pack uses if every prop is loaded at once. Each tier folder also holds a `SPECS.md` with the numbers for every prop.

## Spawning the Props

**From a script.** Request the model, wait until it has loaded, then create the object:

```lua
local model = joaat('ns_us_1_cone_large')
RequestModel(model)
while not HasModelLoaded(model) do Wait(0) end
local pos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 2.0, 0.0)
local obj = CreateObject(model, pos.x, pos.y, pos.z, true, true, false)
PlaceObjectOnGroundProperly(obj)
SetModelAsNoLongerNeeded(model)
```

The props also work with scene-management and job scripts that accept custom prop models.

**In a map.** Place the props by model name in maps on your own server. Start `ns_props_us_1` before the resource that holds the map.

**Fixed or loose.** The props are loose by default. For a fixed setup, freeze them:

```lua
FreezeEntityPosition(obj, true)
```

Frozen props keep their collision.

## Collision and Physics

- Players, NPCs, vehicles, bullets and explosions all collide with every prop.
- The props have real-world weights, so they tip and slide believably instead of flying off.
- Round props use round collision, so they lie flat and roll when knocked over.

## Asset Escrow

The model files are protected with Cfx.re asset escrow. They only work on the server linked to the Cfx.re account that bought the pack, and they cannot be opened, edited, resold or redistributed. You use them by spawning them by model name in your scripts, or by placing them in maps on your own server. The README, FAQ and specs in the download stay readable.

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
