---
layout: default
title: "Loading Screen"
nav_order: 37
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_loading_screen.png" alt="Ambilight Loading Screen Resource" draggable="false">

# Ambilight Loading Screen for FiveM
{: .no_toc}

A guide to install Ambilight Loading Screen for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

This FiveM loadingscreen allows you to configure your (ambilight youtube video) loading screen to your desire! Check out the options below and discover the possibilities for each!

### **Two Display Choices**
{: .no_toc }

**1. YouTube Video Ambilight**
- Display a YouTube video with or without sound
- Edit sound settings in configuration options
- Behind the video, the screen lights up with ambilight effect
- Optional clouds overlay for enhanced loading experience
- See YouTube video showcase at the bottom

**2. Picture Slideshow**
- Display pictures that switch by configurable interval
- Option to play background music (or not)
- You decide which pictures to display and in what order

### **Key Features**
{: .no_toc }

- ✅ **YouTube Video Ambilight** - Dynamic lighting effects behind videos
- ✅ **Configurable Text** - Customize text size and color
- ✅ **Background Music** - 35+ preset songs with volume settings
- ✅ **Loading Bar Customization** - Configure loading bar colors
- ✅ **Logo Display** - Show your custom logo
- ✅ **Language Support** - Multi-language configuration
- ✅ **Escrow Protection** - Secure resource with optimization
- ✅ **Standalone** - Works without framework dependencies
- ✅ **Universal Compatibility** - Made for any FiveM server

---

## 🎥 Video Showcase

**Watch Ambilight Loading Screen in action:**

[Video Showcase 1](https://youtu.be/NV4aPsyfBKI){: .btn .btn-red}
[Video Showcase 2](https://youtu.be/IgIvUpZvx0A){: .btn .btn-red}

---

## 📚 Installation Tutorial

**Follow our step-by-step installation guide:**

[Installation Tutorial](https://youtu.be/5-EXTiUWMpQ?si=6vetoG8nRQb0X2MA){: .btn .btn-blue}

---

## 🛒 Purchase Information

**Get Ambilight Loading Screen:**
[Purchase on Nights Software Store](https://store.nights-software.com/package/5504509){: .btn .btn-blue}

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

{: .warning }
> **Image Hosting Requirements:** Services like Imgur and Discord do **not** work with this script. Your image host must support direct image linking.

---

## 🔧 System Requirements & Compatibility

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works without any framework dependencies

{: .tip }
> **Note:** Ambilight Loading Screen is designed to work with any FiveM server configuration.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "Ambilight Loading Screen" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_loading_screen` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```cfg
ensure night_loading_screen
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
| `night_loading_screen/config/config.lua` | Main configuration settings |
| `night_loading_screen/client/c_functions.lua` | Client-side functions |
| `night_loading_screen/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments in green text
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

{: .tip }
> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

---

## 🎮 How It Works

### **YouTube Video Mode**
{: .no_toc }

- **Video Display** - Show YouTube videos with or without sound
- **Ambilight Effect** - Dynamic lighting behind the video
- **Clouds Overlay** - Optional atmospheric enhancement
- **Sound Control** - Configure audio
- **Custom Text** - Configure text size and colors

### **Picture Slideshow Mode**
{: .no_toc }

- **Image Rotation** - Pictures switch at configurable intervals
- **Custom Order** - You decide which pictures to display
- **Background Music** - Optional music with 35+ preset songs
- **Volume Control** - Adjust music volume settings
- **Loading Bar** - Customizable loading bar colors

### **Customization Options**
{: .no_toc }

- **Logo Display** - Show your custom server logo
- **Text Configuration** - Customize all text elements
- **Color Schemes** - Match your server's branding
- **Language Support** - Multi-language configuration

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **Universal** - Compatible with all FiveM server configurations

### **Media Integration**
{: .no_toc }

- **YouTube Integration** - Direct YouTube video support
- **Image Hosting** - Compatible with direct image link services
- **Audio Support** - Background music with preset library

{: .tip }
> **Media Setup:** Ensure your image hosting service supports direct image linking for picture slideshow mode.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Parsing Errors in F8 Console**
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg

{: .warning }
> **Images Not Loading**
> - Verify image hosting service supports direct linking
> - Check image URLs are accessible
> - Avoid Imgur and Discord for image hosting

{: .warning }
> **YouTube Videos Not Playing**
> - Verify YouTube video URLs are correct
> - Check video accessibility and region restrictions
> - Ensure proper video ID format

### **Performance Optimization**
{: .no_toc }

- **Optimize image sizes** - Use appropriately sized images
- **Monitor loading times** - Check for slow-loading media
- **Test on different connections** - Ensure compatibility across various speeds

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Brand Consistency** - Match colors and logos to your server theme
- **Image Quality** - Use high-quality images for slideshow mode
- **Music Selection** - Choose appropriate background music
- **Backup Configurations** - Keep backups of working configurations

### **Media Management**
{: .no_toc }

- **Image Hosting** - Use reliable direct-link image hosting services
- **Video Selection** - Choose appropriate YouTube videos
- **File Optimization** - Optimize media files for faster loading

### **User Experience**
{: .no_toc }

- **Loading Time** - Ensure reasonable loading times
- **Visual Appeal** - Create engaging loading screen experience
- **Server Branding** - Reflect your server's identity

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
