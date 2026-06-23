---
layout: default
title: "Emergency Response Simulator"
nav_order: 4
has_children: false
has_toc: true
last_modified_date: "2026-05-04"
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

## 🛒 Purchase Information

**Get Emergency Response Simulator:**

[Purchase on Nights Software Store](https://store.nights-software.com/category/ers){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }

> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
>
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

- **✅ Recommended Gamebuild:** 3323 or 3570
- **✅ Recommended Artifacts:** 25770(+)
- **❌ Considered Not Compatible:** Other Gamebuilds than 3323 or 3570

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
>
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

1. **SmartHoseLite** (Required)
  - Provided by [London Studios](https://londonstudios.net)
  - Enables water hose functionality for fire extinguishing
  - **Must start before `SmartFiresLite*`* — `SmartFiresLite` consumes `SmartHose` exports at runtime.
2. **SmartFiresLite** (Required)
  - Provided by [London Studios](https://londonstudios.net)
  - Enables fire spawning functionality
  - **Note:** Keep Lite named **`SmartFiresLite`**. If you use **full** Smart Fires instead, rename the folder to exactly **`SmartFires`** (case sensitive), per London Studios. This also goes for SmartFires v2: **`SmartFires`**.
3. **Emergency Response Simulator** (Required)
  - Main gamemode with 100+ callouts
  - Supports Police, Fire, Medic, and Tow services

#### **Optional Resources**

{: .no_toc }

1. **Night Discord API** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Enables Discord role-based permissions
  - [View Features](https://store.nights-software.com/package/5035729)
  - [Installation Guide](/resources/discordAPI)
2. **Night Subtitles** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Movie-style subtitle display
  - [View Features](https://store.nights-software.com/package/6043540)
  - Drag-and-drop installation
3. **Nearest Postal & Map** (Optional - Free)
  - Default postal codes with custom map
  - [CFX Forum Post](https://forum.cfx.re/t/release-postal-code-map-minimap-new-improved-v1-3/147458)
  - [Direct Download](https://github.com/DevBlocky/nearest-postal/archive/refs/heads/master.zip)
  - [Map Download](https://www.dropbox.com/s/lb22r7rb4gwh44o/Postal%20Code%20Map.zip?dl=0)
4. **Night Shifts MDT** (Optional - Included with ERS Plus and Ultimate)
  - Modern MDT for emergency services management
  - [View Features](https://store.nights-software.com/package/5667103)
  - [Installation Guide](/resources/nightShifts)
5. **Theebu Flatbeds Lite** (Optional - Included with ERS Essential, Plus and Ultimate)
  - Vehicle transport functionality
  - [Full Version](https://store.theebu.net/package/5033826) available

#### **Add-on DLCs**

{: .no_toc }

1. **World Events Add-on** (Optional)
  - [View Features](https://store.nights-software.com/package/6437544)
2. **Dynamic Weighing Stations** (Optional)
  - [View Features](https://store.nights-software.com/package/6605986)
3. **K9 Dog Handler** (Optional)
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
ensure SmartHoseLite   # or SmartHose if you have full version (must start before SmartFiresLite)
ensure SmartFiresLite  # or SmartFires if you have full version

# Core ERS
ensure night_shifts_mdt
ensure night_ers

# Optional Add-ons
ensure ebu_flatbeds_ers
ensure night_ers_worldevents
ensure night_ers_weighstation
ensure night_ers_k9

# Optional Callout Packs
ensure night_ers_cp1
```

---

## ⚙️ Configuration Setup

### **Required Tools**

{: .no_toc }

{: .tip }

> **Visual Studio Code:** We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**

{: .no_toc }


| File                                           | Purpose                        |
| ---------------------------------------------- | ------------------------------ |
| `night_ers/config/config.lua`                  | Main configuration             |
| `night_ers/config/gear-config.lua`             | Weapons and clothing           |
| `night_ers/config/impound-config.lua`          | Impound settings               |
| `night_ers/config/leaderboard-config.lua`      | Leaderboard settings           |
| `night_ers/config/npcbackup-config.lua`        | NPC Backup settings            |
| `night_ers/config/persistententity-config.lua` | NPC personal data settings     |
| `night_ers/config/pullover-config.lua`         | Traffic stop settings          |
| `night_ers/config/pursuit-config.lua`          | Pursuit settings               |
| `night_ers/config/questioning-config.lua`      | NPC questioning settings       |
| `night_ers/config/sound-config.lua`            | Sound & Voice over settings    |
| `night_ers/config/spikestrip-config.lua`       | Spikestrip settings            |
| `night_ers/config/stretcher-config.lua`        | Stretcher settings             |
| `night_ers/config/vehinteractions-config.lua`  | Vehicle search settings        |
| `night_ers/client/c_functions.lua`             | Client-side functions / events |
| `night_ers/server/s_functions.lua`             | Server-side functions / events |


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

--- Handles when an AI person is delivered to hospital.
-- @param pedData table The data of the ped.
function OnPersonDeliveredToHospital(pedData)
    TriggerServerEvent('ErsIntegration::OnPersonDeliveredToHospital', pedData)
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
--
-- Timing & data source:
--   * Without night_shifts_mdt, this event fires immediately with ERS-generated
--     random identity data — legacy behaviour.
--   * With night_shifts_mdt running, this event fires ONCE per first interaction,
--     AFTER the MDT identity lookup has merged into pedData. Identity fields come
--     from the MDT's persistent civilian record — the same values the officer sees
--     in the MDT UI.
--   * License_* and FlagsOrMarkers will be nil when the MDT is active. Query the
--     MDT exports for warrants/flags/licenses instead.
--   * If the MDT identity never resolves within ~12s, the event still fires
--     once with the partial pedData and identity fields stay nil.
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

-- Handles first vehicle interaction events.
-- @param src number The source ID of the user who interacted with the vehicle.
-- @param vehicleData table The complete data table of the vehicle being interacted with.
-- @param context string The interaction context:
--
-- Timing & data source:
--   * Without night_shifts_mdt, this event fires immediately with ERS-rolled
--     random compliance data — legacy behaviour.
--   * With night_shifts_mdt running, this event fires ONCE per first interaction,
--     AFTER the MDT vehicle lookup has merged into vehicleData. Compliance fields
--     and owner_name come from the MDT's persistent vehicle record. For stolen
--     vehicles, owner_name is the victim's name (taken from identity.owner)
--     rather than the driver.
--   * If the MDT vehicle lookup never resolves within ~12s, the event still fires
--     once with the partial vehicleData (compliance fields stay nil).
RegisterServerEvent("ErsIntegration::OnFirstVehicleInteraction")
AddEventHandler("ErsIntegration::OnFirstVehicleInteraction", function(source, vehicleData, context)
    -- Add your custom vehicle interaction logic here
    --[[
        Context frequency analysis:
        -- Explained: "First interaction with this specific vehicle instance in current session, unless the network ID was replaced. Then it can be an other instance for the same vehicle."

        - "on_pullover": Very common (traffic stops)
        - "on_vehicle_search": Common (when searching for vehicles)
        - "on_pursuit_start": Uncommon (callout/world event peds fleeing whilst in a vehicle and not interacted with yet)
        - "on_pullover_end": Very rare (edge cases only)
    ]]
    -- print(source, json.encode(vehicleData, { indent = true }), context)
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

--- Handles when an AI person is delivered to hospital.
-- @param src number Player who completed the drop-off.
-- @param pedData table NPC data (nil if no interaction record exists).
AddEventHandler("ErsIntegration::OnPersonDeliveredToHospital", function(src, pedData)
    -- Add your custom hospital delivery logic here.
    -- print(src, pedData)
end)
```

- Explore the file for more...

### **Hospital drop-off (stretcher)**

{: .no_toc }

Drop-off zones: `night_ers/config/stretcher-config.lua` (`StretcherDropOffLocations`, `StretcherDropOffRadius`).

#### **Third-party stretcher**

Trigger on the **player’s client** when at a drop-off zone:

```lua
TriggerEvent('ErsIntegration::DeliverPedToHospital', NetworkGetNetworkIdFromEntity(pedEntity))
```

Server must accept the request: player **on shift**, inside drop-off radius, within **25 m** of the patient, patient is an **ERS NPC** (not a player).

#### **Built-in ERS stretcher**

Use **`dropoffped`** (default: **Enter**) at the same drop-off zones. Patient must be on your stretcher.

#### **On success**

Server event (listen in `s_functions.lua` or your resource):

```lua
AddEventHandler("ErsIntegration::OnPersonDeliveredToHospital", function(src, pedData)
    -- rewards, logs, etc.
end)
```

ERS removes the NPC and updates **`persons_delivered_to_hospital`** when leaderboard stats are enabled.

---

## 🔗 night_shifts_mdt Integration — Field Ownership

{: #ers-mdt-field-ownership }

When the optional `night_shifts_mdt` resource is running, the MDT becomes the
single source of truth for identity and vehicle compliance data. ERS resolves
the MDT identity **on the client, BEFORE** asking the server for `pedData` /
`vehicleData`, then forwards the resolved identity inline so the server can
merge it synchronously. The `OnFirstNPCInteraction` /
`OnFirstVehicleInteraction` events fire **once, in the same tick** as the
underlying request, with MDT-authoritative values already overlaid into the
existing ERS field shape — external integrations that subscribe to these
events keep working without any code changes and never see an unmerged placeholder payload.

### NPC payload (`pedData`)


| Field                                                                                                                                                       | With night_shifts_mdt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Without night_shifts_mdt  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `FirstName`, `LastName`, `DOB`, `Gender`                                                                                                                    | MDT (persistent civilian record)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ERS (random rolls)        |
| `Address`, `City`, `PostalCode`, `State`, `Country`                                                                                                         | MDT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ERS                       |
| `Email`, `PhoneNumber`, `Nationality`                                                                                                                       | MDT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ERS                       |
| `ProfilePicture`                                                                                                                                            | MDT (`pictureUrl`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ERS (model-derived)       |
| `License_Car`, `License_Bike`, `License_Boat`, `License_Truck`, `License_Pilot` (+ `_Is_Valid` / `_Colour` / `_Icon` per line, e.g. `License_Car_Is_Valid`) | **Same shape as plain ERS** — same `pedData` keys. With MDT, each line is filled from the civilian’s PNC licence row for that **fixed** type id: `License_Car` → `driver_license`, `License_Bike` → `motorcycle_license`, `License_Boat` → `boat_license`, `License_Truck` → `commercial_driver_license`, `License_Pilot` → `pilot_license`. Those ids are **not** configurable (only the **labels** in admin). If there is no row for a type, the card still shows the slot, usually as no licence. Without MDT, ERS random rolls. | ERS (random rolls)        |
| `FlagsOrMarkers`                                                                                                                                            | **Use it like vanilla ERS.** Keep reading `pedData.FlagsOrMarkers` on your existing server events (`OnFirstNPCInteraction`, pullover, etc.). With the MDT on, that object reflects the civilian’s **Important Notices** from the MDT instead of a random roll. You do **not** need a different field or a second integration path.                                                                                                                                                                                                  | ERS (random rolls)        |
| `mdtCivilianId`, `mdtPersonalId`                                                                                                                            | Set on `**mdt-merged`** payloads — MDT civilian PK and dossier id for integrations                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *(n/a — MDT not running)* |
| `AddressType`                                                                                                                                               | ERS (always — situational)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ERS                       |
| `Inventory`, `isDrunk`, `isDrugged`, `BehaviourState`                                                                                                       | ERS (always — situational)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ERS                       |
| `MassiveBleeding`, `Airway`, `Breathing`, `Circulation`, `Hypothermia`, `CPR`                                                                               | ERS (always — medical)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ERS                       |


### Vehicle payload (`vehicleData`)


| Field                                                                             | With night_shifts_mdt                                                   | Without night_shifts_mdt |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------ |
| `tax`, `mot`, `insurance`, `stolen`, `bolo`, `bolo_description`                   | MDT (persistent vehicle record)                                         | ERS (random rolls)       |
| `owner_name`                                                                      | MDT (`identity.owner.firstName + lastName` — falls back to driver name) | ERS (driver / random)    |
| `build_year`                                                                      | MDT if known (`vehicle.buildYear`), else ERS roll                       | ERS (random roll)        |
| `make`, `model`, `color`, `vehicle_class`, `license_plate`, `vehicle_picture_url` | ERS (vehicle attributes)                                                | ERS                      |
| `inventory`                                                                       | ERS (always — situational)                                              | ERS                      |

{: .tip }

> **ANPR watchlist vs vehicle flags:** The patrol **ANPR HUD** can show an **ANPR HIT** from the MDT **watchlist** (registry). That is separate from `stolen` / `bolo` on the **PNC vehicle record** returned in `vehicleData` and pullover/MDT lookups. With the MDT running, NPC auto-watchlist entries are scoped to **plate + vehicle model** so recycled GTA plates do not false-flag a different car; officer-added watchlist plates remain plate-wide. The ANPR **hit log** is historical — a past detection does not mean the plate is still flagged. See [Night Shifts — ANPR & NPC traffic](/resources/nightShifts/#anpr-npc-traffic) for the full picture.

When `night_shifts_mdt` is active, ERS waits up to **~12 seconds** on the client for the MDT identity/vehicle lookup to merge before firing `OnFirst*` events with partial data.

### Debug printing

When `Config.Debug = true`, every `OnFirst`* event payload is pretty-printed
to the server console with a `mode` tag indicating how the data was
sourced:


| Mode              | Meaning                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mdt-merged`      | MDT identity resolved on the client and merged into the payload before firing. The common path when night_shifts_mdt is running. |
| `mdt-disabled`    | night_shifts_mdt is not running. ERS data fired immediately (legacy behaviour).                                                  |
| `mdt-no-civilian` | Ped data was requested without an MDT-merged civilian id (non-standard integration path).                                        |
| `mdt-no-vehicle`  | Vehicle data was requested without MDT-backed vehicle identity. Now rare: the NPC pool fabricates a record for any ambient vehicle regardless of plate format, so this mostly indicates a non-standard integration path or a player vehicle with no registration. |


Use these tags when debugging server-side integrations to confirm which sourcing path fired for each `OnFirst*` event.

---

## 🛠️ ERS Functions Reference

### **Client Functions**

{: .no_toc }


| Function                                                                                                                              | Description                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `ERS_SetMovementAnimClipSetToPed(ped, clipset)`                                                                                       | Apply movement style                  |
| `ERS_SpawnConfiguredWeaponForPed(ped, calloutDataClient)`                                                                             | Spawn weapon by chance                |
| `ERS_RequestNetControlForEntity(entityId)`                                                                                            | Request entity control                |
| `ERS_PerformTimedActionOnPed(calloutDataClient, pedList)`                                                                             | Execute pre-configured ped behaviors  |
| `ERS_CreateTemporaryBlipForEntities(entityList, timeoutInMs)`                                                                         | Create temporary blips                |
| `ERS_SpawnParticlesWithinRange(coords, diameter, particleDict, particleName, particleSize, particleAmount, timeout, chanceToExplode)` | Spawn particles with explosion chance |
| `ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)`                                                                    | Get random coordinates                |
| `ERS_SetPedToFleeFromPlayer(ped)`                                                                                                     | Make ped flee                         |
| `ERS_SetPedToAttackPlayer(ped)`                                                                                                       | Make ped attack                       |
| `ERS_SetPedToSurrender(ped)`                                                                                                          | Make ped surrender                    |
| `ERS_ApplyBloodToPed(ped)`                                                                                                            | Apply blood to ped                    |
| `ERS_CreateBloodPuddleAtPed(ped)`                                                                                                     | Create blood puddle                   |
| `ERS_SetPedToPassout(ped)`                                                                                                            | Make ped pass out                     |
| `ERS_ClearPedTasksAndBlockEvents(ped)`                                                                                                | Clear ped tasks                       |
| `ERS_SetPedAsDrunkPed(ped)`                                                                                                           | Apply drunk movement                  |
| `ERS_GetIsPedADrunkPed(ped)`                                                                                                          | Check if ped is drunk                 |
| `ERS_CheckIfPedIsAlive(ped)`                                                                                                          | Check ped health status               |
| `ERS_IsPedAnAnimalPed(ped)`                                                                                                           | Check if ped is animal                |
| `ERS_SetRandomDamageToVehicle(veh)`                                                                                                   | Apply vehicle damage                  |
| `ERS_CreateFlareAtCoordinate(coords)`                                                                                                 | Create red flare                      |
| `ERS_GetSafeSpawnPointForNPCVehicle()`                                                                                                | Find safe spawn point                 |
| `ERS_SelectRandomMovementClipSet()`                                                                                                   | Get random movement style             |
| `ERS_SelectMentalHealthPersonScenario()`                                                                                              | Get mental health scenario            |
| `ERS_SelectRandomBystanderScenario()`                                                                                                 | Get bystander scenario                |
| `ERS_SelectRandomProtesterScenario()`                                                                                                 | Get protester scenario                |
| `ERS_SelectRandomWoundedPersonScenario()`                                                                                             | Get wounded person scenario           |
| `ERS_SelectStandingByFireScenario()`                                                                                                  | Get fire scenario                     |
| `ERS_PedEquipWeapon(ped, weaponModel)`                                                                                                | Equip weapon to ped                   |
| `ERS_DeleteEntityFromCallout(entityId)`                                                                                               | Delete entity                         |


### **Server Functions**

{: .no_toc }


| Function                                                           | Description                 |
| ------------------------------------------------------------------ | --------------------------- |
| `ERS_CreatePed(model, coords, heading)`                            | Create synchronized ped     |
| `ERS_CreateObject(model, coords, heading)`                         | Create synchronized object  |
| `ERS_CreateVehicle(model, vehType, coords, vehHeading)`            | Create synchronized vehicle |
| `ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)` | Get random coordinates      |
| `ERS_GetRandomModel(modelList)`                                    | Select random model         |


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
```

#### **Start pursuit** (callouts & other integrations)

{: .no_toc }

Use from **client** Lua in resources that `ensure` / `dependency` on `night_ers`. There is no server export for this; if your logic runs on the server, trigger the officer’s client (e.g. your own event) and call the export there.


| Export                   | Notes                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `StartPursuit(pedNetId)` | `pedNetId` is the suspect’s **network id** (e.g. `NetworkGetNetworkIdFromEntity(suspectPed)`). Returns `**true`** if ERS entered pursuit mode, `**false**` if it refused (pursuit disabled in config, player not on **police** service, invalid net id, already in a pursuit or cancel-in-progress, or ped / vehicle data could not be resolved for pursuit init). |


After a successful start, the player is in **pursuit mode** and you can use `**RequestNPCPursuitBackup`** / `**CancelNPCPursuitBackup**` as documented below.

```lua
local netId = NetworkGetNetworkIdFromEntity(suspectPed)
local started = exports['night_ers']:StartPursuit(netId)
```

#### **NPC backup — pursuit & service** (other resources)

{: .no_toc }

Use these from **client** scripts in resources that `ensure` / `dependency` on `night_ers`. Pursuit backup exports only work while the player is in **pursuit mode** (including after a successful `**StartPursuit`** from another resource).


| Export                                         | Notes                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `RequestNPCPursuitBackup(unitType)`            | Request pursuit NPC backup, or toggle-cancel by calling again with the same `unitType` while pending. Returns `dispatched`, `reason`. |
| `CancelNPCPursuitBackup(serverDeleteDelayMs?)` | Cancels active pursuit NPC backup without a `unitType`. Optional delay (ms) for server-side cleanup; omit or `0` for immediate.       |
| `RequestNPCBackup(backupType)`                 | Service / road NPC backup. Returns `dispatched`, `reason`; when `dispatched` is false, `reason` is `"unknown_backup_type"`.           |
| `CancelNPCBackup(backupType, mustNotify)`      | Cancels matching service backup. `mustNotify` controls in-game notification behaviour (bool).                                         |


**Pursuit `unitType`** must match `night_ers/config/pursuit-config.lua` → `Config.PursuitBackupTypes[].PursuitType` (stock values, all lowercase):

`"light"`, `"medium"`, `"heavy"`, `"air"`, `"army"`

**Service `backupType`** identifiers:

`"ambulance"`, `"police"`, `"taxi"`, `"tow"`, `"roadservice"`, `"coroner"`, `"animalrescue"`, `"mechanic"`, `"fire"`

{: .note }

> **Service backup casing:** You can pass any casing (e.g. `"Tow"` or `"TOW"`). `night_ers` normalizes `backupType` internally for both request and cancel. Pursuit `unitType` still must match config exactly unless you customize `PursuitType` strings.

{: .tip }

> **Toggle cancel (pursuit):** Calling `RequestNPCPursuitBackup` again with the **same** `unitType` while a pursuit backup is already pending **cancels** that request (returns `dispatched`, `reason`). Use `CancelNPCPursuitBackup` when you want to cancel without knowing the pending type.

```lua
-- Pursuit NPC backup — only during pursuit mode; returns dispatched, reason
local dispatched, reason = exports['night_ers']:RequestNPCPursuitBackup('light')

-- Toggle-cancel: call again with same unitType while pending
-- local dispatched2, reason2 = exports['night_ers']:RequestNPCPursuitBackup('light')

-- Explicit pursuit cancel (optional server purge delay in ms)
exports['night_ers']:CancelNPCPursuitBackup()
-- exports['night_ers']:CancelNPCPursuitBackup(5000)

-- Service NPC backup — returns dispatched, reason (second value set when not dispatched, e.g. "unknown_backup_type")
local dispatched, reason = exports['night_ers']:RequestNPCBackup('tow')

exports['night_ers']:CancelNPCBackup('tow', true)
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

-- Custom callouts / pack server Lua — see **Spawning Smart Fires (server)** for the safe exports.

-- Scripted callout *offer* (recommended for integrations — returns whether the prompt was shown):
local ok, reason = exports['night_ers']:SendCalloutOfferToPlayer(source, optionalCalloutId, optionalTimeoutMs)
```

#### `createCallout` vs `SendCalloutOfferToPlayer` (server scripts)

{: .no_toc }

{: .note }

> **`createCallout`** makes a **new** callout preset in memory by copying an existing definition. It merges things like **`CalloutLocations`**, **`PedWeaponData`**, and AI / loot rolls. You only get `{ calloutId = "<new-key>" }`. It never checks the player — not shift, job, distance, “already busy”, or whether callouts are on. Nobody gets a popup; **you** spawn or drive the scenario from your own script.

Use **`SendCalloutOfferToPlayer`** when you want the **same thing as `/requestcallout`**: eligibility runs on server + client (shift, cooldown, blocks, passenger, valid spots, …) and the player sees the normal **accept / decline** dispatch prompt.


| Argument | Meaning |
| -------- | ------- |
| `source` | Player’s **server id**. |
| `optionalCalloutId` | Leave off or use `nil` / `""` for a **random** callout (same idea as typing **`/requestcallout`** with no id). Or pass a callout id string (same loose matching as **`/requestcallout`**). |
| `optionalTimeoutMs` | How many **milliseconds** to wait for that player’s client to answer. **Default is 5000** if you skip this argument. |

**Waiting on the player**

This export talks to their **client**. Your server script pauses until the client answers **or** the wait time runs out.

1. Omit the third argument → wait **5000 ms** (5 seconds) at most.
2. Pass a positive number → wait that many milliseconds (e.g. `15000` = 15 seconds).
3. If time runs out with no reply → you get **`ok = false`** and **`reason = "client_response_timeout"`** (crash, disconnect, extreme lag).

**Returns**

- **`ok`** — `true` if the offer went through.
- **`reason`** — only when **`ok`** is `false`; log it to see what blocked the offer.

**Spawn spots (matches `/requestcallout`)**

- **Random offer** (`nil` / `""`) → spawn must be **within range** of the player (see **`OfferCalloutsWithinRangeOf`** in config).
- **You pass a specific id** → any spawn listed for that callout can be used **(range filter off).**

**When `ok` is false — common `reason` values**

*Server:* `invalid_player`, `player_not_on_shift`, `no_active_service`, `player_busy_on_callout`, `no_callouts_enabled_on_server`, `callout_service_mismatch`, `callout_not_found:...`, `no_eligible_callouts_for_service`, `offer_unavailable`, `client_response_timeout`

*Client / player-side:* `callouts_disabled_by_player`, `callouts_temporarily_blocked`, `callout_request_cooldown`, `not_on_shift`, `passenger_not_allowed`, `already_offered_or_attached`, `no_valid_locations`

Example:

```lua
local ok, err = exports['night_ers']:SendCalloutOfferToPlayer(src)
if not ok then
    print(('Could not offer callout: %s'):format(err or '?'))
else
    -- Player has the accepting / declining timed prompt exactly like `/requestcallout`.
end

local ok2, err2 = exports['night_ers']:SendCalloutOfferToPlayer(src, 'callout_vehicle_theft', 6000)
```

#### **Spawning Smart Fires (server)**

{: .no_toc }

This is for **custom callouts**: if you write your own Lua (in `night_ers` callout plugins, a **separate callout pack** resource, or any other server script that participates in building a callout) and you need to **start** a Smart Fires fire or smoke.

If you use **Smart Fires** or **Smart Fires Lite** with ERS, **stock callouts** already handle setup and cleanup—you do not need these exports unless **your script** creates the flame or smoke.

Use the **bridge helpers** below. They are the **only** sanctioned way to spawn callout fires: they pick the right Smart Fires version (full / Lite / v2), pace creation safely on v2, and validate that Smart Fires is actually running. **You** then append the returned id to your `fireList` / `smokeList` so ERS can track it for the HUD, NPC backup and end-of-scene cleanup. Calling `exports['SmartFires']:CreateFire(...)` directly inside a callout will spawn a fire that **ERS does not track**: no HUD slot, no NPC backup, no cleanup at the end of the scene.

**`GetFireConfig()`:** Call `exports['night_ers']:GetFireConfig()` on the server when you need size/type values. It exposes the **same tables** core fire callouts draw from so your random sizes and fire types stay consistent. The example below uses the returned booleans only to distinguish **full Smart Fires** from **Lite** sizing (you can paste that pattern verbatim).

| Export | What you pass in | What you get back |
| ------ | ---------------- | ----------------- |
| `ERS_AddCalloutFire` | World position, fire type (string), size, optional `{ interiorId = number }` | **Fire / incident id** — append it to your `fireList` yourself (`fireList[#fireList + 1] = id`). Returns **nothing** if Smart Fires is turned off in ERS or the fire resource is not running. |
| `ERS_AddCalloutSmoke` | World position, smoke type (string), size | **Smoke id** — append it to your `smokeList` yourself. Returns **nothing** if unavailable. |
| `ERS_StopCalloutFire` | Id you received when creating the fire | Stops the fire mid-callout. Returns `true` on success. **You** remove the id from your `fireList` if you want it gone from ERS's tracking. On **Smart Fires v2**, pass the **exact string** the helper returned (e.g. `"o9"`). |
| `ERS_GetSmartFireIncidentStatus` | Same id string as above | **Smart Fires v2 only** — whether that id is still active, merged into another fire, or gone (for custom callout scripts). |
| `ERS_CountOutstandingFireTargets` | `fireList` table from your callout | **Smart Fires v2 only** — how many **live `fireList` slots** remain. |

{: .warning }

> **Why you append the id yourself.** FiveM serializes table arguments across resources via msgpack — when a callout pack calls `exports['night_ers']:ERS_AddCalloutFire(...)`, any table the helper mutates is a **copy** that never propagates back to the pack's `fireList`. The only pattern that works correctly for both in-resource callouts and external packs is: helper returns the id, **caller** appends it to its own list in its own VM. Do not skip the append step — without it, ERS sees an empty `fireList` and the HUD will display `0/0` even though Smart Fires has live incidents.

**Fire merging (Smart Fires v2):** every fire you spawn uses Smart Fires' default behaviour, which includes **native merge** — when two `ERS_AddCalloutFire` calls land close enough to each other, Smart Fires absorbs one into the other and the bridge tracks the surviving host id. The HUD then shows one task for the merged front, not two. If your callout needs each spawn to stay a distinct front on the HUD, space the coords **beyond the merge radius** rather than fighting the merge. On **Smart Fires** (full v1) and **Smart Fires Lite** there is no merge to worry about — those products treat each `CreateFire` as independent.

**Indoor fires (Smart Fires v2):** indoor placement is automatic. Spawn your fire at the **interior coords** you want it at and Smart Fires probes the interior itself — the resulting incident behaves like an indoor fire (smoke vents, no wind spread, indoor preset). You can also pass `"indoors"` as the fire type to **force** indoor classification regardless of what the probe finds at those coords. ERS counts, NPC backup, and cleanup all work the same as outdoor fires. As an escape hatch, `{ interiorId = <id> }` lets you anchor the incident to a specific interior — only needed when the auto-probe misses the right one (rare; custom MLOs). On **Smart Fires** (full v1) and **Smart Fires Lite** there is no indoor concept and the option is ignored.

```lua
-- Pattern for custom callouts (your coordinates and lists).
local fireCfg = exports['night_ers']:GetFireConfig()
if fireCfg.UsingSmartFiresV2 or fireCfg.UsingSmartFires then
    local fireSize = fireCfg.RandomMediumFireOrSmokeSize[math.random(#fireCfg.RandomMediumFireOrSmokeSize)]
    local fireType = fireCfg.NormalFireTypes[math.random(#fireCfg.NormalFireTypes)]
    fireList[#fireList + 1] = exports['night_ers']:ERS_AddCalloutFire(vector3(x, y, z), fireType, fireSize)
elseif fireCfg.UsingSmartFiresLite then
    local fireSize = fireCfg.RandomSmallFireOrSmokeSize[math.random(#fireCfg.RandomSmallFireOrSmokeSize)]
    fireList[#fireList + 1] = exports['night_ers']:ERS_AddCalloutFire(vector3(x, y, z), "normal", fireSize)
end
```

{: .tip }

> **You append the id, ERS does the rest.** `fireList[#fireList + 1] = ERS_AddCalloutFire(...)` is safe even when the helper returns nil — Lua treats `t[#t + 1] = nil` as a no-op, so a Smart Fires outage silently skips the entry instead of leaving a hole. ERS stops everything still listed when the callout ends.
>
> Call **`ERS_StopCalloutFire`** only if your script removes a fire before the callout ends (e.g. one fire is extinguished by a scripted suppression while the rest of the scene keeps burning). The helper returns `true` on success; remove the id from your `fireList` yourself if you want ERS to forget it (otherwise teardown will see the already-stopped id and skip it silently).
>
> **Smart Fires v2:** the id the helper returns is the **exact string** Smart Fires returned from `CreateFire` (e.g. `"o9"`). Keep it intact if you store it elsewhere.
>
> **Task list / HUD (v2):** ERS counts **one task per distinct incident** (matches the Smart Fires blip on the minimap). If your callout spawns 4 fires spaced far enough apart that none of them merge, the HUD shows `4/4` and the numerator drops to `3/4` when the first incident's last flame dies. When spawns are close enough that Smart Fires merges them, the merged front counts as **one** slot on the HUD, not two — the bridge resolves the canonical incident id via Smart Fires' `GetCanonicalIncidentId` export and dedupes before counting. The baseline can grow if a callout discovers additional incidents at runtime but it never shrinks until cancel. Callout completion fires when every incident is fully out.
>
> Spread children (the extra flames wind blows into nearby trees / cars) share their parent incident, so they don't increment the HUD. They still **count** in the sense that firefighters fight them and the incident stays on the HUD until they're all out — but a spread child burning itself out from `airDecay` won't make the HUD jump.

---

## 🎨 Props by NovelaxNeko

### **10 Free Included Props**

{: .no_toc }


| Name              | Prop Model                     |
| ----------------- | ------------------------------ |
| Cone              | `neko_night_cone_00`           |
| Barrier           | `neko_night_water_barrier_00`  |
| Warning triangle  | `neko_night_warning_tri_00`    |
| Rubber barrier    | `neko_night_rubber_barrier_00` |
| Barrier           | `neko_night_barrier_00`        |
| Barrier 1         | `neko_night_barrier_01`        |
| Barrier 2         | `neko_night_barrier_02`        |
| Arrow board cross | `neko_night_arrow_board_00`    |
| Arrow board left  | `neko_night_arrow_board_00_l`  |
| Arrow board right | `neko_night_arrow_board_00_r`  |


{: .tip }

> **Artist Credit:** Check out [NovelaxNeko](https://novelaxneko.com/)!

---

## 🔧 Troubleshooting

### **Common Issues**

{: .no_toc }

#### **Fire & Smoke Problems**

{: .no_toc }

{: .warning }

> **Resource Naming:** SmartFires and SmartHose must be named exactly `SmartFires` and `SmartHose` (case sensitive). Same applies to Lite versions. A common issue is that callouts can no longer be cancelled or will no longer spawn after encountering issues due to faulty naming of the resources.

#### **MDT Integration Issues**

{: .no_toc }

{: .tip }

> **Solution:** Enable ERS in `night_shifts_mdt` config (`Config.Enable_ERS = true`) and enable Night Shifts in `night_ers` config. Duty can optionally be toggled through the MDT (`ManageShiftsByMDT` on the ERS side where applicable). Ensure `ensure night_shifts_mdt` appears **before** `ensure night_ers` in `server.cfg`.

{: .tip }

> **ANPR HUD hit but PNC vehicle looks clean (or the opposite):** The watchlist, vehicle record, and hit log are three different layers. An **ANPR HIT** means an active watchlist entry; **vehicle BOLO/stolen** on lookup refers to the PNC vehicle file; the **hit log** is audit history only. After GTA reuses a plate on another model, an old watchlist flag should not follow the new car — if behaviour looks wrong, confirm both resources are updated and see [Night Shifts — ANPR & NPC traffic](/resources/nightShifts/#anpr-npc-traffic).

> **Partial `pedData` / `vehicleData` on first interaction:** If MDT lookup takes longer than ~12s (heavy server load or first NPC pool generation), ERS still fires `OnFirst*` once with nil compliance/identity fields. Retry the interaction or check server console with `Config.Debug = true` on both resources.

> **Custom / non-standard plates return UNREGISTERED or empty data:** Older builds only fabricated NPC vehicle records for GTA-style "native" plate patterns, so servers running plate-changer scripts (e.g. `HT 1234`) saw pullovers and ANPR return unregistered or partial vehicle data. That plate-format gate has been removed — any ambient NPC vehicle now gets a full MDT-backed record regardless of plate layout. If you still see this, update both `night_shifts_mdt` and `night_ers` to the latest build.

#### **Hosting-Specific Issues**

{: .no_toc }

- **Iceline Hosting:** Set `Enable Beyond` to 1 in server dashboard
- **Entity Spawning:** Ensure OneSync is properly configured in the host dashboard

### **Compatibility Checklist**

{: .no_toc }

- ✅ **Recommended Gamebuild:** 3323 or 3570
- ✅ **Recommended Artifacts:** 25770(+)
- ❌ **QBox important note; NPC Backup doesn't spawn:** Remove blocked ped & vehicle model names, like `s_m_y_cop_01` or `FIRETRUK` from `qbx_smallresources/qbx_entitiesblacklist/config.lua` and your backup peds will spawn again
- ❌ **Considered Not Compatible:** Other Gamebuilds other than 3323 or 3570
- ❌ **RemoveCops-AI:** We recommend to disable this resource when using ERS
- ❌ **Andrew's Advanced AI:** We recommend to disable this resource when using ERS
- ❌ **Realistic Euphoria Physics:** We recommend to disable this resource when using ERS
- ❌ **RedSaints Stretcher/Ambulance:** We recommend to disable this resource when using ERS
- ❌ **Improved-Seat-Shuffle-FiveM by Dalrae1:** We recommend to disable this resource when using ERS
- ⚠️ **Anti-cheat:** May cause entity deletion issues. This can be prevented via your anti-cheat settings. Contact your provider

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

