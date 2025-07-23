---
layout: default
title: "ACE Permissions"
nav_order: 15
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<!-- <img class="cover-img" src="/assets/img/garageSystem.gif" alt="Ace permissions! Resource" draggable="false"> -->

# ACE Permissions for FiveM
{: .no_toc}

A guide to install Ace permissions! for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

ACE Permissions is a permission system that leverages FiveM's native ACE (Access Control Entry) system to provide granular role-based access control for your server. This system allows you to create custom permission groups and assign specific permissions to players based on their Steam HEX IDs.

### **Key Features**
{: .no_toc }

- ✅ **Role-based permissions** with customizable groups
- ✅ **Granular access control** for commands and features
- ✅ **Steam HEX ID integration** for secure player identification
- ✅ **Easy configuration** with simple text-based setup
- ✅ **Server-wide compatibility** with all FiveM resources

---

## 🛠️ Installation & Setup

### **Step 1: Create Permissions File**
{: .no_toc }

1. **Navigate to your server directory**
   - Go to the same folder where your `server.cfg` file is located

2. **Create a new file**
   - Create a new file named `perms.cfg`
   - This file will contain all your permission definitions

### **Step 2: Configure Permission Groups**
{: .no_toc }

Add the following code to your `perms.cfg` file:

```conf
# Permission Groups
add_ace Admin administrator allow
add_ace Supporter supporter allow
add_ace Tester tester allow

# Admin Users
add_principal identifier.steam:110000114fa0982 Admin 

# Supporter Users
add_principal identifier.steam:110000114fa0982 Supporter 

# Tester Users
add_principal identifier.steam:110000114fa0982 Tester

# Specific Permissions
add_ace Admin command.mute allow
add_ace Supporter command.kick allow
add_ace Tester command.teleport allow
```

{: .important }
> **Steam HEX IDs:** Replace the example Steam HEX IDs with actual player Steam HEX IDs. See the section below for how to find Steam HEX IDs.

### **Step 3: Execute Permissions**
{: .no_toc }

Add the following line to your `server.cfg` file:

```conf
exec perms.cfg
```

{: .tip }
> **Server Restart:** After adding the exec line, restart your server for the permissions to take effect.

---

## 🔍 Finding Steam HEX IDs

### **Method 1: YouTube Tutorial**
{: .no_toc }

Watch our comprehensive guide on finding Steam HEX IDs:

