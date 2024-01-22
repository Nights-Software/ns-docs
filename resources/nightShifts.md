---
layout: default
title: "Night Shifts - Mobile Data Terminal"
nav_order: 32
has_children: false
has_toc: true
last_modified_date: "2023-05-03 17:00:00"
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

1. Ensure or start this resource in your server.cfg. 

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

1. Ensure or start this resource, after setting it up, in your server.cfg. 

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

*Hint: You will take some time to configure this the way you like, so plan that time and take your time to read! Frequently test your edits to see whether you're making mistakes and where to find them. The MDT will only work for those Discord Roles which have been set up. Trying stuff early is good for confirming that your resource works, but not for trying out it's functionalities.*

## Fix UI Lag

FiveM has a setting in their application (settings menu) which allows you to "Fix UI Lag". This is recommend to set checked (enabled) for this resource.

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. A client side functions script `c_functions.lua` and a server side functions script `s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits.

Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

## Exports

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

More CLIENTSIDE exports:
```lua
exports.night_shifts:TriggerAlarm(isEmergency --[[ bool ]], isPoliceRequired --[[ bool ]], isAmbulanceRequired --[[ bool ]], isFireRequired --[[ bool ]], isTowRequired --[[ bool ]], description --[[ string ]], coordinates --[[ Vector3 ]])

exports.night_shifts:CreateEmergencyCall(isEmergency --[[ bool ]], isPoliceRequired --[[ bool ]], isAmbulanceRequired --[[ bool ]], isFireRequired --[[ bool ]], isTowRequired --[[ bool ]], description --[[ string ]], caller_name --[[ string ]], coordinates --[[ Vector3 ]], contact_details --[[ string ]])
```

---

## Editing styling

You can edit styling in NUI/styles.css. It is not recommended if you don't know what you're doing, because this can be tricky. It wasn't specifically made to be edited, but if you're handy or looking for a challenge you'll find your way for most cases!

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
