---
title: "Installation & Setup · Discord API"
description: "The installation steps, the configuration and how to create your own Discord bot."
slug: resources/discordAPI/installation
group: scripts
lastUpdated: 2026-04-25
---

## Installation Process

### Step 1: File Transfer
:::danger[Critical]
Always follow this exact order to avoid parsing errors:
:::

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

:::tip[Pro Tip]
Place this line before any other resources that depend on Discord API.
:::

### Step 3: Configuration Setup
Configure `/config/config.lua` (see configuration section below).

## Configuration

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

:::danger[Important]
Keep your bot token secure and never share it publicly. The token provides access to your Discord bot.
:::

## Creating Your Own Discord Bot

<a class="kit-btn" href="https://www.youtube.com/watch?v=4XswiJ1iUaw">📺 How to Create a Discord Bot - Quick Tutorial</a>

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

:::danger[Important]
The bot does NOT have to be online.
:::
