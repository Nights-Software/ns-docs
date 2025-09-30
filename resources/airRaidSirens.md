---
layout: default
title: "Air Raid Sirens"
nav_order: 23
has_children: false
has_toc: true
last_modified_date: "2025-10-30 16:00:00"
---

<img class="cover-img" src="/assets/img/night_air_raid_sirens.png" alt="Air Raid Sirens V4 for FiveM" draggable="false">

# Air Raid Sirens V4 for FiveM
{: .no_toc}

The air raid sirens provides you the ability to alert the nation with the press of a button. Configure multiple siren(s) (areas) and browse through the list before powering the sirens.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Air Raid Sirens V4 is an emergency alert system that allows server administrators to trigger air raid sirens across specific areas or the entire map. Perfect for emergency situations, roleplay scenarios, or creating atmospheric events on your FiveM server.

### **Key Features**
{: .no_toc }

- ✅ **Multi-source 3D spatial audio system** - Realistic directional sound
- ✅ **Modern keybinding system** - Customizable controls
- ✅ **Smooth fade-in/fade-out transitions** - Professional audio experience
- ✅ **Real-time 3D audio with head-tracking** - Immersive sound positioning
- ✅ **Per-area sound configuration** - Individual area audio settings
- ✅ **Area-Based Control** - Target specific areas or zones with additive activation
- ✅ **Volume & Sound Configuration** - Customize audio settings
- ✅ **Range Settings** - Configure siren coverage area
- ✅ **Multiple Siren Sounds** - Support for various siren sound files
- ✅ **Custom UI** - User-friendly interface design
- ✅ **OneSync Compatible** - Works with Legacy and Infinity
- ✅ **3D Siren Objects** - Custom air raid siren 3D models
- ✅ **Editable CSS** - Customize the visual appearance
- ✅ **Multi-Framework Support** - ESX/QBCore/Discord API permissions
- ✅ **Multi-Language Support** - International server support
- ✅ **Advanced Export System** - Comprehensive API for other resources
- ✅ **Escrow Protection** - Secure resource protection
- 📊 **Performance: 0.00-0.02ms** - Optimized for minimal impact

---

## 🎥 Video Showcase

**Watch Air Raid Sirens in action:**

