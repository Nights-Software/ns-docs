---
title: Playernames v2
description: Configure playernames above peoples heads as well as the range for when it becomes visible. Add or remove displaying their ID & PING. All the way configurable to your liking.
slug: resources/discordPlayerNames
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5357523
video: https://youtu.be/GV8QNvCHAHs
cover: ../../../assets/covers/discordPlayerNames.jpg
---

## Overview

Discord Playernames is a flexible player identification system that allows you to customize how player names are displayed above players' heads. With support for Discord names, default names, or custom names, you can create a personalized player identification experience that matches your server's needs.

### Key Features

- **Flexible Name Display** - Configure Discord, default, or custom player names
- **Configurable Range** - Set visibility range for player names
- **ID & Ping Display** - Add or remove player ID and ping information
- **Toggle Functionality** - Allow players to toggle name display
- **OneSync Compatible** - Works with OneSync synchronization
- **Language Support** - Multi-language compatibility
- **Discord API Integration** - Requires Discord API (included)
- **Escrow Protection** - Secure resource protection
- **Standalone** - No framework dependencies required

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

- **Discord API** - Required for Discord integration (included)
- **OneSync** - Compatible with OneSync synchronization
- **Universal** - Works with any FiveM server setup

:::note
The Discord API is included in the package and provides Discord name integration.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Playernames" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_discord_playernames` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_discord_playernames
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_discord_playernames/config/config.lua`
   - Review all configuration options

2. **Configure Player Names**
   - Set up name display preferences (Discord, default, or custom)
   - Configure visibility range settings
   - Adjust ID and ping display options
   - Set up toggle functionality

:::tip[Configuration Help]
The config file contains green explanatory text and variables for you to edit.
:::

## How It Works

### Name Display System

- **Flexible Name Options:** Choose between Discord names, default names, or custom names
- **Configurable Range:** Set the distance at which player names become visible
- **Dynamic Updates:** Real-time name display updates as players move
- **Customizable Format:** Configure how names are displayed above players

### Information Display

- **Player ID Display:** Show or hide player IDs above heads
- **Ping Information:** Display player ping values
- **Toggle Functionality:** Allow players to turn name display on/off
- **Configurable Elements:** Choose which information to display

### Discord Integration

- **Discord Name Support:** Use Discord usernames for player identification
- **Seamless Integration:** Automatic Discord name synchronization
- **Fallback Options:** Use default or custom names when Discord names unavailable
- **Consistent Display:** Maintain consistent name formatting

## Integration & Compatibility

### Framework Integration

- **Standalone Operation:** Works without any framework
- **Discord API Integration:** Seamless Discord name integration
- **OneSync Compatibility:** Works with OneSync synchronization
- **Universal Compatibility:** Works with all FiveM server setups

### Server Applications

- **Roleplay Servers:** Clear player identification for roleplay scenarios
- **Community Servers:** Easy player recognition and interaction
- **Gaming Communities:** Enhanced player visibility and communication
- **Administrative Teams:** Better player monitoring and management

## Troubleshooting

### Common Issues

#### Names Not Displaying

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify name display configuration settings
- Confirm Discord API integration is working
:::

#### Discord Names Not Working

:::tip[Discord troubleshooting]
1. Check Discord API configuration
2. Verify Discord bot permissions
3. Test with different name display options
4. Review Discord integration settings
:::

#### Range Issues

:::note[Range troubleshooting]
1. Check visibility range configuration
2. Verify distance settings
3. Test with different range values
4. Review OneSync compatibility settings
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Names not displaying" | Verify name display configuration |
| "Discord API error" | Check Discord API integration settings |
| "Range not working" | Review visibility range configuration |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and customize to your needs
- **Test different name display options** to find the best fit
- **Configure appropriate visibility ranges** for your server size
- **Use toggle functionality** to give players control

### Server Integration

- **Coordinate with Discord server** for consistent naming
- **Test name display** with different player types
- **Monitor performance** with large player counts
- **Review and optimize** settings based on player feedback

### Player Experience

- **Use clear name formats** for easy identification
- **Provide toggle options** for player preference
- **Balance information display** to avoid clutter
- **Test with different server scenarios**

## Support

### Getting Help

If you're having trouble with Discord Playernames:

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
