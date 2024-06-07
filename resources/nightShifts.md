---
layout: default
title: "Night Shifts - Mobile Data Terminal"
nav_order: 32
has_children: false
has_toc: true
last_modified_date: "2024-05-16 17:00:00"
---

<img class="cover-img" src="/assets/img/nightShifts.png" alt="Night Shifts - Mobile Data Terminal Resource" draggable="false">

# Night Shifts - Mobile Data Terminal
{: .no_toc}

A guide to install Night Shifts - Mobile Data Terminal for FiveM

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

## Purchasing the resource

Find this product at:

Base: [https://store.nights-software.com/package/5667103](https://store.nights-software.com/package/5667103)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

## Setting up your database tables (Dependency)

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for NS - MDT to work.

1. If you don't have one, connect to your database by using it's credentials (Find these on your host dashboard) in the following line, which you will put in your server.cfg.

In your server.cfg:
```
set mysql_connection_string "user=userName;password=YourPassword;host=YourHost;port=3306;database=YourDatabase;charset=utf8mb4_general_ci" 
```

1. When you boot up the server, the code will run a query which installs the required tables into your database.

{: .note }
> Note
>
> The files include a datatables.sql file. If you are eager to manually install the tables in your database, go ahead.


## Installing oxmysql (Dependency)

We assume you have oxmysql installed, this is a dependency for NS - MDT to work.

If you do not have oxmysql as your primary API for using a database. Find the download here: [Download Oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip) &  [Install Oxmysql](https://overextended.github.io/docs/oxmysql/#installation).

If you have questions about oxmysql, head over to their documentation page: [Oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

1. Place 'oxmysql' into your resources folder.

2. Ensure / start 'oxmysql' in your server.cfg somewhere in the top of your server.cfg, to make sure it starts before the 'night_shifts' resource, which we install later in this documentation.

Example:
```lua
ensure oxmysql
```

## Testing your database & oxmysql

Once you've installed your database with tables, installed oxmysql and configured your server.cfg, your server should be ready to run. Start and test whether oxmysql works. In some cases you can get print-outs in your server console, like this one: 

`[script:oxmysql] Database server connection established!` 

This will let you know your installation has worked. You can also check whether there are errors to solve in your server console.

## Installing nearest-postal (Optional - Recommended)
[CFX Forum Release](https://forum.cfx.re/t/release-nearest-postal-script/293511)

This is an optional resource, but fits well within the purpose of the NS - MDT. We recommend you install this. If you choose an alternative, re-write the getPostal(x, y) function in c_functions.lua to your desire at a later stage.

1. Download the resource from [Nearest-Postal direct download link](https://github.com/DevBlocky/nearest-postal/archive/refs/heads/master.zip)

1. Unarchive the master folder onto your server or local desktop.

1. Rename the 'nearest-postal-master' to 'nearest-postal' and drag this folder to your resources folder.

1. Ensure or start this resource in your server.cfg, make sure it starts before the 'night_shifts' resource 

Example:
```lua
ensure nearest-postal
```

1. Configure config.lua to your desire.

1. Download: [Download the newest postal map directly](https://www.dropbox.com/s/lb22r7rb4gwh44o/Postal%20Code%20Map.zip?dl=0) and install it. Forum link: [CFX Release - Postal map](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458) 

1. Open the 'Server Resource' folder and extract the resource 'map' from the archive onto your server desktop or local desktop. Place 'map' into your resources folder.

1. Ensure or start this resource in your server.cfg. 

Example:
```lua
ensure map
```

1. Restart your server and check your server console to see whether the nearest-postal and map resource have started.

## Downloading & Installing Night Discord API (Dependency)

Download our free Discord API, which has been integrated in the NS - MDT resource as a permission system: [NS Discord API Free](https://store.nights-software.com/package/5035729)  

1. Install the Discord API, using [this documentation page](https://docs.nights-software.com/resources/discordAPI/).

1. You will need the role names you have defined in the Discord API config.lua later, when configuring night_shifts.

1. Ensure or start this resource, after setting it up, in your server.cfg. Make sure it starts before the 'night_shifts' resource.

Example:
```lua
ensure night_discordapi
```

## Setting up your Steam webApiKey in your FiveM server

1. Make sure the server has the steam webapi key in it's server.cfg, otherwise it will not be able to make use of steam services: 
[Generate a steam web api key](https://steamcommunity.com/dev/apikey)

Choose a domain, can be any.

In your server.cfg:
```
set steam_webApiKey "your_key"
```

- Also set this key in your servers hosting company web dashboard (if applicable).

- Still experiencing issues? Re-log into steam and discord, don't just restart it. Then connect to FiveM. 

## Downloading & Installing Night Shifts - Mobile Data Terminal

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants) after purchasing it. It can take a few minutes for the resource to appear in keymaster after purchase.

1. Do not skip steps, are you sure your database and oxmysql is working?

1. Unpack the files into a folder onto your server. Please keep in mind you need to unpack it either on your servers' desktop before installing it, or do that locally on your own desktop and then drag over the files manually, to prevent parsing errors. Do not rename the resource.

1. Make sure you put the 'night_shifts' folder into your resources folder of your server.

1. Ensure or start this resource in your server.cfg. 

Example:
```lua
ensure night_shifts
```

1. Start your server and look at your server console to see whether both oxmysql (must start first) and night_shifts (must start after oxmysql) have started. Do not continue until you confirm this to be true and without errors. If you have any errors, read them and use them to solve your issue. They guide you!

## Configuring the config.lua file

There are loads of options to configure. It is recommended you test the resource before editing it. So you are sure it works by default. If you start editing it, frequently test what you've changed to prevent getting errors you can not trace. If you ask for support, we will recommend you to re-install it if you've edited it. There are many ways to break code and many reasons why code will not work sometimes. Lets move on by following the steps below!

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. We recommend downloading Visual Studio Code (VS Code) to read (lua) files: [Download VS Code](https://code.visualstudio.com/download).

1. Open /config/config.lua in VS Code. 

1. Important: Set up your night_discordapi roles to match the ones configured in the MDT. You can find all required variables to match by searching: (CNTL+F) `RoleName`.

1. Once you've downloaded Visual Studio Code, open the file (or folder) with it to read it's contents, like: `config/config.lua`, `client/c_functions.lua`, `server/s_functions.lua`.

1. When configuring the resource you will see that each line has and explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

1. Keep eye out for notes! On some parts we provide warnings on what you should not edit, add or remove. Relax mode on and read it all to understand it.

1. It's smart to follow an order when setting up this resources' config file, we recommend going from top-to-bottom: 

1. Set up the matching Discord API roles for: MDT Access, Departments, Sub-Departments and Ranks. This will allow you access to the departments in the MDT without errors.

*Hint: You will take some time to configure this the way you like, so plan that time and take your time to read! Frequently test your edits to see whether you're making mistakes and where to find them. Trying stuff early is good for confirming that your resource works, but not for trying out it's functionalities.*

## Config preview

<details>

<summary>Click here to reveal an example of the config for this resource</summary>

### Config example

```lua
   --====================== BEFORE YOU START ======================--
    -- Hi. Thanks for choosing Nights Software. This script has a lot of configuration options, we recommend you to try it out after doing the basic setup and before changing it all to your preferences. 
    -- The reason for this is that we want you to test your edits one by one, to prevent us having an overload of support tickets for things you can resolve yourself. If you still need help, contact us via discord.
    -- Might you encounter issues, this is not a reason to worry. We trial and error every hour, every day. Let us know your issue (in detail) and we can most likely provide a solution or fix.
    -- We really hope this resource provides you what many resources could not and that this opens a world to your community. We're proud to have you as a customer and appreciate your feedback. Get in touch!

    -- Code written with passion by Nights Software
    -- Installation & documentation:    https://docs.nights-software.com
    -- Discord:                         https://discord.nights-software.com 
    -- Store:                           https://store.nights-software.com
    -- Hint: Use CNTL + F in Visual Studio Code to find variables: https://code.visualstudio.com/download (Use this program to edit this file!)

    Config = {

        -- Hint: Read the comments when configuring! Relax, it's easier when you read! 

        --====================== Debug ======================--

        Debug = true,                           -- Debug shows developer & testing info, recommended to set to false when you are ready to use it in production AFTER installation :)

        --==================== Settings ====================--

        Language = "en",                        -- Options: "en" | "nl" | "de" | "fr" | "pl"
        Timezone = "Europe/London",             -- Set the timezone for the MDT. https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        TimeFormat = "en-GB",                   -- en-US, fr-FR, de-DE etc.
        KMHorMPH = "MPH",                       -- "KMH" or "MPH"

        Enable_Discord_API = true,              -- You need the discord API for this script, otherwise it will not work https://store.nights-software.com/package/5035729 [FREE] Included in the Tebex package.
        Enable_Nearest_Postal = true,           -- Nearest-postal integration, if false it will always return "Unknown" on postals. (CFX Post: https://forum.cfx.re/t/release-nearest-postal-script/293511) Edit getPostal(x,y) in c_functions.lua if you desire to integrate your own postal system.
        Enable_MDT_Battery_System = true,       -- Set to false to disable the battery system, if disabled it'll always stay 100%. Charging can be done in vehicles and interiors
        DefaultSoundVolume = 0.15,              -- Used for notifications. Higher than 0.5 will set it to 0.25, limited to protect ears
        Enable_Discord_Webhooks = true,         -- Set your webhook URL in s_functions.lua, edit your preferences for these messages in c_functions.lua and s_functions.lua
        Enable_Blips = true,                    -- Allow this system to add blips for stuff like units on map, backup requests, panic buttons, sighting reports, ANPR hits etc.
        Enable_Save_Callsigns = true,           -- If true it will set the last used callsign. If false it will use the config pre-set callsigns for departments & sub-departments.
        Enable_ERS = false,                      -- Optional PVE gamemode: https://... (Enables MDT integration with the gamemode, make sure to have this installed as night_ers)

        -- OPTIONAL SETTINGS: write the functionalities yourself in c_functions or s_functions.lua! (Developers only, don't touch this if you are not a developer. Nights Software does not provide support for custom script edits)
        Enable_CheckForMDTItemInInventory = true,           -- client/c_functions.lua
        Enable_CheckForMDTChargerItemInInventory = true,    -- client/c_functions.lua
        Enable_CheckForPhoneInInventory = true,             -- client/c_functions.lua

        --====================== Commands, HotKeys & Buttons ======================--

        Enable_Commands = true,                 -- Allow Commands?
        Commands = { 
            MobileDataTerminal = "mdt",         -- Syntax: /mdt | Open the MDT
            CallEmergencies = "999",            -- Syntax: /999 | Open emergency hotline call system
            ChargeMDT = "chargemdt",            -- Syntax: /chargemdt | Charges the MDT, can be done in vehicles and interiors
            StatusChange = "status",            -- Syntax: /status 10-42 or /status 2, depends on what you define as statuses.
            ForceCloseMDT = "forceclosemdt",    -- Syntax: /forceclosemdt or use F8 and type it without the slash.
            RadioTransmission = "radiotransmission", -- Command is unused, leave this: only used for the hud icon color toggle upon pressing the hotkey for RadioTransmission.

            -- v0.9.4
            ShowIDAndLicenses = "showid",       -- Syntax: /showid (most nearby player)
            DisplayActiveCall = "opencall",     -- Syntax: /opencall (uses active call ID)

            -- v0.9.7
            ToggleANPR = "toggleanpr",          -- Syntax: /toggleanpr | Enables/Disables the in-vehicle ANPR (HUD) during gameplay.

            -- v0.9.10
            ToggleNotifications = "togglenotifs",   -- Disables the "notify" function in c_functions.lua, which is dangerous because it shares important information with the player in relation to the MDT.
        },

        Enable_HotKeys = true,                  -- See this link for hotkey names » https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/ & https://docs.fivem.net/natives/?_0xD7664FD1
        HotKeys = {                             -- » This uses RegisterKeyMapping(commandString --[[ string ]], description --[[ string ]], defaultMapper --[[ string ]], defaultParameter --[[ string ]]) 
            MobileDataTerminal = "F10",         -- F10 » (Edit message variable in translations.lua: 'NewIncidentReceived' accordingly when you edit this)
            CallEmergencies = "F3",             -- F3 
            ChargeMDT = "F11",                  -- F11 
            ForceCloseMDT = "ESCAPE",           -- ESCAPE
            RadioTransmission = "CAPITAL",      -- CAPSLOCK (The key you want as default for talking over a radio. People can change it clientside via the FiveM Keybind Settings)

            -- v0.9.4
            ShowIDAndLicenses = "F4",           -- Syntax: /showid (most nearby player)
            DisplayActiveCall = "TAB",          -- TAB

            -- Accept/decline ID requests       -- (https://docs.fivem.net/docs/game-references/controls/)
            BrowseLeft = 307,                   -- Arrow Left 
            BrowseRight = 308,                  -- Arrow Right
            SubmitBtn = 51,                     -- E
            CancelBtn = 177,                    -- BACKSPACE / ESC / RIGHT MOUSE BUTTON

        },

        Buttons = { -- MATCH THESE TO THE HOTKEYS (https://docs.fivem.net/docs/game-references/controls/)
            BrowseLeft = "~INPUT_REPLAY_BACK~",
            BrowseRight = "~INPUT_REPLAY_ADVANCE~",
            SubmitBtn = "~INPUT_CONTEXT~", 
            CancelBtn = "~INPUT_CELLPHONE_CANCEL~",            
        },

        --====================== MDT Settings ===================--

        MobileDataTerminal = {

            --====================== General settings ===================--

            MDTName = "MOBILE DATA TERMINAL",       -- Title at the top of the MDT UI, to hide the title set it to an empty string: "",
            DiscordGuildNames = {"Your_Discord_Guild_Name"}, -- It checks whether the user is in any of these Discord servers and checks for the roles the user has in these Discord servers. Match these names to your Discord API. The first guild defined is where it fetches the Discord member data from (avatar, nickname etc.).
            RolesWithAccessToMDT = {"Your_Police_Role", "Your_Ambulance_Role", "Your_Fire_Role", "Your_Tow_Role", "Your_Civilian_Role"}, -- Edit these to match your roles (role names) from Night Discord API [FREE] https://store.nights-software.com/package/5035729 
            ManagementRoles = {"Manager"},
            DurationOfNotifications = 7500,         -- 7.5 seconds = 7500 milliseconds by default.
            BlipUpdateInterval = 5000,              -- 5 seconds = 5000 milliseconds by default. Not recommend to make the interval faster.
            DisplayActiveCallTimeout = 15000,       -- 15 seconds = 15000 milliseconds by default.

            -- Image placeholders
            CivilianPlaceholder = "https://i.imgur.com/ehTOp3S.png",
            VehiclePlaceholder = "https://i.imgur.com/lUYdzyi.png",
            PropertyPlaceholder = "https://i.imgur.com/llinyPV.png",

            --====================== HUD settings ===================--

            DisplayHUD = true,                      -- Set to false to hide the MDT HUD which is on screen by default. Edit the HUD: NUI/styles.css
            DisplayIconsForHUD = true,              -- If true will display icons in a HUD style on screen, DisplayHUD must be true.
            DisplayLocationForHUD = true,           -- If true will display locations in a HUD style on screen, DisplayHUD must be true.
            DisplayWhetherDispatchIsActive = true,   -- Displays the dispatch icon + text on the HUD on true. (When on shift)
            
            --====================== Access level specific settings ===================-- 

            AccessLevelToArchiveCalls = 3,          -- This means that access level 3 or higher can archive calls, same logic goes for the variables below.
            AccessLevelForDispatch = 3,             
            AccessLevelToChangeCallsign = 1,        
            AccessLevelToEditFleetManagement = 5,   
            AccessLevelToEditTrainings = 5,

            MDTMenus = { -- Edit options: Name and accesslevels. Do not edit, add or remove other things in MDTMenus!
                -- All
                [1] = {MenuName = "HOME", RequiredAccessLevel = 1, Show = true},                 -- Department/civ selection (Always show)
                -- Emergency services
                [2] = {MenuName = "SHIFT", RequiredAccessLevel = 1, Show = true},                -- Status panel and shift toggling (Always show)
                [3] = {MenuName = "EMERGENCY HOTLINE", RequiredAccessLevel = 1, Show = true},    -- Add menu: Active calls, Archived calls. EDIT CALLS LAYOUT TO WIDER CARD AND LIST UNDERNEATH EACHOTHER
                -- Police
                [4] = {MenuName = "PNC", RequiredAccessLevel = 1, Show = true},                  -- Police National Computer (Search registrations of vehicles, civilians, fines and criminal records) Only police can access this.
                -- Emergency services
                [5] = {MenuName = "UNIT OVERVIEW", RequiredAccessLevel = 1, Show = true},        -- Overview of active units & locations, backup requests (You could name this Control / Dispatch)
                [6] = {MenuName = "OPERATIONS", RequiredAccessLevel = 2, Show = true},           -- Memos, Report forms (medical report, fire incident, police incident)
                [7] = {MenuName = "STATISTICS", RequiredAccessLevel = 4, Show = true},           -- General statistics in regards to the MDT.
                -- Civilians
                [8] = {MenuName = "DVLA", RequiredAccessLevel = 1, Show = true},                 -- DMV in America, RDW in the Netherlands, DVLA in the UK
                [9] = {MenuName = "COUNCIL", RequiredAccessLevel = 1, Show = true},              -- City Hall in America, Gemeente in the Netherlands, Council in the UK (Always Show)
                [10] = {MenuName = "REAL ESTATE", RequiredAccessLevel = 1, Show = true},         -- Real Estate Authority in America, Het Kadaster in the Netherlands, Real Estate Authority in the UK 
                -- Management
                [11] = {MenuName = "MANAGEMENT", RequiredAccessLevel = 1, Show = true},          -- Management (Future reference)
            },

            --====================== Emergency calls ===================--

            EmergencyCallPicture = "999_call2.png",     -- NUI/images/mylogo.png
            EmergencyCallCooldown = 5,                  -- Seconds

            --====================== Tracking ===================--

            AmountOfTimesToUpdateGPS = 10,              -- Pushes given amount of updates and then disables tracker.
            IntervalToUpdateGPS = 5,                    -- Seconds (10x5 = 50 seconds before tracker turns off automatically by default.)
            SendMessageOnTrackerGPSUpdate = false,      -- Can be quite annoying, recommended false.

            --====================== World (crime) events ===================--
            
            EnableWorldCrimeEvents = true,              -- Will NPC's report crimes or not? [Enabling this feature can increase resmon 0.10ms~ on trigger checks]
            WorldCrimeEventTriggerCooldown = 120,       -- Seconds (Cools down any world crime event serverwide to prevent flooding incoming calls.)
            WeaponsExcludedFromShotSpotter = {"weapon_fireextinguisher", "weapon_hazardcan", "weapon_fertilizercan", "weapon_petrolcan", "gadget_parachute"},
            TimeToDeleteWorldCrimeEventBlip = 180,      -- Seconds

            -- Shot spotter
            ShotSpotterEnabled = true,                  -- Enable shot spotter?
            ShotSpotterBlipSpriteId = 119,              -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            ShotSpotterBlipColor = 1,                   -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors
            ShotSpotterBlipText = "Reportedly shots fired", -- Blip text in legenda.     

            -- Fight
            FightSpotterEnabled = true,                 -- Enable fight spotter?
            FightSpotterBlipSpriteId = 468,             -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            FightSpotterBlipColor = 1,                  -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors
            FightSpotterBlipText = "Reportedly a fight",      -- Blip text in legenda.   

            -- Road crime
            RoadCrimeSpotterEnabled = true,             -- Enable road crime spotter?
            RoadCrimeSpotterBlipSpriteId = 645,         -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            RoadCrimeSpotterBlipColor = 1,              -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors     
            RoadCrimeSpotterBlipText = "Reportedly a road crime", -- Blip text in legenda.       

            WorldCrimeEventBlipFlashes = true,          -- Does the blip flash or not
            WorldCrimeEventBlipScale = 0.9,             -- This is the blip scale: 0.1 (smallest) 1.0 (default)
            RecklessDrivingSpeedThreshold = 100,        -- Any number, KMH or MPH is automatically converted via "KMHorMPH" at the top of the config.

            --====================== MDT Battery ===================-- 

            TimeToDeductTwentyFivePercent = 900,        -- Seconds
            TimeToChargeTwentyFivePercent = 60,         -- Seconds

            --====================== Panic button / Route & blips ===================--

            TimeToDeleteBlipAndRoute = 180,                         -- Seconds
            DistressSignalBlipColorOptions = {1, 38},               -- This is a random color selector: https://docs.fivem.net/docs/game-references/blips/#blip-colors
            DistressSignalBlipRouteColorOptions = {6, 1},           -- This is a color pattern, add more or remove some in the format {0, 1, 2, 3, 4, 5},
            DistressSignalBlipSpriteId = 161,                       -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            DistressSignalBlipText = "Distress Signal: ",           -- Callsign follows.
            DistressSignalBlipScale = 1.0,                          -- This is the blip scale: 0.1 (smallest) 1.0 (default)
            DistressSignalSoundFile = "panicbutton",                -- Upload your .ogg sound file to night_shifts/NUI/sounds/panicbutton.ogg, mention just the name without .ogg here
            DistressSignalSoundFileVolume = 0.25,                   -- This is at your own risk and Nights Software is not liable for any damage caused by you changing this setting. (Limited to 1.0)
            
            --====================== BEEP (Dispatch action) ===================--

            RadioBeepSound = "sepurabeep",
            RadioBeepSoundVolume = 0.5,

            --====================== ANPR (1/2) ===================--

            ANPRSendMessageToMarkedPerson = true,   -- Do you want to send an alert to the one being spotted by ANPR? (» Message variable: SeenByANPR)
            TimeToDeleteANPRBlip = 60,              -- Seconds
            ANPRBlipSpriteId = 184,                 -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            ANPRBlipText = "ANPR: ",                -- License plate follows.
            ANPRBlipColor = 1,                      -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors
            ANPRBlipFlashes = true,                 -- Does the blip flash or not
            ANPRBlipScale = 0.9,                    -- This is the blip scale: 0.1 (smallest) 1.0 (default)

            --====================== Backup requests ===================--

            BackupCooldownTime = 60,                -- Seconds
            TimeToDeleteBackupBlip = 180,           -- Seconds
            BackupBlipSpriteId = 409,               -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            BackupBlipText = "Backup: ",            -- Callsign follows
            BackupBlipColors = {                    -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors
                Police = 38,
                Ambulance = 5,
                Fire = 1,
                Tow = 73,
            },                    
            BackupBlipFlashes = true,               -- Does the blip flash or not
            BackupBlipScale = 0.9,                  -- This is the blip scale: 0.1 (smallest) 1.0 (default)

            --====================== Report Sighting ===================--

            TimeToDeleteSightingBlip = 240,         -- Seconds
            SightedPersonBlipSpriteId = 776,        -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            SightedPersonBlipColor = 1,             -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors
            SightedVehicleBlipSpriteId = 645,       -- This is a sprite ID: https://docs.fivem.net/docs/game-references/blips/#blips
            SightedVehicleBlipColor = 1,            -- This is a color ID: https://docs.fivem.net/docs/game-references/blips/#blip-colors     
            SightedBlipText = "Sighted: ",          -- Sighted person name or sighted vehicle license plate will follow.       
            SightedBlipFlashes = true,              -- Does the blip flash or not
            SightedBlipScale = 0.9,                 -- This is the blip scale: 0.1 (smallest) 1.0 (default)

            --====================== Animations & Props ===================--

            -- Show ID and Licenses
            IDCardAndLicenseProp = "prop_franklin_dl",                              -- Native prop
            ShowIDAndLicensesAnimationDictionary = "cop_badge_1@dad",               -- Custom emote from script: rpemotes
            ShowIDAndLicensesAnimation = "cop_badge_1_clip",                        -- Custom emote from script: rpemotes
            ExitShowIDAndLicensesAnimationDictionary = "anim@cellphone@in_car@ps",  -- Native emote
            ExitShowIDAndLicensesAnimation = "cellphone_text_exit",                 -- Native emote

            -- Open MDT
            MDTProp = "prop_cs_tablet",                                             -- Native prop
            ShowMDTAnimationDictionary = "amb@world_human_tourist_map@male@base",   -- Native emote
            ShowMDTAnimation = "base",                                              -- Native emote
            ExitShowMDTAnimationDictionary = "anim@cellphone@in_car@ps",            -- Native emote
            ExitShowMDTAnimation = "cellphone_text_exit",                           -- Native emote

            --====================== Station Alarms ===================--

            -- Upload your .ogg sound file to night_shifts/NUI/sounds/*.ogg, mention just the name without .ogg in SoundFileName.
            -- When a player is close to the station and a relevant call is triggered, it will play the configured station alarm.
            -- CallType options: "police", "ambulance", "fire", "tow"
            StationAlarmData = {
                [1] = {StationName = "Station 1", CallType = "fire", StationCoordinates = vector3(1178.4938, -1467.9377, 42.4733), SoundFileName = "firealarm", SoundVolume = 0.25, SoundRadius = 250.0},
                [2] = {StationName = "Station 2", CallType = "fire", StationCoordinates = vector3(1701.1998, 3587.7131, 40.3211), SoundFileName = "firealarm", SoundVolume = 0.25, SoundRadius = 250.0},
                [3] = {StationName = "Station 3", CallType = "fire", StationCoordinates = vector3(-368.8117, 6112.9038, 39.4624), SoundFileName = "firealarm", SoundVolume = 0.25, SoundRadius = 250.0},
                [4] = {StationName = "Station 4", CallType = "fire", StationCoordinates = vector3(-1039.0610, -2382.3792, 28.5009), SoundFileName = "firealarm", SoundVolume = 0.25, SoundRadius = 250.0},
                [5] = {StationName = "Station 5", CallType = "fire", StationCoordinates = vector3(193.9283, -1662.9021, 29.5363), SoundFileName = "firealarm", SoundVolume = 0.25, SoundRadius = 250.0},
            },

            --====================== MDT Status Codes ===================--

            -- Automated status responses for status indexes, status indexes are: [1] or [4] for example. Example: index [4] is statusCode 3 which means Officer is at a station.
            OnDutyStatusIndex = 2,  
            OffDutyStatusIndex = 12,    
            RespondingStatusIndex = 6,
            OnSceneStatusIndex = 7,
            PanicButtonStatusIndex = 1,

            -- All status codes, you can add more. But recommended to list only those you use. Mind the index numbers, they have to be ordered like in the example below.
            -- Americans: Please edit the font size in styles.css under '.statusbutton' to make the '10-42' fit as a status code.
            MDTStatusCodes = {
                [1] = {StatusCode = "0", StatusName = "Officer in life threatening situation.", StatusColor = "dc3545", DetachFromLastCall = true}, -- Color HEX: https://www.color-hex.com/ without the hashtag.
                [2] = {StatusCode = "1", StatusName = "Officer on-duty.", StatusColor = "28a745", DetachFromLastCall = true},
                [3] = {StatusCode = "2", StatusName = "Officer is available (deployable).", StatusColor = "28a745", DetachFromLastCall = true},
                [4] = {StatusCode = "3", StatusName = "Officer is at a station.", StatusColor = "28a745", DetachFromLastCall = true},
                [5] = {StatusCode = "4", StatusName = "Officer is available but on a break.", StatusColor = "ffc107", DetachFromLastCall = true},
                [6] = {StatusCode = "5", StatusName = "Officer is en-route to scene.", StatusColor = "ffc107", DetachFromLastCall = false},
                [7] = {StatusCode = "6", StatusName = "Officer is now at scene.", StatusColor = "ffc107", DetachFromLastCall = false},
                [8] = {StatusCode = "7", StatusName = "Committed, but deployable.", StatusColor = "ffc107", DetachFromLastCall = false},
                [9] = {StatusCode = "8", StatusName = "Committed, not deployable.", StatusColor = "ffc107", DetachFromLastCall = false},
                [10] = {StatusCode = "9", StatusName = "Prisoner Escort.", StatusColor = "6c757d", DetachFromLastCall = false},
                [11] = {StatusCode = "10", StatusName = "At courts.", StatusColor = "6c757d", DetachFromLastCall = false},
                [12] = {StatusCode = "11", StatusName = "Officer off-duty.", StatusColor = "0e0e0e99", DetachFromLastCall = true},
                [13] = {StatusCode = "12", StatusName = "Confidential message.", StatusColor = "6c757d", DetachFromLastCall = false},
                [14] = {StatusCode = "13", StatusName = "Call back, not urgent.", StatusColor = "6c757d", DetachFromLastCall = false},
                [15] = {StatusCode = "14", StatusName = "Urgent call back.", StatusColor = "6c757d", DetachFromLastCall = false},
                [16] = {StatusCode = "15", StatusName = "Received.", StatusColor = "6c757d", DetachFromLastCall = false},
                [17] = {StatusCode = "16", StatusName = "Repeat.", StatusColor = "6c757d", DetachFromLastCall = false},
                [18] = {StatusCode = "17", StatusName = "Traffic stop.", StatusColor = "6c757d", DetachFromLastCall = false},
            },

            --====================== MDT Departments ===================--

            -- Note: ORDER department index numbers. Example: [1] = police, [2] = ambulance, [3] = fire, [4] = tow, [5] = civilians, this must be in a counting order or it will bug out the script!
            -- Note (repeat): For readability, download 'Visual Studio Code'. Otherwise editing the below is not recommended. Misplaced brackets and/or commas can break your script. https://code.visualstudio.com/download
            
            DepartmentList = {
                [1] = {
                    DepartmentName = "Metropolitan Police Service",
                    DepartmentLogo = "home_met.png",            -- NUI/images/home_met.png
                    DepartmentDescription = "The Metropolitan Police Service (MPS), formerly and still commonly known as the Metropolitan Police (and informally as the Met Police, the Met, Scotland Yard, or the Yard), is the territorial police force responsible for law enforcement and the prevention of crime in Greater London.",
                    DepartmentFooterText = "Select to enter the shift menu.",
                    DepartmentShortName = "MET",
                    DepartmentRoleName = "Your_Police_Role",  -- Match to the role name in the Discord API config.lua!
                    DepartmentCallsignPrefix = "CW-",
                    DepartmentType = "police",                  -- This defines the emergency service type, options: police | ambulance | fire | tow
                    DepartmentShiftAccess = true,               -- Is this department allowed to use the Shift system?
                    DepartmentPoliceComputerAccess = true,      -- Is this department allowed to access the Police Computer?
                    DepartmentOperationsAccess = true,          -- Is this department allowed to access operation reports?
                    DepartmentRanksAndRoles = {                 -- Match to the role name in the Discord API config.lua!
                        [1] = {RankName = "Student Police Constable", RoleName = "Your_Police_Role", AccessLevel = 1},      -- Access levels MUST go from lower, to equal or higher as you add ranks. 
                        [2] = {RankName = "Police Constable", RoleName = "Police_Constable", AccessLevel = 2},  -- Add ranks, low to high (top to bottom) as in the example here.
                        [3] = {RankName = "Sergeant", RoleName = "Sergeant", AccessLevel = 2},
                        [4] = {RankName = "Inspector", RoleName = "Inspector", AccessLevel = 3},
                        [5] = {RankName = "Chief Inspector", RoleName = "Chief_Inspector", AccessLevel = 3},
                        [6] = {RankName = "Superintendent", RoleName = "Superintendent", AccessLevel = 4},
                        [7] = {RankName = "Chief Superintendent", RoleName = "Chief_Superintendent", AccessLevel = 4},
                        [8] = {RankName = "Commander", RoleName = "Commander", AccessLevel = 5},
                        [9] = {RankName = "Deputy Assistant Commissioner", RoleName = "Deputy_Assistant_Commissioner", AccessLevel = 6},
                        [10] = {RankName = "Assistant Commissioner", RoleName = "Assistant_Commissioner", AccessLevel = 6},
                        [11] = {RankName = "Deputy Commissioner", RoleName = "Deputy_Commissioner", AccessLevel = 6},
                        [12] = {RankName = "Commissioner", RoleName = "Commissioner", AccessLevel = 7},
                        -- Add or remove ranks to your desire.
                    },
                    SubDepartments = {   -- You must have at least 1 sub-department
                        [1] = {
                            SubDepartmentName = "Emergency Response & Patrol Team",     -- Full sub-department name
                            SubDepartmentShortName = "ERPT",                            -- Just a shortname used to display, keep it short!
                            SubDepartmentRoleName = "Your_Police_Role",                         -- Match to the role name in the Discord API config.lua!
                            SubDepartmentCallsignPrefix = "TKI-YOUR UNIT NUMBER",                        -- Example: Server ID 1 will be 'CW-01'
                            SubDepartmentBlipData = {                                   -- Blips: https://docs.fivem.net/docs/game-references/blips/
                                SubSpriteID = 1,
                                SubColourID = 38,
                                SubScale = 0.9,
                            },
                        },
                        [2] = {
                            SubDepartmentName = "MO8",
                            SubDepartmentShortName = "MO8",
                            SubDepartmentRoleName = "RPU",
                            SubDepartmentCallsignPrefix = "OC-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 38,
                                SubScale = 0.9,
                            },
                        },
                        [3] = {
                            SubDepartmentName = "MO7 - DSU",
                            SubDepartmentShortName = "MO7 - DSU",
                            SubDepartmentRoleName = "DSU",
                            SubDepartmentCallsignPrefix = "XD-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 38,
                                SubScale = 0.9,
                            },
                        },
                    },
                },
                [2] = { 
                    DepartmentName = "London Ambulance Service",
                    DepartmentLogo = "home_las.png",            -- NUI/images/mylogo.png
                    DepartmentDescription = "Our main role is to respond to emergency 999 calls, providing medical care to patients across the capital, 24-hours a day, 365 days a year. Other services we offer include providing pre-arranged patient transport and finding hospital beds",
                    DepartmentFooterText = "Select to enter the shift menu.",
                    DepartmentShortName = "LAS",
                    DepartmentRoleName = "Your_Ambulance_Role",   -- Match to the role name in the Discord API config.lua!
                    DepartmentCallsignPrefix = "BS-",
                    DepartmentType = "ambulance",               -- This defines the emergency service type, options: police | ambulance | fire | tow
                    DepartmentShiftAccess = true,               -- Is this department allowed to use the Shift system?
                    DepartmentPoliceComputerAccess = true,      -- Is this department allowed to access the Police Computer?
                    DepartmentOperationsAccess = true,          -- Is this department allowed to access operation reports?
                    DepartmentRanksAndRoles = {                 -- Match to the role name in the Discord API config.lua!
                        [1] = {RankName = "Student Paramedic", RoleName = "Your_Ambulance_Role", AccessLevel = 1},
                        [2] = {RankName = "Paramedic", RoleName = "Ambu_Paramedic", AccessLevel = 2},
                        [3] = {RankName = "Advanced Paramedic", RoleName = "Ambu_Senior_Paramedic", AccessLevel = 3},
                        [4] = {RankName = "Care Clinician", RoleName = "Ambu_Advanced_Paramedic", AccessLevel = 4},
                        [5] = {RankName = "Advanced Care Clinician", RoleName = "Ambu_Leading_Operations_Manager", AccessLevel = 5},
                        [6] = {RankName = "Deputy Director of Ambulance", RoleName = "Ambu_Deputy_Director", AccessLevel = 6},
                        [7] = {RankName = "Director of Ambulance", RoleName = "Ambu_Director", AccessLevel = 7},
                    },
                    SubDepartments = { -- At least 1 sub-department!
                        [1] = {
                            SubDepartmentName = "Rapid Response",
                            SubDepartmentShortName = "RRV",
                            SubDepartmentRoleName = "Your_Ambulance_Role",
                            SubDepartmentCallsignPrefix = "BS-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 46,
                                SubScale = 0.9,
                            },
                        },
                        [2] = {
                            SubDepartmentName = "Helicopter Emergency Medical Services",
                            SubDepartmentShortName = "HEMS",
                            SubDepartmentRoleName = "HEMS",
                            SubDepartmentCallsignPrefix = "HO-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 46,
                                SubScale = 0.9,
                            },
                        },
                        [3] = {
                            SubDepartmentName = "Hazardous Area Response Team",
                            SubDepartmentShortName = "HART",
                            SubDepartmentRoleName = "HART",
                            SubDepartmentCallsignPrefix = "HA-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 46,
                                SubScale = 0.9,
                            },
                        },
                    },
                },
                [3] = { 
                    DepartmentName = "London Fire Brigade",
                    DepartmentLogo = "home_lfb.png",            -- NUI/images/mylogo.png
                    DepartmentDescription = "As well as firefighting, the LFB also responds to road traffic collisions, floods, shut-in-lift releases, and other incidents such as those involving hazardous materials or major transport accidents. It also conducts emergency planning and performs fire safety inspections and education.",
                    DepartmentFooterText = "Select to enter the shift menu.",
                    DepartmentShortName = "LFB",
                    DepartmentRoleName = "Your_Fire_Role",        -- Match to the role name in the Discord API config.lua!
                    DepartmentCallsignPrefix = "PL-",
                    DepartmentType = "fire",                    -- This defines the emergency service type, options: police | ambulance | fire | tow
                    DepartmentShiftAccess = true,               -- Is this department allowed to use the Shift system?
                    DepartmentPoliceComputerAccess = true,      -- Is this department allowed to access the Police Computer?
                    DepartmentOperationsAccess = true,          -- Is this department allowed to access operation reports?
                    DepartmentRanksAndRoles = {                 -- Match to the role name in the Discord API config.lua!
                        [1] = {RankName = "Firefighter", RoleName = "Your_Fire_Role", AccessLevel = 2},
                        [2] = {RankName = "Leading Firefighter", RoleName = "Lead_Firefighter", AccessLevel = 3},
                        [3] = {RankName = "Sub-Officer", RoleName = "Sub_Manager", AccessLevel = 3},
                        [4] = {RankName = "Station Officer", RoleName = "Station_Officer", AccessLevel = 4},
                        [5] = {RankName = "Station Commander", RoleName = "Station_Manager", AccessLevel = 4},
                        [6] = {RankName = "Group Commander", RoleName = "Group_Manager", AccessLevel = 5},
                        [7] = {RankName = "Deputy Assistant Commissioner", RoleName = "DACFO", AccessLevel = 6},
                        [8] = {RankName = "Assistant Commissioner", RoleName = "ACFO", AccessLevel = 6},
                        [9] = {RankName = "Deputy Commissioner", RoleName = "DCFO", AccessLevel = 6},
                        [10] = {RankName = "Commissioner", RoleName = "CFO", AccessLevel = 7},
                    },
                    SubDepartments = { -- At least 1 sub-department!
                        [1] = {
                            SubDepartmentName = "London Fire & Rescue",
                            SubDepartmentShortName = "F&R",
                            SubDepartmentRoleName = "Your_Fire_Role",
                            SubDepartmentCallsignPrefix = "PL-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 1,
                                SubScale = 0.9,
                            },
                        },
                        [2] = {
                            SubDepartmentName = "Heathrow Airport Fire & Rescue",
                            SubDepartmentShortName = "AFR",
                            SubDepartmentRoleName = "heathrowfire",
                            SubDepartmentCallsignPrefix = "HF-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 1,
                                SubScale = 0.9,
                            },
                        },
                        [3] = {
                            SubDepartmentName = "Marine Unit",
                            SubDepartmentShortName = "MARU",
                            SubDepartmentRoleName = "Marine",
                            SubDepartmentCallsignPrefix = "MA-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 1,
                                SubColourID = 1,
                                SubScale = 0.9,
                            },
                        },
                    },
                },
                [4] = { 
                    DepartmentName = "Tow Service",
                    DepartmentLogo = "home_tow.png",            -- NUI/images/mylogo.png
                    DepartmentDescription = "AA Towing is a trusted and efficient service that offers prompt assistance to stranded vehicles. With a fleet of well-equipped tow trucks and skilled operators, they excel at rescuing vehicles from breakdowns, accidents, and challenging situations. Whether it's on-site repairs, safe towing to service centers, or long-distance transportation, AA Towing ensures reliable and professional service to keep the roads running smoothly.",
                    DepartmentFooterText = "Start your career as a towing service operator.",
                    DepartmentShortName = "TOW",
                    DepartmentRoleName = "Your_Tow_Role",         -- Match to the role name in the Discord API config.lua!
                    DepartmentCallsignPrefix = "AA-",
                    DepartmentType = "tow",                     -- This defines the emergency service type, options: police | ambulance | fire | tow (civilian is a placeholder)
                    DepartmentShiftAccess = true,               -- Is this department allowed to access the Shift system?
                    DepartmentPoliceComputerAccess = false,     -- Is this department allowed to access the Police Computer?
                    DepartmentOperationsAccess = false,         -- Is this department allowed to access Operation reports?
                    DepartmentRanksAndRoles = {                 -- Match to the role name in the Discord API config.lua!
                        [1] = {RankName = "Recovery Operator", RoleName = "Your_Tow_Role", AccessLevel = 7},
                    },
                    SubDepartments = {
                        [1] = {
                            SubDepartmentName = "AA Towing Service",
                            SubDepartmentShortName = "AA",
                            SubDepartmentRoleName = "Your_Tow_Role",
                            SubDepartmentCallsignPrefix = "AA-",
                            SubDepartmentBlipData = {
                                SubSpriteID = 317,
                                SubColourID = 73,
                                SubScale = 0.9,
                            },
                        },
                    },
                },
                -- IMPORTANT: ONE civilian department is required. You must set the civilian RoleName(s) to a matching Discord API role which everyone has in your Discord. This will allow everyone to use the civilian section.
                [5] = { 
                    DepartmentName = "Civilian",
                    DepartmentLogo = "home_civ.png",            -- NUI/images/mylogo.png
                    DepartmentDescription = "Be free and play whoever you want to be as a civilian. Legal or illegal? It's all up to you.",
                    DepartmentFooterText = "Select to get access to the DVLA & Council.",
                    DepartmentShortName = "CIV",
                    DepartmentRoleName = "Your_Civilian_Role",         -- Match to the role name in the Discord API config.lua!
                    DepartmentCallsignPrefix = "NONE",
                    DepartmentType = "civilian",                -- This defines the emergency service type, options: civilian
                    DepartmentShiftAccess = false,              -- Is this department allowed to access the Shift system?
                    DepartmentPoliceComputerAccess = false,     -- Is this department allowed to access the Police Computer?
                    DepartmentOperationsAccess = false,         -- Is this department allowed to access Operation reports?
                    DepartmentRanksAndRoles = {                 -- Match to the role name in the Discord API config.lua!
                        [1] = {RankName = "Civilian", RoleName = "Your_Civilian_Role", AccessLevel = 1},
                    },
                    SubDepartments = {},        -- Leave this empty, for other departments you must add at least one sub-department, see examples in the other departments.
                },
            },
        },

        --====================== Reports =====================--
        -- Mind the [1], [2], [3] indexes, which need to be ordered! You may add or remove reports.

        OperationReports = {
            Police = {
                [1] = {ReportName = "Incident"},
                [2] = {ReportName = "Vehicle seizure"},
                [3] = {ReportName = "Missing person"},
                [4] = {ReportName = "Domestic violence"},
                [5] = {ReportName = "Vandalism"},
                [6] = {ReportName = "Assault"},
                [7] = {ReportName = "Burglary"},
                [8] = {ReportName = "Theft"},
                [9] = {ReportName = "Fraud"},
                [10] = {ReportName = "Cybercrime"},
                [11] = {ReportName = "Repeated offender"},
                [12] = {ReportName = "Terrorism"},
                [13] = {ReportName = "Major Incident"},
                [14] = {ReportName = "Other..."},
            },
            Medical = {
                [1] = {ReportName = "Incident"},
                [2] = {ReportName = "Patient"},
                [3] = {ReportName = "Cardiac arrest"},
                [4] = {ReportName = "Stroke"},
                [5] = {ReportName = "Allergic reaction"},
                [6] = {ReportName = "Seizure"},
                [7] = {ReportName = "Poisoning"},
                [8] = {ReportName = "High fever"},
                [9] = {ReportName = "Breathing difficulties"},
                [10] = {ReportName = "Other..."},
            },
            Fire = {
                [1] = {ReportName = "Incident"},
                [2] = {ReportName = "Fire"},
                [3] = {ReportName = "Hazardous materials"},
                [4] = {ReportName = "Gas leak"},
                [5] = {ReportName = "Building collapse"},
                [6] = {ReportName = "Explosion"},
                [7] = {ReportName = "Maintenance"},
                [8] = {ReportName = "Other..."},
            }
        },

        --====================== ANPR (2/2) =====================--
        
        DisplayANPRHUD = true,                  -- False disables the ANPR in vehicles.
        ANPRSignalSoundFile = "anpralert",      -- Upload your .ogg sound file to night_shifts/NUI/sounds/panicbutton.ogg, mention just the name without .ogg here
        ANPRSignalSoundFileVolume = 0.25,       -- This is at your own risk and Nights Software is not liable for any damage caused by you changing this setting. (Limited to 1.0)
        VehicleANPRRange = 100.0,               -- GTA Meters.
        TimeToUnlockANPR = 20,                  -- Seconds to unlock the ANPR after scanning a plate registered in the ANPR.
        ANPRVehicles = {                        -- Define vehicle spawn model names to fit ANPR in them. The system checks for the first 4 characters to match.
            "taudia4",
            "police2",
            -- Add more here: "example",
        },

        -- Note: Keep in mind your index ([1], [2], [3]) numbers should follow up in the correct counting order.
        -- Note: These locations are based on non-existent cameras. You can change the locations if you desire and adjust it to your cameras in-game, or pick random locations. The one below is based of a camera script by LondonStudios (averagespeedcam)
        ANPRCameraLocations = {
            [1] = {coords = vector3(444.9829, -1056.5446, 31.3127), radius = 25.0},
            [2] = {coords = vector3(661.3218, -1029.9957, 36.3579), radius = 25.0},
            [3] = {coords = vector3(658.3356, -1005.5438, 36.4008), radius = 25.0},
            [4] = {coords = vector3(473.5020, -1028.5477, 34.1334), radius = 25.0},
            [5] = {coords = vector3(350.6205, -432.3000, 44.7901), radius = 25.0},
            [6] = {coords = vector3(455.8097, -361.8786, 46.9817), radius = 25.0},
            [7] = {coords = vector3(-107.5178, -81.6130, 57.0629), radius = 25.0},
            [8] = {coords = vector3(-212.0237, -46.2460, 50.1804), radius = 25.0},
            [9] = {coords = vector3(-434.3381, -283.4631, 36.0121), radius = 25.0},
            [10] = {coords = vector3(-335.0393, -355.0107, 30.2856), radius = 25.0},

            [11] = {coords = vector3(-360.4594, -375.5770, 30.8645), radius = 25.0},
            [12] = {coords = vector3(-506.1383, -357.3091, 35.1580), radius = 25.0},
            [13] = {coords = vector3(-650.4554, -695.4469, 30.4144), radius = 25.0},
            [14] = {coords = vector3(-649.7978, -797.1583, 24.9874), radius = 25.0},
            [15] = {coords = vector3(-75.2298, 60.6948, 71.8627), radius = 25.0},
            [16] = {coords = vector3(-185.1800, 123.1297, 69.9262), radius = 25.0},
            [17] = {coords = vector3(-260.5720, 134.1356, 69.1722), radius = 25.0},
            [18] = {coords = vector3(-362.3298, 135.8256, 66.3131), radius = 25.0},
            [19] = {coords = vector3(-353.7046, 115.8156, 66.5841), radius = 25.0},
            [20] = {coords = vector3(-251.8915, 114.5057, 69.4023), radius = 25.0},

            [21] = {coords = vector3(-190.1297, 103.9687, 69.9844), radius = 25.0},
            [22] = {coords = vector3(-129.3595, 68.5297, 71.1034), radius = 25.0},
            [23] = {coords = vector3(438.5699, -340.9151, 47.5607), radius = 25.0},
            [24] = {coords = vector3(373.3358, -387.0987, 46.2673), radius = 25.0},
            [25] = {coords = vector3(-60.3057, -1625.9524, 29.3500), radius = 25.0},
            [26] = {coords = vector3(-122.7689, -1700.6539, 29.3901), radius = 25.0},
            [27] = {coords = vector3(-490.5338, -1884.6572, 17.1263), radius = 25.0},
            [28] = {coords = vector3(-657.2271, -2048.9219, 15.8765), radius = 25.0},
            [29] = {coords = vector3(-697.5451, -2132.6316, 12.9239), radius = 25.0},
            [30] = {coords = vector3(-509.1899, -1937.0714, 16.2717), radius = 25.0},

            [31] = {coords = vector3(-525.4942, -1759.4008, 21.4763), radius = 25.0},
            [32] = {coords = vector3(-631.4293, -1682.3999, 24.8544), radius = 25.0},
            [33] = {coords = vector3(-648.3516, -1686.1282, 25.0921), radius = 25.0},
            [34] = {coords = vector3(-535.0145, -1770.5436, 21.4531), radius = 25.0},
            [35] = {coords = vector3(-2210.8735, -329.9511, 13.2849), radius = 25.0},
            [36] = {coords = vector3(-2443.3113, -213.9013, 16.6510), radius = 25.0},
            [38] = {coords = vector3(-3078.5261, 789.5964, 19.5776), radius = 25.0},
            [39] = {coords = vector3(-3110.7920, 1036.3386, 19.7748), radius = 25.0},
            [40] = {coords = vector3(-2687.4712, 2344.3611, 16.9748), radius = 25.0},

            [41] = {coords = vector3(-2540.8560, 3409.2993, 13.2609), radius = 25.0},
            [42] = {coords = vector3(-2023.4358, 4480.2866, 56.9937), radius = 25.0},
            [43] = {coords = vector3(-1747.9795, 4750.9492, 57.1458), radius = 25.0},
            [44] = {coords = vector3(-659.8248, 5547.4185, 38.5107), radius = 25.0},
            [45] = {coords = vector3(-511.0099, 5789.7144, 35.2438), radius = 25.0},
            [46] = {coords = vector3(1578.3236, 6390.5654, 25.3150), radius = 25.0},
            [47] = {coords = vector3(1955.3367, 6180.5122, 45.3713), radius = 25.0},
            [48] = {coords = vector3(2630.0645, 5060.2798, 44.7457), radius = 25.0},
            [49] = {coords = vector3(2693.4573, 4807.2515, 44.4928), radius = 25.0},
            [50] = {coords = vector3(2901.0281, 3812.6240, 52.6259), radius = 25.0},

            [51] = {coords = vector3(2817.9675, 3523.1821, 54.3887), radius = 25.0},
            [52] = {coords = vector3(1768.6747, 2124.3477, 64.6199), radius = 25.0},
            [53] = {coords = vector3(1713.0435, 1642.7545, 82.6449), radius = 25.0},
            [54] = {coords = vector3(895.6431, 206.2509, 76.9157), radius = 25.0},
            [55] = {coords = vector3(698.2474, -97.5875, 54.6997), radius = 25.0},
            [56] = {coords = vector3(753.5383, -89.0521, 55.7270), radius = 25.0},
            [57] = {coords = vector3(967.6284, 219.2735, 78.5446), radius = 25.0},
            [58] = {coords = vector3(1726.4495, 1525.2784, 84.6828), radius = 25.0},
            [59] = {coords = vector3(1925.5909, 2426.2825, 54.5445), radius = 25.0},
            [60] = {coords = vector3(2838.6582, 3503.5039, 54.4947), radius = 25.0},

            [61] = {coords = vector3(2928.4038, 3810.8823, 52.5231), radius = 25.0},
            [62] = {coords = vector3(2699.7864, 4808.2485, 44.4659), radius = 25.0},
            [63] = {coords = vector3(2640.6008, 5072.4487, 44.7297), radius = 25.0},
            [64] = {coords = vector3(-1388.2404, 5111.3306, 60.8053), radius = 25.0},
            [65] = {coords = vector3(-1780.3440, 4752.9419, 57.0219), radius = 25.0},
            [66] = {coords = vector3(-1780.344, 4752.9419, 57.0219), radius = 25.0},
            [67] = {coords = vector3(-2554.3157, 3469.7424, 13.5039), radius = 25.0},
            [68] = {coords = vector3(-2716.2976, 2351.6921, 16.7254), radius = 25.0},
            [69] = {coords = vector3(-3012.1589, 604.9083, 19.9052), radius = 25.0},
            [70] = {coords = vector3(-3041.8799, 262.987, 15.8275), radius = 25.0},
            
            [71] = {coords = vector3(-2409.8367, -268.4828, 15.2493), radius = 25.0},
            [72] = {coords = vector3(-2242.6208, -358.1303, 13.3232), radius = 25.0},
            [73] = {coords = vector3(-469.5535, -542.7756, 25.3255), radius = 25.0},
            [74] = {coords = vector3(-119.566, -540.8381, 30.3053), radius = 25.0},
        },

        --====================== REAL ESTATE & TRANSLATIONS =====================--

        Enable_Property_Blips = true,
        PropertyTypes = {
            [1] = {PropertyType = "House"},
            [2] = {PropertyType = "Apartment"},
            [3] = {PropertyType = "Floor"},
            [4] = {PropertyType = "Office"},
            [5] = {PropertyType = "Warehouse"},
            [6] = {PropertyType = "Factory"},
            [7] = {PropertyType = "Retail Space"},
            [8] = {PropertyType = "Condo"},
            [9] = {PropertyType = "Townhouse"},
            [10] = {PropertyType = "Villa"},
            [11] = {PropertyType = "Duplex"},
            [12] = {PropertyType = "Loft"},
            [13] = {PropertyType = "Studio"},
            [14] = {PropertyType = "Penthouse"},
            [15] = {PropertyType = "Cottage"},
            [16] = {PropertyType = "Bungalow"},
            [17] = {PropertyType = "Farmhouse"},
            [18] = {PropertyType = "Mansion"},
            [19] = {PropertyType = "Mobile Home"},
            [20] = {PropertyType = "Hotel"},
            [21] = {PropertyType = "Hostel"},
            [22] = {PropertyType = "Resort"},
            [23] = {PropertyType = "Guesthouse"},
            [24] = {PropertyType = "Cabin"},
            [25] = {PropertyType = "Chalet"},
            [26] = {PropertyType = "Commercial Building"},
            [27] = {PropertyType = "Mixed-Use Property"},
            [28] = {PropertyType = "Storage Unit"},
            [29] = {PropertyType = "Event Venue"},
            [30] = {PropertyType = "Gym/Fitness Center"},
            [31] = {PropertyType = "Restaurant"},
            [32] = {PropertyType = "Bar/Nightclub"},
            [33] = {PropertyType = "School/Institution"},
            [34] = {PropertyType = "Church/Temple"},
            [35] = {PropertyType = "Hospital/Clinic"},
            [36] = {PropertyType = "Gas Station"},
            [37] = {PropertyType = "Car Dealership"},
            [38] = {PropertyType = "Vacant Land"},
            [39] = {PropertyType = "Industrial Site"},
            [40] = {PropertyType = "Recreational Property"},
            [41] = {PropertyType = "Waterfront Property"},
            [42] = {PropertyType = "Historic Property"},
            [43] = {PropertyType = "Ranch"},
            [44] = {PropertyType = "Orchard/Vineyard"},
            [45] = {PropertyType = "Equestrian Property"},
            [46] = {PropertyType = "Island"},
            [47] = {PropertyType = "Floating Home"},
            [48] = {PropertyType = "Treehouse"},
            [49] = {PropertyType = "Igloo"},
            [50] = {PropertyType = "Underground Dwelling"},
            -- Add or remove property types: Mind the [1], [2] index numbers. They must be in order.
        },

        --====================== TRAININGS & CERTIFICATES =====================--

        Trainings = {
            [1] = {
                TrainingName = "Emergency Driving Training",
                TrainingDescription = "A training provided for emergency personnel learning how to drive while using lights and sirens or drive in emergency circumstances.",
                TrainingPrivileges = "On completion, the employee is allowed to drive with lights and sirens.",
                TrainingCertificate = "Blue Light Certified",
            },
            [2] = {
                TrainingName = "Taser Training",
                TrainingDescription = "A training provided for emergency personnel to learn how to work with tasers alongside the legislation for the use of tasers.",
                TrainingPrivileges = "On completion, the employee is allowed to use force by applying the taser.",
                TrainingCertificate = "Taser Certified",
            },
            [3] = {
                TrainingName = "TPAC Training",
                TrainingDescription = "Intensive training for police officers focused on Tactical Pursuit and Containment (TPAC) techniques. The training covers advanced driving maneuvers, vehicle tactics, and coordination in high-speed pursuits.",
                TrainingPrivileges = "On completion, the officer is authorized to engage in high-speed pursuits and employ advanced vehicle tactics for effective containment.",
                TrainingCertificate = "TPAC Certified",
            },
            [4] = {
                TrainingName = "Police Firearms Training",
                TrainingDescription = "Training for police officers to become proficient in the use of firearms, including marksmanship and tactical considerations.",
                TrainingPrivileges = "On completion, the officer is authorized to carry and use firearms in the line of duty.",
                TrainingCertificate = "Firearms Certified",
            },
            [5] = {
                TrainingName = "Paramedic Life Support Training",
                TrainingDescription = "Comprehensive life support training for paramedics covering advanced medical procedures and emergency life-saving techniques.",
                TrainingPrivileges = "On completion, the paramedic is authorized to perform advanced life support interventions.",
                TrainingCertificate = "Life Support Certified",
            },
            [6] = {
                TrainingName = "Firefighter Basic Training",
                TrainingDescription = "Basic training for firefighters covering firefighting techniques, equipment usage, and safety procedures.",
                TrainingPrivileges = "On completion, the firefighter gains basic firefighting capabilities.",
                TrainingCertificate = "Firefighting Certified",
            },
            [7] = {
                TrainingName = "Hazmat Response Training",
                TrainingDescription = "Training for emergency responders to handle hazardous materials incidents, including identification, containment, and decontamination procedures.",
                TrainingPrivileges = "On completion, the responder is authorized to participate in hazardous materials response operations.",
                TrainingCertificate = "Hazmat Certified",
            },
            [8] = {
                TrainingName = "Search and Rescue Training",
                TrainingDescription = "Training for emergency personnel on search and rescue techniques, equipment usage, and coordination in disaster scenarios.",
                TrainingPrivileges = "On completion, the responder is authorized to participate in search and rescue missions.",
                TrainingCertificate = "Search and Rescue Certified",
            },
        },
        
        --====================== VEHICLE COLOURS & TRANSLATIONS =====================--

        VehicleColours = {  -- These are just some, Add more to your desire: https://wiki.rage.mp/index.php?title=Vehicle_Colors
            -- primarymetallic
            {name = "Black", colorindex = 0},
            {name = "Carbon Black", colorindex = 147},
            {name = "Hraphite", colorindex = 1},
            {name = "Anhracite Black", colorindex = 11},
            {name = "Black Steel", colorindex = 2},
            {name = "Dark Steel", colorindex = 3},
            {name = "Silver", colorindex = 4},
            {name = "Bluish Silver", colorindex = 5},
            {name = "Rolled Steel", colorindex = 6},
            {name = "Shadow Silver", colorindex = 7},
            {name = "Stone Silver", colorindex = 8},
            {name = "Midnight Silver", colorindex = 9},
            {name = "Cast Iron Silver", colorindex = 10},
            {name = "Metallic Anthracite Grey", colorindex = 11},
            {name = "Util Black", colorindex = 15},
            {name = "Util Black Poly", colorindex = 16},
            {name = "Util Dark Silver", colorindex = 17},
            {name = "Util Silver", colorindex = 18},
            {name = "Util Gun Metal", colorindex = 19},
            {name = "Util Shadow Silver", colorindex = 20},
            {name = "Worn Black", colorindex = 21},
            {name = "Worn Graphite", colorindex = 22},
            {name = "Worn Silver Grey", colorindex = 23},
            {name = "Worn Silver", colorindex = 24},
            {name = "Worn Blue Silver", colorindex = 25},
            {name = "Worn Shadow Silver", colorindex = 26},
            {name = "Metallic Red", colorindex = 27},
            {name = "Torino Red", colorindex = 28},
            {name = "Formula Red", colorindex = 29},
            {name = "Lava Red", colorindex = 150},
            {name = "Blaze Red", colorindex = 30},
            {name = "Grace Red", colorindex = 31},
            {name = "Garnet Red", colorindex = 32},
            {name = "Sunset Red", colorindex = 33},
            {name = "Cabernet Red", colorindex = 34},
            {name = "Wine Red", colorindex = 143},
            {name = "Candy Red", colorindex = 35},
            {name = "Hot Pink", colorindex = 135},
            {name = "Pfsiter Pink", colorindex = 137},
            {name = "Salmon Pink", colorindex = 136},
            {name = "Sunrise Orange", colorindex = 36},
            {name = "Metallic Classic Gold", colorindex = 37},
            {name = "Orange", colorindex = 38},
            {name = "Util Red", colorindex = 43},
            {name = "Util Bright Red", colorindex = 44},
            {name = "Util Garnet Red", colorindex = 45},
            {name = "Worn Red", colorindex = 46},
            {name = "Worn Golden Red", colorindex = 47},
            {name = "Worn Dark Red", colorindex = 48},
            {name = "Bright Orange", colorindex = 138},
            {name = "Gold", colorindex = 99},
            {name = "Bronze", colorindex = 90},
            {name = "Yellow", colorindex = 88},
            {name = "Race Yellow", colorindex = 89},
            {name = "Dew Yellow", colorindex = 91},
            {name = "Dark Green", colorindex = 49},
            {name = "Racing Green", colorindex = 50},
            {name = "Sea Green", colorindex = 51},
            {name = "Olive Green", colorindex = 52},
            {name = "Bright Green", colorindex = 53},
            {name = "Gasoline Green", colorindex = 54},
            {name = "Matte Lime Green", colorindex = 55},
            {name = "Util Dark Green", colorindex = 56},
            {name = "Util Green", colorindex = 57},
            {name = "Worn Dark Green", colorindex = 58},
            {name = "Worn Green", colorindex = 59},
            {name = "Lime Green", colorindex = 92},
            {name = "Midnight Blue", colorindex = 141},
            {name = "Galaxy Blue", colorindex = 61},
            {name = "Dark Blue", colorindex = 62},
            {name = "Saxon Blue", colorindex = 63},
            {name = "Blue", colorindex = 64},
            {name = "Mariner Blue", colorindex = 65},
            {name = "Harbor Blue", colorindex = 66},
            {name = "Diamond Blue", colorindex = 67},
            {name = "Surf Blue", colorindex = 68},
            {name = "Nautical Blue", colorindex = 69},
            {name = "Racing Blue", colorindex = 73},
            {name = "Ultra Blue", colorindex = 70},
            {name = "Light Blue", colorindex = 74},
            {name = "Util Dark Blue", colorindex = 75},
            {name = "Util Midnight Blue", colorindex = 76},
            {name = "Util Blue", colorindex = 77},
            {name = "Util Sea Foam Blue", colorindex = 78},
            {name = "Util Lightning Blue", colorindex = 79},
            {name = "Util Maui Blue Poly", colorindex = 80},
            {name = "Util Bright Blue", colorindex = 81},
            {name = "Matte Dark Blue", colorindex = 82},
            {name = "Matte Blue", colorindex = 83},
            {name = "Matte Midnight Blue", colorindex = 84},
            {name = "Worn Dark blue", colorindex = 85},
            {name = "Worn Blue", colorindex = 86},
            {name = "Worn Light blue", colorindex = 87},
            {name = "Metallic Taxi Yellow", colorindex = 88},
            {name = "Metallic Race Yellow", colorindex = 89},
            {name = "Metallic Bronze", colorindex = 90},
            {name = "Metallic Yellow Bird", colorindex = 91},
            {name = "Metallic Lime", colorindex = 92},
            {name = "Metallic Champagne", colorindex = 93},
            {name = "Chocolate Brown", colorindex = 96},
            {name = "Bison Brown", colorindex = 101},
            {name = "Creeen Brown", colorindex = 95},
            {name = "Feltzer Brown", colorindex = 94},
            {name = "Maple Brown", colorindex = 97},
            {name = "Beechwood Brown", colorindex = 103},
            {name = "Sienna Brown", colorindex = 104},
            {name = "Saddle Brown", colorindex = 98},
            {name = "Moss Brown", colorindex = 100},
            {name = "Woodbeech Brown", colorindex = 102},
            {name = "Straw Brown", colorindex = 99},
            {name = "Sandy Brown", colorindex = 105},
            {name = "Bleached Brown", colorindex = 106},
            {name = "Schafter Purple", colorindex = 71},
            {name = "Spinnaker Purple", colorindex = 72},
            {name = "Midnight Purple", colorindex = 142},
            {name = "Bright Purple", colorindex = 145},
            {name = "Cream", colorindex = 107},
            {name = "Ice White", colorindex = 111},
            {name = "Frost White", colorindex = 112},
            -- primarymatte
            {name = "Black", colorindex = 12},
            {name = "Gray", colorindex = 13},
            {name = "Light Gray", colorindex = 14},
            {name = "Ice White", colorindex = 131},
            {name = "Blue", colorindex = 83},
            {name = "Dark Blue", colorindex = 82},
            {name = "Midnight Blue", colorindex = 84},
            {name = "Midnight Purple", colorindex = 149},
            {name = "Schafter Purple", colorindex = 148},
            {name = "Red", colorindex = 39},
            {name = "Dark Red", colorindex = 40},
            {name = "Orange", colorindex = 41},
            {name = "Yellow", colorindex = 42},
            {name = "Lime Green", colorindex = 55},
            {name = "Green", colorindex = 128},
            {name = "Frost Green", colorindex = 151},
            {name = "Foliage Green", colorindex = 155},
            {name = "Olive Darb", colorindex = 152},
            {name = "Dark Earth", colorindex = 153},
            {name = "Desert Tan", colorindex = 154},
            -- primarymetal
            {name = "Brushed Steel", colorindex = 117},
            {name = "Brushed Black Steel", colorindex = 118},
            {name = "Brushed Aluminum", colorindex = 119},
            {name = "Pure Gold", colorindex = 158},
            {name = "Brushed Gold", colorindex = 159},
            -- chrome
            {name = "Chrome", colorindex = 120}
        },   
    }
   
```

</details>

## Fix UI Lag

FiveM has a setting in their application (settings menu) which allows you to "Fix UI Lag". This is recommend to set checked (enabled) for this resource.

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. A client side functions script `c_functions.lua` and a server side functions script `s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits.

Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

## Exports

## SERVERSIDE Exports:
GetUserShiftData is used to get all the data related to their shift stored clientside for the given players' server ID. It will auto-print out the result to see what keys and values you get to use.
```lua
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

## CLIENTSIDE Exports:
```lua
exports.night_shifts:TriggerAlarm(isEmergency --[[ bool ]], isPoliceRequired --[[ bool ]], isAmbulanceRequired --[[ bool ]], isFireRequired --[[ bool ]], isTowRequired --[[ bool ]], description --[[ string ]], coordinates --[[ Vector3 ]])

exports.night_shifts:CreateEmergencyCall(isEmergency --[[ bool ]], isPoliceRequired --[[ bool ]], isAmbulanceRequired --[[ bool ]], isFireRequired --[[ bool ]], isTowRequired --[[ bool ]], description --[[ string ]], caller_name --[[ string ]], coordinates --[[ Vector3 ]], contact_details --[[ string ]])

exports.night_shifts:GetCivilianCount() -- Gets the amount of civilians online and so on for the other exports.
exports.night_shifts:GetPoliceCount()
exports.night_shifts:GetAmbulanceCount()
exports.night_shifts:GetFireCount()
exports.night_shifts:GetTowCount()
```

---

## Editing styling

You can edit styling in NUI/styles.css. It is not recommended if you don't know what you're doing, because this can be tricky. It wasn't specifically made to be edited, but if you're handy or looking for a challenge you'll find your way for most cases!

---

# How to play Night Shifts - MDT?
Welcome to Night Shifts - MDT, a customizable MDT system for your community. Whether you're running a police, fire, or EMS department, Night Shifts provides a range of features to help you manage your operations. Our MDT is configurable to fit the needs of emergency services in any country.

## Civilian Side
The civilian side of the MDT includes features such as an emergency services hotline, a council/city hall registry for managing civilians, and a DVLA/DMV registry for managing vehicles. You can edit your civilians and vehicles, and even add custom profile pictures for each one.

## Emergency Services Side
On the emergency services side, you can manage your shift and status, select your department and sub-department, and trigger a panic button in case of an emergency. The emergency hotline allows you to receive and locate emergency calls, while the Police National Computer (PNC) lets you search for people, vehicles, and records. You can also create reports for police, fire, and ambulance services, and view statistics for your department.

## Server Owner Features
If you're a server owner, Night Shifts gives you even more control over your MDT system. You can configure ANPR camera locations, fire station alarms, images and sounds in the NUI folder, language settings, and more. You can also customize menu names, MDT title, and text settings, and even adjust cooldowns for blips and calls. Night Shifts also allows you to create configurable departments, sub-departments, ranks, roles, and access levels, ensuring that your MDT system is tailored to your community's needs.

In short, Night Shifts is a powerful tool for managing your emergency services operations. With its customizable features and easy-to-use interface, Night Shifts makes it easier than ever to keep your community safe and secure.

This is a basic approach to how to play Night Shifts. You can create your own kind of documentation for your own community to make it fit! The server owner can make the MDT fit any country.

## There are three sides to the MDT:

### Civilian Side

Features:
```
Emergency Services Hotline
- Call 999/911/112 and provide detailed information about what you require.

Council / City Hall
- Register your civilians
- Edit your civilians
- Add a custom profile picture to your civilian registry

DVLA / DMV
- Register your vehicles, which is connected to one of your civilians
- Edit your vehicles
- Add a custom vehicle picture to your vehicle registry
```

### Emergency Services Side

Features:
```
Battery & Signal
- Charge your MDT battery in vehicles or interiors
- Signal based on your ping

Shift & status
- Select your department, with access based on Discord roles
- Select your sub-department
- Toggle your shift
- Select your status
- Trigger panic button

Emergency Hotline
- Receive emergency calls
- View (archived) calls
- Locate and track calls with a regular waypoint

Police National Computer (PNC)
- Person Search
- Vehicle Search
- Record Search
- Fine Search
- Add records via Person Search
- Add fines via Person Search
- Edit markers via Person Search
- Edit BOLO via vehicle Search
- View active person warrants
- Locate active person warrants
- View active ANPR registrations
- Locate active ANPR registrations
- Report sightings for wanted people or ANPR registered vehicles

Unit overview (Control / Dispatch)
- Overview units (See a table of rows with all kinds of shift data, location data and more of each user on shift)
- Track units
- Request backup
- Send dispatch messages

Operations
- Create reports for police, fire and ambulance
- Search & view reports by query or date
- Read police, fire and ambulance guidelines

Statistics
- View statistics
```

### Server owner side

```
- Configurable ANPR camera locations (Fictive, you can find a camera object script or MLO at third parties)
- Configurable fire station alarms, triggered upon each call for the fire service
- Configurable images in the NUI images folder, each with a different purpose
- Configurable sounds in the NUI sounds folder, each with a different purpose
- Configurable language in the config folder
- Configurable handbooks in the config folder
- Configurable and self-writable inventory item checks in c_functions.lua
- Configurable postal script in c_functions.lua or use our recommendation nearest-postal
- Configurable commands & hotkeys
- Configurable menu names, MDT title and loads more text settings
- Configurable cooldowns for blips, calls and loads more settings
- Configurable statusses
- Configurable styles in styles.css
- Configurable departments, sub-departments, ranks, roles and access levels
- Every word displayed is editable in the config file for the MDT, to provide for everyone in the world.
```

---

## Troubleshoot

A list of tips and tricks:

1. Start the resource before you or any other player joins. This will prevent errors in relation to your database.

1. Do not delete department sections or change index numbers in the config.lua. Some parts of the code require the setup and the MDT is made to have 4 sections. To disable one, just permission lock and rename it or get creative otherwise.

1. Always order index numbers. Correct: [1], [2], [3] | Wrong: [1], [3], [4]

1. Always read the commentry in the scripts you're editing. There is logic in them.

1. Got players who can not connect due to their steam license? There are solutions for this: 

- Make sure the server has the steam webapi key in it's server.cfg, otherwise it will not be able to make use of steam services: 
[Generate a steam web api key](https://steamcommunity.com/dev/apikey)

Choose a domain, can be any.

In your server.cfg:
```
set steam_webApiKey "your_key"
```

- Also set this key in your servers hosting company web dashboard (if applicable).

- Re-log into steam and discord, don't just restart it. THEN connect to FiveM. 

1. Check whether your script is still named `night_shifts`, this is required for it to work. Do NOT rename it.

---

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
