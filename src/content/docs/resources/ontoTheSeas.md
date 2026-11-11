---
title: Onto the seas!
description: A guide to install Onto the Seas! for FiveM
slug: resources/ontoTheSeas
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5117650
video: https://youtu.be/lrHI3AS8MYI
cover: ../../../assets/covers/ontoTheSeas.jpg
---

## Overview

Onto the Seas is a script providing your server with features for any skipper to dream of in GTA FiveM! It's sophisticated, realistic, tweakable and usable anywhere on the ocean. You can configure everything in this script to your liking.

### Key Features

- **Advanced Mooring System** - Multiple configurable mooring lines
- **Advanced Anchoring** - Realistic anchoring with optional sound effects
- **Advanced Depth Meter** - Configurable and changeable depth measurement
- **Ocean-Wide Compatibility** - Usable anywhere on the ocean
- **Language Support** - Multi-language configuration
- **Escrow Protection** - Secure resource protection
- **Lightweight & Steady** - Optimized performance
- **Standalone** - Works independently without framework dependencies

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

### Framework Compatibility

- **Standalone:** Works independently without any framework

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Dependencies

- **xSound** - Optional dependency for sound effects
- **Ace Permissions** - For admin controls
- **Discord Admin System** - Alternative permission system

:::note
Onto the Seas is designed to work with any FiveM server configuration and provides sophisticated maritime features.
:::

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_onto_the_sea` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_onto_the_sea
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** all settings to your liking
3. **Test** the resource functionality

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_onto_the_sea/config/config.lua` | Main configuration settings |
| `night_onto_the_sea/client/c_functions.lua` | Client-side functions |
| `night_onto_the_sea/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize mooring, anchoring, and depth meter
4. **Test frequently** - use F8 console for error checking

:::tip[Maritime Settings]
Configure mooring lines, anchoring behavior, and depth meter display options.
:::

## How It Works

### Advanced Mooring System

- **Multiple Lines** - Configure multiple mooring lines for realistic boat docking
- **Configurable Settings** - Adjust mooring behavior and line properties
- **Realistic Physics** - Sophisticated mooring mechanics

### Advanced Anchoring

- **Realistic Anchoring** - Proper anchor deployment and retrieval
- **Sound Effects** - Optional audio feedback for anchoring actions
- **Ocean-Wide** - Works anywhere on the ocean

### Advanced Depth Meter

- **Configurable Display** - Customize depth meter appearance and behavior
- **Changeable Settings** - Adjust measurement units and display options
- **Real-Time Data** - Accurate depth readings

### Maritime Features

- **Skipper Tools** - Professional-grade maritime equipment
- **Ocean Navigation** - Enhanced ocean-based gameplay
- **Realistic Behavior** - Authentic maritime mechanics

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies

### Permission Systems

- **Ace Permissions** - Configure in `natural_disasters/config/config.lua` and `natural_disasters/server/s_functions.lua`
- **Discord Admin System** - Alternative integration available at [Discord Admin System](https://store.nights-software.com/package/5054917)

### Sound Integration

- **xSound Support** - Optional dependency for enhanced sound effects
- **Download xSound** - Available at [xSound GitHub](https://github.com/Xogy/xsound)

:::tip[xSound Configuration]
If using xSound, ensure `dependency 'xsound'` is in fxmanifest.lua. If not using xSound, comment it out with `-- dependency 'xsound'`
:::

## Troubleshooting

### Common Issues

:::caution[Resource Not Starting]
- Ensure the resource is properly added to server.cfg
- Check that the resource name is `night_onto_the_sea`
- Verify the resource started without errors in console
:::

:::caution[Mooring/Anchoring Issues]
- Check F8 console for any error messages
- Verify configuration settings in config.lua
- Test with default settings first
:::

:::caution[Sound Effects Not Working]
- Ensure xSound is properly installed if using sound effects
- Check xSound dependency in fxmanifest.lua
- Verify sound files are in the correct location
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Ocean Areas** - Ensure you're testing in ocean locations
- **Verify Configuration** - Check all config settings are correct
- **Check Dependencies** - Ensure xSound is properly configured if used

## Best Practices

### Maritime Configuration

- **Mooring Lines** - Configure appropriate number of lines for your server
- **Anchoring Behavior** - Set realistic anchoring mechanics
- **Depth Meter** - Configure display options for your community
- **Sound Effects** - Enable/disable based on server preferences

### Performance Optimization

- **Lightweight Design** - Resource is optimized for performance
- **Ocean Areas** - Test in appropriate maritime locations
- **Configuration Testing** - Test settings before going live
- **Dependency Management** - Only enable xSound if needed

### User Experience

- **Clear Instructions** - Provide users with maritime operation guidelines
- **Realistic Behavior** - Configure for authentic maritime experience
- **Accessibility** - Ensure features are easy to use
- **Documentation** - Create server-specific maritime guides

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
