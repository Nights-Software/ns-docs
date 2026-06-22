---
layout: default
title: "Night Shifts MDT v1"
nav_order: 5
has_children: false
has_toc: true
last_modified_date: "2026-05-03"
---

# Night Shifts - Mobile Data Terminal for FiveM
{: .no_toc}

Installation and integration guide for **Night Shifts MDT (v1)** on FiveM.
- *Crafted by [Nights Software](https://store.nights-software.com/)*
{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🛒 Purchase Information

**Get Night Shifts MDT:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5667103){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes
{: .warning }

> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
>
> 1. Download ZIP Package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to server.cfg (ensure script)
> 6. Boot up the server
{: .important }

> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
{: .warning }

> **Database Requirement:** Night Shifts MDT requires a MySQL database and oxmysql resource to function properly.
{: .tip }

> **Emergency Response Simulator Compatible:** It is possible to search NPCs and their vehicles in the MDT when they have been interacted with via the Emergency Response Simulator.

---

## 🔧 System Requirements & Compatibility
{: #system-requirements }

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Framework Compatibility**
{: .no_toc #framework-compatibility }

- **✅ Standalone:** If no supported framework resource is running, the MDT runs in **standalone** mode: **no automatic civilian generation** from characters (players use council registration / staff workflows as you configure).
- **✅ Auto civilian generation (framework bridge):** When a supported framework is detected **and started before or with the MDT**, the resource syncs each loaded character into `nsmdt_civilians` (create or update by framework id). Supported stacks (detection order on the server):

  | Framework  | Resource / API           | Character id used for sync |
  | ---------- | ------------------------ | -------------------------- |
  | **ESX**    | `es_extended`            | `identifier`               |
  | **QBox**   | `qbx_core` (`GetPlayer`) | `citizenid`                |
  | **QBCore** | `qb-core`                | `citizenid`                |

  On first sync, a council-style **personal id** (e.g. `CIV-`…) can be issued; **identity documents** may be auto-generated when your document types and council rules allow (see server logs for `[MDT Framework]`). Existing civilians are **updated** on subsequent loads (name, job, phone, etc., per bridge data).
- **✅ Framework fines:** Optional **bank/cash** deduction for council fines when a framework player pays—configure `Config.FrameworkFineAccount` in `config.lua` (`ESX` / `QBCore` / `QBox`).
- **✅ Custom banking (standalone):** If you run a **standalone server with your own banking resource** (or want to override one specific operation on a framework server), the **banking bridge** exposes a `BankingBridge.Custom` slot you can plug into. Council fines, balance reads and any future money-moving feature will then go through your code instead of (or in addition to) the framework path. See [Custom Banking Bridge](#custom-banking-bridge) below.
{: .note }

> Run `es_extended`, `qbx_core`, or `qb-core` on the **same server** as Night Shifts MDT if you want automatic civilian sync. Only one framework path is selected (ESX → QBox → QBCore in that order if multiple were present).

### **Dependencies**
{: .no_toc }

- **✅ MySQL Database** - Required for data storage
- **✅ oxmysql** - Required database API
{: .tip }

> **Note:** Database setup (MySQL + oxmysql) is required regardless of framework. Permissions and departments are configured **inside the MDT** (and initial super-admins in `config.lua`). Optional integrations include: **auto civilian sync** on supported frameworks, **fine payments** through the framework account, and **Discord-driven department assignment** via the separate [Night Discord API](/resources/discordAPI/) resource — see [Discord integration](#discord-integration) below.

---

## 📦 Installation Process

### **Step 1: Database Setup (Required)**
{: .no_toc }

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for Night Shifts MDT to work.

1. **Set up your database** via your hosting provider
2. **Connect to your database** using credentials in an SQL connection string
3. **Add to server.cfg** above the ensure/start of resources:

```conf
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```
{: .tip }

> **Localhost Example:**
>
> ```conf
> set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
> ```

1. **Automatic Table Installation** - When you boot up the server, the code will run queries to install required tables
{: .note }

> **Manual Installation:** The files include a `datatables.sql` file if you prefer to manually install the tables.

### **Step 2: Install oxmysql (Required)**
{: .no_toc }

If you don't have oxmysql installed, download it from:
[Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)

1. **Place oxmysql** into your resources folder
2. **Add to server.cfg** - Ensure it starts before Night Shifts MDT:

```conf
ensure oxmysql
```
{: .tip }

> **Documentation:** For oxmysql questions, visit [oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

### **Step 3: Test Database Connection**
{: .no_toc }

Start your server and check the console for oxmysql connection messages. You should see:

```conf
[script:oxmysql] Database server connection established!
```

### **Step 4: Postal codes (optional — auto-detect)**
{: .no_toc #step-4-postal-codes }

Night Shifts MDT **does not require** a specific postal resource name. It **auto-detects** which postal / map data is available on your server and uses it for **player** and **world** lookups (dispatch, addresses, etc.).

**How it works**

1. **HUD-first (player position)** — If a supported HUD exposes postal for the local player, that is preferred: `rhud` (`get_postal`), then `SimpleHUD` / `ModernHUD` (`getPostal`), in that order.
2. **World coordinates** — For map pins and coordinates, the MDT tries `rhud` world APIs first, then **hinted** postal resources in order: `mnr_postals`, `nearest-postal`.
3. **Multiple formats** — The same hints are probed for several backends: JSON lists referenced by the resource `postal_file` manifest metadata, **MNR-style** Lua data (config + data files), **export**-based nearest-postal (`getNearestPostal`, `getPostalAtCoords`, etc.), and similar. You can ship **different postal file packs** (or forks of nearest-postal / MNR) as long as the resource exposes one of these patterns; the MDT picks the **first working** match at runtime.
4. **Dependencies of postal resources** — Some MNR builds need `ox_lib` running. Install what your chosen postal resource documents.

You typically **ensure** your postal / map stack **before** Night Shifts MDT in `server.cfg`, for example:

```conf
ensure ox_lib
ensure nearest-postal
# or: ensure mnr_postals
# plus any minimap / postal overlay resource you use
```
{: .tip }

> **No extra bridge resource** — Integration is built into the MDT client; you do **not** need a separate “MDT ↔ postal” bridge. If nothing matches, postal-dependent UI may show blanks until a compatible resource is added.

### **Step 5: Install Night Shifts MDT**
{: .no_toc }

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
2. **Extract and transfer** using binary FTP mode
3. **Place the resource folder** into your `resources` directory — keep the original folder name (`night_shifts_mdt`) as shipped; do not rename it.
4. **Add to server.cfg**:

```conf
ensure night_shifts_mdt
```

1. **Verify startup** — Check console for oxmysql and `night_shifts_mdt` starting without errors
{: .note }

> **Using ERS?** In `server.cfg`, `ensure night_shifts_mdt` **before** `ensure night_ers` — ERS calls MDT exports at startup, so the MDT must already be running. See **Emergency Response Simulator Integration** below for config and behaviour.
{: .note }

> **First start & database setup:** When the resource starts, it runs a **sequence of MySQL queries** to create or update the required **tables, columns, and indexes** automatically. That work can take a **short time** (often a few seconds; longer on a slow database or a very first install). Let the **server console** finish this phase before deciding something failed—brief delays here are normal.

---

## ⚙️ Configuration Setup

### **Required Tools**
{: .no_toc }

{: .tip }

> **Visual Studio Code:** We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**
{: .no_toc }

Paths below use `night_shifts_mdt` as the resource folder name—use the same name you deploy and `ensure` in `server.cfg` (some installs rename the folder; paths are always relative to that folder).


| Path                                                | Purpose                                                                                                                                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `night_shifts_mdt/config/config.lua`                | **Main config** — tablet prop/animations, ERS link (`Enable_ERS`), framework fine account, hotkeys, civilian emergency call, Show ID, initial super-admins, and other core toggles. |
| `night_shifts_mdt/config/config_anpr.lua`           | **ANPR** — static cameras, patrol HUD scan settings, officer watchlist expiry, patrol-registry-only mode, and `NpcRegistryScopedToModel` (NPC auto-flags scoped to plate + vehicle model) |
| `night_shifts_mdt/config/config_npc_pool.lua`       | **ERS NPC pool** — fictive NPC identities and vehicle-record probabilities for Emergency Response Simulator / PNC integration                                                      |
| `night_shifts_mdt/config/translations/<locale>.lua` | **Languages** — one file per locale (e.g. `en.lua`, `de.lua`, `fr.lua`, …)                                                                                                         |


Optional files some servers customize:


| Path                                      | Purpose                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `night_shifts_mdt/client/c_functions.lua` | Client helpers (e.g. postal auto-detect, shared utilities)                                                              |
| `night_shifts_mdt/server/s_functions.lua` | Server helpers, Discord webhook implementation, and the optional [Custom Banking Bridge](#custom-banking-bridge) preset |


### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking
{: .tip }

> **Time Investment:** Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.

---

## 🎮 How It Works

### **Civilian-facing**
{: .no_toc }

- **Emergency call (e.g. F3)** — Quick civilian emergency call into the dispatch ecosystem (subject to cooldowns and “on shift” rules in config)
- **Council self-service** — Manage your civilian profile: documents, licenses, vehicles, properties, and businesses from the tablet
- **Show ID** — Present government ID to a nearby player for RP identity checks

### **Emergency services (in the tablet)**
{: .no_toc }

- **Shift & status** — Clock in/out, department selection, status codes, **panic** (command or MDT) as configured
- **Dispatch** — Call board, units, notes, and **map-backed** situational awareness; quick-respond and communications as set up on your server
- **PNC** — Full lookup stack: people, plates, warrants, case files, flags, ANPR, and penal code reference. **Linked Reports** on civilian/vehicle profiles show **approved** operation forms only when the form template is marked **PNC-visible** in Admin → Form Builder (`pnc.reports.view` / `pnc.reports.view_all_department`).
- **Operations & forms** — Department-specific **configurable forms** and workflows; applications and internal operations tied to the same form system. Operation forms can link civilians/vehicles; visibility on PNC is **opt-in per template** (defaults: internal). Applications and medical department forms stay department-internal.
- **Management** — Roster, fleet, bulletins, certifications, and submission review for leadership roles

### **ANPR & NPC traffic**
{: .no_toc #anpr-npc-traffic }

Patrol **ANPR** (in-vehicle HUD and static cameras) and **PNC → ANPR** (watchlist, hit log) work alongside the **NPC pool** when [ERS integration](#emergency-response-simulator-night_ers) is enabled. Three ideas help avoid confusion in roleplay:

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

- GTA reuses the same plate string on different cars. NPC vehicle stories and NPC auto-ANPR flags are keyed by **plate + model hash**, so a recycled plate on a **different** model does not inherit the previous car’s watchlist hit.
- **Officer watchlist** entries you add in PNC/ANPR remain **plate-wide** by design (manual BOLO on a plate follows that plate until removed or expired).
- **Driver ≠ registered owner** is normal (~25% by default via `probOwnsVehicle` in `config_npc_pool.lua`) — especially on ERS callouts and borrowed/rental-style NPC stories.

**Tuning encounter rates**

In `config/config_npc_pool.lua` (defaults shown):

- `probStolenVehicle` — chance a **new** NPC vehicle record is stolen (stolen always includes BOLO on the vehicle file and ANPR auto-flag when resolved).
- `probBOLO` — additional BOLO chance on **non-stolen** NPC vehicles.
- `plateTTLMinutes` — how long NPC plate+model vehicle rows (and matching NPC ANPR auto-flags) stay active.

Patrol scan behaviour (cone dwell, equipped vehicle hashes, static cameras) is in `config/config_anpr.lua`. Set `PatrolRegistryOnly = true` there if you only want watchlist hits on the HUD with no NPC/PNC vehicle resolution for ambient traffic.

### **Permissions**
{: .no_toc #permissions }

Two layers work together: **who can open admin tools** vs **what each job role may do in the MDT while on shift**.

- **Admin permissions** — A **global admin level** (0–3: regular user, moderator, admin, super admin) decides whether someone can use the **admin panel** at all, and **which admin areas** they get (users, departments, MDT settings, penal code editor, license/document/flag types, forms, system logs, emergency-wide actions, bug reports, and the admin-permissions editor for super admins). Moderators and up can have **granular actions** inside those modules (for example view vs edit on penal codes, or which settings tabs they may change). Levels are assigned when a super admin edits **user management**; initial super-admins can be seeded in `config.lua` for first-time setup.
- **Rank permissions** — Separate from admin level: each **rank** inside a **department** has its own **permission strings** (for example PNC lookups, dispatch features, council administration). Super admins or department managers assign these when configuring **ranks**. Permissions can **inherit** from other ranks in the same department via **rank hierarchy**, so a sergeant can automatically include patrol allowances without duplicating every flag. The MDT **resolves** a player’s effective permissions when they **clock in** to a department (and refreshes when ranks or hierarchy change).

**In practice:** Admin level answers “May this person run the **server / MDT configuration** UI?” Rank permissions answer “Once clocked in as this **job role**, which **operational** menus and actions (dispatch, PNC, ANPR, …) are allowed?” A user can be a high **rank** in police without any **admin** level, and an **admin** can configure the server without needing a department rank.

**Where department + rank assignments come from.** A user’s rows in `nsmdt_user_departments` are tagged with an `assignmentSource` that records who put them there:


| Source      | Set by                                                                                                                 | Removable by                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `admin`     | A super admin / admin assigns the user via **User Management** in the admin panel                                      | Admin only — never overwritten by automatic syncs                                                                                  |
| `open_join` | The user joins a department configured as **open join** from the home page                                             | Admin, or the user leaves voluntarily                                                                                              |
| `discord`   | The optional [Discord integration](#discord-integration) maps a Discord role the user holds to that (department, rank) | Admin (manually), or removed automatically when the user loses the Discord role / the mapping is deleted / integration is disabled |


Admin assignments take precedence: if an admin edits a row that started life as `discord`, it is promoted to `admin` and stays put across syncs.

### **Server owners & admins**
{: .no_toc }

- **First-run & roles** — Initial super-admins and tiered admin levels (moderator / admin / super admin) in config; ongoing **user management** and **permission matrices** in-tablet
- **Reference data** — Departments, ranks, penal codes, license/document/flag/certification **types**, and **form builder** without editing NUI source
- **Operations** — System logs, emergency-wide actions, MDT-wide settings, and bug reports from the field

---

## 🔗 Integration & Compatibility

How Night Shifts MDT fits next to other resources. **Required** pieces are under [System Requirements](#system-requirements) (OneSync, MySQL, oxmysql). **Postal / HUD data** for addresses and map context (optional): see [Step 4: Postal codes](#step-4-postal-codes) — the MDT auto-detects supported resources on the client and does **not** use a separate postal bridge.

### **Frameworks (optional)**
{: .no_toc }

- **Standalone** — MDT works with **no** ESX / QBCore / QBox; civilians are created through council flows and staff tools unless you add a framework.
- **ESX / QBox / QBCore** — When `es_extended`, `qbx_core`, or `qb-core` is running, the **framework bridge** syncs characters into `nsmdt_civilians` and the **banking bridge** can charge **council fines** to the player’s **bank** or **cash** (`Config.FrameworkFineAccount`). Details and detection order: [Framework Compatibility](#framework-compatibility) (earlier on this page).

### **Custom Banking Bridge**
{: .no_toc #custom-banking-bridge }

The MDT’s **banking bridge** (`server/server_banking_bridge.lua`) handles **ESX, QBox and QBCore** out of the box. For everything else — a **standalone server with your own banking resource**, a heavily modified framework, or a server that just wants to **override one specific operation** — you can register handlers on `BankingBridge.Custom`. Anywhere the MDT moves money (today: **council fine payments**) will then go through your code.

A ready-to-uncomment **preset** is provided at the bottom of `server/s_functions.lua` (which is escrow-ignored and ships open). That is the recommended place to register your handlers; the file is reloaded on every resource restart and survives MDT updates.

#### **When the custom path runs (and when it doesn’t)**
{: .no_toc }

Selection happens **per call**, not globally — you can override only the operations you care about and let the framework keep handling the rest.


| Situation                                               | What runs                                                                                                                                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BankingBridge.Custom.<Op>` is registered as a function | **Your handler** runs first. Its return value is what callers receive.                                                                                                                                                 |
| Your handler **throws** an error                        | Bridge logs `^1[MDT Banking]^7 BankingBridge.Custom.<Op> threw: …` and **falls through** to the framework path (or STANDALONE). MDT never crashes from a buggy handler.                                                |
| `BankingBridge.Custom.<Op>` is `nil` / not a function   | Falls through to the **framework path** for that op (`ESX → QBox → QBCore`), or **STANDALONE** if no framework is detected.                                                                                            |
| `BankingBridge.Custom` is `nil` entirely                | Same as above — pure framework / STANDALONE behaviour, identical to MDT’s pre-custom default.                                                                                                                          |
| Standalone server, no custom registered                 | `GetPlayerMoney` returns `0`. `AddMoney` / `RemoveMoney` are **no-ops returning `true`** so caller flow (e.g. fine "paid") is not blocked. The council fine UI **skips** the deduction call entirely in this case. |
| Standalone server, custom **is** registered             | Council fines and other money calls **do** invoke your handler. The bridge’s `HasActiveBackend()` reports `true` once any custom handler is present, which is what gates the fine deduction.                           |
{: .tip }

> The custom check happens **per operation**. If you implement only `AddMoney`, calls to `GetPlayerMoney` / `RemoveMoney` will still hit the detected framework (or STANDALONE no-op). Implement all three for a fully self-contained custom backend.

#### **Handler signatures**
{: .no_toc }


| Handler          | Signature                                   | Return                                                                                                                                                   |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GetPlayerMoney` | `function(source, account)`                 | **Number** — current balance for that account. Return `0` if the player is unknown.                                                                      |
| `RemoveMoney`    | `function(source, amount, reason, account)` | **Boolean** — `true` on success; `false` on failure (e.g. insufficient funds). On `false` the council UI shows the localised "insufficient funds" toast. |
| `AddMoney`       | `function(source, amount, reason, account)` | **Boolean** — `true` on success.                                                                                                                         |


Parameters:

- `source` — player server id (`number`).
- `amount` — already validated > 0 by the bridge before your handler runs (`number`, integer once normalised).
- `reason` — human-readable string the MDT supplies (e.g. `"MDT Fine #42"`). Forward to your banking transaction history.
- `account` — one of `'cash'`, `'bank'`, `'crypto'`. The MDT itself uses `'bank'` for fines (configurable via `Config.FrameworkFineAccount`).
{: .note }

> `reason` is also the second argument to ESX `xPlayer.removeMoney` / QBCore `Player.Functions.RemoveMoney` for parity. If your banking system has no concept of a transaction reason, you can ignore the parameter — the MDT does not inspect what you do with it.

#### **Minimal example**
{: .no_toc }

In `server/s_functions.lua`, uncomment the preset block at the bottom and replace the `exports['my_banking']:…` calls with whatever your banking resource exposes:

```lua
Citizen.CreateThread(function()
    local waited = 0
    while BankingBridge == nil do
        Citizen.Wait(100)
        waited = waited + 100
        if waited >= 10000 then
            print('^1[Night Shifts MDT]^7 BankingBridge global never appeared — custom banking NOT registered.')
            return
        end
    end

    BankingBridge.Custom = {
        GetPlayerMoney = function(source, account)
            return exports['my_banking']:GetBalance(source, account) or 0
        end,
        RemoveMoney = function(source, amount, reason, account)
            return exports['my_banking']:Withdraw(source, amount, reason, account) == true
        end,
        AddMoney = function(source, amount, reason, account)
            return exports['my_banking']:Deposit(source, amount, reason, account) == true
        end,
    }
end)
```

The `Citizen.CreateThread` + polling wrapper is intentional — `s_functions.lua` loads **before** `server_banking_bridge.lua`, so the `BankingBridge` global does not exist yet at the top of this file. Polling (rather than a single `Wait(0)`) makes the registration robust against any boot-order shuffle and gives a clear console error if the bridge is somehow missing.
{: .warning }

> Do **not** call `BankingBridge.Custom.<Op>(…)` recursively from inside your own handler — that will infinite-loop. Always call your underlying banking resource’s exports directly.

#### **What currently uses the bridge**
{: .no_toc }

Today the bridge is exercised by **council fine payments** (`server/server_council.lua`). Any future feature that moves money will go through the same three functions, so registering custom handlers now future-proofs your standalone setup.

### **Emergency Response Simulator (`night_ers`)**
{: .no_toc #emergency-response-simulator-night_ers }

Optional integration for servers that run **[Emergency Response Simulator](/resources/ers/)** (`night_ers`).

- **MDT → ERS** — With `Config.Enable_ERS` in the MDT, clock-in/out can call `night_ers` so ERS shift state stays aligned (set `ManageShiftsByMDT` in ERS where applicable so the MDT owns shift toggles).
- **PNC & world** — ERS-driven NPCs and vehicles can appear in **lookups**, **ANPR**, and related flows according to your `config_npc_pool.lua` and ERS settings.
- `server.cfg` — `ensure night_shifts_mdt` before `ensure night_ers`. ERS calls MDT exports (PNC lookups, ped interactions, call forwarding, …) at startup, so the MDT has to be running first. If you do not run ERS, omit it.

#### **Requirements**
{: .no_toc }


| Requirement                                                          | Notes                                                                                                                                                                                       |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oxmysql` ≥ **2.12.0**                                               | `night_ers` requires **oxmysql v2.12.0 or newer**. We recommend running the **latest** [oxmysql release](https://github.com/overextended/oxmysql/releases/latest) on any server using ERS. |
| `night_shifts_mdt` started before `night_ers` in `server.cfg`        | Boot order matters — `night_ers` calls MDT exports (PNC lookups, ped interactions, call forwarding, …) on its own startup, so the MDT must already be running. The MDT probes `night_ers` lazily at runtime, so it does not need ERS up first. |
| `Config.Enable_ERS = true` in the MDT                                | Toggles the integration. With it off, the MDT ignores ERS entirely even if the resource is running.                                                                                         |
| `ManageShiftsByMDT` enabled on the ERS side (where applicable)       | Lets the MDT own clock-in/out so ERS shift state stays aligned with MDT shifts instead of fighting them.                                                                                    |

### **Discord integration (`night_discordapi`)**
{: .no_toc #discord-integration }

Optional integration that lets the MDT **grant department + rank automatically** based on the **Discord roles** a player holds. Intended for servers that already manage their roster in Discord and don’t want to mirror every promotion by hand in the admin panel.

This is a **separate** capability from [Discord webhooks](#discord-webhooks-optional) below — webhooks **post messages out** of the MDT, this integration **reads roles in** to decide who has access to what.

#### **What it does**
{: .no_toc }

- **Maps Discord roles → (department, rank)**. Optionally also a **sub-department** and an `isPrimary` flag. One Discord role can map to one (department, rank) pair; one user can have many mapped roles and gets all of the assignments.
- **Syncs automatically** when a player connects, when the Discord role list changes server-side (5-minute background sweep), and on demand from buttons described below.
- **Removes access automatically** when a Discord role is taken away, when its mapping is deleted in the admin panel, or when the master integration switch is turned off.
- **Never touches admin-assigned rows.** If an admin assigns or edits a department row in User Management, that row is tagged `admin` and is **never** overwritten by a sync. See the table in [Permissions](#permissions) for how the source tags interact.

#### **Requirements**
{: .no_toc }


| Requirement                                                                                                                                          | Notes                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `night_discordapi` ≥ **2.3.0**                                                                                                                       | The MDT calls `GetDiscordMemberRoleIds` (added in 2.3) to read raw role IDs. Older builds will start, but mapping by **role ID** is unavailable and only legacy name-based matching works. **Recommended:** upgrade. |
| `night_discordapi` started before `night_shifts_mdt` in `server.cfg`                                                                                 | Boot order matters — the MDT probes `GetResourceState('night_discordapi')` on connect.                                                                                                                               |
| Each player has **linked their Discord account in the FiveM app**                                                                                    | Without a Discord identifier (`GetPlayerIdentifierByType(src, 'discord')`), the integration silently skips that player. The admin panel surfaces unlinked online players so you can ask them to fix it.              |
| `night_discordapi` is configured with the **bot token + guild(s) + role table** described in its [Discord API documentation](/resources/discordAPI/) | The MDT only consumes data the API exposes; if the bot can’t see a guild or role, the MDT can’t map it.                                                                                                              |


#### **Set it up**
{: .no_toc }

All of this is done **inside the MDT admin panel** — no `config.lua` changes needed.

1. **Install and configure `night_discordapi`** as documented on its [own page](/resources/discordAPI/). Add `ensure night_discordapi` **before** `ensure night_shifts_mdt` in `server.cfg`. Restart the server.
2. **Open the MDT** as a Super Admin, go to **Admin Panel → Discord Integration**.
3. **Toggle the master switch on**. If `night_discordapi` isn’t started, the page will tell you so and the toggle stays disabled.
4. **(Optional) Restrict to specific guilds.** By default the integration reads role data from every guild your bot knows about. If you want to scope it to one or two specific Discord servers, list their **guild names** (the friendly names defined in `night_discordapi`’s `Discord_Guild_Names`).
5. **Add role → rank mappings** with the **Add mapping** button. The role picker lists every Discord role visible to the bot, grouped by guild; the department / rank pickers list everything you have configured in the MDT. Use the **Bulk add** dialog when seeding many ranks for one department in one go.

That’s it — the next time an affected player connects (or in the next 5-minute background sweep, whichever comes first), they’ll be assigned the matching department and rank and the home page will reflect it.
{: .tip }

> Map the **role ID** (the dropdown does this automatically when `night_discordapi` ≥ 2.3 is running). Discord role **names** can be renamed at any time and the mapping list will flag renamed or missing roles with badges so you can clean them up.

#### **Refreshing roles**
{: .no_toc }


| Trigger                                           | Who        | Cooldown | Forces a fresh Discord fetch?        |
| ------------------------------------------------- | ---------- | -------- | ------------------------------------ |
| Player connects                                   | Automatic  | —        | Yes (initial seed)                   |
| Player opens the MDT                              | Automatic  | —        | No (uses cached roles)               |
| **5-minute background sweep**                     | Automatic  | —        | Yes                                  |
| **"Refresh roles" button** on the home page       | Per-player | 30 s     | Yes                                  |
| **"Resync all online" button** in the admin panel | Per-admin  | 30 s     | Yes (for every linked online player) |


The two manual buttons exist so you don’t have to wait up to 5 minutes after a Discord-side change. They don’t conflict with the background sweep — `night_discordapi` collapses overlapping requests for the same player.

#### **Disabling the integration**
{: .no_toc }

Flipping the master switch off does **two** things immediately:

1. Stops all future Discord syncs (the home-page Refresh button hides itself for every online player).
2. **Bulk-deletes every department row tagged `assignmentSource = 'discord'`** so any access that was granted via Discord is revoked at once. **Admin** and **open-join** rows are untouched.

This is intentional — leaving Discord-granted access in place after disabling the integration would mean players keep permissions you can no longer manage from Discord. If you want to keep specific people in their departments, re-add them via **User Management** before turning the integration off, and they’ll be tagged `admin` and protected.

#### **Who can use the page**
{: .no_toc }

The Discord Integration admin page is gated by the new **Discord Integration** module in the [Admin Permissions editor](#permissions). Defaults:


| Level                   | Page access | manage_settings | manage_mappings | resync |
| ----------------------- | ----------- | --------------- | --------------- | ------ |
| 0 User · 1 Moderator    | ✗           | ✗               | ✗               | ✗      |
| 2 Admin · 3 Super Admin | ✓           | ✓               | ✓               | ✓      |


Each action is editable per level by a Super Admin, so e.g. a Moderator can be granted **resync** alone (handy after a Discord-side restructure) without being able to alter mappings or flip the master switch.

---

### **Discord webhooks (optional)**
{: .no_toc #discord-webhooks-optional }

**Different mechanism** to the [Discord integration](#discord-integration) above — webhooks **post messages out** of the MDT to a Discord channel (dispatch alerts, admin audit), they do **not** read Discord roles or affect access. You can run either, both, or neither.

The **implementation** (reading URLs and posting embeds) lives in `server/s_functions.lua`; you do **not** paste webhook URLs into that file on a normal install.

**URLs** are read from **server convars** at runtime:

- `nsmdt_discord_webhook_dispatch` — dispatch-related notifications  
- `nsmdt_discord_webhook_admin` — admin audit–style notifications

Set them in `server.cfg` (or any supported way you set FiveM convars), for example:

```conf
set nsmdt_discord_webhook_dispatch "https://discord.com/api/webhooks/…"
set nsmdt_discord_webhook_admin "https://discord.com/api/webhooks/…"
```

If a convar is empty or missing, the MDT **skips** posting for that channel (same behaviour as documented in the Lua comments above those convar names).

### **Calling the MDT from other resources**
{: .no_toc }

Other scripts can use `exports['night_shifts_mdt']` (name must match your resource folder). See [Exports](#exports) below.

### **ERS + CAD / other scripts (summary for server owners)**
{: .no_toc #ers-peddata-enrichment }

If you run **[Emergency Response Simulator](/resources/ers/)** together with Night Shifts MDT, you usually **do not need to change anything** for in-game ID checks: ERS keeps showing the same licence lines on the NPC card; the values now come from the **MDT** when a civilian is linked.

**Setup you should know about**

- **`server.cfg`:** keep **`ensure night_shifts_mdt` before `ensure night_ers`**, as in both guides.
- **Licence types:** The five **ERS** licence types (driver, motorcycle, boat, pilot, commercial) use **fixed internal ids** so NPC pools and the ERS ped card stay consistent. In **Admin → License Types** they show a small **lock** icon; you can edit the **display name** for localization, but **delete** and changing **prefix / behaviour / id** are blocked. Other licence types (hunting, fishing, etc.) work as before.
- **PNC flag types (Important Notices):** Preset types used with ERS show a small **lock** icon in **Admin → Flag Types** (same idea as ERS licence types). You can still **edit labels** and settings; **deleting** those preset types is **blocked** (a migration may re-add any missing presets on upgrade). **Custom** flag types behave as before in the MDT; on the NPC card, keep using **`pedData.FlagsOrMarkers`** like plain ERS — see **[ERS → Field ownership](/resources/ers/#ers-mdt-field-ownership)**.
- **CAD or custom resources** listening to ERS events: see **[ERS → Field ownership](/resources/ers/#ers-mdt-field-ownership)** for which fields come from the MDT vs ERS. **`mdtCivilianId`** on the ped payload is the MDT civilian record number; **`mdtPersonalId`** is the public dossier id when present (e.g. `CIV-…`).

**Licences on the ped card** — With the MDT on, the **`License_*`** fields match what ERS has always used (including valid/invalid styling). With the MDT off, ERS still generates random licence results as before.

**“Flags / markers” on the ped card** — Same as ERS without the MDT: your scripts keep using **`pedData.FlagsOrMarkers`**. With the MDT on, that data comes from the civilian’s **Important Notices** instead of being rolled at random. See [ERS — field ownership / NPC payload](/resources/ers/#ers-mdt-field-ownership) for the full `pedData` table.

---

## 📊 Exports
{: #exports }

{: .warning }

> **For developers only.** Use this section if you are **writing or integrating another FiveM resource** (e.g. CAD, dispatch bridge) that must call the MDT from Lua. **Normal install:** set up `server.cfg`, configure the MDT in-game, and edit the Lua config files above—you can **ignore Exports** unless your team is adding custom code.

### **How this section is organised**
{: .no_toc }


| Kind                 | Meaning                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Getter**           | Read-only; returns data (or calls your **callback** with data).                                                 |
| **Setter / mutator** | Writes or updates server-side state (DB and/or cache).                                                          |
| **Action**           | Performs a side effect (create call, relay event, open UI). Check return values and callbacks where documented. |


---

### **Server — integration exports**
{: .no_toc }

#### **Getters**
{: .no_toc }

##### `GetUserShiftData(targetServerId)`


|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `targetServerId` (number) — FiveM player **server id** (`source` from events, or any valid id).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Returns**     | **Single table** (not an array). Empty `{}` if the player cannot be resolved or has no session. Keys (values may be `nil` when not on shift or not yet pushed): `serverId`, `rockstarLicense`, `userName`, `nickName`, `adminLevel`, `isOnShift`, `departmentId`, `subDepartmentId`, `rankId`, `callsign`, `statusCode`, `statusLabel`, `statusColor`, `shiftDuration` (seconds), `totalShiftTime`, `shiftTimeByDepartment` (table), `location`, `speed`, `heading`, `compassDirection`, `postal`, `distanceToNearestPostal`, `street`, `zone`, `modeOfTransport`, `sirens`, `plate`. |
| **Limitations** | **Server-only.** Location fields depend on the client having pushed location while on shift; they may be empty/nil shortly after clock-in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


```lua
local mdt = exports['night_shifts_mdt']
local data = mdt:GetUserShiftData(source)
if data.isOnShift then
    print(data.userName, data.callsign, data.statusCode or "")
    print("Location:", data.street or "—", data.postal or "")
end
```

##### `GetPostalForPlayer(source)`


|                 |                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Parameters**  | `source` (number) — player server id. Invalid id returns the translated unknown postal string. |
| **Returns**     | **String** — postal / zone code for that player’s **current ped position**.                    |
| **Limitations** | **Server-only.** Without a supported postal backend, you only get the unknown label.           |


Resolution order (same behaviour as [Step 4: Postal codes](#step-4-postal-codes)):

1. `rhud` — if started, `exports.rhud:get_postal` at the ped’s X/Y.
2. `SimpleHUD` or `ModernHUD` — if started, `getPostal(source)` on that resource.
3. **Static postal data** — nearest code from `mnr_postals`, `nearest-postal`, or JSON via `postal_file` metadata, using the ped’s coordinates.

```lua
local postal = exports['night_shifts_mdt']:GetPostalForPlayer(source)
```

##### `GetCivilianIntegrationSnapshot(civId, callback)`

**When you need this:** Only if you run **custom server-side code** (for example a CAD or bridge) that must load PNC **licences**, **flags/markers**, and **police records** for one civilian using their MDT **`nsmdt_civilians.id`**—often the same number as **`mdtCivilianId`** on an ERS ped after MDT merge. Standard installs and in-game play do **not** call this export.

|                 |                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `civId` (number) — `nsmdt_civilians.id` (e.g. `pedData.mdtCivilianId` from ERS after an MDT merge). `callback` (function) — `callback(snapshot)`.                                                                                                                                       |
| **Returns**     | Nothing synchronously. `callback` receives **`snapshot`**: `civilianId`, **`licenses`** (array, from MySQL — same shape as in-tablet PNC; overlaps summary fields on `pedData.License_*` but includes full rows), **`flagsMarkers`** (array — **all** cached rows for this civilian), **`policeRecords`** (array, from cache). |
| **Limitations** | **Server-only.** **Async.** Invalid `civId` or non-function `callback` → ignored. **`flagsMarkers`** / **`policeRecords`** follow the **MDT cache**. **Granular only:** `GetLicensesByCivilianId`, `GetAllFlagsMarkersByCivilianId`, `GetPoliceRecordsByCivilianId` when you do not need the bundle. |


```lua
local cid = pedData.mdtCivilianId
if cid then
  exports['night_shifts_mdt']:GetCivilianIntegrationSnapshot(cid, function(s)
    -- s.licenses, s.flagsMarkers, s.policeRecords
  end)
end
```

See [ERS & CAD — pedData and PNC extras](#ers-peddata-enrichment).

##### `GetDepartments()`


|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Returns**     | **Array table** of **active** department rows from cache (`SELECT *` from `nsmdt_departments`, filtered to `isActive`). Each element is a **table** with at least: `id`, `departmentName`, `departmentShortName`, `departmentDescription`, `departmentIcon`, `departmentBanner`, `departmentLogo`, `departmentType`, `departmentColor`, `blipColour`, `blipSprite`, `displayOrder`, `isActive`, `createdAt`, `createdBy`, `modifiedAt`, `modifiedBy`. |
| **Limitations** | **Server-only.** Archived departments (`isActive = 0`) are **omitted** (clock-in pickers only see active rows).                                                                                                                                                                                                                                                                                                                                                                                                           |


```lua
for _, d in ipairs(exports['night_shifts_mdt']:GetDepartments()) do
    print(d.id, d.departmentName)
end
```

##### `GetRanksByDepartmentId(departmentId)`


|                 |                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `departmentId` (number).                                                                                                                                                                                                                                                                                                                                                |
| **Returns**     | **Array table** of rank rows for that department from cache. Each element includes: `id`, `departmentId`, `departmentName` (joined from departments), `rankName`, `rankShortName`, `rankDescription`, `rankOrder`, `permissions` (**array** of permission **strings**, e.g. PNC/dispatch flags — parsed from `nsmdt_rank_permissions`). |
| **Limitations** | **Server-only.** Empty `{}` if `departmentId` is invalid or there are no ranks.                                                                                                                                                                                                                                                                                         |


```lua
local ranks = exports['night_shifts_mdt']:GetRanksByDepartmentId(1)
```

##### `GetSubDepartmentsByDepartmentId(departmentId)`


|                 |                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `departmentId` (number).                                                                                                                                                                                                                                                                                                                                          |
| **Returns**     | **Array table** of sub-department rows for that department from cache. Each element includes: `id`, `departmentId`, `departmentName` (joined), `subDepartmentName`, `subDepartmentShortName`, `subDepartmentDescription`, `displayOrder`, `createdAt`. Use `id` as `subDepartmentId` when calling `StartShiftByServerId`. |
| **Limitations** | **Server-only.** Empty `{}` if the department has no sub-departments or id is invalid.                                                                                                                                                                                                                                                                            |


```lua
local sub = exports['night_shifts_mdt']:GetSubDepartmentsByDepartmentId(1)
```

##### `GetSetting(key)`


|                 |                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `key` (string) — e.g. `currency`, `currencyPosition`, `timeFormat`, `dateFormat`, `speedUnit`, `vehicleInspectionEnabled`, `vehicleInspectionLabel`, alert duration keys. |
| **Returns**     | Value for that setting (type depends on key).                                                                                                                             |
| **Limitations** | **Server-only.** Read-only.                                                                                                                                               |


```lua
local mdt = exports['night_shifts_mdt']
print(mdt:GetSetting('currency'), mdt:GetSetting('speedUnit'))
```

##### `GetAllSettings()`


|                 |                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Parameters**  | None.                                                                                        |
| **Returns**     | **Table** — full settings (defaults merged with DB), including `alertDurations` and similar. |
| **Limitations** | **Server-only.** Read-only.                                                                  |


```lua
local settings = exports['night_shifts_mdt']:GetAllSettings()
```

##### `GetCurrencySymbol()`


|                 |                                              |
| --------------- | -------------------------------------------- |
| **Parameters**  | None.                                        |
| **Returns**     | **String** — display symbol (e.g. `$`, `€`). |
| **Limitations** | **Server-only.**                             |


```lua
local symbol = exports['night_shifts_mdt']:GetCurrencySymbol()
```

##### `GetCurrentLanguage()`


|                 |                                         |
| --------------- | --------------------------------------- |
| **Parameters**  | None.                                   |
| **Returns**     | **String** — language code (e.g. `en`). |
| **Limitations** | **Server-only.**                        |


##### `GetAvailableLanguages()`


|                 |                                      |
| --------------- | ------------------------------------ |
| **Parameters**  | None.                                |
| **Returns**     | **Table** — array of language codes. |
| **Limitations** | **Server-only.**                     |


```lua
for _, code in ipairs(exports['night_shifts_mdt']:GetAvailableLanguages()) do print(code) end
```

##### `GetActiveShiftByServerId(serverId)`


|                 |                                                       |
| --------------- | ----------------------------------------------------- |
| **Parameters**  | `serverId` (number) — player server id.               |
| **Returns**     | Active shift **table**, or `nil` if not on shift. |
| **Limitations** | **Server-only.** Raw shift object (internal shape).   |


```lua
local shift = exports['night_shifts_mdt']:GetActiveShiftByServerId(source)
if shift then print(shift.callsign, shift.departmentId, shift.statusCode) end
```

##### `GetCurrentShiftDurationByServerId(serverId)`


|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **Parameters**  | `serverId` (number) — player server id.                             |
| **Returns**     | **Number** — seconds in the current shift; `0` if not on shift. |
| **Limitations** | **Server-only.**                                                    |


```lua
local seconds = exports['night_shifts_mdt']:GetCurrentShiftDurationByServerId(source)
```

#### **Actions — Shift**
{: .no_toc }

##### `StartShiftByServerId(serverId, departmentId, subDepartmentId, rankId, callsign)`


|                 |                                                                                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `serverId` — player server id. `departmentId`, `subDepartmentId`, `rankId` — from `GetDepartments` / `GetRanksByDepartmentId` / `GetSubDepartmentsByDepartmentId`. `callsign` — string you want for this shift (export does **not** load a saved callsign from the DB; empty → `"UNASSIGNED"`). |
| **Returns**     | `success` (boolean), `result` (table or error string). On success, `result.callsign` reflects what was stored.                                                                                                                                                                                  |
| **Limitations** | **Server-only.** Player must already have an MDT session.                                                                                                                                                                                                                                                       |


```lua
local mdt = exports['night_shifts_mdt']
local depts = mdt:GetDepartments()
local dept = nil
for _, d in ipairs(depts) do
    if d.departmentName == "LSPD" then dept = d; break end
end
if not dept then return end
local ranks = mdt:GetRanksByDepartmentId(dept.id)
local rank = nil
for _, r in ipairs(ranks) do
    if r.rankName == "Officer" then rank = r; break end
end
if not rank then return end
local success, result = mdt:StartShiftByServerId(source, dept.id, nil, rank.id, "L-42")
if success then print("Clocked in:", result.callsign) else print("Failed:", tostring(result)) end
```

##### `EndShiftByServerId(serverId [, callback])`


|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Parameters**  | `serverId` (number). `callback` (optional) — `function(success, durationOrError, totalTime)`. |
| **Returns**     | `success` (boolean), `duration` (number or error string), `totalTime` (number).   |
| **Limitations** | **Server-only.**                                                                              |


```lua
local mdt = exports['night_shifts_mdt']
local ok, duration, total = mdt:EndShiftByServerId(source)
mdt:EndShiftByServerId(source, function(success, durationOrErr, totalTime)
    if success then print("Ended. Duration:", durationOrErr) end
end)
```

##### `UpdateShiftStatusByServerId(serverId, statusCode [, callback])`


|                 |                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Parameters**  | `serverId` (number). `statusCode` (string) — e.g. `10-8`, `10-6` (must exist for the department). |
| **Returns**     | `success` (boolean), `result` (string or nil).                                            |
| **Limitations** | **Server-only.**                                                                                  |


```lua
local ok, err = exports['night_shifts_mdt']:UpdateShiftStatusByServerId(source, "10-8")
```

##### `UpdateShiftStatusByBindingByServerId(serverId, binding [, callback])`


|                 |                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Parameters**  | `serverId` (number). `binding` (string) — one of `available`, `responding`, `on_scene`, `panic`. `callback` (optional) — `function(success, resultOrError)`. |
| **Returns**     | `success` (boolean), `resultOrError` (string or nil). On success, the resolved `statusCode`.                                                                 |
| **Limitations** | **Server-only.** Silent no-op when the department has no status configured for the binding. Requires `night_shifts_mdt` v1.4.1+.                             |


```lua
local mdt = exports['night_shifts_mdt']
mdt:UpdateShiftStatusByBindingByServerId(source, 'responding')
mdt:UpdateShiftStatusByBindingByServerId(source, 'on_scene')
mdt:UpdateShiftStatusByBindingByServerId(source, 'available')
mdt:UpdateShiftStatusByBindingByServerId(source, 'panic')
```

##### `UpdateCallsignByServerId(serverId, newCallsign)`


|                 |                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Parameters**  | `serverId` (number). `newCallsign` (string) — alphanumeric, spaces, hyphens; max **20** characters. |
| **Returns**     | `success` (boolean), `result` (table or error string).                                      |
| **Limitations** | **Server-only.**                                                                                    |


```lua
exports['night_shifts_mdt']:UpdateCallsignByServerId(source, "L-99")
```

#### **Actions — Dispatch**
{: .no_toc }

##### `ForwardCallToMDT(callData [, callback])`


|                 |                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | `callData` (table) — see required fields below. `callback` (optional) — `function(success, callId)`.                                                                                                                                                                   |
| **Returns**     | Nothing useful synchronously; use `callback` when you need `callId`.                                                                                                                                                                                                   |
| **Limitations** | **Server-only.** Validation **rejects** if `callType` or `description` is empty; `x`/`y` missing or both zero; or **no** routing flag is set. At least one of `requiresPolice`, `requiresAmbulance`, `requiresFire`, `requiresTow`, `requiresCouncil` must be `1`.     |


**Required `callData`**


| Field                                                                                       | Rule                       |
| ------------------------------------------------------------------------------------------- | -------------------------- |
| `callType`                                                                                  | Non-empty string           |
| `description`                                                                               | Non-empty string           |
| `x`, `y`                                                                                    | Numbers; **not** both zero |
| `requiresPolice` / `requiresAmbulance` / `requiresFire` / `requiresTow` / `requiresCouncil` | At least one `1`           |


**Optional `callData` (examples)**


| Field                            | Notes                            |
| -------------------------------- | -------------------------------- |
| `priority`                       | Default **3** (grades 1–5).      |
| `priorityLabel`, `priorityColor` | Override from settings.          |
| `incidentRef`                    | Dispatcher reference (e.g. CAD). |
| `callerName`, `contactDetails`   | Reporting party.                 |
| `z`                              | Optional height.                 |
| `street`, `postal`, `zone`       | Display on call card.            |


```lua
exports['night_shifts_mdt']:ForwardCallToMDT({
    callType = "Road Traffic Collision",
    description = "Two vehicles, one driver unconscious.",
    x = -561.3, y = -199.7, z = 37.9,
    requiresPolice = 1, requiresAmbulance = 1,
    requiresFire = 0, requiresTow = 0, requiresCouncil = 0,
    priority = 2, callerName = "Dispatch", contactDetails = "555-0100",
}, function(success, callId)
    if success then print("Call #" .. tostring(callId)) end
end)
```

---

### **Client — integration exports**
{: .no_toc }

#### **Getters**
{: .no_toc }

##### `IsMenuOpen()`


|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Returns**     | **Boolean** — whether the MDT NUI/tablet is considered open. |
| **Limitations** | **Client-only.**                                             |


```lua
if exports['night_shifts_mdt']:IsMenuOpen() then
    -- tablet is up
end
```

##### `IsOnPoliceShift()` · `IsOnAmbulanceShift()` · `IsOnFireShift()` · `IsOnTowShift()` · `IsOnCouncilShift()`


|                 |                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Returns**     | **Boolean** each — whether the **local player** is clocked into that department **type** (synced from MDT state). |
| **Limitations** | **Client-only.** At most **one** shift type at a time. Cached; MDT does not need to be open.                      |


```lua
local mdt = exports['night_shifts_mdt']
if mdt:IsOnPoliceShift() then
    -- police shift HUD branch
elseif mdt:IsOnAmbulanceShift() then
    -- ambulance shift HUD branch
end
```

##### `GetPlayerCallsign()`


|                 |                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | None.                                                                                                                                                                                                                                                                                              |
| **Returns**     | **String** — the local player's current shift callsign (e.g. `"L-42"`), or `nil` when the player is not on shift.                                                                                                                                                                                  |
| **Limitations** | **Client-only.** Cached from `receiveShiftData`, `shiftStarted`, and `callsignUpdated` events; the MDT does not need to be open. The player must have opened the MDT at least once during the session for the server to start sending shift updates (same constraint as the `IsOn*Shift` exports). |


```lua
if GetResourceState("night_shifts_mdt") == "started" then
    local callsign = exports['night_shifts_mdt']:GetPlayerCallsign()
    if callsign then
        print("Callsign: " .. callsign)
    else
        print("Player is not on shift")
    end
else
    print("[ERROR] You have enabled the callsign feature but night_shifts_mdt is not started.")
end
```

#### **Actions (tablet / UI)**
{: .no_toc }

##### `OpenMenu()` · `CloseMenu()` · `ToggleMenu()`


|                 |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| **Parameters**  | None.                                                                        |
| **Returns**     | Depends on internal helpers; use for **control flow**, not strict contracts. |
| **Limitations** | **Client-only.** May interact with focus/NUI; avoid re-entrancy spam.        |


```lua
exports['night_shifts_mdt']:OpenMenu()
```

#### **Actions (dispatch)**
{: .no_toc }

##### `ForwardCallToMDT(callData)`


|                 |                                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parameters**  | Same **validation rules** as the **server** export (`callType`, `description`, `x`/`y`, at least one `requires*` = `1`). Optional: `attachCreatingUnit = true` or `1` — attach the **local player** as a unit on the new call (must be clocked in). |
| **Returns**     | Nothing.                                                                                                                                                                                                                                                        |
| **Limitations** | **Client-only.** **No callback** — cannot read `callId` here. Use **server** `ForwardCallToMDT` if you need `callId`. Server receives attach intent as `1`/`0` for reliable serialization.                                                                      |


```lua
exports['night_shifts_mdt']:ForwardCallToMDT({
    callType = "Medical Emergency",
    description = "Person down near the pier.",
    x = -1850.0, y = -1230.0, z = 13.0,
    requiresPolice = 0, requiresAmbulance = 1,
    requiresFire = 0, requiresTow = 0, requiresCouncil = 0,
    callerName = "Civilian", contactDetails = "555-0199",
})
```

---

## 🚑 Medical Records (Ambulance Panel)

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

### 🩺 Configuring medical types (admin)

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

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }

> **Parsing Errors in F8 Console**
>
> - Ensure files are transferred in binary mode via FTP
> - Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg
{: .warning }

> **Database Connection Issues**
>
> - Verify MySQL connection string is correct
> - Check database credentials and accessibility
> - Ensure oxmysql is properly installed and started before the scripts that use it.
{: .warning }

> **FiveM ID Not Found**
>
> - Log into FiveM app when inside the app
> - Close and reopen FiveM app
> - Join server as a logged in user
{: .warning }

> **Resource Naming**
>
> - Use the **shipped** resource folder name (v1 default: `night_shifts_mdt`). Renaming breaks `exports['…']` calls and **ERS** checks that expect the MDT resource name.
> - Keep `config/`, `client/`, `server/`, and `fxmanifest.lua` layout intact.

---

## 💡 Best Practices

### **Configuration Tips**
{: .no_toc }

- **Role Planning** - Plan departments, ranks, and in-tablet permission matrices before go-live
- **Department Structure** - Plan department, sub-department, and rank hierarchy
- **Language Localization** - Configure for your country's emergency services
- **Backup Configurations** - Keep backups of working configurations

### **Database Management**
{: .no_toc }

- **Regular Backups** - Backup your database regularly
- **Performance Monitoring** - Monitor database performance
- **Table Maintenance** - Periodically optimize database tables

### **User Experience**
{: .no_toc }

- **Clear Documentation** - Provide users with MDT usage guidelines
- **Role Training** - Train users on department-specific features
- **Emergency Procedures** - Establish clear emergency call procedures

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}