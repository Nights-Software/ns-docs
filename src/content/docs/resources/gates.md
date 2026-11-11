---
title: Gates & Bollards
description: A guide to install Gates & Bollards for FiveM
slug: resources/gates
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/6005872
video: https://youtu.be/31YHWB60Cg4
cover: ../../../assets/covers/gates.jpg
---

## Overview

Unlock another opportunity in FiveM! Easily configure gates and bollards at strategic positions, giving you total control over opening times and simultaneous operations. Choose from a variety of object models to personalize your gates and bollards. This synchronized resource ensures a uniform experience for all players. Plus, enjoy the convenience of an intuitive object placement tool. Get creative and tailor your environment to suit your vision. It's your world – configure it your way!

### Key Features

- **Configure infinite gates** - Unlimited gate configurations
- **Bollard creation tool** - Configure locations and distances with single command
- **Gate creation tool** - Easy gate configuration with single command
- **Configurable duration** - Set gate opening/closure timing
- **Inventory item usage** - Framework integration for item requirements
- **Command usage configuration** - Customize command access
- **Multi-Framework Support** - ESX/QB/NS Discord API/Ace Perms/Standalone
- **OneSync Compatible** - Works with Legacy and Infinity
- **Multi-Language Support** - International server support
- **Escrow Protection** - Secure resource protection

## Installation Tutorial

**Follow our step-by-step installation guide:**

<a class="kit-btn" href="https://youtu.be/sOQC541Uico">Installation Tutorial</a>

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
Gates & Bollards works seamlessly with all major FiveM frameworks and can operate standalone.
:::

## Installation Process

### Step 1: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Gates & Bollards" in your granted assets
   - Download the ZIP package

### Step 2: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_gates` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 3: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_gates
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
| `night_gates/config/config.lua` | Main configuration settings |
| `night_gates/client/c_functions.lua` | Client-side functions |
| `night_gates/server/s_functions.lua` | Server-side functions |

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

### Gate Management

- **Infinite Gate Configuration** - Set up unlimited gates across your map
- **Strategic Positioning** - Place gates at key locations for access control
- **Synchronized Operations** - Uniform experience for all players
- **Custom Object Models** - Choose from various gate and bollard models

:::tip[Config snippet generation]
A .txt file is generated in the `night_gates` folder upon using this tool. It contains your config setup for the placed prefab of the gate/bollard(s).
:::

### Bollard System

- **Distance Configuration** - Set spacing between bollards
- **Location Management** - Configure bollard positions strategically
- **Creation Tool** - Use `/createbollards` command for easy setup
- **Flexible Layouts** - Adapt to different road and entrance configurations

:::tip[Config snippet generation]
A .txt file is generated in the `night_gates` folder upon using this tool. It contains your config setup for the placed prefab of the gate/bollard(s).
:::

### Access Control

- **Timing Control** - Configure opening and closing durations
- **Command Integration** - Customize command usage and permissions
- **Framework Integration** - Item-based access for ESX/QBCore
- **Permission System** - Role-based access control

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **ESX** - Full ESX framework integration with inventory items
- **QBCore** - Full QBCore framework integration with inventory items

### Permission Systems

- **Discord API** - Role-based permissions through Discord integration
- **ACE Permissions** - Server-side permission management
- **Framework Permissions** - ESX/QBCore group-based access

:::tip[Inventory Integration]
Configure specific items required to operate gates and bollards in framework mode.
:::

## Troubleshooting

### Common Issues

:::caution[Parsing Errors in F8 Console]
- Ensure files are transferred in binary mode via FTP
- Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg
:::

:::caution[Gates Not Appearing]
- Check server.cfg for proper resource ensure
- Verify configuration file syntax
- Confirm object model names are valid
:::

:::caution[Creation Tool Not Working]
- Ensure you have proper permissions to use creation commands
- Check F8 console for error messages
- Verify command syntax and parameters
:::

### Performance Optimization

- **Limit gate density** - Avoid excessive gates in small areas
- **Optimize object models** - Use appropriate models for your needs
- **Monitor server performance** - Check for any performance impacts

## Best Practices

### Configuration Tips

- **Plan Your Layout** - Map out gate and bollard positions before configuration
- **Use Creation Tools** - Leverage the built-in creation commands for accurate positioning
- **Test Thoroughly** - Verify all gates and bollards work as expected
- **Backup Configurations** - Keep backups of working configurations

### Security Considerations

- **Permission Management** - Regularly review access permissions
- **Command Security** - Restrict creation commands to authorized users
- **Escrow Protection** - Keep resource escrow enabled for security

### Performance Optimization

- **Efficient Positioning** - Place gates strategically to minimize performance impact
- **Object Selection** - Choose appropriate models for your server's performance
- **Resource Management** - Monitor resource usage with large gate systems

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
