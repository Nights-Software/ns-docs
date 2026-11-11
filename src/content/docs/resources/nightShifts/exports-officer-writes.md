---
title: "Exports: Officer Writes · Night Shifts MDT"
description: "The write exports that act as an on-duty officer."
slug: resources/nightShifts/exports-officer-writes
group: scripts
lastUpdated: 2026-08-13
---

## Officer writes — shift

**When to use:** Clock **that** player in/out or change *their* status/callsign. `serverId` is the **subject**.

**When not to:** There is no system twin. Do not invent a fake source. The player must already have an MDT session for clock-in.

### `StartShiftByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | Connected player |
| departmentId | number | yes | |
| subDepartmentId | number | no | pass `nil` if none |
| rankId | number | yes | |
| callsign | string | no | empty becomes `UNASSIGNED` |

Returns

| Path | Value |
| ---- | ----- |
| sync | `success, result` — `success` is boolean |

Example

```lua
local ok, result = exports['night_shifts_mdt']:StartShiftByServerId(source, 1, nil, 3, 'L-42')
if not ok then return print(result) end
```

### `EndShiftByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| callback | function | no | `function(success, duration, totalTime)` |

Returns

| Path | Value |
| ---- | ----- |
| sync | `success, duration, totalTime` |
| callback | same three values |

Example

```lua
local ok, duration, totalTime = exports['night_shifts_mdt']:EndShiftByServerId(source)
print(ok, duration, totalTime)
```

### `UpdateShiftStatusByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| statusCode | string | yes | Department status code |
| callback | function | no | |

Returns

`success` plus result via sync and optional callback.

Example

