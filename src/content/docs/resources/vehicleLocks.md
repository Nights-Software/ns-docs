---
title: Vehicle Locks
description: A guide to install Vehicle Locks for FiveM
slug: resources/vehicleLocks
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com
cover: ../../../assets/covers/vehicleLocks.jpg
---

## Overview

This script allows you to lock and unlock vehicles with enhanced functionality. It's designed to be built further upon and serves as an excellent learning resource for developers. Enjoy the flexibility and customization options!

### Key Features

- **Vehicle Locking System** - Lock and unlock vehicles with ease
- **Developer Friendly** - Built for further development and customization
- **Learning Resource** - Excellent codebase for developers to learn from
- **Sound Integration** - Optional sound effects for enhanced experience
- **Customizable** - Easy to modify and extend functionality
- **Lightweight** - Minimal performance impact
- **Universal Compatibility** - Works with any FiveM server

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_vehicle_locks` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_vehicle_locks
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** lock settings and preferences
3. **Test** the resource functionality

## Important Pre-Installation Notes

:::caution[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:
1. Download ZIP Package from CFX Portal
2. Unpack in a folder on your local machine
3. Set your File Transfer Protocol (FTP) type to **binary**
4. Drag files from local machine to server resources folder
5. Add to server.cfg (ensure script)
6. Boot up the server
:::

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Dependencies

- **Optional:** PlayCustomSounds resource (by LondonStudios) for sound integrations

:::note
Vehicle Locks is designed to work with any FiveM server configuration and includes optional sound integration.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_vehicle_locks/config/config.lua` | Main configuration and lock settings |
| `night_vehicle_locks/client/c_functions.lua` | Client-side functions |
| `night_vehicle_locks/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure lock settings** - customize locking behavior and preferences
4. **Test frequently** - use F8 console for error checking

:::tip[Lock Configuration]
Customize vehicle locking behavior and integrate with your server's systems.
:::

## How It Works

### Lock System

- **Lock/Unlock Vehicles** - Simple and intuitive vehicle locking mechanism
- **Key Management** - Handle vehicle keys and access control
- **State Management** - Track vehicle lock status across the server
- **Player Interaction** - Easy-to-use locking interface

### Configuration Options

- **Lock Behavior** - Customize how locking/unlocking works
- **Key System** - Configure vehicle key requirements
- **Sound Effects** - Optional sound integration for enhanced experience
- **Visual Feedback** - Customize lock/unlock animations and effects
- **Integration Settings** - Connect with other vehicle systems

### Developer Features

- **Extensible Codebase** - Built for further development and customization
- **Learning Resource** - Excellent code structure for developers to learn from
- **API Access** - Developer-friendly functions for custom implementations
- **Event System** - Hook into lock events for custom functionality
- **Modular Design** - Easy to extend and modify

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies
- **Universal Integration** - Compatible with any FiveM server setup

### Script Integration

- **Vehicle Management** - Integrate with existing vehicle systems
- **Key Systems** - Connect with vehicle key management scripts
- **Security Systems** - Enhance vehicle security and access control
- **Custom Scripts** - Perfect foundation for building custom vehicle systems

### Sound Integration

- **PlayCustomSounds** - Optional integration with LondonStudios sound resource
- **Custom Audio** - Add realistic lock/unlock sound effects
- **Audio Customization** - Configure sound preferences and volumes

### Server Integration

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient lock management and operation
- **Easy Integration** - Simple setup and configuration

:::tip[Vehicle Security]
Vehicle Locks enhances vehicle security and provides a foundation for custom vehicle management systems.
:::

## Troubleshooting

### Common Issues

:::caution[Lock Not Working]
- Ensure the resource is properly started in server.cfg
- Check that the resource name is `night_vehicle_locks`
- Verify lock configuration in config.lua
:::

:::caution[Sound Not Playing]
- Check if PlayCustomSounds resource is installed (optional dependency)
- Verify sound file paths and configurations
- Ensure audio settings are properly configured
:::

:::caution[Configuration Errors]
- Check the config.lua file for syntax errors
- Verify lock settings are correctly configured
- Test with default settings first
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Test Lock Functionality** - Verify basic lock/unlock operations
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible

## Best Practices

### Lock System Design

- **User-Friendly Interface** - Ensure locking/unlocking is intuitive
- **Consistent Behavior** - Maintain consistent lock behavior across vehicles
- **Security Considerations** - Implement proper access control
- **Performance Optimization** - Monitor lock system performance

### Configuration Tips

- **Key Management** - Design logical key systems for vehicle access
- **Sound Integration** - Use appropriate sound effects for lock/unlock actions
- **Visual Feedback** - Provide clear visual indicators for lock status
- **Integration Planning** - Plan integration with other vehicle systems

### Development Best Practices

- **Code Structure** - Use the provided codebase as a learning resource
> - **Extensibility** - Build upon the existing functionality
- **Documentation** - Document any custom modifications
- **Testing** - Thoroughly test all lock functionality

### Integration Best Practices

- **Vehicle Systems** - Integrate with existing vehicle management scripts
- **Security Systems** - Connect with server security and access control
- **User Experience** - Ensure smooth and intuitive lock operation
- **Performance Monitoring** - Monitor resource performance and optimization

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
