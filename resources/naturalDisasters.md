---
layout: default
title: "Natural Disasters"
nav_order: 6
has_children: false
has_toc: true
last_modified_date: "2025-01-22"
---

<img class="cover-img" src="/assets/img/night_natural_disasters.png" alt="Natural Disasters Resource" draggable="false">

# Natural Disasters
{: .no_toc }

A comprehensive natural disaster system for FiveM servers featuring dynamic weather, blackouts, and multiple disaster types.
{: .fs-5 .fw-300 }

Just released: DLC 5!
{: .label .label-purple }

---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Overview

Natural Disasters is a comprehensive weather and disaster system that brings dynamic environmental challenges to your FiveM server. The system includes multiple disaster types, weather synchronization, blackout mechanics, and seamless integration with popular sound systems.

### Key Features

- **Multiple Disaster Types**: Tornadoes, earthquakes, tsunamis, and more
- **Dynamic Weather System**: Built-in weather and time management
- **Blackout Mechanics**: Realistic power outages during disasters
- **Sound Integration**: Support for xSound and PlayCustomSounds
- **Framework Compatibility**: Works with ESX, QBCore, and standalone setups
- **OneSync Compatible**: Legacy and Infinity support
- **DLC Expansion**: 5 additional content packs available

## Purchase Information

