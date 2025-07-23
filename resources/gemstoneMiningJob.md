---
layout: default
title: "Gemstone Mining Job"
nav_order: 29
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_gemstone_mining.png" alt="Gemstone mining job! Resource" draggable="false">

# Gemstone Mining Job for FiveM
{: .no_toc}

A guide to install Gemstone Mining Job for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Mine your way through the quarry or anywhere else. Configure it all yourself! Collect rare gemstones, process them and sell them at a jewelry store. This job is based on "farming" gemstones in the quarry (or elsewhere). Simple, straight forward and fun to do! The drilling for gemstones is animated. All gemstones and materials are configurable in regards to their price & chance of obtaining them. You can write your custom 'check-item' add-on, as well as your payment functions. Adapt it all to your likings! Oh, and it has discord integrations, uses simple native UI and doesn't touch your FPS.

### **Key Features**
{: .no_toc }

- ✅ **Quarry Mining** - Mine in quarries or custom locations
- ✅ **Rare Gemstone Collection** - Collect various types of gemstones
- ✅ **Processing System** - Process raw gemstones into valuable materials
- ✅ **Jewelry Store Sales** - Sell processed gemstones for profit
- ✅ **Animated Drilling** - Realistic mining animations
- ✅ **Configurable Prices** - Set custom prices for all gemstones
- ✅ **Configurable Drop Rates** - Adjust chances of obtaining different gemstones
- ✅ **Custom Add-ons** - Write custom check-item and payment functions
- ✅ **Discord Integration** - Built-in Discord webhook support
- ✅ **Native UI** - Simple, performance-friendly interface
- ✅ **FPS Optimized** - Minimal performance impact
- ✅ **Fully Configurable** - Adapt to your server's needs

---

## 🎥 Video Showcase

**Watch Gemstone Mining Job in action:**

[Video Showcase](https://youtu.be/cHQj9Re2a5g){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Gemstone Mining Job:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5022830){: .btn .btn-blue}

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
> **Note:** Gemstone Mining Job works seamlessly with all major FiveM frameworks and can operate standalone.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Gemstone Mining Job" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_gemstone_mining` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_gemstone_mining
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
| `night_gemstone_mining/config/config.lua` | Main configuration settings |
| `night_gemstone_mining/client/c_functions.lua` | Client-side functions |
| `night_gemstone_mining/server/s_functions.lua` | Server-side functions |

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

### **Mining System**
{: .no_toc }

- **Quarry Locations** - Configure mining spots in quarries or custom areas
- **Animated Drilling** - Realistic mining animations for immersive gameplay
- **Gemstone Collection** - Collect various types of rare gemstones
- **Processing Stations** - Convert raw gemstones into valuable materials

### **Economy Integration**
{: .no_toc }

- **Configurable Prices** - Set custom prices for all gemstones and materials
- **Drop Rate Control** - Adjust chances of obtaining different gemstones
- **Jewelry Store Sales** - Sell processed gemstones for profit
- **Custom Payment Functions** - Integrate with your server's economy system

### **Customization Options**
{: .no_toc }

- **Custom Add-ons** - Write your own check-item and payment functions
- **Discord Integration** - Built-in webhook support for logging
- **Native UI** - Simple, performance-friendly user interface
- **FPS Optimization** - Minimal impact on server performance

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Economy Integration**
{: .no_toc }

- **Custom Payment Functions** - Adapt to your server's payment system
- **Item Check System** - Custom add-ons for item verification
- **Price Configuration** - Flexible pricing for all gemstones and materials

{: .tip }
> **Economy Setup:** Configure prices and payment functions to match your server's economy system.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Parsing Errors in F8 Console**
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg

{: .warning }
> **Mining Not Working**
> - Check server.cfg for proper resource ensure
> - Verify configuration file syntax
> - Confirm mining locations are properly configured

{: .warning }
> **Payment Issues**
> - Verify payment function configuration
> - Check framework integration settings
> - Ensure economy system compatibility

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Balance Economy** - Set appropriate prices to maintain server economy
- **Diversify Locations** - Spread mining spots across different areas
- **Test Drop Rates** - Ensure gemstone drop rates are balanced
- **Backup Configurations** - Keep backups of working configurations

### **Economy Management**
{: .no_toc }

- **Price Monitoring** - Regularly review and adjust gemstone prices
> **Drop Rate Balance** - Maintain fair chances for different gemstone types
- **Market Integration** - Integrate with your server's existing economy

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
