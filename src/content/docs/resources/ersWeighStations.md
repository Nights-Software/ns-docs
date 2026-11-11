---
title: Dynamic Weigh Stations
description: An add-on for Emergency Response Simulator that sets up weighing stations anywhere and weighs the vehicles on them.
slug: resources/ersWeighStations
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6605986
cover: ../../../assets/covers/ersWeighStations.jpg
---

## Overview

Dynamic Weigh Stations is an ERS add-on. A player on shift sets up a weighing station at their own location, in the direction they are facing, and removes it again when it is no longer needed. The weight of a vehicle can be drawn as text above the station, in yellow, and in red when the vehicle is over its limit.

- **Set up and remove** a weighing station with a command. The area has to be suitable.
- **Weight per vehicle:** each passenger and each vehicle mod has a weight, and each vehicle class has a weight limit.
- **Overweight vehicles:** each vehicle class has a chance of being too heavy, and a weight limit.
- **Roleplay weight:** add extra weight to a vehicle, or take it off, for your scenes.
- **Services:** you choose which services can use the stations.
- **Kilograms or pounds.**

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

- [Emergency Response Simulator](/resources/ers/) (`night_ers`), started before this resource. Players have to be on shift in ERS: without it they see "You are not on shift.".

## Installation

1. Put the `night_ers_weighstation` folder in your server's `resources` folder.
2. Add this line to `server.cfg`, below `ensure night_ers`:

```ini
ensure night_ers_weighstation
```

3. Restart your server.

## Configuration

All settings are in `config/config.lua`. The manifest leaves `config/*.lua` outside the asset escrow, so you can edit it. Do not change `ConfigVersion` and `EventPrefix`.

### Services and Units

```lua
AllowedServiceTypes = { -- Options: police, tow, ambulance, fire
    "police",
    "tow",
},

WeighStation = {
    UseLbs = false,                     -- if false, weight will be in kilograms. If true, weight will be in pounds.
    WeightPerPassenger = 80,            -- Weight per passenger in kilograms (converted to lbs if UseLbs is true).
    MaximumCustomExtraWeight = 20000,   -- Maximum extra weight in kilograms that can be applied to a vehicle (converted to lbs if UseLbs is true).
```

| Setting | What it does |
|---|---|
| `AllowedServiceTypes` | The services that can use the stations. Options: `police`, `tow`, `ambulance` and `fire` |
| `WeighStation.UseLbs` | When `false` the weight is in kilograms. When `true` it is in pounds |
| `WeighStation.WeightPerPassenger` | The weight of each passenger, in kilograms (converted to pounds if `UseLbs` is `true`) |
| `WeighStation.MaximumCustomExtraWeight` | The most extra weight, in kilograms, that can be applied to a vehicle (converted to pounds if `UseLbs` is `true`) |

### The Station and Its Text

```lua
DrawWeightAboveStation = true,      -- If true, weight will be drawn in text above the station.
DrawTextOffset = {
    x = 0.0,
    y = 0.0,
    z = 2.5
},
DrawTextScale = 2.0,                         -- Scale of the text.
DrawTextColor = {255, 255, 0, 150},          -- Color of the text.
DrawTextColorExceeded = {255, 0, 0, 150},    -- Color of the text if the weight limit is exceeded.
ObjectModel = "imp_prop_impexp_bblock_lrg1", -- Model of the object to be used as a weighing station.
ObjectOffset = {
    x = 0.0,
    y = 0.0,
    z = -0.95   -- up-down
},
```

| Setting | What it does |
|---|---|
| `DrawWeightAboveStation` | Draws the weight as text above the station |
| `DrawTextOffset` | The offset of the text above the station |
| `DrawTextScale` | The size of the text |
| `DrawTextColor` | The colour of the text, as red, green, blue and alpha |
| `DrawTextColorExceeded` | The colour of the text when the weight limit is exceeded |
| `ObjectModel` | The model used as the weighing station |
| `ObjectOffset` | The offset of the station object. `z` moves it up or down |