[Video Showcase](https://youtu.be/ZxI8tCJNZag){: .btn .btn-red}

---

## 📚 Installation Tutorial

**Follow our step-by-step installation guide:**

[Installation Tutorial](https://youtu.be/DBj3zOOxIIk?si=mMn9vKGDas945JNM){: .btn .btn-blue}

---

## 🛒 Purchase Information

**Get Air Raid Sirens V4:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5030134){: .btn .btn-blue}

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

- **✅ ESX:** Full compatibility with ESX framework
- **✅ QBCore:** Full compatibility with QBCore framework
- **✅ Discord API:** Compatible with Discord API integration
- **✅ Standalone:** Works without any framework

{: .tip }
> **Note:** Air Raid Sirens V4 works seamlessly with all major FiveM frameworks and can operate standalone.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Air Raid Sirens" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_air_raid_sirens` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_air_raid_sirens
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_air_raid_sirens/config/config.lua`
   - Review all configuration options

2. **Configure Settings**
   - Set up volume and sound settings
   - Configure range and coverage areas
   - Adjust permissions and access controls

---

## 🎮 How It Works

### **Siren System**
{: .no_toc }

- **Area-Based Control:** Target specific areas or zones for siren activation
- **Multiple Sirens:** Configure various siren sound files
- **Range Control:** Set coverage area for siren alerts
- **Volume Management:** Adjust audio levels for different situations
- **3D Objects:** Custom air raid siren models in the world
- **Selective Activation:** Choose which areas to activate or deactivate

### **User Interface**
{: .no_toc }

- **Area Selection:** Choose specific areas to activate sirens
- **Siren Selection:** Browse through available siren sounds
- **Easy Activation:** Simple button press to trigger sirens
- **Status Display:** Visual indicators for active sirens and areas
- **Custom Styling:** Editable CSS for UI customization

### **Emergency Alerts**
{: .no_toc }

- **Instant Activation:** Trigger sirens immediately when needed
- **Targeted Coverage:** Alert specific areas or entire server population
- **Roleplay Integration:** Perfect for emergency scenarios
- **Atmospheric Events:** Create immersive server experiences
- **Selective Control:** Activate or deactivate specific areas as needed

---

## 🔧 Export Functions

### **Legacy Exports (Backward Compatibility)**
{: .no_toc }

These exports maintain compatibility with older scripts and documentation:

#### **Toggle Sirens (Legacy)**
{: .no_toc }

```lua
-- Toggle sirens automatically (on when off, off when on)
exports['night_air_raid_sirens']:TriggerAirRaidSirens(soundFile, targetAreas, targetSirens)

-- Example usage
exports['night_air_raid_sirens']:TriggerAirRaidSirens("air-raid-siren")
```

#### **Force Siren State (Legacy)**
{: .no_toc }

```lua
-- Force sirens on or off
exports['night_air_raid_sirens']:ToggleAirRaidSirens(soundFile, onOrOff, targetAreas, targetSirens)

-- Example usage
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", true)   -- Turn on
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", false)  -- Turn off
```

### **New Exports (Recommended)**
{: .no_toc }

Modern area-based control with better functionality:

#### **Activate Areas**
{: .no_toc }

```lua
-- Activate specific areas (additive - adds to existing active areas)
exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport(soundFile, areaNames)

-- Example usage
exports['night_air_raid_sirens']:TriggerAirRaidSirensByAreaExport("air-raid-siren", {"Fort Zancudo", "Grapeseed"})
```

#### **Deactivate Areas**
{: .no_toc }

```lua
-- Deactivate specific areas (subtractive - removes only specified areas)
exports['night_air_raid_sirens']:DeactivateAirRaidSirensByAreaExport(areaNames)

-- Example usage
exports['night_air_raid_sirens']:DeactivateAirRaidSirensByAreaExport({"Fort Zancudo"})
```

#### **Deactivate All Sirens**
{: .no_toc }

```lua
-- Turn off all sirens completely
exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()

-- Example usage
exports['night_air_raid_sirens']:DeactivateAllAirRaidSirensExport()
```

### **Utility Exports (Read-only Information)**
{: .no_toc }

#### **Get Available Areas**
{: .no_toc }

```lua
-- Returns array of all configured areas with their settings
local areas = exports['night_air_raid_sirens']:GetAvailableAreas()

-- Returns: table with {name, poleCount, soundFile, soundReach, soundVolume, enabled}
```

#### **Get Sirens in Area**
{: .no_toc }

```lua
-- Returns configuration data for a specific area
local areaData = exports['night_air_raid_sirens']:GetSirensInArea(areaName)

-- Example usage
local areaData = exports['night_air_raid_sirens']:GetSirensInArea("Fort Zancudo")

-- Returns: table with {soundFile, soundReach, soundVolume, enabled, poleCount, poles}
```

### **Sound File Examples**
{: .no_toc }

Default sound file names you can use:
- `"air-raid-siren"`
- `"luchtsirene"`

### **Area Name Examples**
{: .no_toc }

Default area names you can use:
- `"Fort Zancudo"`
- `"Grapeseed"`
- `"Sandy Shores"`
- `"Paleto Bay"`

{: .tip }
> **Recommendation:** Use the NEW EXPORTS for better control and area management. Legacy exports are maintained for backward compatibility only.

{: .tip }
> **Custom Sounds:** You can add your own sound files to the resource and reference them by filename.

{: .note }
> **UI Updates:** All exports automatically update the UI for all connected players!

---

## 🎨 Customization

### **CSS Editing**
{: .no_toc }

The Air Raid Sirens includes limited editable CSS files allowing you to:
- **Customize UI appearance** to match your server theme
- **Modify colors and styling** for better visual integration

### **3D Object Customization**
{: .no_toc }

- **Custom siren models** for visual representation
- **Placement options** for strategic siren locations

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **ESX Integration:** Compatible with ESX job systems and permissions
- **QBCore Integration:** Compatible with QBCore permissions and groups
- **Discord API:** Integrate with Discord role-based permissions
- **Standalone Operation:** Works without any framework

### **Emergency Systems Examples**
{: .no_toc }

- **Police Integration:** Perfect for law enforcement scenarios
- **Emergency Services:** Ideal for medical and fire department roleplay
- **Military Operations:** Great for military and defense scenarios
- **Civil Defense:** Excellent for disaster and emergency situations

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Sirens Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify configuration file is properly formatted
> - Confirm permissions are set correctly

#### **Audio Issues**
{: .no_toc }

{: .tip }
> **Audio troubleshooting:**
> 1. Check volume settings in config
> 2. Verify sound files are present in the resource
> 3. Test with different sound file names
> 4. Check client audio settings

#### **Permission Issues**
{: .no_toc }

{: .note }
> **Permission troubleshooting:**
> 1. Verify player has correct permissions
> 2. Check framework integration settings
> 3. Test with admin permissions first
> 4. Review Discord API configuration

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Sound file not found" | Verify sound file exists in resource |
| "Permission denied" | Check configuration permissions |
| "Export failed" | Verify export function syntax |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Start with default settings** and adjust based on server needs
- **Test different sound files** to find the best fit
- **Set appropriate permissions** to prevent abuse
- **Configure range settings** adjust to your desires

### **Emergency Planning**
{: .no_toc }

- **Establish protocols** for when to use sirens
- **Train staff** on proper siren activation
- **Coordinate with other emergency systems**
- **Test sirens regularly** to ensure functionality

### **Roleplay Integration**
{: .no_toc }

- **Create emergency scenarios** that utilize sirens
- **Integrate with police and emergency services**
- **Use for atmospheric events** and server announcements
- **Coordinate with other roleplay systems**

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Air Raid Sirens:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Verify your configuration** matches the examples
4. **Join our Discord** for community support

### **Community Support**
{: .no_toc }

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}