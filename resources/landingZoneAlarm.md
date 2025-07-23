---
layout: default
title: "Landing Zone Alarm"
nav_order: 24
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_lzalarm.png" alt="Landing Zone Alarm! Resource" draggable="false">

# Landing Zone Alarm for FiveM
{: .no_toc}

A guide to install Landing Zone Alarm for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Use the `/lzalarm` command and place an emergency landing site down on the ground below you, whilst being in a helicopter! It will then create a marker, speed zone and helicopter siren sounds (Sound backend provided by LondonStudios). This script includes a customizable discord webbook integration. Everything is configurable in the configuration file. Check out the readme for installation instructions.

### **Key Features**
{: .no_toc }

- ✅ **Emergency Landing Sites** - Create landing zones from helicopter
- ✅ **Dynamic Placement** - Place landing sites on the ground below you
- ✅ **Visual Markers** - Clear markers for landing zone identification
- ✅ **Speed Zone Creation** - Automatic speed zone around landing area
- ✅ **Helicopter Siren Sounds** - Audio alerts with LondonStudios backend
- ✅ **Discord Webhook Integration** - Customizable Discord notifications
- ✅ **Fully Configurable** - Everything customizable in config file
- ✅ **Simple Command Usage** - Easy `/lzalarm` command
- ✅ **Real-time Creation** - Instant landing zone setup
- ✅ **Professional Audio** - High-quality siren sounds

---

## 🎥 Video Showcase

**Watch Landing Zone Alarm in action:**

[Video Showcase](https://youtu.be/GIyOd12GrOo){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Landing Zone Alarm:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5020551){: .btn .btn-blue}

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

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works without any framework

{: .tip }
> **Note:** Landing Zone Alarm works seamlessly alongside all major FiveM frameworks and can operate standalone.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Landing Zone Alarm" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_lzalarm` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_lzalarm
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
| `night_lzalarm/config/config.lua` | Main configuration settings |
| `night_lzalarm/client/c_functions.lua` | Client-side functions |
| `night_lzalarm/server/s_functions.lua` | Server-side functions |

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

### **Landing Zone System**
{: .no_toc }

- **Dynamic Placement** - Create landing zones from helicopter position
- **Ground Detection** - Automatically places landing site on ground below
- **Real-time Creation** - Instant setup of emergency landing areas
- **Visual Indicators** - Clear markers for landing zone identification

### **Audio & Visual Elements**
{: .no_toc }

- **Helicopter Siren Sounds** - Professional audio alerts with LondonStudios backend
- **Speed Zone Creation** - Automatic speed restrictions around landing area
- **Visual Markers** - Clear visual indicators for landing zones
- **Discord Integration** - Webhook notifications for landing zone creation

### **Command System**
{: .no_toc }

- **Simple Usage** - Easy `/lzalarm` command activation
- **Helicopter Requirement** - Must be in helicopter to use
- **Permission Control** - Configurable command access
- **Instant Response** - Immediate landing zone creation

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Audio Integration**
{: .no_toc }

- **LondonStudios Backend** - Professional sound system integration
- **Customizable Audio** - Configure siren sounds and volumes
- **Quality Assurance** - High-quality audio output

{: .tip }
> **Audio Setup:** Configure siren sounds and volumes to match your server's atmosphere.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Parsing Errors in F8 Console**
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg

{: .warning }
> **Command Not Working**
> - Check server.cfg for proper resource ensure
> - Verify you are in a helicopter when using command
> - Confirm command permissions are properly configured

{: .warning }
> **Audio Issues**
> - Verify LondonStudios backend is properly configured
> - Check audio file paths and permissions
> - Ensure sound settings are correctly configured

### **Performance Optimization**
{: .no_toc }

- **Limit landing zones** - Avoid excessive landing zones in small areas
- **Monitor audio performance** - Check for audio-related performance issues
- **Optimize marker rendering** - Ensure visual markers are optimized

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Strategic Placement** - Use landing zones in appropriate emergency scenarios
- **Audio Balance** - Set appropriate siren volumes for your server
- **Permission Management** - Configure command access appropriately
- **Backup Configurations** - Keep backups of working configurations

### **Usage Guidelines**
{: .no_toc }

- **Emergency Situations** - Use for legitimate emergency landing needs
- **Clear Communication** - Inform players about landing zone creation
- **Proper Timing** - Use landing zones when appropriate

### **Performance Management**
{: .no_toc }

- **Efficient Usage** - Avoid creating unnecessary landing zones
- **Audio Optimization** - Monitor audio performance impact
- **Resource Management** - Track resource usage with active landing zones

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
