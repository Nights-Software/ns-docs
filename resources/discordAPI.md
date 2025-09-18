---
layout: default
title: "Discord API"
nav_order: 3
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/night_discordapi.png" alt="Discord API Resource" draggable="false">

# Discord API
{: .no_toc }

A comprehensive FiveM resource for integrating Discord functionality into your server. This resource provides easy access to Discord user data, guild membership, roles, and more through a simple API.
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

## 📋 Overview

The Discord API resource provides seamless integration between your FiveM server and Discord, enabling:
- **Role-based permissions** across all connected resources
- **Real-time player synchronization** with Discord roles
- **Automatic player management** based on Discord membership
- **Cross-platform communication** between Discord and FiveM
- **Discord User Management**: Check if users are members of specific Discord servers
- **Role Verification**: Verify user roles across multiple Discord servers
- **User Data Retrieval**: Get Discord user information, avatars, and member details
- **Guild Information**: Retrieve Discord server/guild information
- **Caching System**: Built-in caching for improved performance
- **Rate Limiting**: Automatic Discord API rate limit handling
- **Multi-Guild Support**: Support for multiple Discord servers
- **Custom Role Mapping**: Map Discord role IDs to custom names

{: .note}
**Prerequisites:** You'll need a Discord bot token and basic knowledge of Discord server management.

---

## 🎥 Installation Tutorial

**Video Guide** - Watch comprehensive installation tutorial(s):