### Base Resource
- **Store Link**: [Natural Disasters Base](https://store.nights-software.com/package/5131340)

### DLC Packs
- **DLC 1**: [Natural Disasters DLC 1](https://store.nights-software.com/package/5154004)
- **DLC 2**: [Natural Disasters DLC 2](https://store.nights-software.com/package/5183358)
- **DLC 3**: [Natural Disasters DLC 3](https://store.nights-software.com/package/5314042)
- **DLC 4**: [Natural Disasters DLC 4](https://store.nights-software.com/package/5673677)
- **DLC 5**: [Natural Disasters DLC 5](https://store.nights-software.com/package/5968995)

### Requirements
- Base resource required for DLC 1
- DLC 1 required for DLC 2
- DLC 2 required for DLC 3
- DLC 3 required for DLC 4
- DLC 4 required for DLC 5

### Installation Notice
*Got all of the Natural Disasters? Install just DLC5, this contains all code required. The latest resource is the one you install! The pack includes Air Raid Sirens which you can separately install.*

## Installation

### Prerequisites

#### Sound System Setup (Optional)
If you are using the built-in sound system, skip this step and proceed to resource installation.

1. **Download Sound Resources**:
   - [xSound](https://github.com/Xogy/xsound) - Download fresh from GitHub
   - [PlayCustomSounds](https://github.com/LondonStudios/PlayCustomSounds) - Download fresh from GitHub

2. **Install Sound Resources**:
   - Drag "PlayCustomSounds" and/or "xsound" into your `/resources/` folder
   - If using Air Raid Sirens integration, you'll need both resources

3. **Configure Server.cfg**:
   ```lua
   ensure xsound
   ```
   - xSound must be placed high in server.cfg
   - Download fresh from GitHub for best compatibility

4. **Add Sound Files**:
   - Copy `.ogg` sound files from the `SoundFiles` folder (in your purchased resource)
   - Add them to your chosen sound resource
   - For xSound: Update `c_functions.lua` with your desired sound URL

5. **Configure Dependencies**:
   - If using xSound: Add `dependency 'xsound'` to fxmanifest.lua
   - If not using xSound: Comment out or remove the dependency line
   - Example: `-- dependency 'xsound'`

### Resource Installation

#### Step 1: Download
Download the resource from [CFX Portal](https://portal.cfx.re/assets/granted-assets).

#### Step 2: File Transfer
**Important**: Follow this exact order to avoid parsing errors:
1. Unpack ZIP package in a local folder
2. Set FTP transfer type to **binary**
3. Drag files from local machine to server resources folder
4. Add to server.cfg
5. Boot server

#### Step 3: Install Resource
1. Drag the resource into your resources folder
   - **Note**: If installing DLC, replace the base resource completely
2. Configure `natural_disasters/config/config.lua` for customization
3. Add to server.cfg:
   ```lua
   ensure night_natural_disasters
   ```

## Configuration

### Permissions
Choose from multiple permission systems:

1. **Discord API**: [Discord API Documentation](https://store.nights-software.com/package/5035729)
2. **Ace Permissions**: [Ace Permissions Documentation](https://docs.nights-software.com/resources/acePerms/)
3. **Framework Groups**: Configure QBCore or ESX group names
4. **Everyone**: Default setting (no restrictions)

### Weather Compatibility

#### Using Built-in Weather System
- Remove/disable other weather/time systems on your server
- Built-in system handles all weather and time management

#### Using External Weather Systems
- Disable built-in weather in config.lua
- Use compatible weather scripts:
  - qb-weathersync
  - cd_easytime
  - vSyncR

**Free Weather Script Edits**: Available in our Discord [#free-files](https://discord.com/channels/989438923925229598/989479452209733662) channel (requires @Customer role)

### Sound File Management

#### Adding Disaster Sound Files
1. Navigate to `NUI/sounds/` folder
2. Add your `.ogg` sound file
3. Configure filename (without .ogg extension) in `config/config.lua`

#### Adding Air Raid Siren Sound Files
1. Navigate to `night_air_raid_sirens/NUI/sounds/` folder
2. Add your sound file
3. Configure in main config: `SoundFileNameForAirRaidSirens = "yourfilename"`

## Exports

### Server-side Exports
```lua
-- Disaster Management
exports.night_natural_disasters:SpawnDisaster(id)
exports.night_natural_disasters:StopDisaster(id)

-- Weather & Time Control
exports.night_natural_disasters:NextWeatherStage()
exports.night_natural_disasters:SetWeather(weatherType)
exports.night_natural_disasters:SetTime(hour, minute)

-- System Toggles
exports.night_natural_disasters:ToggleBlackout()
exports.night_natural_disasters:ToggleFreezeTime()
exports.night_natural_disasters:ToggleDynamicWeather()

-- Status Checks
exports.night_natural_disasters:GetCurrentWeather() -- returns "EXTRASUNNY" for example (string)
exports.night_natural_disasters:GetIsBlackoutActive() -- returns true or false (boolean)
exports.night_natural_disasters:GetIsTimeFrozen() -- returns true or false (boolean)
exports.night_natural_disasters:GetIsWeatherDynamic() -- returns true or false (boolean)

-- External Sound Integration
exports[Config.Integrations.CustomSoundResource]:StartExternalSound(coords, disasterID, soundFileName, soundFileVolume)
```

### Client-side Exports
```lua
-- Synchronization Control
exports.night_natural_disasters:PauseSynchronization(boolean) -- Used by housing system scripts for weather & disaster proof interiors.
```

## Troubleshooting

### Common Issues

1. **Parsing Errors in F8 Console**
   - Ensure you follow the exact file transfer order
   - Use binary FTP transfer mode
   - Don't rename the script

2. **Weather Flickering**
   - Disable conflicting weather systems
   - Use our free weather script edits from Discord
   - Ensure proper weather compatibility

3. **Sound Issues**
   - Verify sound files are in correct format (.ogg)
   - Check file paths in configuration
   - Ensure sound resource is properly installed

4. **Permission Problems**
   - Verify Discord API setup
   - Check Ace permissions configuration
   - Confirm framework group names

### Best Practices

1. **Installation Order**
   - Always install the latest DLC version
   - Remove older versions completely
   - Install Air Raid Sirens separately if needed

2. **Configuration**
   - Read through config.lua thoroughly
   - Test settings on a development server first
   - Backup configurations before major changes

3. **Performance**
   - Monitor server performance during disasters
   - Adjust disaster frequency as needed
   - Use appropriate sound file sizes

## Related Resources

### Recommended Additions
- [Air Raid Sirens](https://store.nights-software.com/package/5030134) - Enhanced disaster atmosphere
- [Discord API](https://store.nights-software.com/package/5035729) - Role-based permissions
- [Ace Permissions](https://docs.nights-software.com/resources/acePerms/) - Advanced permission system

### Installation Order
1. **DLC 5** (contains all previous content) - [Purchase](https://store.nights-software.com/package/5968995)
2. **Air Raid Sirens** (optional integration) - [Purchase](https://store.nights-software.com/package/5030134)

## Support

### Documentation
- Review this guide thoroughly before seeking support
- Check configuration settings carefully
- Verify all prerequisites are met

### Community Support
Join our Discord community for assistance:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}

### Technical Support
- Create a ticket in our Discord support system
- Provide detailed error messages and configuration
- Include server logs when possible
