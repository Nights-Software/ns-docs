---
layout: default
title: "Henchmen"
nav_order: 28
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_henchmen.png" alt="Henchmen for FiveM" draggable="false">

# Henchmen for FiveM
{: .no_toc}

A guide to install Henchmen for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Dive into the world of Henchmen, where loyal companions await at various customizable locations. These trusted allies shadow your every move, ready to stand by your side through thick and thin. With diverse options ranging from faithful animal companions to versatile NPCs, including both multiplayer and native characters, the possibilities are endless. Want a doppelgänger with a twist? Henchmen can even mirror your own persona, adding a unique flair to your entourage.

Customize their behavior to your liking; whether it's a relaxed idle stance or a daring taunt, the choice is yours. Pick up your henchmen today and embark on adventures with style and panache!

### **Key Features**
{: .no_toc }

- ✅ **Customizable pickup locations** - Set henchmen spawn points per section
- ✅ **Diverse henchmen types** - Animals, NPCs (MP/native), or player copies
- ✅ **Doppelgänger system** - Henchmen can mirror your own persona
- ✅ **Customizable weapon loadout** - Set weapons or copy your own
- ✅ **Up to 3 henchmen** - Multiple companion support
- ✅ **Behavior commands** - Order to follow, idle, or attack
- ✅ **Customizable outfits** - Set outfits per section
- ✅ **Custom idle animations** - Configure henchmen behavior
- ✅ **Command/hotkey usage** - Flexible control options
- ✅ **Multi-Framework Support** - ESX/QB/NS Discord API/Ace Perms/Standalone
- ✅ **OneSync Compatible** - Works with Legacy and Infinity
- ✅ **Multi-Language Support** - International server support
- ✅ **Escrow Protection** - Secure resource protection

---

## 🎥 Video Showcase

**Watch Henchmen in action:**

[Video Showcase](https://youtu.be/rzTQdG8Vd6E){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Henchmen:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/6153056){: .btn .btn-blue}

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

{: .warning }
> **OneSync Synchronization:** NPC synchronization can be unreliable with many players in the same OneSync dimension area.

---

## 🔧 System Requirements & Compatibility

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .warning }
> **Synchronization Note:** NPC synchronization may be unreliable with many players in the same OneSync dimension area.

### **Framework Compatibility**
{: .no_toc }

- **✅ ESX:** Full compatibility with ESX framework
- **✅ QBCore:** Full compatibility with QBCore framework
- **✅ NS Discord API:** Compatible with Discord API integration
- **✅ Ace Permissions:** Compatible with ACE permission system
- **✅ Standalone:** Works without any framework

{: .tip }
> **Note:** Henchmen works seamlessly with all major FiveM frameworks and can operate standalone.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Henchmen" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_henchmen` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```cfg
ensure night_henchmen
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

---

## ⚙️ Configuration Setup

### **Required Tools**
{: .no_toc }

{: .tip }
> **Visual Studio Code:** We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `night_henchmen/config/config.lua` | Main configuration settings |
| `night_henchmen/client/c_functions.lua` | Client-side functions |
| `night_henchmen/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

{: .tip }
> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

---

## 🎮 How It Works

### **Henchmen System**
{: .no_toc }

- **Pickup Locations** - Configure henchmen spawn points across the map
- **Diverse Types** - Choose from animals, NPCs, or player copies
- **Doppelgänger Feature** - Henchmen can mirror your own character
- **Multiple Companions** - Support for up to 3 henchmen simultaneously

### **Combat & Behavior**
{: .no_toc }

- **Weapon Loadout** - Customize weapons or copy your own loadout
- **Behavior Commands** - Order henchmen to follow, idle, or attack
- **Custom Animations** - Configure idle animations and behaviors
- **Combat AI** - Intelligent combat assistance

### **Customization Options**
{: .no_toc }

- **Outfit System** - Set custom outfits per henchmen section
- **Command Integration** - Flexible command and hotkey usage
- **Framework Integration** - Works with all major FiveM frameworks
- **Language Support** - Multi-language configuration

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **ESX** - Full ESX framework integration
- **QBCore** - Full QBCore framework integration

### **Permission Systems**
{: .no_toc }

- **Discord API** - Role-based permissions through Discord integration
- **ACE Permissions** - Server-side permission management
- **Framework Permissions** - ESX/QBCore group-based access

{: .tip }
> **Permission Setup:** Configure access permissions to control who can use henchmen features.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Parsing Errors in F8 Console**
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg

{: .warning }
> **Henchmen Not Appearing**
> - Check server.cfg for proper resource ensure
> - Verify configuration file syntax
> - Confirm pickup locations are properly configured

{: .warning }
> **Synchronization Issues**
> - Monitor OneSync performance with many players
> - Consider reducing henchmen count in crowded areas
> - Check for conflicts with other NPC resources

### **Performance Optimization**
{: .no_toc }

- **Limit henchmen count** - Avoid excessive henchmen in small areas
- **Monitor OneSync performance** - Check for synchronization issues
- **Optimize pickup locations** - Spread henchmen across different areas

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Strategic Placement** - Position henchmen pickup locations logically
- **Balance Henchmen Types** - Mix different henchmen types for variety
- **Test Commands** - Verify all behavior commands work correctly
- **Backup Configurations** - Keep backups of working configurations

### **Performance Management**
{: .no_toc }

- **Monitor Synchronization** - Watch for OneSync issues with many players
- **Optimize Locations** - Avoid clustering henchmen in busy areas
- **Resource Management** - Track resource usage with active henchmen

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide players with henchmen usage guidelines
- **Balanced Features** - Ensure henchmen don't overpower gameplay

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}