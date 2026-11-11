---
title: Callout Expansion Pack 1
description: Thirty extra callouts for Emergency Response Simulator, for the police, ambulance, fire and tow services.
slug: resources/calloutExpansionPack1
lastUpdated: 2026-11-11
group: ers
store: https://store.nights-software.com/package/7277996
cover: ../../../assets/covers/calloutExpansionPack1.jpg
---

## Overview

Callout Expansion Pack 1 is a callout expansion for ERS. It runs as its own resource, `night_ers_cp1`, beside `night_ers`. It adds thirty callouts: fires, hazardous materials, crime scenes, medical emergencies, water recoveries and tow jobs.

| Callout | Services | Dispatch text |
|---|---|---|
| Camper theft from campsite | Police | Caller reports someone driving off in their parked motorhome while they were away from the pitch. |
| Carbon monoxide — unresponsive person(s) | Ambulance | Welfare check: caller reports an unresponsive person in a badly ventilated enclosed space; fumes or exhaust may be involved. |
| Chemical leak | Ambulance, Fire | Hazardous chemical leak reported at an industrial site; evacuate area and request HAZMAT and fire. |
| Cold case lead — submerged evidence | Police | Cold case unit has received an anonymous tip pointing to evidence dumped offshore years ago. Dive team requested to recover items from the seabed for re-examination. |
| Contaminated water — underwater source recovery | Police, Ambulance, Fire | Environmental unit reports a chemical sheen on the water; HazMat suspects illegal drum disposal below the surface. Recover submerged containers for lab trace — minimise exposure. One civilian pulled from the water and held for observation on shore. |
| Crime scene — disturbing discovery | Police | Disturbing scene reported at this address. First responding officer has secured the perimeter and is requesting a second unit. Nature of the scene is not suitable for the faint-hearted. |
| Deer herd — public grounds | Police | Caller reports a large cluster of deer on manicured grounds beside leisure buildings — vehicles stacking on adjoining roads. |
| DUI Checkpoint — Custody Transport | Police | Checkpoint unit has a driver in custody after a positive roadside screening. They need a transport unit to run the subject to the custody center. |
| Festival pyrotechnics malfunction | Fire | Pyrotechnics malfunction at a festival; stray sparks and smoke. Fire units respond. |
| Fire caused by lightning | Fire | Structure fire started by lightning strike; electrical hazards possible. Fire units respond. |
| Fire in difficult-to-reach location | Fire | Fire reported in a remote or hard-to-access area; terrain and access may complicate response. Fire units respond. |
| Fireworks warehouse fire | Fire | Major fire reported at a fireworks storage warehouse; volatile materials on site—all fire units respond. |
| Forest fire | Fire | Large forest fire reported; vegetation and brush alight. Fire crews required to contain spread. |
| Highrise fire | Fire | Major fire reported in a highrise building; multiple floors affected. All fire units respond. |
| Highway vehicle impound pickup | Tow | Tow requested for a single vehicle still on the highway after emergency clearance. Scene reported safe — recover to impound or a designated garage per instructions. |
| Illegal fireworks display | Police | Reports of illegal fireworks being set off; suspects possibly on scene. Police respond. |
| Illegal Radioactive Waste Dump | Police, Fire | Anonymous tip received — someone is illegally dumping radioactive material at this location. Suspect vehicle may still be on scene. Intercept immediately. |
| Large Scale Highway Incident | Police, Ambulance | Multiple vehicles down on the highway. Reports of injured parties still in and around their vehicles. Scene is not yet secured — proceed with caution. |
| Mass food poisoning — public event | Police, Ambulance | Multiple casualties at a street fair — severe nausea and collapse after eating from shared vendors. EMS mass-casualty protocol; PD assist with interviews and perimeter. |
| Murder scene — Evidence Collection | Police | Homicide detectives request a second unit to walk the scene and document blood spatter patterns. Forensics is staging — perimeter is live. |
| Neighbourhood Shootout | Police, Ambulance | Multiple shots fired reports flooding in from this neighbourhood. Callers describe two groups exchanging fire in the street. Approach with extreme caution. |
| Offshore aircraft wreck — salvage & recovery | Police, Ambulance | Mayday trace ended over open water; sonar has a fuselage on the bottom. Marine unit requests law enforcement to secure the site and recover secured cargo drifting from the break-up. |
| Park fire | Ambulance, Fire | Fire reported in a park; vegetation and structures alight. Fire units and ambulance requested. |
| Radioactive Transport Incident | Police, Ambulance, Fire, Tow | Reports of an overturned military transport vehicle on the highway. Hazardous cargo has been spilled — radioactive material confirmed on scene. All units respond with extreme caution. |
| Radiologic leak — source investigation | Police, Fire | HazMat unit reports an uncontrolled radiologic leak at this location. Source unknown. All units to respond — evidence of origin must be documented before containment can begin. |
| Reports of rifle shots fired | Police | Multiple 911 calls reporting gunshots in the area; origin unknown. Units to respond and locate the source. |
| Residential burglary in progress | Police | Caller reports a break-in at a residence; several unknown persons seen leaving in a vehicle. Units to attend and secure the area. |
| Shipment container fire | Fire | Fire reported in a shipment container yard; containers alight. Fire response required. |
| Spreading fire in the neighbourhood | Ambulance, Fire | Fire spreading between properties in a residential area; multiple structures involved. All fire units respond. |
| Toxic Munitions Discovery | Police, Ambulance, Fire | Civilian reports discovering what appears to be old military munitions at this location. Preliminary assessment suggests chemical or toxic agents — all units respond with full protective protocols. |

