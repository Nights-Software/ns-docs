---
title: "Exports: Reads · Night Shifts MDT"
description: "The read exports: settings, identity and PNC boards, duty, roster and calls."
slug: resources/nightShifts/exports-reads
group: scripts
lastUpdated: 2026-08-13
---

**When to use:** Look up identity, boards, duty, settings, or catch up after an event.

**When not to:** Do not use reads to mutate state.

Two styles:

- **Returns a value** (`GetVersion`, `GetDepartments`, `GetActiveCalls`) — assign it.
- **Takes a callback** (`GetPenalCodes`, `GetActiveFlagsMarkers`, person-file reads) — the rows arrive in that function. That is the real data (MySQL). Without a callback you only get a warm memory snapshot, which can be empty after a restart.

## Version, settings, translations, departments

These are **sync** except the three catalogues at the bottom (`GetPenalCodes`, `GetFlagTypes`, `GetLicenseTypes`).

### `GetVersion`

Resource version from `fxmanifest.lua`. Use it to require a minimum MDT build.

Parameters

none.

Returns

sync string, e.g. `"1.4.9"`.

Example

```lua
local version = exports['night_shifts_mdt']:GetVersion()
print(version)
```

### `GetSetting`

One Admin → MDT Settings value.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| key | string | yes | See common keys below |

Returns

sync value (string, number, or boolean), or the default, or nil if unknown.

Common keys (not a complete list — `GetAllSettings` has every key):

| Key | Typical value |
| --- | ------------- |
| `currency` | `USD`, `EUR`, `GBP`, … |
| `currencyPosition` | `before` or `after` |
| `timeFormat` | `12h` or `24h` |
| `dateFormat` | `short`, `long`, `numeric-iso`, … |
| `speedUnit` | `mph` or `kmh` |
| `tempUnit` | `celsius` or `fahrenheit` |

Example

```lua
local currency = exports['night_shifts_mdt']:GetSetting('currency')
print(currency)
```

### `GetAllSettings`

Same values as `GetSetting`, all at once. This is a **dictionary** (`settings.currency`), not a list. `#settings` is always `0` even when it is full — iterate with `pairs`.

Parameters

none.

Returns

sync table keyed by setting name. Also includes assembled `alertDurations` and normalized `cursorAwayEnabled` / `infoHudEnabled` flags for the tablet.

Example

```lua
local settings = exports['night_shifts_mdt']:GetAllSettings()
print(settings.currency, settings.timeFormat)
for key, value in pairs(settings) do
  print(key, value)
end
```

### `GetCurrencySymbol`

Display symbol for `GetSetting('currency')`. Prefer this over hard-coding `$`.

Parameters

none.

Returns

sync string (`$`, `€`, `£`, `kr`, …). Unknown codes fall back to `$`.

Example

```lua
local symbol = exports['night_shifts_mdt']:GetCurrencySymbol()
print(symbol)
```

### `GetCurrentLanguage`

Active translation code.

Parameters

none.

Returns

sync string (`en`, `de`, `fr`, …).

Example

```lua
local lang = exports['night_shifts_mdt']:GetCurrentLanguage()
print(lang)
```

### `GetAvailableLanguages`

Every locale file the resource loaded.

Parameters

none.

Returns

sync array of language-code strings.

Example

```lua
local languages = exports['night_shifts_mdt']:GetAvailableLanguages()
print(languages[1])
```

### `GetDepartments`

Active departments only (clock-in pickers). Archived departments stay in cache for PNC joins but are **not** in this list.

Parameters

none.

Returns

sync array. Each row includes:

| Field | Type | Notes |
| ----- | ---- | ----- |
| `id` | number | Use this as `departmentId` on writes |
| `departmentName` | string | e.g. `Los Santos Police Department` |
| `departmentShortName` | string | e.g. `LSPD` |
| `departmentType` | string | `police`, `ambulance`, `fire`, `tow`, `council` |
| `departmentColor` | string | hex |
| `isActive` | number/bool | always on in this list |

