---
title: "Installation · ERS v1"
description: "The pre-installation notes, system requirements and installation steps."
slug: resources/ers/installation
group: ers
lastUpdated: 2026-10-19
---

## Important Pre-Installation Notes

:::caution[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:

1. Set FTP Transfer Type to **Binary**
2. Download ZIP Package from CFX Portal
3. Unpack in a local folder
4. Set File Transfer Protocol (FTP) to **binary**
5. Drag files from local machine to server resources folder
6. Add to server.cfg (ensure script)
7. Boot up the server
:::

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## System Requirements & Compatibility

### fxServer (Artifacts) & Gamebuild version

- **✅ Recommended Gamebuild:** 3323, 3570, or 3889
- **✅ Minimum FXServer:** 35245 or newer
- **❌ Considered Not Compatible:** Other Gamebuilds than 3323, 3570, or 3889

:::danger[Important]
If you are using different Gamebuilds or Artifacts, trial and error this. Please inform us of (in)compatibility.
:::

### OneSync Requirements

- **✅ Required:** OneSync Legacy or Infinity
- **⚠️ Note:** Some hosting companies require setting `Enable Beyond` to 1 in dashboard

### Framework Compatibility

#### Standalone Mode

- Works without any framework
- Compatible with most known frameworks

#### ESX Integration

- **Permissions:** Configure job-based access in `night_ers/config/config.lua`
- **Weapons:** Configure in `night_ers/config/gear-config.lua`
- **Code:** Adjust item distribution in `night_ers/client/c_functions.lua`

#### QBCore Integration

- **Permissions:** Configure job-based or QB permissions in `night_ers/config/config.lua`
- **Weapons:** Configure in `night_ers/config/gear-config.lua`
- **Code:** Adjust item distribution in `night_ers/client/c_functions.lua`

### Known Incompatibilities

:::caution[Incompatible Resources]

- RemoveCops-AI
- Andrew's Advanced AI
- Realistic Euphoria Physics
- RedSaints Stretcher/Ambulance
- Improved-Seat-Shuffle-FiveM by Dalrae1
- `esx_policejob` — its object remover (`remove_prop`: “press [E] to delete the object”) treats nearby props as police-spawned objects and conflicts with ERS callout/object cleanup
- Clear world commands / Anti-cheat (resolve with your provider)
:::

## Installation Process

### Step 1: Download Required Resources

Download these packages from the [CFX Portal](https://portal.cfx.re/assets/granted-assets) in the exact order listed:

#### Core Resources (Required)

1. **SmartHoseLite** (Required)
  - Provided by [London Studios](https://londonstudios.net)
  - Enables water hose functionality for fire extinguishing
  - **Must start before `SmartFiresLite*`* — `SmartFiresLite` consumes `SmartHose` exports at runtime.
2. **SmartFiresLite** (Required)
  - Provided by [London Studios](https://londonstudios.net)
  - Enables fire spawning functionality
  - **Note:** Keep Lite named **`SmartFiresLite`**. If you use **full** Smart Fires instead, rename the folder to exactly **`SmartFires`** (case sensitive), per London Studios. This also goes for SmartFires v2: **`SmartFires`**.
3. **Emergency Response Simulator** (Required)
  - Main gamemode with 100+ callouts
  - Supports Police, Fire, Medic, and Tow services

#### Optional Resources

1. **Night Discord API** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Enables Discord role-based permissions
  - [View Features](https://store.nights-software.com/package/5035729)
  - [Installation Guide](/resources/discordAPI/)
2. **Night Subtitles** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Movie-style subtitle display; 2.0 adds five styles and a queue, and works with this version unchanged
  - [View Features](https://store.nights-software.com/package/6043540)
  - [Installation Guide](/resources/subtitles/)
  - Drag-and-drop installation
3. **Nearest Postal & Map** (Optional - Free)
  - Default postal codes with custom map
  - [CFX Forum Post](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458)
  - [Direct Download](https://github.com/DevBlocky/nearest-postal/archive/refs/heads/master.zip)
  - [Map Download](https://www.dropbox.com/s/lb22r7rb4gwh44o/Postal%20Code%20Map.zip?dl=0)
4. **Night Shifts MDT** (Optional - Included with ERS Plus and Ultimate)
  - Modern MDT for emergency services management
  - [View Features](https://store.nights-software.com/package/5667103)
  - [Installation Guide](/resources/nightShifts/)
5. **Theebu Flatbeds Lite** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Vehicle transport functionality
  - [Full Version](https://store.theebu.net/package/5033826) available

#### Add-on DLCs

1. **World Events Add-on** (Optional)
  - [View Features](https://store.nights-software.com/package/6437544)
2. **Dynamic Weighing Stations** (Optional)
  - [View Features](https://store.nights-software.com/package/6605986)
3. **K9 Dog Handler** (Optional)
  - [View Features](https://store.nights-software.com/package/6813075)

### Step 2: File Placement

:::danger[Critical]
Place all resources in your resources folder and **DO NOT RENAME** them. Use exact names as specified in this documentation.
:::

### Step 3: Server Configuration

Add to your `server.cfg` in **exact order**:

```ini
# Optional Resources
ensure night_discordapi
ensure night_subtitles
ensure nearest-postal
ensure map

# Required Resources
ensure SmartHoseLite   # or SmartHose if you have full version (must start before SmartFiresLite)
ensure SmartFiresLite  # or SmartFires if you have full version

# Core ERS
ensure night_shifts_mdt
ensure night_ers

# Optional Add-ons
ensure ebu_flatbeds_ers
ensure night_ers_worldevents
ensure night_ers_weighstation
ensure night_ers_k9

# Optional Callout Packs
ensure night_ers_cp1
```
