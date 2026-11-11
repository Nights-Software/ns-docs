---
title: Ammo Boxes
description: Configure all ammo pickup locations, models, blips, colors and loads more to your personal preferences and allow your players to fetch ammo from several places. This script can come in very handy for multiple purposes on FiveM!
slug: resources/ammoBox
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5416619
video: https://youtu.be/WL106G0kmRo
cover: ../../../assets/covers/ammoBox.jpg
---

## Overview

Ammo Boxes & Crates is a comprehensive ammunition distribution system that allows you to create customizable ammo pickup locations throughout your FiveM server. Perfect for military bases, shooting ranges, survival scenarios, or any server that needs strategic ammo distribution points.

### Key Features

- **Configurable Ammo Boxes & Crates** - Set name, prop, location, ammo capacity and positioning
- **Cooldown Timer** - Configure pickup cooldowns to prevent abuse
- **Custom Blips & Markers** - Configure visual indicators to your liking
- **Text Labels** - Customize information displays
- **Animation Support** - Configure pickup animations
- **Multi-Language Support** - International server support
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

### Framework Compatibility

- **Standalone:** No framework dependencies required. Not compatible with frameworks/inventory systems.

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Ammo Boxes & Crates" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_ammobox` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_ammobox
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_ammobox/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up ammo box locations and properties
   - Configure cooldown timers and capacities
   - Adjust blips, markers, and text labels

:::tip[Configuration Help]
The config file contains green explanatory text and variables for you to edit.
:::

## How It Works

### Ammo Box System

- **Multiple Locations:** Place ammo boxes throughout your server
- **Custom Props:** Choose different ammo box models and appearances
- **Ammo Capacity:** Configure how much ammo each box contains
- **Strategic Positioning:** Place boxes in logical locations

### Pickup System

- **Player Interaction:** Players can interact with ammo boxes
- **Cooldown Timers:** Prevent rapid ammo collection
- **Animation Support:** Custom pickup animations
- **Inventory Integration:** Works with various inventory systems

### Visual System

- **Custom Blips:** Configure map markers for ammo locations
- **Text Labels:** Display information about ammo boxes
- **Markers:** Visual indicators for pickup areas
- **Color Customization:** Match your server's theme

## Integration & Compatibility

### Framework Integration

- **Standalone Operation:** Works without any framework and is not compatible with inventory systems.

## Troubleshooting

### Common Issues

#### Ammo Boxes Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify configuration file is properly formatted
- Confirm ammo box locations are valid
:::

#### Pickup Issues

:::tip[Pickup troubleshooting]
1. Check cooldown timer settings
2. Verify ammo capacity configuration
3. Test with different ammo box types
4. Review animation settings
:::

#### Visual Issues

:::note[Visual troubleshooting]
1. Check blip and marker settings
2. Verify text label configuration
3. Test with different prop models
4. Review color and positioning settings
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Ammo box not found" | Verify ammo box configuration |
| "Pickup failed" | Check cooldown and capacity settings |
| "Visual not displaying" | Review blip and marker configuration |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and adjust based on server needs
- **Test different ammo box types** to find the best fit
- **Set appropriate cooldown timers** to prevent abuse
- **Configure logical ammo capacities** for balanced gameplay

### Server Integration

- **Coordinate with other systems** for balanced gameplay
- **Place ammo boxes strategically** for realistic distribution
- **Test with your server's inventory system**
- **Review and optimize** settings based on player feedback

### Roleplay Integration

- **Create realistic ammo distribution** for military scenarios
- **Integrate with base building systems** for strategic placement
- **Use for survival and scavenging gameplay**
- **Coordinate with other resource systems**

## Support

### Getting Help

If you're having trouble with Ammo Boxes & Crates:

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
