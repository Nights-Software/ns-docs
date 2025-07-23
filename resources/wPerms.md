---
layout: default
title: "Weapon Permissions (wPerms)"
nav_order: 12
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discord_wperms.png" alt="Weapon Permissions" draggable="false">

# Discord wPerms!
{: .no_toc}

A guide to install Discord wPerms! for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Drag, drop and configure! Supported by our free Discord API. This script allows you to restrict weapons to Discord roles. The Discord role will be required to wield a specified weapon.

### **Key Features**
{: .no_toc }

- ✅ **Discord Role Integration** - Restrict weapon access by Discord roles
- ✅ **Weapon Permission System** - Require Discord roles to wield specified weapons
- ✅ **Free Discord API** - Supported by our included Discord API resource
- ✅ **Drag & Drop Setup** - Simple configuration and deployment
- ✅ **Role-Based Access** - Require specific Discord roles for weapon access
- ✅ **Multiple Weapon Categories** - Organize weapons by role requirements
- ✅ **Standalone** - Works independently without framework dependencies
- ✅ **Universal Compatibility** - Works with any FiveM server

---

## 🛒 Purchase Information

**Get Discord wPerms! for FiveM:**

Base: [Purchase on Nights Software Store](https://store.nights-software.com/package/5336351){: .btn .btn-blue}

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_discord_wperms` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_discord_wperms
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** Discord roles and weapon permissions
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

### **Dependencies**
{: .no_toc }

- **Included:** Discord API resource (included in this package)

{: .tip }
> **Note:** wPerms is designed to work with any FiveM server configuration and includes the required Discord API.

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
| `night_discord_wperms/config/config.lua` | Main configuration and Discord settings |
| `night_discord_wperms/client/c_functions.lua` | Client-side functions |
| `night_discord_wperms/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments in green text
3. **Configure Discord roles** - set up role-based weapon permissions
4. **Configure weapon lists** - assign weapons to specific Discord roles
5. **Test frequently** - use F8 console for error checking

{: .tip }
> **Weapon Configuration:** Set up Discord roles and weapon permissions with drag & drop simplicity.

---

## 🎮 How It Works

### **Permission System**
{: .no_toc }

- **Discord Role Verification** - Check player's Discord roles for weapon access
- **Weapon Allowlist** - Configure which weapons each role can wield
- **Real-Time Validation** - Verify permissions when players equip weapons
- **Access Control** - Restrict weapon access based on Discord roles

### **Weapon Management**
{: .no_toc }

- **Role-Based Lists** - Set up lists of weapons per Discord role(s)
- **Multiple Roles** - Support for multiple Discord roles per weapon
- **Weapon Categories** - Organize weapons by role requirements
- **Permission Hierarchy** - Manage different access levels

### **Configuration Options**
{: .no_toc }

- **Discord Integration** - Configure Discord API settings and webhooks
- **Role Assignment** - Assign Discord roles to weapon access
- **Weapon Lists** - Create lists of weapons for each role
- **Access Control** - Set up permission requirements and restrictions
- **Debug Settings** - Enable debugging for troubleshooting

### **Discord API Integration**
{: .no_toc }

- **Free Discord API** - Supported by our included Discord API resource
- **Role Verification** - Real-time Discord role checking
- **Webhook Integration** - Discord notifications and logging
- **API Management** - Handle Discord API connections and authentication

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies
- **Universal Integration** - Compatible with any FiveM server setup

### **Discord Integration**
{: .no_toc }

- **Role-Based Access** - Restrict weapon access by Discord roles
- **Real-Time Verification** - Check Discord roles when equipping weapons
- **Webhook Notifications** - Discord notifications for weapon access
- **API Management** - Handle Discord API connections and authentication

### **Script Integration**
{: .no_toc }

- **Weapon Management** - Integrate with existing weapon systems
- **Permission Systems** - Connect with server permission management
- **Access Control** - Enhance weapon security and access control
- **Custom Scripts** - Perfect foundation for building role-based systems

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient permission checking and validation
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Weapon Security:** wPerms enhances weapon security with Discord role-based access control.

---

## 📊 Configuration Examples

### **Functional Configuration Example**
{: .no_toc }

```lua
[1] = {
    SectionName = "Firearms units", 
    PermLockedWeapons = {          -- List the weapons you wish to restrict. So: You need atleast 1 role from RequiredDiscordRoleOrGroupNames to wield the weapon in this list.
        "WEAPON_COMBATPISTOL",
        "WEAPON_ASSAULTRIFLE",
    },
    RequiredDiscordRoleOrGroupNames = {
        "SWAT",
        "AFO",
        "DSI",
        "BSB",
        "MARSOF",
        -- Add more roles if you like.
    },
},
[2] = {
    SectionName = "Sniper units",
    PermLockedWeapons = {
        "WEAPON_SNIPERRIFLE",
        "WEAPON_HEAVYSNIPER",
        "WEAPON_HEAVYSNIPER_MK2",
        "WEAPON_MARKSMANRIFLE",
        "WEAPON_MARKSMANRIFLE_MK2",
    },
    RequiredDiscordRoleOrGroupNames = {
        "SWAT",
        "AFO",
        "DSI",
        "BSB",
        "MARSOF",
        -- Add more roles if you like.
    },
},
[3] = {
    SectionName = "Server banned weapons",
    PermLockedWeapons = {
        "WEAPON_RPG",
        "WEAPON_HOMINGLAUNCHER",
        "WEAPON_RAILGUN",
        "WEAPON_MINIGUN",
        "WEAPON_RAYMINIGUN"
    },
    RequiredDiscordRoleOrGroupNames = {
        -- None..
        -- "Manager", -- or
        -- "Senior_Admin", -- or
        -- Add more roles if you like.
    },
},
```

### **Configuration Notes**
{: .no_toc }

{: .important }
> **Important:** List each weapon separately if you want multiple roles to be able to wield this particular weapon. The logic is that you list the weapon and then the roles. If you have duplicate weapons in lists it might go wrong!

{: .tip }
> **Configuration Structure:** Each section contains a name, list of restricted weapons, and required Discord roles for access.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Weapon Access Denied**
> - Check if you have the required Discord roles
> - Verify Discord API is working (check config and server console)
> - Ensure weapon names are correctly defined

{: .warning }
> **Discord API Issues**
> - Check Discord API configuration in config.lua
> - Verify Discord bot permissions and webhook settings
> - Ensure Discord API resource is properly started

{: .warning }
> **Configuration Errors**
> - Check the config.lua file for syntax errors
> - Verify Discord role and weapon configurations
> - Test with default settings first

{: .warning }
> **Duplicate Weapons**
> - Ensure weapons are not listed multiple times in different sections
> - Check for duplicate weapon entries that might cause conflicts

### **Debugging Tips**
{: .no_toc }

- **Enable Debug Mode** - Turn on debug in config.lua for detailed logging
- **Check F8 Console** - Look for weapon access logs and error messages
- **Verify Discord Roles** - Ensure roles are correctly assigned
- **Test Weapon Access** - Try equipping weapons with proper roles
- **Check File Permissions** - Ensure all files are accessible

{: .tip }
> **Debug Mode:** Use debug mode to identify weapon access issues and troubleshoot permission problems.

---

## 💡 Best Practices

### **Discord Role Management**
{: .no_toc }

- **Clear Role Structure** - Design logical Discord role hierarchy
- **Role Permissions** - Assign appropriate weapon access to roles
- **Role Verification** - Regularly verify Discord role assignments
- **Access Control** - Implement proper role-based access control

### **Weapon Configuration**
{: .no_toc }

- **Weapon Lists** - Organize weapons by role requirements
- **Weapon Names** - Use correct weapon names in configuration
- **Testing** - Thoroughly test weapon access with different roles
- **Documentation** - Document weapon-role assignments

### **Discord Integration**
{: .no_toc }

- **API Configuration** - Properly configure Discord API settings
- **Webhook Setup** - Set up Discord webhooks for notifications
- **Bot Permissions** - Ensure Discord bot has necessary permissions
- **API Monitoring** - Monitor Discord API connection status

### **Security Best Practices**
{: .no_toc }

- **Role Verification** - Implement secure Discord role checking
- **Access Logging** - Log weapon access attempts and permissions
- **Error Handling** - Handle Discord API failures gracefully
- **User Communication** - Provide clear feedback for access denials

---

## 📺 Installation Tutorial

**Watch the installation tutorial:**

[Installation Tutorial](https://youtu.be/xwEWLrmzz84?si=rnMXWkBDtfkyp_Yi){: .btn .btn-red}

{: .tip }
> **Visual Guide:** Follow the video tutorial for step-by-step installation guidance.

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}