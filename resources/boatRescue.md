---
layout: default
title: "Boat Rescue (Tow)"
nav_order: 41
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_boatRescue.png" alt="Boat Rescue (Tow) for FiveM" draggable="false">

# Boat Rescue (Tow) for FiveM
{: .no_toc}

Emergency! There's a boat in trouble: No problem, Boat Rescue (Tow) for FiveM is now a thing! Float up next to the boat you desire to tow and select one out of the closest boats. Once you've chosen the boat to tow a rope will be attached to it. It requires some skill to operate the rescue boats, but I'm sure you can manage it!

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Boat Rescue (Tow) is an innovative FiveM resource that brings realistic boat towing mechanics to your server. Perfect for maritime roleplay scenarios, emergency services, or any server with water-based activities. Players can rescue stranded boats by attaching tow ropes and carefully maneuvering them to safety.

### **Key Features**
{: .no_toc }

- ✅ **Standalone** - No framework dependencies required
- ✅ **Configurable Settings** - Extensive customization options
- ✅ **Configurable Dummies** - For 3D modelers to attach to
- ✅ **Configurable Markers** - Customize visual indicators
- ✅ **Multi-Language Support** - International server support
- ✅ **Configurable Rescue Boats** - Choose which boats can tow
- ✅ **Configurable Commands** - Customize hotkeys and buttons
- ✅ **Configurable Rope Length UI** - Adjust rope display settings
- ✅ **Sound Integration** - Winch sound effects
- ✅ **Lightweight** - Optimized performance
- ✅ **Escrow Protection** - Secure resource protection

---

## 🎥 Video Showcase

**Watch Boat Rescue (Tow) in action:**

