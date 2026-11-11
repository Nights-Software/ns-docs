---
title: Discord Welcome Lightbox
description: A FiveM resource that displays a welcome screen on player join, showing Discord connection status, user roles, and provides a Discord invite link. Supports multiple Discord servers with role grouping and customizable UI.
slug: resources/discordWelcome
lastUpdated: 2025-10-30
group: scripts
store: https://store.nights-software.com/package/7070740
cover: ../../../assets/covers/discordWelcome.jpg
---

## Overview

Night Discord Welcome is a FiveM resource that displays a welcome screen on player join, showing Discord connection status, user roles, and provides a Discord invite link. Supports multiple Discord servers with role grouping and customizable UI.

### Key Features

- **Automatic Discord Verification** - Checks Discord connection on player spawn
- **Real-Time Role Display** - Shows all player Discord roles organized by server
- **Multi-Guild Support** - Support for multiple Discord servers with custom colors
- **Guild Grouping** - Roles organized by Discord server with colored headers
- **One-Click Copy** - Easy Discord invite link copying with visual feedback
- **User ID Copy** - Click-to-copy Discord User ID with hover highlights
- **Connection Status** - Visual indicators for connected/not connected states
- **Customizable UI** - Fully translatable with custom colors and themes
- **Logo Display** - Showcase partner/sponsor logos in the welcome screen
- **Manual Command** - Check Discord roles anytime with `/discordroles`
- **Tooltip Notifications** - Visual feedback for copy actions
- **Modern Design** - Glass-morphism effects with smooth animations
- **Multi-Language Support** - Easy translation system for all text

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

:::tip[Required Dependency]
Night Discord Welcome requires the free `night_discordapi` to be installed and configured before installation.
:::

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework
- **ESX:** Works alongside ESX framework, no integrations
- **QBCore:** Works alongside QBCore framework, no integrations

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Dependencies

- **night_discordapi** - Required Discord API integration resource
- **FiveM Server** - Requires FiveM server environment
- **Discord Bot** - Discord bot must be configured in night_discordapi

:::note
Night Discord Welcome requires `night_discordapi` to be installed and properly configured with a Discord bot before it can function.
:::

## Installation Process

### Step 1: Prerequisites

1. **Install night_discordapi** - Ensure Discord API resource is installed and configured
2. **Configure Discord Bot** - Set up Discord bot in night_discordapi configuration
3. **Verify Discord API** - Test that Discord API is working correctly

### Step 2: Download Night Discord Welcome

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing
2. **Extract the package** to your local machine
3. **Verify files** - Ensure all folders (client, config, html, server) are present

### Step 3: Transfer to Server

1. **Set FTP to binary mode** - Critical for proper file transfer
2. **Upload 'night_discord_welcome'** folder to your server's resources directory
3. **Verify upload** - Check that all files transferred correctly

### Step 4: Configure Server

1. **Add to server.cfg**:
```ini
ensure night_discordapi
ensure night_discord_welcome
```