[How to Find FiveM HEX IDs](https://youtu.be/hyW9aFJI5_Q){: .btn .btn-blue}

### **Method 2: In-Game Command**
{: .no_toc }

1. **Join your server** as the player you want to get the HEX ID for
2. **Open F8 console** in-game
3. **Type the command:** `status`
4. **Look for the player** in the list and copy their Steam HEX ID

### **Method 3: Server Console**
{: .no_toc }

1. **Open your server console** (txAdmin or similar)
2. **Type:** `status`
3. **Find the player** in the online players list
4. **Copy their Steam HEX ID** (format: `steam:110000114fa0982`)

---

## 💻 Implementation in Scripts

### **Server-Side Permission Check**
{: .no_toc }

Use this function in your server-side scripts to check player permissions:

```lua
function HasPermission(src) 
    if IsPlayerAceAllowed(src, "administrator") or 
       IsPlayerAceAllowed(src, "supporter") or 
       IsPlayerAceAllowed(src, "tester") then
        return true 
    else 
        return false 
    end
end

-- Usage example
RegisterCommand("admincommand", function(source, args, rawCommand)
    if HasPermission(source) then
        -- Execute admin command
        TriggerClientEvent('chat:addMessage', source, {
            color = {255, 0, 0},
            multiline = true,
            args = {"Admin", "Command executed successfully!"}
        })
    else
        -- Permission denied
        TriggerClientEvent('chat:addMessage', source, {
            color = {255, 0, 0},
            multiline = true,
            args = {"System", "You don't have permission to use this command!"}
        })
    end
end, false)
```

### **Advanced Permission System**
{: .no_toc }

For more granular control, you can create specific permission checks:

```lua
-- Check for specific permissions
function HasSpecificPermission(src, permission)
    return IsPlayerAceAllowed(src, permission)
end

-- Usage examples
if HasSpecificPermission(source, "command.mute") then
    -- Player can mute others
end

if HasSpecificPermission(source, "command.kick") then
    -- Player can kick others
end

if HasSpecificPermission(source, "command.ban") then
    -- Player can ban others
end
```

---

## 📚 Permission Examples

### **Common Permission Groups**
{: .no_toc }

| Group | Description | Typical Permissions |
|-------|-------------|-------------------|
| **Admin** | Full server access | All commands, ban, kick, mute |
| **Moderator** | Moderate server access | Kick, mute, warn, teleport |
| **Supporter** | Limited admin access | Mute, warn, basic commands |
| **Tester** | Testing permissions | Teleport, basic admin tools |

### **Permission Structure Examples**
{: .no_toc }

```conf
# Admin Group - Full Access
add_ace Admin administrator allow
add_ace Admin command.* allow
add_ace Admin resource.* allow

# Moderator Group - Moderate Access
add_ace Moderator command.kick allow
add_ace Moderator command.mute allow
add_ace Moderator command.warn allow
add_ace Moderator command.teleport allow

# Supporter Group - Limited Access
add_ace Supporter command.mute allow
add_ace Supporter command.warn allow

# Tester Group - Testing Access
add_ace Tester command.teleport allow
add_ace Tester command.noclip allow
```

---

## 🔧 Advanced Configuration

### **Custom Permission Groups**
{: .no_toc }

Create your own permission groups for specific purposes:

```conf
# Custom Groups
add_ace Police police allow
add_ace Fire fire allow
add_ace Medic medic allow

# Police Permissions
add_ace Police command.arrest allow
add_ace Police command.ticket allow
add_ace Police command.impound allow

# Fire Permissions
add_ace Fire command.extinguish allow
add_ace Fire command.firetruck allow

# Medic Permissions
add_ace Medic command.heal allow
add_ace Medic command.revive allow
```

### **Inheritance System**
{: .no_toc }

Use inheritance to create permission hierarchies:

```conf
# Base permissions
add_ace Staff staff allow

# Inherit from Staff
add_principal Admin Staff
add_principal Moderator Staff
add_principal Supporter Staff

# Add specific permissions
add_ace Admin administrator allow
add_ace Moderator moderator allow
add_ace Supporter supporter allow
```

---

## ⚠️ Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Permissions Not Working**
{: .no_toc }

{: .warning }
> **Check these common issues:**
> - Ensure `exec perms.cfg` is in your `server.cfg`
> - Verify Steam HEX IDs are correct (no typos)
> - Restart server after making changes
> - Check server console for error messages

#### **Steam HEX ID Issues**
{: .no_toc }

{: .tip }
> **Troubleshooting steps:**
> 1. Use the `status` command to get the exact HEX ID
> 2. Ensure the format is correct: `steam:110000114fa0982`
> 3. Remove any extra spaces or characters
> 4. Test with a known working HEX ID first

#### **Permission Denied Errors**
{: .no_toc }

{: .note }
> **Debug steps:**
> 1. Check if the player's HEX ID is in the correct group
> 2. Verify the permission is properly defined
> 3. Test with a simpler permission first
> 4. Check server console for permission-related errors

---

## 📖 Best Practices

### **Security Recommendations**
{: .no_toc }

- **Keep HEX IDs private** - Don't share them publicly
- **Regular audits** - Review permissions periodically
- **Principle of least privilege** - Give minimum required permissions
- **Backup configurations** - Keep copies of your permission files

### **Organization Tips**
{: .no_toc }

- **Use descriptive group names** - Make permissions easy to understand
- **Comment your config** - Add notes for complex setups
- **Group related permissions** - Keep similar permissions together
- **Test thoroughly** - Verify permissions work before going live

---

## 💬 Support

### **Getting Help**
{: .no_toc }

If you're having trouble with ACE Permissions:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Verify your configuration** matches the examples
4. **Join our Discord** for community support

### **Community Support**
{: .no_toc }

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}

---

*Last updated: January 27, 2025*