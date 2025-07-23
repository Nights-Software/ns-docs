---
layout: default
title: "Discord Spawn"
nav_order: 32
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discord_spawn.png" alt="Discord Linked Spawn Selector for FiveM" draggable="false">

# Discord Linked Spawn Selector for FiveM
{: .no_toc}

A sleek and customizable spawn selection system that enhances your server's first impression with smooth visuals and flexible configuration.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Discord Linked Spawn Selector is an advanced spawn management system that provides a smooth and visually appealing spawn selection experience. With customizable locations, outfit support, and cinematic camera sequences, this system creates an impressive first impression for players joining your server.

### **Key Features**
{: .no_toc }

- ✅ **Custom Spawn Locations** - Define preset spawn points easily through the config
- ✅ **Outfit & Uniform Support** - Assign pre-set uniforms or outfits to spawn options—fully customizable
- ✅ **Cinematic Camera Intro** - Smooth animated camera sequence when entering the game
- ✅ **Flexible Spawn Options** - Choose between spawning with a uniform or jumping straight in
- ✅ **Color Customization** - Tweak menu colors to match your server's branding or theme
- ✅ **Export Function** - Trigger spawn selection manually via exports
- ✅ **Multi-Language Support** - Easily localize menu text for your community
- ✅ **Escrow Protected** - Secured with FiveM escrow to protect your code

---

## 🎥 Video Showcase

**Watch Discord Linked Spawn Selector in action:**

[Video Showcase](https://youtu.be/92d5CQIpTv8){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Discord Linked Spawn Selector:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5197594){: .btn .btn-blue}

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

- **✅ Discord API** - Required for Discord integration (included in package)
- **✅ Universal** - Works with any FiveM server setup
- **✅ Role-Based** - Integrates with Discord server roles

{: .tip }
> **Note:** Make sure night_discordapi is working before you install this resource. night_discordapi comes with a documentation.pdf file on how to install it.

---

## 📦 Installation Process

### **Step 1: Install Discord API (Required)**
{: .no_toc }

1. **Install night_discordapi first**
   - Download and install the Discord API resource
   - Configure the Discord API resource completely
   - Ensure it's working properly before proceeding

{: .warning }
> **Prerequisite:** Discord Linked Spawn Selector requires night_discordapi to be installed and configured first.

### **Step 2: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Discord Linked Spawn Selector" in your granted assets
   - Download the ZIP package

### **Step 3: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_discord_spawn` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 4: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_discord_spawn
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 5: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_discord_spawn/config/config.lua`
   - Review all configuration options

2. **Configure Spawn Locations**
   - Set up custom spawn points and locations
   - Configure Discord role requirements for spawn locations
   - Set up outfit and uniform assignments
   - Adjust camera positions and spawn settings

{: .tip }
> **Configuration Help:** The config file contains detailed explanations for all variables.

---

## 🎮 How It Works

### **Spawn Selection System**
{: .no_toc }

- **Custom Locations:** Define preset spawn points throughout your server
- **Role-Based Access:** Use Discord roles to control spawn location access
- **Flexible Options:** Choose between uniform spawn or direct spawn
- **Smooth Experience:** Seamless spawn selection process

### **Visual System**
{: .no_toc }

- **Cinematic Camera:** Smooth animated camera sequences on game entry
- **Color Customization:** Match menu colors to your server's theme
- **Professional Interface:** Sleek and modern spawn selection UI
- **Branding Integration:** Customize appearance to match your server

### **Outfit Management**
{: .no_toc }

- **Uniform Support:** Assign pre-set uniforms to spawn options
- **Role-Based Outfits:** Different outfits for different Discord roles
- **Fully Customizable:** Complete control over outfit configurations
- **EUP Integration:** Support for EUP clothing and accessories

---

## 🔌 Export Functions

### **Exports (Client & Serverside)**
{: .no_toc }

Use this export to force the player into spawn selection:

```lua
exports['night_discord_spawn']:ForceRespawn(src)
```

{: .tip }
> **Integration:** This export allows other resources to trigger spawn selection programmatically.

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Discord API Integration:** Seamless role-based spawn control
- **Universal Compatibility:** Works with all FiveM server setups
- **Role-Based Management:** Integrates with Discord server roles

### **Server Applications**
{: .no_toc }

- **Roleplay Servers:** Themed spawn locations for different departments
- **Community Servers:** Custom spawn points for different areas
- **Gaming Communities:** Branded spawn selection experience
- **Administrative Teams:** Role-based spawn management

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

#### **Spawn Locations Not Working**
{: .no_toc }

{: .tip }
> **Spawn troubleshooting:**
> 1. Check spawn location configuration
> 2. Verify Discord role requirements
> 3. Test with different user roles
> 4. Review camera and spawn point settings

#### **Outfits Not Loading**
{: .no_toc }

{: .note }
> **Outfit troubleshooting:**
> 1. Check outfit configuration settings
> 2. Verify role-based outfit permissions
> 3. Test with different uniform options
> 4. Review EUP data configuration

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Discord API not found" | Install and configure night_discordapi first |
| "Spawn location not working" | Check spawn configuration and role permissions |
| "Outfit not loading" | Verify outfit and EUP configuration |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Install Discord API first** and ensure it's working properly
- **Test spawn locations** with different Discord roles
- **Configure clear role requirements** for each spawn location
- **Use custom colors** that match your server's branding

### **Server Integration**
{: .no_toc }

- **Coordinate with Discord server** for role management
- **Create themed spawn locations** for different areas
- **Test spawn experience** with different user types
- **Monitor spawn functionality** for issues

### **Visual Experience**
{: .no_toc }

- **Use cinematic camera angles** for impressive intros
- **Customize menu colors** to match your theme
- **Create logical spawn locations** for server flow
- **Test the complete spawn experience** from start to finish

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Discord Linked Spawn Selector:

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
