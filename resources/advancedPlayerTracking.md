---
layout: default
title: "Advanced Player Tracking"
nav_order: 13
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_advancedTracking.png" alt="Advanced Player Tracking for FiveM" draggable="false">

# Advanced Player Tracking v2
{: .no_toc}

Track and trace your fellow players, or decide to be untraceable! This script allows you to set a GPS route to other players who've enabled that they're trackable.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Advanced Player Tracking v2 is a standalone player tracking system that allows players to track and trace each other with GPS-like functionality. Perfect for police backup requests on roleplay servers and general player location sharing.

### **Key Features**
{: .no_toc }

- ✅ **Standalone** - No framework dependencies required
- ✅ **Track & trace players** with GPS-like functionality
- ✅ **Toggle trackability** - Choose whether to be trackable
- ✅ **Real-time distance** display in meters on screen
- ✅ **Fully configurable** settings and options
- ✅ **Discord webhook logging** - Track who tracks who
- ✅ **Multi-language support** for international servers
- ✅ **Escrow protection** for security

---

## 🎥 Video Showcase

**Watch Advanced Player Tracking in action:**

[Video Showcase](https://youtu.be/_0VPsk-EG58){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Advanced Player Tracking v2:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5010021){: .btn .btn-blue}

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

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Advanced Player Tracking v2 has been tested on both OneSync Legacy and Infinity, both work perfectly.

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** No framework dependencies required
- **✅ Works alongside:** Compatible with ESX, QBCore, and other frameworks
- **✅ No integrations:** No specific framework integrations - works independently
- **✅ Universal compatibility:** Works with any FiveM server setup

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Advanced Player Tracking" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the entire resource folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_advancedTracking
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_advancedTracking/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up Discord webhook for logging (optional)
   - Configure language settings
   - Adjust tracking permissions and settings

---

## 🎮 How It Works

### **Player Tracking**
{: .no_toc }

1. **Enable Tracking:** Players can choose to be trackable
2. **Select Target:** Choose a trackable player from the menu
3. **GPS Route:** Set a GPS route to the selected player
4. **Real-time Updates:** See distance and location updates
5. **Blip System:** Visual blip attached to tracked player

### **Menu System**
{: .no_toc }

- **Player List:** Shows all online players with names and ping
- **Trackable Status:** Indicates which players are trackable
- **Distance Display:** Real-time distance in meters
- **Easy Navigation:** Simple menu interface

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Standalone Operation:** Works without/alongside any framework

### **Discord Integration**
{: .no_toc }

- **Webhook Logging:** Track who tracks who
- **Activity Monitoring:** Monitor tracking activity
- **Audit Trail:** Keep records of tracking events

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Tracking Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify configuration file is properly formatted
> - Confirm players have enabled trackability

#### **Discord Webhook Issues**
{: .no_toc }

{: .tip }
> **Webhook troubleshooting:**
> 1. Verify webhook URL is correct
> 2. Check Discord channel permissions
> 3. Ensure webhook is active and working
> 4. Test webhook with a simple message first

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Webhook failed" | Verify Discord webhook URL and permissions |
| "Permission denied" | Check configuration permissions |
| "Player not trackable" | Player needs to enable trackability |

---

## 📖 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Start with default settings** and adjust based on server needs
- **Set up Discord webhook** for activity monitoring
- **Configure appropriate permissions** for your server
- **Test tracking functionality** with multiple players

### **Privacy Considerations**
{: .no_toc }

- **Inform players** about tracking features
- **Respect player choice** for trackability
- **Use Discord logging** for accountability
- **Set appropriate permissions** to prevent abuse

---

## 💬 Support & Community

### **Getting Help**
{: .no_toc }

If you're having trouble with Advanced Player Tracking:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Join our Discord** for community support

### **Community Support**
{: .no_toc }

Join our Discord community for:
- Technical support
- Configuration help
- Product updates and announcements
- Community discussions

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}