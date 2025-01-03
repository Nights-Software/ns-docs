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

In depth (ERS with MDT) [Installation tutorial by Skull](https://youtu.be/qPSKlMGHoX8){: .btn .btn-red}
In depth older video (MDT & ERS) [Installation tutorial by FLeeLive!](https://youtu.be/iDItAxtY08k){: .btn .btn-red}

## Purchasing the resource

Find this product at: [https://store.nights-software.com/category/ers](https://store.nights-software.com/category/ers)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
Set FTP Transfer Type to Binary -> Open Keymaster Download ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

# fxServer, framework and script compatibility

## fxServer
1. **ERS was tested for gamebuild 2944**
We recommend testing your setup on this gamebuild. If you desire to use a different gamebuild, try it out AFTER you confirmed it worked on 2944, 3095.
 - We do not recommend older gamebuilds than 2944.

## OneSync
1. **ERS requires OneSync Legacy/Infinity**
You must enable OneSync Legacy or Infinity.
 - It is likely that some hosting companies have a dashboard in which you also need to set `Enable Beyond` to 1, instead of 0.

## WARNING
1. **ERS is currently not compatible with**
We are in contact with the creators to find a resolution for both of the parties.
 - RemoveCops-AI (confirmed)

## Standalone

1. **With or without frameworks**
   - ERS is a standalone product. It works without any framework, but also alongside most known frameworks.

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

3. **Nearest Postal & map (Optional - Free open source)**
    - `nearest-postal` allows you to use default postals and adds a custom `map`.
      - Read the original post on the [CFX Forums](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458) or
      - Direct download the `nearest-postal` script [here](https://github.com/DevBlocky/nearest-postal/archive/refs/heads/master.zip).
      - Direct download the custom `map` [here](https://www.dropbox.com/s/lb22r7rb4gwh44o/Postal%20Code%20Map.zip?dl=0).
      - These resources are a drag-and-drop into your resources folder!
      - If you are using ModernHUD, comment out `provide "nearest-postal"` in the fxmanifest.lua of ModernHUD, refresh and restart.
      - If you do not want to use this postal resource, either edit the postal code handling in c_functions.lua or set usage to false in `night_ers/config/config.lua`.

4. **Night Shifts MDT (Optional - Included with ERS Plus and ERS Ultimate)**
   - `night_shifts` is a modern MDT allowing you to manage and control processes for all emergency services.
     - See all features [here](https://store.nights-software.com/package/5667103).
     - Find an installation tutorial [here](https://docs.nights-software.com/resources/nightShifts/).

5. **SmartFiresLite (Required - Got the [full version](https://store.londonstudios.net/category/fire-resources)? Then do not install SmartFiresLite)**
   - Provided by [London Studios](https://londonstudios.net). This resource allows the ERS to spawn fires and is included for free. Consider getting the full version for more advanced gameplay.
     - This resource is a drag-and-drop into your resources folder!
     - IMPORTANT: If you have the full version, please re-name it to: `SmartFires` (case sensitive).

6. **SmartHoseLite (Required - Got the [full version](https://store.londonstudios.net/category/fire-resources)? Then do not install SmartHoseLite)**
   - Provided by [London Studios](https://londonstudios.net). This resource allows the player to use a water hose to extinguish fires and is included for free. Consider getting the full version for more advanced gameplay.
     - This resource is a drag-and-drop into your resources folder!

7. **EMS Props (Required - Free open source)**
   - ERS uses stretchers from the open-source resource called EMS Props made by Tiddy.
     - Download it via their [CFX Forum post](https://forum.cfx.re/t/add-on-props-medical-prop-pack/5037054).
     - This resource is a drag-and-drop into your resources folder!

8. **Emergency Response Simulator (Required)**
   - The ERS system is the main gamemode allowing you to simulate emergency response calls. You can play as Police, Fire, Medic, and tow service operator. This system includes 100+ callouts by default, crafted for all service types. This system allows you to create emergency calls yourself (via coding). Read more about this below...

9. **Theebu Flatbeds Lite (Optional - Included with ERS Essential, Plus and Ultimate)**
   - This script is included for free and provided by [Theebu](https://store.theebu.net).
   - If you have the [full version](https://store.theebu.net/package/5033826) then skip installing this lite version.
   - Theebu's flatbeds allow you to transport vehicles on the back of different types of vehicles. Here are your options:
     - Config.flatbed = "flatbed"              -- Base game flatbed
     - Config.flatbedm2 = "flatbedm2"          -- [https://www.gta5-mods.com/vehicles/freightliner-m2-crew-cab-flatbed-add-on-script-beta](https://www.gta5-mods.com/vehicles/freightliner-m2-crew-cab-flatbed-add-on-script-beta)
     - Config.lgc19flatbed = "lgc19flatbed"    -- [https://forum.cfx.re/t/2019-peterbilt-flatbed/4783413](https://forum.cfx.re/t/2019-peterbilt-flatbed/4783413)
     - Config.biftowmfd2 = "biftowmfd2"        -- [https://mfd.tebex.io/package/6281210](https://mfd.tebex.io/package/6281210)
     - Config.Gtow = "Gtow"                    -- [https://www.gta5-mods.com/vehicles/peterbilt-337-tuning-by-mfd-fivem](https://www.gta5-mods.com/vehicles/peterbilt-337-tuning-by-mfd-fivem)

10. **World Events Add-on 1 (Optional)**
    - `night_ers_worldevents` allows you to spawn world events in your area of interest.
      - See all features [here](https://store.nights-software.com/package/6437544).

11. **Dynamic Weighing Stations Add-on 2 (Optional)**
    - `night_ers_weighstation` allows you to weigh vehicles at dynamically set up weighing stations.
      - See all features [here](https://store.nights-software.com/package/6605986).

12. **Place the resources listed above into your resources folder and DO NOT RENAME them.**
   - We repeat, do not rename scripts to other than what they are called in this documentation.

13. **Ensure / start the resources listed above IN THE GIVEN ORDER in your server.cfg.**
    - List the ensured resources in the order from the example below on ensuring/starting resources! This is required!
    - Example:
```conf
ensure night_discordapi #optional
ensure night_subtitles #optional
ensure nearest-postal #optional
ensure map #optional
ensure SmartFiresLite #or SmartFires if you have the full version (Required)
ensure SmartHoseLite #or SmartHose if you have the full version (Required)
ensure night_shifts #optional
ensure emsprops #required
ensure night_ers #required
ensure ebu_flatbeds_ers #optional
ensure night_ers_worldevents #optional DLC
ensure night_ers_weighstation #optional DLC
```

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

6. **Cofigure in order**  
   - It's required to configure in order when setting up this resource's config file, we recommend going from top to bottom. 

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
   - ERS has multiple built-in functions, just like the FiveM native documentation, we've built our own set of functionalities. You will have to use these to properly create and handle callout entities. These ERS functions are listed below.

3. **Providing callout packs**  
   - Providing free or paid ERS callout packs is allowed. Many of our community members are planning to sell or provide callout packs. We approve this, as long as you follow [FiveM](https://forum.cfx.re/) (CFX) and [Tebex](https://www.tebex.io/) policy (terms of service). Basically, provide paid scripts via [Tebex](https://www.tebex.io/). We are to report any illegal trade or distribution to authorities.

## The format for adding a callout (config, server & client)
*IT IS IMPORTANT TO REALIZE CALLOUT CREATION IS FOR DEVELOPERS*

**Support notice**
- Nights Software does not offer support for creating custom callouts, besides the documentation. Ask the community instead!
    - If you do not have an understanding of developing you'll need to learn this first. You will be told the same thing in a ticket. Even though we love our community and love to help, we don't have the capacity (yet) to provide support for callout creation. Read these documented instructions carefully and ask our community to share knowledge!

## Callout Creator Pack

1. **Nights Software has created a Callout Creator Pack to help you create your own callouts. This pack includes an example callout and a documentation on how to create your own callouts.**  
  - [Download the free Callout Creator Pack here](https://store.nights-software.com/package/6374594).

## Task List for creating one callout
- [x] **Task 1** 
- Enter the `night_ers/callouts/plugins/` folder and copy an existing `.lua` callout file or paste in a newly created callout file.
- [x] **Task 2** 
- Rename the file to your desired callout name.
- [x] **Task 3**  
- Adjust the config, client and server code (all of them) within your new file to your liking.
- [x] **Task 4**  
- Test the callout and make sure it works as intended by restarting the script and spawning the callout afterwards. (/requestcallout)

## Important notes
- Find all ERS functions below.
- Make sure to use the correct syntax and formatting.
- Test your callout thoroughly to ensure it works as intended.
- Consider adding comments to your code to explain your logic and reasoning for certain actions.

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
*Most ERS functions are encrypted. Those which are open source are at the bottom of the following files: `night_ers/callouts/callouts_client.lua` & `night_ers/callouts/callouts_server.lua`*

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

Usage example
```
local found, coords, vehicleHeading = ERS_GetSafeSpawnPointForNPCVehicle()

if not found then
    print(Config.Messages[Config.Language].NoSpawnPointAvailableForNPC)
    return
end
```

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

# Exports

ERS provides both client and server exports. Find the details and how to use them in the files below.

## Client exports

`night_ers/client/exports_client.lua`

## Server exports

`night_ers/server/exports_server.lua`

---

# Installing ERS Add-ons

## World Events Add-on

1. **Drag & Drop**
   - Drag & drop the `night_ers_worldevents` folder into your resources folder.
   - Ensure the resource is added to your `server.cfg` file: `ensure night_ers_worldevents` below the `ensure night_ers` line.

---

# Props by NovelaxNeko

## 10 Free (included) props

**Free prop model names:**

- **ERS Props**
  - { Name = "Cone", Prop = "neko_night_cone_00" }
  - { Name = "Barrier", Prop = "neko_night_water_barrier_00" }
  - { Name = "Warning triangle", Prop = "neko_night_warning_tri_00" }
  - { Name = "Rubber barrier", Prop = "neko_night_rubber_barrier_00" }
  - { Name = "Barrier", Prop = "neko_night_barrier_00" }
  - { Name = "Barrier 1", Prop = "neko_night_barrier_01" }
  - { Name = "Barrier 2", Prop = "neko_night_barrier_02" }
  - { Name = "Arrow board cross", Prop = "neko_night_arrow_board_00" }
  - { Name = "Arrow board left", Prop = "neko_night_arrow_board_00_l" }
  - { Name = "Arrow board right", Prop = "neko_night_arrow_board_00_r" }

- **Check out this artist!**
[https://novelaxneko.com/](https://novelaxneko.com/)

---

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Troubleshoot

- **FAQ Answers**
  - SmartFires and SmartHose resource actually need to be named to `SmartFires` and `SmartHose`, otherwise fire & smoke callouts will bug out your callout system.
  - MDT integration? Make sure to enable ERS in `night_shifts` and enable Night Shifts in `night_ers`. Duty toggled through the MDT.
  - Read the compatibility knowledge below for more wisdom.

- **Compatibility knowledge**
  - Iceline Hosting: Enable Beyond by setting it to 1 in your server dashboard, otherwise entities will not spawn.
  - RemoveCopsAI: Remove this resource, it does not work with ERS, because it removes spawned entities by ERS.
  - Clear world commands / Anti cheat » Usually causes issues when deleting ERS entities, which should not be deleted by other scripts. ERS entities spawn server side so are usually not affected by Anti Cheat.

## Feedback
Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support
Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support ticket system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
