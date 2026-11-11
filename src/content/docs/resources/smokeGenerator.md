---
title: Smoke Generator
description: A guide to install Smoke Generator for FiveM
slug: resources/smokeGenerator
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5100834
video: https://youtu.be/J-XYvbDf6bo
cover: ../../../assets/covers/smokeGenerator.jpg
---

## Overview

Spawn smoke in your hand for any purpose you can think of! Set the size and colour to your desire. This handheld smoke generator provides realistic smoke effects with full customization options.

### Key Features

- **Handheld Smoke Generation** - Spawn smoke directly in your hand
- **Configurable Commands** - Customize commands to your liking
- **Color & Size Control** - Decide the colour and size of smoke
- **Optional Item Usage** - Framework integration for item-based usage
- **Animated Effects** - Realistic smoke animations
- **Synchronized** - Smoke effects synchronized across all players
- **Framework Compatibility** - Works with QBCore, ESX, and Standalone
- **Escrow Protection** - Secure resource protection

## Installation Tutorial

**Watch the installation tutorial:**

<a class="kit-btn" href="https://youtu.be/mLWDlb6fdT4?si=Hl5iJZ1honvcMgu1">Installation Tutorial</a>

## Important Pre-Installation Notes

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

:::caution[Discord API Requirement]
You require the Discord API script to utilize permissions. Visit [Discord API Documentation](https://docs.nights-software.com/resources/discordAPI/) for setup instructions.
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

- **Discord API** - Required for permissions (optional item usage)
- **Framework Integration** - Optional item usage for frameworks

:::note
Smoke Generator is designed to work with any FiveM server configuration and provides realistic smoke effects.
:::

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** to your server's resources folder
3. **Ensure the folder** is named `night_handheld_smoke_gen` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_handheld_smoke_gen
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
| `night_handheld_smoke_gen/config/config.lua` | Main configuration settings |
| `night_handheld_smoke_gen/client/c_functions.lua` | Client-side functions |
| `night_handheld_smoke_gen/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize commands, colors, sizes, and permissions
4. **Test frequently** - use F8 console for error checking

:::tip[Configuration Options]
Configure commands, smoke colors, sizes, and optional item usage for frameworks.
:::

## How It Works

### Smoke Generation

- **Handheld Smoke** - Spawn smoke directly in your hand
- **Customizable Effects** - Set size and color to your desire
- **Realistic Animations** - Authentic smoke generation animations
- **Synchronized Effects** - Smoke visible to all players on server

### Configuration Options

- **Command Configuration** - Customize commands for smoke generation
- **Color Control** - Choose from various smoke colors
- **Size Control** - Adjust smoke size and density
- **Framework Integration** - Optional item usage for ESX/QBCore

### Permission System

- **Discord API Integration** - Utilize Discord roles for permissions
- **Optional Item Usage** - Framework-based item requirements
- **Access Control** - Configure who can use smoke generators

### User Experience

- **Easy Activation** - Simple commands or item usage
- **Visual Feedback** - Clear smoke generation effects
- **Flexible Usage** - Use for any purpose you can think of
- **Seamless Integration** - Works naturally with FiveM gameplay

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework integration
- **QBCore** - Compatible with QBCore framework integration

### Discord API Integration

- **Permission System** - Utilize Discord roles for access control
- **Role-Based Access** - Configure permissions through Discord API
- **Easy Setup** - Simple integration with existing Discord setup

:::tip[Discord API Setup]
Visit [Discord API Documentation](https://docs.nights-software.com/resources/discordAPI/) for setup instructions.
:::

### Server Integration

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient smoke effect management
- **Easy Integration** - Simple setup and configuration

## Troubleshooting

### Common Issues

:::caution[Resource Not Starting]
- Ensure the resource is properly added to server.cfg
- Check that the resource name is `night_handheld_smoke_gen`
- Verify the resource started without errors in console
:::

:::caution[Smoke Not Generating]
- Check F8 console for any error messages
- Verify configuration settings in config.lua
- Test with default settings first
:::

:::caution[Permission Issues]
- Ensure Discord API is properly configured
- Check Discord role permissions in config.lua
- Verify Discord API is started before smoke generator
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Commands** - Verify smoke generation commands work
- **Verify Configuration** - Check all config settings are correct
- **Check Discord API** - Ensure Discord API is properly configured

## Best Practices

### Smoke Configuration

- **Color Selection** - Choose appropriate smoke colors for your server
- **Size Management** - Configure reasonable smoke sizes
- **Command Setup** - Set up intuitive commands for users
- **Permission Management** - Configure appropriate access controls

### Performance Optimization

- **Smoke Limits** - Monitor smoke effect count for performance
- **Synchronization** - Ensure smoke effects are properly synchronized
- **Framework Integration** - Optimize item usage for frameworks
- **Regular Testing** - Test smoke functionality regularly

### User Experience

- **Clear Instructions** - Provide users with smoke generator guidelines
- **Intuitive Commands** - Make commands easy to remember and use
- **Visual Feedback** - Ensure smoke effects are clearly visible
- **Help Documentation** - Create server-specific usage guides

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
