---
title: "Exports: Client · Night Shifts MDT"
description: "The client-side exports."
slug: resources/nightShifts/exports-client
group: scripts
lastUpdated: 2026-08-13
---

**When to use:** Client scripts on the same machine as the player.

**When not to:** Server integrations — use server exports.

## `IsMenuOpen`

Parameters

none.

Returns

sync boolean — is the MDT tablet open?

Example

```lua
if exports['night_shifts_mdt']:IsMenuOpen() then
  print('tablet is open')
end
```

## `OpenMenu`

Parameters

none.

Returns

none.

Example

```lua
exports['night_shifts_mdt']:OpenMenu()
```

## `CloseMenu`

Parameters

none.

Returns

none.

Example

```lua
exports['night_shifts_mdt']:CloseMenu()
```

## `ToggleMenu`

Parameters

none.

Returns

none.

Example

```lua
exports['night_shifts_mdt']:ToggleMenu()
```

## `ForwardCallToMDT (client)`

Client helper; still creates the call **server-side**. Same `callData` fields as the server export.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callData | table | yes | Same shape as server `ForwardCallToMDT` |

Returns

none on the client (the server creates the call).

Example

```lua
exports['night_shifts_mdt']:ForwardCallToMDT({
  callType = 'Traffic Collision',
  description = 'Two-vehicle RTC',
  x = 215.4, y = -810.2, z = 30.7,
  requiresPolice = 1, requiresAmbulance = 1,
})
```

## `IsOnPoliceShift`

Parameters

none.

Returns

sync boolean for the local player.

Example

```lua
if exports['night_shifts_mdt']:IsOnPoliceShift() then
  exports['night_shifts_mdt']:OpenMenu()
end
```

## `IsOnAmbulanceShift`

Example

```lua
if exports['night_shifts_mdt']:IsOnAmbulanceShift() then
  print('on ambulance shift')
end
```

## `IsOnFireShift`

Example

```lua
if exports['night_shifts_mdt']:IsOnFireShift() then
  print('on fire shift')
end
```

## `IsOnTowShift`

Example

```lua
if exports['night_shifts_mdt']:IsOnTowShift() then
  print('on tow shift')
end
```

## `IsOnCouncilShift`

Example

```lua
if exports['night_shifts_mdt']:IsOnCouncilShift() then
  print('on council shift')
end
```

## `GetPlayerCallsign`

Parameters

none.

Returns

sync string or nil.

Example

```lua
local callsign = exports['night_shifts_mdt']:GetPlayerCallsign()
print(callsign)
```

## `GetCurrentLanguage (client)`

Same return as the server read.

Example

```lua
print(exports['night_shifts_mdt']:GetCurrentLanguage())
```

## `GetAvailableLanguages (client)`

Example

```lua
local languages = exports['night_shifts_mdt']:GetAvailableLanguages()
print(languages[1])
```

## `GetDepartments (client)`

Example

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
print(#depts)
```
