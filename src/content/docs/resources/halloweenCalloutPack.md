---
title: Halloween Callout Pack
description: A free pack of five Halloween callouts for Emergency Response Simulator.
slug: resources/halloweenCalloutPack
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6494766
cover: ../../../assets/covers/halloweenCalloutPack.jpg
---

## Overview

The Halloween Callout Pack adds five callouts to ERS. They are plugin files, one per callout, that you drag and drop into the `callouts/plugins` folder of your ERS resource.

| Callout | Services | Dispatch text |
|---|---|---|
| Scary Crowd | Police | Emergency: respond to reports of a large group behaving erratically; ensure public safety. |
| Scary Person | Police | Emergency: respond to reports of a suspicious individual behaving erratically; ensure public safety. |
| Strange Ritual | Police, Fire | Eerie Ceremony: Respond to reports of a suspicious gathering performing an unknown ritual; investigate the scene. |
| Suspect(s) in Halloween Costume | Police | Suspicious Costume: Investigate reports of an individual in an unusual Halloween costume behaving oddly in the area. |
| Trick-or-Treat Terror | Police | Trick-or-Treat Terror: Respond to reports of a trick-or-treater setting fire to a house; ensure public safety. |

The dispatch text shown is the first of each callout's descriptions. Every callout has eight or ten.

## Important Pre-Installation Notes

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## Requirements

- [Emergency Response Simulator](/resources/ers/) (`night_ers`).

## Installation

1. Open the `callouts/plugins` folder of your ERS resource: `night_ers/callouts/plugins/`.
2. Drag and drop the files from the pack's `plugins` folder into it. The pack has five files.
3. Restart the script and spawn a callout to test it.

## Configuration

Each callout is one file in `night_ers/callouts/plugins/`, and each file starts with its settings. These are the lines from the Scary Crowd callout:

```lua
Enabled = true,
CalloutName = "Scary Crowd",
PedChanceToFleeFromPlayer = 0,      -- Value between 0 and 100 -> Lower is less chance.
PedChanceToAttackPlayer = 10,       -- Value between 0 and 100 -> Lower is less chance.
PedChanceToSurrender = 0,           -- Value between 0 and 100 -> Lower is less chance.
PedChanceToObtainWeapons = 15,      -- Value between 0 and 100 -> Lower is less chance.
PedActionMinimumTimeoutInMs = 10000,    -- Milliseconds for the minimum timeout time to start the secondary action listed above.
PedActionMaximumTimeoutInMs = 20000, -- Milliseconds for the maximum timeout time to start the secondary action. Must be a higher number than the minimum!
PedActionOnNoActionFound = "none",  -- When no action of the above options is found. It'll perform this action after the set timeout. Options: "none", "attack", "flee", "surrender"
PedWeaponData = { -- The ped will be given one randomly selected weapon (in hand) from these weapons if PedChanceToObtainWeapons passed.
    "weapon_stone_hatchet",
},
```

| Setting | What it does |
|---|---|
| `Enabled` | Turns the callout on or off. All five are `true` |
| `CalloutName` | The name of the callout |
| `CalloutDescriptions` | The list of dispatch descriptions |
| `CalloutUnitsRequired` | The services the callout is for: `policeRequired`, `ambulanceRequired`, `fireRequired` and `towRequired` |
| `CalloutLocations` | The places where the callout can start, numbered from `[1]` |
| `PedChanceToFleeFromPlayer` | The chance, from 0 to 100, that a ped flees. Lower is less chance |
| `PedChanceToAttackPlayer` | The chance, from 0 to 100, that a ped attacks. Lower is less chance |
| `PedChanceToSurrender` | The chance, from 0 to 100, that a ped surrenders. Lower is less chance |
| `PedChanceToObtainWeapons` | The chance, from 0 to 100, that a ped is given a weapon. Lower is less chance |
| `PedActionMinimumTimeoutInMs` | The shortest wait, in milliseconds, before the secondary action starts |
| `PedActionMaximumTimeoutInMs` | The longest wait, in milliseconds, before the secondary action starts. It must be higher than the minimum |
| `PedActionOnNoActionFound` | What a ped does after the timeout when no other action was found: `"none"`, `"attack"`, `"flee"` or `"surrender"` |
| `PedWeaponData` | The weapons a ped can be given. One is picked at random if `PedChanceToObtainWeapons` passed |

The values differ per callout.

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
