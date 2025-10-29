---
layout: default
title: "Discord Welcome Lightbox"
nav_order: 20
has_children: false
has_toc: true
last_modified_date: "2025-10-30 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discord_welcome.png" alt="Discord Welcome" draggable="false">

# Night Discord Welcome for FiveM
{: .no_toc}

A FiveM resource that displays a welcome screen on player join, showing Discord connection status, user roles, and provides a Discord invite link. Supports multiple Discord servers with role grouping and customizable UI.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Night Discord Welcome is a FiveM resource that displays a welcome screen on player join, showing Discord connection status, user roles, and provides a Discord invite link. Supports multiple Discord servers with role grouping and customizable UI.

### **Key Features**
{: .no_toc }

- ✅ **Automatic Discord Verification** - Checks Discord connection on player spawn
- ✅ **Real-Time Role Display** - Shows all player Discord roles organized by server
- ✅ **Multi-Guild Support** - Support for multiple Discord servers with custom colors
- ✅ **Guild Grouping** - Roles organized by Discord server with colored headers
- ✅ **One-Click Copy** - Easy Discord invite link copying with visual feedback
- ✅ **User ID Copy** - Click-to-copy Discord User ID with hover highlights
- ✅ **Connection Status** - Visual indicators for connected/not connected states
- ✅ **Customizable UI** - Fully translatable with custom colors and themes
- ✅ **Logo Display** - Showcase partner/sponsor logos in the welcome screen
- ✅ **Manual Command** - Check Discord roles anytime with `/discordroles`
- ✅ **Tooltip Notifications** - Visual feedback for copy actions
- ✅ **Modern Design** - Glass-morphism effects with smooth animations
- ✅ **Multi-Language Support** - Easy translation system for all text

---

## 🛒 Purchase Information

