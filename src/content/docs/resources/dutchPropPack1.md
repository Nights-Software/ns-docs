---
title: Dutch Prop Pack 1
description: Eleven Dutch road-works and incident props built to real Dutch dimensions, in three quality tiers.
slug: resources/dutchPropPack1
lastUpdated: 2026-11-11
group: assets
store: https://store.nights-software.com/package/dutch-prop-pack-1
cover: ../../../assets/covers/dutchPropPack1.jpg
---

## Overview

Dutch Prop Pack 1 adds eleven road-works and incident props, built to real Dutch rental and CROW / RVV dimensions: ten props and one free bonus prop. They are dynamic props like GTA's own cones and barriers, so vehicles can knock them over, and each one collides with players, NPCs, vehicles, bullets and explosions.

| Prop | Model name | Mass | Size W x D x H (m) |
|---|---|---|---|
| Bouwhek (mobile site fence) 3.50 x 2.00 m, galvanised tube frame, welded wire mesh, 2 concrete feet | `ns_nl_1_bouwhek` | 76.0 kg | 3.76 x 0.70 x 2.06 |
| Dranghek (crowd barrier) 2.50 x 1.10 m, galvanised, 19 bars, hooks on the right end and eyes on the left | `ns_nl_1_dranghek` | 23.0 kg | 2.53 x 0.60 x 1.11 |
| Schrikhek 2.50 m, two red and white reflective planks on galvanised A-stands, 2 battery warning lamps | `ns_nl_1_schrikhek` | 24.0 kg | 2.50 x 0.90 x 1.39 |
| Pylon (verkeerskegel) 50 cm, red-orange, 2 narrow white reflective bands, square black rubber base | `ns_nl_1_pylon_50` | 3.4 kg | 0.30 x 0.30 x 0.50 |
| Pylon (verkeerskegel) 75 cm, red-orange, 2 wide white reflective bands, square black rubber base | `ns_nl_1_pylon_75` | 6.2 kg | 0.40 x 0.40 x 0.75 |
| Geleidebaak 1.00 x 0.25 m, red and white reflective stripes on both sides, on a recycled-rubber foot plate | `ns_nl_1_geleidebaak` | 32.0 kg | 0.40 x 0.80 x 1.30 |
| RVV C1 (closed in both directions) 70 cm with onderbord 'uitgezonderd fietsers', on a pole in a rubber voetplaat | `ns_nl_1_bord_c1` | 36.0 kg | 0.70 x 0.80 x 1.60 |
| Omleidingsbord 1.00 x 0.50 m, fluorescent yellow, 'omleiding' and arrow, on a pole in a rubber voetplaat | `ns_nl_1_bord_omleiding` | 35.0 kg | 1.00 x 0.80 x 1.50 |
| RVV J16 'werk in uitvoering' 90 cm triangle, on a pole in a rubber voetplaat | `ns_nl_1_bord_werk` | 35.0 kg | 0.86 x 0.80 x 1.50 |
| RVV J34 'ongeval' 90 cm triangle on a folding black steel stand | `ns_nl_1_bord_ongeval` | 12.0 kg | 0.88 x 0.65 x 1.20 |
| Afzetpaal 1.0 m, red and white banded post on a round black rubber base (bonus prop) | `ns_nl_1_afzetpaal` | 5.2 kg | 0.40 x 0.40 x 1.03 |

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
- All model names start with `ns_nl_1_`, so they do not clash with other prop packs.

## Installation

The download holds three versions of the same resource: Low, Medium and High. Install only one of them. All three use the resource name `ns_props_nl_1` and the same model names.

1. Pick a tier folder: Low, Medium or High. Medium is recommended for most servers.
2. Copy the `ns_props_nl_1` folder from that tier into your server's resources folder.
3. Add this line to `server.cfg`:

```ini
ensure ns_props_nl_1
```

To switch tiers later, replace the folder with the one from another tier. Your scripts and maps keep working.

## Choosing a Tier

- **Low** has the smallest textures and the simplest models. It suits busy servers, scenes with many props on screen and players on weak PCs.
- **Medium** is the best balance and is recommended for most servers.
- **High** has the sharpest textures and the most detail. It suits close-up scenes, screenshots and smaller roleplay servers.

From a distance the tiers look the same. The difference is texture sharpness and detail up close. Every prop in every tier is below FiveM's 16 MB warning for a single asset.

| Tier | Largest texture | Texture memory, whole pack | Streaming memory, whole pack | Largest single prop | Drawn up to |
|---|---|---|---|---|---|
| Low | 512 px | 4.83 MB | 8.99 MB | 1.27 MB | 80 m |
| Medium | 1024 px | 18.96 MB | 30.73 MB | 4.50 MB | 120 m |
| High | 2048 px | 68.46 MB | 100.78 MB | 12.50 MB | 150 m |

Streaming memory is what the pack uses if every prop is loaded at once. Each tier folder also holds a `SPECS.md` with the numbers for every prop.

## Spawning the Props

**From a script.** Request the model, wait until it has loaded, then create the object:

```lua
local model = joaat('ns_nl_1_schrikhek')
RequestModel(model)
while not HasModelLoaded(model) do Wait(0) end
local pos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 3.0, 0.0)
local obj = CreateObject(model, pos.x, pos.y, pos.z, true, true, false)
PlaceObjectOnGroundProperly(obj)
SetModelAsNoLongerNeeded(model)
```

The props also work with scene-management and job scripts that accept custom prop models.

**In a map.** Place the props by model name in maps on your own server. Start `ns_props_nl_1` before the resource that holds the map.

**Fixed or loose.** The props are loose by default. For a fixed setup, freeze them:

```lua
FreezeEntityPosition(obj, true)
```

Frozen props keep their collision.

## Linking Crowd Barriers

The dranghek has round-bar hooks on its right end and eyes on its left end. Place two dranghekken 2.50 m apart along their length with the same heading, and the hooks drop into the next barrier's eyes.

## Warning Lamps

The two warning lamps on the schrikhek have glowing amber lenses in every tier. The High and Medium tiers also carry a real amber light in each lamp, with a range of about 3.5 m, flashing about once per second, day and night. The Low tier has the glowing lenses only.

## Signs and Markings

C1, J16 and J34 use the official RVV sign artwork. The omleidingsbord follows the CROW WIU 2020 layout: fluorescent yellow, lowercase 'omleiding' and an arrow.

## Collision and Physics

- Players, NPCs, vehicles, bullets and explosions all collide with every prop.
- The props have real-world weights, so they tip and slide believably instead of flying off.
- Round props use round collision, so they lie flat and roll when knocked over.
- Heavy feet keep the signs, the geleidebaak and the bouwhek upright. The bouwhek weighs 76 kg with both concrete feet and moves only when a vehicle pushes it.

## Asset Escrow

The model files are protected with Cfx.re asset escrow. They only work on the server linked to the Cfx.re account that bought the pack, and they cannot be opened, edited, resold or redistributed. You use them by spawning them by model name in your scripts, or by placing them in maps on your own server. The README, FAQ and specs in the download stay readable.

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
