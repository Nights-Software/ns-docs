---
title: "How It Works · Night Shifts MDT"
description: "How the MDT works, including the medical records of the ambulance panel."
slug: resources/nightShifts/how-it-works
group: scripts
lastUpdated: 2026-08-13
---

## How It Works

### Civilian-facing

- **Emergency call (e.g. F3)** — Quick civilian emergency call into the dispatch ecosystem (subject to cooldowns and “on shift” rules in config)
- **Council self-service** — Manage your civilian profile: documents, licenses, vehicles, properties, and businesses from the tablet
- **Show ID** — Present government ID to a nearby player for RP identity checks

### Emergency services (in the tablet)

- **Shift & status** — Clock in/out, department selection, status codes, **panic** (command or MDT) as configured
- **Dispatch** — Call board, units, notes, and **map-backed** situational awareness; quick-respond and communications as set up on your server
- **PNC** — Full lookup stack: people, plates, warrants, case files, flags, ANPR, and penal code reference. **Linked Reports** on civilian/vehicle profiles show **approved** operation forms only when the form template is marked **PNC-visible** in Admin → Form Builder (`pnc.reports.view` / `pnc.reports.view_all_department`).
- **Operations & forms** — Department-specific **configurable forms** and workflows; applications and internal operations tied to the same form system. Operation forms can link civilians/vehicles; visibility on PNC is **opt-in per template** (defaults: internal). Applications and medical department forms stay department-internal.
- **Management** — Roster, fleet, bulletins, certifications, and submission review for leadership roles

### ANPR & NPC traffic {#anpr-npc-traffic}

