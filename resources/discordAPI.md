---
layout: default
title: "Discord API"
nav_order: 11
has_children: false
has_toc: true
last_modified_date: "2023-10-07 16:27:00"
---

<img class="cover-img" src="/assets/img/discordAPI.png" alt="Discord API Resource" draggable="false">

# Discord API
{: .no_toc }

A guide to install Discord API! for FiveM
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

## Installation Tutorial

**Youtube!** Watch this installation tutorial video:

[Installation Tutorial](https://youtu.be/l1NtpnA-jhc?si=CXq1Uq7HiXQpEJ58){: .btn .btn-red}

## Purchasing the resource

Find this product at:

Base: [https://store.nights-software.com/package/5035729](https://store.nights-software.com/package/5035729)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants).

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

1. Drag the resource into your resources folder.

2. Ensure the resource in server.cfg and make sure this line comes before any other resource using the Discord API. 
Example:
```lua
ensure night_discordapi
```

1. Configure /config/config.lua (see next section).

## Configuring the resource

### `Discord_Bot_Token`

Please put your Discord bot token here or leave it empty if you want to use the bot we provide. To get your own Discord bot token, you need to [create a Discord bot](#create-your-own-discord-bot) first.

Example (using your own bot):
```lua
Discord_Bot_Token = "NzV4sQb2IEcGxY0bnPWrlHoz.E0LPvL.SJcnCkgAniGUxGXve0xrVMxv7HT"
```

Example (using our bot):
```lua
Discord_Bot_Token = ""
```

Invite link for our bot: <https://discord.com/oauth2/authorize?client_id=956690799385522237&permissions=1024&scope=bot>

*Notice: Please keep in mind that our bot will probably be used by multiple communities and/or FiveM servers and that resources using this API may require a longer loading time to get data from Discord!*

### `Discord_Guild_ID`

Provide us with your Discord server/guild ID so the bot knows where to fetch the data from. Your or our bot needs to be part of that Discord server/guild.

Example:
```lua
Discord_Guild_ID = "744819251788906496"
```

### `Discord_Role_Names`

Provide custom names for your Discord roles. The numbers on the left are the Discord role IDs. The role names on the right are used for configuring some of our other resources using this API, for example [night_playerlist](https://store.nights-software.com/package/5035743).

Example:
```lua
Discord_Role_Names = {
    ["744819251839500327"] = "Administrator",
    ["263267340614102369"] = "Supporter",
    ["586868533403808435"] = "Police_Officer",
    ["017924316415482635"] = "Firefigher",
    ["818609692039542052"] = "Allowlisted",
    ["468677647228363421"] = "Banned"
}
```

### `Discord_API_Cooldown`

How long the API should wait in between requests. We recommend at least two seconds.

Example:
```lua
Discord_API_Cooldown = 2
```

### `Discord_API_Log_Level`

What messages shall be logged. 0 means no messages at all, 1 means only errors, 2 means errors and warnings, and 3 logs all messages. This setting does not affect the config check messages.

Example (log all messages):
```lua
Discord_API_Log_Level = 3
```

### `Discord_API_Log_SameMessageCooldown`

How long the API should wait until logging the same message again. For example, when you get a lot of 404 warnings, increasing this number might help clearing up your console.

Example (no cooldown):
```lua
Discord_API_Log_SameMessageCooldown = 0
```

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? 
Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}

## Create your own Discord Bot

For creating your own Discord bot, we made a little tutorial. You need to have a Discord bot, a Discord server and the "Manage Server" permission in your Discord server in order to add the bot.

### Step 1: Registering your own Discord application

Please access the Discord Developer Portal on <https://discord.com/developers/applications>. You should see a page with the heading "Applications", and you probably will have no applications created yet.

<img src="/assets/img/discordAPI/1DiscordApplications.png" alt="Discord Applications Page">

Please click on the "New Application"-button on the top right and provide a name for the application. Please use something other than "Test", maybe the name of your community instead. Then hit "Create".

<img src="/assets/img/discordAPI/2DiscordCreateANewApplication.png" alt="Discord Applications Page: Create an application">

### Step 2: Building a bot

You have just created your own Discord application. It should look almost like this.

<img src="/assets/img/discordAPI/3DiscordNewApplicationBuildABot.png" alt="Discord Application: Bot section page">

Now you can head to the Bot section on the left and click on "Add Bot" on the top right. Discord will ask you if you really want to proceed since creating a bot cannot be reversed unless you delete the whole application. Please click on "Yes, do it!" since we want to create a bot and not use this application for anything else.

Now your bot should have been created and your page should be looking like this.

<img src="/assets/img/discordAPI/4DiscordNewApplicationBot.png" alt="Discord Application: Bot created">

On this page you can change the bots' profile picture and name to your liking. You will receive the bot token after you reset the token for the first time. Please copy it over to our config.lua to the `Discord_Bot_Token` variable. You should not share your bot token with anyone, not even with our Sales Support team.

### Step 3: Inviting the bot to your Discord server

After the bot has been setup, you can head to the OAuth2 section in the left navigation bar. Go to the URL Generator and select the bot scope. In the bot permissions we just need to select the "Read Messages/View Channels"-permission.

<img src="/assets/img/discordAPI/5DiscordNewApplicationBotInviteLink.png" alt="Discord Application: OAuth2: URL Generator for creating bot invite link">

Now scroll down to retrieve the invite link. Just copy the link and open it in a new tab.

<img src="/assets/img/discordAPI/6DiscordNewApplicationBotInvite.png" alt="Discord Bot Invite Confirmation">

Then select the Discord server on which your bot should join. If you cannot see your server then you are missing the necessary permissions called "Manage Server". Otherwise, your bot should be part of your Discord server now and you can continue with the configuration of this resource ([go up](#configuring-the-resource)).

## Developer Documentation

*Notice: This part is meant for developers that want to implement this API in their own resources.*

We work with an internal cache system so a Discord member or guild is fetched once and will only be fetched again if the optional force argument available on each function is set to true.

### `IsUserPartOfGuild(src : String, force? : Boolean)`

Returns `nil` if an error occurred. If the error resulted from the request to the Discord API, it will be logged in the server console.

Otherwise, this function returns a Boolean indicating if the given user is part of the guild or not.

### `GetDiscordMember(src : String, force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns a Discord member object.

Return object example:
```lua
{
    id = "264212773049729024",
    name = "Kunfu_Ratte",
    nick = "Mike",
    avatar = "https://cdn.discordapp.com/avatars/264212773049729024/a_96bfd94a112d060f7aad83b108fdf044.gif",
    discriminator = "1300",
    roles = {
        "Administrator",
        "Firefighter",
        "Allowlisted"
    }
}
```

Function usage example:
```lua
local src = source
local discordMember = exports.night_discordapi:GetDiscordMember(src)
if discordMember then print("Player " .. GetPlayerName(src) .. " is named " .. discordMember.name .. " on Discord.") end
```

### `GetDiscordMemberRoles(src : String, force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns an array of Discord role names of the Discord roles the member has.

Return object example:
```lua
{
    "Administrator",
    "Firefighter",
    "Allowlisted"
}
```

Function usage example:
```lua
local src = source
local discordMemberRoles = exports.night_discordapi:GetDiscordMemberRoles(src)
if discordMemberRoles then print("Player " .. GetPlayerName(src) .. " has " .. #discordMemberRoles .. " discord roles.") end
```

### `IsMemberPartOfThisRole(src : String, roleName : String, force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns a Boolean indicating if the player is part of the specified role or not.

Function usage example:
```lua
local src = source
local isAllowlisted = exports.night_discordapi:IsMemberPartOfThisRole(src, "Allowlisted", true)
if isAllowlisted then print("Player " .. GetPlayerName(src) .. " is allowlisted.") end
```

In this case we specify that the Discord API should refetch the Discord member by setting the last parameter force to true. This is only necessary for functions like checking the allowlisted state upon joining. The more you force requests the more requests you make, and Discord will block your requests if you send too many in too little time.

### `IsMemberPartOfAnyOfTheseRoles(src : String, roleNames : String[], force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns a Boolean indicating if the player is part of any of the specified roles or not.

Function usage example:
```lua
local src = source
local staffRoles = {
    "Community Manager",
    "Administrator",
    "Supporter"
}
local isPartOfStaff = exports.night_discordapi:IsMemberPartOfAnyOfTheseRoles(src, staffRoles)
if isPartOfStaff then print("Player " .. GetPlayerName(src) .. " is part of staff.") end
```

### `IsMemberPartOfAllOfTheseRoles(src : String, roleNames : String[], force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns a Boolean indicating if the player is part of all of the specified roles or not.

Function usage example:
```lua
local src = source
local roles = {
    "Community Manager",
    "Administrator",
    "Supporter",
    "Police_Officer",
    "Firefighter",
    "Allowlisted",
    "Banned"
}
local isPartOfEveryRole = exports.night_discordapi:IsMemberPartOfAllOfTheseRoles(src, roles)
if isPartOfEveryRole then print("Player " .. GetPlayerName(src) .. " is part of everything. Not bad!") end
```

### `GetDiscordGuild(force? : Boolean)`

Returns `nil` if an error occurred. This error will be logged in the server console.

Otherwise, this function returns a Discord guild object based on the guild ID specified in the config.

Return object example:
```lua
{
    id = "744819251788906496",
    name = "Police Interceptors by EA-RP",
    icon = "https://cdn.discordapp.com/icons/744819251788906496/71afaf201d8a8ca5499fac7b5c001e90.png",
    owner_id = "463714151576109057"
}
```

Function usage example:
```lua
local discordGuild = exports.night_discordapi:GetDiscordGuild()
if discordGuild then print("Our guild is currently named " .. discordGuild.name .. ".") end
```

### Feedback

Let us know if you have any suggestions for improvements or any ideas for new functions.
