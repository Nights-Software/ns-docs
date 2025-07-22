---
layout: default
title: "Storm Chasing"
nav_order: 20
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_storm_chasing.png" alt="Storm Chasing" draggable="false">

# Storm Chasing for FiveM
{: .no_toc}

A guide to install Storm Chasing for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Dive into the heart of extreme weather with this unique and immersive storm chasing experience. Deploy probes, collect real-game-time tornado data, and fight through intense weather conditions in Los Santos. Whether you're roleplaying a meteorologist, storm chaser, or a science organization, this system delivers dynamic gameplay on all fronts.

### **Key Features**
{: .no_toc }

- ✅ **Deployable Probes** - Track tornadoes in real game time and deploy scientific probes
- ✅ **Live Tornado Detection** - Probes interact dynamically with active tornadoes
- ✅ **Live Weather Map (Radar)** - Observe storms & tornados on the LIVE weather map
- ✅ **Quality-Based Data System** - Readings rated (Poor, Fair, Good, Excellent) based on probe placement
- ✅ **EF Scale Intensity Detection** - Detect tornado intensity on Enhanced Fujita (EF) scale (EF0-EF5)
- ✅ **Data Economy Integration** - Sell data to fictional corporations with different bonuses
- ✅ **Company Market Fluctuations** - Data value changes over time requiring smart decisions
- ✅ **Progressive Challenges** - Stronger tornadoes bring greater danger and valuable data
- ✅ **Storm Chasing Roleplay** - Immersive scientific and civilian RP opportunities
- ✅ **Configurability** - Freedom to configure storms, tornadoes, market, businesses, rewards
- ✅ **Freelance Based** - No specific job permission required
- ✅ **Weather Integrations** - Natural Disasters, qb-weathersync, vSyncR
- ✅ **Framework Compatibility** - ESX/QBCore/Standalone compatible (reward payouts)
- ✅ **Escrow Protection** - Encryption with limited open source script parts

---

## 🛒 Purchase Information

**Get Storm Chasing:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/6903928){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/7r2jwDbRdAE){: .btn .btn-red}

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

{: .warning }
> **Database Requirement:** Storm Chasing requires a MySQL database and oxmysql resource to function properly.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ ESX:** Compatible with ESX framework (reward payouts)
- **✅ QBCore:** Compatible with QBCore framework (reward payouts)

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Weather System Integration**
{: .no_toc }

