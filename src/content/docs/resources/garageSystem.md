---
title: Garage System
description: A guide to install Garage System for FiveM
slug: resources/garageSystem
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5208515
video: https://youtu.be/TtOag_FZwBk
cover: ../../../assets/covers/garageSystem.jpg
---

## Overview

The Garage System allows you to configure infinite garages around the map. All these garages can be linked to (framework) roles/groups, allowing you to set up permissions for each individual garage. It's also possible to configure spawn, camera and showcase positions. This gives you various options for what you desire to do with this garage system! Build it your way!

### Key Features

- **Standalone/ESX/QBcore permissions** - Flexible framework compatibility
- **Configurable garages** - Names, vehicles, liveries, extras
- **Optional Discord API integration** - Discord roles permissions or open access
- **Camera view on dynamic vehicle selection** - Preview vehicles before spawning
- **Configurable language settings** - Multi-language support
- **Configurable 3D text** - Custom text labels
- **Configurable markers** - Visual indicators
- **Configurable camera positioning** - Custom camera angles
- **Configurable spawn positions per garage** - Multiple spawn points
- **Configurable garage entry per garage** - Flexible entry points
- **Configurable blips** - Map markers
- **Lightweight** - Optimized performance
- **Usable for almost every purpose** - Session-based garage system
- **Escrow protection** - Secure code

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
- **NS Discord API:** Compatible with Discord API integration (included)
- **Standalone:** Works without any framework

:::note
Garage System works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Garage System" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_garage_system` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_garage_system
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_garage_system/config/config.lua` | Main configuration settings |
| `night_garage_system/client/c_functions.lua` | Client-side functions |
| `night_garage_system/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

:::tip[Time Investment]
Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.
:::

## How It Works

### Garage Management

- **Multiple Garage Locations** - Configure unlimited garages across the map
- **Role-Based Access** - Link garages to specific Discord roles or framework groups
- **Vehicle Sections** - Organize vehicles into categories within each garage
- **Spawn Points** - Define multiple spawn locations per garage

### Vehicle System

- **Vehicle Showcase** - Preview vehicles before selection
- **Camera Positioning** - Custom camera angles for vehicle preview
- **Extras & Liveries** - Configure vehicle extras and liveries
- **Permission Control** - Role-based vehicle access

### Visual Elements

- **3D Text Labels** - Custom text displays
- **Markers** - Visual indicators for garage locations
- **Blips** - Map markers for easy navigation
- **Customizable UI** - Language and styling options

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Full ESX framework integration
- **QBCore** - Full QBCore framework integration

### Discord API Integration

- **Optional Integration** - Discord API included for role-based permissions
- **Role Management** - Link garages to specific Discord roles
- **Permission System** - Granular control over garage access

:::tip[Discord API Setup]
If using Discord API integration, ensure your Discord roles match the configuration in the garage system.
:::

## Troubleshooting

### Common Issues

:::caution[Parsing Errors in F8 Console]
- Ensure files are transferred in binary mode via FTP
- Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg
:::

:::caution[Garage Not Appearing]
- Check server.cfg for proper resource ensure
- Verify Discord API configuration if using role-based permissions
- Confirm coordinates are valid
:::

:::caution[Permission Issues]
- Verify Discord role names match between garage config and Discord API
- Check framework permissions if using ESX/QBCore
- Ensure role hierarchy is properly configured
:::

### Performance Optimization

- **Limit the number of vehicles per section for better performance**
- **Use appropriate blip scales and marker sizes**
- **Consider distance-based loading for large garage systems**

## Best Practices

### Configuration Tips

- **Organize Vehicles Logically** - Group vehicles by type, role, or purpose
- **Use Descriptive Names** - Clear vehicle and garage names for easy management
- **Test Coordinates** - Verify all spawn, showcase, and camera positions
- **Backup Configurations** - Keep backups of working configurations

### Security Considerations

- **Role Verification** - Regularly verify Discord role assignments
- **Permission Audits** - Review garage access permissions periodically
- **Escrow Protection** - Keep resource escrow enabled for security

### Performance Optimization

- **Efficient Vehicle Lists** - Avoid excessive vehicle counts per section
- **Optimized Coordinates** - Use precise coordinates to prevent conflicts
- **Resource Management** - Monitor resource usage with large garage systems

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
