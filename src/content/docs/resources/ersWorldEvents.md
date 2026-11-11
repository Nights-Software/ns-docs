---
title: World Events
description: An add-on for Emergency Response Simulator that spawns random events around the player, from a weighted list you control.
slug: resources/ersWorldEvents
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6437544
cover: ../../../assets/covers/ersWorldEvents.jpg
---

## Overview

World Events is an ERS add-on. At a set interval it picks an event from your event list and spawns it around the player. You decide which events exist, how likely each one is, how far from the player it can spawn, which services it is for and where on the map it is more or less likely.

The config comes with three events. You can add more.

| Event | Description | Weight | Services |
|---|---|---|---|
| Aggravated Person | Someone in the area seems to be very angry and aggressive against other people around them. | 80 | Police |
| Car Accident | A traffic accident has occurred in your vicinity. | 60 | Police, ambulance, fire, tow |
| Lost Tourist | A tourist who is lost and confused, they are asking for directions to a nearby landmark. | 40 | Police, ambulance, fire, tow |

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

- [Emergency Response Simulator](/resources/ers/) (`night_ers`), started before this resource.

## Installation

1. Put the `night_ers_worldevents` folder in your server's `resources` folder.
2. Add this line to `server.cfg`, below `ensure night_ers`:

```ini
ensure night_ers_worldevents
```

3. Restart your server.

## Configuration

All settings are in `config/config.lua`. The manifest leaves `config/*.lua` outside the asset escrow, so you can edit it.

### Timing

```lua
EventInterval = {120, 240}, -- Time in seconds between events.
DistanceToStopEvent = 200.0, -- Distance to stop the event when the player is too far away.
```

| Setting | What it does |
|---|---|
| `EventInterval` | The time between events, in seconds, as a minimum and a maximum |
| `DistanceToStopEvent` | The distance at which an event stops because the player is too far away |

### Events

Every entry in `Events` is one event:

```lua
{
    Name = "Aggravated Person", -- Name of the event.
    Description = "Someone in the area seems to be very angry and aggressive against other people around them.", -- Description of the event.
    Weight = 80, -- Weight of the event, higher weight means it's more likely to spawn.
    ZoneMultiplier = {["AIRP"] = 0.8, ["DAVIS"] = 1.2, ["BEACH"] = 0.9, ["DOWNT"] = 1.5}, -- Above 1.0 is higher chance to spawn in the area you are in, below 1.0 is lower chance to spawn.
    SpawnOffset = {min = -50.0, max = 50.0}, -- Spawn offset for the event, this is the range that the event can spawn in around the player.
    ServiceTypes = { "police" }, -- Service types for which the event is available. (Options: police, ambulance, fire, tow)
},
```

| Setting | What it does |
|---|---|
| `Name` | The name of the event |
| `Description` | The description of the event |
| `Weight` | How likely the event is to spawn. A higher weight is more likely |
| `ZoneMultiplier` | A multiplier per map zone. Above 1.0 is a higher chance to spawn in the area you are in, below 1.0 is a lower chance |
| `SpawnOffset` | The range, as a minimum and a maximum, in which the event can spawn around the player |
| `ServiceTypes` | The services the event is available for. Options: `police`, `ambulance`, `fire` and `tow` |

The config points to the [FiveM natives reference](https://docs.fivem.net/natives/?_0x98CD1D2934B76CC1) for finding zones.

### How Weight Works

An event's chance is its weight divided by the total weight of all events. With the three events above the total is 80 + 60 + 40 = 180:

| Event | Calculation | Chance |
|---|---|---|
| Aggravated Person | 80 / 180 | 44.4% |
| Car Accident | 60 / 180 | 33.3% |
| Lost Tourist | 40 / 180 | 22.2% |

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
