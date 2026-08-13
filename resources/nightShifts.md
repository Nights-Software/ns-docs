---
layout: default
title: "Night Shifts MDT v1"
nav_order: 5
has_children: false
has_toc: true
last_modified_date: "2026-08-13"
---

# Night Shifts - Mobile Data Terminal for FiveM
{: .no_toc}

Installation and integration guide for **Night Shifts MDT (v1)** on FiveM.
- *Crafted by [Nights Software](https://store.nights-software.com/)*
{: .fs-5 .fw-300 }

---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## 🛒 Purchase Information

**Get Night Shifts MDT:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5667103){: .btn .btn-blue}

---

## ⚠️ Important Pre-Installation Notes

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

> **Visual Studio Code:** We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
{: .tip }

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

Other scripts can use `exports['night_shifts_mdt']` (folder name must match). Use this page’s [Exports](#exports) section for signatures, rules, and examples. The same integration guide also ships in the resource as **`docs/EXPOSED_EXPORTS.md`** (the only docs file included in the production pack).

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

> **For developers only.** Use this section if you are writing or integrating another FiveM resource (CAD, dispatch bridge, AI) that must call the MDT from Lua. Normal install: set up `server.cfg`, configure the MDT in-game, and edit the Lua config files above. You can ignore Exports unless your team is adding custom code.
{: .warning }

> **Support rule:** Exports documented here (and in the resource file `docs/EXPOSED_EXPORTS.md`) are the supported integration API. If it is not documented here, treat it as unsupported (it may change without notice).
{: .note }

### Which path

Pick a path **before** you pick a function name.

| You are | Use | First argument | Audit stamp |
| -------- | --- | -------------- | ----------- |
| A tablet or CAD terminal a player is using | Officer / terminal (`*ByServerId`) | That player’s `source` | Their Rockstar license |
| Another resource with no player (AI dispatch, ERS, webhook, cron) | System writes (no `ByServerId`, no `source`) | Payload table only | `system:<your resource>` |
| Only reading or listening | Reads and Events | None | None |

> Do not `UPDATE nsmdt_calls` or write `assignedUnits` yourself — that is why open MDTs go stale. `assignedUnits` is a denormalized object blob plus `nsmdt_call_units` rows, not a JSON array of callsign strings. Do not fire internal NUI/net events to “refresh”. Do not pass a fake `source` into `*ByServerId` to impersonate a dispatcher. Do not call a system export from a terminal when the click must be that officer. Shift clock-in/out, callsign, and own status have no system twin — `serverId` is the subject.
{: .warning }

There is no extra dispatcher login and no hidden dispatcher-only API. Dispatch for a human is rank permissions on a clocked-in officer (`dispatch.assign_units`, `dispatch.resolve_call`, …). An automated dispatcher is the system path.

#### Shared contracts

- **Call pattern:** `exports['night_shifts_mdt']:ExportName(...)` — use the **colon**. Dot or bracket calls can drop the first argument on CitizenFX.
- **Writes:** `callback(ok, resultOrError)` — `ok == true` and `result` is a table, or `ok == false` and the second arg is an error string. Exception: `ForwardCallToMDT` returns the new call id as a **number** in the second arg.
- **Board / catalogue reads:** pass a callback. The list arrives in that function (MySQL). Do not document or rely on the no-callback memory snapshot.
- **System audit:** `performedBy` is `system:<your resource folder>`. User FK columns (`issuedBy`, `createdBy`, `executedBy`, …) stay `NULL`.
- **Officer:** first arg is a connected, clocked-in `source`. Audit is that player’s license. Creates infer `departmentId` from the active shift.
- **Trust model:** any started server resource can call these. There is no allowlist.
- **Identity:** civilians are `nsmdt_civilians` rows (`id` / `personalId`). Vehicles belong to a civilian (`civId`). Warrants, flags, and fines target `civId`. Do not invent rows with SQL.

#### How to read a card

Every export below is a **server** Lua call unless the heading says Client. Each card has a **copy-paste Example** under the tables — that is the call you write.

| Word on the card | What you write | What you get |
| ---------------- | -------------- | ------------ |
| **sync** | `local x = exports['night_shifts_mdt']:GetVersion()` | The value is the **return** of the export. No callback. |
| **callback** (reads) | `exports['night_shifts_mdt']:GetPenalCodes(function(rows) … end)` | The list arrives **inside** that function. The export itself returns nothing useful. |
| **callback ok / fail** (writes) | `exports['night_shifts_mdt']:SetCallStatus({ … }, function(ok, result) … end)` | `ok == true` → `result` is a table. `ok == false` → `result` is an error string. |

#### Pairing index (same job, two exports)

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

### Worked scenarios

<details markdown="block">
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

<details markdown="block">
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

<details markdown="block">
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

### Reads

**When to use:** Look up identity, boards, duty, settings, or catch up after an event.

**When not to:** Do not use reads to mutate state.

Two styles:

- **Returns a value** (`GetVersion`, `GetDepartments`, `GetActiveCalls`) — assign it.
- **Takes a callback** (`GetPenalCodes`, `GetActiveFlagsMarkers`, person-file reads) — the rows arrive in that function. That is the real data (MySQL). Without a callback you only get a warm memory snapshot, which can be empty after a restart.

#### Version, settings, translations, departments

These are **sync** except the three catalogues at the bottom (`GetPenalCodes`, `GetFlagTypes`, `GetLicenseTypes`).

##### `GetVersion`

Resource version from `fxmanifest.lua`. Use it to require a minimum MDT build.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync string, e.g. `"1.4.9"`.

Example
{: .text-delta }

```lua
local version = exports['night_shifts_mdt']:GetVersion()
print(version)
```

##### `GetSetting`

One Admin → MDT Settings value.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| key | string | yes | See common keys below |

Returns
{: .text-delta }

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
{: .text-delta }

```lua
local currency = exports['night_shifts_mdt']:GetSetting('currency')
print(currency)
```

##### `GetAllSettings`

Same values as `GetSetting`, all at once. This is a **dictionary** (`settings.currency`), not a list. `#settings` is always `0` even when it is full — iterate with `pairs`.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync table keyed by setting name. Also includes assembled `alertDurations` and normalized `cursorAwayEnabled` / `infoHudEnabled` flags for the tablet.

Example
{: .text-delta }

```lua
local settings = exports['night_shifts_mdt']:GetAllSettings()
print(settings.currency, settings.timeFormat)
for key, value in pairs(settings) do
  print(key, value)
end
```

##### `GetCurrencySymbol`

Display symbol for `GetSetting('currency')`. Prefer this over hard-coding `$`.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync string (`$`, `€`, `£`, `kr`, …). Unknown codes fall back to `$`.

Example
{: .text-delta }

```lua
local symbol = exports['night_shifts_mdt']:GetCurrencySymbol()
print(symbol)
```

##### `GetCurrentLanguage`

Active translation code.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync string (`en`, `de`, `fr`, …).

Example
{: .text-delta }

```lua
local lang = exports['night_shifts_mdt']:GetCurrentLanguage()
print(lang)
```

##### `GetAvailableLanguages`

Every locale file the resource loaded.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync array of language-code strings.

Example
{: .text-delta }

```lua
local languages = exports['night_shifts_mdt']:GetAvailableLanguages()
print(languages[1])
```

##### `GetDepartments`

Active departments only (clock-in pickers). Archived departments stay in cache for PNC joins but are **not** in this list.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

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
{: .text-delta }

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
print(#depts, depts[1] and depts[1].departmentName)
```

##### `GetRanksByDepartmentId`

Ranks for one department (clock-in / `StartShiftByServerId`).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | `depts[i].id` |

Returns
{: .text-delta }

sync array of rank rows (`id`, `departmentId`, `rankName`, `rankShortName`, …). Empty `{}` if the id is unknown.

Example
{: .text-delta }

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
local ranks = exports['night_shifts_mdt']:GetRanksByDepartmentId(depts[1].id)
print(ranks[1] and ranks[1].rankName)
```

##### `GetSubDepartmentsByDepartmentId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | |

Returns
{: .text-delta }

sync array of sub-department rows (`id`, `departmentId`, `subDepartmentName`, `subDepartmentShortName`, …). Empty `{}` if none.

Example
{: .text-delta }

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
local subs = exports['night_shifts_mdt']:GetSubDepartmentsByDepartmentId(depts[1].id)
print(#subs)
```

##### `GetPenalCodes`

Charge / fine pick-list. **Callback required.**

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(codes)` |

Returns
{: .text-delta }

none as a return value. `callback` receives an array of penal-code rows (`id`, `codeNumber`, `title`, …). Use `id` as `penalCodeId` on fines and charges.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetPenalCodes(function(codes)
  print(#codes, codes[1] and codes[1].codeNumber)
end)
```

##### `GetFlagTypes`

Enabled PNC flag types. **Callback required.**

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(types)` |

Returns
{: .text-delta }

none as a return value. `callback` receives enabled flag-type rows. Use the type id/string as `flagType` on `CreateFlag`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetFlagTypes(function(types)
  print(#types, types[1] and types[1].id)
end)
```

##### `GetLicenseTypes`

Enabled license types. **Callback required** — same pattern as `GetPenalCodes` / `GetFlagTypes`. No useful return value.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(rows)` |

Returns
{: .text-delta }

none as a return value. `callback` receives license-type rows. Use the type id/string as `licenseType` on `IssueLicense`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetLicenseTypes(function(rows)
  print(#rows, rows[1] and rows[1].id)
end)
```

#### Identity and PNC boards

##### `GetCivilianIntegrationSnapshot`

Full civilian plus related snapshot (licenses, vehicles, …).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | `nsmdt_civilians.id` |
| callback | function | yes | `function(snapshot)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | snapshot table, or empty / nil if unknown |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCivilianIntegrationSnapshot(42, function(snapshot)
  print(snapshot and snapshot.id)
end)
```

##### `GetCivilianByPersonalId`

Lookup by public dossier id (e.g. `CIV-…`).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| personalId | string | yes | |
| callback | function | recommended | `function(civ)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | civilian row (`id`, `civilianId`, `personalId`, `isFrameworkLinked`, …) or nil |
| sync | same row from cache, or nil |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCivilianByPersonalId('CIV-1001', function(civ)
  print(civ and civ.id, civ and civ.firstName)
end)
```

##### `GetCivilianByFrameworkId`

Alias: `GetCivilianByIdentifier`.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| frameworkId | string | yes | ESX `identifier` or QB/QBox `citizenid` |
| callback | function | recommended | `function(civ)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | decorated civilian row or nil |
| sync | cache hit or nil |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCivilianByFrameworkId('char1:abc123', function(civ)
  print(civ and civ.id)
end)
```

##### `GetCiviliansByServerId`

All MDT person-files linked to that player’s Rockstar license.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | Connected player |
| callback | function | recommended | `function(civs)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of decorated civilian rows |
| sync | cache array (may be empty) |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCiviliansByServerId(source, function(civs)
  print(#civs, civs[1] and civs[1].personalId)
end)
```

##### `GetCiviliansByLicense`

Same as `GetCiviliansByServerId`, but you pass the license string.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| rockstarLicense | string | yes | |
| callback | function | recommended | `function(civs)` |

Returns
{: .text-delta }

same as `GetCiviliansByServerId`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCiviliansByLicense('license:abc123', function(civs)
  print(#civs)
end)
```

##### `ResolveFrameworkLinkedCivilianByServerId`

Best framework-linked civilian for that player. No license fallback — `frameworkId` match only.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| callback | function | recommended | `function(civ)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | one civilian row or nil |
| sync | one civilian row or nil |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ResolveFrameworkLinkedCivilianByServerId(source, function(civ)
  print(civ and civ.id)
end)
```

##### `SearchCivilians`

Substring search. Query must be at least 2 characters. Limit capped at 50.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| query | string | yes | Name, personal id, framework id, or numeric civ id |
| limitOrOpts | number or table | no | number, or `{ limit = n }` |
| callback | function | yes | `function(rows)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of `{ civilianId, firstName, lastName, personalId, frameworkId, isFrameworkLinked }` |
| sync | none |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SearchCivilians('Smith', 20, function(rows)
  print(#rows, rows[1] and rows[1].personalId)
end)
```

##### `GetVehiclesByCivilianId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(vehicles)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of vehicle rows |
| sync | cache array |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetVehiclesByCivilianId(42, function(vehicles)
  print(#vehicles, vehicles[1] and vehicles[1].licensePlate)
end)
```

##### `GetLicensesByCivilianId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | yes | `function(licenses)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of issued license rows |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetLicensesByCivilianId(42, function(licenses)
  print(#licenses, licenses[1] and licenses[1].licenseNumber)
end)
```

##### `GetAllFlagsMarkersByCivilianId`

All flags for a civilian (active and inactive).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(flags)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of flag rows |
| sync | cache array |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetAllFlagsMarkersByCivilianId(42, function(flags)
  print(#flags)
end)
```

##### `GetPoliceRecordsByCivilianId`

Criminal records for a civilian (`nsmdt_criminal_records`).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| civId | number | yes | |
| callback | function | recommended | `function(records)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of record rows (MySQL) |
| sync | warm-cache array |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetPoliceRecordsByCivilianId(42, function(records)
  print(#records)
end)
```

##### `GetActiveWarrants`

Every **active** warrant in the database (all departments, no 31-day cut). The tablet “Active” card is the loaded list for this department — those counts can differ.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| limitOrOpts | number or table | no | e.g. `500` or `{ limit = 500 }` |
| callback | function | yes | `function(warrants)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of active warrant rows |
| sync | none |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetActiveWarrants(500, function(warrants)
  print(#warrants)
end)
```

##### `GetActiveFlagsMarkers`

Active, unexpired PNC flags.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(flags)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of flag rows (MySQL, up to 500) |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetActiveFlagsMarkers(function(flags)
  print(#flags)
end)
```

##### `GetActiveVehicleBolos`

Vehicles with BOLO set.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(bolos)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of vehicle rows (`bolo = 1`) |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetActiveVehicleBolos(function(bolos)
  print(#bolos)
end)
```

##### `GetActiveANPRRegistry`

Active ANPR watchlist plates.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callback | function | yes | `function(plates)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of registry rows |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetActiveANPRRegistry(function(plates)
  print(#plates)
end)
```

##### `LookupVehicleByPlate`

Plate to vehicle record.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| plate | string | yes | Spaces and dashes ignored |
| callback | function | recommended | `function(vehicle)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | vehicle row or nil |
| sync | cache hit or nil |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:LookupVehicleByPlate('ABC 123', function(vehicle)
  print(vehicle and vehicle.id, vehicle and vehicle.licensePlate)
end)
```

##### `GetCivilianByPlate`

Plate to registered owner.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| plate | string | yes | |
| callback | function | recommended | `function(civ)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | civilian row or nil |
| sync | cache hit or nil |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCivilianByPlate('ABC 123', function(civ)
  print(civ and civ.id)
end)
```

##### `GetANPRHitLog`

Recent ANPR detections.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| limitOrOpts | number or table | no | `{ limit, offset }` |
| callback | function | yes | `function(hits)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of hit-log rows |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetANPRHitLog({ limit = 50 }, function(hits)
  print(#hits)
end)
```

#### Duty, roster, and calls

##### `GetUserShiftData`

Shift plus identity for one player. Empty-ish table if they have no session (`isOnShift = false`, plus `_error`).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns
{: .text-delta }

(sync table)

`serverId`, `rockstarLicense`, `userName`, `nickName`, `adminLevel`, `isOnShift`, `departmentId`, `subDepartmentId`, `rankId`, `callsign`, `statusCode`, `statusLabel`, `statusColor`, `shiftDuration`, `totalShiftTime`, `shiftTimeByDepartment`, `location` (`{ x, y, z }`, not `vector3`), `speed`, `heading`, `compassDirection`, `postal`, `street`, `zone`, `modeOfTransport`, `sirens`, `plate`.

Example
{: .text-delta }

```lua
local shift = exports['night_shifts_mdt']:GetUserShiftData(source)
print(shift.isOnShift, shift.callsign, shift.location and shift.location.x)
```

##### `GetActiveShiftByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | active shift row or nil |

Example
{: .text-delta }

```lua
local row = exports['night_shifts_mdt']:GetActiveShiftByServerId(source)
print(row and row.callsign)
```

##### `GetCurrentShiftDurationByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | number of seconds (0 if off shift) |

Example
{: .text-delta }

```lua
local seconds = exports['night_shifts_mdt']:GetCurrentShiftDurationByServerId(source)
print(seconds)
```

##### `GetPostalForPlayer`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | nearest postal string or nil |

Example
{: .text-delta }

```lua
local postal = exports['night_shifts_mdt']:GetPostalForPlayer(source)
print(postal)
```

##### `HasPermissionByServerId`

Rank permission check for the player’s **current** department. Off-shift is always `false`.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| permission | string | yes | e.g. `pnc.registration` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | boolean |

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:HasPermissionByServerId(source, 'pnc.registration') then
  print('officer can register PNC')
end
```

##### `GetActiveShifts / GetOnDutyUnits`

Same data: every clocked-in unit. `GetOnDutyUnits` is an alias.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | array of `{ serverId, rockstarLicense, userName, nickName, shift, location, postal, street, … }` |

Example
{: .text-delta }

```lua
local units = exports['night_shifts_mdt']:GetActiveShifts()
print(#units, units[1] and units[1].callsign)
-- alias:
-- local units = exports['night_shifts_mdt']:GetOnDutyUnits()
```

##### `GetDepartmentRoster`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| departmentId | number | yes | |
| callback | function | recommended | `function(members)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of roster members |
| sync | depends on implementation; prefer the callback |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetDepartmentRoster(1, function(members)
  print(#members)
end)
```

##### `GetActiveCalls`

Cache snapshot of **active, non-archived** calls. Use this for event catch-up. Live board source.

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | array of call rows (`id`, `callType`, `callStatus`, `x`, `y`, `z`, `postal`, …) |

Example
{: .text-delta }

```lua
local calls = exports['night_shifts_mdt']:GetActiveCalls()
print(#calls, calls[1] and calls[1].callType)
```

##### `GetCallById`

One call from the live cache (may be nil if archived or unknown).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | call row or nil |

Example
{: .text-delta }

```lua
local call = exports['night_shifts_mdt']:GetCallById(1842)
print(call and call.callStatus)
```

##### `GetCallNotes`

Notes oldest-first.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | or pass `callId` as the first number |
| data.limit | number | no | default 50 |
| callback | function | yes | `function(notes)` — **not** `(ok, result)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback | array of `{ id, callId, noteText, createdAt, createdBy }` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:GetCallNotes({ callId = 1842, limit = 50 }, function(notes)
  print(#notes)
end)
```

##### `GetAllActiveUnits`

On-shift units with distance to the call.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | or `{ callId = n }` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | array of `{ serverId, rockstarLicense, userName, nickName, callsign, departmentId, statusCode, location, postal, street, distance }` |

Example
{: .text-delta }

```lua
local units = exports['night_shifts_mdt']:GetAllActiveUnits(1842)
print(#units, units[1] and units[1].distance)
```

##### `GetNearbyUnits`

Same as `GetAllActiveUnits`, distance-filtered.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callId | number | yes | or `{ callId, maxDistance }` |
| data.maxDistance | number | no | default 2000 |

Returns
{: .text-delta }

same unit shape as `GetAllActiveUnits`, filtered by distance.

Example
{: .text-delta }

```lua
local nearby = exports['night_shifts_mdt']:GetNearbyUnits({ callId = 1842, maxDistance = 2000 })
print(#nearby)
```

### Events

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

### System writes — dispatch

**When to use:** AI CAD, ERS, webhooks — no player is performing the action. Open MDTs update.

**When not to:** A human dispatcher clicking in your terminal — use the `*ByServerId` twin.

Audit: `system:<GetInvokingResource()>`. Capture happens at export entry (safe across MySQL callbacks). `assignedByLicense` on `nsmdt_call_units` has no FK — the system string is stored. `archivedBy` is an integer user/shift id — left `NULL` for system archive.

##### `ForwardCallToMDT`

Create a new dispatch call with no acting officer.

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `callId` as a **number** (not a table) |
| callback fail | `nil` |
| sync | none |

Example
{: .text-delta }

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

##### `AssignUnitToCall`

Attach an on-shift unit. Accepts **either** `targetServerId` **or** `callsign` (fails if missing, offline, or not unique). Uses the same cross-call detach queue as the board. `byDispatch = true`.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | Active call |
| data.callsign | string | one of | Must be on shift and unique |
| data.targetServerId | number | one of | Connected and on shift |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, unitLicense, message }` |
| callback fail | error string, e.g. `callsign not found or unit not on shift`, `callsign is not unique`, `target player not found` |
| sync | none |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AssignUnitToCall({
  callId = 1842,
  callsign = 'L-42',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DetachUnitFromCall`

Release a unit. They go **available**.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.callsign | string | one of | |
| data.targetServerId | number | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, message }` |
| callback fail | error string |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DetachUnitFromCall({
  callId = 1842,
  callsign = 'L-42',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetCallStatus`

Resolve or reopen. Resolve **auto-detaches every unit** and sets them available. Reopen (`active`) does **not** re-attach anyone.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.status | string | yes | `active` or `resolved` |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, status, message }` |
| callback fail | error string, e.g. `status must be active or resolved` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetCallStatus({
  callId = 1842,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ArchiveCall`

Call must already be `resolved`. Will not silently archive an active call. `archivedBy` stays `NULL`. Reason is stored and added as a system note.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.reason | string | no | Default `Archived by <resource>` |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, archived = true }` |
| callback fail | `Call not found`, `Call already archived`, `Call must be resolved before archive` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ArchiveCall({
  callId = 1842,
  reason = 'Complete',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `EditCall`

Update type, description, location, caller, services, or priority.

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId }` |
| callback fail | `Call not found` or `Failed to edit call` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:EditCall({
  callId = 1842,
  description = 'Updated: two vehicles, one blocking the lane.',
  priority = 2,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddCallNote`

`createdBy` on the note row is `NULL` (FK-safe). Put your resource name in the text so the board is not a blank actor.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.note | string | yes | alias `data.text` |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, noteId }` |
| callback fail | `callId required` or `note required` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddCallNote({
  callId = 1842,
  note = 'Assigned by AI CAD (my_ai_dispatch)',
}, function(ok, result)
  if not ok then return print(result) end
  print(result.noteId)
end)
```

##### `DeleteCallNote`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.noteId | number | yes | |
| data.callId | number | no | Used to invalidate open tablets |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ noteId, callId }` |
| callback fail | `Note not found` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeleteCallNote({
  noteId = 91,
  callId = 1842,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetUnitOnCallStatus`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.callId | number | yes | |
| data.unitStatus | string | yes | `en_route` or `on_scene` |
| data.callsign | string | one of | |
| data.targetServerId | number | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ callId, unitStatus, message }` |
| callback fail | error string |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetUnitOnCallStatus({
  callId = 1842,
  callsign = 'L-42',
  unitStatus = 'en_route',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### System writes — PNC, medical, licenses, notes, bulletins, council

**When to use:** Automated PNC / records / council with no officer.

**When not to:** A terminal click that must show that officer as issuer.

`departmentId` is required on warrant / flag / fine / criminal-record creates (`responsibleDepartmentId` is NOT NULL). Fail with `departmentId required` or `Invalid departmentId` if omitted or unknown.

FK rule: `issuedBy` / `createdBy` / `executedBy` on warrants, flags, and fines stay **NULL**. Audit `performedBy` is `system:<resource>`. PNC “issued by” may show N/A.

##### `CreateWarrant`

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantNumber }` |
| callback fail | error string |

Example
{: .text-delta }

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

##### `UpdateWarrant`

Active warrants only.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| data.reason | string | yes | |
| data.expiresAt | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId }` |
| callback fail | `Failed to update warrant (not found or not active)` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateWarrant({
  warrantId = 15,
  reason = 'Updated: still outstanding after court date',
  expiresAt = '2027-12-31 23:59:59',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ExecuteWarrant`

`executedBy` stays `NULL`.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantStatus = 'executed' }` |
| callback fail | `Failed to execute warrant` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ExecuteWarrant({
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CancelWarrant`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.warrantId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ warrantId, warrantStatus = 'cancelled' }` |
| callback fail | `Failed to cancel warrant` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:CancelWarrant({
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateFlag`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.civId | number | yes | |
| data.flagType | string | yes | Must exist in flag types |
| data.description | string | yes | |
| data.departmentId | number | yes | |
| data.severity | string | no | e.g. `medium` |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ flagId }` |
| callback fail | error string |

Example
{: .text-delta }

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

##### `SetFlagActive`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.flagId | number | yes | |
| data.isActive | boolean or number | yes | `true` / `1` or `false` / `0` |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ flagId, isActive }` (`isActive` is boolean) |
| callback fail | `flagId and isActive required` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetFlagActive({
  flagId = 88,
  isActive = false,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateFine`

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ fineId, fineNumber }` |
| callback fail | error string |

Example
{: .text-delta }

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

##### `MarkFinePaid`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.fineId | number | yes | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ fineId, finePaid = true }` |
| callback fail | `Failed to mark fine paid` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:MarkFinePaid({
  fineId = 301,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateCriminalRecord`

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ recordId, recordNumber }` |
| callback fail | `location required`, `incidentDate required`, `departmentId required` |

Example
{: .text-delta }

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

##### `AddCharge`

Parameters
{: .text-delta }

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
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ chargeId, criminalRecordId }` |
| callback fail | `criminalRecordId required` |

Example
{: .text-delta }

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

##### `UpdateCharge`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.chargeId | number | yes | |
| data.chargeStatus | string | no | |
| data.fineAmount | number | no | |
| data.jailTime | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ chargeId }` |
| callback fail | `Failed to update charge` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateCharge({
  chargeId = 19,
  chargeStatus = 'convicted',
  fineAmount = 500,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetVehicleBolo`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.vehicleId | number | one of | |
| data.plate | string | one of | |
| data.bolo | boolean or number | yes | `true` / `1` to set, `false` / `0` to clear |
| data.boloDescription | string | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ vehicleId, bolo }` (`bolo` is boolean) |
| callback fail | `vehicleId or plate required`, `Vehicle not found` |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetVehicleBolo({
  plate = 'ABC 123',
  bolo = true,
  boloDescription = 'Used in a robbery',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddANPRRegistry`

`added_by_license` stores `system:<resource>` (no FK).

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.plate | string | yes | |
| data.reason | string | yes | |
| data.reasonType | string | no | `stolen`, `bolo`, or `custom` |
| data.penalCodeIds | table | no | |
| data.departmentId | number | no | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ success = true, action = 'added', entry = { id, plate, reason, reasonType, … } }` |
| callback fail | error string, e.g. `invalid_plate` |

Example
{: .text-delta }

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

##### `RemoveANPRRegistry`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| data.entryId | number | one of | |
| data.plate | string | one of | |
| callback | function | no | `function(ok, resultOrError)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| callback ok | `{ success = true, action = 'removed', entryId }` or `{ success = true, action = 'removed', plate }` |
| callback fail | error string |

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveANPRRegistry({
  plate = 'ABC 123',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalAllergy`

Patient writes on `civId`. System path: `createdBy` stays `NULL`. Severity is `mild`, `moderate`, or `severe` (default `moderate`).

Parameters
{: .text-delta }

`civId`, `allergen` required; optional `severity`, `reaction`, `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ allergyId, civId }`.

Example
{: .text-delta }

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

##### `RemoveMedicalAllergy`

Parameters
{: .text-delta }

`id` (allergy row) required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ id, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalAllergy({
  id = 9,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalDiagnosis`

Diagnosis status is `active`, `chronic`, or `resolved` (default `active`). `diagnosedBy` stays `NULL`.

Parameters
{: .text-delta }

`civId`, `condition` required; optional `status`, `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ diagnosisId, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalDiagnosis({
  civId = 42,
  condition = 'Asthma',
  status = 'chronic',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateMedicalDiagnosis`

Parameters
{: .text-delta }

`id` required; optional `status`, `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ id }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateMedicalDiagnosis({
  id = 4,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveMedicalDiagnosis`

Parameters
{: .text-delta }

`id` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ id }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalDiagnosis({
  id = 4,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalTreatment`

Parameters
{: .text-delta }

`civId` and `treatment` (or `summary`) required; optional `treatmentType`, `notes`, `departmentId`, `callback`.

Returns
{: .text-delta }

callback ok `{ treatmentId, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalTreatment({
  civId = 42,
  treatment = 'Oxygen on scene',
  treatmentType = 'on_scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalPrescription`

Parameters
{: .text-delta }

`civId`, `medication` required; optional `dosage`, `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ prescriptionId, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalPrescription({
  civId = 42,
  medication = 'Albuterol',
  dosage = '2 puffs',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DiscontinueMedicalPrescription`

Parameters
{: .text-delta }

`id` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ id }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DiscontinueMedicalPrescription({
  id = 6,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalImmunization`

Parameters
{: .text-delta }

`civId`, `vaccine` required; optional `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ immunizationId, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalImmunization({
  civId = 42,
  vaccine = 'Tetanus',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalFlag`

Parameters
{: .text-delta }

`civId`, `flagType` required; optional `details` / `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ flagId, civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalFlag({
  civId = 42,
  flagType = 'dnr',
  notes = 'On file from hospital',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveMedicalFlag`

Parameters
{: .text-delta }

`id` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ id }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalFlag({
  id = 3,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateMedicalVitals`

Updates the civilian row.

Parameters
{: .text-delta }

`civId` required; optional `bloodType`, `height`, `weight`, `callback`.

Returns
{: .text-delta }

callback ok `{ civId }`.

Example
{: .text-delta }

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

##### `IssueLicense`

`issuedBy` stays `NULL`.

Parameters
{: .text-delta }

`civId`, `licenseType` required; optional `validYears`, `maxPoints`, `notes`, `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId, licenseNumber }`.

Example
{: .text-delta }

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

##### `SuspendLicense`

Parameters
{: .text-delta }

`licenseId` required; optional `reason`, `suspensionDays`, `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId, licenseStatus = 'suspended' }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SuspendLicense({
  licenseId = 11,
  reason = 'Too many points',
  suspensionDays = 30,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ReinstateLicense`

Parameters
{: .text-delta }

`licenseId` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId, licenseStatus = 'valid' }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ReinstateLicense({
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RevokeLicense`

Parameters
{: .text-delta }

`licenseId` required; optional `reason`, `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId, licenseStatus = 'revoked' }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RevokeLicense({
  licenseId = 11,
  reason = 'Fraudulent application',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AdjustLicensePoints`

Parameters
{: .text-delta }

`licenseId`, `pointsChange` (signed number) required; optional `reason`, `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId, pointsChange }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AdjustLicensePoints({
  licenseId = 11,
  pointsChange = -3,
  reason = 'Court reduction',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddPNCNote`

`createdBy` is `NULL`. `createdByName` is your resource folder.

Parameters
{: .text-delta }

`entityType` (`civilian` or `vehicle`), `title`, `description`, plus `civId` or `vehicleId`; optional `callback`.

Returns
{: .text-delta }

callback ok `{ noteId }`.

Example
{: .text-delta }

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

##### `DeletePNCNote`

Parameters
{: .text-delta }

`noteId` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ noteId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeletePNCNote({
  noteId = 55,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateBulletin`

`nsmdt_bulletins.createdBy` is NOT NULL + FK to `nsmdt_users`. The system path **cannot** stamp `system:<resource>` there. Fails with `createdByLicense required (bulletins.createdBy FK to nsmdt_users)` if you omit the license.

Parameters
{: .text-delta }

`departmentId`, `title`, `content`, **`createdByLicense`** required; optional `priority`, `isPinned`, `expiresAt`, `callback`.

Returns
{: .text-delta }

callback ok `{ bulletinId }`.

Example
{: .text-delta }

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

##### `UpdateBulletin`

Parameters
{: .text-delta }

`bulletinId` required; optional `title`, `content`, `priority`, `isPinned`, `callback`.

Returns
{: .text-delta }

callback ok `{ bulletinId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateBulletin({
  bulletinId = 8,
  content = 'Updated: vehicle recovered.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DeleteBulletin`

Parameters
{: .text-delta }

`bulletinId` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ bulletinId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeleteBulletin({
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `TogglePinBulletin`

Parameters
{: .text-delta }

`bulletinId` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ bulletinId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:TogglePinBulletin({
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RegisterCivilian`

Auto-generates `personalId` if omitted (`SYS-<timestamp>…`).

Parameters
{: .text-delta }

`firstName`, `lastName` required; optional `personalId`, `dateOfBirth`, `phoneNumber`, `address`, `callback`.

Returns
{: .text-delta }

callback ok `{ civilianId }`.

Example
{: .text-delta }

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

##### `RegisterVehicle`

Parameters
{: .text-delta }

`civId`, `licensePlate` required; optional `make`, `model`, `color`, `buildYear`, `callback`.

Returns
{: .text-delta }

callback ok `{ vehicleId }`.

Example
{: .text-delta }

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

##### `RegisterProperty`

Parameters
{: .text-delta }

`civId`, `address` required; optional `propertyType`, `houseNumber`, `city`, `state`, `zone`, `postal`, `description`, `price`, `buildYear`, `callback`.

Returns
{: .text-delta }

callback ok `{ propertyId }`.

Example
{: .text-delta }

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

##### `RegisterBusiness`

Parameters
{: .text-delta }

`civId`, `businessName` required; optional `businessType`, `address`, `state`, `city`, `zone`, `postal`, `callback`.

Returns
{: .text-delta }

callback ok `{ businessId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RegisterBusiness({
  civId = 42,
  businessName = 'Rivera Auto',
  address = '12 Popular St',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateCivilianAddress`

Writes `addressLine1`.

Parameters
{: .text-delta }

`civId`, `address` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ civId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateCivilianAddress({
  civId = 42,
  address = '9 Palomino Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ApproveLicenseRequest`

Parameters
{: .text-delta }

`licenseId` required; optional `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ApproveLicenseRequest({
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RejectLicenseRequest`

Parameters
{: .text-delta }

`licenseId` required; optional `reason`, `callback`.

Returns
{: .text-delta }

callback ok `{ licenseId }`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RejectLicenseRequest({
  licenseId = 11,
  reason = 'Failed driving test',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### Officer writes — shift

**When to use:** Clock **that** player in/out or change *their* status/callsign. `serverId` is the **subject**.

**When not to:** There is no system twin. Do not invent a fake source. The player must already have an MDT session for clock-in.

##### `StartShiftByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | Connected player |
| departmentId | number | yes | |
| subDepartmentId | number | no | pass `nil` if none |
| rankId | number | yes | |
| callsign | string | no | empty becomes `UNASSIGNED` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | `success, result` — `success` is boolean |

Example
{: .text-delta }

```lua
local ok, result = exports['night_shifts_mdt']:StartShiftByServerId(source, 1, nil, 3, 'L-42')
if not ok then return print(result) end
```

##### `EndShiftByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| callback | function | no | `function(success, duration, totalTime)` |

Returns
{: .text-delta }

| Path | Value |
| ---- | ----- |
| sync | `success, duration, totalTime` |
| callback | same three values |

Example
{: .text-delta }

```lua
local ok, duration, totalTime = exports['night_shifts_mdt']:EndShiftByServerId(source)
print(ok, duration, totalTime)
```

##### `UpdateShiftStatusByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| statusCode | string | yes | Department status code |
| callback | function | no | |

Returns
{: .text-delta }

`success` plus result via sync and optional callback.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateShiftStatusByServerId(source, 'available', function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateShiftStatusByBindingByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| binding | string | yes | `panic`, `available`, `unavailable`, or `busy` |
| callback | function | no | |

Returns
{: .text-delta }

`success` plus result via sync and optional callback.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateShiftStatusByBindingByServerId(source, 'busy', function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateCallsignByServerId`

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| serverId | number | yes | |
| newCallsign | string | yes | |

Returns
{: .text-delta }

sync `success, result`.

Example
{: .text-delta }

```lua
local ok, result = exports['night_shifts_mdt']:UpdateCallsignByServerId(source, 'L-21')
if not ok then return print(result) end
```

### Officer writes — dispatch, PNC, ops

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

##### `AssignUnitToCallByServerId`

Permission: `dispatch.assign_units`. Omit `callsign` / `targetServerId` to self-assign.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AssignUnitToCallByServerId(source, {
  callId = 1842,
  callsign = 'L-21',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DetachUnitFromCallByServerId`

Permission: `dispatch.assign_units`. Omit target to detach self.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DetachUnitFromCallByServerId(source, {
  callId = 1842,
  callsign = 'L-21',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetCallStatusByServerId`

Permission: `dispatch.resolve_call` or `hotline.resolve_call`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetCallStatusByServerId(source, {
  callId = 1842,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ArchiveCallByServerId`

Permission: `dispatch.archive_call` or `hotline.archive_calls`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ArchiveCallByServerId(source, {
  callId = 1842,
  reason = 'Complete',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `EditCallByServerId`

Permission: `dispatch.edit_call`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:EditCallByServerId(source, {
  callId = 1842,
  description = 'Updated from the CAD terminal',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddCallNoteByServerId`

Permission: `dispatch.add_note`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddCallNoteByServerId(source, {
  callId = 1842,
  note = 'Unit advised, en route',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DeleteCallNoteByServerId`

Permission: `dispatch.delete_note`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeleteCallNoteByServerId(source, {
  noteId = 91,
  callId = 1842,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetUnitOnCallStatusByServerId`

On-shift only. Omit target to update self.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetUnitOnCallStatusByServerId(source, {
  callId = 1842,
  unitStatus = 'on_scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateWarrantByServerId`

Permission: `pnc.registration`. `issuedBy` = that officer. No `departmentId` required.

Example
{: .text-delta }

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

##### `CancelWarrantByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:CancelWarrantByServerId(source, {
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ExecuteWarrantByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ExecuteWarrantByServerId(source, {
  warrantId = 15,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateWarrantByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateWarrantByServerId(source, {
  warrantId = 15,
  reason = 'Updated from CAD',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateFlagByServerId`

Permission: `pnc.flags`. Department from the officer’s shift.

Example
{: .text-delta }

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

##### `SetFlagActiveByServerId`

Permission: `pnc.flags`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetFlagActiveByServerId(source, {
  flagId = 88,
  isActive = false,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateFineByServerId`

Permission: `pnc.registration`. Department from the officer’s shift.

Example
{: .text-delta }

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

##### `MarkFinePaidByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:MarkFinePaidByServerId(source, {
  fineId = 301,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateCriminalRecordByServerId`

Permission: `pnc.registration`. Department from the officer’s shift.

Example
{: .text-delta }

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

##### `AddChargeByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

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

##### `UpdateChargeByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateChargeByServerId(source, {
  chargeId = 19,
  chargeStatus = 'convicted',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SetVehicleBoloByServerId`

Permission: `pnc.registration`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SetVehicleBoloByServerId(source, {
  plate = 'ABC 123',
  bolo = true,
  boloDescription = 'Used in a robbery',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddANPRRegistryByServerId`

Permission: `pnc.anpr.manage`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddANPRRegistryByServerId(source, {
  plate = 'ABC 123',
  reason = 'Stolen vehicle',
  reasonType = 'stolen',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveANPRRegistryByServerId`

Permission: `pnc.anpr.manage`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveANPRRegistryByServerId(source, {
  plate = 'ABC 123',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalAllergyByServerId`

Permission: `medical_records.add_treatment`. FK + audit = that player’s license. Notes say `Staff …`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalAllergyByServerId(source, {
  civId = 42,
  allergen = 'Peanuts',
  severity = 'severe',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveMedicalAllergyByServerId`

Permission: `medical_records.delete`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalAllergyByServerId(source, {
  id = 9,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalDiagnosisByServerId`

Permission: `medical_records.diagnose`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalDiagnosisByServerId(source, {
  civId = 42,
  condition = 'Asthma',
  status = 'chronic',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateMedicalDiagnosisByServerId`

Permission: `medical_records.diagnose`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateMedicalDiagnosisByServerId(source, {
  id = 4,
  status = 'resolved',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveMedicalDiagnosisByServerId`

Permission: `medical_records.delete`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalDiagnosisByServerId(source, {
  id = 4,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalTreatmentByServerId`

Permission: `medical_records.add_treatment`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalTreatmentByServerId(source, {
  civId = 42,
  treatment = 'Oxygen on scene',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalPrescriptionByServerId`

Permission: `medical_records.diagnose`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalPrescriptionByServerId(source, {
  civId = 42,
  medication = 'Albuterol',
  dosage = '2 puffs',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DiscontinueMedicalPrescriptionByServerId`

Permission: `medical_records.diagnose`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DiscontinueMedicalPrescriptionByServerId(source, {
  id = 6,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalImmunizationByServerId`

Permission: `medical_records.add_treatment`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalImmunizationByServerId(source, {
  civId = 42,
  vaccine = 'Tetanus',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddMedicalFlagByServerId`

Permission: `medical_records.flags`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AddMedicalFlagByServerId(source, {
  civId = 42,
  flagType = 'dnr',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RemoveMedicalFlagByServerId`

Permission: `medical_records.flags`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RemoveMedicalFlagByServerId(source, {
  id = 3,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateMedicalVitalsByServerId`

Permission: `medical_records.add_treatment`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateMedicalVitalsByServerId(source, {
  civId = 42,
  bloodType = 'O+',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `IssueLicenseByServerId`

Permission: typically `licenses.create`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:IssueLicenseByServerId(source, {
  civId = 42,
  licenseType = 'driver',
  validYears = 5,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `SuspendLicenseByServerId`

Permission: typically `licenses.suspend`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:SuspendLicenseByServerId(source, {
  licenseId = 11,
  reason = 'Too many points',
  suspensionDays = 30,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ReinstateLicenseByServerId`

Permission: typically `licenses.update`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ReinstateLicenseByServerId(source, {
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RevokeLicenseByServerId`

Permission: typically `licenses.revoke`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RevokeLicenseByServerId(source, {
  licenseId = 11,
  reason = 'Fraudulent application',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AdjustLicensePointsByServerId`

Permission: typically `licenses.update`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:AdjustLicensePointsByServerId(source, {
  licenseId = 11,
  pointsChange = -3,
  reason = 'Court reduction',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `AddPNCNoteByServerId`

Permission: `pnc.notes.manage`.

Example
{: .text-delta }

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

##### `DeletePNCNoteByServerId`

Permission: `pnc.notes.manage`.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeletePNCNoteByServerId(source, {
  noteId = 55,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `CreateBulletinByServerId`

Permission: `management.bulletins.create`. Fills `createdByLicense` from the officer.

Example
{: .text-delta }

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

##### `UpdateBulletinByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateBulletinByServerId(source, {
  bulletinId = 8,
  content = 'Updated: vehicle recovered.',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `DeleteBulletinByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:DeleteBulletinByServerId(source, {
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `TogglePinBulletinByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:TogglePinBulletinByServerId(source, {
  bulletinId = 8,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RegisterCivilianByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RegisterCivilianByServerId(source, {
  firstName = 'Alex',
  lastName = 'Rivera',
  dateOfBirth = '1994-03-12',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RegisterVehicleByServerId`

Example
{: .text-delta }

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

##### `RegisterPropertyByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RegisterPropertyByServerId(source, {
  civId = 42,
  address = '1 San Andreas Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RegisterBusinessByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RegisterBusinessByServerId(source, {
  civId = 42,
  businessName = 'Rivera Auto',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `UpdateCivilianAddressByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:UpdateCivilianAddressByServerId(source, {
  civId = 42,
  address = '9 Palomino Ave',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `ApproveLicenseRequestByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ApproveLicenseRequestByServerId(source, {
  licenseId = 11,
}, function(ok, result)
  if not ok then return print(result) end
end)
```

##### `RejectLicenseRequestByServerId`

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:RejectLicenseRequestByServerId(source, {
  licenseId = 11,
  reason = 'Failed driving test',
}, function(ok, result)
  if not ok then return print(result) end
end)
```

### Client

**When to use:** Client scripts on the same machine as the player.

**When not to:** Server integrations — use server exports.

##### `IsMenuOpen`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync boolean — is the MDT tablet open?

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsMenuOpen() then
  print('tablet is open')
end
```

##### `OpenMenu`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

none.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:OpenMenu()
```

##### `CloseMenu`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

none.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:CloseMenu()
```

##### `ToggleMenu`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

none.

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ToggleMenu()
```

##### `ForwardCallToMDT (client)`

Client helper; still creates the call **server-side**. Same `callData` fields as the server export.

Parameters
{: .text-delta }

| Name | Type | Required | Notes |
| ---- | ---- | -------- | ----- |
| callData | table | yes | Same shape as server `ForwardCallToMDT` |

Returns
{: .text-delta }

none on the client (the server creates the call).

Example
{: .text-delta }

```lua
exports['night_shifts_mdt']:ForwardCallToMDT({
  callType = 'Traffic Collision',
  description = 'Two-vehicle RTC',
  x = 215.4, y = -810.2, z = 30.7,
  requiresPolice = 1, requiresAmbulance = 1,
})
```

##### `IsOnPoliceShift`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync boolean for the local player.

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsOnPoliceShift() then
  exports['night_shifts_mdt']:OpenMenu()
end
```

##### `IsOnAmbulanceShift`

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsOnAmbulanceShift() then
  print('on ambulance shift')
end
```

##### `IsOnFireShift`

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsOnFireShift() then
  print('on fire shift')
end
```

##### `IsOnTowShift`

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsOnTowShift() then
  print('on tow shift')
end
```

##### `IsOnCouncilShift`

Example
{: .text-delta }

```lua
if exports['night_shifts_mdt']:IsOnCouncilShift() then
  print('on council shift')
end
```

##### `GetPlayerCallsign`

Parameters
{: .text-delta }

none.

Returns
{: .text-delta }

sync string or nil.

Example
{: .text-delta }

```lua
local callsign = exports['night_shifts_mdt']:GetPlayerCallsign()
print(callsign)
```

##### `GetCurrentLanguage (client)`

Same return as the server read.

Example
{: .text-delta }

```lua
print(exports['night_shifts_mdt']:GetCurrentLanguage())
```

##### `GetAvailableLanguages (client)`

Example
{: .text-delta }

```lua
local languages = exports['night_shifts_mdt']:GetAvailableLanguages()
print(languages[1])
```

##### `GetDepartments (client)`

Example
{: .text-delta }

```lua
local depts = exports['night_shifts_mdt']:GetDepartments()
print(#depts)
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