**Get Night Discord Welcome:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/7070740){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Download ZIP Package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set your File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to server.cfg (ensure script)
> 6. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

{: .tip }
> **Required Dependency:** Night Discord Welcome requires the free `night_discordapi` to be installed and configured before installation.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ ESX:** Works alongside ESX framework, no integrations
- **✅ QBCore:** Works alongside QBCore framework, no integrations

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Dependencies**
{: .no_toc }

- **✅ night_discordapi** - Required Discord API integration resource
- **✅ FiveM Server** - Requires FiveM server environment
- **✅ Discord Bot** - Discord bot must be configured in night_discordapi

{: .tip }
> **Note:** Night Discord Welcome requires `night_discordapi` to be installed and properly configured with a Discord bot before it can function.

---

## 📦 Installation Process

### **Step 1: Prerequisites**
{: .no_toc }

1. **Install night_discordapi** - Ensure Discord API resource is installed and configured
2. **Configure Discord Bot** - Set up Discord bot in night_discordapi configuration
3. **Verify Discord API** - Test that Discord API is working correctly

### **Step 2: Download Night Discord Welcome**
{: .no_toc }

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing
2. **Extract the package** to your local machine
3. **Verify files** - Ensure all folders (client, config, html, server) are present

### **Step 3: Transfer to Server**
{: .no_toc }

1. **Set FTP to binary mode** - Critical for proper file transfer
2. **Upload 'night_discord_welcome'** folder to your server's resources directory
3. **Verify upload** - Check that all files transferred correctly

### **Step 4: Configure Server**
{: .no_toc }

1. **Add to server.cfg**:
```conf
ensure night_discordapi
ensure night_discord_welcome
```

2. **Ensure proper order** - `night_discordapi` must load before `night_discord_welcome`
3. **Start your server** and verify both resources load without errors
4. **Check console** for successful startup messages

---

## ⚙️ Configuration Setup

### **Required Tools**
{: .no_toc }

{: .tip }
> **Visual Studio Code:** We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `night_discord_welcome/config.lua` | Main configuration settings |
| `night_discord_welcome/html/style.css` | UI styling and themes |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to `config.lua`
2. **Read thoroughly** - each setting has explanatory comments
3. **Configure Discord guild names** - Must match night_discordapi config
4. **Set Discord invite link** - Provide your Discord server invite URL
5. **Customize translations** - Edit text strings for your language
6. **Configure guild colors** - Set colors for role grouping headers
7. **Add sponsor logos** - Configure partner/sponsor logo displays
8. **Test frequently** - use F8 console for error checking

### **Key Configuration Options**
{: .no_toc }

#### **Discord Guild Names**
```lua
Config.DiscordGuildNames = {
    ["GUILD_ID_1"] = "Your Server Name",
    ["GUILD_ID_2"] = "Partner Server Name",
}
```

#### **Discord Invite Link**
```lua
Config.DiscordInviteLink = "https://discord.gg/yourinvitecode"
```

#### **Guild Colors**
```lua
Config.GuildColors = {
    ["GUILD_ID_1"] = "#FF5733",
    ["GUILD_ID_2"] = "#33FF57",
}
```

#### **Command Settings**
```lua
Config.Command = "discordroles"  -- Command to manually check roles
```

{: .tip }
> **Configuration Options:** Customize Discord guild names, invite link, translations, guild colors, sponsor logos, and command settings.

---

## 🎮 How It Works

### **Welcome Screen System**
{: .no_toc }

- **Automatic Display** - Welcome screen appears automatically on player spawn
- **Discord Verification** - Checks player's Discord connection status
- **Role Retrieval** - Fetches all player roles from configured Discord servers
- **Status Indicators** - Shows visual connection status (connected/not connected)

### **Role Display System**
{: .no_toc }

- **Multi-Guild Support** - Displays roles from multiple Discord servers
- **Guild Grouping** - Roles organized by Discord server with colored headers
- **Real-Time Updates** - Shows current role assignments
- **Visual Organization** - Clean, organized display of all roles

### **User Interaction**
{: .no_toc }

- **Invite Link Copy** - One-click copy with visual feedback
- **User ID Copy** - Click-to-copy Discord User ID with hover effects
- **Tooltip Notifications** - Visual feedback for all copy actions
- **Manual Command** - `/discordroles` command to check roles anytime

### **Customization Features**
{: .no_toc }

- **Logo Display** - Showcase partner/sponsor logos
- **Theme Customization** - Custom colors and styling options
- **Multi-Language** - Full translation support
- **Glass-morphism Design** - Modern UI with smooth animations

---

## 🎨 Customization Options

### **UI Customization**
{: .no_toc }

- **Color Themes** - Customize colors for guild headers and UI elements
- **Logo Placement** - Configure partner/sponsor logo display
- **Layout Options** - Adjust welcome screen layout and positioning
- **Animation Settings** - Control UI animations and transitions

### **Translation System**
{: .no_toc }

- **Full Translation Support** - All text strings are translatable
- **Easy Language Switching** - Simple configuration for different languages
- **Custom Text** - Modify all text strings to match server branding

### **Guild Configuration**
{: .no_toc }

- **Guild Names** - Customize display names for Discord servers
- **Guild Colors** - Assign colors to each Discord server
- **Role Organization** - Roles automatically grouped by server

---

## 📊 Commands & Keybindings

### **Default Commands**
{: .no_toc }

| Command | Description |
|---------|-------------|
| `/discordroles` | Manually check Discord roles and display welcome screen |

### **Customizing Commands**
{: .no_toc }

Edit `config.lua` to change command:

```lua
Config.Command = "discordroles"  -- Change to your preferred command name
```

{: .tip }
> **Usage:** Players can use `/discordroles` at any time to view their Discord roles and connection status.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Welcome Screen Not Showing**
> - Ensure `night_discordapi` is installed and loaded before `night_discord_welcome`
> - Check that the resource is properly added to server.cfg
> - Verify the resource name is `night_discord_welcome`
> - Check server console for error messages

{: .warning }
> **Roles Not Displaying**
> - Verify Discord API is working correctly
> - Check that Discord bot has proper permissions in Discord server
> - Ensure guild IDs in config match night_discordapi configuration
> - Verify player has roles in Discord servers

{: .warning }
> **Discord Connection Issues**
> - Check that Discord bot token is configured in night_discordapi
> - Verify Discord bot is properly invited to your Discord server
> - Ensure Discord bot has required permissions (manage roles, view channels)
> - Check server console for Discord API errors

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Verify Configuration** - Ensure all config settings are correct
- **Test Discord API** - Verify night_discordapi is working independently
- **Check Resource Order** - Ensure night_discordapi loads before night_discord_welcome

---

## 💡 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Match Guild IDs** - Ensure Discord guild IDs match between night_discordapi and night_discord_welcome configs
- **Test Invite Link** - Verify Discord invite link is working and not expired
- **Organize Guilds** - Use descriptive guild names for better organization
- **Set Appropriate Colors** - Choose guild colors that match your server branding

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide players with information about Discord connection requirements
- **Welcome Message** - Customize welcome screen text to match server style
- **Logo Placement** - Use sponsor/partner logos appropriately without overwhelming the UI
- **Translation Quality** - Ensure translations are accurate and match server terminology

### **Performance Optimization**
{: .no_toc }

- **Resource Order** - Always load night_discordapi before night_discord_welcome
- **Configuration Efficiency** - Only configure guilds and roles you actually use
- **Update Regularly** - Keep both night_discordapi and night_discord_welcome updated
- **Monitor Performance** - Check server console for any performance warnings

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}