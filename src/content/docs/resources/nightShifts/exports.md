---
title: "Exports · Night Shifts MDT"
description: "For developers: which export path to use, worked scenarios and the events."
slug: resources/nightShifts/exports
group: scripts
lastUpdated: 2026-08-13
---

:::caution
**For developers only.** Use this section if you are writing or integrating another FiveM resource (CAD, dispatch bridge, AI) that must call the MDT from Lua. Normal install: set up `server.cfg`, configure the MDT in-game, and edit the Lua config files above. You can ignore Exports unless your team is adding custom code.
:::

:::note[Support rule]
Exports documented here (and in the resource file `docs/EXPOSED_EXPORTS.md`) are the supported integration API. If it is not documented here, treat it as unsupported (it may change without notice).
:::

- [Exports: Reads](/resources/nightShifts/exports-reads/) — The read exports: settings, identity and PNC boards, duty, roster and calls.
- [Exports: System Writes](/resources/nightShifts/exports-system-writes/) — The write exports for systems such as a CAD or dispatch bridge.
- [Exports: Officer Writes](/resources/nightShifts/exports-officer-writes/) — The write exports that act as an on-duty officer.
- [Exports: Client](/resources/nightShifts/exports-client/) — The client-side exports.

## Which path

Pick a path **before** you pick a function name.

| You are | Use | First argument | Audit stamp |
| -------- | --- | -------------- | ----------- |
| A tablet or CAD terminal a player is using | Officer / terminal (`*ByServerId`) | That player’s `source` | Their Rockstar license |
| Another resource with no player (AI dispatch, ERS, webhook, cron) | System writes (no `ByServerId`, no `source`) | Payload table only | `system:<your resource>` |
| Only reading or listening | Reads and Events | None | None |

:::caution
Do not `UPDATE nsmdt_calls` or write `assignedUnits` yourself — that is why open MDTs go stale. `assignedUnits` is a denormalized object blob plus `nsmdt_call_units` rows, not a JSON array of callsign strings. Do not fire internal NUI/net events to “refresh”. Do not pass a fake `source` into `*ByServerId` to impersonate a dispatcher. Do not call a system export from a terminal when the click must be that officer. Shift clock-in/out, callsign, and own status have no system twin — `serverId` is the subject.
:::

There is no extra dispatcher login and no hidden dispatcher-only API. Dispatch for a human is rank permissions on a clocked-in officer (`dispatch.assign_units`, `dispatch.resolve_call`, …). An automated dispatcher is the system path.

### Shared contracts

- **Call pattern:** `exports['night_shifts_mdt']:ExportName(...)` — use the **colon**. Dot or bracket calls can drop the first argument on CitizenFX.
- **Writes:** `callback(ok, resultOrError)` — `ok == true` and `result` is a table, or `ok == false` and the second arg is an error string. Exception: `ForwardCallToMDT` returns the new call id as a **number** in the second arg.
- **Board / catalogue reads:** pass a callback. The list arrives in that function (MySQL). Do not document or rely on the no-callback memory snapshot.
- **System audit:** `performedBy` is `system:<your resource folder>`. User FK columns (`issuedBy`, `createdBy`, `executedBy`, …) stay `NULL`.
- **Officer:** first arg is a connected, clocked-in `source`. Audit is that player’s license. Creates infer `departmentId` from the active shift.
- **Trust model:** any started server resource can call these. There is no allowlist.
- **Identity:** civilians are `nsmdt_civilians` rows (`id` / `personalId`). Vehicles belong to a civilian (`civId`). Warrants, flags, and fines target `civId`. Do not invent rows with SQL.

### How to read a card

Every export below is a **server** Lua call unless the heading says Client. Each card has a **copy-paste Example** under the tables — that is the call you write.

| Word on the card | What you write | What you get |
| ---------------- | -------------- | ------------ |
| **sync** | `local x = exports['night_shifts_mdt']:GetVersion()` | The value is the **return** of the export. No callback. |
| **callback** (reads) | `exports['night_shifts_mdt']:GetPenalCodes(function(rows) … end)` | The list arrives **inside** that function. The export itself returns nothing useful. |
| **callback ok / fail** (writes) | `exports['night_shifts_mdt']:SetCallStatus({ … }, function(ok, result) … end)` | `ok == true` → `result` is a table. `ok == false` → `result` is an error string. |

### Pairing index (same job, two exports)

