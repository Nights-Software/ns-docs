---
title: "Exports: System Writes · Night Shifts MDT"
description: "The write exports for systems such as a CAD or dispatch bridge."
slug: resources/nightShifts/exports-system-writes
group: scripts
lastUpdated: 2026-08-13
---

## System writes — dispatch

**When to use:** AI CAD, ERS, webhooks — no player is performing the action. Open MDTs update.

**When not to:** A human dispatcher clicking in your terminal — use the `*ByServerId` twin.

Audit: `system:<GetInvokingResource()>`. Capture happens at export entry (safe across MySQL callbacks). `assignedByLicense` on `nsmdt_call_units` has no FK — the system string is stored. `archivedBy` is an integer user/shift id — left `NULL` for system archive.

### `ForwardCallToMDT`

Create a new dispatch call with no acting officer.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callData.callType | string | yes | |
| callData.description | string | yes | |
| callData.x / y / z | number | yes | World coords (`z` may default) |
| callData.postal | string | no | |
| callData.street | string | no | |
| callData.zone | string | no | |
| callData.callerName | string | no | |
| callData.contactDetails | string | no | |
| callData.requiresPolice | number | no | `0` or `1` |
| callData.requiresAmbulance | number | no | `0` or `1` |
| callData.requiresFire | number | no | `0` or `1` |
| callData.requiresTow | number | no | `0` or `1` |
| callData.requiresCouncil | number | no | `0` or `1` |
| callData.priority | number | no | Priority id |
| callback | function | no | `function(ok, callIdOrNil)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `callId` as a **number** (not a table) |
| callback fail | `nil` |
| sync | none |

Example

```lua
exports['night_shifts_mdt']:ForwardCallToMDT({
  callType = 'Traffic Collision',
  description = 'Two-vehicle RTC on the highway, possible injuries.',
  x = 215.4, y = -810.2, z = 30.7,
  postal = '7284', street = 'Olympic Fwy', zone = 'La Mesa',
  callerName = 'DOT camera', contactDetails = 'auto',
  requiresPolice = 1, requiresAmbulance = 1,
  requiresFire = 0, requiresTow = 1, requiresCouncil = 0,
  priority = 2,
}, function(ok, callId)
  if not ok then return print('forward failed') end
  print('callId', callId)
end)
```

### `AssignUnitToCall`

Attach an on-shift unit. Accepts **either** `targetServerId` **or** `callsign` (fails if missing, offline, or not unique). Uses the same cross-call detach queue as the board. `byDispatch = true`.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | Active call |
| data.callsign | string | one of | Must be on shift and unique |
| data.targetServerId | number | one of | Connected and on shift |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, unitLicense, message }` |
| callback fail | error string, e.g. `callsign not found or unit not on shift`, `callsign is not unique`, `target player not found` |
| sync | none |

Example

```lua
exports['night_shifts_mdt']:AssignUnitToCall({
  callId = 1842,
  callsign = 'L-42',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DetachUnitFromCall`