### Vehicle Classes

`VehicleClassesWhichCanHaveTooMuchWeight` has one entry for each GTA vehicle class. Do not remove any entry. Set `CanHaveOverweight` to `false` for a class that should never be too heavy. `Chance` is a percentage, so 100 is a 100% chance. The weights are in kilograms, converted to pounds if `UseLbs` is `true`.

| Class | Name | Can be overweight | Chance | MaxWeightOffset | AllowedWeightLimit |
|---|---|---|---|---|---|
| 0 | `compacts` | Yes | 5% | 750 | 2000 |
| 1 | `sedans` | Yes | 5% | 1000 | 3000 |
| 2 | `suvs` | Yes | 15% | 1000 | 3000 |
| 3 | `coupes` | Yes | 5% | 1000 | 3000 |
| 4 | `muscle` | Yes | 5% | 1000 | 3000 |
| 5 | `sportsclassics` | Yes | 5% | 1000 | 3000 |
| 6 | `sports` | Yes | 5% | 750 | 2500 |
| 7 | `super` | Yes | 5% | 750 | 2000 |
| 8 | `motorcycles` | Yes | 1% | 150 | 500 |
| 9 | `offroad` | Yes | 10% | 1250 | 4000 |
| 10 | `industrial` | Yes | 15% | 20000 | 20000 |
| 11 | `utility` | Yes | 5% | 5000 | 10000 |
| 12 | `vans` | Yes | 35% | 5000 | 6000 |
| 13 | `cycles` | No | 1% | 10 | 100 |
| 14 | `boats` | No | 1% | 50 | 2000 |
| 15 | `helicopters` | No | 1% | 50 | 2000 |
| 16 | `planes` | No | 1% | 50 | 2000 |
| 17 | `service` | No | 1% | 2500 | 15000 |
| 18 | `emergency` | No | 1% | 50 | 2000 |
| 19 | `military` | No | 1% | 50 | 2000 |
| 20 | `commercial` | Yes | 45% | 20000 | 20000 |
| 21 | `trains` | No | 1% | 50 | 2000 |
| 22 | `openwheel` | No | 1% | 50 | 2000 |

### Vehicle Mods

```lua
EnableVehicleModsHaveWeight = true, -- If true, vehicle mods will have weight.
WeightPerVehicleMod = {
    {modType = 0, name = "Spoiler", weight = 10}, -- In Kilograms, converted to lbs if UseLbs is true.
    {modType = 1, name = "Bumper Front", weight = 10},
    -- ...
    {modType = 11, name = "Engine", weight = 70},
    {modType = 16, name = "Armour", weight = 90},
    -- ...
},
```

| Setting | What it does |
|---|---|
| `EnableVehicleModsHaveWeight` | When `true`, vehicle mods add weight |
| `WeightPerVehicleMod` | The weight of each mod type, in kilograms (converted to pounds if `UseLbs` is `true`). The list has an entry for every mod type from 0 (Spoiler) to 49 (Lightbar) |

### Language

`Language` holds every message players read, for example "Removed nearby weighing station." and "The area is not suitable for setting up a dynamic weigh station.". `VehicleExceedsWeightLimit` fills in the vehicle's model and plate, the weight over the limit and the maximum. Translate the values in place.

## Commands and Keys

The command names are in `Commands` in the config.

| Command | What it does |
|---|---|
| `/setupweighstation` | Creates a weighing station at your current location in the direction you are facing |
| `/removeweighstation` | Removes the closest weighing station to your location |
| `/setvehweight` | Applies extra weight to a vehicle. Fictive, for roleplay purposes. Give the weight as a number |
| `/removevehweight` | Removes extra weight from a vehicle. Fictive, for roleplay purposes |

You cannot set up a station while in a vehicle, swimming, ragdolled, falling, jumping or climbing. You must be in a vehicle to set its weight.

`HotKeys` can bind a key to setting up and removing a station. There is no hotkey by default.

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
