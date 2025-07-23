---
layout: default
title: "Subtitles for FiveM"
nav_order: 37
has_children: false
has_toc: true
last_modified_date: "2023-12-20 17:30:00"
---

<img class="cover-img" src="/assets/img/night_subtitles.png" alt="Subtitles for FiveM" draggable="false">

# Subtitles for FiveM
{: .no_toc}

A guide to install Subtitles for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Simply use client-side exports to invoke subtitles on your game screen and grant your players a cinematic experience. This resource provides easy-to-use subtitle functionality with full customization options.

### **Key Features**
{: .no_toc }

- ✅ **Client-Side Exports** - Easy integration with any script
- ✅ **Cinematic Experience** - Grant players immersive subtitle displays
- ✅ **Configurable Styling** - Customize the appearance of subtitles
- ✅ **Universal Compatibility** - Works with any FiveM server
- ✅ **Duration Control** - Set custom display duration in milliseconds
- ✅ **Escrow Protection** - Secure resource protection
- ✅ **Lightweight** - Minimal performance impact

---

## 🛒 Purchase Information

**Get Subtitles for FiveM:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/6043540){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/VeSd0Yp3HDo){: .btn .btn-red}

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
> **Note:** Subtitles is designed to work with any FiveM server configuration and provides cinematic subtitle functionality.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_subtitles` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_subtitles
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** all settings to your liking
3. **Test** the resource functionality

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
| `night_subtitles/config/config.lua` | Main configuration and styling settings |
| `night_subtitles/client/c_functions.lua` | Client-side functions |
| `night_subtitles/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure styling** - customize subtitle appearance
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Styling Options:** The config file contains all styling options for customizing the appearance of subtitles.

---

## 🎮 How It Works

### **Subtitle Display**
{: .no_toc }

- **Client-Side Exports** - Easy integration with any script
- **Cinematic Experience** - Grant players immersive subtitle displays
- **Duration Control** - Set custom display duration in milliseconds
- **Real-Time Display** - Subtitles appear instantly on game screen

### **Configuration Options**
{: .no_toc }

- **Styling Configuration** - Customize subtitle appearance and behavior
- **Duration Settings** - Configure how long subtitles are displayed
- **Visual Customization** - Adjust fonts, colors, positioning, and effects
- **Integration Options** - Easy integration with other scripts

### **User Experience**
{: .no_toc }

- **Cinematic Feel** - Professional subtitle display for immersive gameplay
- **Easy Integration** - Simple export function for any script
- **Customizable** - Full control over subtitle appearance
- **Performance Optimized** - Lightweight and efficient

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Script Integration**
{: .no_toc }

- **Universal Integration** - Works with any FiveM script
- **Export Function** - Simple client-side export for easy integration
- **Custom Scripts** - Perfect for custom missions, cutscenes, and events
- **Cinematic Content** - Enhance storytelling and immersion

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Lightweight and efficient
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Cinematic Enhancement:** Subtitles enhance the cinematic experience of your FiveM server with professional subtitle displays.

---

## 📊 Exports

### **Client-Side Exports**
{: .no_toc }

```lua
-- Display a subtitle
exports.night_subtitles:DisplaySubtitle(text, duration_in_milliseconds)
```

### **Parameter Details**
{: .no_toc }

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | string | The subtitle text to display |
| `duration_in_milliseconds` | number | How long to display the subtitle in milliseconds |

### **Usage Examples**
{: .no_toc }

```lua
-- Basic subtitle display
exports.night_subtitles:DisplaySubtitle("Welcome to Nights Software🙂. It's time for some real subtitles!", 5000)

-- Short subtitle
exports.night_subtitles:DisplaySubtitle("Hello World", 3000)

-- Long subtitle
exports.night_subtitles:DisplaySubtitle("This is a longer subtitle message that will be displayed for a longer duration", 8000)
```

{: .tip }
> **Export Usage:** Use this export function to display subtitles from any client-side script for cinematic experiences.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Export Not Found**
> - Ensure the resource is properly started in server.cfg
> - Check that the resource name is `night_subtitles`
> - Verify the resource started without errors in console

{: .warning }
> **Subtitles Not Displaying**
> - Check F8 console for any error messages
> - Verify the export parameters are correct
> - Ensure the text parameter is a string and duration is a number

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

### **Subtitle Design**
{: .no_toc }

- **Clear Text** - Use concise, readable subtitle text
- **Appropriate Duration** - Set duration based on text length and reading speed
- **Consistent Styling** - Use consistent subtitle formatting across your server
- **Cinematic Timing** - Coordinate subtitles with other cinematic elements

### **Integration Tips**
{: .no_toc }

- **Mission Integration** - Use subtitles for mission instructions and dialogue
- **Event Enhancement** - Add subtitles to server events and announcements
- **Storytelling** - Enhance narrative elements with subtitle displays
- **Error Handling** - Implement proper error handling for export calls

### **User Experience**
{: .no_toc }

- **Readable Text** - Ensure subtitles are easy to read
- **Appropriate Timing** - Don't overwhelm players with too many subtitles
- **Contextual Usage** - Use subtitles when they enhance the experience
- **Accessibility** - Consider players who may need subtitle support

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}