Patrol **ANPR** (in-vehicle HUD and static cameras) and **PNC → ANPR** (watchlist, hit log) work alongside the **NPC pool** when [ERS integration](/resources/nightShifts/integration/#emergency-response-simulator-night_ers) is enabled. Three ideas help avoid confusion in roleplay:

**Three separate layers**

| Layer | What it means | Typical lifetime |
| ----- | ------------- | ---------------- |
| **PNC vehicle record** | Owner, tax/MOT/insurance, stolen/BOLO on the **vehicle file** | NPC rows: ~90 min per **plate + model** encounter (`plateTTLMinutes` in `config_npc_pool.lua`) |
| **ANPR watchlist (registry)** | What triggers a red **ANPR HIT** on the patrol HUD | Officer flags: **plate-wide**, ~10 days (`RegistryExpiryDays`). NPC auto-flags: **plate + GTA model**, same ~90 min as the NPC vehicle row |
| **Hit log** | Audit of past detections | Historical only — a past hit does **not** mean the plate is still flagged |

**ANPR HIT vs vehicle BOLO/stolen**

- **ANPR HIT** = plate is on the **watchlist right now** (officer added it, or NPC pool auto-flagged stolen/BOLO when the record was created).
- **Vehicle BOLO/stolen** on a PNC lookup = flags on that **specific vehicle record**.
- Those can differ: e.g. active watchlist hit but a clean vehicle file after plate recycle, or a historic hit in the log with no active watchlist entry.

**NPC behaviour (GTA plate reuse)**

- **Any plate format works.** Ambient NPC vehicles get a full fictional record (owner, tax/MOT/insurance, stolen/BOLO) regardless of plate layout — custom plate-changer formats included. There is no "native plate pattern" list to configure anymore.
- GTA reuses the same plate string on different cars. NPC vehicle stories and NPC auto-ANPR flags are keyed by **plate + model hash**, so a recycled plate on a **different** model is a separate story and does not inherit the previous car's watchlist hit.
- **New story on driver change.** If the same plate + model turns up driven by a **different** NPC, it is treated as a different car (sold/recycled): a fresh vehicle story is generated and the previous NPC row for that plate is replaced. Recurring **peds** keep their own identity across encounters.
- **Owners are recurring residents.** When a vehicle's registered owner differs from the driver, the MDT reuses an existing NPC resident as the owner instead of inventing a brand-new person every time, so the world feels populated by the same faces.
- **Officer watchlist** entries you add in PNC/ANPR remain **plate-wide** by design and are **overlays** on the vehicle file — they no longer stop the NPC pool from generating a record.
- **Player-registered plates always win.** A plate registered in MDT Vehicle Registration uses that record and clears any NPC rows for the plate; registering a plate afterwards removes its NPC entry.
- **Driver ≠ registered owner** is normal (~25% by default via `probOwnsVehicle` in `config_npc_pool.lua`) — especially on ERS callouts and borrowed/rental-style NPC stories.

**Tuning encounter rates**

In `config/config_npc_pool.lua` (defaults shown):

- `probStolenVehicle` — chance a **new** NPC vehicle record is stolen (stolen always includes BOLO on the vehicle file and ANPR auto-flag when resolved).
- `probBOLO` — additional BOLO chance on **non-stolen** NPC vehicles.
- `plateTTLMinutes` — how long NPC plate+model vehicle rows (and matching NPC ANPR auto-flags) stay active.

Patrol scan behaviour (cone dwell, equipped vehicle hashes, static cameras) is in `config/config_anpr.lua`. Set `PatrolRegistryOnly = true` there if you only want watchlist hits on the HUD with no NPC/PNC vehicle resolution for ambient traffic.

### Permissions {#permissions}

Two layers work together: **who can open admin tools** vs **what each job role may do in the MDT while on shift**.

- **Admin permissions** — A **global admin level** (0–3: regular user, moderator, admin, super admin) decides whether someone can use the **admin panel** at all, and **which admin areas** they get (users, departments, MDT settings, penal code editor, license/document/flag types, forms, system logs, emergency-wide actions, bug reports, and the admin-permissions editor for super admins). Moderators and up can have **granular actions** inside those modules (for example view vs edit on penal codes, or which settings tabs they may change). Levels are assigned when a super admin edits **user management**; initial super-admins can be seeded in `config.lua` for first-time setup.
- **Rank permissions** — Separate from admin level: each **rank** inside a **department** has its own **permission strings** (for example PNC lookups, dispatch features, council administration). Super admins or department managers assign these when configuring **ranks**. Permissions can **inherit** from other ranks in the same department via **rank hierarchy**, so a sergeant can automatically include patrol allowances without duplicating every flag. The MDT **resolves** a player’s effective permissions when they **clock in** to a department (and refreshes when ranks or hierarchy change).

**In practice:** Admin level answers “May this person run the **server / MDT configuration** UI?” Rank permissions answer “Once clocked in as this **job role**, which **operational** menus and actions (dispatch, PNC, ANPR, …) are allowed?” A user can be a high **rank** in police without any **admin** level, and an **admin** can configure the server without needing a department rank.

**Where department + rank assignments come from.** A user’s rows in `nsmdt_user_departments` are tagged with an `assignmentSource` that records who put them there:

| Source      | Set by                                                                                                                 | Removable by                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `admin`     | A super admin / admin assigns the user via **User Management** in the admin panel                                      | Admin only — never overwritten by automatic syncs                                                                                  |
| `open_join` | The user joins a department configured as **open join** from the home page                                             | Admin, or the user leaves voluntarily                                                                                              |
| `discord`   | The optional [Discord integration](/resources/nightShifts/integration/#discord-integration) maps a Discord role the user holds to that (department, rank) | Admin (manually), or removed automatically when the user loses the Discord role / the mapping is deleted / integration is disabled |

Admin assignments take precedence: if an admin edits a row that started life as `discord`, it is promoted to `admin` and stays put across syncs.

### Server owners & admins

- **First-run & roles** — Initial super-admins and tiered admin levels (moderator / admin / super admin) in config; ongoing **user management** and **permission matrices** in-tablet
- **Reference data** — Departments, ranks, penal codes, license/document/flag/certification **types**, and **form builder** without editing NUI source
- **Operations** — System logs, emergency-wide actions, MDT-wide settings, and bug reports from the field

## Medical Records (Ambulance Panel)

The Medical Records panel is an **ambulance-only** module accessible from the MDT sidebar when a user is on shift in a department of type `ambulance` and holds the `medical_records.view` permission. It mirrors the PNC structure (search → patient detail → tabbed file) and provides:

- **Patient search** — find civilians by name, phone, or personal id.
- **Patient file** with five tabs: **Overview/Vitals**, **Diagnoses**, **Treatments**, **Medications**, and **Immunizations**.
- **Medical alerts banner** at the top of every patient file (DNR, contagious, organ donor, …).

### Tiered permissions

Granted per rank under **Admin Panel → Departments → Edit ranks → Permissions** (only ambulance departments expose these):

| Permission                      | Grants                                                                 |
|---------------------------------|------------------------------------------------------------------------|
| `medical_records.view`          | Page access + read-only of all patient files                           |
| `medical_records.add_treatment` | Log treatments, allergies, vitals, immunizations (operational ranks)   |
| `medical_records.diagnose`      | Add diagnoses + prescriptions (paramedic+, standing-order scope)        |
| `medical_records.flags`         | Add/remove medical alerts (supervisory)                                 |
| `medical_records.delete`        | Delete records (top brass — destructive corrections / cleanup)         |

### Configuring medical types (admin)

Two of the dropdowns and the alert-banner styling are **admin-curated** rather than hardcoded so each server can model the alert types and treatment categories that fit their RP setting.

**Where:** Admin Panel → **Medical Types** (requires `medical_types.view`; create / edit / delete are separately gated).

**Sub-tabs:**

- **Alert Types** — drives the patient-file alert banner and the *Add Medical Alert* dropdown. Each type has an identifier (immutable string id used to link existing records), a **label**, a **FontAwesome icon** (e.g. `fa-ban`, `fa-virus`), a **hex color** for the badge, a display order, and an enabled toggle.
- **Treatment Types** — drives the *Log Treatment* dropdown. Slimmer fields: identifier, label, display order, enabled.

**What is configurable:**

| Type / scale                                  | Configurable?                                                                                       |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Alert types (DNR / Pregnant / …)              | ✅ Add, edit, disable, delete from the admin panel.                                                 |
| Treatment categories (On scene / Transport / …) | ✅ Same.                                                                                             |
| Allergy severity (mild / moderate / …)        | ❌ Hardcoded — clinical standard. Localize via translation keys `medical.severity_*`.               |
| Diagnosis status (active / chronic / resolved) | ❌ Hardcoded — clinical standard. Localize via translation keys `medical.diagnosis_status_*`.       |
| Prescription status (active / discontinued / completed) | ❌ Hardcoded — clinical standard. Localize via translation keys `medical.prescription_status_*`. |
| Blood types (A+, A-, …)                       | ❌ Hardcoded — universal biological set.                                                            |

**Default seed:** On first install (when the lookup tables are empty) the MDT seeds the seven default alert types and six default treatment types from `server/presets/medical_flag_type_presets.lua` and `server/presets/medical_treatment_type_presets.lua`. After that, only the admin panel writes to those tables — the preset files are ignored, so editing them on a live server has no effect.

**Creating a custom alert type:**

1. Open Admin Panel → **Medical Types** → **Alert Types** tab.
2. Click **Add Alert Type**.
3. Fill in:
   - **Label** — e.g. *Mental Health Hold*. The identifier is auto-derived (`mental_health_hold`).
   - **Icon** — any FontAwesome 6 free class without the `fas ` prefix (e.g. `fa-brain`).
   - **Color** — any hex code; the live preview shows exactly how the banner will render it.
   - **Display order** — lower numbers appear first in the dropdown.
4. Save. The new type is immediately available the next time medical staff open a patient file.

**Disabling vs deleting:**

- **Disabling** keeps every existing record's tag intact and only hides the type from new-entry dropdowns. Safe and reversible.
- **Deleting** is **blocked** if any patient records still reference the type — the toast will tell you how many. To delete a type that's in use, either reassign those records first or simply disable it instead.

**Translations:**

Each preset id has a matching translation key (`medical.flag_type_<id>`, `medical.type_<id>`). When you add a custom type, the admin label is shown until you also add a translation key — useful if your server runs multiple languages. The lookup order for a given type id is:

1. Translation key (if defined) — wins.
2. Admin-configured label.
3. Raw id (last resort).

### Database

The medical records system uses six patient-record tables and two admin-curated lookup tables, all auto-created on first start:

| Table                                   | Purpose                                                  |
|-----------------------------------------|----------------------------------------------------------|
| `nsmdt_medical_allergies`               | Per-civilian allergies + severity                        |
| `nsmdt_medical_diagnoses`               | Active / chronic / resolved diagnoses                    |
| `nsmdt_medical_treatments`              | Chronological treatment log                              |
| `nsmdt_medical_prescriptions`           | Active / discontinued / completed prescriptions          |
| `nsmdt_medical_immunizations`           | Vaccination records                                      |
| `nsmdt_medical_flags`                   | Medical alerts (DNR, contagious, …)                      |
| `nsmdt_medical_flag_types` *(admin)*    | Curated alert type registry (label + icon + color)       |
| `nsmdt_medical_treatment_types` *(admin)* | Curated treatment category registry                    |

All patient-record tables `CASCADE` on civilian delete, so the **Purge NPC Data** admin action automatically cleans NPC medical history. The lookup tables are referenced by string id (not hard FK) so renaming or re-creating a preset doesn't orphan history.
