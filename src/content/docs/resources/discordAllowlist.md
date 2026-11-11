---
title: Discord Allowlist
description: Drag, drop and configure! Utilized by our free Discord API. This script allows you to define member roles which will be able and unable to join your server. Easy installation and configuration.
slug: resources/discordAllowlist
lastUpdated: 2025-07-22
group: scripts
store: https://store.nights-software.com/package/5035752
video: https://youtu.be/y_TFbXMbmTk
cover: ../../../assets/covers/discordAllowlist.jpg
---

## Overview

Discord Allowlist is a streamlined access control system that integrates with your Discord server to manage who can join your FiveM server. By utilizing Discord roles, you can easily define which members are allowed or blocked from accessing your server, providing a simple yet powerful way to control server access.

### Key Features

- **Drag, Drop & Configure** - Simple installation and setup process
- **Discord API Integration** - Utilizes our free Discord API
- **Role-Based Access Control** - Define member roles for allowlist/blocklist
- **Easy Configuration** - Simple setup and management
- **Flexible Permissions** - Allow or block specific Discord roles
- **Seamless Integration** - Works directly with Discord server roles

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
You must install and configure night_discordapi first before installing Discord Allowlist.
:::

## Installation Process

### Step 1: Install Discord API (Required)

1. **Install night_discordapi first**
   - Download and install the Discord API resource
   - Configure the Discord API resource completely
   - Ensure it's working properly before proceeding

:::caution[Prerequisite]
Discord Allowlist requires night_discordapi to be installed and configured first.
:::

### Step 2: Download the Resource

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Allowlist" in your granted assets
   - Download the ZIP package

### Step 3: Extract and Transfer

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_discordallowlist` folder to your server's `resources` directory
   - Maintain the original folder structure

### Step 4: Server Configuration

Add the following line to your `server.cfg` file:

```ini
ensure night_discordallowlist
```

:::tip[Server Restart]
After adding the ensure line, restart your server for the resource to load properly.
:::

### Step 5: Configuration Setup

1. **Navigate to Config File**
   - Open `night_discordallowlist/config/config.lua`
   - Review all configuration options

2. **Configure Role Permissions**
   - Set the roles you desire allowlisted or blacklisted
   - Configure Discord role integration
   - Adjust access control settings

:::tip[Configuration Help]
The config file contains detailed explanations for all variables.
:::

## How It Works

### Access Control System

- **Role-Based Permissions:** Use Discord roles to control server access
- **Allowlist/Blacklist:** Define which roles can or cannot join
- **Real-Time Verification:** Check Discord roles when players connect
- **Automatic Enforcement:** Block or allow access based on role status

### Discord Integration

- **Free Discord API:** Utilizes our included Discord API
- **Seamless Role Checking:** Verify Discord roles automatically
- **Easy Management:** Control access through Discord role management
- **Flexible Configuration:** Allow or block specific role types

### Server Protection

- **Access Control:** Prevent unauthorized players from joining
- **Role Verification:** Ensure only approved Discord members can access
- **Easy Administration:** Manage access through Discord role system
- **Reliable Security:** Consistent role-based access enforcement

## Integration & Compatibility

### Framework Integration

- **Discord API Integration:** Seamless role-based access control
- **Universal Compatibility:** Works with all FiveM server setups
- **Role-Based Security:** Integrates with Discord server roles

### Server Applications

- **Private Communities:** Control access to exclusive servers
- **Whitelist Servers:** Ensure only approved members can join
> - **Role-Based Access:** Different access levels for different roles
- **Security-Focused Servers:** Enhanced protection against unauthorized access

## Troubleshooting

### Common Issues

#### Discord API Not Working

:::caution[Check these common issues]
- Ensure night_discordapi is installed and configured first
- Verify Discord API credentials are properly set up
- Check Discord bot permissions and roles
- Confirm Discord server integration settings
:::

#### Role Permissions Not Working

:::tip[Role troubleshooting]
1. Check Discord role configuration in config file
2. Verify Discord bot has proper permissions
3. Test with different Discord roles
4. Review allowlist/blacklist settings
:::

#### Players Being Blocked

:::note[Access troubleshooting]
1. Check player's Discord role assignments
2. Verify role permissions in configuration
3. Test allowlist and blacklist settings
4. Review Discord server role hierarchy
:::

### Error Messages

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Discord API not found" | Install and configure night_discordapi first |
| "Role verification failed" | Check Discord bot permissions and roles |
| "Access denied" | Verify role configuration in allowlist/blacklist |

## Best Practices

### Configuration Best Practices

- **Install Discord API first** and ensure it's working properly
- **Test role permissions** with different Discord roles
- **Configure clear allowlist/blacklist** rules for your server
- **Regularly review role assignments** for security

### Server Integration

- **Coordinate with Discord server** for role management
- **Set up clear role hierarchy** for access control
- **Test access permissions** with different user types
- **Monitor access logs** for security and troubleshooting

### Security Management

- **Use specific roles** for different access levels
- **Regularly update role permissions** as needed
- **Monitor unauthorized access attempts**
- **Keep Discord API credentials secure**

## Support

### Getting Help

If you're having trouble with Discord Allowlist:

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
