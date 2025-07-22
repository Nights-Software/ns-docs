---
layout: default
title: "Installation Guide"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2025-01-27 15:00:00"
---

# Installation Guide
{: .no_toc }

Complete guide to installing and configuring Nights Software resources on your FiveM server.
{: .fs-5 .fw-300 }

---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## 📋 Prerequisites

Before installing any Nights Software resource, ensure you have:

{: .checklist}
- ✅ **FiveM Server** - Running and accessible
- ✅ **FTP Access** - File transfer protocol, in binary transfer type mode, access to your server
- ✅ **Server.cfg Access** - Ability to modify server configuration
- ✅ **Basic FiveM Knowledge** - Understanding of resource management
- ✅ **Discord Bot** - For Discord-related resources (see [Discord API](/resources/discordAPI))

---

## 🚀 Standard Installation Process

### Step 1: Purchase & Download

1. **Purchase** the resource from [Nights Software Store](https://store.nights-software.com)
2. **Download paid resources** via [CFX Portal](https://portal.cfx.re/assets/granted-assets)
3. **Download free resources** via the received e-mail (from Tebex) containing a download link.

{: .note}
**Note:** Resources may take a few minutes to appear in the CFX Portal after purchase.

### Step 2: File Preparation

1. **Download** the ZIP file to your local machine
2. **Extract** the ZIP file to a temporary folder
3. **Verify** all files are present (config, fxmanifest.lua, etc.)

### Step 3: File Transfer

{: .important}
**Critical:** Always use binary transfer mode to prevent file corruption!

1. **Open** your FTP client (FileZilla, WinSCP, etc.)
2. **Set** transfer mode to **Binary**
3. **Navigate** to your server's `resources` folder
4. **Upload** the entire resource folder
5. **Verify** file permissions (usually 644 for files, 755 for folders)

### Step 4: Server Configuration

1. **Open** your `server.cfg` file
2. **Add** the ensure line:
   ```lua
   ensure resource_name
   ```
3. **Save** the configuration file

### Step 5: Resource Configuration

1. **Navigate** to the resource's `config` folder
2. **Open** `config.lua` in a text editor
3. **Configure** according to the resource's documentation
4. **Save** the configuration file

### Step 6: Server Restart

1. **Restart** your FiveM server
2. **Check** the txAdmin (server) console for any errors
2. **Check** F8 console for any errors
3. **Verify** the resource is running properly

---

## 🔧 Configuration Best Practices

### File Transfer Protocol

| FTP Client | Binary Mode Setting |
|------------|-------------------|
| FileZilla | Transfer → Transfer Type → Binary |
| WinSCP | Session → Preferences → Transfer → Binary |

### Server.cfg Organization

Organize your `server.cfg` for better maintainability:

```lua
# ========================================
# CORE RESOURCES
# ========================================
ensure oxmysql
ensure night_discordapi

# ========================================
# GAMEPLAY RESOURCES
# ========================================
ensure night_natural_disasters
ensure night_objectives
ensure night_garage_system

# ========================================
# UTILITY RESOURCES
# ========================================
ensure night_easy_zones
ensure night_loading_screen
```

### Configuration File Structure

Most resources follow this or a similar structure:

```
resource_folder/
├── fxmanifest.lua
├── config/
│   └── config.lua
├── client/
│   └── client.lua
├── server/
│   └── server.lua
└── nui/
    └── images/
```

---

## 🚨 Common Installation Issues

### Parsing Errors

**Symptoms:** Errors in F8 console about syntax or parsing
**Solution:** 
- Ensure files were transferred in binary mode
- Check for file corruption
- Verify all files are present

### Resource Not Found

**Symptoms:** "Resource not found" error in server console
**Solution:**
- Verify resource name in server.cfg matches folder name exactly
- Check resource folder is in the correct location
- Ensure fxmanifest.lua exists and is valid

### Permission Errors

**Symptoms:** "Permission denied" or access errors
**Solution:**
- Set file permissions to 644 (files) and 755 (folders)
- Check server user has read access to resource folder
- Verify ownership of files

### Dependency Errors

**Symptoms:** "Dependency not found" or missing exports
**Solution:**
- Install required dependencies first
- Check load order in server.cfg
- Verify dependency versions are compatible

---

## 🔄 Update Process

### Updating Existing Resources

1. **Backup** your current configuration
2. **Download** the new version
3. **Replace** files (keep your config if compatible)
4. **Test** on a development server first
5. **Update** production server

### Configuration Migration

When updating, check for:
- New configuration options
- Deprecated settings
- Breaking changes in the changelog

---

## 🧪 Testing & Verification

### Pre-Production Checklist

{: .checklist}
- ✅ Resource loads without errors
- ✅ All features work as expected
- ✅ Configuration is properly set
- ✅ Dependencies are satisfied
- ✅ Performance is acceptable
- ✅ No conflicts with other resources

### Testing Environment

**Recommended Setup:**
- Separate development server
- Same configuration as production
- Regular testing of new features

---

## 📞 Support Resources

### Documentation
- **Resource-specific guides** - Check individual resource pages
- **Video tutorials** - Available on [YouTube](https://www.youtube.com/channel/UC7DWPjF5daoykiD-q6SvYRA)

### Community Support
- **Discord Community** - [Join our Discord](https://discord.com/channels/989438923925229598/1152361824554061824)
- **Community Tutorials** - User-created installation videos
- **Peer Support** - Help from other server administrators

### Professional Support
- **Store Support** - Contact through Tebex store
- **Priority Support** - Available for premium customers

---

## 🔒 Security Considerations

### File Permissions
- Set appropriate file permissions
- Don't expose sensitive configuration
- Use environment variables for secrets

### Configuration Security
- Keep bot tokens secure
- Don't share configuration files publicly
- Use strong passwords for database connections

### Server Security
- Keep FiveM server updated
- Use firewall rules appropriately
- Monitor server logs regularly

---

## 📊 Performance Optimization

### Resource Management
- Load only necessary resources
- Monitor resource usage
- Optimize configuration settings

### Server Optimization
- Adequate server specifications
- Proper network configuration
- Regular maintenance schedules

---

*Last updated: January 27, 2025* 