---
layout: default
title: "Night Shifts MDT"
nav_order: 5
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_shifts.png" alt="Night Shifts - Mobile Data Terminal Resource" draggable="false">

# Night Shifts - Mobile Data Terminal for FiveM
{: .no_toc}

A guide to install Night Shifts - Mobile Data Terminal for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

{: .warning }
> **EARLY ACCESS** - This script is in early access. Help us out and report any bugs you find! We are planning on releasing a BETA version around SUMMER/FALL 2025.

Welcome to Night Shifts - MDT, a customizable MDT system for your community. Whether you're running a police, fire, or EMS department, Night Shifts provides a range of features to help you manage your operations. Our MDT is configurable to fit the needs of emergency services in any country.

### **Key Features**
{: .no_toc }

- ✅ **Customizable MDT System** - Adapt to any country's emergency services
- ✅ **Multi-Department Support** - Police, Fire, EMS, and Civilian departments
- ✅ **Emergency Services Hotline** - 999/911/112 emergency call system
- ✅ **Police National Computer (PNC)** - Person, vehicle, and record searches
- ✅ **Civilian Registry** - Council/City Hall civilian management
- ✅ **Vehicle Registry** - DVLA/DMV vehicle management
- ✅ **Shift Management** - Department, sub-department, and status tracking
- ✅ **Unit Overview** - Control and dispatch functionality
- ✅ **Report System** - Create and manage police, fire, and ambulance reports
- ✅ **Statistics Tracking** - Department performance monitoring
- ✅ **ANPR Integration** - Automatic Number Plate Recognition
- ✅ **Emergency Response Simulator Compatible** - Search NPCs and vehicles
- ✅ **Discord Integration** - Role-based access control
- ✅ **Multi-Language Support** - International server support
- ✅ **Escrow Protection** - Secure resource protection

---

## 🛒 Purchase Information

**Get Night Shifts MDT:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5667103){: .btn .btn-blue}

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
> **Database Requirement:** Night Shifts MDT requires a MySQL database and oxmysql resource to function properly.

{: .tip }
> **Emergency Response Simulator Compatible:** It is possible to search NPCs and their vehicles in the MDT when they have been interacted with via the Emergency Response Simulator.

---

## 🔧 System Requirements & Compatibility

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works without any framework and is not made to integrate with QBCore/ESX. This will change in the future.

### **Dependencies**
{: .no_toc }

- **✅ MySQL Database** - Required for data storage
- **✅ oxmysql** - Required database API
- **✅ Night Discord API** - Required for permissions (included)

{: .tip }
> **Note:** Night Shifts MDT works seamlessly with all major FiveM frameworks and requires proper database setup.

---

## 📦 Installation Process

### **Step 1: Database Setup (Required)**
{: .no_toc }

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for Night Shifts MDT to work.

1. **Set up your database** via your hosting provider
2. **Connect to your database** using credentials in an SQL connection string
3. **Add to server.cfg** above the ensure/start of resources:

```conf
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```

{: .tip }
> **Localhost Example:**
> ```conf
> set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
> ```

4. **Automatic Table Installation** - When you boot up the server, the code will run queries to install required tables

{: .note }
> **Manual Installation:** The files include a `datatables.sql` file if you prefer to manually install the tables.

### **Step 2: Install oxmysql (Required)**
{: .no_toc }

If you don't have oxmysql installed, download it from:
[Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)

1. **Place oxmysql** into your resources folder
2. **Add to server.cfg** - Ensure it starts before Night Shifts MDT:

```conf
ensure oxmysql
```