Release a unit. They go **available**.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.callsign | string | one of | |
| data.targetServerId | number | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, message }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:DetachUnitFromCall({
  callId = 1842,
  callsign = 'L-42',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetCallStatus`

Resolve or reopen. Resolve **auto-detaches every unit** and sets them available. Reopen (`active`) does **not** re-attach anyone.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.status | string | yes | `active` or `resolved` |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, status, message }` |
| callback fail | error string, e.g. `status must be active or resolved` |

Example

```lua
exports['night_shifts_mdt']:SetCallStatus({
  callId = 1842,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ArchiveCall`

Call must already be `resolved`. Will not silently archive an active call. `archivedBy` stays `NULL`. Reason is stored and added as a system note.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.reason | string | no | Default `Archived by <resource>` |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, archived = true }` |
| callback fail | `Call not found`, `Call already archived`, `Call must be resolved before archive` |

Example

```lua
exports['night_shifts_mdt']:ArchiveCall({
  callId = 1842,
  reason = 'Complete',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `EditCall`

Update type, description, location, caller, services, or priority.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.callType | string | no | |
| data.description | string | no | |
| data.zone | string | no | |
| data.postal | string | no | |
| data.street | string | no | |
| data.callerName | string | no | |
| data.contactDetails | string | no | |
| data.priority | number | no | |
| data.requiresPolice | number | no | `0` or `1` |
| data.requiresAmbulance | number | no | |
| data.requiresFire | number | no | |
| data.requiresTow | number | no | |
| data.requiresCouncil | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId }` |
| callback fail | `Call not found` or `Failed to edit call` |

Example

```lua
exports['night_shifts_mdt']:EditCall({
  callId = 1842,
  description = 'Updated: two vehicles, one blocking the lane.',
  priority = 2,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddCallNote`

`createdBy` on the note row is `NULL` (FK-safe). Put your resource name in the text so the board is not a blank actor.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.note | string | yes | alias `data.text` |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, noteId }` |
| callback fail | `callId required` or `note required` |

Example

```lua
exports['night_shifts_mdt']:AddCallNote({
  callId = 1842,
  note = 'Assigned by AI CAD (my_ai_dispatch)',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.noteId)
end)
```

### `DeleteCallNote`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.noteId | number | yes | |
| data.callId | number | no | Used to invalidate open tablets |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ noteId, callId }` |
| callback fail | `Note not found` |

Example

```lua
exports['night_shifts_mdt']:DeleteCallNote({
  noteId = 91,
  callId = 1842,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetUnitOnCallStatus`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.unitStatus | string | yes | `en_route` or `on_scene` |
| data.callsign | string | one of | |
| data.targetServerId | number | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, unitStatus, message }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:SetUnitOnCallStatus({
  callId = 1842,
  callsign = 'L-42',
  unitStatus = 'en_route',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

## System writes — PNC, medical, licenses, notes, bulletins, council

**When to use:** Automated PNC / records / council with no officer.

**When not to:** A terminal click that must show that officer as issuer.

`departmentId` is required on warrant / flag / fine / criminal-record creates (`responsibleDepartmentId` is NOT NULL). Fail with `departmentId required` or `Invalid departmentId` if omitted or unknown.

FK rule: `issuedBy` / `createdBy` / `executedBy` on warrants, flags, and fines stay **NULL**. Audit `performedBy` is `system:<resource>`. PNC “issued by” may show N/A.

### `CreateWarrant`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.civId | number | yes | |
| data.warrantType | string | yes | e.g. `arrest` |
| data.reason | string | yes | |
| data.departmentId | number | yes | |
| data.expiresAt | string | no | MySQL datetime |
| data.linkedChargeId | number | no | |
| data.linkedCriminalRecordId | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantNumber }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:CreateWarrant({
  civId = 42,
  warrantType = 'arrest',
  reason = 'Failure to appear — automated warrant',
  departmentId = 1,
  expiresAt = '2027-12-31 23:59:59',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.warrantId, result.warrantNumber)
end)
```

### `UpdateWarrant`

Active warrants only.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| data.reason | string | yes | |
| data.expiresAt | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId }` |
| callback fail | `Failed to update warrant (not found or not active)` |

Example

```lua
exports['night_shifts_mdt']:UpdateWarrant({
  warrantId = 15,
  reason = 'Updated: still outstanding after court date',
  expiresAt = '2027-12-31 23:59:59',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ExecuteWarrant`

`executedBy` stays `NULL`.

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantStatus = 'executed' }` |
| callback fail | `Failed to execute warrant` |

Example

```lua
exports['night_shifts_mdt']:ExecuteWarrant({
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CancelWarrant`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantStatus = 'cancelled' }` |
| callback fail | `Failed to cancel warrant` |

Example

```lua
exports['night_shifts_mdt']:CancelWarrant({
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateFlag`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.civId | number | yes | |
| data.flagType | string | yes | Must exist in flag types |
| data.description | string | yes | |
| data.departmentId | number | yes | |
| data.severity | string | no | e.g. `medium` |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ flagId }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:CreateFlag({
  civId = 42,
  flagType = 'other',
  description = 'Automated flag',
  severity = 'medium',
  departmentId = 1,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetFlagActive`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.flagId | number | yes | |
| data.isActive | boolean or number | yes | `true` / `1` or `false` / `0` |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ flagId, isActive }` (`isActive` is boolean) |
| callback fail | `flagId and isActive required` |

Example

```lua
exports['night_shifts_mdt']:SetFlagActive({
  flagId = 88,
  isActive = false,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateFine`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.civId | number | yes | |
| data.fineDescription | string | yes | |
| data.fineAmount | number | yes | |
| data.fineLocation | string | yes | |
| data.departmentId | number | yes | |
| data.penalCodeId | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ fineId, fineNumber }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:CreateFine({
  civId = 42,
  fineDescription = 'Speeding',
  fineAmount = 250,
  fineLocation = 'Olympic Fwy',
  departmentId = 1,
  penalCodeId = 12,
}, function(ok, result)
  if not ok then return print(result) end
  print(result.fineNumber)
end)
```

### `MarkFinePaid`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.fineId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ fineId, finePaid = true }` |
| callback fail | `Failed to mark fine paid` |

Example

```lua
exports['night_shifts_mdt']:MarkFinePaid({
  fineId = 301,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateCriminalRecord`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.location | string | yes | |
| data.incidentDate | string | yes | Date or datetime |
| data.departmentId | number | yes | |
| data.civId | number | no | |
| data.description | string | no | |
| data.caseStatus | string | no | default `pending` |
| data.investigatingOfficer | string | no | |
| data.courtDate | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ recordId, recordNumber }` |
| callback fail | `location required`, `incidentDate required`, `departmentId required` |

Example

```lua
exports['night_shifts_mdt']:CreateCriminalRecord({
  civId = 42,
  location = 'Olympic Fwy',
  incidentDate = '2026-08-13',
  description = 'Traffic stop — resisted arrest',
  departmentId = 1,
}, function(ok, result)
  if not ok then return print(result) end
  print(result.recordId, result.recordNumber)
end)
```

### `AddCharge`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.criminalRecordId | number | yes | |
| data.penalCodeId | number | no | |
| data.chargeTitle | string | no | alias `chargeTitleSnapshot` |
| data.fineAmount | number | no | default 0 |
| data.jailTime | number | no | |
| data.chargeStatus | string | no | default `pending` |
| data.convictionDate | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ chargeId, criminalRecordId }` |
| callback fail | `criminalRecordId required` |

Example

```lua
exports['night_shifts_mdt']:AddCharge({
  criminalRecordId = 77,
  penalCodeId = 12,
  chargeTitle = 'Speeding',
  fineAmount = 250,
  chargeStatus = 'pending',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.chargeId)
end)
```

### `UpdateCharge`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.chargeId | number | yes | |
| data.chargeStatus | string | no | |
| data.fineAmount | number | no | |
| data.jailTime | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ chargeId }` |
| callback fail | `Failed to update charge` |

Example

```lua
exports['night_shifts_mdt']:UpdateCharge({
  chargeId = 19,
  chargeStatus = 'convicted',
  fineAmount = 500,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetVehicleBolo`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.vehicleId | number | one of | |
| data.plate | string | one of | |
| data.bolo | boolean or number | yes | `true` / `1` to set, `false` / `0` to clear |
| data.boloDescription | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ vehicleId, bolo }` (`bolo` is boolean) |
| callback fail | `vehicleId or plate required`, `Vehicle not found` |

Example

```lua
exports['night_shifts_mdt']:SetVehicleBolo({
  plate = 'ABC 123',
  bolo = true,
  boloDescription = 'Used in a robbery',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddANPRRegistry`

`added_by_license` stores `system:<resource>` (no FK).

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.plate | string | yes | |
| data.reason | string | yes | |
| data.reasonType | string | no | `stolen`, `bolo`, or `custom` |
| data.penalCodeIds | table | no | |
| data.departmentId | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ success = true, action = 'added', entry = { id, plate, reason, reasonType, … } }` |
| callback fail | error string, e.g. `invalid_plate` |

Example

```lua
exports['night_shifts_mdt']:AddANPRRegistry({
  plate = 'ABC 123',
  reason = 'Stolen vehicle',
  reasonType = 'stolen',
  departmentId = 1,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveANPRRegistry`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.entryId | number | one of | |
| data.plate | string | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns

| Path | Value |
| ---- | ----- |
| callback ok | `{ success = true, action = 'removed', entryId }` or `{ success = true, action = 'removed', plate }` |
| callback fail | error string |

Example

```lua
exports['night_shifts_mdt']:RemoveANPRRegistry({
  plate = 'ABC 123',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalAllergy`

Patient writes on `civId`. System path: `createdBy` stays `NULL`. Severity is `mild`, `moderate`, or `severe` (default `moderate`).

Parameters

`civId`, `allergen` required; optional `severity`, `reaction`, `notes`, `callback`.

Returns

callback ok `{ allergyId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalAllergy({
  civId = 42,
  allergen = 'Penicillin',
  severity = 'severe',
  reaction = 'Anaphylaxis',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.allergyId)
end)
```

### `RemoveMedicalAllergy`

Parameters

`id` (allergy row) required; optional `callback`.

Returns

callback ok `{ id, civId }`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalAllergy({
  id = 9,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalDiagnosis`

Diagnosis status is `active`, `chronic`, or `resolved` (default `active`). `diagnosedBy` stays `NULL`.

Parameters

`civId`, `condition` required; optional `status`, `notes`, `callback`.

Returns

callback ok `{ diagnosisId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalDiagnosis({
  civId = 42,
  condition = 'Asthma',
  status = 'chronic',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateMedicalDiagnosis`

Parameters

`id` required; optional `status`, `notes`, `callback`.

Returns

callback ok `{ id }`.

Example

```lua
exports['night_shifts_mdt']:UpdateMedicalDiagnosis({
  id = 4,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveMedicalDiagnosis`

Parameters

`id` required; optional `callback`.

Returns

callback ok `{ id }`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalDiagnosis({
  id = 4,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalTreatment`

Parameters

`civId` and `treatment` (or `summary`) required; optional `treatmentType`, `notes`, `departmentId`, `callback`.

Returns

callback ok `{ treatmentId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalTreatment({
  civId = 42,
  treatment = 'Oxygen on scene',
  treatmentType = 'on_scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalPrescription`

Parameters

`civId`, `medication` required; optional `dosage`, `notes`, `callback`.

Returns

callback ok `{ prescriptionId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalPrescription({
  civId = 42,
  medication = 'Albuterol',
  dosage = '2 puffs',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DiscontinueMedicalPrescription`

Parameters

`id` required; optional `callback`.

Returns

callback ok `{ id }`.

Example

```lua
exports['night_shifts_mdt']:DiscontinueMedicalPrescription({
  id = 6,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalImmunization`

Parameters

`civId`, `vaccine` required; optional `notes`, `callback`.

Returns

callback ok `{ immunizationId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalImmunization({
  civId = 42,
  vaccine = 'Tetanus',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalFlag`

Parameters

`civId`, `flagType` required; optional `details` / `notes`, `callback`.

Returns

callback ok `{ flagId, civId }`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalFlag({
  civId = 42,
  flagType = 'dnr',
  notes = 'On file from hospital',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveMedicalFlag`

Parameters

`id` required; optional `callback`.

Returns

callback ok `{ id }`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalFlag({
  id = 3,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateMedicalVitals`

Updates the civilian row.

Parameters

`civId` required; optional `bloodType`, `height`, `weight`, `callback`.

Returns

callback ok `{ civId }`.

Example

```lua
exports['night_shifts_mdt']:UpdateMedicalVitals({
  civId = 42,
  bloodType = 'O+',
  height = 178,
  weight = 82,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `IssueLicense`

`issuedBy` stays `NULL`.

Parameters

`civId`, `licenseType` required; optional `validYears`, `maxPoints`, `notes`, `callback`.

Returns

callback ok `{ licenseId, licenseNumber }`.

Example

```lua
exports['night_shifts_mdt']:IssueLicense({
  civId = 42,
  licenseType = 'driver',
  validYears = 5,
  notes = 'Issued by automated clerk',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.licenseNumber)
end)
```

### `SuspendLicense`

Parameters

`licenseId` required; optional `reason`, `suspensionDays`, `callback`.

Returns

callback ok `{ licenseId, licenseStatus = 'suspended' }`.

Example

```lua
exports['night_shifts_mdt']:SuspendLicense({
  licenseId = 11,
  reason = 'Too many points',
  suspensionDays = 30,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ReinstateLicense`

Parameters

`licenseId` required; optional `callback`.

Returns

callback ok `{ licenseId, licenseStatus = 'valid' }`.

Example

```lua
exports['night_shifts_mdt']:ReinstateLicense({
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RevokeLicense`

Parameters

`licenseId` required; optional `reason`, `callback`.

Returns

callback ok `{ licenseId, licenseStatus = 'revoked' }`.

Example

```lua
exports['night_shifts_mdt']:RevokeLicense({
  licenseId = 11,
  reason = 'Fraudulent application',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AdjustLicensePoints`

Parameters

`licenseId`, `pointsChange` (signed number) required; optional `reason`, `callback`.

Returns

callback ok `{ licenseId, pointsChange }`.

Example

```lua
exports['night_shifts_mdt']:AdjustLicensePoints({
  licenseId = 11,
  pointsChange = -3,
  reason = 'Court reduction',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddPNCNote`

`createdBy` is `NULL`. `createdByName` is your resource folder.

Parameters

`entityType` (`civilian` or `vehicle`), `title`, `description`, plus `civId` or `vehicleId`; optional `callback`.

Returns

callback ok `{ noteId }`.

Example

```lua
exports['night_shifts_mdt']:AddPNCNote({
  entityType = 'civilian',
  civId = 42,
  title = 'Known associate',
  description = 'Seen with a wanted suspect last week.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DeletePNCNote`

Parameters

`noteId` required; optional `callback`.

Returns

callback ok `{ noteId }`.

Example

```lua
exports['night_shifts_mdt']:DeletePNCNote({
  noteId = 55,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateBulletin`

`nsmdt_bulletins.createdBy` is NOT NULL + FK to `nsmdt_users`. The system path **cannot** stamp `system:<resource>` there. Fails with `createdByLicense required (bulletins.createdBy FK to nsmdt_users)` if you omit the license.

Parameters

`departmentId`, `title`, `content`, **`createdByLicense`** required; optional `priority`, `isPinned`, `expiresAt`, `callback`.

Returns

callback ok `{ bulletinId }`.

Example

```lua
exports['night_shifts_mdt']:CreateBulletin({
  departmentId = 1,
  title = 'BOL for silver Sultan',
  content = 'Last seen on Olympic Fwy heading east.',
  createdByLicense = 'license:27df0c159452c84a9a51a91020d54f0f3077d30f',
  isPinned = true,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateBulletin`

Parameters

`bulletinId` required; optional `title`, `content`, `priority`, `isPinned`, `callback`.

Returns

callback ok `{ bulletinId }`.

Example

```lua
exports['night_shifts_mdt']:UpdateBulletin({
  bulletinId = 8,
  content = 'Updated: vehicle recovered.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DeleteBulletin`

Parameters

`bulletinId` required; optional `callback`.

Returns

callback ok `{ bulletinId }`.

Example

```lua
exports['night_shifts_mdt']:DeleteBulletin({
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `TogglePinBulletin`

Parameters

`bulletinId` required; optional `callback`.

Returns

callback ok `{ bulletinId }`.

Example

```lua
exports['night_shifts_mdt']:TogglePinBulletin({
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterCivilian`

Auto-generates `personalId` if omitted (`SYS-<timestamp>…`).

Parameters

`firstName`, `lastName` required; optional `personalId`, `dateOfBirth`, `phoneNumber`, `address`, `callback`.

Returns

callback ok `{ civilianId }`.

Example

```lua
exports['night_shifts_mdt']:RegisterCivilian({
  firstName = 'Alex',
  lastName = 'Rivera',
  dateOfBirth = '1994-03-12',
  address = '1 San Andreas Ave',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.civilianId)
end)
```

### `RegisterVehicle`

Parameters

`civId`, `licensePlate` required; optional `make`, `model`, `color`, `buildYear`, `callback`.

Returns

callback ok `{ vehicleId }`.

Example

```lua
exports['night_shifts_mdt']:RegisterVehicle({
  civId = 42,
  licensePlate = 'ABC 123',
  make = 'Karin',
  model = 'Sultan',
  color = 'Silver',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterProperty`

Parameters

`civId`, `address` required; optional `propertyType`, `houseNumber`, `city`, `state`, `zone`, `postal`, `description`, `price`, `buildYear`, `callback`.

Returns

callback ok `{ propertyId }`.

Example

```lua
exports['night_shifts_mdt']:RegisterProperty({
  civId = 42,
  address = '1 San Andreas Ave',
  city = 'Los Santos',
  propertyType = 'house',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterBusiness`

Parameters

`civId`, `businessName` required; optional `businessType`, `address`, `state`, `city`, `zone`, `postal`, `callback`.

Returns

callback ok `{ businessId }`.

Example

```lua
exports['night_shifts_mdt']:RegisterBusiness({
  civId = 42,
  businessName = 'Rivera Auto',
  address = '12 Popular St',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateCivilianAddress`

Writes `addressLine1`.

Parameters

`civId`, `address` required; optional `callback`.

Returns

callback ok `{ civId }`.

Example

```lua
exports['night_shifts_mdt']:UpdateCivilianAddress({
  civId = 42,
  address = '9 Palomino Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ApproveLicenseRequest`

Parameters

`licenseId` required; optional `callback`.

Returns

callback ok `{ licenseId }`.

Example

```lua
exports['night_shifts_mdt']:ApproveLicenseRequest({
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RejectLicenseRequest`

Parameters

`licenseId` required; optional `reason`, `callback`.

Returns

callback ok `{ licenseId }`.

Example

```lua
exports['night_shifts_mdt']:RejectLicenseRequest({
  licenseId = 11,
  reason = 'Failed driving test',
}, function(ok, result)
  if not ok then return print(result) end
end)
```
