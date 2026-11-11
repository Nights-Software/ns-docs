---
title: "Troubleshooting · ERS v1"
description: "Common problems and how to solve them."
slug: resources/ers/troubleshooting
group: ers
lastUpdated: 2026-10-19
---

## Common Issues

### Fire & Smoke Problems

:::caution[Resource Naming]
SmartFires and SmartHose must be named exactly `SmartFires` and `SmartHose` (case sensitive). Same applies to Lite versions. A common issue is that callouts can no longer be cancelled or will no longer spawn after encountering issues due to faulty naming of the resources.
:::

### MDT Integration Issues

:::tip[Solution]
Enable ERS in `night_shifts_mdt` config (`Config.Enable_ERS = true`) and enable Night Shifts in `night_ers` config. Duty can optionally be toggled through the MDT (`ManageShiftsByMDT` on the ERS side where applicable). Ensure `ensure night_shifts_mdt` appears **before** `ensure night_ers` in `server.cfg`.
:::

:::tip[ANPR HUD hit but PNC vehicle looks clean (or the opposite)]
The watchlist, vehicle record, and hit log are three different layers. An **ANPR HIT** means an active watchlist entry; **vehicle BOLO/stolen** on lookup refers to the PNC vehicle file; the **hit log** is audit history only. After GTA reuses a plate on another model, an old watchlist flag should not follow the new car — if behaviour looks wrong, confirm both resources are updated and see [Night Shifts — ANPR & NPC traffic](/resources/nightShifts/how-it-works/#anpr-npc-traffic).
:::

> **Partial `pedData` / `vehicleData` on first interaction:** If MDT lookup takes longer than ~12s (heavy server load or first NPC pool generation), ERS still fires `OnFirst*` once with nil compliance/identity fields. Retry the interaction or check server console with `Config.Debug = true` on both resources.

> **Custom / non-standard plates return UNREGISTERED or empty data:** Older builds only fabricated NPC vehicle records for GTA-style "native" plate patterns, so servers running plate-changer scripts (e.g. `HT 1234`) saw pullovers and ANPR return unregistered or partial vehicle data. That plate-format gate has been removed — any ambient NPC vehicle now gets a full MDT-backed record regardless of plate layout. If you still see this, update both `night_shifts_mdt` and `night_ers` to the latest build.

### Hosting-Specific Issues

- **Iceline Hosting:** Set `Enable Beyond` to 1 in server dashboard
- **Entity Spawning:** Ensure OneSync is properly configured in the host dashboard

## Compatibility Checklist

- ✅ **Recommended Gamebuild:** 3323, 3570, or 3889
- ✅ **Minimum FXServer:** 35245 or newer
- ❌ **QBox important note; NPC Backup doesn't spawn:** Remove blocked ped & vehicle model names, like `s_m_y_cop_01` or `FIRETRUK` from `qbx_smallresources/qbx_entitiesblacklist/config.lua` and your backup peds will spawn again
- ❌ **Considered Not Compatible:** Other Gamebuilds other than 3323, 3570, or 3889
- ❌ **RemoveCops-AI:** We recommend to disable this resource when using ERS
- ❌ **Andrew's Advanced AI:** We recommend to disable this resource when using ERS
- ❌ **Realistic Euphoria Physics:** We recommend to disable this resource when using ERS
- ❌ **RedSaints Stretcher/Ambulance:** We recommend to disable this resource when using ERS
- ❌ **Improved-Seat-Shuffle-FiveM by Dalrae1:** We recommend to disable this resource when using ERS
- ⚠️ **Anti-cheat:** May cause entity deletion issues. This can be prevented via your anti-cheat settings. Contact your provider