The dispatch text shown is the first of each callout's descriptions. Every callout has several.

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

- [Emergency Response Simulator](/resources/ers/) (`night_ers`) and its dependencies, installed and properly configured. The resource's manifest declares `night_ers` as a dependency.

## Installation

1. Put the `night_ers_cp1` folder in your server's `resources` folder.
2. Make sure `night_ers` is installed and properly configured.
3. Add these lines to `server.cfg`:

```ini
ensure night_ers
ensure night_ers_cp1
```

4. Restart your server.

## Configuration

Each callout has its own file in `night_ers_cp1/config/callouts/`. The manifest leaves `config/*.lua` and `config/callouts/*.lua` outside the asset escrow, so you can edit them. The file `config/config.lua` only holds the config version and the event prefix, and needs no changes.

Every callout file has these settings:

| Setting | What it does |
|---|---|
| `Enabled` | Turns the callout on or off. All thirty are `true` |
| `CalloutName` | The name of the callout |
| `CalloutDescriptions` | The list of dispatch descriptions |
| `CalloutUnitsRequired` | The services the callout is for: `policeRequired`, `ambulanceRequired`, `fireRequired` and `towRequired` |
| `CalloutLocations` | The places where the callout can start, numbered from `[1]` |

The ped settings (`PedChanceToFleeFromPlayer`, `PedChanceToAttackPlayer`, `PedChanceToSurrender`, `PedChanceToObtainWeapons`, the two timeouts, `PedActionOnNoActionFound` and `PedWeaponData`) are the same ones explained on the [Callout Creator Pack](/resources/calloutCreatorPack/) page.

### Fire Positions

The nine fire callouts (festival pyrotechnics, fire in a difficult-to-reach location, fire caused by lightning, fireworks warehouse, forest fire, highrise fire, spreading neighbourhood fire, park fire and shipment container fire) place their fires with `FirePositionSets`. The comment in the file explains it:

```lua
-- Pre-set fire positions per location (index matches CalloutLocations). Each entry is a list of vector3
-- with correct ground Z—no random spread. Add more vector3s per set for multiple hotspots (pre-measured in-game).
--
-- Recommended ceiling: 15 spawns per scenario. Beyond that the client-side
-- particle FX rate-limit and seed-queue drain time (~300 ms/spawn) start to
-- bite and the HUD baseline inflates with pending spawns.
```

| Setting | What it does |
|---|---|
| `FirePositionSets` | One list of fire positions for each location, matched to `CalloutLocations` by number |

### Evidence

Thirteen callouts have evidence for the player to collect. They share these settings:

```lua
-- How many evidence positions are activated each run (capped to available positions).
EvidenceCountMin = 2,
EvidenceCountMax = 6,

-- Radius (metres) the player must be within to collect an item
CollectRadius = 1.5,
```

The values above are from the crime scene callout. Each callout has its own values.

| Setting | What it does |
|---|---|
| `EvidenceCountMin` and `EvidenceCountMax` | How many evidence positions are activated each run, capped to the positions available |
| `CollectRadius` | How close, in metres, the player must be to collect an item |

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
