---
layout: default
title: "Emergency Response Simulator for FiveM"
nav_order: 2
has_children: false
has_toc: true
last_modified_date: "2024-07-13 15:00:00"
---

<img class="cover-img" src="/assets/img/ers.png" alt="Emergency Response Simulator for FiveM" draggable="false">

# Emergency Response Simulator for FiveM
{: .no_toc}

A guide to install Emergency Response Simulator for FiveM
- *Crafted by [Nights Software](https://store.nights-software.com/) in collaboration with [London Studios](https://londonstudios.net)*

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

# Framework compatibility

## ESX
1. **Permissions to go on shift**  
   - The ERS resource has 4 service types. ESX permissions can be used to allow players access by their job name and can be setup in `night_ers/config/config.lua`.

2. **Weapons**  
   - Weapons can be configured in `night_ers/config/gear-config.lua` and the code handling item distribution can be adjusted to ESX in `night_ers/client/c_functions.lua`.

## QBcore
1. **Permissions to go on shift**  
   - The ERS resource has 4 service types. QBCore permissions can be used to allow players access by their job name or their QB permissions and can be setup in `night_ers/config/config.lua`.

2. **Weapons**  
   - Weapons can be configured in `night_ers/config/gear-config.lua` and the code handling item distribution can be adjusted to QBCore in `night_ers/client/c_functions.lua`.

---

# Installing Emergency Response Simulator for FiveM

We are going to install multiple resources to make the ERS function as intended.

1. Download the packages which we are going to install from [keymaster](https://keymaster.fivem.net/asset-grants). Make sure to install them in the order as they are listed.

## Resources to install

1. **Night Discord API (Optional - Included with ERS Essential, Plus and Ultimate)**
   - `night_discordapi` allows you to utilize Discord roles for permissions. You can also choose for ESX, QBcore, Ace permissions, or no permissions as an alternative.
     - See all features [here](https://store.nights-software.com/package/5035729).
     - Find installation support [here](https://docs.nights-software.com/resources/discordAPI/).

2. **Night Subtitles (Optional - Included with ERS Essential, Plus and Ultimate)**
   - `night_subtitles` displays subtitles as if you're watching a movie.
     - See all features [here](https://store.nights-software.com/package/6043540).
     - This resource is a drag-and-drop into your resources folder!

3. **Night Shifts MDT (Optional - Included with ERS Plus and ERS Ultimate)**
   - `night_shifts` is a modern MDT allowing you to manage and control processes for all emergency services.
     - See all features [here](https://store.nights-software.com/package/5667103).
     - Find an installation tutorial [here](https://docs.nights-software.com/resources/nightShifts/).

4. **SmartFiresLite (Got the [full version](https://store.londonstudios.net/category/fire-resources)? Then do not install SmartFiresLite)**
   - Provided by [London Studios](https://londonstudios.net). This resource allows the ERS to spawn fires and is included for free. Consider getting the full version for more advanced gameplay.
     - This resource is a drag-and-drop into your resources folder!

5. **SmartHoseLite (Got the [full version](https://store.londonstudios.net/category/fire-resources)? Then do not install SmartHoseLite)**
   - Provided by [London Studios](https://londonstudios.net). This resource allows the player to use a water hose to extinguish fires and is included for free. Consider getting the full version for more advanced gameplay.
     - This resource is a drag-and-drop into your resources folder!

6. **EMS Props**
   - ERS uses stretchers from the open-source resource called EMS Props made by Tiddy.
     - Download it via their [CFX Forum post](https://forum.cfx.re/t/add-on-props-medical-prop-pack/5037054).
     - This resource is a drag-and-drop into your resources folder!

7. **Emergency Response Simulator**
   - The ERS system is the main gamemode allowing you to simulate emergency response calls. You can play as Police, Fire, Medic, and tow service operator. This system includes 100+ callouts by default, crafted for all service types. This system allows you to create emergency calls yourself (via coding). Read more about this below...


8. **Place the resources listed above into your resources folder and DO NOT RENAME them.**

9. **Ensure / start the resources listed above IN THE GIVEN ORDER in your server.cfg.**
    - Example:
```lua
ensure night_discordapi #optional
ensure night_subtitles #optional
ensure SmartFiresLite #required
ensure SmartHoseLite #required
ensure night_shifts #optional
ensure emsprops #required
ensure night_ers #required
```

*Any other resources included with ERS Plus and ERS Ultimate can be started before ERS*

## Configuring the night_ers config.lua file

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. **Download VS Code**  
   - We insist on you downloading Visual Studio Code (VS Code) to read (lua) files: [Download VS Code](https://code.visualstudio.com/download).

2. **Open the config file**  
   - Open `night_ers/config/config.lua` in VS Code. 

3. **Read file contents**  
   - Once you've downloaded Visual Studio Code, open the file (or folder) to read its contents. Example: `night_ers/config/config.lua`, `night_ers/client/c_functions.lua`, `night_ers/server/s_functions.lua`.

4. **Understand configuration**  
   - When configuring the resource you will see that each line has an explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

5. **Watch for notes**  
   - Keep an eye out for notes! On some parts, we provide warnings on what you should not edit, add, or remove. Relax mode on and read it all to understand it.

6. **Follow an order**  
   - It's smart to follow an order when setting up this resource's config file, we recommend going from top to bottom. 

7. **Language, entity, fictive names and gear configs**
   - `night_ers/config/*.lua` contains more config files for you to edit and adjust to your liking. All these files require some understanding of the resource to be able to properly edit them. Feel free to ask the [Discord community](https://discord.nights-software.com) for help if you need it.
    - Weapon and clothing settings can be found in `night_ers/config/gear-config.lua`

*Hint: You will take some time to configure this the way you like, so plan that time and take your time to read! Frequently test your edits to see whether you're making mistakes and where to find them. Trying stuff early is good for confirming that your resource works. Use the F8 console and server console (txAdmin) to check for errors, these lead to solutions.*

---

# Creating ERS callouts

## A guide for creating callouts for the Emergency Response Simulator

1. **Accessing callout scripts**  
   - The ERS resource contains a folder called `night_ers/callouts/*.lua`. All scripts in this folder are open source, which means you can add, remove, or edit callouts.

2. **Using ERS functions**  
   - ERS has multiple built-in functions, just like the FiveM native documentation, we've built our own set of functionalities. You will have to use these to properly create callout entities. These ERS functions are listed on top of every (client and server-side) script.

3. **Providing callout packs**  
   - Providing free or paid ERS callout packs is allowed. Many of our community members are planning to sell or provide callout packs. We approve this, as long as you follow [FiveM](https://forum.cfx.re/) (CFX) and [Tebex](https://www.tebex.io/) policy (terms of service). Basically, provide via [Tebex](https://www.tebex.io/). We are to report any illegal trade or distribution to authorities.

## FORMATS for adding a callout (config -> server -> client)
*IT IS IMPORTANT TO REALIZE CALLOUT CREATION IS FOR DEVELOPERS*

**Support notice**
- Nights Software does not offer support for creating custom callouts, besides the documentation. Ask the community instead!
    - If you do not have an understanding of developing you'll need to learn this first. You will be told the same thing in a ticket. Even though we love our community and love to help, we don't have the capacity (yet) to provide support for callout creation. Read these documented instructions carefully.


## Task List for creating one callout
- [x] **Task 1** 
- Add the callout settings to callout_config.lua. (used to configure locations, required units and behaviour, optionally based off time to keep the callout random every time)
- [x] **Task 2** 
- Add the serverside code to callouts_server.lua and adjust it to your liking. (used to spawn entities)
- [x] **Task 3**  
- Add the clientside code to callouts_client.lua and adjust it to your liking. (used to apply behaviour to entities)
- [x] **Task 4**  
- Implement the snippets you made for the scripts listed above into these scripts with the correct index number ([110], [111]). Look at how we've done it to understand what you need to do in the `night_ers/callouts_config/callouts_config.lua`, `night_ers/callouts/callouts_server.lua` and `night_ers/callouts/callouts_client.lua` files.

**Here is an example**

## Config `night_ers/callouts/callouts_config.lua`
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

## Server `night_ers/callouts/callouts_server.lua` (Entity creation)
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

        local fireToObjChance = math.random(100) -- Add a fire at object location by chance of 75%
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
                -- Lite version
                local fireSize = Config.RandomSmallFireOrSmokeSize[math.random(#Config.RandomSmallFireOrSmokeSize)]
                local fireType = "normal"
                local fireId = exports['SmartFiresLite']:CreateFire(vector3(coords.x, coords.y, coords.z-0.5), fireSize, fireType)
                DebugPrint("Created fire with SmartFiresLite with ID: "..fireId)
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
-- elseif calloutData.calloutId == 112 then
    -- Space for the next callout.
```

## Client `night_ers/callouts/callouts_client.lua` (Entity behaviour)
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
-- elseif calloutData.calloutId == 112 then
    -- Space for the next callout.
```

<!-- If you have any questions, ask the community! Nights Software does not provide support for custom callout creation, besides the documentation. 

Enjoy and good luck! Love from Nights Software!
-->

---

# Editing open source functions
*Are you not familiar with code? Then skip this section or take on the challenge!*

1. **Open source script files**  
   - Besides `night_ers/callouts/*.lua`, we have provided 2 open script files containing functions you can edit to your desire. A client side functions script `night_ers/client/c_functions.lua` and a server side functions script `night_ers/server/s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits. 

2. **Explore the functions**  
   - Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can of course ask us any question and we will try to see if our knowledge can help you.

## Client `night_ers/client/c_functions.lua`

1. **Event triggers**  
   - The ERS resource has multiple event triggers like the following example functions. There are more in this file, discover them all!

```lua
function OnIsOfferedCallout(calloutdata)
    -- Add your code here. Keep in mind they are offered a callout. It is possible they will not accept the callout.

    -- if Config.Debug then
    --     for k, v in pairs(calloutdata) do
    --         print("key: "..k)
    --         if type(v) == "table" then
    --             print(json.encode(v))
    --         else
    --             if type(v) == "boolean" then
    --                 print(v)
    --             else
    --                 print("value: "..v)
    --             end
    --         end
    --     end
    -- end
end

function OnAcceptedCalloutOffer(calloutdata)
    -- Add your code here. Keep in mind they have accepted a callout. It is possible they will cancel before arrival (and spawn of entities).
end

function OnArrivedAtCallout(calloutdata)
    -- Add your code here. This is triggered right before the entities are built for a callout. This code will execute first.

end

function OnEndedACallout() -- Contains no callout data.
    -- Add your code here. This is triggered right before the entities are deleted or callout is cancelled serverside. This code will execute first.
    
end
```

## Server `night_ers/server/s_functions.lua`

1. **Event triggers**  
   - The ERS resource has multiple event triggers, also serverside. Discover them all!

---

# ERS Functions
Most ERS functions are encrypted. Those which are open source are in the following files: `night_ers/callouts/callouts_client.lua` & `night_ers/callouts/callouts_server.lua`

## Client

- **`ERS_SetMovementAnimClipSetToPed(ped, clipset)`**  
  Applies a movement style. [Movement Clipsets](https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsWalkingCompact.json)

- **`ERS_SpawnConfiguredWeaponForPed(ped, calloutDataClient)`**  
  Spawns a weapon from the callouts-config by chance in percentage.

- **`ERS_RequestNetControlForEntity(entityId)`**  
  Required control request before performing actions (functions) on an entity to ensure synchronization.

- **`ERS_PerformTimedActionOnPed(calloutDataClient, pedList)`**  
  Performs the probabilities configured in callouts-config. Basically performs ped behaviour after the configured timeout to ensure callouts remain unpredictable and dynamic. Each callout has config options for these secondary actions.  
  **IMPORTANT**: The `pedList` argument requires a list of entity NETWORK ID's. Example: `pedList = {8157, 8158, 8159}`

- **`ERS_CreateTemporaryBlipForEntities(entityList, timeoutInMs)`**  
  Adds a blip for nearby entities and removes it after the given timeout in milliseconds. (1s = 1000ms). `entityList` should contain network ID's of entities.

- **`ERS_SpawnParticlesWithinRange(coords, diameter, particleDict, particleName, particleSize, particleAmount, timeout, chanceToExplode)`**  
  Creates looped particles with the chance of an explosion after the timeout based on percentage: 0-100.

- **`ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)`**  
  Returns a `vector3(x,y,z)` value containing random coordinates within a radius of the given coordinate. (Circle)

- **`ERS_SetPedToFleeFromPlayer(ped)`**  
  Makes a ped flee the player.

- **`ERS_SetPedToAttackPlayer(ped)`**  
  Makes a ped attack the player.

- **`ERS_SetPedToSurrender(ped)`**  
  Makes a ped surrender to player.

- **`ERS_ApplyBloodToPed(ped)`**  
  Applies blood randomly onto the ped.

- **`ERS_CreateBloodPuddleAtPed(ped)`**  
  Applies a blood puddle at ped position.

- **`ERS_SetPedToPassout(ped)`**  
  Makes a ped pass out.

- **`ERS_ClearPedTasksAndBlockEvents(ped)`**  
  Makes a ped ignore any event, used before performing actions on peds to ensure they're clear of any behaviour beforehand.

- **`ERS_SetPedAsDrunkPed(ped)`**  
  Applies drunk movement style to ped.

- **`ERS_GetIsPedADrunkPed(ped)`**  
  Returns a boolean, `true` if drunk, `false` if not drunk.

- **`ERS_CheckIfPedIsAlive(ped)`**  
  Returns a boolean, `true` if alive, `false` if dead.

- **`ERS_IsPedAnAnimalPed(ped)`**  
  Returns a boolean, `true` if ped is an animal ped, `false` if ped is not an animal ped.

- **`ERS_SetRandomDamageToVehicle(veh)`**  
  Applies damage to a vehicle.

- **`ERS_CreateFlareAtCoordinate(coords)`**  
  Creates an active red flare at given vector3 coordinates lasting a while.

- **`ERS_GetSafeSpawnPointForNPCVehicle()`**  
  Finds a coordinate where an NPC vehicle can spawn, or used for 'safe' destinations.

- **`ERS_SelectRandomMovementClipSet()`**  
  Returns a random movement clipset.

- **`ERS_SelectMentalHealthPersonScenario()`**  
  Returns a random scenario.

- **`ERS_SelectRandomBystanderScenario()`**  
  Returns a random scenario.

- **`ERS_SelectRandomProtesterScenario()`**  
  Returns a random scenario.

- **`ERS_SelectRandomWoundedPersonScenario()`**  
  Returns a random scenario.

- **`ERS_SelectStandingByFireScenario()`**  
  Returns a random scenario.

- **`ERS_PedEquipWeapon(ped, weaponModel)`**  
  Sets a weapon in the hands of a ped. Provide ped entity ID, `"weapon_pistol"` (weapon model names)

- **`ERS_DeleteEntityFromCallout(entityId)`**  
  Deletes an entity from the callout system and/or world. Provide entity ID's.

## Server

- **`ERS_CreatePed(model, coords, heading)`**  
  Creates a ped which is synchronized by the ERS system and returns their Network ID.

- **`ERS_CreateObject(model, coords, heading)`**  
  Creates an object which is synchronized by the ERS system and can be cleaned up by Road Service and returns their Network ID.

- **`ERS_CreateVehicle(model, vehType, coords, vehHeading)`**  
  Creates a vehicle which is synchronized by the ERS system and returns their Network ID.

- **`ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)`**  
  Gets a random vector3 coordinate within range of the given vector3 coordinate. Spreads entities randomly on callout spawn.

- **`ERS_GetRandomModel(modelList)`**  
  Selects a random model from a given library/table (`config/entity-config.lua`).

---

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback
Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support
Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support ticket system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
