---
title: Props & Speedzones (Traffic Management)
description: A guide to install Props & Speed Zones for FiveM
slug: resources/propsAndSpeedzones
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5087747
video: https://youtu.be/NNuPJTPLv-s
cover: ../../../assets/covers/propsAndSpeedzones.jpg
---

## Overview

Place down props (like cones / barriers) with a user-friendly interface and use a menu to set up or remove speed zones, placed by players on the server. This has been tested and proven working on OneSync & OneSync Legacy.

### Key Features

- **Configurable Props** - Configure props you wish to be place-able
- **User-Friendly Interface** - Easy-to-use menu system for prop placement
- **Speed Zone Management** - Set up or remove speed zones with easy menu
- **Animated Prop Placing** - Smooth prop placement animations
- **Road Node Control** - Enable/disable road nodes with Road Node tool
- **Synchronized Props** - Place up to about ~70 synchronized props
- **Customizable Speed Zones** - Define speeds and sizes to your liking
- **Export Functions** - Client and server-side export integration
- **Framework Compatibility** - Works with Standalone, ESX, and QBCore
- **OneSync Compatible** - Tested on OneSync & OneSync Legacy
- **Escrow Protection** - Secure resource protection

## Video Showcase

:::caution[Custom Props Note]
Custom props from the video showcase are not included! They are obtainable at Cell 1 Modding: [https://discord.gg/XSrqSTtF5M](https://discord.gg/XSrqSTtF5M)
:::

## Important Pre-Installation Notes

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

:::tip[Custom Props]
Custom props used in the video showcase are available at Cell 1 Modding: [https://discord.gg/XSrqSTtF5M](https://discord.gg/XSrqSTtF5M)
:::

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework
- **ESX:** Compatible with ESX framework
- **QBCore:** Compatible with QBCore framework

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

:::note
Props & Speed Zones has been tested and proven working on both OneSync & OneSync Legacy.
:::

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** to your server's resources folder
3. **Ensure the folder** is named `night_prop_system` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_prop_system
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
| `night_prop_system/config/config.lua` | Main configuration settings |
| `night_prop_system/client/c_functions.lua` | Client-side functions |
| `night_prop_system/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize props, commands, hotkeys, and menu styles
4. **Test frequently** - use F8 console for error checking

:::tip[Configuration Options]
Configure props, commands, hotkeys, buttons, blips, messages, menu style, and button text.
:::

## How It Works

### Prop Placement System

- **Configurable Props** - Choose which props can be placed
- **Animated Placement** - Smooth prop placement animations
- **Synchronized Props** - Up to 70 synchronized props across the server
- **User-Friendly Interface** - Easy menu system for prop management

### Speed Zone Management

- **Easy Menu System** - Simple interface for speed zone setup
- **Customizable Zones** - Define speeds and sizes to your liking
- **Player Placement** - Players can place speed zones on the server
- **Zone Removal** - Easy removal of placed speed zones

### Road Node Control

- **Road Node Tool** - Enable/disable road nodes with dedicated tool
- **Intersection Control** - Works for intersections and dividing roads
- **Limited Road Nodes** - Designed for specific road node types
- **Traffic Management** - Control traffic flow in specific areas

### Configuration Options

- **Commands & Hotkeys** - Configure custom commands and key bindings
- **Menu Styling** - Customize menu appearance and button text
- **Blips & Messages** - Configure visual indicators and notifications
- **Export Integration** - Client and server-side export functions

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework integration
- **QBCore** - Compatible with QBCore framework integration

### OneSync Integration

- **OneSync Legacy** - Fully tested and compatible
- **OneSync Infinity** - Fully tested and compatible
- **Synchronized Props** - Proper synchronization across all players

### Server Integration

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient prop and zone management
- **Easy Integration** - Simple setup and configuration

:::tip[Synchronization]
Props and speed zones are properly synchronized across all players on the server.
:::

## Export Functions

### Client-Side Exports

```lua
-- Toggle prop placement tool
exports['night_prop_system']:TogglePlaceObjectsTool()

-- Toggle speed zone tool
exports['night_prop_system']:ToggleSpeedzoneTool()

-- Toggle road node tool
exports['night_prop_system']:ToggleRoadNodeTool()
```

:::tip[Export Usage]
Use these export functions to open menus from other scripts, like boot scripts or custom integrations.
:::

## Troubleshooting

### Common Issues

:::caution[Road Nodes Not Always Effective]
- Not all road nodes in GTA V can be used to divert traffic. Usually intersections, or a specific combination of closed road nodes & placed objects does the trick. This is trial and error.
:::

:::caution[Resource Not Starting]
- Ensure the resource is properly added to server.cfg
- Check that the resource name is `night_prop_system`
- Verify the resource started without errors in console
:::

:::caution[Props Not Placing]
- Check F8 console for any error messages
- Verify configuration settings in config.lua
- Test with default settings first
:::

:::caution[Speed Zones Not Working]
- Ensure speed zone configuration is correct
- Check for any zone-related errors in console
- Verify menu access permissions
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Export Functions** - Verify exports are working correctly
- **Verify Configuration** - Check all config settings are correct
- **Test OneSync** - Ensure OneSync is properly configured

## Best Practices

### Prop Configuration

- **Prop Selection** - Choose appropriate props for your server theme
- **Placement Limits** - Configure reasonable prop placement limits
- **Synchronization** - Ensure props are properly synchronized
- **Performance** - Monitor prop count for server performance

### Speed Zone Management

- **Zone Sizing** - Set appropriate speed zone sizes
- **Speed Limits** - Configure realistic speed limits for zones
- **Zone Placement** - Place zones in logical locations
- **Zone Cleanup** - Regularly remove unused speed zones

### User Experience

- **Clear Instructions** - Provide users with prop and zone placement guidelines
- **Menu Accessibility** - Ensure menus are easy to navigate
- **Visual Feedback** - Make prop and zone status clearly visible
- **Help Documentation** - Create server-specific usage guides

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