| Job | System (no player) | Officer / terminal |
| --- | ------------------ | ------------------ |
| Assign unit to call | `AssignUnitToCall` | `AssignUnitToCallByServerId` |
| Detach unit | `DetachUnitFromCall` | `DetachUnitFromCallByServerId` |
| Resolve or reopen call | `SetCallStatus` | `SetCallStatusByServerId` |
| Archive resolved call | `ArchiveCall` | `ArchiveCallByServerId` |
| Edit call details | `EditCall` | `EditCallByServerId` |
| Add or delete call note | `AddCallNote` / `DeleteCallNote` | `AddCallNoteByServerId` / `DeleteCallNoteByServerId` |
| Unit on-call status | `SetUnitOnCallStatus` | `SetUnitOnCallStatusByServerId` |
| Create / cancel / execute / update warrant | `CreateWarrant` / `CancelWarrant` / `ExecuteWarrant` / `UpdateWarrant` | same names + `ByServerId` |
| Create or toggle flag | `CreateFlag` / `SetFlagActive` | same names + `ByServerId` |
| Create or mark fine paid | `CreateFine` / `MarkFinePaid` | same names + `ByServerId` |
| Record and charges | `CreateCriminalRecord` / `AddCharge` / `UpdateCharge` | same names + `ByServerId` |
| Vehicle BOLO | `SetVehicleBolo` | `SetVehicleBoloByServerId` |
| ANPR registry | `AddANPRRegistry` / `RemoveANPRRegistry` | same names + `ByServerId` |
| Medical / licenses / notes / bulletins / council | unsuffixed names | same names + `ByServerId` |

Create-call has no officer twin: `ForwardCallToMDT` is already a system write.

## Worked scenarios

<details>
<summary>AI / system dispatch</summary>

```lua
local mdt = exports['night_shifts_mdt']

AddEventHandler('nightshifts:mdt:server:callCreated', function(callId, call)
  print(('AI saw call %s (%s)'):format(callId, call.callType))
end)

mdt:ForwardCallToMDT({
  callType = 'Welfare Check',
  description = 'Neighbour reports no answer at the door.',
  x = 215.4, y = -810.2, z = 30.7,
  postal = '7284', street = 'San Andreas Ave', zone = 'Downtown',
  callerName = 'AI Dispatch', contactDetails = 'system',
  requiresPolice = 1, requiresAmbulance = 0,
  requiresFire = 0, requiresTow = 0, requiresCouncil = 0,
  priority = 3,
}, function(ok, callId)
  if not ok then return print(callId) end
  mdt:AssignUnitToCall({ callId = callId, callsign = 'L-42' }, function(ok2, err)
    if not ok2 then return print(err) end
    mdt:AddCallNote({ callId = callId, note = 'Assigned by AI CAD (my_ai_dispatch)' }, function()
      mdt:SetCallStatus({ callId = callId, status = 'resolved' }, function(ok3)
        if ok3 then mdt:ArchiveCall({ callId = callId, reason = 'Complete' }) end
      end)
    end)
  end)
end)
```

</details>

<details>
<summary>Officer terminal (warrant)</summary>

```lua
local mdt = exports['night_shifts_mdt']
if not mdt:HasPermissionByServerId(source, 'pnc.registration') then return end
mdt:CreateWarrantByServerId(source, {
  civId = 42,
  warrantType = 'arrest',
  reason = 'Assault — issued from CAD terminal',
  expiresAt = '2027-06-01 00:00:00',
}, function(ok, result)
  if not ok then return print(result) end
  print('warrant', result.warrantNumber)
end)
```

</details>

<details>
<summary>Read + event catch-up</summary>

```lua
AddEventHandler('onResourceStart', function(res)
  if res ~= GetCurrentResourceName() then return end
  local calls = exports['night_shifts_mdt']:GetActiveCalls()
  print('catch-up active calls', #calls)
end)
AddEventHandler('nightshifts:mdt:server:callUpdated', function(callId, call)
  print('updated', callId, call.callStatus)
end)
```

</details>

## Events

**When to use:** React live when a call or PNC row is created or updated. Subscribe with **server** `AddEventHandler` (not `RegisterNetEvent`).

**When not to:** Do not `TriggerEvent` these yourself to “refresh” the MDT.

| Event | Fired when | Args |
| ----- | ---------- | ---- |
| `nightshifts:mdt:server:callCreated` | New call (including `ForwardCallToMDT`) | `callId`, `call` |
| `nightshifts:mdt:server:callUpdated` | Assign, detach, status, edit, archive, notes | `callId`, `call` |
| `nightshifts:mdt:server:warrantCreated` | Warrant insert | `warrantId`, `payload` |
| `nightshifts:mdt:server:warrantUpdated` | Cancel / execute / edit | `warrantId`, `payload` |
| `nightshifts:mdt:server:flagCreated` | Flag insert | `flagId`, `payload` |
| `nightshifts:mdt:server:flagUpdated` | Flag active toggle | `flagId`, `payload` |
| `nightshifts:mdt:server:fineCreated` | Fine insert | `fineId`, `payload` |
| `nightshifts:mdt:server:fineUpdated` | Mark paid | `fineId`, `payload` |
| `nightshifts:mdt:server:recordCreated` | Criminal record insert | `recordId`, `payload` |
| `nightshifts:mdt:server:recordUpdated` | Charge added | `recordId`, `payload` |

```lua
AddEventHandler('nightshifts:mdt:server:callCreated', function(callId, call)
  print('new call', callId, call.callType)
end)
AddEventHandler('nightshifts:mdt:server:warrantCreated', function(warrantId, payload)
  print('warrant', warrantId, payload.warrantNumber)
end)
```

Use `GetActiveCalls` / `GetCallById` for catch-up after your resource starts.
