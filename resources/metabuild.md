---
layout: default
title: "Meta Build"
nav_order: 10
has_children: false
has_toc: true
last_modified_date: "2026-11-02 18:30:00"
---

<img class="cover-img" src="/assets/img/night_metabuild.png" alt="MetaBuild" draggable="false">

# MetaBuild - The Ultimate Building & Construction Tool for FiveM
{: .no_toc}

A guide to install MetaBuild for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Take your server customization to the next level with MetaBuild! Whether you're crafting a post-apocalyptic world or building a large-scale military training facility, MetaBuild gives you complete freedom to construct, edit, and manage objects effortlessly. MetaBuild even allows you to save your creations after server restarts!

### **Key Features**
{: .no_toc }

- ✅ **Build Mode (No Clip)** - Easily move and place objects without restrictions
- ✅ **Synchronized** - Everything you build is synchronized over all players
- ✅ **Saved** - Everything you build is saved, unless you configure to refresh on restarts
- ✅ **Advanced Snapping Tools** - Rotate and snap objects with precision
- ✅ **Ground Placement Option** - Ensure stable and realistic object positioning
- ✅ **Demolish Mode** - Quickly remove unwanted structures
- ✅ **Comprehensive Object Menu** - Manage objects (Build, edit, delete, customize categories)
- ✅ **Built-in Door Lock System** - Secure areas with key-based access
- ✅ **Key Management** - Give, take, or reset duplicate keys
- ✅ **Object Customization** - Add, edit, and delete objects with ease
- ✅ **Object Pictures** - A picture for almost every object in the menu
- ✅ **High Performance Rendering** - Supports up to 1,500 objects per 750 GTA meters
- ✅ **Custom Object Lifespan** - Define how long objects remain in-game
- ✅ **Paid Construction Option** - Monetize object placement if desired
- ✅ **Flexible Permissions** - Configure access for Admins, Moderators, Trusted Users
- ✅ **Detailed Permission Settings** - Control building zones, editing, road construction
- ✅ **Powerful Management Panel** - Mass delete objects/keys, track stats
- ✅ **Discord Webhook Integrations** - Built-in Discord notifications
- ✅ **Multi-Framework Support** - ESX/QBCore/Standalone compatible
- ✅ **Escrow Protection** - Secure resource with multi-language support

---

## 🎥 Video Showcase

**Watch MetaBuild in action:**