2. **Ensure proper order** - `night_discordapi` must load before `night_discord_welcome`
3. **Start your server** and verify both resources load without errors
4. **Check console** for successful startup messages

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_discord_welcome/config.lua` | Main configuration settings |
| `night_discord_welcome/html/style.css` | UI styling and themes |

### Configuration Process

1. **Open VS Code** and navigate to `config.lua`
2. **Read thoroughly** - each setting has explanatory comments
3. **Configure Discord guild names** - Must match night_discordapi config
4. **Set Discord invite link** - Provide your Discord server invite URL
5. **Customize translations** - Edit text strings for your language
6. **Configure guild colors** - Set colors for role grouping headers
7. **Add sponsor logos** - Configure partner/sponsor logo displays
8. **Test frequently** - use F8 console for error checking

### Key Configuration Options

#### Discord Guild Names
```lua
Config.DiscordGuildNames = {
    ["GUILD_ID_1"] = "Your Server Name",
    ["GUILD_ID_2"] = "Partner Server Name",
}
```

#### Discord Invite Link
```lua
Config.DiscordInviteLink = "https://discord.gg/yourinvitecode"
```

#### Guild Colors
```lua
Config.GuildColors = {
    ["GUILD_ID_1"] = "#FF5733",
    ["GUILD_ID_2"] = "#33FF57",
}
```

#### Command Settings
```lua
Config.Command = "discordroles"  -- Command to manually check roles
```

:::tip[Configuration Options]
Customize Discord guild names, invite link, translations, guild colors, sponsor logos, and command settings.
:::

## How It Works

### Welcome Screen System

- **Automatic Display** - Welcome screen appears automatically on player spawn
- **Discord Verification** - Checks player's Discord connection status
- **Role Retrieval** - Fetches all player roles from configured Discord servers
- **Status Indicators** - Shows visual connection status (connected/not connected)

### Role Display System

- **Multi-Guild Support** - Displays roles from multiple Discord servers
- **Guild Grouping** - Roles organized by Discord server with colored headers
- **Real-Time Updates** - Shows current role assignments
- **Visual Organization** - Clean, organized display of all roles

### User Interaction

- **Invite Link Copy** - One-click copy with visual feedback
- **User ID Copy** - Click-to-copy Discord User ID with hover effects
- **Tooltip Notifications** - Visual feedback for all copy actions
- **Manual Command** - `/discordroles` command to check roles anytime

### Customization Features

- **Logo Display** - Showcase partner/sponsor logos
- **Theme Customization** - Custom colors and styling options
- **Multi-Language** - Full translation support
- **Glass-morphism Design** - Modern UI with smooth animations

## Customization Options

### UI Customization

- **Color Themes** - Customize colors for guild headers and UI elements
- **Logo Placement** - Configure partner/sponsor logo display
- **Layout Options** - Adjust welcome screen layout and positioning
- **Animation Settings** - Control UI animations and transitions

### Translation System

- **Full Translation Support** - All text strings are translatable
- **Easy Language Switching** - Simple configuration for different languages
- **Custom Text** - Modify all text strings to match server branding

### Guild Configuration

- **Guild Names** - Customize display names for Discord servers
- **Guild Colors** - Assign colors to each Discord server
- **Role Organization** - Roles automatically grouped by server

## Commands & Keybindings

### Default Commands

| Command | Description |
|---------|-------------|
| `/discordroles` | Manually check Discord roles and display welcome screen |

### Customizing Commands

Edit `config.lua` to change command:

```lua
Config.Command = "discordroles"  -- Change to your preferred command name
```

:::tip[Usage]
Players can use `/discordroles` at any time to view their Discord roles and connection status.
:::

## Troubleshooting

### Common Issues

:::caution[Welcome Screen Not Showing]
- Ensure `night_discordapi` is installed and loaded before `night_discord_welcome`
- Check that the resource is properly added to server.cfg
- Verify the resource name is `night_discord_welcome`
- Check server console for error messages
:::

:::caution[Roles Not Displaying]
- Verify Discord API is working correctly
- Check that Discord bot has proper permissions in Discord server
- Ensure guild IDs in config match night_discordapi configuration
- Verify player has roles in Discord servers
:::

:::caution[Discord Connection Issues]
- Check that Discord bot token is configured in night_discordapi
- Verify Discord bot is properly invited to your Discord server
- Ensure Discord bot has required permissions (manage roles, view channels)
- Check server console for Discord API errors
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Verify Configuration** - Ensure all config settings are correct
- **Test Discord API** - Verify night_discordapi is working independently
- **Check Resource Order** - Ensure night_discordapi loads before night_discord_welcome

## Best Practices

### Configuration Best Practices

- **Match Guild IDs** - Ensure Discord guild IDs match between night_discordapi and night_discord_welcome configs
- **Test Invite Link** - Verify Discord invite link is working and not expired
- **Organize Guilds** - Use descriptive guild names for better organization
- **Set Appropriate Colors** - Choose guild colors that match your server branding

### User Experience

- **Clear Instructions** - Provide players with information about Discord connection requirements
- **Welcome Message** - Customize welcome screen text to match server style
- **Logo Placement** - Use sponsor/partner logos appropriately without overwhelming the UI
- **Translation Quality** - Ensure translations are accurate and match server terminology

### Performance Optimization

- **Resource Order** - Always load night_discordapi before night_discord_welcome
- **Configuration Efficiency** - Only configure guilds and roles you actually use
- **Update Regularly** - Keep both night_discordapi and night_discord_welcome updated
- **Monitor Performance** - Check server console for any performance warnings

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
