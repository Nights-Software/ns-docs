---
title: "Exports · ERS v1"
description: "The exports other resources can call."
slug: resources/ers/exports
group: ers
lastUpdated: 2026-10-19
---

## Client Exports (`night_ers/client/exports_client.lua`)

```lua
-- Get player status
local isOnShift = exports['night_ers']:getIsPlayerOnShift()
local getPlayerActiveServiceType = exports['night_ers']:getPlayerActiveServiceType()
local isPlayerAttachedToCallout = exports['night_ers']:getIsPlayerAttachedToCallout()

-- Other
exports['night_ers']:playRadioAnimation()
exports['night_ers']:toggleDispatchMessages()
exports['night_ers']:toggleHints()
exports['night_ers']:toggleShift()
exports['night_ers']:ERS_PedEquipWeapon(pedEntityId, weaponModelName, ammo)
-- Removed: getIsPlayerTrackingUnit / trackPlayerCallout (legacy track-unit follow). Use Goal 3 Attach instead.
exports['night_ers']:SetERSVehicleInfoDisplay(display) -- Sets the display for vehicle information on traffic stops to true or false.
exports['night_ers']:SetERSIDCardInfoDisplay(display) -- Sets the display for ID cards to true or false.
```

### Start pursuit (callouts & other integrations)

Use from **client** Lua in resources that `ensure` / `dependency` on `night_ers`. There is no server export for this; if your logic runs on the server, trigger the officer’s client (e.g. your own event) and call the export there.

| Export                   | Notes                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `StartPursuit(pedNetId)` | `pedNetId` is the suspect’s **network id** (e.g. `NetworkGetNetworkIdFromEntity(suspectPed)`). Returns `**true`** if ERS entered pursuit mode, `**false**` if it refused (pursuit disabled in config, player not on **police** service, invalid net id, already in a pursuit or cancel-in-progress, or ped / vehicle data could not be resolved for pursuit init). |

After a successful start, the player is in **pursuit mode** and you can use `**RequestNPCPursuitBackup`** / `**CancelNPCPursuitBackup**` as documented below.

```lua
local netId = NetworkGetNetworkIdFromEntity(suspectPed)
local started = exports['night_ers']:StartPursuit(netId)
```

### NPC backup — pursuit & service (other resources)

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

:::note[Service backup casing]
You can pass any casing (e.g. `"Tow"` or `"TOW"`). `night_ers` normalizes `backupType` internally for both request and cancel. Pursuit `unitType` still must match config exactly unless you customize `PursuitType` strings.
:::

:::tip[Toggle cancel (pursuit)]
Calling `RequestNPCPursuitBackup` again with the **same** `unitType` while a pursuit backup is already pending **cancels** that request (returns `dispatched`, `reason`). Use `CancelNPCPursuitBackup` when you want to cancel without knowing the pending type.
:::

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

## Server Exports (`night_ers/server/exports_server.lua`)

```lua
-- Shift management
exports['night_ers']:toggleShift(source, shiftType) -- "police", "ambulance", "fire", "tow"
exports['night_ers']:setPlayerCalloutOffersEnabled(source, enabled)

-- Advanced programming exports:
exports['night_ers']:getCallouts() -- Returns a json ready table of all callouts in the callouts/plugins/*.lua folder. (Without functions!)
exports['night_ers']:createCallout(callout) -- Only use if you know what you are doing, this allows you to adjust some variables to when spawning callouts via an external program.

-- Custom callouts / pack server Lua — see **Spawning Smart Fires (server)** for the safe exports.

-- Scripted callout *offer* (recommended for integrations — returns whether the prompt was shown):
local ok, reason = exports['night_ers']:SendCalloutOfferToPlayer(source, optionalCalloutId, optionalTimeoutMs)
```

### `createCallout` vs `SendCalloutOfferToPlayer` (server scripts)

:::note
**`createCallout`** makes a **new** callout preset in memory by copying an existing definition. It merges things like **`CalloutLocations`**, **`PedWeaponData`**, and AI / loot rolls. You only get `{ calloutId = "<new-key>" }`. It never checks the player — not shift, job, distance, “already busy”, or whether callouts are on. Nobody gets a popup; **you** spawn or drive the scenario from your own script.
:::

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

### Spawning Smart Fires (server)

This is for **custom callouts**: if you write your own Lua (in `night_ers` callout plugins, a **separate callout pack** resource, or any other server script that participates in building a callout) and you need to **start** a Smart Fires fire or smoke.

If you use **Smart Fires** or **Smart Fires Lite** with ERS, **stock callouts** already handle setup and cleanup—you do not need these exports unless **your script** creates the flame or smoke.

Use the **bridge helpers** below. They are the **only** sanctioned way to spawn callout fires: they pick the right Smart Fires version (full / Lite / v2), pace creation safely on v2, and validate that Smart Fires is actually running. **You** then append the returned id to your `fireList` / `smokeList` so ERS can track it for the HUD, NPC backup and end-of-scene cleanup. Calling `exports['SmartFires']:CreateFire(...)` directly inside a callout will spawn a fire that **ERS does not track**: no HUD slot, no NPC backup, no cleanup at the end of the scene.

