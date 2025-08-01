---
layout: default
title: "Emergency Response Simulator"
nav_order: 4
has_children: false
has_toc: true
last_modified_date: "2025-07-22 16:00:00"
---

<img class="cover-img" src="/assets/img/ers.png" alt="Emergency Response Simulator for FiveM" draggable="false">

# Emergency Response Simulator for FiveM
{: .no_toc}

A guide to install Emergency Response Simulator for FiveM
- *Crafted by [Nights Software](https://store.nights-software.com/) in collaboration with [London Studios](https://londonstudios.net)*

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎥 Installation Tutorial

**Watch our comprehensive installation guide:**

[Installation Tutorial by Skull](https://youtu.be/qPSKlMGHoX8){: .btn .btn-red}

---

## 🛒 Purchase Information

**Get Emergency Response Simulator:**

[Purchase on Nights Software Store](https://store.nights-software.com/category/ers){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Set FTP Transfer Type to **Binary**
> 2. Download ZIP Package from CFX Portal
> 3. Unpack in a local folder
> 4. Set File Transfer Protocol (FTP) to **binary**
> 5. Drag files from local machine to server resources folder
> 6. Add to server.cfg (ensure script)
> 7. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

---

## 🔧 System Requirements & Compatibility

### **fxServer (Artifacts) & Gamebuild version**
{: .no_toc }

- **✅ Recommended Gamebuild:** 3323
- **✅ Recommended Artifacts:** 17000(+)
- **❌ Considered Not Compatible:** Other Gamebuilds below 2944 and above 3323 and Artifacts versions below 14230.

{: .note }
> **Important:** If you are using different Gamebuilds or Artifacts, trial and error this. Please inform us of (in)compatibility.

### **OneSync Requirements**
{: .no_toc }

- **✅ Required:** OneSync Legacy or Infinity
- **⚠️ Note:** Some hosting companies require setting `Enable Beyond` to 1 in dashboard

### **Framework Compatibility**
{: .no_toc }

#### **Standalone Mode**
- ✅ Works without any framework
- ✅ Compatible with most known frameworks

#### **ESX Integration**
- **Permissions:** Configure job-based access in `night_ers/config/config.lua`
- **Weapons:** Configure in `night_ers/config/gear-config.lua`
- **Code:** Adjust item distribution in `night_ers/client/c_functions.lua`

#### **QBCore Integration**
- **Permissions:** Configure job-based or QB permissions in `night_ers/config/config.lua`
- **Weapons:** Configure in `night_ers/config/gear-config.lua`
- **Code:** Adjust item distribution in `night_ers/client/c_functions.lua`

### **Known Incompatibilities**
{: .no_toc }

{: .warning }
> **Incompatible Resources:**
> - RemoveCops-AI
> - Andrew's Advanced AI
> - Realistic Euphoria Physics
> - RedSaints Stretcher/Ambulance
> - Improved-Seat-Shuffle-FiveM by Dalrae1
> - Clear world commands / Anti-cheat (resolve with your provider)

---

## 📦 Installation Process

### **Step 1: Download Required Resources**

Download these packages from the [CFX Portal](https://portal.cfx.re/assets/granted-assets) in the exact order listed:

#### **Core Resources (Required)**
{: .no_toc }

1. **SmartFiresLite** (Required)
   - Provided by [London Studios](https://londonstudios.net)
   - Enables fire spawning functionality
   - **Note:** If you have the full version, rename it to `SmartFires` (case sensitive)

2. **SmartHoseLite** (Required)
   - Provided by [London Studios](https://londonstudios.net)
   - Enables water hose functionality for fire extinguishing

3. **Emergency Response Simulator** (Required)
   - Main gamemode with 100+ callouts
   - Supports Police, Fire, Medic, and Tow services

#### **Optional Resources**
{: .no_toc }

4. **Night Discord API** (Optional - Included with ERS Essential, Plus and Ultimate)
   - Enables Discord role-based permissions
   - [View Features](https://store.nights-software.com/package/5035729)
   - [Installation Guide](/resources/discordAPI)

5. **Night Subtitles** (Optional - Included with ERS Essential, Plus and Ultimate)
   - Movie-style subtitle display
   - [View Features](https://store.nights-software.com/package/6043540)
   - Drag-and-drop installation

6. **Nearest Postal & Map** (Optional - Free)
   - Default postal codes with custom map
   - [CFX Forum Post](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458)
   - [Direct Download](https://github.com/DevBlocky/nearest-postal/archive/refs/heads/master.zip)
   - [Map Download](https://www.dropbox.com/s/lb22r7rb4gwh44o/Postal%20Code%20Map.zip?dl=0)

7. **Night Shifts MDT** (Optional - Included with ERS Plus and Ultimate)
   - Modern MDT for emergency services management
   - [View Features](https://store.nights-software.com/package/5667103)
   - [Installation Guide](/resources/nightShifts)

8. **Theebu Flatbeds Lite** (Optional - Included with ERS Essential, Plus and Ultimate)
   - Vehicle transport functionality
   - [Full Version](https://store.theebu.net/package/5033826) available

#### **Add-on DLCs**
{: .no_toc }

9. **World Events Add-on** (Optional)
   - [View Features](https://store.nights-software.com/package/6437544)

10. **Dynamic Weighing Stations** (Optional)
    - [View Features](https://store.nights-software.com/package/6605986)

11. **K9 Dog Handler** (Optional)
    - [View Features](https://store.nights-software.com/package/6813075)

### **Step 2: File Placement**

{: .important }
> **Critical:** Place all resources in your resources folder and **DO NOT RENAME** them. Use exact names as specified in this documentation.

### **Step 3: Server Configuration**

Add to your `server.cfg` in **exact order**:

```conf
# Optional Resources
ensure night_discordapi
ensure night_subtitles
ensure nearest-postal
ensure map

# Required Resources
ensure SmartFiresLite  # or SmartFires if you have full version
ensure SmartHoseLite   # or SmartHose if you have full version

# Core ERS
ensure night_shifts
ensure night_ers

# Optional Add-ons
ensure ebu_flatbeds_ers
ensure night_ers_worldevents
ensure night_ers_weighstation
ensure night_ers_k9
```

---

## ⚙️ Configuration Setup

### **Required Tools**
{: .no_toc }

{: .tip }
> **Visual Studio Code:** We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `night_ers/config/config.lua` | Main configuration |
| `night_ers/config/gear-config.lua` | Weapons and clothing |
| `night_ers/config/impound-config.lua` | Impound settings |
| `night_ers/config/leaderboard-config.lua` | Leaderboard settings |
| `night_ers/config/npcbackup-config.lua` | NPC Backup settings |
| `night_ers/config/persistententity-config.lua` | NPC personal data settings |
| `night_ers/config/pullover-config.lua` | Traffic stop settings |
| `night_ers/config/pursuit-config.lua` | Pursuit settings |
| `night_ers/config/questioning-config.lua` | NPC questioning settings |
| `night_ers/config/sound-config.lua` | Sound & Voice over settings |
| `night_ers/config/spikestrip-config.lua` | Spikestrip settings |
| `night_ers/config/stretcher-config.lua` | Stretcher settings |
| `night_ers/config/vehinteractions-config.lua` | Vehicle search settings |
| `night_ers/client/c_functions.lua` | Client-side functions / events |
| `night_ers/server/s_functions.lua` | Server-side functions / events |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files [Download Visual Studio Code]()
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

{: .tip }
> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

---

## 🎯 Creating Custom Callouts

### **Overview**
{: .no_toc }

ERS includes open-source callout scripts in `night_ers/callouts/plugins/*.lua`. You can add, remove, or edit callouts using built-in ERS functions.

### **Callout Creator Pack**
{: .no_toc }

{: .tip }
> **Free Resource:** Download our [Callout Creator Pack](https://store.nights-software.com/package/6374594) for examples and documentation.

### **Development Process**
{: .no_toc }

1. **Copy Template:** Use existing callout file from `night_ers/callouts/plugins/`
2. **Rename File:** Use your desired callout name
3. **Modify Code:** Adjust config, client, and server sections
4. **Test Thoroughly:** Restart script and test with `/requestcallout`

{: .warning }
> **Support Notice:** Nights Software does not provide custom callout creation support beyond this documentation. Ask the community for help!

---

## 🔧 Open Source Functions / Events

### **Client Functions / Events** (`night_ers/client/c_functions.lua`)
{: .no_toc }

#### **Event Triggers**
{: .no_toc }

```lua
--- Handles when a callout is offered to the player.
-- @param calloutData table The data of the callout.
function OnIsOfferedCallout(calloutData)
    -- Add your code here. Keep in mind they are offered a callout. It is possible they will not accept the callout.
    -- local jsonReady = CloneWithoutFunctions(calloutData)
    TriggerServerEvent('ErsIntegration::OnIsOfferedCallout', calloutData)
end

--- Handles when a callout is accepted by the player.
-- @param calloutData table The data of the callout.
function OnAcceptedCalloutOffer(calloutData)
    -- Add your code here. Keep in mind they have accepted a callout. It is possible they will cancel before arrival (and spawn of entities).
    TriggerServerEvent('ErsIntegration::OnAcceptedCalloutOffer', calloutData)
end

--- Handles when the player arrives at a callout.
-- @param calloutData table The data of the callout.
function OnArrivedAtCallout(calloutData)
    -- Add your code here. This is triggered right before the entities are built for a callout. This code will execute first.
    TriggerServerEvent('ErsIntegration::OnArrivedAtCallout', calloutData)
end

--- Handles when a callout is ended (as the host). This does not mean the callout is completed.
-- @param calloutData table The data of the callout.
function OnEndedACallout(calloutData)
    -- Add your code here. This is triggered right before the entities are deleted or callout is cancelled serverside. This code will execute first.
    TriggerServerEvent('ErsIntegration::OnEndedACallout', calloutData)
end

--- Handles when a callout is completed successfully.
-- @param calloutData table The data of the callout.
function OnCalloutCompletedSuccesfully(calloutData)
    -- Add your code here. This is triggered right after the entire callout task list is completed.
    TriggerServerEvent('ErsIntegration::OnCalloutCompletedSuccesfully', calloutData)
end

--- Handles when a pullover is initiated.
-- @param pedData table The data of the ped.
-- @param vehicleData table The data of the vehicle.
function OnPullover(pedData, vehicleData)
    -- Add your custom pullover logic here or trigger (and build) a server event to handle it.
    TriggerServerEvent('ErsIntegration::OnPullover', pedData, vehicleData)
end

--- Handles when a pullover is ended.
-- @param pedData table The data of the ped.
-- @param vehicleData table The data of the vehicle.
function OnPulloverEnded(pedData, vehicleData)
    -- Add your custom pullover ended logic here or trigger (and build) a server event to handle it.
    TriggerServerEvent('ErsIntegration::OnPulloverEnded', pedData, vehicleData)
end

--- Handles when a pursuit is started.
-- @param pedData table The data of the ped.
function OnPursuitStarted(pedData)
    -- Add your custom pursuit started logic here or trigger (and build) a server event to handle it.
    TriggerServerEvent('ErsIntegration::OnPursuitStarted', pedData)
end

--- Handles when a pursuit is ended.
-- @param pedData table The data of the ped.
function OnPursuitEnded(pedData)
    -- Add your custom pursuit ended logic here or trigger (and build) a server event to handle it.
    TriggerServerEvent('ErsIntegration::OnPursuitEnded', pedData)
end
```

- Explore the file for more...

### **Server Functions / Events** (`night_ers/server/s_functions.lua`)
{: .no_toc }

```lua
--- Handles user shift toggle events.
-- @param src number The source ID of the user who toggled shift.
-- @param isOnShift boolean Whether the user is now on shift or off shift.
-- @param serviceType string The service type of the shift (police, fire, ambulance, tow).
RegisterServerEvent("ErsIntegration::OnToggleShift")
AddEventHandler("ErsIntegration::OnToggleShift", function(source, isOnShift, serviceType)
    -- Add your custom shift toggle logic here
    -- print(source, isOnShift, serviceType)
end)

--- Handles first-time NPC interaction events.
-- @param src number The source ID of the user who interacted with the NPC.
-- @param pedData table The complete data table of the NPC being interacted with.
-- @param context string The interaction context:
RegisterServerEvent("ErsIntegration::OnFirstNPCInteraction")
AddEventHandler("ErsIntegration::OnFirstNPCInteraction", function(source, pedData, context)
    -- Add your custom NPC interaction logic here
    --[[
        Context frequency analysis:
        - "on_interaction": Very common (normal ped interactions)
        - "on_aiming_at_ped": Common (when aiming at peds and ordering them to kneel)
        - "on_pullover": Common (traffic stops)
        - "on_pursuit_start": Uncommon (callout/world event peds fleeing, regular peds are usually interacted with first)
        - "on_pursuit_end": Very rare (edge cases only)
        - "on_pullover_end": Very rare (edge cases only)
    ]]
    -- print(source, json.encode(pedData, { indent = true }), context)
end)

--- Handles when a callout is offered.
-- @param calloutData table The data of the callout.
RegisterServerEvent("ErsIntegration::OnIsOfferedCallout")
AddEventHandler("ErsIntegration::OnIsOfferedCallout", function(calloutData)
    local src = source
    -- Add your custom callout offered logic here
    -- print(src, calloutData)
end)

--- Handles when a callout is accepted.
-- @param calloutData table The data of the callout.
RegisterServerEvent("ErsIntegration::OnAcceptedCalloutOffer")
AddEventHandler("ErsIntegration::OnAcceptedCalloutOffer", function(calloutData)
    local src = source
    -- Add your custom callout accepted logic here
    -- print(src, calloutData)
end)

--- Handles when a callout is arrived at.
-- @param calloutData table The data of the callout.
RegisterServerEvent("ErsIntegration::OnArrivedAtCallout")
AddEventHandler("ErsIntegration::OnArrivedAtCallout", function(calloutData)
    local src = source
    -- Add your custom callout arrived at logic here
    -- print(src, calloutData)
end)

--- Handles when a callout is ended.
RegisterServerEvent("ErsIntegration::OnEndedACallout")
AddEventHandler("ErsIntegration::OnEndedACallout", function()
    local src = source
    -- Add your custom callout ended logic here
    -- print(src)
end)

--- Handles when a callout is completed successfully.
-- @param calloutData table The data of the callout.
RegisterServerEvent("ErsIntegration::OnCalloutCompletedSuccesfully")
AddEventHandler("ErsIntegration::OnCalloutCompletedSuccesfully", function(calloutData)
    local src = source
    -- Add your custom callout completed successfully logic here
    -- print(src, calloutData)
end)

--- Handles when a pullover is initiated.
-- @param pedData table The data of the ped.
-- @param vehicleData table The data of the vehicle.
RegisterServerEvent("ErsIntegration::OnPullover")
AddEventHandler("ErsIntegration::OnPullover", function(pedData, vehicleData)
    local src = source
    -- Add your custom pullover logic here
    -- print(src, pedData, vehicleData)
end)

--- Handles when a pullover is ended.
-- @param pedData table The data of the ped.
-- @param vehicleData table The data of the vehicle.
RegisterServerEvent("ErsIntegration::OnPulloverEnded")
AddEventHandler("ErsIntegration::OnPulloverEnded", function(pedData, vehicleData)
    local src = source
    -- Add your custom pullover ended logic here
    -- print(src, pedData, vehicleData)
end)

--- Handles when a pursuit is started.
-- @param pedNetId number The network ID of the ped.
RegisterServerEvent("ErsIntegration::OnPursuitStarted")
AddEventHandler("ErsIntegration::OnPursuitStarted", function(pedData)
    local src = source
    -- Add your custom pursuit started logic here
    -- print(src, pedData)
end)

--- Handles when a pursuit is ended.
-- @param pedData table The data of the ped.
RegisterServerEvent("ErsIntegration::OnPursuitEnded")
AddEventHandler("ErsIntegration::OnPursuitEnded", function(pedData)
    local src = source
    -- Add your custom pursuit ended logic here, note that it's possible that the ped is being deleted on losing the target.
    -- print(src, pedData)
end)
```

- Explore the file for more...

---

## 🛠️ ERS Functions Reference

### **Client Functions**
{: .no_toc }

| Function | Description |
|----------|-------------|
| `ERS_SetMovementAnimClipSetToPed(ped, clipset)` | Apply movement style |
| `ERS_SpawnConfiguredWeaponForPed(ped, calloutDataClient)` | Spawn weapon by chance |
| `ERS_RequestNetControlForEntity(entityId)` | Request entity control |
| `ERS_PerformTimedActionOnPed(calloutDataClient, pedList)` | Execute pre-configured ped behaviors |
| `ERS_CreateTemporaryBlipForEntities(entityList, timeoutInMs)` | Create temporary blips |
| `ERS_SpawnParticlesWithinRange(coords, diameter, particleDict, particleName, particleSize, particleAmount, timeout, chanceToExplode)` | Spawn particles with explosion chance |
| `ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)` | Get random coordinates |
| `ERS_SetPedToFleeFromPlayer(ped)` | Make ped flee |
| `ERS_SetPedToAttackPlayer(ped)` | Make ped attack |
| `ERS_SetPedToSurrender(ped)` | Make ped surrender |
| `ERS_ApplyBloodToPed(ped)` | Apply blood to ped |
| `ERS_CreateBloodPuddleAtPed(ped)` | Create blood puddle |
| `ERS_SetPedToPassout(ped)` | Make ped pass out |
| `ERS_ClearPedTasksAndBlockEvents(ped)` | Clear ped tasks |
| `ERS_SetPedAsDrunkPed(ped)` | Apply drunk movement |
| `ERS_GetIsPedADrunkPed(ped)` | Check if ped is drunk |
| `ERS_CheckIfPedIsAlive(ped)` | Check ped health status |
| `ERS_IsPedAnAnimalPed(ped)` | Check if ped is animal |
| `ERS_SetRandomDamageToVehicle(veh)` | Apply vehicle damage |
| `ERS_CreateFlareAtCoordinate(coords)` | Create red flare |
| `ERS_GetSafeSpawnPointForNPCVehicle()` | Find safe spawn point |
| `ERS_SelectRandomMovementClipSet()` | Get random movement style |
| `ERS_SelectMentalHealthPersonScenario()` | Get mental health scenario |
| `ERS_SelectRandomBystanderScenario()` | Get bystander scenario |
| `ERS_SelectRandomProtesterScenario()` | Get protester scenario |
| `ERS_SelectRandomWoundedPersonScenario()` | Get wounded person scenario |
| `ERS_SelectStandingByFireScenario()` | Get fire scenario |
| `ERS_PedEquipWeapon(ped, weaponModel)` | Equip weapon to ped |
| `ERS_DeleteEntityFromCallout(entityId)` | Delete entity |

### **Server Functions**
{: .no_toc }

| Function | Description |
|----------|-------------|
| `ERS_CreatePed(model, coords, heading)` | Create synchronized ped |
| `ERS_CreateObject(model, coords, heading)` | Create synchronized object |
| `ERS_CreateVehicle(model, vehType, coords, vehHeading)` | Create synchronized vehicle |
| `ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)` | Get random coordinates |
| `ERS_GetRandomModel(modelList)` | Select random model |

---

## 📤 Exports

### **Client Exports** (`night_ers/client/exports_client.lua`)
{: .no_toc }

```lua
-- Get player status
local isOnShift = exports['night_ers']:getIsPlayerOnShift()
local getPlayerActiveServiceType = exports['night_ers']:getPlayerActiveServiceType()
local isPlayerAttachedToCallout = exports['night_ers']:getIsPlayerAttachedToCallout()
local isPlayerTrackingUnit = exports['night_ers']:getIsPlayerTrackingUnit()

-- Other
exports['night_ers']:playRadioAnimation()
exports['night_ers']:toggleDispatchMessages()
exports['night_ers']:toggleHints()
exports['night_ers']:toggleShift()
exports['night_ers']:trackPlayerCallout(targetSource)
exports['night_ers']:ERS_PedEquipWeapon(pedEntityId, weaponModelName, ammo)
exports['night_ers']:SetERSVehicleInfoDisplay(display) -- Sets the display for vehicle information on traffic stops to true or false.
exports['night_ers']:SetERSIDCardInfoDisplay(display) -- Sets the display for ID cards to true or false.
exports['night_ers']:ERS_RequestOrCancelPursuitBackupByType(unitType)-- Available unit types: "light", "medium", "heavy", "air", "army" (only during pursuit mode)
```

### **Server Exports** (`night_ers/server/exports_server.lua`)
{: .no_toc }

```lua
-- Shift management
exports['night_ers']:toggleShift(source, shiftType) -- "police", "ambulance", "fire", "tow"
exports['night_ers']:trackPlayerCallout(source, targetSource)
exports['night_ers']:setPlayerCalloutOffersEnabled(source, enabled)

-- Advanced programming exports:
exports['night_ers']:getCallouts() -- Returns a json ready table of all callouts in the callouts/plugins/*.lua folder. (Without functions!)
exports['night_ers']:createCallout(callout) -- Only use if you know what you are doing, this allows you to adjust some variables to when spawning callouts via an external program.
```

---

## 🎨 Props by NovelaxNeko

### **10 Free Included Props**
{: .no_toc }

| Name | Prop Model |
|------|------------|
| Cone | `neko_night_cone_00` |
| Barrier | `neko_night_water_barrier_00` |
| Warning triangle | `neko_night_warning_tri_00` |
| Rubber barrier | `neko_night_rubber_barrier_00` |
| Barrier | `neko_night_barrier_00` |
| Barrier 1 | `neko_night_barrier_01` |
| Barrier 2 | `neko_night_barrier_02` |
| Arrow board cross | `neko_night_arrow_board_00` |
| Arrow board left | `neko_night_arrow_board_00_l` |
| Arrow board right | `neko_night_arrow_board_00_r` |

{: .tip }
> **Artist Credit:** Check out [NovelaxNeko](https://novelaxneko.com/)!

---

## 🔧 Troubleshooting

### **Common Issues**
{: .no_toc }

#### **Fire & Smoke Problems**
{: .no_toc }

{: .warning }
> **Resource Naming:** SmartFires and SmartHose must be named exactly `SmartFires` and `SmartHose` (case sensitive). Same applies to Lite versions. A common issue is that callouts can no longer be cancelled or will no longer spawn after encountering issues due to faulty naming of the resources

#### **MDT Integration Issues**
{: .no_toc }

{: .tip }
> **Solution:** Enable ERS in `night_shifts` config and enable Night Shifts in `night_ers` config. Duty can (optionally) toggled through the MDT

#### **Hosting-Specific Issues**
{: .no_toc }

- **Iceline Hosting:** Set `Enable Beyond` to 1 in server dashboard
- **Entity Spawning:** Ensure OneSync is properly configured in the host dashboard

### **Compatibility Checklist**
{: .no_toc }

- ✅ **Recommended Gamebuild:** 3323
- ✅ **Recommended Artifacts:** 17000(+)
- ❌ **Considered Not Compatible:** Other Gamebuilds below 2944 and above 3323 and Artifacts versions below 14230.
- ❌ **RemoveCops-AI:** We recommend to disable this resource when using ERS.
- ❌ **Andrew's Advanced AI:** We recommend to disable this resource when using ERS.
- ❌ **Realistic Euphoria Physics:** We recommend to disable this resource when using ERS.
- ❌ **RedSaints Stretcher/Ambulance:** We recommend to disable this resource when using ERS.
- ❌ **Improved-Seat-Shuffle-FiveM by Dalrae1:** We recommend to disable this resource when using ERS.
- ⚠️ **Anti-cheat:** May cause entity deletion issues. This can be prevented via your anti-cheat settings. Contact your provider.

---

## 💬 Support & Community

### **Getting Help**
{: .no_toc }

1. **Read Documentation:** Review this guide thoroughly
2. **Check Console:** Use F8 and txAdmin (sserver) console for error messages
3. **Discord Support:** Create a ticket in our Discord

### **Feedback & Reviews**
{: .no_toc }

We welcome your feedback! Visit our Discord for:
- Support
- Product reviews
- Feature suggestions
- Documentation improvements

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}

---


