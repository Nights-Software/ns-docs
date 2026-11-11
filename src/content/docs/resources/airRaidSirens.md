---
title: Air Raid Sirens
description: The air raid sirens provides you the ability to alert the nation with the press of a button. Configure multiple siren(s) (areas) and browse through the list before powering the sirens.
slug: resources/airRaidSirens
lastUpdated: 2026-11-11
group: scripts
store: https://store.nights-software.com/package/5030134
video: https://youtu.be/ZxI8tCJNZag
cover: ../../../assets/covers/airRaidSirens.jpg
---

## Overview

Air Raid Sirens is an emergency alert system that allows server administrators to trigger air raid sirens across specific areas or the entire map. Perfect for emergency situations, roleplay scenarios, or creating atmospheric events on your FiveM server.

### Key Features

- ✅ **Multi-source 3D spatial audio system** - Realistic directional sound
- ✅ **Modern keybinding system** - Customizable controls
- ✅ **Smooth fade-in/fade-out transitions** - Professional audio experience
- ✅ **Real-time 3D audio with head-tracking** - Immersive sound positioning
- ✅ **Per-area sound configuration** - Individual area audio settings
- ✅ **Area-Based Control** - Target specific areas or zones with additive activation
- ✅ **In-Game Siren Editor** - Place, move, rename and delete sirens and areas from the control panel
- ✅ **Sirens Stored in `sirens.json`** - The server reads and writes the file itself
- ✅ **Volume & Sound Configuration** - Customize audio settings
- ✅ **Range Settings** - Configure siren coverage area
- ✅ **Multiple Siren Sounds** - Support for various siren sound files
- ✅ **Custom UI** - User-friendly interface design
- ✅ **OneSync Compatible** - Works with Legacy and Infinity
- ✅ **3D Siren Objects** - Custom air raid siren 3D models
- ✅ **Editable CSS** - Customize the visual appearance
- ✅ **Multi-Framework Support** - ESX/QBCore/Discord API permissions
- ✅ **Multi-Language Support** - International server support
- ✅ **Advanced Export System** - Comprehensive API for other resources
- ✅ **Escrow Protection** - Secure resource protection
- 📊 **Performance: 0.00-0.02ms** - Optimized for minimal impact

## Installation Tutorial

**Follow our step-by-step installation guide:**

<a class="kit-btn" href="https://youtu.be/DBj3zOOxIIk?si=mMn9vKGDas945JNM">Installation Tutorial</a>

## Important Pre-Installation Notes

