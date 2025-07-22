---
layout: default
title: Home
nav_order: 1
description: "A comprehensive documentation explaining the installation process of FiveM resources sold by Nights Software."
permalink: /
has_children: false
has_toc: false
last_modified_date: "2025-01-27 12:00:00"
---

<img class="cover-img" src="/assets/img/banner.png" alt="Nights Software Banner" draggable="false">

# Welcome to Nights Software Documentation

Your comprehensive guide to installing and configuring FiveM resources from Nights Software. Whether you're a server administrator or developer, you'll find everything you need to get started.
{: .fs-5 .fw-300 }

---

## 🚀 Quick Start

Get up and running with our most popular resources:

<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div class="card" style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 1.5rem; background: #f8f9fa;">
    <h3 style="margin-top: 0; color: #0366d6;">Discord Integration</h3>
    <p>Connect your FiveM server with Discord for seamless player management and communication.</p>
    <a href="/resources/discordAPI" class="btn btn-blue">Get Started</a>
  </div>
  
  <div class="card" style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 1.5rem; background: #f8f9fa;">
    <h3 style="margin-top: 0; color: #28a745;">Garage System</h3>
    <p>Advanced vehicle management system with role-based permissions and multiple garage locations.</p>
    <a href="/resources/garageSystem" class="btn btn-blue">Get Started</a>
  </div>
  
  <div class="card" style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 1.5rem; background: #f8f9fa;">
    <h3 style="margin-top: 0; color: #dc3545;">Natural Disasters</h3>
    <p>Add dynamic weather events and natural disasters to create immersive gameplay experiences.</p>
    <a href="/resources/naturalDisasters" class="btn btn-blue">Get Started</a>
  </div>
</div>

---

## 📚 Resource Categories

### 🎮 Core Systems
- **[Discord API](/resources/discordAPI)** - Complete Discord integration
- **[Advanced Player Tracking](/resources/advancedPlayerTracking)** - Real-time player monitoring
- **[Vehicle Permissions (vPerms)](/resources/vPerms)** - Role-based vehicle access control
- **[Weapon Permissions (wPerms)](/resources/wPerms)** - Role-based weapon access control
- **[ACE Permissions](/resources/acePerms)** - Advanced permission system

### 🚨 Emergency & Medical
- **[Emergency Response System (ERS)](/resources/ers)** - Emergency services
- **[Coma & Down System](/resources/comaAndDownSystem)** - Realistic injury system
- **[Ped & Player CPR](/resources/pedAndPlayerCPR)** - Medical assistance
- **[Boat Rescue](/resources/boatRescue)** - Water rescue operations

### 🌪️ Environmental Features
- **[Natural Disasters](/resources/naturalDisasters)** - Dynamic weather events
- **[Storm Chasing](/resources/stormChasing)** - Weather-based gameplay
- **[Smoke Generator](/resources/smokeGenerator)** - Atmospheric effects
- **[Smoke Screen](/resources/smokeScreen)** - Tactical smoke deployment
- **[Air Raid Sirens](/resources/airRaidSirens)** - Emergency warning systems
- **[Landing Zone Alarm](/resources/landingZoneAlarm)** - Landing zone notifications

### 🚗 Vehicle Systems
- **[Garage System](/resources/garageSystem)** - Advanced vehicle management
- **[Vehicle Spawns](/resources/vehicleSpawns)** - Custom vehicle spawning
- **[Vehicle Rentals](/resources/vehicleRentals)** - Rental system
- **[Vehicle Lift](/resources/vehicleLift)** - Vehicle lifting mechanics
- **[Gates](/resources/gates)** - Automated gate systems

### 🎯 Gameplay Features
- **[Objectives](/resources/objectives)** - Mission and objective system
- **[Raids](/resources/raids)** - Dynamic raid events
- **[Party System](/resources/partySystem)** - Group management
- **[Night Shifts](/resources/nightShifts)** - Time-based gameplay
- **[Henchmen](/resources/henchmen)** - NPC henchman system
- **[Gemstone Mining Job](/resources/gemstoneMiningJob)** - Mining profession