{: .tip }
> **Documentation:** For oxmysql questions, visit [oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

### **Step 3: Test Database Connection**
{: .no_toc }

Start your server and check the console for oxmysql connection messages. You should see:
```conf
[script:oxmysql] Database server connection established!
```

### **Step 4: Install nearest-postal (Optional - Recommended)**
{: .no_toc }

This optional resource fits well within the purpose of Night Shifts MDT:

1. **Download** from [CFX Forum Release](https://forum.cfx.re/t/release-nearest-postal-script/293511)
2. **Extract and rename** 'nearest-postal-master' to 'nearest-postal'
3. **Add to server.cfg** before Night Shifts MDT:

```conf
ensure nearest-postal
```

4. **Install postal map** - Download from [CFX Release](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458)
5. **Add map resource** to server.cfg:

```conf
ensure map
```

### **Step 5: Install Night Discord API (Required)**
{: .no_toc }

Download our free Discord API: [NS Discord API Free](https://store.nights-software.com/package/5035729)

1. **Install Discord API** using [this documentation page](https://docs.nights-software.com/resources/discordAPI/)
2. **Note role names** from Discord API config.lua for later use
3. **Add to server.cfg** before Night Shifts MDT:

```conf
ensure night_discordapi
```

### **Step 6: Install Night Shifts MDT**
{: .no_toc }

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
2. **Extract and transfer** using binary FTP mode
3. **Place 'night_shifts'** into your resources folder
4. **Add to server.cfg**:

```conf
ensure night_shifts
```

5. **Verify startup** - Check console for both oxmysql and night_shifts starting without errors

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
| `night_shifts/config/anpr_config.lua` | ANPR configuration settings |
| `night_shifts/config/config.lua` | Main configuration settings |
| `night_shifts/config/departments_config.lua` | Department and role configuration |
| `night_shifts/config/fictivenames_config.lua` | Fictive name configuration |
| `night_shifts/config/handbooks_config.lua` | EMS Handbook configuration |
| `night_shifts/config/mdt_config.lua` | Menu, HUD, statusses & more configuration |
| `night_shifts/config/translations.lua` | Language configuration |
| `night_shifts/client/c_functions.lua` | Client-side functions |
| `night_shifts/server/s_functions.lua` | Server-side functions |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

{: .tip }
> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

---

## 🎮 How It Works

### **Civilian Side**
{: .no_toc }

- **Emergency Services Hotline** - Call 999/911/112 with detailed information
- **Council/City Hall** - Register and edit civilians with custom profile pictures
- **DVLA/DMV** - Register and edit vehicles connected to civilians

### **Emergency Services Side**
{: .no_toc }

- **Battery & Signal** - Charge MDT in vehicles, signal based on ping
- **Shift & Status** - Department selection, shift toggling, panic button
- **Emergency Hotline** - Receive calls, view archives, locate with waypoints
- **Police National Computer** - Person, vehicle, record, and fine searches
- **Unit Overview** - Control and dispatch functionality
- **Operations** - Create and manage reports, view guidelines
- **Statistics** - Department performance monitoring

### **Server Owner Features**
{: .no_toc }

- **ANPR Camera Locations** - Configurable camera positions
- **Fire Station Alarms** - Configurable alarm triggers
- **Custom Images & Sounds** - Configurable NUI elements
- **Multi-Language Support** - International configuration
- **Department Management** - Configurable departments, ranks, and roles

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

- **Standalone** - Works independently without framework dependencies

### **Emergency Response Simulator Integration**
{: .no_toc }

- **NPC Search** - Search NPCs and their vehicles in the MDT
- **Interaction Tracking** - Track NPC interactions via Emergency Response Simulator
- **Vehicle Registration** - Automatic vehicle registration from interactions

{: .tip }
> **Integration Setup:** Ensure Emergency Response Simulator is properly configured for NPC interaction tracking.

---

## 📊 Exports

### **Server-Side Exports**
{: .no_toc }

```lua
-- Get user shift data for server ID
local src = source
local shiftDataResults = exports['night_shifts']:GetUserShiftData(src)
if #shiftDataResults > 0 then
    for k, v in pairs(shiftDataResults) do
        print("Key: "..k.." | Value: "..v)
    end
else
    print("No shift data found for server ID "..src)
end
```

### **Client-Side Exports**
{: .no_toc }

```lua
-- Trigger alarm
exports.night_shifts:TriggerAlarm(isEmergency, isPoliceRequired, isAmbulanceRequired, isFireRequired, isTowRequired, description, coordinates)

-- Create emergency call
exports.night_shifts:CreateEmergencyCall(isEmergency, isPoliceRequired, isAmbulanceRequired, isFireRequired, isTowRequired, description, caller_name, coordinates, contact_details)

-- Get department counts
exports.night_shifts:GetCivilianCount()
exports.night_shifts:GetPoliceCount()
exports.night_shifts:GetAmbulanceCount()
exports.night_shifts:GetFireCount()
exports.night_shifts:GetTowCount()
```

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
> **FiveM ID Not Found**
> - Log into FiveM app when inside the app
> - Close and reopen FiveM app
> - Join server as a logged in user

{: .warning }
> **Resource Naming**
> - Ensure script is named `night_shifts` (do NOT rename)
> - Check resource folder structure

### **Configuration Tips**
{: .no_toc }

- **Start resource before players join** - Prevents database errors
- **Order index numbers correctly** - Use [1], [2], [3] not [1], [3], [4]
- **Read commentary in scripts** - Logic is explained in comments
- **Test with civilian department first** - Ensure basic functionality

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Role Planning** - Set up appropriate Discord roles and permissions
- **Department Structure** - Plan department, sub-department, and rank hierarchy
- **Language Localization** - Configure for your country's emergency services
- **Backup Configurations** - Keep backups of working configurations

### **Database Management**
{: .no_toc }

- **Regular Backups** - Backup your database regularly
- **Performance Monitoring** - Monitor database performance
- **Table Maintenance** - Periodically optimize database tables

### **User Experience**
{: .no_toc }

- **Clear Documentation** - Provide users with MDT usage guidelines
- **Role Training** - Train users on department-specific features
- **Emergency Procedures** - Establish clear emergency call procedures

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
