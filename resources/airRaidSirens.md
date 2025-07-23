---
layout: default
title: "Air Raid Sirens"
nav_order: 23
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/airRaidSirens.png" alt="Air Raid Sirens V3 for FiveM" draggable="false">

# Air Raid Sirens V3 for FiveM
{: .no_toc}

The air raid sirens provides you the ability to alert the nation with the press of a button. Configure multiple sirens and browse through the list before powering the sirens.

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Air Raid Sirens V3 is a comprehensive emergency alert system that allows server administrators to trigger air raid sirens across the entire map. Perfect for emergency situations, roleplay scenarios, or creating atmospheric events on your FiveM server.

### **Key Features**
{: .no_toc }

- ✅ **Volume & Sound Configuration** - Customize audio settings
- ✅ **Range Settings** - Configure siren coverage area
- ✅ **Multiple Siren Sounds** - Support for various siren sound files
- ✅ **Custom UI** - User-friendly interface design
- ✅ **OneSync Compatible** - Works with Legacy and Infinity
- ✅ **3D Siren Objects** - Custom air raid siren 3D models
- ✅ **Editable CSS** - Customize the visual appearance
- ✅ **Multi-Framework Support** - ESX/QBCore/Discord API permissions
- ✅ **Multi-Language Support** - International server support
- ✅ **Escrow Protection** - Secure resource protection

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

**Get Air Raid Sirens V3:**

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
> **Note:** Air Raid Sirens V3 works seamlessly with all major FiveM frameworks and can operate standalone.

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

- **Multiple Sirens:** Configure various siren sound files
- **Range Control:** Set coverage area for siren alerts
- **Volume Management:** Adjust audio levels for different situations
- **3D Objects:** Custom air raid siren models in the world

### **User Interface**
{: .no_toc }

- **Siren Selection:** Browse through available siren sounds
- **Easy Activation:** Simple button press to trigger sirens
- **Status Display:** Visual indicators for active sirens
- **Custom Styling:** Editable CSS for UI customization

### **Emergency Alerts**
{: .no_toc }

- **Instant Activation:** Trigger sirens immediately when needed
- **Nationwide Coverage:** Alert entire server population
- **Roleplay Integration:** Perfect for emergency scenarios
- **Atmospheric Events:** Create immersive server experiences

---

## 🔧 Export Functions

### **Server-Side Exports**
{: .no_toc }

Use these export functions to trigger Air Raid Sirens from other server-side scripts:

#### **Toggle Sirens**
{: .no_toc }

```lua
-- Toggle sirens automatically (on when off, off when on)
exports['night_air_raid_sirens']:TriggerAirRaidSirens(src, soundFileName)

-- Example usage
exports['night_air_raid_sirens']:TriggerAirRaidSirens(source, "air-raid-siren")
```

#### **Force Siren State**
{: .no_toc }

```lua
-- Force sirens on or off
exports['night_air_raid_sirens']:ToggleAirRaidSirens(soundFileName, true)  -- true = on, false = off

-- Example usage
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", true)   -- Turn on
exports['night_air_raid_sirens']:ToggleAirRaidSirens("air-raid-siren", false)  -- Turn off
```

### **Sound File Examples**
{: .no_toc }

Common sound file names you can use:
- `"air-raid-siren"`
- `"emergency-siren"`
- `"warning-siren"`
- `"civil-defense-siren"`

{: .tip }
> **Custom Sounds:** You can add your own sound files to the resource and reference them by filename.

---

## 🎨 Customization

### **CSS Editing**
{: .no_toc }

The Air Raid Sirens includes editable CSS files allowing you to:
- **Customize UI appearance** to match your server theme
- **Modify colors and styling** for better visual integration
- **Adjust layout and positioning** of siren controls
- **Create unique visual experiences** for your players

### **3D Object Customization**
{: .no_toc }

- **Custom siren models** for visual representation
- **Placement options** for strategic siren locations
- **Visual indicators** for active siren status

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **ESX Integration:** Compatible with ESX job systems and permissions
- **QBCore Integration:** Compatible with QBCore permissions and groups
- **Discord API:** Integrate with Discord role-based permissions
- **Standalone Operation:** Works without any framework

### **Emergency Systems**
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
- **Configure range settings** for your server size

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