**`GetFireConfig()`:** Call `exports['night_ers']:GetFireConfig()` on the server when you need size/type values. It exposes the **same tables** core fire callouts draw from so your random sizes and fire types stay consistent. The example below uses the returned booleans only to distinguish **full Smart Fires** from **Lite** sizing (you can paste that pattern verbatim).

| Export | What you pass in | What you get back |
| ------ | ---------------- | ----------------- |
| `ERS_AddCalloutFire` | World position, fire type (string), size, optional `{ interiorId = number, routingBucket = number }` | **Fire / incident id** — append it to your `fireList` yourself (`fireList[#fireList + 1] = id`). Returns **nothing** if Smart Fires is turned off in ERS or the fire resource is not running. |
| `ERS_AddCalloutSmoke` | World position, smoke type (string), size, optional `{ routingBucket = number }` | **Smoke id** — append it to your `smokeList` yourself. Returns **nothing** if unavailable. |
| `ERS_StopCalloutFire` | Id you received when creating the fire | Stops the fire mid-callout. Returns `true` on success. **You** remove the id from your `fireList` if you want it gone from ERS's tracking. On **Smart Fires v2**, pass the **exact string** the helper returned (e.g. `"o9"`). |
| `ERS_GetSmartFireIncidentStatus` | Same id string as above | **Smart Fires v2 only** — whether that id is still active, merged into another fire, or gone (for custom callout scripts). |
| `ERS_CountOutstandingFireTargets` | `fireList` table from your callout | **Smart Fires v2 only** — how many **live `fireList` slots** remain. |

:::caution
**Why you append the id yourself.** FiveM serializes table arguments across resources via msgpack — when a callout pack calls `exports['night_ers']:ERS_AddCalloutFire(...)`, any table the helper mutates is a **copy** that never propagates back to the pack's `fireList`. The only pattern that works correctly for both in-resource callouts and external packs is: helper returns the id, **caller** appends it to its own list in its own VM. Do not skip the append step — without it, ERS sees an empty `fireList` and the HUD will display `0/0` even though Smart Fires has live incidents.
:::

**Fire merging (Smart Fires v2):** every fire you spawn uses Smart Fires' default behaviour, which includes **native merge** — when two `ERS_AddCalloutFire` calls land close enough to each other, Smart Fires absorbs one into the other and the bridge tracks the surviving host id. The HUD then shows one task for the merged front, not two. If your callout needs each spawn to stay a distinct front on the HUD, space the coords **beyond the merge radius** rather than fighting the merge. On **Smart Fires** (full v1) and **Smart Fires Lite** there is no merge to worry about — those products treat each `CreateFire` as independent.

**Routing buckets:** live callouts omit `routingBucket` (world bucket `0`). Callout Creator Preview passes the author's private bucket so Smart Fires / Lite / v2 isolate the instance. Older Smart Fires builds without `NotifyRoutingBucketChanged` keep Creator Preview on local PTFX.

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

:::tip
**You append the id, ERS does the rest.** `fireList[#fireList + 1] = ERS_AddCalloutFire(...)` is safe even when the helper returns nil — Lua treats `t[#t + 1] = nil` as a no-op, so a Smart Fires outage silently skips the entry instead of leaving a hole. ERS stops everything still listed when the callout ends.

Call **`ERS_StopCalloutFire`** only if your script removes a fire before the callout ends (e.g. one fire is extinguished by a scripted suppression while the rest of the scene keeps burning). The helper returns `true` on success; remove the id from your `fireList` yourself if you want ERS to forget it (otherwise teardown will see the already-stopped id and skip it silently).

**Smart Fires v2:** the id the helper returns is the **exact string** Smart Fires returned from `CreateFire` (e.g. `"o9"`). Keep it intact if you store it elsewhere.

**Task list / HUD (v2):** ERS counts **one task per distinct incident** (matches the Smart Fires blip on the minimap). If your callout spawns 4 fires spaced far enough apart that none of them merge, the HUD shows `4/4` and the numerator drops to `3/4` when the first incident's last flame dies. When spawns are close enough that Smart Fires merges them, the merged front counts as **one** slot on the HUD, not two — the bridge resolves the canonical incident id via Smart Fires' `GetCanonicalIncidentId` export and dedupes before counting. The baseline can grow if a callout discovers additional incidents at runtime but it never shrinks until cancel. Callout completion fires when every incident is fully out.

Spread children (the extra flames wind blows into nearby trees / cars) share their parent incident, so they don't increment the HUD. They still **count** in the sense that firefighters fight them and the incident stays on the HUD until they're all out — but a spread child burning itself out from `airDecay` won't make the HUD jump.
:::
