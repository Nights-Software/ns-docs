---
title: Vehicle Lift
description: A guide to install Vehicle Lift! for FiveM
slug: resources/vehicleLift
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5071628
cover: ../../../assets/covers/vehicleLift.jpg
---

## Overview

Configure and utilize vehicle lifts at your desired locations! This resource allows you to add unlimited vehicle lifts to your server with full customization options for a professional mechanic experience.

### Key Features

- **Unlimited Lifts** - Add vehicle lifts to any desired location
- **Easy Configuration** - Simple coordinate setup in config.lua
- **Customizable Controls** - Configure hotkeys, notifications, and commands
- **Interactive Mechanics** - Drive up, perform lift command, elevate/lower vehicles
- **Developer Friendly** - Create custom scripts for vehicle mechanic systems
- **Standalone** - Works independently without framework dependencies
- **Performance Optimized** - Efficient lift management and operation

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_vehicle_lift` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_vehicle_lift
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** lift locations and settings
3. **Test** the resource functionality

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

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework
- **Any FiveM Server:** Universal compatibility

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

:::note
Vehicle Lift is designed as a standalone resource that works with any FiveM server configuration.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_vehicle_lift/config/config.lua` | Main configuration and lift locations |
| `night_vehicle_lift/client/c_functions.lua` | Client-side functions |
| `night_vehicle_lift/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure lift locations** - add coordinates for your desired lift locations
4. **Test frequently** - use F8 console for error checking

:::tip[Lift Configuration]
Add unlimited vehicle lifts by configuring coordinates in the config.lua file.
:::

## How It Works

### Lift Operation

- **Drive Up** - Position your vehicle on the lift
- **Perform Command** - Use the configured lift command
- **Elevate/Lower** - Control the lift movement to raise or lower your vehicle
- **Mechanic Work** - Perform vehicle maintenance while elevated

### Configuration Options

- **Lift Locations** - Add unlimited lifts at any coordinates
- **Hotkey Configuration** - Customize control keys for lift operation
- **Notification Settings** - Configure user feedback and messages
- **Command Customization** - Set custom commands for lift control
- **Visual Settings** - Customize lift appearance and behavior

### Developer Features

- **Script Integration** - Create custom mechanic system scripts
- **API Access** - Developer-friendly functions for custom implementations
- **Event System** - Hook into lift events for custom functionality
- **Modular Design** - Easy to extend and customize

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **Universal Integration** - Compatible with any FiveM server setup

### Script Integration

- **Custom Mechanic Scripts** - Perfect for building mechanic systems
- **Vehicle Management** - Integrate with vehicle repair and maintenance systems
- **Business Integration** - Connect with mechanic shops and businesses
- **Developer Tools** - Create custom mechanic workflows

### Server Integration

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient lift management and operation
- **Easy Integration** - Simple setup and configuration

:::tip[Mechanic Enhancement]
Vehicle Lift enhances mechanic gameplay with professional lift functionality.
:::

## Troubleshooting

### Common Issues

:::caution[Lift Not Working]
- Ensure the resource is properly started in server.cfg
- Check that the resource name is `night_vehicle_lift`
- Verify lift coordinates are correctly configured
:::

:::caution[Command Not Responding]
- Check F8 console for any error messages
- Verify command configuration in config.lua
- Ensure you're positioned correctly on the lift
:::

:::caution[Configuration Errors]
- Check the config.lua file for syntax errors
- Verify coordinate format is correct
- Test with default settings first
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Lift Positioning** - Ensure vehicle is properly positioned
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible

## Best Practices

### Lift Placement

- **Strategic Locations** - Place lifts in mechanic shops and service areas
- **Accessibility** - Ensure lifts are easily accessible for vehicles
- **Safety Zones** - Create safe areas around lift operations
- **Visual Indicators** - Add clear markers for lift locations

### Configuration Tips

- **Coordinate Accuracy** - Use precise coordinates for lift placement
- **Command Simplicity** - Use intuitive commands for lift operation
- **Notification Clarity** - Provide clear feedback for lift operations
- **Hotkey Accessibility** - Choose easily accessible hotkeys

### Integration Best Practices

- **Mechanic Workflows** - Integrate with existing mechanic systems
- **Business Operations** - Connect with mechanic shop businesses
- **Player Experience** - Ensure smooth and intuitive lift operation
- **Performance Optimization** - Monitor resource performance

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
