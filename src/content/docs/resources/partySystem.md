---
title: Party System
description: A guide to install Party System for FiveM
slug: resources/partySystem
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5472349
video: https://youtu.be/oKULW6k73Es
cover: ../../../assets/covers/partySystem.jpg
---

## Overview

The Party System for FiveM allows you to team up with your friends and companions. Being in a party has the advantage of being able to see, find and protect each other. This party system offers loads of configurable options for the server owner to set up: Party menu and display colors, blip settings and language settings.

### Key Features

- **Team Formation** - Create and join parties with friends
- **Party Tracking** - Find and locate your companions
- **Friendly Fire Protection** - Automatic protection for party members
- **Configurable Menu Colors** - Customize party interface appearance
- **Configurable Party Settings** - Adjust party behavior and rules
- **Configurable Blips** - Customize map markers and their settings
- **User-Friendly Interface** - Easy menu browsing and party display
- **Integrated Notifications** - Basic notification system
- **Language Support** - Multi-language configuration
- **Escrow Protection** - Secure resource protection
- **Standalone** - Works independently without framework dependencies
- **OneSync Infinity Compatible** - Optimized for modern FiveM servers

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

:::caution[OneSync Infinity Required]
This resource is specifically designed for OneSync Infinity and requires it to function properly.
:::

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework

### OneSync Compatibility

- **✅ OneSync Infinity:** **Required** - Specifically designed for OneSync Infinity
- **❌ OneSync Legacy:** Not compatible

:::note
Party System is designed specifically for OneSync Infinity and provides enhanced party functionality for modern FiveM servers.
:::

## Installation Process

### Step 1: Download Resource

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

### Step 2: Install Resource

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_party_system` (do not rename)

### Step 3: Server Configuration

Add the resource to your `server.cfg`:

```ini
ensure night_party_system
```

### Step 4: Configure Settings

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** all settings to your liking
3. **Test** the resource functionality

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_party_system/config/config.lua` | Main configuration settings |
| `night_party_system/client/c_functions.lua` | Client-side functions |
| `night_party_system/server/s_functions.lua` | Server-side functions |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments in green text
3. **Configure settings** - customize menu colors, party settings, and blips
4. **Test frequently** - use F8 console for error checking

:::tip[Configuration Notes]
You will notice there is explanation in green text and variables for you to edit in the configuration file.
:::

## How It Works

### Party Formation

- **Create Parties** - Players can create new parties
- **Join Parties** - Invite friends to join existing parties
- **Party Management** - Easy party administration and control

### Party Features

- **Companion Tracking** - Find and locate your party members
- **Friendly Fire Protection** - Automatic protection between party members
- **Party Display** - User-friendly party interface
- **Integrated Notifications** - Basic notification system for party events

### Configuration Options

- **Menu Colors** - Customize the appearance of party menus
- **Party Settings** - Configure party behavior and rules
- **Blip Settings** - Customize map markers for party members
- **Language Settings** - Multi-language support for international servers

### User Experience

- **User-Friendly Interface** - Easy menu browsing and navigation
- **Intuitive Controls** - Simple party management
- **Visual Feedback** - Clear party status and member information
- **Seamless Integration** - Works naturally with FiveM gameplay

## Integration & Compatibility

### Framework Support

- **Standalone** - Works independently without framework dependencies

### OneSync Integration

- **OneSync Infinity** - **Required** for proper functionality
- **Enhanced Synchronization** - Optimized party member tracking
- **Modern FiveM Features** - Leverages latest FiveM capabilities

### Server Integration

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Lightweight and efficient
- **Easy Integration** - Simple setup and configuration

:::tip[OneSync Infinity]
This resource is specifically designed for OneSync Infinity and provides enhanced party functionality for modern FiveM servers.
:::

## Troubleshooting

### Common Issues

:::caution[Resource Not Starting]
- Ensure the resource is properly added to server.cfg
- Check that the resource name is `night_party_system`
- Verify the resource started without errors in console
:::

:::caution[OneSync Compatibility Issues]
- Ensure your server is running OneSync Infinity
- Check OneSync settings in server.cfg
- Verify OneSync Infinity is properly configured
:::

:::caution[Party Features Not Working]
- Check F8 console for any error messages
- Verify configuration settings in config.lua
- Test with default settings first
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Verify OneSync Infinity** - Ensure server is running OneSync Infinity
- **Test Party Creation** - Try creating a party to test functionality
- **Check Configuration** - Verify all config settings are correct

## Best Practices

### Party Configuration

- **Menu Colors** - Choose colors that match your server's theme
- **Party Settings** - Configure appropriate party size limits
- **Blip Settings** - Set up clear and visible party member markers
- **Language Settings** - Configure for your community's language

### Performance Optimization

- **OneSync Infinity** - Ensure proper OneSync Infinity configuration
- **Party Size Limits** - Set reasonable party size limits
- **Blip Optimization** - Configure blip settings for performance
- **Regular Testing** - Test party functionality regularly

### User Experience

- **Clear Instructions** - Provide users with party system guidelines
- **Intuitive Interface** - Ensure party menus are easy to navigate
- **Visual Feedback** - Make party status clearly visible
- **Help Documentation** - Create server-specific party guides

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
