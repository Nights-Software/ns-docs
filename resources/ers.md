---
layout: default
title: "Emergency Response Simulator for FiveM"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2024-07-12 20:30:00"
---

<img class="cover-img" src="/assets/img/ers.png" alt="Emergency Response Simulator for FiveM" draggable="false">

# Emergency Response Simulator for FiveM
{: .no_toc}

A guide to install Emergency Response Simulator for FiveM

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

[Coming soon!](https://store.nights-software.com){: .btn .btn-red}

## Purchasing the resource

Find this product at: [https://store.nights-software.com/category/ers](https://store.nights-software.com/category/ers)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
Set FTP Transfer Type to Binary -> Open Keymaster Download ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

## Installing Emergency Response Simulator for FiveM

We are going to install multiple resources to make the ERS function as intended.

1. Download the packages which we are going to install from [keymaster](https://keymaster.fivem.net/asset-grants). Make sure to install them in the order as they are listed.

<dl>
    <dt>1. Night Discord API (Optional - Included with ERS Essential, Plus and Ultimate)</dt>
    <dd>night_discordapi allows you to utilize Discord roles for permissions. You can also choose for ESX, QBcore, Ace permissions or no permissions as an alternative. See all features [here](https://store.nights-software.com/package/5035729). Find installation support [here](https://docs.nights-software.com/resources/discordAPI/).</dd>
    <dt>2. Night Subtitles (Optional - Included with ERS Essential, Plus and Ultimate)</dt>
    <dd>night_subtitles displays subtitles as if you're watching a movie. See all features [here](https://store.nights-software.com/package/6043540). This resource is a drag-and-drop into your resources folder!</dd>
    <dt>3. Night Shifts MDT (Optional - Included with ERS Plus and ERS Ultimate)</dt>
    <dd>night_shifts is a modern MDT allowing you to manage and control processes for all emergency services. See all features [here](https://store.nights-software.com/package/5667103). Find and installation tutorial [here](https://docs.nights-software.com/resources/nightShifts/).</dd>
    <dt>4. SmartFiresLite (Got the full version? Then do not install SmartFiresLite)</dt>
    <dd>Provided by [London Studios](https://londonstudios.net). This resource allows the ERS to spawn fires and is included for free. Consider getting the full version for more advanced gameplay. This resource is a drag-and-drop into your resources folder!</dd>
    <dt>5. SmartHoseLite (Got the full version? Then do not install SmartHoseLite)</dt>
    <dd>Provided by [London Studios](https://londonstudios.net). This resource allows the player to use a waterhose to kill fires and is included for free. Consider getting the full version for more advanced gameplay. This resource is a drag-and-drop into your resources folder!</dd>
    <dt>6. EMS Props</dt>
    <dd>ERS uses stretchers from the open source resource called EMS Props made by Tiddy. Download it via their [CFX Forum post](https://forum.cfx.re/t/add-on-props-medical-prop-pack/5037054). This resource is a drag-and-drop into your resources folder!</dd>
    <dt>7. Emergency Response Simulator</dt>
    <dd>The ERS system is the main gamemode allowing you to simulate emergency response calls. You can play as Police, Fire, Medic and tow service operator. This system includes 100+ callouts by default, crafted for all service types. This system allows you to create emergency calls yourself (via coding). Read more about this below...</dd>
</dl>

1. Place the resources listed above into your resources folder and DO NOT RENAME them.

2. Ensure / start the resources listed above IN THE GIVEN ORDER in your server.cfg.

Example:
```lua
ensure night_discordapi #optional
ensure night_subtitles #optional
ensure SmartFiresLite #required
ensure SmartHoseLite #required
ensure night_shifts #optional
ensure emsprops #required
ensure night_ers #required
```

## Configuring the night_ers config.lua file

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. We insist on you downloading Visual Studio Code (VS Code) to read (lua) files: [Download VS Code](https://code.visualstudio.com/download).

1. Open night_ers/config/config.lua in VS Code. 

1. Once you've downloaded Visual Studio Code, open the file (or folder) to read it's contents. Example: `config/config.lua`, `client/c_functions.lua`, `server/s_functions.lua`.

1. When configuring the resource you will see that each line has and explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

1. Keep eye out for notes! On some parts we provide warnings on what you should not edit, add or remove. Relax mode on and read it all to understand it.

1. It's smart to follow an order when setting up this resources' config file, we recommend going from top-to-bottom: 

*Hint: You will take some time to configure this the way you like, so plan that time and take your time to read! Frequently test your edits to see whether you're making mistakes and where to find them. Trying stuff early is good for confirming that your resource works. Use the F8 console and server console (txAdmin) to check for errors, these lead to solutions.*

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. A client side functions script `c_functions.lua` and a server side functions script `s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits.

Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

# Creating ERS callouts

## A guide for creating callouts for the Emergency Response Simulator

1. The ERS resource contains a folder called night_ers/callouts/*.lua. All scripts in this folder are open source, which means you can add, remove or edit callouts. 

1. ERS has multiple built-in functions, just like the FiveM native documentation, we've built our own set of functionalities. You will have to use these to properly create callout entities for example. These ERS_functions are listed on-top of every (client and serverside) script.

1. Providing free or paid ERS callout packs is allowed. Many of our community members are planning to sell or provide callout packs. We approve this, as long as you follow FiveM Policy. Basically provide via [Tebex](https://www.tebex.io/). We are to report any illegal trade or distribution to authorities.

## FORMATS for adding a callout (config -> server -> client)

**IT IS IMPORTANT TO REALIZE CALLOUT CREATION IS FOR DEVELOPERS**
Nights Software does not offer support for creating custom callouts, besides the documentation. Ask the community instead!

If you do not have an understanding of developing you'll need to learn this first. 
You will be told the same thing in a ticket. Even though we love our community and love to help, we don't have the capacity (yet) to provide support for callout creation. 
Read these documented instructions carefully.

Good luck!

## Task List for creating one callout
- [x] Task 1: Add the callout settings to callout_config.lua. (used to configure locations, required units and behaviour, optionally based off time to keep the callout random every time)
- [x] Task 2: Add the serverside code to callouts_server.lua and adjust it to your liking. (used to spawn entities)
- [x] Task 3: Add the clientside code to callouts_client.lua and adjust it to your liking. (used to apply behaviour to entities)

## START WITH THE CONFIG SETTINGS
<!-- This is a callouts_config.lua example, you can copy this to create a callout in callouts_config.lua. 
Make sure to change the index number [111] to the next CORRECT incremented ID for a callout. Example: after ID [110] comes ID [111].

Goal: Paste your newly configured callout settings underneath the previous ID in night_ers/callouts/callouts_config.lua -->

```lua
[111] = {   
    Enabled = true,             -- true = enabled | false = disabled
    CalloutName = "Format",     -- Give your callout a name, like: Fight in a bar
    CalloutDescriptions = {     -- Define multiple descriptions for your callout.
        "Description 1.",
        "Description 2.",
        "Description 3.",
        -- "Example of another description to add here",
    },               
    CalloutUnitsRequired = {    -- Service types set to true will be potentially offered this callout.
        description = "Police, Ambulance, Fire.",
        policeRequired = true,
        ambulanceRequired = true,
        fireRequired = true,
        towRequired = false,
    },
    CalloutLocations = {
        [1] = vector3(-1321.16, -585.79, 28.8),     -- Add GTA vector3(x,y,z) coordinates to this list. Mind the index numbers and their order! [1], [2], [3]
        -- [2] = vector3(-1321.16, -585.79, 28.8),
        -- [3] = vector3(-1321.16, -585.79, 28.8),

    },                                                             
    PedChanceToFleeFromPlayer = 0,      -- Value between 0 and 100 -> Lower is less chance.
    PedChanceToAttackPlayer = 0,        -- Value between 0 and 100 -> Lower is less chance.
    PedChanceToSurrender = 0,           -- Value between 0 and 100 -> Lower is less chance.
    PedChanceToObtainWeapons = 0,       -- Value between 0 and 100 -> Lower is less chance.
    PedActionMinimumTimeoutInMs = 1000, -- Milliseconds for the minimum timeout time to start the secondary action.
    PedActionMaximumTimeoutInMs = 5000, -- Milliseconds for the maximum timeout time to start the secondary action. Must be a higher number than the minimum!
    PedActionOnNoActionFound = "none",  -- When no action of the above options is found. It'll perform this action after the set timeout. Options: "none", "attack", "flee", "surrender"
    PedWeaponData = {                   -- The ped will be given one randomly selected weapon (in hand) from these weapons if PedChanceToObtainWeapons passed.
        "weapon_poolcue",
        "weapon_golfclub",
        "weapon_crowbar",
        "weapon_bat",
        "weapon_pistol",
        "weapon_combatpistol",
        "weapon_appistol",
        -- Add more...
    },
},
```

## CONTINUE SERVERSIDE (Entity creation)
<!-- This is a callouts_server.lua example, you can copy this to create entities (peds, vehicles, objects, fires, smoke) serverside.
Keep in mind to define the correct callout ID again in the script! 

Goal: Paste your newly created server entity creation for callout ID 111 (in this case) underneath ID 110. 

Hint: Config.randomWasteDumpObjects is an example of a list from night_ers/config/entity-config.lua. It is used for storing lists of models for peds, vehicles, particles, objects etc. -->

```lua
elseif calloutData.calloutId == 111 then -- Example callout serverside

    local diameter = 20 -- Radius of the coordinates in which the entities will randomly spawn if diameter is used for local coords = ...

    -- Build objects (Example of spawning multiple objects)
    local randomAmountOfObjects = math.random(3,10)
    for i = 1, randomAmountOfObjects do
        local coords = ERS_GetRandomCoordinateWithinRangeOfCoordinate(calloutData.Coordinates, diameter)
        local objModel = ERS_GetRandomModel(Config.randomWasteDumpObjects)
        local objCoords = vector3(coords.x, coords.y, coords.z+2.0)
        local objHeading = math.random(360)
        local objNetId = ERS_CreateObject(objModel, objCoords, objHeading)
        local obj = NetworkGetEntityFromNetworkId(objNetId)
        table.insert(objectList, objNetId)

        local fireToObjChance = math.random(100)
        if fireToObjChance > 75 then
            -- Build fire
            if UsingSmartFires then
                -- Full version
                local fireSize = Config.RandomSmallFireOrSmokeSize[math.random(#Config.RandomSmallFireOrSmokeSize)]
                local fireType = Config.NormalFireTypes[math.random(#Config.NormalFireTypes)]
                local fireId = exports['SmartFires']:CreateFire(vector3(coords.x, coords.y, coords.z-0.5), fireSize, fireType)
                DebugPrint("Created fire with ID: "..fireId)
                table.insert(fireList, fireId)
            else
                -- Light version
                local fireSize = Config.RandomSmallFireOrSmokeSize[math.random(#Config.RandomSmallFireOrSmokeSize)]
                local fireType = "normal"
                local fireId = exports['SmartFiresLight']:CreateFire(vector3(coords.x, coords.y, coords.z-0.5), fireSize, fireType)
                DebugPrint("Created fire with SmartFiresLight with ID: "..fireId)
                table.insert(fireList, fireId)
            end
        end
    end

    -- Build vehicle (Example of building one vehicle)
    local vehModel = ERS_GetRandomModel(Config.randomVans)
    local vehType = "automobile" -- Types: automobile bike boat heli plane submarine trailer train
    local vehCoords = vector3(calloutData.Coordinates.x, calloutData.Coordinates.y, calloutData.Coordinates.z)
    local vehHeading = math.random(360)
    local vehNetId = ERS_CreateVehicle(vehModel, vehType, vehCoords, vehHeading)
    local vehicle = NetworkGetEntityFromNetworkId(vehNetId)
    table.insert(vehicleList, vehNetId) -- These lists store network ID's and will be passed to the client.

    -- Build ped (Example of building multiple peds based on a seatIndex and setting them into the previously built vehicle serverside.)
    local seatIndex = -1
    for i = 1, 2 do
        local pedModel = ERS_GetRandomModel(Config.randomGangPeds)
        local pedCoords = vector3(calloutData.Coordinates.x, calloutData.Coordinates.y, calloutData.Coordinates.z+1.0)
        local pedHeading = math.random(360)
        local pedNetId = ERS_CreatePed(pedModel, pedCoords, pedHeading)
        local ped = NetworkGetEntityFromNetworkId(pedNetId)
        ERS_SetPedIntoVehicle(ped, vehicle, seatIndex)
        seatIndex = seatIndex + 1
        table.insert(pedList, pedNetId) -- These lists store network ID's and will be passed to the client.
    end

    calloutBuilt = true -- Always end with this, otherwise nothing will happen and your script will bug out!
```

## END WITH CLIENTSIDE (Entity behaviour)
<!-- This is a callouts_client.lua example, you can copy this to set entity (peds, vehicles, objects, fires, smoke) behaviour clientside. 

Goal: Paste this underneath the previous callout ID in callouts_client.lua

Hint: Looping through the lists that are provided (pedList, vehicleList, objectList) is required. The ID's inside these lists are Network ID's. The configured behaviour after the
timeout is handled by the function ERS_PerformTimedActionOnPed(calloutDataClient, pedList). If you create a new list to pass, make sure to insert PED Network ID's!

-->

```lua
elseif calloutDataClient.calloutId == 111 then -- Example callout clientside

    for index, objNetId in pairs(objectList) do
        local obj = NetToObj(objNetId)
        if DoesEntityExist(obj) then
            ERS_RequestNetControlForEntity(obj) 
            PlaceObjectOnGroundProperly(obj)
            -- Do something with the object entity ID.
        end
    end

    for index, vehNetId in pairs(vehicleList) do
        local veh = NetToVeh(vehNetId)
        if DoesEntityExist(veh) then
            ERS_RequestNetControlForEntity(veh) 
            -- Do something with the vehicle entity ID.
        end
    end

    for index, pedNetId in pairs(pedList) do
        local ped = NetToPed(pedNetId)
        if DoesEntityExist(ped) then
            ERS_RequestNetControlForEntity(ped)
            if index == 1 then
                ERS_SetPedToFleeFromPlayer(ped)
                -- Do something with the ped entity ID.
            end

        end
    end

    -- This function handles the configured behaviour in your callout from callouts_config.lua after the configured timeout.
    -- So basically: You configure and code the ped behaviour and after a timeout they will perform a second stage of behaviour.
    ERS_PerformTimedActionOnPed(calloutDataClient, pedList)
```

<!-- If you have any questions, ask the community! Nights Software does not provide support for custom callout creation, besides the documentation. 

Enjoy and good luck! Love from Nights Software!
-->






# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
