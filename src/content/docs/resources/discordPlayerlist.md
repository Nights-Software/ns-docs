---
title: Discord Playerlist
description: Display your players by Discord roles and customize buttons per role!
slug: resources/discordPlayerlist
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5035743
video: https://youtu.be/y_TFbXMbmTk
cover: ../../../assets/covers/discordPlayerlist.jpg
---

## Overview

Discord Playerlist is a dynamic player management system that integrates with your Discord server to display players organized by their Discord roles. With customizable buttons for each role, you can create a comprehensive and organized player list that enhances your server's community management.

### Key Features

- **Discord Role Integration** - Display players organized by Discord roles
- **Customizable Buttons** - Configure buttons per role for different actions
- **Real-Time Updates** - Live player list updates based on Discord roles
- **Easy Configuration** - Simple setup and management
- **Role-Based Organization** - Clear player categorization by Discord roles
- **Custom Title Image** - Replace playerlist title image with your own link

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

- **Discord API** - Required for Discord integration
- **Universal** - Works with any FiveM server setup
- **Role-Based** - Integrates with Discord server roles

:::note
You must install and configure night_discordapi first before installing Discord Playerlist.
:::

## Installation Process

### Step 1: Install Discord API (Required)

1. **Install night_discordapi first**
   - Download and install the Discord API resource
   - Configure the Discord API resource completely
   - Ensure it's working properly before proceeding

:::caution[Prerequisite]
Discord Playerlist requires night_discordapi to be installed and configured first.
:::

### Step 2: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Playerlist" in your granted assets
   - Download the ZIP package

### Step 3: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_playerlist` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 4: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_playerlist
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 5: Configuration Setup

1. **Navigate to Config File**
   - Open `night_playerlist/config/config.lua`
   - Review all configuration options

2. **Configure Playerlist Settings**
   - Set up Discord role integration
   - Configure customizable buttons per role
   - Insert a link to replace your playerlist title image
   - Adjust role-based organization settings

:::tip[Configuration Help]
The config file contains detailed explanations for all variables.
:::

## How It Works

### Player Organization System

- **Discord Role Integration:** Display players organized by their Discord roles
- **Real-Time Updates:** Live updates as players join, leave, or change roles
- **Role-Based Categorization:** Clear organization of players by Discord roles
- **Dynamic Display:** Automatic updates based on Discord role changes

### Customizable Interface

- **Role-Based Buttons:** Configure different buttons for each Discord role
- **Custom Title Image:** Replace the default title image with your own link
- **Flexible Layout:** Adapt the playerlist to match your server's theme
- **Easy Management:** Simple configuration for different role types

### Discord Integration

- **Seamless Role Checking:** Verify Discord roles automatically
- **Permission-Based Display:** Show players based on their Discord roles
- **Easy Administration:** Manage player display through Discord role system
- **Consistent Updates:** Real-time synchronization with Discord roles

## Integration & Compatibility

### Framework Integration

- **Discord API Integration:** Seamless role-based player organization
- **Universal Compatibility:** Works with all FiveM server setups
- **Role-Based Management:** Integrates with Discord server roles

### Server Applications

- **Community Servers:** Organize players by membership levels
- **Roleplay Servers:** Display players by their roleplay roles
- **Gaming Communities:** Categorize players by gaming roles
- **Administrative Teams:** Organize staff and admin players

## Troubleshooting

### Common Issues

#### Discord API Not Working

:::caution[Check these common issues]
- Ensure night_discordapi is installed and configured first
- Verify Discord API credentials are properly set up
- Check Discord bot permissions and roles
- Confirm Discord server integration settings
:::

#### Playerlist Not Displaying

:::tip[Display troubleshooting]
1. Check Discord role configuration
2. Verify playerlist configuration settings
3. Test with different Discord roles
4. Review Discord API integration settings
:::

#### Buttons Not Working

:::note[Button troubleshooting]
1. Check button configuration per role
2. Verify role permissions and settings
3. Test with different user roles
4. Review button functionality settings
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Discord API not found" | Install and configure night_discordapi first |
| "Playerlist not displaying" | Check Discord role and configuration settings |
| "Buttons not working" | Verify button configuration per role |

## Best Practices

### Configuration Best Practices

- **Install Discord API first** and ensure it's working properly
- **Test role-based display** with different Discord roles
- **Configure clear button functions** for each role type
- **Use custom title images** that match your server's theme

### Server Integration

- **Coordinate with Discord server** for role management
- **Set up clear role hierarchy** for player organization
- **Test playerlist display** with different user types
- **Monitor role changes** for consistent updates

### Player Management

- **Use specific roles** for different player categories
- **Regularly update role assignments** as needed
- **Monitor playerlist functionality** for issues
- **Keep Discord API credentials secure**

## Support

### Getting Help

If you're having trouble with Discord Playerlist:

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
