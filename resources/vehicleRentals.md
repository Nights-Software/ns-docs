---
layout: default
title: "Vehicle Rentals"
nav_order: 18
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_rentals.png" alt="Vehicle Rentals! Resource" draggable="false">

# Vehicle Rentals!
{: .no_toc}

A guide to install Vehicle Rentals! for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Configure rental locations where you can define 6 types of unlimited vehicles, boats, planes, and helicopters which can be rented. This comprehensive rental system includes Discord integrations and a customizable purchase method to adapt the script to your framework!

### **Key Features**
{: .no_toc }

- ✅ **Rental Locations** - Configure unlimited rental locations across your server
- ✅ **6 Vehicle Types** - Support for cars, boats, planes, helicopters, and more
- ✅ **Unlimited Vehicles** - Add as many vehicles as you want to each category
- ✅ **Discord Integration** - Built-in Discord notifications and logging
- ✅ **Framework Customization** - Adaptable purchase method for any framework
- ✅ **Multiple Categories** - Cars, boats, planes, helicopters, and custom types
- ✅ **Flexible Configuration** - Easy setup and customization options
- ✅ **Universal Compatibility** - Works with any FiveM server

---

## 🛒 Purchase Information

**Get Vehicle Rentals! for FiveM:**

Base: [Purchase on Nights Software Store](https://store.nights-software.com/package/5009931){: .btn .btn-blue}

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_rentals` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_rentals
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** rental locations and vehicle types
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

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

{: .tip }
> **Note:** Vehicle Rentals is designed to work with any FiveM server configuration and includes customizable framework integration.

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
| `night_rentals/config/config.lua` | Main configuration and rental settings |
| `night_rentals/client/c_functions.lua` | Client-side functions |
| `night_rentals/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure rental locations** - add coordinates for rental locations
4. **Configure vehicle types** - set up 6 categories of vehicles
5. **Test frequently** - use F8 console for error checking

{: .tip }
> **Rental Configuration:** Configure unlimited rental locations with 6 different vehicle categories.

---

## 🎮 How It Works

### **Rental System**
{: .no_toc }

- **Rental Locations** - Configure unlimited rental locations across your server
- **Vehicle Categories** - 6 different types of vehicles (cars, boats, planes, helicopters, etc.)
- **Unlimited Vehicles** - Add as many vehicles as you want to each category
- **Rental Process** - Simple and intuitive rental interface

### **Vehicle Types**
{: .no_toc }

- **Cars** - Standard ground vehicles for city transportation
- **Boats** - Water vehicles for maritime activities
- **Planes** - Aircraft for aerial transportation
- **Helicopters** - Rotary-wing aircraft for versatile air travel
- **Custom Types** - Additional vehicle categories for special vehicles
- **Specialty Vehicles** - Unique vehicles for specific purposes

### **Configuration Options**
{: .no_toc }

- **Location Management** - Configure rental locations with precise coordinates
- **Vehicle Selection** - Add unlimited vehicles to each category
- **Pricing System** - Set custom rental prices for different vehicles
- **Time Limits** - Configure rental duration and return policies
- **Access Control** - Set permissions and requirements for rentals

### **Framework Integration**
{: .no_toc }

- **Standalone Mode** - Works independently without framework dependencies

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Discord Integration**
{: .no_toc }

- **Rental Notifications** - Discord webhook notifications for rentals
- **Activity Logging** - Track rental activities in Discord channels
- **Admin Notifications** - Alert administrators of rental activities
- **Custom Webhooks** - Configure custom Discord integration settings

### **Script Integration**
{: .no_toc }

- **Business Systems** - Integrate with rental business management
- **Economy Systems** - Connect with server economy and payment systems
- **Vehicle Management** - Integrate with existing vehicle systems
- **Custom Scripts** - Perfect foundation for building rental businesses

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** - Works with any FiveM server setup
- **Performance Optimized** - Efficient rental management and operation
- **Easy Integration** - Simple setup and configuration

{: .tip }
> **Rental Business:** Vehicle Rentals provides a complete rental business solution with Discord integration and framework customization.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Rental Not Working**
> - Ensure the resource is properly started in server.cfg
> - Check that the resource name is `night_rentals`
> - Verify rental location coordinates are correctly configured

{: .warning }
> **Discord Integration Issues**
> - Check Discord webhook configuration in config.lua
> - Verify webhook URLs are correct and accessible
> - Ensure Discord bot permissions are properly set

{: .warning }
> **Framework Integration Problems**
> - Verify framework-specific configuration settings
> - Check payment method configuration for your framework
> - Ensure framework events are properly configured

{: .warning }
> **Configuration Errors**
> - Check the config.lua file for syntax errors
> - Verify rental location and vehicle configurations
> - Test with default settings first

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test Rental Locations** - Verify rental points are accessible
- **Verify Resource Loading** - Ensure resource starts without errors
- **Check File Permissions** - Ensure all files are accessible

---

## 💡 Best Practices

### **Rental Location Design**
{: .no_toc }

- **Strategic Placement** - Place rental locations in accessible areas
- **Vehicle Organization** - Organize vehicles by type and purpose
- **Clear Signage** - Provide clear indicators for rental locations
- **Safety Considerations** - Ensure safe vehicle pickup and return areas

### **Configuration Tips**
{: .no_toc }

- **Vehicle Selection** - Choose appropriate vehicles for each category
- **Pricing Strategy** - Set competitive and balanced rental prices
- **Time Management** - Configure reasonable rental durations
- **Access Control** - Implement appropriate rental requirements

### **Discord Integration**
{: .no_toc }

- **Webhook Setup** - Configure Discord webhooks for notifications
> - **Channel Organization** - Use dedicated channels for rental activities
- **Notification Settings** - Set appropriate notification levels
- **Admin Access** - Provide admin access to rental activity logs

### **Framework Integration**
{: .no_toc }

- **Payment Method** - Configure payment system for your framework
- **User Authentication** - Set up proper user verification
- **Economy Integration** - Connect with server economy systems
- **Permission Systems** - Implement appropriate access controls

### **Business Operations**
{: .no_toc }

- **Customer Service** - Provide clear rental instructions and support
- **Vehicle Maintenance** - Implement vehicle condition tracking
- **Revenue Management** - Monitor rental income and profitability
- **User Experience** - Ensure smooth and intuitive rental process

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
