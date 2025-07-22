---
layout: default
title: "Discord Player List"
nav_order: 9
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discord_playerlist.png" alt="Discord Playerlist for FiveM" draggable="false">

# Discord Playerlist for FiveM
{: .no_toc }

Display your players by Discord roles and customize buttons per role!

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Discord Playerlist is a dynamic player management system that integrates with your Discord server to display players organized by their Discord roles. With customizable buttons for each role, you can create a comprehensive and organized player list that enhances your server's community management.

### **Key Features**
{: .no_toc }

- ✅ **Discord Role Integration** - Display players organized by Discord roles
- ✅ **Customizable Buttons** - Configure buttons per role for different actions
- ✅ **Real-Time Updates** - Live player list updates based on Discord roles
- ✅ **Easy Configuration** - Simple setup and management
- ✅ **Role-Based Organization** - Clear player categorization by Discord roles
- ✅ **Custom Title Image** - Replace playerlist title image with your own link

---

## 🎥 Video Showcase

**Watch Discord Playerlist in action:**

[Video Showcase](https://youtu.be/y_TFbXMbmTk){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Discord Playerlist:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5035743){: .btn .btn-blue}

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

- **✅ Discord API** - Required for Discord integration
- **✅ Universal** - Works with any FiveM server setup
- **✅ Role-Based** - Integrates with Discord server roles

{: .tip }
> **Note:** You must install and configure night_discordapi first before installing Discord Playerlist.

---

## 📦 Installation Process

### **Step 1: Install Discord API (Required)**
{: .no_toc }

1. **Install night_discordapi first**
   - Download and install the Discord API resource
   - Configure the Discord API resource completely
   - Ensure it's working properly before proceeding

{: .warning }
> **Prerequisite:** Discord Playerlist requires night_discordapi to be installed and configured first.

### **Step 2: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Playerlist" in your granted assets
   - Download the ZIP package

### **Step 3: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_playerlist` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 4: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```cfg
ensure night_playerlist
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 5: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_playerlist/config/config.lua`
   - Review all configuration options

2. **Configure Playerlist Settings**
   - Set up Discord role integration
   - Configure customizable buttons per role
   - Insert a link to replace your playerlist title image
   - Adjust role-based organization settings

{: .tip }
> **Configuration Help:** The config file contains detailed explanations for all variables.

---

## 🎮 How It Works

### **Player Organization System**
{: .no_toc }

- **Discord Role Integration:** Display players organized by their Discord roles
- **Real-Time Updates:** Live updates as players join, leave, or change roles
- **Role-Based Categorization:** Clear organization of players by Discord roles
- **Dynamic Display:** Automatic updates based on Discord role changes

### **Customizable Interface**
{: .no_toc }

- **Role-Based Buttons:** Configure different buttons for each Discord role
- **Custom Title Image:** Replace the default title image with your own link
- **Flexible Layout:** Adapt the playerlist to match your server's theme
- **Easy Management:** Simple configuration for different role types

### **Discord Integration**
{: .no_toc }

- **Seamless Role Checking:** Verify Discord roles automatically
- **Permission-Based Display:** Show players based on their Discord roles
- **Easy Administration:** Manage player display through Discord role system
- **Consistent Updates:** Real-time synchronization with Discord roles

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Discord API Integration:** Seamless role-based player organization
- **Universal Compatibility:** Works with all FiveM server setups
- **Role-Based Management:** Integrates with Discord server roles

### **Server Applications**
{: .no_toc }

- **Community Servers:** Organize players by membership levels
- **Roleplay Servers:** Display players by their roleplay roles
- **Gaming Communities:** Categorize players by gaming roles
- **Administrative Teams:** Organize staff and admin players

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Discord API Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure night_discordapi is installed and configured first
> - Verify Discord API credentials are properly set up
> - Check Discord bot permissions and roles
> - Confirm Discord server integration settings

#### **Playerlist Not Displaying**
{: .no_toc }

{: .tip }
> **Display troubleshooting:**
> 1. Check Discord role configuration
> 2. Verify playerlist configuration settings
> 3. Test with different Discord roles
> 4. Review Discord API integration settings

#### **Buttons Not Working**
{: .no_toc }

{: .note }
> **Button troubleshooting:**
> 1. Check button configuration per role
> 2. Verify role permissions and settings
> 3. Test with different user roles
> 4. Review button functionality settings

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Discord API not found" | Install and configure night_discordapi first |
| "Playerlist not displaying" | Check Discord role and configuration settings |
| "Buttons not working" | Verify button configuration per role |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Install Discord API first** and ensure it's working properly
- **Test role-based display** with different Discord roles
- **Configure clear button functions** for each role type
- **Use custom title images** that match your server's theme

### **Server Integration**
{: .no_toc }

- **Coordinate with Discord server** for role management
- **Set up clear role hierarchy** for player organization
- **Test playerlist display** with different user types
- **Monitor role changes** for consistent updates

### **Player Management**
{: .no_toc }

- **Use specific roles** for different player categories
- **Regularly update role assignments** as needed
- **Monitor playerlist functionality** for issues
- **Keep Discord API credentials secure**

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Discord Playerlist:

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
