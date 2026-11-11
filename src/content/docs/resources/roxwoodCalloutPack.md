---
title: Roxwood Callout Pack
description: A free pack of twenty callouts set in Roxwood, for Emergency Response Simulator.
slug: resources/roxwoodCalloutPack
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/6767025
cover: ../../../assets/covers/roxwoodCalloutPack.jpg
---

## Overview

The Roxwood Callout Pack adds twenty callouts to ERS. They are plugin files, one per callout, that you drag and drop into the `callouts/plugins` folder of your ERS resource. The pack requires Roxwood to work.

Three of the callouts are switched off in their files: Roxwood GP Race Crash, Theft of a Racecar and Reports of Theft. Set `Enabled = true` in a callout's file to turn it on.

| Callout | Services | On by default | Dispatch text |
|---|---|---|---|
| Aggressive Boars | Police | Yes | Respond to a report of aggressive boars attacking a farmer; ensure public safety and coordinate with animal control. |
| Animal on the Road in Roxwood | Police | Yes | An unexpected type of animal has appeared on the road, causing a disruption in traffic flow. |
| Bouncer in Trouble | Police | Yes | A bouncer is struggling to control a rowdy crowd at a nightclub, with tensions escalating quickly. |
| Bridge blockade | Police | Yes | Emergency: respond to reports of a bridge blockade; ensure the area is cleared to prevent accidents. |
| Drug Lab Incident | Police, Ambulance, Fire | Yes | Emergency response needed at the drug lab; individual requiring immediate medical attention. |
| Illegal Camping | Police | Yes | Investigate reports of illegal camping in a restricted area; ensure compliance with local regulations. |
| Mysterious egg(s) reported | Police, Fire | Yes | Emergency: respond to reports of a mysterious egg; assess potential hazards. |
| Panic alarm at the mine | Police, Fire | Yes | Emergency responders are required to investigate the source of the panic alarm at the mine. |
| Reports of a Fire | Fire | Yes | A fire has been reported, requiring immediate attention from fire services. |
| Reports of Arson in Roxwood | Police, Fire | Yes | Suspected arson incidents have been reported, requiring immediate response from law enforcement and fire services. |
| Reports of Theft | Police | No | Reports of theft, details pending |
| Roxwood Crop Fire | Police, Fire | Yes | Reports of a combine harvester malfunction causing a rapidly spreading wheat field fire. |
| Roxwood Gas Station Robbery | Police, Ambulance | Yes | Respond to a report of an armed robbery at a gas station; secure the area and apprehend the suspects. |
| Roxwood GP Race Crash | Police, Ambulance, Fire, Tow | No | Reported road traffic collision, further details needed |
| Roxwood Shootout | Police | Yes | A violent shootout has erupted between two rival groups in Roxwood. |
| Rubbish washed up from the sea | Police, Fire | Yes | Emergency: respond to reports of debris washed up on the shoreline; assess environmental hazards. |
| Silo Fire | Fire | Yes | A fire has been reported in an agricultural silo, requiring immediate emergency response. |
| Theft of a Racecar | Police | No | High-performance racecar reported stolen from local track, immediate response required |
| Waterpark Incident | Ambulance | Yes | Emergency response needed at the waterpark; individual requiring immediate medical attention. |
| Wounded adventurer | Police, Ambulance, Fire | Yes | Emergency responders have located a wounded adventurer and are providing assistance. |

The dispatch text shown is the first of each callout's descriptions. Every callout has ten.

## Important Pre-Installation Notes

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## Requirements

- [Emergency Response Simulator](/resources/ers/) (`night_ers`).
- Roxwood. The pack requires it to work. [Buy your ticket to Roxwood here](https://ambitioneers.tebex.io/package/5349456).

## Installation

1. Open the `callouts/plugins` folder of your ERS resource: `night_ers/callouts/plugins/`.
2. Drag and drop the files from the pack's `plugins` folder into it. The pack has twenty files.
3. Restart the script and spawn a callout to test it.

## Configuration

Each callout is one file in `night_ers/callouts/plugins/`, and each file starts with its settings:

| Setting | What it does |
|---|---|
| `Enabled` | Turns the callout on or off |
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
| `PedWeaponData` | The weapons a ped can be given |

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
