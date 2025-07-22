---
layout: default
title: "Smoke Screen"
nav_order: 22
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_smokescreen.png" alt="Smokescreen for FiveM" draggable="false">

# Smokescreen for FiveM
{: .no_toc}

A guide to install Smokescreen for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

This resource allows you to deploy a smokescreen in FiveM. Freely configure all kinds of options in regards to the smokescreen. Whether you want players to deploy a smokescreen on foot by using an item or just in a vehicle. It's all configurable. You can even configure specific vehicles which can deploy a smokescreen. In-game players have the option to adjust the size of their smoke screen clusters and the colour of their smokescreen.

The smokescreen resource allows players to place 1 smokescreen per 800 GTA meters radius.

### **Key Features**
{: .no_toc }

- ✅ **Deployable Smokescreen** - Deploy smokescreens in FiveM
- ✅ **Configurable Deployment** - On foot or in vehicles
- ✅ **Vehicle-Specific Configuration** - Configure specific vehicles for smokescreen deployment
- ✅ **Adjustable Size & Color** - Players can adjust cluster size and color in-game
- ✅ **Configurable Default Sizes** - Set default smokescreen sizes
- ✅ **Size Limits** - Configure size limitations
- ✅ **Cluster Configuration** - Configure cluster amounts and distance between clusters
- ✅ **Duration Control** - Configure smokescreen duration
- ✅ **Inventory Item Usage** - Framework integration for item-based usage
- ✅ **Command Usage** - Configure custom commands
- ✅ **Framework Compatibility** - ESX/QB/NS Discord API/Ace Perms/Standalone compatible
- ✅ **OneSync Compatible** - Works with OneSync legacy/infinity
- ✅ **Language Support** - Multi-language configuration
- ✅ **Escrow Protection** - Secure resource protection

---

## 🛒 Purchase Information

**Get Smokescreen:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5939502){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/6AaRXsPcmes){: .btn .btn-red}

---

## 📺 Installation Tutorial

**Watch the installation tutorial:**

[Installation Tutorial](https://www.youtube.com/watch?v=RomSyYCcOmI&feature=youtu.be){: .btn .btn-red}

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
> **Placement Limit:** Players can place 1 smokescreen per 800 GTA meters radius.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ ESX:** Compatible with ESX framework
- **✅ QBCore:** Compatible with QBCore framework
- **✅ Discord API:** Compatible with NS Discord API
- **✅ Ace Permissions:** Compatible with Ace permission system

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Smokescreen is designed to work with any FiveM server configuration and provides flexible deployment options.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_smokescreen` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```cfg
ensure night_smokescreen
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
| `night_smokescreen/config/config.lua` | Main configuration settings |
| `night_smokescreen/client/c_functions.lua` | Client-side functions |
| `night_smokescreen/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize deployment, sizes, clusters, and permissions
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Configuration Options:** Configure deployment methods, sizes, clusters, duration, inventory items, and commands.

---

## 🎮 How It Works

### **Smokescreen Deployment**
{: .no_toc }

- **On Foot Deployment** - Deploy smokescreens while walking
- **Vehicle Deployment** - Deploy smokescreens from vehicles
- **Vehicle-Specific Configuration** - Configure specific vehicles for deployment
- **Placement Limits** - 1 smokescreen per 800 GTA meters radius

### **Customization Options**
{: .no_toc }

- **Size Configuration** - Configure default sizes and size limits
- **Cluster Management** - Configure cluster amounts and distance between clusters
- **Duration Control** - Set how long smokescreens last
- **Color & Size Adjustment** - Players can adjust in-game

### **Framework Integration**
{: .no_toc }

- **Inventory Item Usage** - Framework integration for item-based deployment
- **Command Configuration** - Customize commands for deployment
- **Permission Systems** - Discord API and Ace permissions support
- **Multi-Language Support** - International server configuration

### **User Experience**
{: .no_toc }

- **Flexible Deployment** - Deploy on foot or in vehicles
- **Real-Time Adjustment** - Adjust size and color in-game
- **Easy Activation** - Simple commands or item usage
- **Visual Feedback** - Clear smokescreen effects

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework integration
- **QBCore** - Compatible with QBCore framework integration
- **Discord API** - Compatible with NS Discord API
- **Ace Permissions** - Compatible with Ace permission system

### **Deployment Options**
{: .no_toc }

- **On Foot Deployment** - Deploy smokescreens while walking
- **Vehicle Deployment** - Deploy from any vehicle
- **Vehicle-Specific** - Configure specific vehicles for deployment
- **Item-Based Usage** - Framework inventory integration

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient smokescreen management
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Placement System:** Smokescreens are limited to 1 per 800 GTA meters radius for optimal performance.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Resource Not Starting**
> - Ensure the resource is properly added to server.cfg
> - Check that the resource name is `night_smokescreen`
> - Verify the resource started without errors in console

{: .warning }
> **Smokescreen Not Deploying**
> - Check F8 console for any error messages
> - Verify configuration settings in config.lua
> - Test with default settings first

{: .warning }
> **Placement Issues**
> - Check if you're within 800 GTA meters of another smokescreen
> - Verify deployment permissions and vehicle configuration
> - Ensure proper item usage if using framework integration

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test Deployment Methods** - Try both on foot and vehicle deployment
- **Verify Configuration** - Check all config settings are correct
- **Check Framework Integration** - Ensure proper item/command setup

---

## 💡 Best Practices

### **Smokescreen Configuration**
{: .no_toc }

- **Size Management** - Configure appropriate default sizes and limits
- **Cluster Settings** - Set reasonable cluster amounts and distances
- **Duration Control** - Configure appropriate smokescreen duration
- **Placement Limits** - Respect the 800 GTA meters radius limit

### **Performance Optimization**
{: .no_toc }

- **Placement Limits** - Monitor smokescreen placement for performance
- **Cluster Optimization** - Configure clusters for optimal performance
- **Duration Management** - Set appropriate durations to prevent clutter
- **Regular Cleanup** - Monitor and manage smokescreen placement

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide users with deployment guidelines
- **Intuitive Controls** - Make deployment commands easy to use
- **Visual Feedback** - Ensure smokescreen effects are clearly visible
- **Help Documentation** - Create server-specific usage guides

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
