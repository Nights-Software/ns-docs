---
layout: default
title: "Ped & Player CPR"
nav_order: 40
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_ped_cpr.png" alt="Ped & Player CPR (Animated) Resource" draggable="false">

# Ped & Player CPR (Animated) for FiveM
{: .no_toc}

A guide to install Ped & Player CPR (Animated) for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Perform animated CPR on any injured pedestrian and/or player on the street. This resource provides realistic CPR mechanics with configurable options for cooldowns, duration, and survival rates.

### **Key Features**
{: .no_toc }

- ✅ **Animated CPR** - Realistic CPR animations for both players and NPCs
- ✅ **Configurable Options** - Cooldown, duration, and survival percentage settings
- ✅ **Flexible Targets** - Revive players, NPC pedestrians, or both
- ✅ **Realistic Animations** - Authentic CPR performance animations
- ✅ **Language Support** - Multi-language configuration
- ✅ **Coma & Down System Integration** - Optional integration with medical systems
- ✅ **Escrow Protection** - Secure resource protection
- ✅ **Standalone** - Works independently without framework dependencies

---

## 🛒 Purchase Information

**Get Ped & Player CPR:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5009947){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/aq8IG2iv_EQ){: .btn .btn-red}

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

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Integration Support**
{: .no_toc }

- **✅ Coma & Down System** - Optional integration available

{: .tip }
> **Note:** Ped & Player CPR is designed to work with any FiveM server configuration and provides realistic medical emergency features.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_ped_cpr` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```cfg
ensure night_ped_cpr
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
| `night_ped_cpr/config/config.lua` | Main configuration settings |
| `night_ped_cpr/client/c_functions.lua` | Client-side functions |
| `night_ped_cpr/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize cooldowns, duration, and survival rates
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Medical Settings:** Configure cooldown timers, CPR duration, survival percentages, and target types (players/NPCs).

---

## 🎮 How It Works

### **CPR Performance**
{: .no_toc }

- **Animated CPR** - CPR animations when performing on injured targets
- **Target Selection** - Choose between players, NPCs, or both
- **Survival Mechanics** - Configurable survival rates based on CPR performance

### **Configuration Options**
{: .no_toc }

- **Cooldown Settings** - Configure time between CPR attempts
- **Duration Control** - Set how long CPR takes to perform
- **Survival Percentage** - Adjust the chance of successful revival
- **Target Types** - Enable/disable CPR on players and/or NPCs

### **Medical Integration**
{: .no_toc }

- **Coma & Down System** - Optional integration with medical systems
- **Realistic Mechanics** - Authentic medical emergency procedures
- **Animation System** - CPR performance animations

### **User Experience**
{: .no_toc }

- **Easy Activation** - Simple commands or interactions to start CPR
- **Visual Feedback** - Clear indication of CPR progress and success
- **Language Support** - Multi-language interface for international servers
- **Realistic Gameplay** - Authentic medical emergency experience

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **ESX** - Compatible with ESX framework integration
- **QBCore** - Compatible with QBCore framework integration

### **Medical System Integration**
{: .no_toc }

- **Coma & Down System** - Optional integration for enhanced medical gameplay
- **Medical Resources** - Compatible with various medical and emergency resources
- **Roleplay Enhancement** - Enhances medical roleplay scenarios

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Lightweight and efficient
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Medical Roleplay:** This resource enhances medical roleplay by providing realistic CPR mechanics for both players and NPCs for standalone environments.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Resource Not Starting**
> - Ensure the resource is properly added to server.cfg
> - Check that the resource name is `night_ped_cpr`
> - Verify the resource started without errors in console

{: .warning }
> **CPR Not Working**
> - Check F8 console for any error messages
> - Verify configuration settings in config.lua
> - Test with default settings first

{: .warning }
> **Animations Not Playing**
> - Ensure animation files are properly installed
> - Check for any animation-related errors in console
> - Verify target selection settings

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test CPR on Different Targets** - Try both players and NPCs
- **Verify Configuration** - Check all config settings are correct
- **Check Integration** - Ensure Coma & Down System is properly configured if using

---

## 💡 Best Practices

### **Medical Configuration**
{: .no_toc }

- **Cooldown Settings** - Set appropriate cooldowns for server balance
- **Survival Rates** - Configure realistic survival percentages
- **Target Selection** - Choose appropriate targets for your server
- **Duration Settings** - Set realistic CPR performance times

### **Performance Optimization**
{: .no_toc }

- **Animation Optimization** - Ensure animations run smoothly
- **Target Limits** - Configure appropriate target restrictions
- **Cooldown Management** - Balance gameplay with realistic mechanics
- **Regular Testing** - Test CPR functionality regularly

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide users with CPR usage guidelines
- **Medical Training** - Offer guidance on proper CPR procedures
- **Roleplay Enhancement** - Encourage realistic medical roleplay
- **Emergency Procedures** - Integrate with other medical systems

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