- **✅ Natural Disasters (Includes weather & time)** - Compatible with [Natural Disasters](https://store.nights-software.com/package/5177022) resource
- **✅ qb-weathersync** - Compatible with qb-weathersync
- **✅ vSyncR** - Default weather integration
- **✅ Custom Weather** - Options to customize weather integration

### **Dependencies**
{: .no_toc }

- **✅ MySQL Database** - Required for data storage
- **✅ oxmysql** - Required database API

{: .tip }
> **Note:** Storm Chasing is designed to work with any FiveM server configuration and provides immersive storm chasing gameplay.

---

## 📦 Installation Process

### **Step 1: Database Setup (Required)**
{: .no_toc }

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for Storm Chasing to work.

1. **Set up your database** via your hosting provider
2. **Connect to your database** using credentials in an SQL connection string
3. **Add to server.cfg** above the ensure/start of resources:

```cfg
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```

{: .tip }
> **Localhost Example:**
> ```cfg
> set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
> ```

4. **Automatic Table Installation** - When you boot up the server, the code will run queries to install required tables

{: .note }
> **Manual Installation:** The files include a `datatables.sql` file, however the script installs the table queries automatically. No need to manually execute the .sql files.

### **Step 2: Install oxmysql (Required)**
{: .no_toc }

If you don't have oxmysql installed, download it from:
[Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)

1. **Place oxmysql** into your resources folder
2. **Add to server.cfg** - Ensure it starts before Storm Chasing:

```cfg
ensure oxmysql
```

{: .tip }
> **Documentation:** For oxmysql questions, visit [oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

### **Step 3: Test Database Connection**
{: .no_toc }

Start your server and check the console for oxmysql connection messages. You should see:
```
[script:oxmysql] Database server connection established!
```

### **Step 4: Install Storm Chasing**
{: .no_toc }

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing
2. **Extract and transfer** using binary FTP mode
3. **Place 'night_storm_chasing'** into your resources folder
4. **Add to server.cfg**:

```cfg
ensure night_storm_chasing
```

5. **Verify startup** - Check console for both oxmysql and night_storm_chasing starting without errors

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
| `night_storm_chasing/config/config.lua` | Main configuration settings |
| `night_storm_chasing/client/c_functions.lua` | Client-side functions |
| `night_storm_chasing/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize storms, tornadoes, market, businesses, and rewards
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Configuration Options:** Configure storm behavior, tornado settings, market fluctuations, business rewards, and weather integrations.

---

## 🎮 How It Works

### **Storm Chasing System**
{: .no_toc }

- **Deployable Probes** - Track tornadoes in real game time and deploy scientific probes
- **Live Tornado Detection** - Probes interact dynamically with active tornadoes
- **Data Collection** - Collect wind speed, pressure, temperature, humidity, and more
- **Quality-Based System** - Readings rated based on probe placement quality

### **Weather Integration**
{: .no_toc }

- **Live Weather Map** - Observe storms & tornados on the LIVE weather map
- **EF Scale Detection** - Detect tornado intensity on Enhanced Fujita (EF) scale
- **Weather Systems** - Compatible with [Natural Disasters](https://store.nights-software.com/package/5177022), qb-weathersync, vSyncR
- **Custom Weather** - Options to customize weather integration

### **Economy System**
{: .no_toc }

- **Data Economy** - Sell collected probe data to fictional corporations
- **Company Markets** - StormTech Research Institute, WeatherShield Defense Corp
- **Market Fluctuations** - Data value changes over time requiring smart decisions
- **Progressive Rewards** - Stronger tornadoes bring more valuable data

### **Roleplay Features**
{: .no_toc }

- **Storm Chasing RP** - Immersive scientific and civilian roleplay
- **Team Formation** - Create storm hunter teams and emergency response units
- **Corporate Research** - Establish research divisions and organizations
- **Freelance Based** - No specific job permission required

---

## 📊 Exports

### **Server-Side Exports**
{: .no_toc }

```lua
-- Trigger a storm if there are no more than 2 storms or tornadoes active
exports.night_storm_chasing:RequestStorm()
```

{: .tip }
> **Export Usage:** Use this export to manually trigger storms when conditions allow.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Resource Not Starting**
> - Ensure the resource is properly added to server.cfg
> - Check that the resource name is `night_storm_chasing`
> - Verify the resource started without errors in console

{: .warning }
> **Database Connection Issues**
> - Verify MySQL connection string is correct
> - Check database credentials and accessibility
> - Ensure oxmysql is properly installed and started

{: .warning }
> **Probes Not Working**
> - Check F8 console for any error messages
> - Verify configuration settings in config.lua
> - Test with default settings first

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Verify Database** - Ensure database and oxmysql are working
- **Test Probes** - Try deploying probes to test functionality
- **Check Configuration** - Verify all config settings are correct

---

## 💡 Best Practices

### **Storm Configuration**
{: .no_toc }

- **Storm Behavior** - Configure appropriate storm patterns and intensity
- **Tornado Settings** - Set realistic tornado frequency and strength
- **Probe Placement** - Configure probe deployment mechanics
- **Data Quality** - Balance data collection difficulty and rewards

### **Performance Optimization**
{: .no_toc }

- **Storm Limits** - Monitor active storm count for performance
- **Probe Management** - Configure probe limits and cleanup
- **Weather Integration** - Optimize weather system compatibility
- **Regular Testing** - Test storm functionality regularly

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide users with storm chasing guidelines
- **Roleplay Support** - Encourage scientific and civilian RP
- **Market Guidance** - Help users understand data economy
- **Help Documentation** - Create server-specific storm chasing guides

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
