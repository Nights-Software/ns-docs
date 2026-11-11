---
title: "Installation · Night Shifts MDT"
description: "The pre-installation notes, system requirements, installation steps and configuration setup."
slug: resources/nightShifts/installation
group: scripts
lastUpdated: 2026-08-13
---

## Important Pre-Installation Notes

:::danger[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:

1. Download ZIP Package from CFX Portal
2. Unpack in a folder on your local machine
3. Set File Transfer Protocol (FTP) type to **binary**
4. Drag files from local machine to server resources folder
5. Add to server.cfg (ensure script)
6. Boot up the server
:::

:::caution[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

:::tip[Database Requirement]
Night Shifts MDT requires a MySQL database and oxmysql resource to function properly.
:::

> **Emergency Response Simulator Compatible:** It is possible to search NPCs and their vehicles in the MDT when they have been interacted with via the Emergency Response Simulator.

## System Requirements & Compatibility {#system-requirements}

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Framework Compatibility {#framework-compatibility}

- **Standalone:** If no supported framework resource is running, the MDT runs in **standalone** mode: **no automatic civilian generation** from characters (players use council registration / staff workflows as you configure).
- **Auto civilian generation (framework bridge):** When a supported framework is detected **and started before or with the MDT**, the resource syncs each loaded character into `nsmdt_civilians` (create or update by framework id). Supported stacks (detection order on the server):

  | Framework  | Resource / API           | Character id used for sync |
  | ---------- | ------------------------ | -------------------------- |
  | **ESX**    | `es_extended`            | `identifier`               |
  | **QBox**   | `qbx_core` (`GetPlayer`) | `citizenid`                |
  | **QBCore** | `qb-core`                | `citizenid`                |

  On first sync, a council-style **personal id** (e.g. `CIV-`…) can be issued; **identity documents** may be auto-generated when your document types and council rules allow (see server logs for `[MDT Framework]`). Existing civilians are **updated** on subsequent loads (name, job, phone, etc., per bridge data).
- **Framework fines:** Optional **bank/cash** deduction for council fines when a framework player pays—configure `Config.FrameworkFineAccount` in `config.lua` (`ESX` / `QBCore` / `QBox`).
- **Custom banking (standalone):** If you run a **standalone server with your own banking resource** (or want to override one specific operation on a framework server), the **banking bridge** exposes a `BankingBridge.Custom` slot you can plug into. Council fines, balance reads and any future money-moving feature will then go through your code instead of (or in addition to) the framework path. See [Custom Banking Bridge](/resources/nightShifts/integration/#custom-banking-bridge) below.
:::note
Run `es_extended`, `qbx_core`, or `qb-core` on the **same server** as Night Shifts MDT if you want automatic civilian sync. Only one framework path is selected (ESX → QBox → QBCore in that order if multiple were present).
:::

### Dependencies

- **MySQL Database** - Required for data storage
- **oxmysql** - Required database API
:::note
Database setup (MySQL + oxmysql) is required regardless of framework. Permissions and departments are configured **inside the MDT** (and initial super-admins in `config.lua`). Optional integrations include: **auto civilian sync** on supported frameworks, **fine payments** through the framework account, and **Discord-driven department assignment** via the separate [Night Discord API](/resources/discordAPI/) resource — see [Discord integration](/resources/nightShifts/integration/#discord-integration) below.
:::

## Installation Process

### Step 1: Database Setup (Required)

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for Night Shifts MDT to work.

1. **Set up your database** via your hosting provider
2. **Connect to your database** using credentials in an SQL connection string
3. **Add to server.cfg** above the ensure/start of resources:

```ini
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```
:::tip[Localhost Example]

```ini
set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```
:::

1. **Automatic Table Installation** - When you boot up the server, the code will run queries to install required tables
:::note[Manual Installation]
The files include a `datatables.sql` file if you prefer to manually install the tables.
:::

### Step 2: Install oxmysql (Required)

If you don't have oxmysql installed, download it from:
[Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)

1. **Place oxmysql** into your resources folder
2. **Add to server.cfg** - Ensure it starts before Night Shifts MDT:

```ini
ensure oxmysql
```
:::tip[Documentation]
For oxmysql questions, visit [oxmysql documentation](https://overextended.dev/docs/oxmysql)
:::

### Step 3: Test Database Connection

Start your server and check the console for oxmysql connection messages. You should see:

```ini
[script:oxmysql] Database server connection established!
```

### Step 4: Postal codes (optional — auto-detect) {#step-4-postal-codes}

Night Shifts MDT **does not require** a specific postal resource name. It **auto-detects** which postal / map data is available on your server and uses it for **player** and **world** lookups (dispatch, addresses, etc.).

**How it works**

1. **HUD-first (player position)** — If a supported HUD exposes postal for the local player, that is preferred: `rhud` (`get_postal`), then `SimpleHUD` / `ModernHUD` (`getPostal`), in that order.
2. **World coordinates** — For map pins and coordinates, the MDT tries `rhud` world APIs first, then **hinted** postal resources in order: `mnr_postals`, `nearest-postal`.
3. **Multiple formats** — The same hints are probed for several backends: JSON lists referenced by the resource `postal_file` manifest metadata, **MNR-style** Lua data (config + data files), **export**-based nearest-postal (`getNearestPostal`, `getPostalAtCoords`, etc.), and similar. You can ship **different postal file packs** (or forks of nearest-postal / MNR) as long as the resource exposes one of these patterns; the MDT picks the **first working** match at runtime.
4. **Dependencies of postal resources** — Some MNR builds need `ox_lib` running. Install what your chosen postal resource documents.

You typically **ensure** your postal / map stack **before** Night Shifts MDT in `server.cfg`, for example:

```ini
ensure ox_lib
ensure nearest-postal
# or: ensure mnr_postals
# plus any minimap / postal overlay resource you use
```
:::tip
**No extra bridge resource** — Integration is built into the MDT client; you do **not** need a separate “MDT ↔ postal” bridge. If nothing matches, postal-dependent UI may show blanks until a compatible resource is added.
:::

### Step 5: Install Night Shifts MDT

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets)
2. **Extract and transfer** using binary FTP mode
3. **Place the resource folder** into your `resources` directory — keep the original folder name (`night_shifts_mdt`) as shipped; do not rename it.
4. **Add to server.cfg**:

```ini
ensure night_shifts_mdt
```

1. **Verify startup** — Check console for oxmysql and `night_shifts_mdt` starting without errors
:::note
**Using ERS?** In `server.cfg`, `ensure night_shifts_mdt` **before** `ensure night_ers` — ERS calls MDT exports at startup, so the MDT must already be running. See **Emergency Response Simulator Integration** below for config and behaviour.
:::
:::note[First start & database setup]
When the resource starts, it runs a **sequence of MySQL queries** to create or update the required **tables, columns, and indexes** automatically. That work can take a **short time** (often a few seconds; longer on a slow database or a very first install). Let the **server console** finish this phase before deciding something failed—brief delays here are normal.
:::

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

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
| `night_shifts_mdt/server/s_functions.lua` | Server helpers, Discord webhook implementation, and the optional [Custom Banking Bridge](/resources/nightShifts/integration/#custom-banking-bridge) preset |

### Configuration Process

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking
:::tip[Time Investment]
Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.
:::
