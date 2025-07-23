---
layout: default
title: "Discord Player Names"
nav_order: 31
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discord_playernames.png" alt="Discord Playernames for FiveM" draggable="false">

# Discord Playernames for FiveM
{: .no_toc}

Configure playernames above peoples heads as well as the range for when it becomes visible. Add or remove displaying their ID & PING. All the way configurable to your liking.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Discord Playernames is a flexible player identification system that allows you to customize how player names are displayed above players' heads. With support for Discord names, default names, or custom names, you can create a personalized player identification experience that matches your server's needs.

### **Key Features**
{: .no_toc }

- ✅ **Flexible Name Display** - Configure Discord, default, or custom player names
- ✅ **Configurable Range** - Set visibility range for player names
- ✅ **ID & Ping Display** - Add or remove player ID and ping information
- ✅ **Toggle Functionality** - Allow players to toggle name display
- ✅ **OneSync Compatible** - Works with OneSync synchronization
- ✅ **Language Support** - Multi-language compatibility
- ✅ **Discord API Integration** - Requires Discord API (included)
- ✅ **Escrow Protection** - Secure resource protection
- ✅ **Standalone** - No framework dependencies required

---

## 🎥 Video Showcase

**Watch Discord Playernames in action:**

[Video Showcase](https://youtu.be/GV8QNvCHAHs){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Discord Playernames:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5357523){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Download ZIP Package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to server.cfg (ensure script)
> 6. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

{: .note }
> **CFX Portal Delay:** After purchasing, it may take a few minutes for the resource to appear in the CFX Portal.

---

## 🔧 System Requirements & Compatibility

### **Dependencies**
{: .no_toc }

- **✅ Discord API** - Required for Discord integration (included)
- **✅ OneSync** - Compatible with OneSync synchronization
- **✅ Universal** - Works with any FiveM server setup

{: .tip }
> **Note:** The Discord API is included in the package and provides Discord name integration.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Playernames" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_discord_playernames` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_discord_playernames
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_discord_playernames/config/config.lua`
   - Review all configuration options

2. **Configure Player Names**
   - Set up name display preferences (Discord, default, or custom)
   - Configure visibility range settings
   - Adjust ID and ping display options
   - Set up toggle functionality

{: .tip }
> **Configuration Help:** The config file contains green explanatory text and variables for you to edit.

---

## 🎮 How It Works

### **Name Display System**
{: .no_toc }

- **Flexible Name Options:** Choose between Discord names, default names, or custom names
- **Configurable Range:** Set the distance at which player names become visible
- **Dynamic Updates:** Real-time name display updates as players move
- **Customizable Format:** Configure how names are displayed above players

### **Information Display**
{: .no_toc }

- **Player ID Display:** Show or hide player IDs above heads
- **Ping Information:** Display player ping values
- **Toggle Functionality:** Allow players to turn name display on/off
- **Configurable Elements:** Choose which information to display

### **Discord Integration**
{: .no_toc }

- **Discord Name Support:** Use Discord usernames for player identification
- **Seamless Integration:** Automatic Discord name synchronization
- **Fallback Options:** Use default or custom names when Discord names unavailable
- **Consistent Display:** Maintain consistent name formatting

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Standalone Operation:** Works without any framework
- **Discord API Integration:** Seamless Discord name integration
- **OneSync Compatibility:** Works with OneSync synchronization
- **Universal Compatibility:** Works with all FiveM server setups

### **Server Applications**
{: .no_toc }

- **Roleplay Servers:** Clear player identification for roleplay scenarios
- **Community Servers:** Easy player recognition and interaction
- **Gaming Communities:** Enhanced player visibility and communication
- **Administrative Teams:** Better player monitoring and management

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Names Not Displaying**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify name display configuration settings
> - Confirm Discord API integration is working

#### **Discord Names Not Working**
{: .no_toc }

{: .tip }
> **Discord troubleshooting:**
> 1. Check Discord API configuration
> 2. Verify Discord bot permissions
> 3. Test with different name display options
> 4. Review Discord integration settings

#### **Range Issues**
{: .no_toc }

{: .note }
> **Range troubleshooting:**
> 1. Check visibility range configuration
> 2. Verify distance settings
> 3. Test with different range values
> 4. Review OneSync compatibility settings

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Names not displaying" | Verify name display configuration |
| "Discord API error" | Check Discord API integration settings |
| "Range not working" | Review visibility range configuration |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Start with default settings** and customize to your needs
- **Test different name display options** to find the best fit
- **Configure appropriate visibility ranges** for your server size
- **Use toggle functionality** to give players control

### **Server Integration**
{: .no_toc }

- **Coordinate with Discord server** for consistent naming
- **Test name display** with different player types
- **Monitor performance** with large player counts
- **Review and optimize** settings based on player feedback

### **Player Experience**
{: .no_toc }

- **Use clear name formats** for easy identification
- **Provide toggle options** for player preference
- **Balance information display** to avoid clutter
- **Test with different server scenarios**

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Discord Playernames:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Join our Discord** for community support

### **Community Support**
{: .no_toc }

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
