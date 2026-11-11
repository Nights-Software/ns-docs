---
title: Advanced Tracking v2
description: Track and trace your fellow players, or decide to be untraceable! This script allows you to set a GPS route to other players who've enabled that they're trackable.
slug: resources/advancedPlayerTracking
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5010021
video: https://youtu.be/_0VPsk-EG58
cover: ../../../assets/covers/advancedPlayerTracking.jpg
---

## Overview

Advanced Player Tracking v2 is a standalone player tracking system that allows players to track and trace each other with GPS-like functionality. Perfect for police backup requests on roleplay servers and general player location sharing.

### Key Features

- **Standalone** - No framework dependencies required
- **Track & trace players** with GPS-like functionality
- **Toggle trackability** - Choose whether to be trackable
- **Real-time distance** display in meters on screen
- **Fully configurable** settings and options
- **Discord webhook logging** - Track who tracks who
- **Multi-language support** for international servers
- **Escrow protection** for security

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

:::note
Advanced Player Tracking v2 has been tested on both OneSync Legacy and Infinity, both work perfectly.
:::

### Framework Compatibility

- **Standalone:** No framework dependencies required
- **Works alongside:** Compatible with ESX, QBCore, and other frameworks
- **No integrations:** No specific framework integrations - works independently
- **Universal compatibility:** Works with any FiveM server setup

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Advanced Player Tracking" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the entire resource folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_advancedTracking
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_advancedTracking/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up Discord webhook for logging (optional)
   - Configure language settings
   - Adjust tracking permissions and settings

## How It Works

### Player Tracking

1. **Enable Tracking:** Players can choose to be trackable
2. **Select Target:** Choose a trackable player from the menu
3. **GPS Route:** Set a GPS route to the selected player
4. **Real-time Updates:** See distance and location updates
5. **Blip System:** Visual blip attached to tracked player

### Menu System

- **Player List:** Shows all online players with names and ping
- **Trackable Status:** Indicates which players are trackable
- **Distance Display:** Real-time distance in meters
- **Easy Navigation:** Simple menu interface

## Integration & Compatibility

### Framework Integration

- **Standalone Operation:** Works without/alongside any framework

### Discord Integration

- **Webhook Logging:** Track who tracks who
- **Activity Monitoring:** Monitor tracking activity
- **Audit Trail:** Keep records of tracking events

## Troubleshooting

### Common Issues

#### Tracking Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify configuration file is properly formatted
- Confirm players have enabled trackability
:::

#### Discord Webhook Issues

:::tip[Webhook troubleshooting]
1. Verify webhook URL is correct
2. Check Discord channel permissions
3. Ensure webhook is active and working
4. Test webhook with a simple message first
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Webhook failed" | Verify Discord webhook URL and permissions |
| "Permission denied" | Check configuration permissions |
| "Player not trackable" | Player needs to enable trackability |

## Best Practices

### Configuration Tips

- **Start with default settings** and adjust based on server needs
- **Set up Discord webhook** for activity monitoring
- **Configure appropriate permissions** for your server
- **Test tracking functionality** with multiple players

### Privacy Considerations

- **Inform players** about tracking features
- **Respect player choice** for trackability
- **Use Discord logging** for accountability
- **Set appropriate permissions** to prevent abuse

## Support & Community

### Getting Help

If you're having trouble with Advanced Player Tracking:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Join our Discord** for community support

### Community Support

Join our Discord community for:
- Technical support
- Configuration help
- Product updates and announcements
- Community discussions

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
