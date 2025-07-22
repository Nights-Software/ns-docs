---
layout: default
title: "Raids"
nav_order: 26
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_raids.png" alt="Raids & Heists for FiveM" draggable="false">

# Raids & Heists for FiveM
{: .no_toc}

A guide to install Raids & Heists for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

This asset is a game-changer for your FiveM server. With easy drag-and-drop functionality, it opens up a world of possibilities. Customize raids and heists just the way you want them—set difficulty levels, choose locations, and decide enemy numbers (And so much more...). Get creative with enemy appearances and behaviors, and personalize text, labels, and markers to make each mission unique. With endless customization options, the only limit is your imagination.

### **Key Features**
{: .no_toc }

- ✅ **Customizable Locations** - Per raid/heist location configuration
- ✅ **Adjustable Enemy Peds** - MP/native enemy types
- ✅ **Customizable Weapon Loadout** - Configure weapons for you and peds
- ✅ **Configurable Enemy Count** - Adjust enemy numbers (with breaking point awareness)
- ✅ **Configurable Enemy Behavior** - Customize enemy fighting behavior
- ✅ **Configurable Sound Files** - Custom audio for raids and heists
- ✅ **Configurable Rewards** - Codeable reward system
- ✅ **Command/Hotkey Usage** - Configure commands and key bindings
- ✅ **Endless Customization** - Many more configurable options
- ✅ **Adjustable UI** - Customizable user interface
- ✅ **Framework Compatibility** - ESX/QB/Standalone compatible (reward-based, not for permissions)
- ✅ **OneSync Compatible** - Works with OneSync legacy/infinity
- ✅ **Language Support** - Multi-language configuration
- ✅ **Escrow Protection** - Secure resource protection

---

## 🛒 Purchase Information

**Get Raids & Heists:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/6208652){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/aKMNPUvE_-8){: .btn .btn-red}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Set FTP Transfer Type to Binary
> 2. Open the CFX Portal Download ZIP Package
> 3. Unpack in a folder on your local machine
> 4. Set your File Transfer Protocol (FTP) type to binary
> 5. Drag from local machine into the server resources folder
> 6. Add to server.cfg (ensure script)
> 7. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

{: .warning }
> **Enemy Count Breaking Point:** Be advised that there is always a breaking point for enemy count. Configure appropriately for your server's performance.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ ESX:** Compatible with ESX framework (reward-based, not for permissions)
- **✅ QBCore:** Compatible with QBCore framework (reward-based, not for permissions)

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Raids & Heists is designed to work with any FiveM server configuration and provides endless customization options for raids and heists.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Set FTP Transfer Type** to Binary
2. **Extract** the ZIP package to your local machine
3. **Transfer files** using binary FTP mode to your server's resources folder
4. **Ensure the folder** is named `night_raids` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```cfg
ensure night_raids
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** all settings to your liking
3. **Test** the resource functionality

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
| `night_raids/config/config.lua` | Main configuration settings |
| `night_raids/client/c_functions.lua` | Client-side functions |
| `night_raids/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize locations, enemies, weapons, and rewards
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Configuration Options:** Configure locations, enemy peds, weapon loadouts, enemy behavior, sound files, rewards, commands, and UI settings.

---

## 🎮 How It Works

### **Raid & Heist System**
{: .no_toc }

- **Customizable Locations** - Configure unique locations for each raid/heist
- **Difficulty Levels** - Set appropriate difficulty for different missions
- **Enemy Management** - Configure enemy types, counts, and behaviors
- **Weapon Loadouts** - Customize weapons for players and enemies

### **Enemy Configuration**
{: .no_toc }

- **Adjustable Enemy Peds** - Choose between MP/native enemy types
- **Configurable Enemy Count** - Set enemy numbers (mind the breaking point)
- **Enemy Fighting Behavior** - Customize how enemies engage in combat
- **Weapon Loadouts** - Configure weapons for enemy peds

### **Customization Options**
{: .no_toc }

- **Sound Files** - Configure custom audio for raids and heists
- **Reward System** - Codeable rewards for successful missions
- **Commands & Hotkeys** - Configure custom commands and key bindings
- **UI Customization** - Adjustable user interface elements
- **Text & Labels** - Personalize text, labels, and markers

### **Mission Management**
{: .no_toc }

- **Drag-and-Drop Functionality** - Easy mission setup and management
- **Endless Possibilities** - Only limited by your imagination
- **Unique Missions** - Make each raid and heist unique
- **Performance Optimization** - Balanced for server performance

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework (reward-based integration)
- **QBCore** - Compatible with QBCore framework (reward-based integration)

{: .tip }
> **Framework Note:** Integration is reward-based, not for permissions. Configure rewards through the configurable reward system.

### **OneSync Integration**
{: .no_toc }

- **OneSync Legacy** - Fully tested and compatible
- **OneSync Infinity** - Fully tested and compatible
- **Synchronized Gameplay** - Proper synchronization across all players

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient raid and heist management
- **Easy Integration** - Simple setup and configuration

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Resource Not Starting**
> - Ensure the resource is properly added to server.cfg
> - Check that the resource name is `night_raids`
> - Verify the resource started without errors in console

{: .warning }
> **Performance Issues**
> - Monitor enemy count to avoid breaking point
> - Check server performance during raids
> - Optimize enemy configurations for your server

{: .warning }
> **Raids Not Working**
> - Check F8 console for any error messages
> - Verify configuration settings in config.lua
> - Test with default settings first

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test Enemy Counts** - Start with lower enemy counts
- **Verify Configuration** - Check all config settings are correct
- **Monitor Performance** - Watch server performance during raids

---

## 💡 Best Practices

### **Raid Configuration**
{: .no_toc }

- **Enemy Count Management** - Stay below breaking point for optimal performance
- **Location Selection** - Choose appropriate locations for raids and heists
- **Difficulty Balancing** - Set appropriate difficulty levels
- **Reward Configuration** - Configure balanced rewards for missions

### **Performance Optimization**
{: .no_toc }

- **Enemy Limits** - Monitor and limit enemy counts appropriately
- **Location Optimization** - Choose performance-friendly locations
- **Weapon Loadouts** - Optimize weapon configurations
- **Regular Testing** - Test raid functionality regularly

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide users with raid and heist guidelines
- **Balanced Difficulty** - Ensure missions are challenging but fair
- **Reward Balance** - Configure appropriate rewards for effort
- **Help Documentation** - Create server-specific raid guides

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}