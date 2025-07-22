---
layout: default
title: "Coma & Down System"
nav_order: 39
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_coma_down_system.png" alt="Coma & Down System for FiveM" draggable="false">

# Coma & Down System v3 for FiveM
{: .no_toc}

When reaching lower health you get injured, after dropping even lower you go down. After a while you get into coma stage, the script can be customized to allow different coma types. Easy commands like /injured /coma /die /down /revive /respawn can be used. Adds up to your roleplay basics. Customizable & toggle-able UI.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Coma & Down System v3 is a comprehensive medical roleplay system that creates realistic health states and medical interactions for your FiveM server. From injury to coma, this system provides progressive health degradation with customizable medical logic, animations, and treatment mechanics.

### **Key Features**
{: .no_toc }

- ✅ **Medical System** - Easy to configure, use and understand. Includes CABCDE/AVPU and more medical based logic
- ✅ **Customizable Animations** - Different animations for each health state
- ✅ **Injured Mode** - Progressive health state system
- ✅ **Screen Effects** - Visual feedback for damage states
- ✅ **Damage Information** - Detailed information about damage obtained
- ✅ **Configurable Admins** - Discord API / Ace permissions support
- ✅ **Comprehensive Commands** - /injured, /coma, /down, /die, /revive, /respawn, /treat, /myhealth
- ✅ **Admin Commands** - /areviveall, /arespawnall for server management
- ✅ **Configurable Coma Types** - Customize different coma/down types
- ✅ **Cooldown Systems** - Prevent abuse and maintain balance
- ✅ **Escrow Protection** - Secure resource protection
- ✅ **Standalone** - No framework dependencies required

---

## 🎥 Video Showcase

**Watch Coma & Down System v3 in action:**

[Video Showcase](https://youtu.be/){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Coma & Down System v3:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5009962){: .btn .btn-blue}

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

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** No framework dependencies required
- **✅ Discord API:** Compatible with Discord API permissions
- **✅ Ace Permissions:** Compatible with Ace permission system

{: .tip }
> **Note:** Coma & Down System v3 is designed to work independently while supporting various permission systems.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Coma & Down System" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_coma_down_system` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```cfg
ensure night_coma_down_system
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_coma_down_system/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up health state thresholds
   - Configure coma types and durations
   - Adjust admin permissions
   - Customize animations and effects

{: .tip }
> **Configuration Help:** The config file contains detailed explanations for all variables.

---

## 🎮 How It Works

### **Health State System**
{: .no_toc }

- **Progressive Degradation:** Health decreases through injury → down → coma states
- **Customizable Thresholds:** Configure when each state triggers
- **Visual Feedback:** Screen effects and animations for each state
- **Damage Tracking:** Detailed information about damage sources

### **Medical System**
{: .no_toc }

- **CABCDE/AVPU Logic:** Professional medical assessment system
- **Treatment Mechanics:** /treat command for medical roleplay
- **Health Monitoring:** /myhealth command for self-assessment
- **Medical Attributes:** Track various health parameters

### **Command System**
{: .no_toc }

- **Player Commands:** /injured, /coma, /down, /die, /revive, /respawn
- **Medical Commands:** /treat, /myhealth for medical interactions
- **Admin Commands:** /areviveall, /arespawnall for server management
- **Permission-Based:** Configurable admin access

---

## 🔌 Export Functions

### **Server-Side Exports**
{: .no_toc }

Use these exports from other server-side scripts to control player states:

```lua
-- Revive a player
exports['night_coma_down_system']:RevivePlayer(source)

-- Respawn a player
exports['night_coma_down_system']:RespawnPlayer(source)

-- Get player's current coma type
exports['night_coma_down_system']:GetPlayerComaType(source)
```

{: .tip }
> **Integration:** These exports allow other resources to interact with the coma system programmatically.

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Standalone Operation:** Works without any framework
- **Universal Compatibility:** Compatible with all FiveM server setups
- **Permission Systems:** Supports Discord API and Ace permissions

### **Resource Compatibility**
{: .no_toc }

- **Discord Spawn Integration:** Compatible with [night_discord_spawn](https://store.nights-software.com/package/5197594)
- **Medical Systems:** Integrates with other medical resources
- **Roleplay Systems:** Enhances medical roleplay scenarios

### **Server Applications**
{: .no_toc }

- **Medical Roleplay:** Realistic health and injury systems
- **Emergency Services:** Enhanced EMS and medical scenarios
- **Survival Servers:** Progressive health degradation
- **Realistic Gameplay:** Adds depth to combat and injury mechanics

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Health States Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify health threshold configurations
> - Confirm player health values are being tracked

#### **Commands Not Working**
{: .no_toc }

{: .tip }
> **Command troubleshooting:**
> 1. Check admin permission configurations
> 2. Verify command syntax and permissions
> 3. Test with different user groups
> 4. Review Discord API and Ace permission settings

#### **Medical System Issues**
{: .no_toc }

{: .note }
> **Medical troubleshooting:**
> 1. Check CABCDE/AVPU configuration
> 2. Verify /treat command permissions
> 3. Test medical attribute tracking
> 4. Review health monitoring settings

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Health state not working" | Verify health threshold configuration |
| "Command denied" | Check admin permission settings |
| "Medical system disabled" | Enable medical system in configuration |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Start with default settings** and adjust based on server needs
- **Test health thresholds** to find the right balance
- **Configure realistic coma durations** for immersion
- **Set appropriate admin permissions** for security

### **Server Integration**
{: .no_toc }

- **Coordinate with medical systems** for balanced gameplay
- **Integrate with emergency services** for realistic scenarios
- **Test with your server's health systems**
- **Review and optimize** settings based on player feedback

### **Roleplay Integration**
{: .no_toc }

- **Create realistic medical scenarios** for roleplay
- **Integrate with EMS and medical services**
- **Use for survival and combat scenarios**
- **Coordinate with other medical resources**

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Coma & Down System v3:

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
