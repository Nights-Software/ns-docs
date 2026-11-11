---
title: Aircraft Radar
description: A guide to install Aircraft Radar for FiveM
slug: resources/aircraftRadar
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5851372
video: https://youtu.be/kEfrtedJyrc
cover: ../../../assets/covers/aircraftRadar.jpg
---

## Overview

The Aircraft Radar revolutionizes your FiveM server by offering an array of incredible features. Whether you're stealthily piloting an aircraft and need to track others in the sky or seeking to enhance your air traffic management, this resource is a must-have for any FiveM server with aviation elements. As an added bonus, you can even incorporate a customizable "Bitchin' Betty" option, providing real-time audio alerts about airborne situations.

### Key Features

- **Volume & Sound Configuration** - Customize audio settings
- **Notification Settings** - Configure alert preferences
- **Airport Zones** - Define airport boundaries and restrictions
- **No Flight Zones (NFZ)** - Set restricted airspace areas
- **Exempt NFZ Planes** - Configure aircraft that can bypass restrictions
- **Stealth Planes** - Set aircraft to fly under radar detection
- **Warning Types** - Enable/disable warnings with sound options
- **Custom UI** - User-friendly interface design
- **Multi-Framework Support** - ESX/QB/NS Discord API/Ace Perms/Standalone
- **OneSync Compatible** - Works with Legacy and Infinity
- **Multi-Language Support** - International server support
- **Escrow Protection** - Secure resource protection
- **Editable CSS** - Customize the visual appearance

## Installation Tutorial

**Follow our step-by-step installation guide:**

<a class="kit-btn" href="https://youtu.be/JsaNR4mtUwI?si=RmjpIjzQzL7IiR4e">Installation Tutorial</a>

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
- **NS Discord API:** Compatible with Discord API integration
- **Ace Permissions:** Compatible with ACE permission system
- **Standalone:** Works without any framework

:::note
Aircraft Radar works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Aircraft Radar" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_aircraft_radar` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_aircraft_radar
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
| `night_aircraft_radar/config/config.lua` | Main configuration settings |
| `night_aircraft_radar/client/c_functions.lua` | Client-side functions |
| `night_aircraft_radar/server/s_functions.lua` | Server-side functions |

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

### Radar System

- **Aircraft Detection:** Automatically detects aircraft in the airspace
- **Real-time Tracking:** Provides live updates on aircraft positions
- **Distance Calculation:** Shows distance between aircraft and ground
- **Speed Monitoring:** Tracks aircraft speed and movement patterns

### Zone Management

- **Airport Zones:** Define restricted areas around airports
- **No Flight Zones:** Set up prohibited airspace areas
- **Exempt Aircraft:** Configure specific planes that can bypass restrictions
- **Stealth Mode:** Set aircraft to operate under radar detection

### Audio Alerts

- **"Bitchin' Betty" System:** Real-time audio alerts for airborne situations
- **Customizable Sounds:** Configure volume and alert types
- **Warning Notifications:** Audio and visual warnings for restricted areas

## Advanced Configuration

### Volume & Sound Settings

Configure audio levels and alert sounds for different situations and aircraft types.

### Notification Settings

Set up custom notification preferences for various radar events and warnings.

### Airport Zones

Define airport boundaries, restricted areas, and flight path restrictions.

### No Flight Zones (NFZ)

Configure prohibited airspace areas with custom restrictions and exemptions.

### Warning Types

Enable or disable specific warning types with optional sound alerts.

## Customization

### CSS Editing

The Aircraft Radar includes editable CSS files allowing you to:
- **Customize UI appearance** to match your server theme
- **Modify colors and styling** for better visual integration
- **Adjust layout and positioning** of radar elements
- **Create unique visual experiences** for your players

:::tip[CSS Knowledge]
Basic CSS knowledge is helpful for customization, but not required for basic operation.
:::

## Performance Optimization

### UI Lag Fix

:::danger[FiveM Setting]
Enable "Fix UI Lag" in your FiveM application settings menu for optimal performance with this resource.
:::

### Optimization Tips

- **Monitor performance** after installation
- **Adjust update intervals** based on server size
- **Limit zone complexity** for better performance
- **Test with multiple aircraft** to ensure stability

## Troubleshooting

### Common Issues

#### Radar Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify configuration file is properly formatted
- Confirm aircraft are in the correct zones
:::

#### UI Performance Issues

:::tip[Performance troubleshooting]
1. Enable "Fix UI Lag" in FiveM settings
2. Check for conflicting UI resources
3. Reduce update frequency in config
4. Monitor server performance
:::

#### Audio Issues

:::note[Audio troubleshooting]
1. Check volume settings in config
2. Verify audio files are present
3. Test with different aircraft types
4. Check client audio settings
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "UI not displaying" | Enable "Fix UI Lag" in FiveM settings |
| "Audio not working" | Check volume and audio file settings |
| "Zones not working" | Verify zone configuration in config |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and adjust based on server needs
- **Test zones thoroughly** before going live
- **Monitor performance** with multiple aircraft
- **Regularly review and update** zone configurations

### Server Integration

- **Coordinate with other aviation resources** for best experience
- **Set appropriate permissions** for radar access
- **Integrate with existing air traffic systems**
- **Test with your server's aircraft models**

### Maintenance Tips

- **Regular backups** of configuration files
- **Monitor radar performance** during peak usage
- **Update zone configurations** as server needs change
- **Review and optimize** settings periodically

## Support

### Getting Help

If you're having trouble with Aircraft Radar:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Verify your configuration** matches the examples
4. **Join our Discord** for community support

### Community Support

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