Example

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
print(#depts, depts[1] and depts[1].departmentName)
```

### `GetRanksByDepartmentId`

Ranks for one department (clock-in / `StartShiftByServerId`).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | `depts[i].id` |

Returns

sync array of rank rows (`id`, `departmentId`, `rankName`, `rankShortName`, …). Empty `{}` if the id is unknown.

Example

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
local ranks = exports['night_shifts_mdt']:GetRanksByDepartmentId(depts[1].id)
print(ranks[1] and ranks[1].rankName)
```

### `GetSubDepartmentsByDepartmentId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | |

Returns

sync array of sub-department rows (`id`, `departmentId`, `subDepartmentName`, `subDepartmentShortName`, …). Empty `{}` if none.

Example

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
local subs = exports['night_shifts_mdt']:GetSubDepartmentsByDepartmentId(depts[1].id)
print(#subs)
```

### `GetPenalCodes`

Charge / fine pick-list. **Callback required.**

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(codes)` |

Returns

none as a return value. `callback` receives an array of penal-code rows (`id`, `codeNumber`, `title`, …). Use `id` as `penalCodeId` on fines and charges.

Example

```lua
exports['night_shifts_mdt']:GetPenalCodes(function(codes)
  print(#codes, codes[1] and codes[1].codeNumber)
end)
```

### `GetFlagTypes`

Enabled PNC flag types. **Callback required.**

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(types)` |

Returns

none as a return value. `callback` receives enabled flag-type rows. Use the type id/string as `flagType` on `CreateFlag`.

Example

```lua
exports['night_shifts_mdt']:GetFlagTypes(function(types)
  print(#types, types[1] and types[1].id)
end)
```

### `GetLicenseTypes`

Enabled license types. **Callback required** — same pattern as `GetPenalCodes` / `GetFlagTypes`. No useful return value.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(rows)` |

Returns

none as a return value. `callback` receives license-type rows. Use the type id/string as `licenseType` on `IssueLicense`.

Example

```lua
exports['night_shifts_mdt']:GetLicenseTypes(function(rows)
  print(#rows, rows[1] and rows[1].id)
end)
```

## Identity and PNC boards

### `GetCivilianIntegrationSnapshot`

Full civilian plus related snapshot (licenses, vehicles, …).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | `nsmdt_civilians.id` |
| callback | function | yes | `function(snapshot)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | snapshot table, or empty / nil if unknown |

Example

```lua
exports['night_shifts_mdt']:GetCivilianIntegrationSnapshot(42, function(snapshot)
  print(snapshot and snapshot.id)
end)
```

### `GetCivilianByPersonalId`

Lookup by public dossier id (e.g. `CIV-…`).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| personalId | string | yes | |
| callback | function | recommended | `function(civ)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | civilian row (`id`, `civilianId`, `personalId`, `isFrameworkLinked`, …) or nil |
| sync | same row from cache, or nil |

Example

```lua
exports['night_shifts_mdt']:GetCivilianByPersonalId('CIV-1001', function(civ)
  print(civ and civ.id, civ and civ.firstName)
end)
```

### `GetCivilianByFrameworkId`

Alias: `GetCivilianByIdentifier`.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| frameworkId | string | yes | ESX `identifier` or QB/QBox `citizenid` |
| callback | function | recommended | `function(civ)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | decorated civilian row or nil |
| sync | cache hit or nil |

Example

```lua
exports['night_shifts_mdt']:GetCivilianByFrameworkId('char1:abc123', function(civ)
  print(civ and civ.id)
end)
```

### `GetCiviliansByServerId`

All MDT person-files linked to that player’s Rockstar license.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | Connected player |
| callback | function | recommended | `function(civs)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of decorated civilian rows |
| sync | cache array (may be empty) |

Example

```lua
exports['night_shifts_mdt']:GetCiviliansByServerId(source, function(civs)
  print(#civs, civs[1] and civs[1].personalId)
end)
```

### `GetCiviliansByLicense`

Same as `GetCiviliansByServerId`, but you pass the license string.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| rockstarLicense | string | yes | |
| callback | function | recommended | `function(civs)` |

Returns

same as `GetCiviliansByServerId`.

Example

```lua
exports['night_shifts_mdt']:GetCiviliansByLicense('license:abc123', function(civs)
  print(#civs)
end)
```

### `ResolveFrameworkLinkedCivilianByServerId`

Best framework-linked civilian for that player. No license fallback — `frameworkId` match only.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| callback | function | recommended | `function(civ)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | one civilian row or nil |
| sync | one civilian row or nil |

Example

```lua
exports['night_shifts_mdt']:ResolveFrameworkLinkedCivilianByServerId(source, function(civ)
  print(civ and civ.id)
end)
```

### `SearchCivilians`

Substring search. Query must be at least 2 characters. Limit capped at 50.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| query | string | yes | Name, personal id, framework id, or numeric civ id |
| limitOrOpts | number or table | no | number, or `{ limit = n }` |
| callback | function | yes | `function(rows)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of `{ civilianId, firstName, lastName, personalId, frameworkId, isFrameworkLinked }` |
| sync | none |

Example

```lua
exports['night_shifts_mdt']:SearchCivilians('Smith', 20, function(rows)
  print(#rows, rows[1] and rows[1].personalId)
end)
```

### `GetVehiclesByCivilianId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(vehicles)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of vehicle rows |
| sync | cache array |

Example

```lua
exports['night_shifts_mdt']:GetVehiclesByCivilianId(42, function(vehicles)
  print(#vehicles, vehicles[1] and vehicles[1].licensePlate)
end)
```

### `GetLicensesByCivilianId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | yes | `function(licenses)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of issued license rows |

Example

```lua
exports['night_shifts_mdt']:GetLicensesByCivilianId(42, function(licenses)
  print(#licenses, licenses[1] and licenses[1].licenseNumber)
end)
```

### `GetAllFlagsMarkersByCivilianId`

All flags for a civilian (active and inactive).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(flags)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of flag rows |
| sync | cache array |

Example

```lua
exports['night_shifts_mdt']:GetAllFlagsMarkersByCivilianId(42, function(flags)
  print(#flags)
end)
```

### `GetPoliceRecordsByCivilianId`

Criminal records for a civilian (`nsmdt_criminal_records`).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(records)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of record rows (MySQL) |
| sync | warm-cache array |

Example

```lua
exports['night_shifts_mdt']:GetPoliceRecordsByCivilianId(42, function(records)
  print(#records)
end)
```

### `GetActiveWarrants`

Every **active** warrant in the database (all departments, no 31-day cut). The tablet “Active” card is the loaded list for this department — those counts can differ.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| limitOrOpts | number or table | no | e.g. `500` or `{ limit = 500 }` |
| callback | function | yes | `function(warrants)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of active warrant rows |
| sync | none |

Example

```lua
exports['night_shifts_mdt']:GetActiveWarrants(500, function(warrants)
  print(#warrants)
end)
```

### `GetActiveFlagsMarkers`

Active, unexpired PNC flags.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(flags)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of flag rows (MySQL, up to 500) |

Example

```lua
exports['night_shifts_mdt']:GetActiveFlagsMarkers(function(flags)
  print(#flags)
end)
```

### `GetActiveVehicleBolos`

Vehicles with BOLO set.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(bolos)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of vehicle rows (`bolo = 1`) |

Example

```lua
exports['night_shifts_mdt']:GetActiveVehicleBolos(function(bolos)
  print(#bolos)
end)
```

### `GetActiveANPRRegistry`

Active ANPR watchlist plates.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(plates)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of registry rows |

Example

```lua
exports['night_shifts_mdt']:GetActiveANPRRegistry(function(plates)
  print(#plates)
end)
```

### `LookupVehicleByPlate`

Plate to vehicle record.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| plate | string | yes | Spaces and dashes ignored |
| callback | function | recommended | `function(vehicle)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | vehicle row or nil |
| sync | cache hit or nil |

Example

```lua
exports['night_shifts_mdt']:LookupVehicleByPlate('ABC 123', function(vehicle)
  print(vehicle and vehicle.id, vehicle and vehicle.licensePlate)
end)
```

### `GetCivilianByPlate`

Plate to registered owner.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| plate | string | yes | |
| callback | function | recommended | `function(civ)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | civilian row or nil |
| sync | cache hit or nil |

Example

```lua
exports['night_shifts_mdt']:GetCivilianByPlate('ABC 123', function(civ)
  print(civ and civ.id)
end)
```

### `GetANPRHitLog`

Recent ANPR detections.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| limitOrOpts | number or table | no | `{ limit, offset }` |
| callback | function | yes | `function(hits)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of hit-log rows |

Example

```lua
exports['night_shifts_mdt']:GetANPRHitLog({ limit = 50 }, function(hits)
  print(#hits)
end)
```

## Duty, roster, and calls

### `GetUserShiftData`

Shift plus identity for one player. Empty-ish table if they have no session (`isOnShift = false`, plus `_error`).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns

(sync table)

`serverId`, `rockstarLicense`, `userName`, `nickName`, `adminLevel`, `isOnShift`, `departmentId`, `subDepartmentId`, `rankId`, `callsign`, `statusCode`, `statusLabel`, `statusColor`, `shiftDuration`, `totalShiftTime`, `shiftTimeByDepartment`, `location` (`{ x, y, z }`, not `vector3`), `speed`, `heading`, `compassDirection`, `postal`, `street`, `zone`, `modeOfTransport`, `sirens`, `plate`.

Example

```lua
local shift = exports['night_shifts_mdt']:GetUserShiftData(source)
print(shift.isOnShift, shift.callsign, shift.location and shift.location.x)
```

### `GetActiveShiftByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns

| Path | Value |
| ---- | ----- |
| sync | active shift row or nil |

Example

```lua
local row = exports['night_shifts_mdt']:GetActiveShiftByServerId(source)
print(row and row.callsign)
```

### `GetCurrentShiftDurationByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns

| Path | Value |
| ---- | ----- |
| sync | number of seconds (0 if off shift) |

Example

```lua
local seconds = exports['night_shifts_mdt']:GetCurrentShiftDurationByServerId(source)
print(seconds)
```

### `GetPostalForPlayer`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns

| Path | Value |
| ---- | ----- |
| sync | nearest postal string or nil |

Example

```lua
local postal = exports['night_shifts_mdt']:GetPostalForPlayer(source)
print(postal)
```

### `HasPermissionByServerId`

Rank permission check for the player’s **current** department. Off-shift is always `false`.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| permission | string | yes | e.g. `pnc.registration` |

Returns

| Path | Value |
| ---- | ----- |
| sync | boolean |

Example

```lua
if exports['night_shifts_mdt']:HasPermissionByServerId(source, 'pnc.registration') then
  print('officer can register PNC')
end
```

### `GetActiveShifts / GetOnDutyUnits`

Same data: every clocked-in unit. `GetOnDutyUnits` is an alias.

Parameters

none.

Returns

| Path | Value |
| ---- | ----- |
| sync | array of `{ serverId, rockstarLicense, userName, nickName, shift, location, postal, street, … }` |

Example

```lua
local units = exports['night_shifts_mdt']:GetActiveShifts()
print(#units, units[1] and units[1].callsign)
-- alias:
-- local units = exports['night_shifts_mdt']:GetOnDutyUnits()
```

### `GetDepartmentRoster`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | |
| callback | function | recommended | `function(members)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of roster members |
| sync | depends on implementation; prefer the callback |

Example

```lua
exports['night_shifts_mdt']:GetDepartmentRoster(1, function(members)
  print(#members)
end)
```

### `GetActiveCalls`

Cache snapshot of **active, non-archived** calls. Use this for event catch-up. Live board source.

Parameters

none.

Returns

| Path | Value |
| ---- | ----- |
| sync | array of call rows (`id`, `callType`, `callStatus`, `x`, `y`, `z`, `postal`, …) |

Example

```lua
local calls = exports['night_shifts_mdt']:GetActiveCalls()
print(#calls, calls[1] and calls[1].callType)
```

### `GetCallById`

One call from the live cache (may be nil if archived or unknown).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | |

Returns

| Path | Value |
| ---- | ----- |
| sync | call row or nil |

Example

```lua
local call = exports['night_shifts_mdt']:GetCallById(1842)
print(call and call.callStatus)
```

### `GetCallNotes`

Notes oldest-first.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | or pass `callId` as the first number |
| data.limit | number | no | default 50 |
| callback | function | yes | `function(notes)` — **not** `(ok, result)` |

Returns

| Path | Value |
| ---- | ----- |
| callback | array of `{ id, callId, noteText, createdAt, createdBy }` |

Example

```lua
exports['night_shifts_mdt']:GetCallNotes({ callId = 1842, limit = 50 }, function(notes)
  print(#notes)
end)
```

### `GetAllActiveUnits`

On-shift units with distance to the call.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | or `{ callId = n }` |

Returns

| Path | Value |
| ---- | ----- |
| sync | array of `{ serverId, rockstarLicense, userName, nickName, callsign, departmentId, statusCode, location, postal, street, distance }` |

Example

```lua
local units = exports['night_shifts_mdt']:GetAllActiveUnits(1842)
print(#units, units[1] and units[1].distance)
```

### `GetNearbyUnits`

Same as `GetAllActiveUnits`, distance-filtered.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | or `{ callId, maxDistance }` |
| data.maxDistance | number | no | default 2000 |

Returns

same unit shape as `GetAllActiveUnits`, filtered by distance.

Example

```lua
local nearby = exports['night_shifts_mdt']:GetNearbyUnits({ callId = 1842, maxDistance = 2000 })
print(#nearby)
```
