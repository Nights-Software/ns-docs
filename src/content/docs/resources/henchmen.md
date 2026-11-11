---
title: Henchmen
description: A guide to install Henchmen for FiveM
slug: resources/henchmen
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/6153056
video: https://youtu.be/rzTQdG8Vd6E
cover: ../../../assets/covers/henchmen.jpg
---

## Overview

Dive into the world of Henchmen, where loyal companions await at various customizable locations. These trusted allies shadow your every move, ready to stand by your side through thick and thin. With diverse options ranging from faithful animal companions to versatile NPCs, including both multiplayer and native characters, the possibilities are endless. Want a doppelgänger with a twist? Henchmen can even mirror your own persona, adding a unique flair to your entourage.

Customize their behavior to your liking; whether it's a relaxed idle stance or a daring taunt, the choice is yours. Pick up your henchmen today and embark on adventures with style and panache!

### Key Features

- **Customizable pickup locations** - Set henchmen spawn points per section
- **Diverse henchmen types** - Animals, NPCs (MP/native), or player copies
- **Doppelgänger system** - Henchmen can mirror your own persona
- **Customizable weapon loadout** - Set weapons or copy your own
- **Up to 3 henchmen** - Multiple companion support
- **Behavior commands** - Order to follow, idle, or attack
- **Customizable outfits** - Set outfits per section
- **Custom idle animations** - Configure henchmen behavior
- **Command/hotkey usage** - Flexible control options
- **Multi-Framework Support** - ESX/QB/NS Discord API/Ace Perms/Standalone
- **OneSync Compatible** - Works with Legacy and Infinity
- **Multi-Language Support** - International server support
- **Escrow Protection** - Secure resource protection

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

:::caution[OneSync Synchronization]
NPC synchronization can be unreliable with many players in the same OneSync dimension area.
:::

## System Requirements & Compatibility

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

:::caution[Synchronization Note]
NPC synchronization may be unreliable with many players in the same OneSync dimension area.
:::

### Framework Compatibility

- **ESX:** Full compatibility with ESX framework
- **QBCore:** Full compatibility with QBCore framework
- **NS Discord API:** Compatible with Discord API integration
- **Ace Permissions:** Compatible with ACE permission system
- **Standalone:** Works without any framework

:::note
Henchmen works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Henchmen" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_henchmen` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_henchmen
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
| `night_henchmen/config/config.lua` | Main configuration settings |
| `night_henchmen/client/c_functions.lua` | Client-side functions |
| `night_henchmen/server/s_functions.lua` | Server-side functions |

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

### Henchmen System

- **Pickup Locations** - Configure henchmen spawn points across the map
- **Diverse Types** - Choose from animals, NPCs, or player copies
- **Doppelgänger Feature** - Henchmen can mirror your own character
- **Multiple Companions** - Support for up to 3 henchmen simultaneously

### Combat & Behavior

- **Weapon Loadout** - Customize weapons or copy your own loadout
- **Behavior Commands** - Order henchmen to follow, idle, or attack
- **Custom Animations** - Configure idle animations and behaviors
- **Combat AI** - Intelligent combat assistance

### Customization Options

- **Outfit System** - Set custom outfits per henchmen section
- **Command Integration** - Flexible command and hotkey usage
- **Framework Integration** - Works with all major FiveM frameworks
- **Language Support** - Multi-language configuration

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Full ESX framework integration
- **QBCore** - Full QBCore framework integration

### Permission Systems

- **Discord API** - Role-based permissions through Discord integration
- **ACE Permissions** - Server-side permission management
- **Framework Permissions** - ESX/QBCore group-based access

:::tip[Permission Setup]
Configure access permissions to control who can use henchmen features.
:::

## Troubleshooting

### Common Issues

:::caution[Parsing Errors in F8 Console]
- Ensure files are transferred in binary mode via FTP
- Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg
:::

:::caution[Henchmen Not Appearing]
- Check server.cfg for proper resource ensure
- Verify configuration file syntax
- Confirm pickup locations are properly configured
:::

:::caution[Synchronization Issues]
- Monitor OneSync performance with many players
- Consider reducing henchmen count in crowded areas
- Check for conflicts with other NPC resources
:::

### Performance Optimization

- **Limit henchmen count** - Avoid excessive henchmen in small areas
- **Monitor OneSync performance** - Check for synchronization issues
- **Optimize pickup locations** - Spread henchmen across different areas

## Best Practices

### Configuration Tips

- **Strategic Placement** - Position henchmen pickup locations logically
- **Balance Henchmen Types** - Mix different henchmen types for variety
- **Test Commands** - Verify all behavior commands work correctly
- **Backup Configurations** - Keep backups of working configurations

### Performance Management

- **Monitor Synchronization** - Watch for OneSync issues with many players
- **Optimize Locations** - Avoid clustering henchmen in busy areas
- **Resource Management** - Track resource usage with active henchmen

### User Experience

- **Clear Instructions** - Provide players with henchmen usage guidelines
- **Balanced Features** - Ensure henchmen don't overpower gameplay

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
