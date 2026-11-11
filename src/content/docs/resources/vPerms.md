---
title: Discord Vehicle Permissions
description: A guide to install Discord vPerms (Vehicle allowlist)! for FiveM
slug: resources/vPerms
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5205763
video: https://youtu.be/sBIKkFpAejA
cover: ../../../assets/covers/vPerms.jpg
---

## Overview

This script allows you to restrict vehicle access by Discord roles. A Discord role will be required to drive the specified vehicle(s) in the configuration. It is possible to set up lists of vehicles per Discord role(s). Drag, drop and configure! Utilized by our free Discord API.

### Key Features

- **Discord Role Integration** - Restrict vehicle access by Discord roles
- **Vehicle Allowlist System** - Set up lists of vehicles per Discord role(s)
- **Free Discord API** - Utilized by our included Discord API resource
- **Drag & Drop Setup** - Simple configuration and deployment
- **Role-Based Access** - Require specific Discord roles for vehicle access
- **Vehicle Lists** - Configure multiple vehicles per role
- **Standalone** - Works independently without framework dependencies
- **Universal Compatibility** - Works with any FiveM server

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_discord_vperms` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_discord_vperms
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** Discord roles and vehicle permissions
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

- **Included:** Discord API resource (included in this package)

:::note
vPerms is designed as a standalone resource that works with any FiveM server configuration and includes the required Discord API.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_discord_vperms/config/config.lua` | Main configuration and Discord settings |
| `night_discord_vperms/client/c_functions.lua` | Client-side functions |
| `night_discord_vperms/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure Discord roles** - set up role-based vehicle permissions
4. **Configure vehicle lists** - assign vehicles to specific Discord roles
5. **Test frequently** - use F8 console for error checking

:::tip[Discord Configuration]
Set up Discord roles and vehicle permissions with drag & drop simplicity.
:::

## How It Works

### Permission System

- **Discord Role Verification** - Check player's Discord roles for vehicle access
- **Vehicle Allowlist** - Configure which vehicles each role can access
- **Real-Time Validation** - Verify permissions when players enter vehicles
- **Access Control** - Restrict vehicle access based on Discord roles

### Vehicle Management

- **Role-Based Lists** - Set up lists of vehicles per Discord role(s)
- **Multiple Roles** - Support for multiple Discord roles per vehicle
- **Vehicle Categories** - Organize vehicles by role requirements
- **Permission Hierarchy** - Manage different access levels

### Configuration Options

- **Discord Integration** - Configure Discord API settings and webhooks
- **Role Assignment** - Assign Discord roles to vehicle access
- **Vehicle Lists** - Create lists of vehicles for each role
- **Access Control** - Set up permission requirements and restrictions
- **Debug Settings** - Enable debugging for troubleshooting

### Discord API Integration

- **Free Discord API** - Utilized by our included Discord API resource
- **Role Verification** - Real-time Discord role checking
- **Webhook Integration** - Discord notifications and logging
- **API Management** - Handle Discord API connections and authentication

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies

### Discord Integration

- **Role-Based Access** - Restrict vehicle access by Discord roles
- **Real-Time Verification** - Check Discord roles when accessing vehicles
- **Webhook Notifications** - Discord notifications for vehicle access
- **API Management** - Handle Discord API connections and authentication

### Script Integration

- **Vehicle Management** - Integrate with existing vehicle systems
- **Permission Systems** - Connect with server permission management
- **Access Control** - Enhance vehicle security and access control
- **Custom Scripts** - Perfect foundation for building role-based systems

### Server Integration

- **Performance Optimized** - Efficient permission checking and validation
- **Easy Integration** - Simple setup and configuration

:::tip[Vehicle Security]
vPerms enhances vehicle security with Discord role-based access control.
:::

## Troubleshooting

### Common Issues

:::caution[Being Kicked from Vehicle]
- Check if you have the required Discord roles
- Verify Discord API is working (check config and server console)
- Ensure vehicle model names are correctly defined
:::

:::caution[Discord API Issues]
- Check Discord API configuration in config.lua
- Verify Discord bot permissions and webhook settings
- Ensure Discord API resource is properly started
:::

:::caution[Vehicle Model Names]
- Turn on debug in config.lua to see actual vehicle names
- Check F8 console logs for vehicle model names
- Fix vehicles.meta file if vehicle names are incorrect
:::

:::caution[Configuration Errors]
- Check the config.lua file for syntax errors
- Verify Discord role and vehicle configurations
- Test with default settings first
:::

### Debugging Tips

- **Enable Debug Mode** - Turn on debug in config.lua for detailed logging
- **Check F8 Console** - Look for vehicle model names and error messages
- **Verify Discord Roles** - Ensure roles are correctly assigned
- **Test Vehicle Access** - Try accessing vehicles with proper roles
- **Check File Permissions** - Ensure all files are accessible

:::tip[Debug Mode]
Use debug mode to identify vehicle model names and troubleshoot permission issues.
:::

## Best Practices

### Discord Role Management

- **Clear Role Structure** - Design logical Discord role hierarchy
- **Role Permissions** - Assign appropriate vehicle access to roles
- **Role Verification** - Regularly verify Discord role assignments
- **Access Control** - Implement proper role-based access control

### Vehicle Configuration

- **Vehicle Lists** - Organize vehicles by role requirements
- **Model Names** - Use correct vehicle model names in configuration
- **Testing** - Thoroughly test vehicle access with different roles
- **Documentation** - Document vehicle-role assignments

### Discord Integration

- **API Configuration** - Properly configure Discord API settings
- **Webhook Setup** - Set up Discord webhooks for notifications
- **Bot Permissions** - Ensure Discord bot has necessary permissions
- **API Monitoring** - Monitor Discord API connection status

### Security Best Practices

- **Role Verification** - Implement secure Discord role checking
- **Access Logging** - Log vehicle access attempts and permissions
- **Error Handling** - Handle Discord API failures gracefully
- **User Communication** - Provide clear feedback for access denials

## Installation Tutorial

**Watch the installation tutorial:**

<a class="kit-btn" href="https://youtu.be/DhWaT_NqNiM?si=OXB3ZJ5G1lHvVewC">Installation Tutorial</a>

:::tip[Visual Guide]
Follow the video tutorial for step-by-step installation guidance.
:::

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
