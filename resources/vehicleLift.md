---
layout: default
title: "Vehicle Lift"
nav_order: 7
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_vehicle_lift.png" alt="Vehicle Lift! Resource" draggable="false">

# Vehicle Lift!
{: .no_toc }

A guide to install Vehicle Lift! for FiveM
{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Configure and utilize vehicle lifts at your desired locations! This resource allows you to add unlimited vehicle lifts to your server with full customization options for a professional mechanic experience.

### **Key Features**
{: .no_toc }

- ✅ **Unlimited Lifts** - Add vehicle lifts to any desired location
- ✅ **Easy Configuration** - Simple coordinate setup in config.lua
- ✅ **Customizable Controls** - Configure hotkeys, notifications, and commands
- ✅ **Interactive Mechanics** - Drive up, perform lift command, elevate/lower vehicles
- ✅ **Developer Friendly** - Create custom scripts for vehicle mechanic systems
- ✅ **Standalone** - Works independently without framework dependencies
- ✅ **Performance Optimized** - Efficient lift management and operation

---

## 🛒 Purchase Information

**Get Vehicle Lift! for FiveM:**

Base: [Purchase on Nights Software Store](https://store.nights-software.com/package/5071628){: .btn .btn-blue}

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_vehicle_lift` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_vehicle_lift
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** lift locations and settings
3. **Test** the resource functionality

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

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ Any FiveM Server:** Universal compatibility

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Vehicle Lift is designed as a standalone resource that works with any FiveM server configuration.

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
| `night_vehicle_lift/config/config.lua` | Main configuration and lift locations |
| `night_vehicle_lift/client/c_functions.lua` | Client-side functions |
| `night_vehicle_lift/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure lift locations** - add coordinates for your desired lift locations
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Lift Configuration:** Add unlimited vehicle lifts by configuring coordinates in the config.lua file.

---

## 🎮 How It Works

### **Lift Operation**
{: .no_toc }

- **Drive Up** - Position your vehicle on the lift
- **Perform Command** - Use the configured lift command
- **Elevate/Lower** - Control the lift movement to raise or lower your vehicle
- **Mechanic Work** - Perform vehicle maintenance while elevated

### **Configuration Options**
{: .no_toc }

- **Lift Locations** - Add unlimited lifts at any coordinates
- **Hotkey Configuration** - Customize control keys for lift operation
- **Notification Settings** - Configure user feedback and messages
- **Command Customization** - Set custom commands for lift control
- **Visual Settings** - Customize lift appearance and behavior

### **Developer Features**
{: .no_toc }

- **Script Integration** - Create custom mechanic system scripts
- **API Access** - Developer-friendly functions for custom implementations
- **Event System** - Hook into lift events for custom functionality
- **Modular Design** - Easy to extend and customize

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **Universal Integration** - Compatible with any FiveM server setup

### **Script Integration**
{: .no_toc }

- **Custom Mechanic Scripts** - Perfect for building mechanic systems
- **Vehicle Management** - Integrate with vehicle repair and maintenance systems
- **Business Integration** - Connect with mechanic shops and businesses
- **Developer Tools** - Create custom mechanic workflows

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient lift management and operation
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Mechanic Enhancement:** Vehicle Lift enhances mechanic gameplay with professional lift functionality.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Lift Not Working**
> - Ensure the resource is properly started in server.cfg
> - Check that the resource name is `night_vehicle_lift`
> - Verify lift coordinates are correctly configured

{: .warning }
> **Command Not Responding**
> - Check F8 console for any error messages
> - Verify command configuration in config.lua
> - Ensure you're positioned correctly on the lift

{: .warning }
> **Configuration Errors**
> - Check the config.lua file for syntax errors
> - Verify coordinate format is correct
> - Test with default settings first

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test Lift Positioning** - Ensure vehicle is properly positioned
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible

---

## 💡 Best Practices

### **Lift Placement**
{: .no_toc }

- **Strategic Locations** - Place lifts in mechanic shops and service areas
- **Accessibility** - Ensure lifts are easily accessible for vehicles
- **Safety Zones** - Create safe areas around lift operations
- **Visual Indicators** - Add clear markers for lift locations

### **Configuration Tips**
{: .no_toc }

- **Coordinate Accuracy** - Use precise coordinates for lift placement
- **Command Simplicity** - Use intuitive commands for lift operation
- **Notification Clarity** - Provide clear feedback for lift operations
- **Hotkey Accessibility** - Choose easily accessible hotkeys

### **Integration Best Practices**
{: .no_toc }

- **Mechanic Workflows** - Integrate with existing mechanic systems
- **Business Operations** - Connect with mechanic shop businesses
- **Player Experience** - Ensure smooth and intuitive lift operation
- **Performance Optimization** - Monitor resource performance

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
