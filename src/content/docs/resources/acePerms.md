---
title: ACE Permissions
description: A guide to install Ace permissions! for FiveM
slug: resources/acePerms
lastUpdated: 2026-11-11
group: start
---

## Overview

ACE Permissions is a permission system that leverages FiveM's native ACE (Access Control Entry) system to provide granular role-based access control for your server. This system allows you to create custom permission groups and assign specific permissions to players based on their Steam HEX IDs.

### Key Features

- **Role-based permissions** with customizable groups
- **Granular access control** for commands and features
- **Steam HEX ID integration** for secure player identification
- **Easy configuration** with simple text-based setup
- **Server-wide compatibility** with all FiveM resources

## Installation & Setup

### Step 1: Create Permissions File

1. **Navigate to your server directory**
   - Go to the same folder where your `server.cfg` file is located

2. **Create a new file**
   - Create a new file named `perms.cfg`
   - This file will contain all your permission definitions

### Step 2: Configure Permission Groups

Add the following code to your `perms.cfg` file:

```ini
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

:::danger[Steam HEX IDs]
Replace the example Steam HEX IDs with actual player Steam HEX IDs. See the section below for how to find Steam HEX IDs.
:::

### Step 3: Execute Permissions

Add the following line to your `server.cfg` file:

```ini
exec perms.cfg
```

:::tip[Server Restart]
After adding the exec line, restart your server for the permissions to take effect.
:::

## Finding Steam HEX IDs

### Method 1: YouTube Tutorial

Watch our comprehensive guide on finding Steam HEX IDs:

<a class="kit-btn" href="https://youtu.be/hyW9aFJI5_Q">How to Find FiveM HEX IDs</a>

### Method 2: In-Game Command

1. **Join your server** as the player you want to get the HEX ID for
2. **Open F8 console** in-game
3. **Type the command:** `status`
4. **Look for the player** in the list and copy their Steam HEX ID

### Method 3: Server Console

1. **Open your server console** (txAdmin or similar)
2. **Type:** `status`
3. **Find the player** in the online players list
4. **Copy their Steam HEX ID** (format: `steam:110000114fa0982`)

## Using ACE with Our Scripts

Our scripts do not ask for fixed permission names. Each script has a list of role names in its config. With ACE turned on, a player has permission when ACE allows them one of the names on that list.

[Police Tape](/resources/policeTape/) is the example here. Its permission settings are in `config/config.lua`:

```lua
Config.EveryoneHasPermission = false
Config.Enable_Ace_Permissions = true
Config.PermissionRoles = { 'police', 'ambulance', 'fire' }
```

1. **Set `EveryoneHasPermission` to `false`.** While it is `true`, every player has permission and the list is not checked.
2. **Set `Enable_Ace_Permissions` to `true`.**
3. **Write the names you want in the role list.** You choose the names.
4. **Allow each name for a group in `perms.cfg`,** and add your players to that group:

```ini
# These groups may use police tape
add_ace Police police allow
add_ace Ambulance ambulance allow
add_ace Fire fire allow

# Players in the groups
add_principal identifier.steam:110000114fa0982 Police
```

5. **Restart your server.**

:::danger[Same name in both places]
The name after the group in `perms.cfg` must be written exactly as it is in the script's role list.
:::

The same list is used by every permission system the script supports. A name can be a Discord role, a framework job and an ACE permission at once, in whichever systems you turn on.

### Where the Role List Is

The settings work the same in each script. Only the name of the list differs:

| Script | Role list |
|--------|-----------|
| [Police Tape](/resources/policeTape/) | `Config.PermissionRoles` |
| [Player & Ped CPR](/resources/pedAndPlayerCPR/) | `Config.Permissions.CPRRolesOrGroups` |
| [K9 Dog Handler](/resources/ersK9/) | `K9HandlerPermissionRoles` |

Each script's own page names its list and the other permission systems it supports.

### Admin Commands

A script can have commands for admins only, with a list of their own. In Police Tape, `/cleartapes` is for players who hold one of `Config.Clear.AdminRoles`. ACE can also allow such a command directly, without any list:

```ini
add_ace group.admin command.cleartapes allow
```

## Implementation in Scripts

### Server-Side Permission Check

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

### Advanced Permission System

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

## Permission Examples

### Common Permission Groups

| Group | Description | Typical Permissions |
|-------|-------------|-------------------|
| **Admin** | Full server access | All commands, ban, kick, mute |
| **Moderator** | Moderate server access | Kick, mute, warn, teleport |
| **Supporter** | Limited admin access | Mute, warn, basic commands |
| **Tester** | Testing permissions | Teleport, basic admin tools |

### Permission Structure Examples

```ini
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

## Advanced Configuration

### Custom Permission Groups

Create your own permission groups for specific purposes:

```ini
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

### Inheritance System

Use inheritance to create permission hierarchies:

```ini
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

## Troubleshooting

### Common Issues

#### Permissions Not Working

:::caution[Check these common issues]
- Ensure `exec perms.cfg` is in your `server.cfg`
- Verify Steam HEX IDs are correct (no typos)
- Restart server after making changes
- Check server console for error messages
:::

#### Steam HEX ID Issues

:::tip[Troubleshooting steps]
1. Use the `status` command to get the exact HEX ID
2. Ensure the format is correct: `steam:110000114fa0982`
3. Remove any extra spaces or characters
4. Test with a known working HEX ID first
:::

#### Permission Denied Errors

:::note[Debug steps]
1. Check if the player's HEX ID is in the correct group
2. Verify the permission is properly defined
3. Test with a simpler permission first
4. Check server console for permission-related errors
:::

## Best Practices

### Security Recommendations

- **Keep HEX IDs private** - Don't share them publicly
- **Regular audits** - Review permissions periodically
- **Principle of least privilege** - Give minimum required permissions
- **Backup configurations** - Keep copies of your permission files

### Organization Tips

- **Use descriptive group names** - Make permissions easy to understand
- **Comment your config** - Add notes for complex setups
- **Group related permissions** - Keep similar permissions together
- **Test thoroughly** - Verify permissions work before going live

## Support

### Getting Help

If you're having trouble with ACE Permissions:

1. **Review this documentation** thoroughly
2. **Check server console** for error messages
3. **Verify your configuration** matches the examples
4. **Join our Discord** for community support

### Community Support

Join our Discord community for:
- Technical support
- Configuration help
- Best practices sharing
- Community discussions

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
