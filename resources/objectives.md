---
layout: default
title: "Objectives"
nav_order: 25
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_objectives.png" alt="Objectives for FiveM" draggable="false">

# Objectives for FiveM
{: .no_toc}

A guide to install Objectives for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Simply use client-side exports to invoke objectives on your game screen and give context to what your players can do in your FiveM server. Objectives provides a clean, customizable way to display mission information, hints, and guidance directly to players.

### **Key Features**
{: .no_toc }

- ✅ **Client-Side Exports** - Easy integration with any script
- ✅ **Customizable Styling** - Configure the appearance of objectives
- ✅ **Universal Compatibility** - Works with any FiveM server
- ✅ **Duration Control** - Set custom display duration
- ✅ **Clear Function** - Remove objectives when needed
- ✅ **Escrow Protection** - Secure resource protection
- ✅ **Lightweight** - Minimal performance impact

---

## 🛒 Purchase Information

**Get Objectives:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/6064980){: .btn .btn-blue}

---

## 📺 Installation Tutorial

**Watch the installation tutorial:**

[Video Showcase](https://youtu.be/nsqlox6hCjA){: .btn .btn-red}

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

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ Any FiveM Server:** Universal compatibility

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Objectives is designed to work with any FiveM server configuration and doesn't require specific framework dependencies.

---

## 📦 Installation Process

### **Step 1: Download & Install**
{: .no_toc }

1. **Download** the resource from the CFX Portal after purchase
2. **Extract** the ZIP package to your local machine
3. **Transfer files** using binary FTP mode to your server's resources folder
4. **Ensure the folder** is named `night_objectives` (do not rename)

### **Step 2: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_objectives
```

### **Step 3: Verify Installation**
{: .no_toc }

1. **Start your server** and check the console for any errors
2. **Test the resource** by using the exports in a client script
3. **Verify functionality** by displaying a test objective

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
| `night_objectives/config/config.lua` | Main configuration and styling settings |
| `night_objectives/client/c_functions.lua` | Client-side functions |
| `night_objectives/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure styling** - customize the appearance of objectives
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Styling Options:** The config file contains all styling options for customizing the appearance of objectives.

---

## 🎮 How It Works

### **Display Objectives**
{: .no_toc }

Use the client-side export to display objectives on the player's screen:

```lua
exports.night_objectives:DisplayObjective(
    true,                    -- display (true/false)
    "Mission Title",         -- title
    "Mission Description",   -- description
    "Helpful Hint",          -- hint
    15                       -- duration in seconds
)
```

### **Clear Objectives**
{: .no_toc }

Remove objectives from the screen:

```lua
exports.night_objectives:ClearObjective()
```

### **Integration Examples**
{: .no_toc }

**Mission System Integration:**
```lua
-- Display mission objective
exports.night_objectives:DisplayObjective(true, "Deliver Package", "Take the package to the marked location", "Follow the GPS route", 30)

-- Clear when mission completes
exports.night_objectives:ClearObjective()
```

**Job System Integration:**
```lua
-- Display job instructions
exports.night_objectives:DisplayObjective(true, "Police Duty", "Patrol the city and respond to calls", "Use /911 to respond to emergencies", 60)
```

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Script Integration**
{: .no_toc }

- **Mission Systems** - Display mission objectives and progress
- **Job Systems** - Show job-specific instructions and tasks
- **Tutorial Systems** - Guide new players through features
- **Event Systems** - Display event information and instructions

{: .tip }
> **Universal Integration:** Objectives can be integrated into any FiveM script using simple client-side exports.

---

## 📊 Exports

### **Client-Side Exports**
{: .no_toc }

```lua
-- Display an objective
exports.night_objectives:DisplayObjective(
    display,        -- boolean: true to show, false to hide
    title,          -- string: objective title
    description,    -- string: objective description
    hint,           -- string: helpful hint text
    duration        -- number: display duration in seconds
)

-- Clear all objectives
exports.night_objectives:ClearObjective()
```

### **Parameter Details**
{: .no_toc }

| Parameter | Type | Description |
|-----------|------|-------------|
| `display` | boolean | Set to `true` to show objective, `false` to hide |
| `title` | string | The main title of the objective |
| `description` | string | Detailed description of what the player should do |
| `hint` | string | Additional helpful hint or instruction |
| `duration` | number | How long to display the objective in seconds |

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Export Not Found**
> - Ensure the resource is properly started in server.cfg
> - Check that the resource name is `night_objectives`
> - Verify the resource started without errors in console

{: .warning }
> **Objectives Not Displaying**
> - Check F8 console for any error messages
> - Verify the export parameters are correct
> - Ensure the display parameter is set to `true`

{: .warning }
> **Styling Issues**
> - Check the config.lua file for styling settings
> - Verify CSS/styling configurations are correct
> - Test with default settings first

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test with Simple Export** - Start with basic parameters
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible

---

## 💡 Best Practices

### **Objective Design**
{: .no_toc }

- **Clear Titles** - Use concise, descriptive titles
- **Detailed Descriptions** - Provide enough information for players to understand
- **Helpful Hints** - Include additional guidance when needed
- **Appropriate Duration** - Set duration based on objective complexity

### **Integration Tips**
{: .no_toc }

- **Consistent Styling** - Use consistent objective formatting across your server
- **Clear Objectives** - Always clear objectives when they're no longer relevant
- **Error Handling** - Implement proper error handling for export calls
- **Performance** - Don't spam objectives; use appropriate timing

### **User Experience**
{: .no_toc }

- **Progressive Disclosure** - Show objectives as players progress
- **Contextual Information** - Display objectives relevant to current situation
- **Clear Instructions** - Make objectives easy to understand and follow
- **Visual Hierarchy** - Use titles and descriptions effectively

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}