[Video Showcase](https://youtu.be/9H0KDAV5UiI){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Boat Rescue (Tow) - Early Access:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5317442){: .btn .btn-blue}

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

{: .tip }
> **Note:** Boat Rescue (Tow) is designed to work independently without requiring any specific framework integration.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Boat Rescue (Tow)" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_boatRescue` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_boatRescue
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

### **Step 4: Configuration Setup**
{: .no_toc }

1. **Navigate to Config File**
   - Open `night_boatRescue/config/config.lua`
   - Review all configuration options

2. **Configure Rescue Boats**
   - Set up your desired rescue boats in the configuration
   - Configure boat cable/rope connection points
   - Adjust towing and being towed settings

{: .tip }
> **Configuration Help:** The config file contains green explanatory text and variables for you to edit.

---

## 🎮 How It Works

### **Boat Towing System**
{: .no_toc }

- **Proximity Detection:** Float near boats to detect towing targets
- **Boat Selection:** Choose from nearby boats to tow
- **Rope Attachment:** Automatic rope connection between boats
- **Skill-Based Operation:** Requires careful maneuvering

### **Rescue Mechanics**
{: .no_toc }

- **Emergency Scenarios:** Perfect for boat rescue roleplay
- **Realistic Physics:** Boats respond to towing forces
- **Visual Feedback:** Clear indicators for towing status
- **Sound Effects:** Winch sounds for immersion

### **Customization System**
{: .no_toc }

- **Configurable Boats:** Choose which vessels can perform rescues
- **Rope Settings:** Adjust rope length and attachment points
- **Visual Markers:** Customize on-screen indicators
- **Command System:** Configure hotkeys and controls

---

## ⚙️ Configuration Guide

### **Rescue Boat Configuration**
{: .no_toc }

Configure your desired rescue boats in `config.lua`:

```lua
--====================== Configure Tow Boats ======================--

TowSailorModel = "mp_m_waremech_01",    -- Ped is invisible.
TowBoats = { -- In debug = true mode you will see the modelname of the vehicle your in. Once you perform the /boattow command, press F8 to see the actual modelHash name which is read by the script.
    [1] = {modelHash = `TUG`},          -- Native boat
    [2] = {modelHash = `MARQUIS`},      -- We used a replace model for this boat for testing
    [3] = {modelHash = `DINGHY`},      -- We used a replace model for this boat for testing
    [4] = {modelHash = `JETMAX`},      -- We used a replace model for this boat for testing
    [5] = {modelHash = `SEASHARK`},      -- We used a replace model for this boat for testing
    [6] = {modelHash = `PREDATOR`},      -- We used a replace model for this boat for testing
    [7] = {modelHash = `TROPIC`},      -- We used a replace model for this boat for testing
},
```

### **Rope Connection Points**
{: .no_toc }

Configure boat cable/rope connection points:

```lua
--====================== Configure Boat Cable/Rope Connection Points ======================--

-- NOTE: If you do not define attach points for your boat, the script will use the center of the boat as default attach point.
-- Offset values are relative to the entity center point.  
--     x = left/right  
--     y = forward/backward  
--     z = up/down  

-- BoatModelIsTowing: This defines where the rope is attached to on your boat when you start towing another boat.
BoatModelIsTowing = {
    [1] = {modelHash = `TUG`, towOffsetX = 0.0, towOffsetY = -16.25, towOffsetZ = 2.0}, 
    [2] = {modelHash = `MARQUIS`, towOffsetX = 0.0, towOffsetY = -6.75, towOffsetZ = 1.25},
    [3] = {modelHash = `DINGHY`, towOffsetX = 0.0, towOffsetY = -3.0, towOffsetZ = 0.5},
    [4] = {modelHash = `JETMAX`, towOffsetX = 0.0, towOffsetY = -4.0, towOffsetZ = 0.5},
    [5] = {modelHash = `SEASHARK`, towOffsetX = 0.0, towOffsetY = -2.0, towOffsetZ = 0.5},
    [6] = {modelHash = `PREDATOR`, towOffsetX = 0.0, towOffsetY = -5.0, towOffsetZ = 0.5},
    [7] = {modelHash = `TROPIC`, towOffsetX = 0.0, towOffsetY = -4.5, towOffsetZ = 0.5},
},

-- BoatModelIsBeingTowed: This defines where the rope is attached to on the boat that you are towing.
BoatModelIsBeingTowed = {
    [1] = {modelHash = `TUG`, towOffsetX = 0.0, towOffsetY = 14.25, towOffsetZ = 0.5},
    [2] = {modelHash = `MARQUIS`, towOffsetX = 0.0, towOffsetY = 3.0, towOffsetZ = 0.2},
    [3] = {modelHash = `JETMAX`, towOffsetX = 0.0, towOffsetY = 3.25, towOffsetZ = 0.25},
    [4] = {modelHash = `DINGHY`, towOffsetX = 0.0, towOffsetY = 2.0, towOffsetZ = 0.5},
    [5] = {modelHash = `SEASHARK`, towOffsetX = 0.0, towOffsetY = 1.5, towOffsetZ = 0.5},
    [6] = {modelHash = `PREDATOR`, towOffsetX = 0.0, towOffsetY = 3.0, towOffsetZ = 0.5},
    [7] = {modelHash = `TROPIC`, towOffsetX = 0.0, towOffsetY = 2.5, towOffsetZ = 0.5},
    [8] = {modelHash = `SUNTRAP`, towOffsetX = 0.0, towOffsetY = 2.5, towOffsetZ = 0.5},
    [9] = {modelHash = `SPEEDER`, towOffsetX = 0.0, towOffsetY = 3.0, towOffsetZ = 0.5},
    [10] = {modelHash = `LONGFIN`, towOffsetX = 0.0, towOffsetY = 4.0, towOffsetZ = 0.5},
    [11] = {modelHash = `TORO`, towOffsetX = 0.0, towOffsetY = 3.5, towOffsetZ = 0.5},
    [12] = {modelHash = `TORO2`, towOffsetX = 0.0, towOffsetY = 3.5, towOffsetZ = 0.5},
    [13] = {modelHash = `KOSAI`, towOffsetX = 0.0, towOffsetY = 3.0, towOffsetZ = 0.5},
    [14] = {modelHash = `DINGHY2`, towOffsetX = 0.0, towOffsetY = 2.0, towOffsetZ = 0.5},
    [15] = {modelHash = `DINGHY3`, towOffsetX = 0.0, towOffsetY = 2.0, towOffsetZ = 0.5},
    [16] = {modelHash = `DINGHY4`, towOffsetX = 0.0, towOffsetY = 2.0, towOffsetZ = 0.5},
    [17] = {modelHash = `SEASHARK2`, towOffsetX = 0.0, towOffsetY = 1.5, towOffsetZ = 0.5},
    [18] = {modelHash = `SEASHARK3`, towOffsetX = 0.0, towOffsetY = 1.5, towOffsetZ = 0.5},
},
```

{: .tip }
> **Model Hash Debugging:** Enable debug mode and use `/boattow` command in-game, then check F8 console for the actual modelHash name. Some are case sensitive.

---

## 🎨 Optional Customization

### **Rope Texture Edits**
{: .no_toc }

Enhance your boat towing experience with custom rope textures:

[Improved Rope Textures](https://github.com/StoicDesigns/Improvedrope){: .btn .btn-green}

{: .note }
> **Rope Texture Application:** These rope textures are applied on rope ID 2, which is set as default in config.lua.

---

## 🔧 Integration & Compatibility

### **Framework Integration**
{: .no_toc }

- **Standalone Operation:** Works without any framework
- **Universal Compatibility:** Compatible with all FiveM server setups
- **Lightweight Design:** Minimal impact on server performance

### **Server Applications**
{: .no_toc }

- **Maritime Roleplay:** Realistic boat rescue scenarios
- **Emergency Services:** Coast guard and rescue operations
- **Fishing Communities:** Boat assistance and recovery
- **Water-Based Activities:** Enhanced maritime gameplay

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Boat Towing Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure the resource is properly ensured in server.cfg
> - Check server console for error messages
> - Verify boat model hashes are correct
> - Confirm you're using a configured rescue boat

#### **Rope Attachment Issues**
{: .no_toc }

{: .tip }
> **Rope troubleshooting:**
> 1. Check rope connection point configurations
> 2. Verify boat model compatibility
> 3. Test with different boat types
> 4. Review offset settings

#### **Command Issues**
{: .no_toc }

{: .note }
> **Command troubleshooting:**
> 1. Check command configuration in config
> 2. Verify hotkey assignments
> 3. Test with `/boattow` command
> 4. Review debug mode settings

### **Error Messages**
{: .no_toc }

| Error | Solution |
|-------|----------|
| "Resource not found" | Check resource folder name and ensure line |
| "Boat not found" | Verify boat model hash configuration |
| "Towing failed" | Check rope connection point settings |
| "Command not working" | Review command and hotkey configuration |

---

## 📖 Best Practices

### **Configuration Best Practices**
{: .no_toc }

- **Start with default settings** and adjust based on server needs
- **Test different boat types** to find the best fit
- **Configure realistic rope lengths** for immersion
- **Set appropriate connection points** for each boat model

### **Server Integration**
{: .no_toc }

- **Coordinate with maritime systems** for balanced gameplay
- **Place rescue boats strategically** for realistic scenarios
- **Test with your server's boat systems**
- **Review and optimize** settings based on player feedback

### **Roleplay Integration**
{: .no_toc }

- **Create realistic rescue scenarios** for maritime roleplay
- **Integrate with emergency services** for coordinated responses
- **Use for fishing and boating communities**
- **Coordinate with other water-based resources**

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with Boat Rescue (Tow):

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Join our Discord** for community support

### **Bug Reports**
{: .no_toc }

{: .important }
> **Bug Reporting:** Please report any bugs to us via our Discord ticket support system.

### **Community Support**
{: .no_toc }

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}