---
title: Weapon Crates
description: A guide to install Discord Linked Weapon Crates! for FiveM
slug: resources/weaponCrates
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5242785
video: https://youtu.be/2WDjpv-h7gA
cover: ../../../assets/covers/weaponCrates.jpg
---

## Overview

Create your weapon crates all over the map. Configure your style and edit it all to your liking! This script provides weapon crates for players to collect weapons from. Everything is built to be easy-to-use for the player. Almost everything is configurable and this script is provided with language support.

### Key Features

- **Discord Role Integration** - Configurable permissions by Discord roles
- **Multiple Framework Support** - Standalone/ESX/QBCore compatible
- **Configurable Locations** - Place weapon crates anywhere on the map
- **Configurable Camera View** - Customize camera angles and perspectives
- **Configurable Blips** - Custom map markers for weapon crate locations
- **Configurable Markers** - Visual indicators for weapon crate areas
- **Configurable 3D Text Labels** - Custom text displays for weapon crates
- **Configurable Sections** - Create different sections (Police Officer, Armed Police, Taser Officer, etc.)
- **Configurable Weaponry** - Different weapons per section (baton, taser, firearms, etc.)
- **Configurable Components** - Weapon components per section and per weapon
- **Configurable Props** - Custom weapon crate props and appearances
- **Configurable Names** - Customize crate names, location names, and section names
- **Language Support** - Multi-language support for international servers
- **Lightweight** - Minimal performance impact
- **Escrow Protection** - Secure resource protection

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_discord_weaponcrates` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_discord_weaponcrates
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** weapon crate locations and settings
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
- **ESX:** Compatible with ESX framework
- **QBCore:** Compatible with QBCore framework

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Dependencies

- **Required:** Discord API resource (included in this package)

:::note
Weapon Crates is designed to work with any FiveM server configuration and includes the required Discord API integration.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_discord_weaponcrates/config/config.lua` | Main configuration and crate settings |
| `night_discord_weaponcrates/client/c_functions.lua` | Client-side functions |
| `night_discord_weaponcrates/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure crate locations** - add coordinates for weapon crates
4. **Configure sections** - set up different weapon sections
5. **Test frequently** - use F8 console for error checking

:::tip[Crate Configuration]
Configure weapon crates with comprehensive customization options and Discord role integration.
:::

## How It Works

### Weapon Crate System

- **Crate Locations** - Place weapon crates anywhere on the map
- **Section Management** - Create different sections for different roles
- **Weapon Distribution** - Distribute weapons based on role requirements
- **Player Interaction** - Easy-to-use interface for weapon collection

### Configuration Options

- **Location Management** - Configure weapon crate locations with precise coordinates
- **Camera Settings** - Customize camera view angles and perspectives
- **Blip Configuration** - Set up custom map markers for crate locations
- **Marker Settings** - Configure visual markers for weapon crate areas
- **3D Text Labels** - Customize text displays for weapon crates
- **Section Setup** - Create different sections (Police Officer, Armed Police, Taser Officer, etc.)
- **Weapon Assignment** - Assign different weapons to each section
- **Component Management** - Configure weapon components per section and weapon
- **Prop Customization** - Set custom props for weapon crates
- **Naming System** - Customize crate names, location names, and section names

### Discord Integration

- **Role-Based Access** - Restrict weapon access by Discord roles
- **Permission System** - Configure permissions for different Discord roles
- **Real-Time Verification** - Check Discord roles when accessing crates
- **API Integration** - Utilize included Discord API for role verification

### User Experience

- **Easy-to-Use Interface** - Simple and intuitive weapon collection
- **Visual Feedback** - Clear indicators and markers for crate locations
- **Role-Based Access** - Access weapons based on Discord role permissions
- **Multi-Language Support** - International language support

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework integration
- **QBCore** - Compatible with QBCore framework integration

### Discord Integration

- **Role-Based Access** - Restrict weapon access by Discord roles
- **Real-Time Verification** - Check Discord roles when accessing crates
- **Permission Management** - Configure permissions for different roles
- **API Integration** - Utilize included Discord API for role verification

### Script Integration

- **Weapon Management** - Integrate with existing weapon systems
- **Permission Systems** - Connect with server permission management
- **Access Control** - Enhance weapon security and access control
- **Custom Scripts** - Perfect foundation for building weapon distribution systems

### Server Integration

- **Performance Optimized** - Lightweight and efficient operation
- **Easy Integration** - Simple setup and configuration

:::tip[Weapon Distribution]
Weapon Crates provides comprehensive weapon distribution with Discord role-based access control.
:::

## Troubleshooting

### Common Issues

:::caution[Crates Not Appearing]
- Ensure the resource is properly started in server.cfg
- Check that the resource name is `night_discord_weaponcrates`
- Verify crate location coordinates are correctly configured
:::

:::caution[Discord Integration Issues]
- Check Discord API configuration in config.lua
- Verify Discord bot permissions and role settings
- Ensure Discord API resource is properly started
:::

:::caution[Weapon Access Denied]
- Check if you have the required Discord roles
- Verify role permissions are correctly configured
- Ensure weapon assignments match role requirements
:::

:::caution[Configuration Errors]
- Check the config.lua file for syntax errors
- Verify crate location and weapon configurations
- Test with default settings first
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Crate Locations** - Verify crate points are accessible
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible
- **Test Role Permissions** - Verify Discord role assignments

## Best Practices

### Crate Placement

- **Strategic Locations** - Place crates in logical and accessible areas
- **Role-Based Placement** - Position crates based on role requirements
- **Visual Indicators** - Use clear markers and blips for easy location
- **Accessibility** - Ensure crates are easily accessible for authorized players

### Configuration Tips

- **Section Organization** - Create logical sections for different roles
- **Weapon Assignment** - Assign appropriate weapons to each section
- **Role Permissions** - Set up clear role-based access control
- **Testing** - Thoroughly test crate access with different roles

### Discord Integration

- **Role Structure** - Design logical Discord role hierarchy
- **Permission Setup** - Configure appropriate weapon access for roles
- **API Configuration** - Properly configure Discord API settings
- **Role Verification** - Regularly verify Discord role assignments

### User Experience

- **Clear Instructions** - Provide clear guidance for weapon collection
- **Visual Feedback** - Use markers and 3D text for clear identification
- **Language Support** - Utilize multi-language support for international servers
- **Performance Optimization** - Monitor resource performance and optimization

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
