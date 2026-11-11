---
title: "Functions & Events · ERS v1"
description: "The open source functions and events, and the ERS functions reference."
slug: resources/ers/functions-and-events
group: ers
lastUpdated: 2026-10-19
---

## Open Source Functions / Events

### Client Functions / Events (`night_ers/client/c_functions.lua`)

#### Event Triggers

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

### Server Functions / Events (`night_ers/server/s_functions.lua`)

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

### Hospital drop-off (stretcher)

Drop-off zones: `night_ers/config/stretcher-config.lua` (`StretcherDropOffLocations`, `StretcherDropOffRadius`).

#### Third-party stretcher

Trigger on the **player’s client** when at a drop-off zone:

```lua
TriggerEvent('ErsIntegration::DeliverPedToHospital', NetworkGetNetworkIdFromEntity(pedEntity))
```

Server must accept the request: player **on shift**, inside drop-off radius, within **25 m** of the patient, patient is an **ERS NPC** (not a player).

#### Built-in ERS stretcher

Use **`dropoffped`** (default: **Enter**) at the same drop-off zones. Patient must be on your stretcher.

#### On success

Server event (listen in `s_functions.lua` or your resource):

```lua
AddEventHandler("ErsIntegration::OnPersonDeliveredToHospital", function(src, pedData)
    -- rewards, logs, etc.
end)
```

ERS removes the NPC and updates **`persons_delivered_to_hospital`** when leaderboard stats are enabled.

## ERS Functions Reference

### Client Functions

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

### Server Functions

| Function                                                           | Description                 |
| ------------------------------------------------------------------ | --------------------------- |
| `ERS_CreatePed(model, coords, heading)`                            | Create synchronized ped     |
| `ERS_CreateObject(model, coords, heading)`                         | Create synchronized object  |
| `ERS_CreateVehicle(model, vehType, coords, vehHeading)`            | Create synchronized vehicle |
| `ERS_GetRandomCoordinateWithinRangeOfCoordinate(coords, diameter)` | Get random coordinates      |
| `ERS_GetRandomModel(modelList)`                                    | Select random model         |