### 🚁 Military & Tactical
- **[Aircraft Radar](/resources/aircraftRadar)** - Aircraft detection system
- **[Airstrikes](/resources/airstrikes)** - Aerial strike mechanics
- **[Ammo Boxes & Crates](/resources/ammoBox)** - Ammunition management
- **[Weapon Crates](/resources/weaponCrates)** - Weapon storage system
- **[Meta Build](/resources/metabuild)** - Advanced building system

### 🔗 Discord Integration
- **[Discord Admin](/resources/discordAdmin)** - Discord administration tools
- **[Discord Allowlist](/resources/discordAllowlist)** - Discord-based allowlist
- **[Discord Lockers](/resources/discordLockers)** - Role-based lockers
- **[Discord Player List](/resources/discordPlayerlist)** - Player list integration
- **[Discord Player Names](/resources/discordPlayerNames)** - Username synchronization
- **[Discord Spawn](/resources/discordSpawn)** - Role-based spawning
- **[Discord Teams](/resources/discordTeams)** - Team management

### 🛠️ Utility Systems
- **[Easy 3D Text Labels](/resources/easy3dTextLabels)** - 3D text display
- **[Easy Zones](/resources/easyZones)** - Zone management
- **[Props & Speed Zones](/resources/propsAndSpeedzones)** - Speed enforcement
- **[Loading Screen](/resources/loadingScreen)** - Custom loading screens
- **[Subtitles](/resources/subtitles)** - Subtitle system
- **[Onto the Seas](/resources/ontoTheSeas)** - Maritime features

---

## 🎥 Video Tutorials

**YouTube Channel** - Watch comprehensive installation and setup tutorials for all our resources:

[Nights Software YouTube Channel](https://www.youtube.com/channel/UC7DWPjF5daoykiD-q6SvYRA){: .btn .btn-red .btn-large}

---

## 💬 Community Support

**Discord Community** - Join our community for support, updates, and community-created tutorials:

[Nights Software Discord](https://discord.com/channels/989438923925229598/1152361824554061824){: .btn .btn-discord .btn-large}

---

## 🛒 Purchase Resources

**Tebex Store** - Browse and purchase all our FiveM resources:

[Nights Software Store](https://store.nights-software.com){: .btn .btn-blue .btn-large}

---

## 📋 Installation Checklist

Before installing any resource, ensure you have:

{: .checklist}
- ✅ FiveM server with proper permissions
- ✅ File transfer protocol (FTP) access
- ✅ Basic understanding of server.cfg configuration
- ✅ Discord bot setup (for Discord-related resources)
- ✅ Resource dependencies installed

{: .note}
**Pro Tip:** Always follow the installation order: Download → Extract → FTP Upload → Configure → Ensure in server.cfg → Restart server

---

## 🔧 Common Issues

### Installation Problems
- **Parsing Errors**: Ensure files are transferred in binary mode via FTP
- **Resource Not Found**: Check that the resource name in server.cfg matches the folder name exactly
- **Permission Errors**: Verify file permissions on your server

### Configuration Issues
- **Discord Bot Not Working**: Ensure bot token is correct and bot has proper permissions
- **Vehicles Not Spawning**: Check coordinates and ensure resource dependencies are loaded
- **Role Permissions**: Verify Discord role names match exactly between resources

{: .tip}
**Need Help?** Check our [Discord community](https://discord.com/channels/989438923925229598/1152361824554061824) for quick support or browse the specific resource documentation for detailed troubleshooting guides.

---

## 📈 What's New

Stay updated with our latest releases and features:

- **Latest Updates**: Check individual resource pages for recent changes
- **New Features**: Follow our [YouTube channel](https://www.youtube.com/channel/UC7DWPjF5daoykiD-q6SvYRA) for feature showcases
- **Community Feedback**: Join our [Discord](https://discord.com/channels/989438923925229598/1152361824554061824) to suggest improvements