```lua
exports['night_shifts_mdt']:UpdateShiftStatusByServerId(source, 'available', function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateShiftStatusByBindingByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| binding | string | yes | `panic`, `available`, `unavailable`, or `busy` |
| callback | function | no | |

Returns

`success` plus result via sync and optional callback.

Example

```lua
exports['night_shifts_mdt']:UpdateShiftStatusByBindingByServerId(source, 'busy', function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateCallsignByServerId`

Parameters

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| newCallsign | string | yes | |

Returns

sync `success, result`.

Example

```lua
local ok, result = exports['night_shifts_mdt']:UpdateCallsignByServerId(source, 'L-21')
if not ok then return print(result) end
```

## Officer writes — dispatch, PNC, ops

**When to use:** A clocked-in officer is using your terminal. First arg = their `source`. MDT checks on-shift + rank permission.

**When not to:** No player / AI / webhook — use the unsuffixed system export.

`serverId` is the **acting officer**, not the warrant/flag/vehicle target. Targets live in `data`. Officer creates infer `departmentId` from the active shift — do not require it in `data`.

Payloads match the system cards above. Extra arguments and stamps:

| Extra | Notes |
| ----- | ----- |
| First arg `serverId` | Connected, clocked-in player |
| `callback` | Same `function(ok, resultOrError)` as the system twin |
| Fail (not on shift) | `You must be on shift` / `No MDT session` / `invalid_server_id` |
| Fail (permission) | `You do not have permission` |

Same payload as the matching system export, plus `source` first. Medical `*ByServerId` stamps that player’s license (ambulance staff). `CreateBulletinByServerId` fills `createdByLicense` from the officer.

### `AssignUnitToCallByServerId`

Permission: `dispatch.assign_units`. Omit `callsign` / `targetServerId` to self-assign.

Example

```lua
exports['night_shifts_mdt']:AssignUnitToCallByServerId(source, {
  callId = 1842,
  callsign = 'L-21',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DetachUnitFromCallByServerId`

Permission: `dispatch.assign_units`. Omit target to detach self.

Example

```lua
exports['night_shifts_mdt']:DetachUnitFromCallByServerId(source, {
  callId = 1842,
  callsign = 'L-21',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetCallStatusByServerId`

Permission: `dispatch.resolve_call` or `hotline.resolve_call`.

Example

```lua
exports['night_shifts_mdt']:SetCallStatusByServerId(source, {
  callId = 1842,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ArchiveCallByServerId`

Permission: `dispatch.archive_call` or `hotline.archive_calls`.

Example

```lua
exports['night_shifts_mdt']:ArchiveCallByServerId(source, {
  callId = 1842,
  reason = 'Complete',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `EditCallByServerId`

Permission: `dispatch.edit_call`.

Example

```lua
exports['night_shifts_mdt']:EditCallByServerId(source, {
  callId = 1842,
  description = 'Updated from the CAD terminal',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddCallNoteByServerId`

Permission: `dispatch.add_note`.

Example

```lua
exports['night_shifts_mdt']:AddCallNoteByServerId(source, {
  callId = 1842,
  note = 'Unit advised, en route',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DeleteCallNoteByServerId`

Permission: `dispatch.delete_note`.

Example

```lua
exports['night_shifts_mdt']:DeleteCallNoteByServerId(source, {
  noteId = 91,
  callId = 1842,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetUnitOnCallStatusByServerId`

On-shift only. Omit target to update self.

Example

```lua
exports['night_shifts_mdt']:SetUnitOnCallStatusByServerId(source, {
  callId = 1842,
  unitStatus = 'on_scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateWarrantByServerId`

Permission: `pnc.registration`. `issuedBy` = that officer. No `departmentId` required.

Example

```lua
exports['night_shifts_mdt']:CreateWarrantByServerId(source, {
  civId = 42,
  warrantType = 'arrest',
  reason = 'Assault — issued from CAD terminal',
  expiresAt = '2027-06-01 00:00:00',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.warrantNumber)
end)
```

### `CancelWarrantByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:CancelWarrantByServerId(source, {
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ExecuteWarrantByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:ExecuteWarrantByServerId(source, {
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateWarrantByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:UpdateWarrantByServerId(source, {
  warrantId = 15,
  reason = 'Updated from CAD',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateFlagByServerId`

Permission: `pnc.flags`. Department from the officer’s shift.

Example

```lua
exports['night_shifts_mdt']:CreateFlagByServerId(source, {
  civId = 42,
  flagType = 'other',
  description = 'Flagged from CAD',
  severity = 'medium',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetFlagActiveByServerId`

Permission: `pnc.flags`.

Example

```lua
exports['night_shifts_mdt']:SetFlagActiveByServerId(source, {
  flagId = 88,
  isActive = false,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateFineByServerId`

Permission: `pnc.registration`. Department from the officer’s shift.

Example

```lua
exports['night_shifts_mdt']:CreateFineByServerId(source, {
  civId = 42,
  fineDescription = 'Speeding',
  fineAmount = 250,
  fineLocation = 'Olympic Fwy',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `MarkFinePaidByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:MarkFinePaidByServerId(source, {
  fineId = 301,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateCriminalRecordByServerId`

Permission: `pnc.registration`. Department from the officer’s shift.

Example

```lua
exports['night_shifts_mdt']:CreateCriminalRecordByServerId(source, {
  civId = 42,
  location = 'Olympic Fwy',
  incidentDate = '2026-08-13',
  description = 'Resisted arrest',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddChargeByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:AddChargeByServerId(source, {
  criminalRecordId = 77,
  penalCodeId = 12,
  chargeTitle = 'Speeding',
  fineAmount = 250,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateChargeByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:UpdateChargeByServerId(source, {
  chargeId = 19,
  chargeStatus = 'convicted',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SetVehicleBoloByServerId`

Permission: `pnc.registration`.

Example

```lua
exports['night_shifts_mdt']:SetVehicleBoloByServerId(source, {
  plate = 'ABC 123',
  bolo = true,
  boloDescription = 'Used in a robbery',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddANPRRegistryByServerId`

Permission: `pnc.anpr.manage`.

Example

```lua
exports['night_shifts_mdt']:AddANPRRegistryByServerId(source, {
  plate = 'ABC 123',
  reason = 'Stolen vehicle',
  reasonType = 'stolen',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveANPRRegistryByServerId`

Permission: `pnc.anpr.manage`.

Example

```lua
exports['night_shifts_mdt']:RemoveANPRRegistryByServerId(source, {
  plate = 'ABC 123',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalAllergyByServerId`

Permission: `medical_records.add_treatment`. FK + audit = that player’s license. Notes say `Staff …`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalAllergyByServerId(source, {
  civId = 42,
  allergen = 'Peanuts',
  severity = 'severe',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveMedicalAllergyByServerId`

Permission: `medical_records.delete`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalAllergyByServerId(source, {
  id = 9,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalDiagnosisByServerId`

Permission: `medical_records.diagnose`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalDiagnosisByServerId(source, {
  civId = 42,
  condition = 'Asthma',
  status = 'chronic',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateMedicalDiagnosisByServerId`

Permission: `medical_records.diagnose`.

Example

```lua
exports['night_shifts_mdt']:UpdateMedicalDiagnosisByServerId(source, {
  id = 4,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveMedicalDiagnosisByServerId`

Permission: `medical_records.delete`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalDiagnosisByServerId(source, {
  id = 4,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalTreatmentByServerId`

Permission: `medical_records.add_treatment`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalTreatmentByServerId(source, {
  civId = 42,
  treatment = 'Oxygen on scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalPrescriptionByServerId`

Permission: `medical_records.diagnose`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalPrescriptionByServerId(source, {
  civId = 42,
  medication = 'Albuterol',
  dosage = '2 puffs',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DiscontinueMedicalPrescriptionByServerId`

Permission: `medical_records.diagnose`.

Example

```lua
exports['night_shifts_mdt']:DiscontinueMedicalPrescriptionByServerId(source, {
  id = 6,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalImmunizationByServerId`

Permission: `medical_records.add_treatment`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalImmunizationByServerId(source, {
  civId = 42,
  vaccine = 'Tetanus',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddMedicalFlagByServerId`

Permission: `medical_records.flags`.

Example

```lua
exports['night_shifts_mdt']:AddMedicalFlagByServerId(source, {
  civId = 42,
  flagType = 'dnr',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RemoveMedicalFlagByServerId`

Permission: `medical_records.flags`.

Example

```lua
exports['night_shifts_mdt']:RemoveMedicalFlagByServerId(source, {
  id = 3,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateMedicalVitalsByServerId`

Permission: `medical_records.add_treatment`.

Example

```lua
exports['night_shifts_mdt']:UpdateMedicalVitalsByServerId(source, {
  civId = 42,
  bloodType = 'O+',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `IssueLicenseByServerId`

Permission: typically `licenses.create`.

Example

```lua
exports['night_shifts_mdt']:IssueLicenseByServerId(source, {
  civId = 42,
  licenseType = 'driver',
  validYears = 5,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `SuspendLicenseByServerId`

Permission: typically `licenses.suspend`.

Example

```lua
exports['night_shifts_mdt']:SuspendLicenseByServerId(source, {
  licenseId = 11,
  reason = 'Too many points',
  suspensionDays = 30,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ReinstateLicenseByServerId`

Permission: typically `licenses.update`.

Example

```lua
exports['night_shifts_mdt']:ReinstateLicenseByServerId(source, {
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RevokeLicenseByServerId`

Permission: typically `licenses.revoke`.

Example

```lua
exports['night_shifts_mdt']:RevokeLicenseByServerId(source, {
  licenseId = 11,
  reason = 'Fraudulent application',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AdjustLicensePointsByServerId`

Permission: typically `licenses.update`.

Example

```lua
exports['night_shifts_mdt']:AdjustLicensePointsByServerId(source, {
  licenseId = 11,
  pointsChange = -3,
  reason = 'Court reduction',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `AddPNCNoteByServerId`

Permission: `pnc.notes.manage`.

Example

```lua
exports['night_shifts_mdt']:AddPNCNoteByServerId(source, {
  entityType = 'civilian',
  civId = 42,
  title = 'Known associate',
  description = 'Seen with a wanted suspect last week.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DeletePNCNoteByServerId`

Permission: `pnc.notes.manage`.

Example

```lua
exports['night_shifts_mdt']:DeletePNCNoteByServerId(source, {
  noteId = 55,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `CreateBulletinByServerId`

Permission: `management.bulletins.create`. Fills `createdByLicense` from the officer.

Example

```lua
exports['night_shifts_mdt']:CreateBulletinByServerId(source, {
  departmentId = 1,
  title = 'BOL for silver Sultan',
  content = 'Last seen on Olympic Fwy heading east.',
  isPinned = true,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateBulletinByServerId`

Example

```lua
exports['night_shifts_mdt']:UpdateBulletinByServerId(source, {
  bulletinId = 8,
  content = 'Updated: vehicle recovered.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `DeleteBulletinByServerId`

Example

```lua
exports['night_shifts_mdt']:DeleteBulletinByServerId(source, {
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `TogglePinBulletinByServerId`

Example

```lua
exports['night_shifts_mdt']:TogglePinBulletinByServerId(source, {
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterCivilianByServerId`

Example

```lua
exports['night_shifts_mdt']:RegisterCivilianByServerId(source, {
  firstName = 'Alex',
  lastName = 'Rivera',
  dateOfBirth = '1994-03-12',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterVehicleByServerId`

Example

```lua
exports['night_shifts_mdt']:RegisterVehicleByServerId(source, {
  civId = 42,
  licensePlate = 'ABC 123',
  make = 'Karin',
  model = 'Sultan',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterPropertyByServerId`

Example

```lua
exports['night_shifts_mdt']:RegisterPropertyByServerId(source, {
  civId = 42,
  address = '1 San Andreas Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RegisterBusinessByServerId`

Example

```lua
exports['night_shifts_mdt']:RegisterBusinessByServerId(source, {
  civId = 42,
  businessName = 'Rivera Auto',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `UpdateCivilianAddressByServerId`

Example

```lua
exports['night_shifts_mdt']:UpdateCivilianAddressByServerId(source, {
  civId = 42,
  address = '9 Palomino Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `ApproveLicenseRequestByServerId`

Example

```lua
exports['night_shifts_mdt']:ApproveLicenseRequestByServerId(source, {
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### `RejectLicenseRequestByServerId`

Example

```lua
exports['night_shifts_mdt']:RejectLicenseRequestByServerId(source, {
  licenseId = 11,
  reason = 'Failed driving test',
}, function(ok, result)
  if not ok then return print(result) end
end)
```