[Discord API Installation Tutorial](https://youtu.be/l1NtpnA-jhc?si=CXq1Uq7HiXQpEJ58){: .btn .btn-red}
[How to Create a Discord Bot - Quick Tutorial](https://www.youtube.com/watch?v=4XswiJ1iUaw){: .btn .btn-red}

---

## 🛒 Purchase & Download

### Purchase Location
**Tebex Store:** [Discord API Package](https://store.nights-software.com/package/5035729)

### Download Method
Download via [CFX Portal](https://portal.cfx.re/assets/granted-assets) after purchase.

{: .warning}
**Important:** It may take a few minutes for the resource to appear in the CFX Portal after purchase.

---

## ⚙️ Installation Process

### Step 1: File Transfer
{: .important}
**Critical:** Always follow this exact order to avoid parsing errors:

1. Download the ZIP package
2. Extract to a local folder
3. Set FTP transfer mode to **binary**
4. Upload files to your server's resources folder
5. Add to server.cfg
6. Restart your server

### Step 2: Server Configuration
Add the resource to your `server.cfg` **somewhere ON TOP as one of the first starting resources**:

```lua
ensure night_discordapi
```

{: .tip}
**Pro Tip:** Place this line before any other resources that depend on Discord API.

### Step 3: Configuration Setup
Configure `/config/config.lua` (see configuration section below).

---

## 🔧 Configuration

**Note**: This resource requires a Discord bot to function. You must create your own Discord bot application. How to do this is covered in the next step.

### Basic Configuration

```lua
Config = {
    -- Discord Bot Token
    Discord_Bot_Token = "",
    
    -- Discord Guild/Server Configuration
    Discord_Guild_Names = {
        ["YOUR_GUILD_ID"] = "Your Guild Name",
        ["ANOTHER_GUILD_ID"] = "Another Guild Name",
    },
    
    -- Discord Role Mapping
    Discord_Role_Names = {
        ["ROLE_ID"] = "Role_Name",
        ["ANOTHER_ROLE_ID"] = "Another_Role",
    },
    
    -- Logging Level (0 = INFO/ERROR/WARN only, 1+ = includes DEBUG)
    Discord_API_Log_Level = 1,
}
```

### Configuration Details

- **Discord_Bot_Token**: Your Discord bot token
- **Discord_Guild_Names**: Map Discord server IDs to readable names
- **Discord_Role_Names**: Map Discord role IDs to custom role names
- **Discord_API_Log_Level**: Control logging verbosity

### Discord Bot Token

You must provide your own Discord bot token. Follow the tutorial above to create your bot and obtain the token:

```lua
Discord_Bot_Token = "YOUR_BOT_TOKEN_HERE"
```

{: .warning}
**Important:** Keep your bot token secure and never share it publicly. The token provides access to your Discord bot.

---

## 🤖 Creating Your Own Discord Bot

[📺 How to Create a Discord Bot - Quick Tutorial](https://www.youtube.com/watch?v=4XswiJ1iUaw){: .btn .btn-red}

### Step 1: Create a New Application
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Enter a name for your application (e.g., "My FiveM Server Bot")
4. Click "Create"

### Step 2: Set Up the Bot
1. In your application's settings, select the "Bot" tab
2. Click "Add Bot" and confirm by clicking "Yes, do it!"
3. Customize your bot's username and profile picture as desired

### Step 3: Retrieve the Bot Token
1. Under the "Bot" tab, click the "Reset Token" button to generate a new token
2. Copy the token and store it securely - this token is essential for your bot's functionality

### Step 4: Set Up OAuth2 for Bot Permissions
1. Navigate to the "OAuth2" tab in your application's settings
2. Under "Scopes", select "bot"
3. In the "Bot Permissions" section, choose the permissions your bot requires:
   - **Read Messages/View Channels**
   - **Any other functionalities to obtain member (role) information**
4. Copy the generated URL

### Step 5: Invite the Bot to Your Server
1. Paste the copied URL into your browser
2. Select the server you want to add the bot to and click "Authorize"
3. Complete any CAPTCHA verification if prompted

---

## 📚 Exports

The Discord API provides comprehensive exports for checking guild membership, user data, roles, and guild information.

### Guild Membership Functions

#### `IsUserPartOfThisGuild(src, force, guildName)`
Check if a player is a member of a specific Discord server.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (required)
- `guildName` (string): Name of the Discord server (as defined in config) (required)

**Returns:** `boolean` - true if user is a member, false if not, nil on error

**Example:**
```lua
local isMember = exports['night_discordapi']:IsUserPartOfThisGuild(source, false, "Your Guild Name")
if isMember then
    print("Player is a member of the Discord server!")
end
```

#### `IsUserPartOfAnyOfTheseGuilds(src, force, guildNames)`
Check if a player is a member of any of the specified Discord servers.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `boolean` - true if user is a member of any server, false if not, nil on error

**Example:**
```lua
local guildNames = {"Guild 1", "Guild 2", "Guild 3"}
local isMember = exports['night_discordapi']:IsUserPartOfAnyOfTheseGuilds(source, false, guildNames)
if isMember then
    print("Player is a member of at least one Discord server!")
end
```

#### `IsUserPartOfAllOfTheseGuilds(src, force, guildNames)`
Check if a player is a member of all specified Discord servers.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `boolean` - true if user is a member of all servers, false if not, nil on error

**Example:**
```lua
local guildNames = {"Guild 1", "Guild 2"}
local isMember = exports['night_discordapi']:IsUserPartOfAllOfTheseGuilds(source, false, guildNames)
if isMember then
    print("Player is a member of all Discord servers!")
end
```

### User Data Functions

#### `GetDiscordUser(src, force)`
Get Discord user information for a player.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (optional)

**Returns:** `table` - User data containing id, name, avatar, or nil on error

**Example:**
```lua
local userData = exports['night_discordapi']:GetDiscordUser(source, false)
if userData then
    print("Discord ID: " .. userData.id)
    print("Username: " .. userData.name)
    print("Avatar: " .. (userData.avatar or "No avatar"))
end
```

#### `GetDiscordMember(src, force, guildNames)`
Get Discord member information for a player in specific servers.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `table` - Member data containing id, name, nick, avatar, discriminator, roles, or nil on error

**Example:**
```lua
local memberData = exports['night_discordapi']:GetDiscordMember(source, false, {"Your Guild Name"})
if memberData then
    print("Member ID: " .. memberData.id)
    print("Nickname: " .. (memberData.nick or "No nickname"))
    print("Roles: " .. table.concat(memberData.roles, ", "))
end
```

### Role Functions

#### `GetDiscordMemberRoles(src, force, guildNames)`
Get all Discord roles for a player across specified servers.

**Parameters:**
- `src` (string): Player source ID
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `table` - Array of role names, or nil on error

**Example:**
```lua
local roles = exports['night_discordapi']:GetDiscordMemberRoles(source, false, {"Guild 1", "Guild 2"})
if roles then
    for _, role in ipairs(roles) do
        print("Role: " .. role)
    end
end
```

#### `IsMemberPartOfThisRole(src, roleName, force, guildNames)`
Check if a player has a specific Discord role.

**Parameters:**
- `src` (string): Player source ID
- `roleName` (string): Name of the role to check
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `boolean` - true if user has the role, false if not, nil on error

**Example:**
```lua
local hasRole = exports['night_discordapi']:IsMemberPartOfThisRole(source, "Admin", false, {"Your Guild"})
if hasRole then
    print("Player has Admin role!")
end
```

#### `IsMemberPartOfAnyOfTheseRoles(src, roleNames, force, guildNames)`
Check if a player has any of the specified Discord roles.

**Parameters:**
- `src` (string): Player source ID
- `roleNames` (table): Array of role names to check
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `boolean` - true if user has any of the roles, false if not, nil on error

**Example:**
```lua
local roleNames = {"Admin", "Moderator", "VIP"}
local hasRole = exports['night_discordapi']:IsMemberPartOfAnyOfTheseRoles(source, roleNames, false, {"Your Guild"})
if hasRole then
    print("Player has at least one of the specified roles!")
end
```

#### `IsMemberPartOfAllOfTheseRoles(src, roleNames, force, guildNames)`
Check if a player has all of the specified Discord roles.

**Parameters:**
- `src` (string): Player source ID
- `roleNames` (table): Array of role names to check
- `force` (boolean): Force refresh cache (optional)
- `guildNames` (table): Array of Discord server names (optional)

**Returns:** `boolean` - true if user has all roles, false if not, nil on error

**Example:**
```lua
local roleNames = {"Admin", "Moderator"}
local hasAllRoles = exports['night_discordapi']:IsMemberPartOfAllOfTheseRoles(source, roleNames, false, {"Your Guild"})
if hasAllRoles then
    print("Player has all specified roles!")
end
```

### Guild Information Functions

#### `GetDiscordGuild(guildName, force)`
Get information about a Discord server/guild.

**Parameters:**
- `guildName` (string): Name of the Discord server (as defined in config)
- `force` (boolean): Force refresh cache (optional)

**Returns:** `table` - Guild data containing id, name, icon, ownerid, roles, or nil on error

**Example:**
```lua
local guildData = exports['night_discordapi']:GetDiscordGuild("Your Guild Name", false)
if guildData then
    print("Guild ID: " .. guildData.id)
    print("Guild Name: " .. guildData.name)
    print("Owner ID: " .. guildData.ownerid)
end
```

---

## 💡 Usage Examples

### Basic Permission System
```lua
-- Check if player has admin role
local hasAdmin = exports['night_discordapi']:IsMemberPartOfThisRole(source, "Admin", false, {"Your Guild"})
if hasAdmin then
    -- Give admin permissions
    TriggerClientEvent('chat:addMessage', source, {
        color = {255, 0, 0},
        multiline = true,
        args = {"System", "You have admin permissions!"}
    })
end
```

### Multi-Server Role Check
```lua
-- Check if player has role in any of multiple servers
local guildNames = {"Main Server", "Staff Server", "VIP Server"}
local roleNames = {"Admin", "Moderator", "VIP"}
local hasPermission = exports['night_discordapi']:IsMemberPartOfAnyOfTheseRoles(source, roleNames, false, guildNames)

if hasPermission then
    -- Example: Grant access to restricted area
    TriggerClientEvent('restrictedArea:grantAccess', source)
end
```

### User Information Display
```lua
-- Get and display user information
local userData = exports['night_discordapi']:GetDiscordUser(source, false)
if userData then
    TriggerClientEvent('chat:addMessage', -1, {
        color = {0, 255, 0},
        multiline = true,
        args = {"Discord", userData.name .. " joined the server!"}
    })
end
```

### Guild Membership Verification
```lua
-- Verify player is member of specific guild
local isMember = exports['night_discordapi']:IsUserPartOfThisGuild(source, false, "Whitelisted Guild")
if not isMember then
    DropPlayer(source, "You must be a member of our Discord server to join this server.")
end
```

### Advanced Role System
```lua
-- Check multiple roles across multiple servers
local guildNames = {"Police Department", "Fire Department", "EMS"}
local requiredRoles = {"Officer", "Firefighter", "Paramedic"}

local hasRequiredRole = exports['night_discordapi']:IsMemberPartOfAnyOfTheseRoles(source, requiredRoles, false, guildNames)
if hasRequiredRole then
    -- Allow access to emergency services
    TriggerClientEvent('emergency:grantAccess', source)
else
    TriggerClientEvent('chat:addMessage', source, {
        color = {255, 0, 0},
        multiline = true,
        args = {"System", "You need to be verified in our Discord server to access emergency services."}
    })
end
```

---

## 🔗 Integration with Other Resources

The Discord API serves as the foundation for these resources:

| Resource | Purpose |
|----------|---------|
| [Player List](/resources/discordPlayerlist) | Display players with Discord roles |
| [Player Names](/resources/discordPlayerNames) | Sync Discord usernames |
| [Garage System](/resources/garageSystem) | Role-based vehicle access |
| [Vehicle Permissions (vPerms)](/resources/vPerms) | Role-based vehicle permissions |
| [Weapon Permissions (wPerms)](/resources/wPerms) | Role-based weapon permissions |
| [Discord Spawn](/resources/discordSpawn) | Role-based spawning system |
| [Discord Lockers](/resources/discordLockers) | Role-based locker access |
| [Discord Allowlist](/resources/discordAllowlist) | Discord-based allowlist system |
| [Emergency Response Simulator](/resources/ers) | A PvE Emergency Response Simulator |
| [Night Shifts MDT](/resources/nightShifts) | An system managing Emergency Services & Registrations |

## 🚨 Troubleshooting

### Common Issues

#### Bot Not Responding
- Verify bot token is correct
- Ensure bot is online and has proper permissions
- Check bot is invited to your Discord server

#### Role Permissions Not Working
- Confirm role IDs are correct
- Verify bot has been given the required permission
- Verify the guild names match between the scripts, if applicable.
- Verify the role names match between the scripts.

#### Resource Dependencies
- Ensure Discord API loads before dependent resources
- Check server.cfg load order

### Error Messages

| Error | Solution |
|-------|----------|
| `Discord API not found` | Check resource name in server.cfg |
| `Invalid bot token` | Verify token format and validity |
| `Guild not found` | Confirm guild ID and bot membership |

### Debug Mode
Enable debug logging by setting `Discord_API_Log_Level = 1` in your config to see detailed API request information.

{: .tip}
**Need Help?** Join our [Discord community](https://discord.com/channels/989438923925229598/1152361824554061824) for support.

---

## 📊 Performance Optimization

### Best Practices
- Use your own custom bot token, which is not used for any other purposes.

### Monitoring
- Check F8 console for error messages
- Monitor the txAdmin console for the Discord API status & installation feedback.

---

## 📞 Support

### Getting Help
1. **Check this documentation** for common solutions
2. **Search our Discord** for similar issues
3. **Create a support ticket** with detailed information

### Useful Links
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [FiveM Documentation](https://docs.fivem.net/)
- [Nights Software Discord](https://discord.com/channels/989438923925229598/1152361824554061824)