[Video Showcase](https://youtu.be/Rwdo_Ua2qXY?si=J9O8UtKvxzuCPxbU){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get MetaBuild:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/6755408){: .btn .btn-blue}

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
> **Database Requirement:** MetaBuild requires a MySQL database and oxmysql resource to function properly.

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
- **✅ Standalone:** Works without any framework

### **Dependencies**
{: .no_toc }

- **✅ MySQL Database** - Required for data storage
- **✅ oxmysql** - Required database API
- **✅ Dynamic Door Creation** - Server setting required

{: .tip }
> **Note:** MetaBuild works seamlessly with all major FiveM frameworks and requires proper database setup.

---

## 📦 Installation Process

### **Step 1: Download the Resource**
{: .no_toc }

1. **Access CFX Portal**
   - Go to [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
   - Find "MetaBuild" in your granted assets
   - Download the ZIP package

### **Step 2: Extract and Transfer**
{: .no_toc }

1. **Extract the ZIP file**
   - Unpack the downloaded ZIP package to a local folder
   - Ensure all files are properly extracted

2. **Transfer to Server**
   - Set your FTP client to **binary transfer mode**
   - Upload the `night_metabuild` folder to your server's `resources` directory
   - Maintain the original folder structure

### **Step 3: Server Configuration**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
ensure night_metabuild
```

{: .tip }
> **Server Restart:** After adding the ensure line, restart your server for the resource to load properly.

---

## 🗄️ Database Setup (Required)

### **Step 1: Enable Dynamic Door Creation**
{: .no_toc }

Add this line to your `server.cfg` above the starting of scripts:

```conf
setr game_enableDynamicDoorCreation "true"
```

### **Step 2: Database Connection String**
{: .no_toc }

Add your MySQL connection string to `server.cfg` above the ensure/start of resources:

```conf
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```

{: .tip }
> **Localhost Example:**
> ```conf
> set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
> ```

### **Step 3: Automatic Table Installation**
{: .no_toc }

When you boot up the server, MetaBuild will automatically run queries to install the required tables into your database.

{: .warning }
> **Do not manually import SQL file into your database:** The script is required to do this for you! 

---

## 🔌 oxmysql Installation (Required)

### **Step 1: Download oxmysql**
{: .no_toc }

If you don't have oxmysql installed, download it from:
[Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)

### **Step 2: Install oxmysql**
{: .no_toc }

1. **Place oxmysql** into your resources folder
2. **Add to server.cfg** - Ensure it starts before MetaBuild:

```conf
ensure oxmysql
```

{: .tip }
> **Documentation:** For oxmysql questions, visit [oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

### **Step 3: Test Database Connection**
{: .no_toc }

Start your server and check the console for oxmysql connection messages. You should see confirmation that the database connection is working.

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
| `night_metabuild/config/config.lua` | Main configuration settings |
| `night_metabuild/client/c_functions.lua` | Client-side functions |
| `night_metabuild/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

{: .tip }
> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

### **Discord Webhooks**
{: .no_toc }

MetaBuild can post to a Discord channel when players place or demolish objects, when objects are added to or removed from the menu, and when keys or objects are deleted in bulk. Webhooks are off by default. To turn them on, set both lines in `config/config.lua`:

```lua
Config.Enable_Discord_Webhooks = true
Config.DiscordWebhookUrl = 'https://discord.com/api/webhooks/...'
```

{: .warning }
> **Keep your webhook URL private.** Anyone who has it can post to your channel.

---

## 🎮 How It Works

### **Building System**
{: .no_toc }

- **Build Mode** - No-clip movement and object placement
- **Advanced Snapping** - Precise object rotation and positioning
- **Ground Placement** - Stable and realistic object positioning
- **High Performance** - Supports up to 1,500 objects per 750 GTA meters
- **Object Lifespan** - Customizable object persistence

### **Management Features**
{: .no_toc }

- **Comprehensive Menu** - Build, edit, delete, and customize objects
- **Door Lock System** - Key-based access control
- **Key Management** - Give, take, or reset duplicate keys
- **Mass Operations** - Bulk delete objects and keys
- **Statistics Tracking** - Monitor object usage and performance

### **Object Pictures**
{: .no_toc }

The object menu shows a picture of each object, made by Nights Software. Each player's game downloads them from `assets.nights-software.com` and keeps them, so a picture is downloaded only once. For the few objects without one, the menu uses the picture site set in `Config.ApiUrl` (`config/default-objects-config.lua`).

To use your own picture for an object, open the object's edit menu and put a link to the image in **Custom Picture URL** (use an `https://` link). Leave the field empty to show the default picture.

### **Permission System**
{: .no_toc }

- **Flexible Access** - Configure for Admins, Moderators, Trusted Users
- **Zone Control** - Define building zones and restrictions
- **Road Construction** - Control road building permissions
- **Menu Access** - Manage who can access building menus

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **ESX** - Full ESX framework integration
- **QBCore** - Full QBCore framework integration

### **Database Integration**
{: .no_toc }

- **MySQL Database** - Persistent storage for all constructions
- **oxmysql API** - Reliable database connectivity
- **Automatic Backups** - Built-in data protection

{: .tip }
> **Database Setup:** Ensure your MySQL database is properly configured and accessible.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Parsing Errors in F8 Console**
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg

{: .warning }
> **Database Connection Issues**
> - Verify MySQL connection string is correct
> - Check database credentials and accessibility
> - Ensure oxmysql is properly installed and started

{: .warning }
> **Objects Not Saving**
> - Verify database tables are created
> - Check oxmysql connection status
> - Ensure proper permissions are set

### **Performance Optimization**
{: .no_toc }

- **Object Limits** - Monitor object count per area
- **Database Performance** - Optimize MySQL queries
- **Rendering Distance** - Configure appropriate render distances

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Permission Planning** - Set up appropriate access levels
- **Zone Management** - Define logical building zones
- **Object Organization** - Use categories for better management
- **Backup Configurations** - Keep backups of working configurations

### **Database Management**
{: .no_toc }

- **Regular Backups** - Backup your database regularly
- **Performance Monitoring** - Monitor database performance
- **Table Maintenance** - Periodically optimize database tables

### **Server Performance**
{: .no_toc }

- **Object Limits** - Respect recommended object limits
- **Render Optimization** - Configure appropriate render distances
- **Resource Management** - Monitor resource usage with large builds

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
