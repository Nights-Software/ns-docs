---
title: Airstrikes FiveM
description: Orbital cannons & flying around dropping an airstrike configured your way! You decide how and when you blow stuff up! Almost everything is configurable and adjustable!
slug: resources/airstrikes
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/
video: https://youtu.be/ZaI9E0s9p90
cover: ../../../assets/covers/airstrikes.jpg
---

## Overview

Airstrikes FiveM is a comprehensive aerial combat system that provides both orbital cannon capabilities and traditional airstrike functionality. Whether you want to rain destruction from above or coordinate precise orbital strikes, this resource offers complete control over your aerial warfare experience.

### Key Features

- **Orbital Cannon/AC-130** - Multiple orbital strike options
- **Configurable Weapon Types** - Customize orbital cannon armaments
- **Adjustable Accuracy** - Fine-tune strike precision
- **Multiple Attack Modes** - Automatic Targeting, Manual Targeting, Surveillance
- **Configurable Controls** - Customize speeds and wind effects
- **Background Overlay** - Customizable visual interface
- **Airstrikes from Planes** - Traditional bombing runs
- **Multiple Bomb Types** - Fire, gas, cluster, or normal bombs
- **Adjustable Bomb Count** - Configure strike intensity
- **Multi-Language Support** - International server support
- **Permission System** - ESX/QBCore/Standalone/Ace/Discord API
- **OneSync Compatible** - Works with Legacy and Infinity
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

## System Requirements & Compatibility

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Framework Compatibility

- **ESX:** Full compatibility with ESX framework
- **QBCore:** Full compatibility with QBCore framework
- **Discord API:** Compatible with Discord API integration
- **Ace Permissions:** Compatible with ACE permission system
- **Standalone:** Works without any framework

:::note
Airstrikes FiveM works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Airstrikes" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_airstrikes` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_airstrikes
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 4: Configuration Setup

1. **Navigate to Config File**
   - Open `night_airstrikes/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up orbital cannon settings
   - Configure airstrike parameters
   - Adjust permissions and access controls

## How It Works

### Orbital Cannon System

- **Orbital view:** Orbital Cannon
- **Weapon Configuration:** Customize orbital cannon armaments
- **Accuracy Settings:** Adjust strike precision and targeting
- **Attack Modes:** Choose between Automatic, Manual, and Surveillance targeting

### Airstrike System

- **Plane-Based Strikes:** Fly configurable aircraft for bombing runs
- **Multiple Bomb Types:** Fire, gas, cluster, or normal bombs
- **Adjustable Intensity:** Configure number of bombs per strike
- **Precision Targeting:** Manual control over strike locations

### Control System

- **Configurable Controls:** Customize speeds and wind effects
- **Background Overlay:** Customizable visual interface
- **Permission-Based Access:** Role-based strike authorization
- **Realistic Physics:** Wind effects and environmental factors

## Integration & Compatibility

### Framework Integration

- **ESX Integration:** Compatible with ESX job systems and permissions
- **QBCore Integration:** Compatible with QBCore permissions and groups
- **Discord API:** Integrate with Discord role-based permissions
- **Ace Permissions:** Use ACE permission system for access control
- **Standalone Operation:** Works without any framework

### Military & Combat Systems

- **Military Roleplay:** Perfect for military and defense scenarios
- **Combat Integration:** Coordinate with other combat systems
- **Strategic Operations:** Plan and execute coordinated strikes
- **Training Scenarios:** Create realistic military training environments

## Troubleshooting

### Common Issues

#### Airstrikes Not Working

:::caution[Check these common issues]
- Ensure the resource is properly ensured in server.cfg
- Check server console for error messages
- Verify configuration file is properly formatted
- Confirm permissions are set correctly
:::

#### Orbital Cannon Issues

:::tip[Orbital cannon troubleshooting]
1. Check weapon configuration settings
2. Verify targeting mode settings
3. Test with different attack modes
4. Review accuracy and control settings
:::

#### Permission Issues

:::note[Permission troubleshooting]
1. Verify player has correct permissions
2. Check framework integration settings
3. Test with admin permissions first
4. Review Discord API configuration
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Permission denied" | Check configuration permissions |
| "Orbital cannon failed" | Verify weapon and targeting settings |
| "Airstrike failed" | Check plane and bomb configuration |

## Best Practices

### Configuration Best Practices

- **Start with default settings** and adjust based on server needs
- **Test different weapon types** to find the best balance
- **Set appropriate permissions** to prevent abuse
- **Configure realistic accuracy** for balanced gameplay

### Military Planning

- **Establish strike protocols** for coordinated operations
- **Train operators** on proper airstrike procedures
- **Coordinate with ground forces** for combined operations
- **Test strike capabilities** regularly to ensure functionality

### Roleplay Integration

- **Create military scenarios** that utilize airstrikes
- **Integrate with command structures** and chain of command
- **Use for strategic operations** and mission planning
- **Coordinate with other military systems**

## Support

### Getting Help

If you're having trouble with Airstrikes:

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
