---
title: Discord Lockers
description: Create your lockers all over the map. Configure your style and edit it all to your liking! This script provides lockers for players to choose outfits from. Everything is built to be easy-to-use for the player. Almost everything is configurable and this script is provided with language support. Check out the features!
slug: resources/discordLockers
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5296139
video: https://youtu.be/Vo80kMBfNJs
cover: ../../../assets/covers/discordLockers.jpg
---

## Overview

Discord Linked Lockers is a comprehensive locker system that allows players to change outfits throughout your FiveM server. With extensive customization options and Discord role integration, you can create themed locker rooms for different departments and organizations, providing a seamless outfit management experience.

### Key Features

- **Standalone** - No framework dependencies required
- **Configurable Locations** - Place lockers anywhere on the map
- **Configurable Blips** - Customize map markers for locker locations
- **Configurable Markers** - Visual indicators for locker areas
- **Configurable 3D Text Labels** - Customize text displays
- **Discord Role Permissions** - Use included Discord API for role-based access
- **Configurable Sections** - Create sections like Police, Fire, Ambulance
- **Discord Linked Outfits** - Configurable outfits per section with Discord permissions
- **Configurable Props** - Choose your own locker prop models
- **Language Support** - Multi-language compatibility
- **Lightweight** - Optimized performance
- **Escrow Protection** - Secure resource protection

## Installation Tutorial

**Watch the installation tutorial:**

<a class="kit-btn" href="https://youtu.be/TiMOOGHnCuA?si=EsoWhnWLd-WO_VPm">Installation Tutorial</a>

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

:::note[CFX Portal Delay]
After purchasing, it may take a few minutes for the resource to appear in the CFX Portal.
:::

## System Requirements & Compatibility

### Dependencies

- **Discord API** - Required integration (included in package)
- **Role-Based** - Integrates with Discord server roles

:::note
The Discord API integration is included in the package and provides role-based permissions for outfit access.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Linked Lockers" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_discord_lockers` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_discord_lockers
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_discord_lockers/config/config.lua`
   - Review all configuration options

2. **Configure Your Lockers**
   - Set up locker locations throughout your map
   - Configure blips, markers, and 3D text labels
   - Set up sections and outfit permissions
   - Adjust Discord role integration

:::tip[Configuration Help]
The config file contains green explanatory text and variables for you to edit.
:::

## How It Works

### Locker System

- **Multiple Locations:** Place lockers throughout your server map
- **Section Organization:** Create themed sections (Police, Fire, Ambulance, etc.)
- **Outfit Management:** Players can change outfits at any locker
- **Easy-to-Use Interface:** Simple interaction for outfit selection

### Visual System

- **Custom Blips:** Configure map markers for locker locations
- **Visual Markers:** Set up area indicators for locker zones
- **3D Text Labels:** Display information about locker sections
- **Custom Props:** Choose your own locker prop models

### Permission System

- **Discord Role Integration:** Use Discord roles for outfit access
- **Section-Based Permissions:** Different outfits for different roles
- **Flexible Access Control:** Configure who can access which outfits
- **Secure Management:** Role-based outfit restrictions

## Integration & Compatibility

### Framework Integration

- **Standalone Operation:** Works without any framework
- **Discord API Integration:** Seamless role-based permission system
- **Universal Compatibility:** Works with all FiveM server setups

### Server Applications

- **Roleplay Servers:** Themed locker rooms for different departments
- **Emergency Services:** Police, Fire, and EMS outfit management
- **Business Servers:** Employee uniform systems
- **Gaming Communities:** Custom outfit selection for different roles

## Troubleshooting

### Common Issues

#### Lockers Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify locker location configurations
- Confirm Discord API integration is working
:::

#### Permission Issues

:::tip[Permission troubleshooting]
1. Check Discord role configuration
2. Verify outfit permissions per section
3. Test with different Discord roles
4. Review Discord API integration settings
:::

#### Visual Issues

:::note[Visual troubleshooting]
1. Check blip and marker configurations
2. Verify 3D text label settings
3. Test with different prop models
4. Review location and positioning settings
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Locker not working" | Verify locker configuration settings |
| "Permission denied" | Check Discord role permissions |
| "Visual not displaying" | Review blip and marker configuration |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and customize to your needs
- **Place lockers strategically** in logical locations
- **Use clear section names** for easy organization
- **Test outfit permissions** with different Discord roles

### Server Integration

- **Coordinate with Discord server** for role management
- **Create themed sections** that match your server's departments
- **Test outfit access** with different user roles
- **Review and optimize** settings based on player feedback

### Roleplay Integration

- **Design themed locker rooms** for different departments
- **Create realistic outfit systems** for roleplay scenarios
- **Use for emergency services** and business uniforms
- **Coordinate with other roleplay systems**

## Support

### Getting Help

If you're having trouble with Discord Linked Lockers:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Join our Discord** for community support

### Community Support

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
