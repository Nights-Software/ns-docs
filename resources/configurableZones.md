---
layout: default
title: "Configurable zones"
nav_order: 34
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_configurable_zones.png" alt="Configurable Zones for FiveM" draggable="false">

# Configurable Zones for FiveM
{: .no_toc}

Configure all you want in the configuration file and use your creativity to create all kinds of zones which suit your community server on FiveM! Lets get creative!

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Configurable Zones is a powerful zone management system that allows you to create and customize various types of zones throughout your FiveM server. With extensive configuration options and creative freedom, you can design zones that perfectly match your server's needs and enhance the player experience.

### **Key Features**
{: .no_toc }

- ✅ **3 Preset Zone Types** - Borders, Safezones and no vehicle zones: all editable to your liking
- ✅ **Configure Markers** - From top to bottom customization
- ✅ **Configure Blips** - All the way you like
- ✅ **Configure Text** - All the way you like
- ✅ **Unlimited Zones** - Add as much zones as you want and get creative
- ✅ **Zone Characteristics** - Configure invincibility, vehicle bans, speed zones, messages, colours, timers, collisions and PvP mode
- ✅ **Extensible System** - More features can be suggested!

---

## 🎥 Video Showcase

**Watch Configurable Zones in action:**

[Video Showcase](https://youtu.be/Ngx2utrlWQQ){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Configurable Zones:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5047155){: .btn .btn-blue}

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
- **✅ Universal:** Works with any FiveM server setup
- **✅ Creative Freedom:** Design zones for any server type

{: .tip }
> **Note:** Configurable Zones is designed to work independently and provide maximum creative freedom for zone design.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Configurable Zones" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_easy_zones` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```cfg
ensure night_easy_zones
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_easy_zones/config/config.lua`
   - Review all configuration options

2. **Configure Your Zones**
   - Set up your desired zone types and locations
   - Configure markers, blips, and text displays
   - Adjust zone characteristics and behaviors

{: .tip }
> **Configuration Help:** The config file contains detailed explanations for all variables.

---

## 🎮 How It Works

### **Zone System**
{: .no_toc }

- **Preset Zone Types:** Borders, Safezones, and no vehicle zones
- **Customizable Properties:** Each zone can be fully configured
- **Unlimited Creation:** Add as many zones as needed
- **Creative Freedom:** Design zones to match your server's theme

### **Visual System**
{: .no_toc }

- **Marker Configuration:** Customize zone markers from top to bottom
- **Blip System:** Configure map blips to your liking
- **Text Display:** Customize text messages and notifications
- **Color Schemes:** Match your server's visual theme

### **Zone Characteristics**
{: .no_toc }

- **Invincibility:** Set zones where players cannot take damage
- **Vehicle Bans:** Restrict vehicle access in specific areas
- **Speed Zones:** Control vehicle speeds within zones
- **Message System:** Display custom messages to players
- **Timer Functions:** Set time-based zone behaviors
- **Collision Control:** Manage object and player collisions
- **PvP Mode:** Control player vs player interactions

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Standalone Operation:** Works without any framework
- **Universal Compatibility:** Compatible with all FiveM server setups
- **Creative Flexibility:** Adapts to any server type or theme

### **Server Applications**
{: .no_toc }

- **Roleplay Servers:** Create safe zones, restricted areas, and themed zones
- **Survival Servers:** Design danger zones, resource areas, and safe havens
- **Racing Servers:** Set up speed zones, pit areas, and restricted zones
- **Military Servers:** Create base perimeters, training areas, and restricted zones
- **Creative Servers:** Design custom themed areas and interactive zones

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Zones Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify zone configuration settings
> - Confirm zone coordinates are valid

#### **Visual Issues**
{: .no_toc }

{: .tip }
> **Visual troubleshooting:**
> 1. Check marker and blip configurations
> 2. Verify text display settings
> 3. Test with different zone types
> 4. Review color and positioning settings

#### **Zone Behavior Issues**
{: .no_toc }

{: .note }
> **Behavior troubleshooting:**
> 1. Check zone characteristic settings
> 2. Verify invincibility and vehicle ban settings
> 3. Test speed zone configurations
> 4. Review PvP and collision settings

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Zone not working" | Verify zone configuration settings |
| "Visual not displaying" | Check marker and blip configuration |
| "Zone behavior incorrect" | Review zone characteristic settings |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Start with preset zones** and customize them to your needs
- **Test different zone types** to understand their behaviors
- **Use creative zone designs** to enhance your server's theme
- **Coordinate zone placement** for logical server flow

### **Server Integration**
{: .no_toc }

- **Coordinate with other systems** for balanced gameplay
> - **Place zones strategically** for realistic server design
- **Test with your server's systems** to ensure compatibility
- **Review and optimize** settings based on player feedback

### **Creative Integration**
{: .no_toc }

- **Design themed zones** that match your server's concept
- **Create interactive areas** for enhanced player experience
- **Use zones for storytelling** and roleplay scenarios
- **Experiment with different configurations** for unique effects

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Configurable Zones:

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