:::caution[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:
1. Download ZIP Package from CFX Portal
2. Unpack in a folder on your local machine
3. Set File Transfer Protocol (FTP) type to **binary**
4. Drag files from local machine to server resources folder
5. Add to server.cfg (ensure script)
6. Boot up the server
:::

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## System Requirements & Compatibility

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Framework Compatibility

- **ESX:** Full compatibility with ESX framework
- **QBCore:** Full compatibility with QBCore framework
- **Discord API:** Compatible with Discord API integration
- **Standalone:** Works without any framework

:::note
Air Raid Sirens works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Air Raid Sirens" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_air_raid_sirens` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_air_raid_sirens
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_air_raid_sirens/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up volume and sound settings
   - Configure range and coverage areas
   - Adjust permissions and access controls

## How It Works

### Siren System

- **Area-Based Control:** Target specific areas or zones for siren activation
- **Multiple Sirens:** Configure various siren sound files
- **Range Control:** Set coverage area for siren alerts
- **Volume Management:** Adjust audio levels for different situations
- **3D Objects:** Custom air raid siren models in the world
- **Selective Activation:** Choose which areas to activate or deactivate

### User Interface

- **Area Selection:** Choose specific areas to activate sirens
- **Siren Selection:** Browse through available siren sounds
- **Easy Activation:** Simple button press to trigger sirens
- **Status Display:** Visual indicators for active sirens and areas
- **Custom Styling:** Editable CSS for UI customization

### Emergency Alerts

- **Instant Activation:** Trigger sirens immediately when needed
- **Targeted Coverage:** Alert specific areas or entire server population
- **Roleplay Integration:** Perfect for emergency scenarios
- **Atmospheric Events:** Create immersive server experiences
- **Selective Control:** Activate or deactivate specific areas as needed

## Commands

| Command | What it does | Who can use it |
|---------|--------------|----------------|
| `/arsmenu` | Opens the control panel | Players with permission |
| `/togglears` | Mutes or unmutes the sirens for yourself, without affecting others | Everyone |
| `/drawcoverage` | Draws the sound reach of every placed siren, to test your coverage | Players with permission |
| `/arsreload` | Reads `sirens.json` again after you edited it by hand | Players with editor permission |

The command names are set under `Controls` in `config/config.lua`. No key is bound by default. Players bind their own keys in game under **Settings → Key Bindings → FiveM**, or you set a default with `keyMapping`:

```lua
Controls = {
    ToggleSirens = {
        command = "togglears",
        keyMapping = '', -- Empty = no default key
        input = 'keyboard'
    },
    OpenARSMenu = {
        command = "arsmenu",
        keyMapping = '',
        input = 'keyboard'
    },
},
```

## Permissions

These settings decide who may open the control panel and trigger sirens:

```lua
EveryoneHasPermission = true,

Enable_Night_DiscordApi_Permissions = false,
Enable_Ace_Permissions = false,
Enable_ESX_Permissions = false,
Enable_QBCore_Permissions = {
    Check_By_Job = false,
    Check_By_Permissions = false,
},

PermissionRoles = {
    "Admin",
    "police",
    "Administrator",
},
```

Set `EveryoneHasPermission` to `false`, turn on the systems you use, and write your Discord role names, ESX jobs, ACE names or QBCore jobs and groups in `PermissionRoles`. A player needs one of them.

See [ACE Permissions](/resources/acePerms/) and [Discord API](/resources/discordAPI/) for the setup of those two systems.

## Siren Editor

Players with editor permission see two tabs in the control panel: **Control** and **Editor**. In the Editor you manage areas and sirens in game. Every change is saved to `sirens.json` and reaches all players at once.

### Areas

- Create an area by typing its name, and delete an area.
- Set an area's name, sound, range, volume and whether it is enabled, then press **Save area**.

### Sirens

- **Place siren** adds a siren where you aim. **At my position** adds one where you stand.
- Per siren you can set a name and a sound of its own, move it to another area, move it to a new spot, teleport to it or delete it. The name is used for the siren's map blip. A siren without a sound of its own plays the area's sound.
- A siren's sound is saved when you pick it, and its name when you press Enter or leave the field.
- Deleting asks for a second click.

### Placing a Siren

Placing closes the panel and shows a see-through siren where you aim, up to 75 metres away. A small window shows the controls, the area and the heading. The panel opens again afterwards.

| Control | Action |
|---------|--------|
| Left mouse button | Place |
| Mouse wheel | Rotate |
| Shift + mouse wheel | Rotate in steps of 1 degree |
| Right mouse button or Esc | Cancel |

Aim at the ground to place. Weapons and the pause menu are blocked while you place.

### Who May Edit

The editor has its own roles, so not everyone who may trigger sirens can change them. It uses the permission systems you turned on under [Permissions](#permissions).

```lua
Editor = {
    EveryoneHasPermission = false,
    PermissionRoles = {
        "Manager",
        "Admin",
        "Administrator",
    },
    MaxNameLength = 50,         -- Max characters for area and siren names
    MaxSoundReach = 5000.0,     -- Max sound reach (meters) that can be set in-game
    MaxSoundVolume = 0.5,       -- Max volume that can be set in-game
},
```

## Siren Storage

Areas and sirens are stored in `sirens.json` in the resource folder. The server reads and writes this file itself, so the resource folder must be writable by the server.

- **First start:** when `sirens.json` does not exist, it is created from `SirenObjectLocations` in `config/config.lua`.
- **After that:** `sirens.json` is the only source. Changes to `SirenObjectLocations` have no effect.
- **Start over:** delete `sirens.json` to create it from `SirenObjectLocations` again. This discards the changes made in game.

```json
{
  "version": 1,
  "areas": {
    "Area Name": {
      "soundFile": "air-raid-siren",
      "soundReach": 1250.0,
      "soundVolume": 0.1,
      "enabled": true,
      "poles": [
        { "name": "Town Hall", "soundFile": "luchtsirene", "x": 100.0, "y": 200.0, "z": 30.0, "heading": 0.0 },
        { "x": 150.0, "y": 250.0, "z": 30.0, "heading": 90.0 }
      ]
    }
  }
}
```

`name` and `soundFile` on a siren are optional.

:::danger[Editing the file by hand]
Changes made in game overwrite the file, so edit it while the resource is stopped. `/arsreload` reads a hand-edited file again without a restart of the resource.
:::

## Sounds

### Your Own Siren Sound

1. Put your `.ogg` file in `NUI/sounds/`.
2. Add it to `SirenSoundFileList` in `config/config.lua`:

```lua
SirenSoundFileList = {
    [1] = {SoundFile = "air-raid-siren", DisplayName = "Default Air Raid Sirens"},
    [2] = {SoundFile = "luchtsirene", DisplayName = "Dutch Air Raid Sirens"},
    [3] = {SoundFile = "your-sound", DisplayName = "Your Custom Siren"},
},
```

`SoundFile` is the file name without `.ogg`.

### Sound Settings

| Setting | What it does |
|---------|--------------|
| `SirenSoundVolume` | The siren volume, `0.10` by default. Above `0.5` is not recommended |
| `AudioListener.Orientation` | `"camera"`: left and right follow where you look. `"character"`: they follow where your character faces |
| `AudioListener.Position` | `"character"`: distance is measured from your character. `"camera"`: from the camera |
| `OutOfRangeInterval` | How often, in seconds, the script checks whether you are in range of a siren |

## Export Functions

### Legacy Exports (Backward Compatibility)

These exports maintain compatibility with older scripts and documentation:

#### Toggle Sirens (Legacy)

```lua
-- Toggle sirens automatically (on when off, off when on)
exports['night_air_raid_sirens']:TriggerAirRaidSirens(soundFile, targetAreas, targetSirens)

-- Example usage
exports['night_air_raid_sirens']:TriggerAirRaidSirens("air-raid-siren")
```

#### Force Siren State (Legacy)

```lua
-- Force sirens on or off
exports['night_air_raid_sirens']:ToggleAirRaidSirens(soundFile, onOrOff, targetAreas, targetSirens)

-- Example usage
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", true)   -- Turn on
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", false)  -- Turn off
```

### New Exports (Recommended)

Modern area-based control with better functionality:

#### Activate Areas

```lua
-- Activate specific areas (additive - adds to existing active areas)
-- soundFile: a sound file name, or nil to let every area play its own sound
-- areaNames: the area names as they are in sirens.json
exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport(soundFile, areaNames)

-- Example usage
exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport("air-raid-siren", {"Fort Zancudo", "Grapeseed"})
```

#### Deactivate Areas

```lua
-- Deactivate specific areas (subtractive - removes only specified areas)
exports['night_air_raid_sirens']:DeactivateAirRaidSirensByAreaExport(areaNames)

-- Example usage
exports['night_air_raid_sirens']:DeactivateAirRaidSirensByAreaExport({"Fort Zancudo"})
```

#### Deactivate All Sirens

```lua
-- Turn off all sirens completely
exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()

-- Example usage
exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()
```

### Utility Exports (Read-only Information)

#### Get Available Areas

```lua
-- Returns array of all configured areas with their settings
local areas = exports['night_air_raid_sirens']:GetAvailableAreas()

-- Returns: table with {name, poleCount, soundFile, soundReach, soundVolume, enabled}
```

#### Get Sirens in Area

```lua
-- Returns configuration data for a specific area
local areaData = exports['night_air_raid_sirens']:GetSirensInArea(areaName)

-- Example usage
local areaData = exports['night_air_raid_sirens']:GetSirensInArea("Fort Zancudo")

-- Returns: table with {soundFile, soundReach, soundVolume, enabled, poleCount, poles}
```

#### Get Zone For Coords

Resolves which siren zone(s) cover a given world position. Designed for lightweight server-side polling from external resources, such as triggering zone-specific sirens based on a tornado or disaster location.

```lua
-- Returns the closest zone and all zones whose coverage radius includes the given position
local closestZone, zonesInRange, closestDistance = exports['night_air_raid_sirens']:GetZoneForCoords(x, y, z, maxDistance)

-- Parameters:
--   x, y, z      (number) : world position to test
--   maxDistance  (number) : optional cap on detection radius (defaults to each area's soundReach)

-- Returns:
--   closestZone     (string) : area name with the nearest pole, regardless of distance
--   zonesInRange    (table)  : all area names where the position falls within coverage radius
--   closestDistance (number) : distance in metres to the nearest pole
```

**Basic example — activate sirens for the zone a tornado is in:**

```lua
-- Server-side, called from your storm/tornado resource
local tornadoCoords = GetTornadoPosition() -- your own function

local closestZone, zonesInRange = exports['night_air_raid_sirens']:GetZoneForCoords(
    tornadoCoords.x, tornadoCoords.y, tornadoCoords.z
)

if #zonesInRange > 0 then
    exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport("air-raid-siren", zonesInRange)
else
    exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()
end
```

**Polling example — update sirens as a tornado moves:**

```lua
-- Server-side polling loop (run inside a Citizen.CreateThread)
Citizen.CreateThread(function()
    while tornadoActive do
        Citizen.Wait(5000) -- poll every 5 seconds

        local coords = GetTornadoCurrentCoords()
        local _, zonesInRange = exports['night_air_raid_sirens']:GetZoneForCoords(
            coords.x, coords.y, coords.z
        )

        if zonesInRange and #zonesInRange > 0 then
            exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport("air-raid-siren", zonesInRange)
        else
            exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()
        end
    end
end)
```

:::tip[Integration tip]
`GetZoneForCoords` is a read-only utility export — it has no side effects and no permission checks. Pair it with `TriggerAirRaidSirensByAreaExport` and `DeactivateAirRaidSirensByAreaExport` to build fully dynamic, zone-aware siren automation.
:::

### Sound File Examples

Default sound file names you can use:
- `"air-raid-siren"`
- `"luchtsirene"`

### Area Name Examples

Default area names you can use:
- `"Fort Zancudo"`
- `"Grapeseed"`
- `"Sandy Shores"`
- `"Paleto Bay"`

:::tip[Recommendation]
Use the NEW EXPORTS for better control and area management. Legacy exports are maintained for backward compatibility only.
:::

:::tip[Custom Sounds]
You can add your own sound files to the resource and reference them by filename.
:::

:::note[UI Updates]
All exports automatically update the UI for all connected players!
:::

## Customization

### CSS Editing

The Air Raid Sirens includes limited editable CSS files allowing you to:
- **Customize UI appearance** to match your server theme
- **Modify colors and styling** for better visual integration

### 3D Object Customization

- **Custom siren models** for visual representation
- **Placement options** for strategic siren locations

## Integration & Compatibility

### Framework Integration

- **ESX Integration:** Compatible with ESX job systems and permissions
- **QBCore Integration:** Compatible with QBCore permissions and groups
- **Discord API:** Integrate with Discord role-based permissions
- **Standalone Operation:** Works without any framework

### Emergency Systems Examples

- **Police Integration:** Perfect for law enforcement scenarios
- **Emergency Services:** Ideal for medical and fire department roleplay
- **Military Operations:** Great for military and defense scenarios
- **Civil Defense:** Excellent for disaster and emergency situations

## Troubleshooting

### Common Issues

#### Sirens Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify configuration file is properly formatted
- Confirm permissions are set correctly
:::

#### Audio Issues

:::tip[Audio troubleshooting]
1. Check volume settings in config
2. Verify sound files are present in the resource
3. Test with different sound file names
4. Check client audio settings
:::

#### Permission Issues

:::note[Permission troubleshooting]
1. Verify player has correct permissions
2. Check framework integration settings
3. Test with admin permissions first
4. Review Discord API configuration
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Sound file not found" | Verify sound file exists in resource |
| "Permission denied" | Check configuration permissions |
| "Export failed" | Verify export function syntax |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and adjust based on server needs
- **Test different sound files** to find the best fit
- **Set appropriate permissions** to prevent abuse
- **Configure range settings** adjust to your desires

### Emergency Planning

- **Establish protocols** for when to use sirens
- **Train staff** on proper siren activation
- **Coordinate with other emergency systems**
- **Test sirens regularly** to ensure functionality

### Roleplay Integration

- **Create emergency scenarios** that utilize sirens
- **Integrate with police and emergency services**
- **Use for atmospheric events** and server announcements
- **Coordinate with other roleplay systems**

## Support

### Getting Help

If you're having trouble with Air Raid Sirens:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Verify your configuration** matches the examples
4. **Join our Discord** for community support

### Community Support

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
