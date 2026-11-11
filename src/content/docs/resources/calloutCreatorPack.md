---
title: Callout Creator Pack
description: A free example pack that shows how to build your own callouts for Emergency Response Simulator.
slug: resources/calloutCreatorPack
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6374594
cover: ../../../assets/covers/calloutCreatorPack.jpg
---

## Overview

The Callout Creator Pack holds one example callout and the steps for turning a callout file into your own. The example is a police callout, "Theft of a tractor". It is in the pack's `plugins` folder, the same folder name ERS uses for its callouts: `night_ers/callouts/plugins/`.

A callout file holds three parts, and you adjust all of them for your own callout: the config, the client code and the server code. The config part holds the callout's name, its dispatch texts, the services it is for, its locations and how the people in it behave.

:::note[No ticket support for building callouts]
Nights Software does not provide ticket support for building callouts. Read the documentation instead. This option is made to give skilled developers the freedom to build their own callouts.
:::

## Important Pre-Installation Notes

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## Requirements

- [Emergency Response Simulator](/resources/ers/) (`night_ers`). The example is a callout file for ERS, and the steps below work inside its `callouts/plugins` folder.

## Building a Callout

Do these four tasks for each callout you create:

1. Go to the `night_ers/callouts/plugins/` folder. Copy an existing `.lua` callout file, or paste in a newly created callout file.
2. Rename the file to the name you want for your callout.
3. Adjust the config, client and server code in your new file, all of them, to your liking.
4. Test the callout: restart the script, then spawn the callout.

The functions you can use in a callout are listed in the [ERS documentation](/resources/ers/#creating-custom-callouts).

## The Example Callout

The example file, `callout_example.lua`, starts with the callout's config. It is registered as `Config.Callouts["stolen_tractor"]`.

| Setting | What it does |
|---|---|
| `Enabled` | Turns the callout on or off |
| `CalloutName` | The name of the callout. In the example: "Theft of a tractor" |
| `CalloutDescriptions` | A list of dispatch descriptions. The example has eight, such as "Reports of theft of a tractor, details pending" |
| `CalloutUnitsRequired` | The services the callout is for. The example is for the police: `policeRequired = true`, with `ambulanceRequired`, `fireRequired` and `towRequired` set to `false` |
| `CalloutLocations` | The places where the callout can start, numbered from `[1]`. The example has ten |

The people in the callout are set with these lines:

```lua
PedChanceToFleeFromPlayer = 90,     -- Value between 0 and 100 -> Lower is less chance.
PedChanceToAttackPlayer = 10,       -- Value between 0 and 100 -> Lower is less chance.
PedChanceToSurrender = 10,          -- Value between 0 and 100 -> Lower is less chance.
PedChanceToObtainWeapons = 25,      -- Value between 0 and 100 -> Lower is less chance.
PedActionMinimumTimeoutInMs = 10000,-- Milliseconds for the minimum timeout time to start the secondary action listed above.
PedActionMaximumTimeoutInMs = 15000,-- Milliseconds for the maximum timeout time to start the secondary action. Must be a higher number than the minimum!
PedActionOnNoActionFound = "flee",  -- When no action of the above options is found. It'll perform this action after the set timeout. Options: "none", "attack", "flee", "surrender"
PedWeaponData = { -- The ped will be given one randomly selected weapon (in hand) from these weapons if PedChanceToObtainWeapons passed.
    "weapon_knife",
    "weapon_pistol",
},
```

| Setting | What it does |
|---|---|
| `PedChanceToFleeFromPlayer` | The chance, from 0 to 100, that a ped flees. Lower is less chance |
| `PedChanceToAttackPlayer` | The chance, from 0 to 100, that a ped attacks. Lower is less chance |
| `PedChanceToSurrender` | The chance, from 0 to 100, that a ped surrenders. Lower is less chance |
| `PedChanceToObtainWeapons` | The chance, from 0 to 100, that a ped is given a weapon. Lower is less chance |
| `PedActionMinimumTimeoutInMs` | The shortest wait, in milliseconds, before the secondary action starts |
| `PedActionMaximumTimeoutInMs` | The longest wait, in milliseconds, before the secondary action starts. It must be higher than the minimum |
| `PedActionOnNoActionFound` | What a ped does after the timeout when none of the other actions was found: `"none"`, `"attack"`, `"flee"` or `"surrender"` |
| `PedWeaponData` | The weapons a ped can be given. One is picked at random if `PedChanceToObtainWeapons` passed |

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
