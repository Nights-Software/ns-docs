---
title: "Integration & Compatibility · Night Shifts MDT"
description: "How the MDT works together with frameworks and other resources."
slug: resources/nightShifts/integration
group: scripts
lastUpdated: 2026-08-13
---

How Night Shifts MDT fits next to other resources. **Required** pieces are under [System Requirements](/resources/nightShifts/installation/#system-requirements) (OneSync, MySQL, oxmysql). **Postal / HUD data** for addresses and map context (optional): see [Step 4: Postal codes](/resources/nightShifts/installation/#step-4-postal-codes) — the MDT auto-detects supported resources on the client and does **not** use a separate postal bridge.

## Frameworks (optional)

- **Standalone** — MDT works with **no** ESX / QBCore / QBox; civilians are created through council flows and staff tools unless you add a framework.
- **ESX / QBox / QBCore** — When `es_extended`, `qbx_core`, or `qb-core` is running, the **framework bridge** syncs characters into `nsmdt_civilians` and the **banking bridge** can charge **council fines** to the player’s **bank** or **cash** (`Config.FrameworkFineAccount`). Details and detection order: [Framework Compatibility](/resources/nightShifts/installation/#framework-compatibility) (earlier on this page).

## Custom Banking Bridge {#custom-banking-bridge}

The MDT’s **banking bridge** (`server/server_banking_bridge.lua`) handles **ESX, QBox and QBCore** out of the box. For everything else — a **standalone server with your own banking resource**, a heavily modified framework, or a server that just wants to **override one specific operation** — you can register handlers on `BankingBridge.Custom`. Anywhere the MDT moves money (today: **council fine payments**) will then go through your code.

A ready-to-uncomment **preset** is provided at the bottom of `server/s_functions.lua` (which is escrow-ignored and ships open). That is the recommended place to register your handlers; the file is reloaded on every resource restart and survives MDT updates.

### When the custom path runs (and when it doesn’t)

Selection happens **per call**, not globally — you can override only the operations you care about and let the framework keep handling the rest.

| Situation                                               | What runs                                                                                                                                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BankingBridge.Custom.<Op>` is registered as a function | **Your handler** runs first. Its return value is what callers receive.                                                                                                                                                 |
| Your handler **throws** an error                        | Bridge logs `^1[MDT Banking]^7 BankingBridge.Custom.<Op> threw: …` and **falls through** to the framework path (or STANDALONE). MDT never crashes from a buggy handler.                                                |
| `BankingBridge.Custom.<Op>` is `nil` / not a function   | Falls through to the **framework path** for that op (`ESX → QBox → QBCore`), or **STANDALONE** if no framework is detected.                                                                                            |
| `BankingBridge.Custom` is `nil` entirely                | Same as above — pure framework / STANDALONE behaviour, identical to MDT’s pre-custom default.                                                                                                                          |
| Standalone server, no custom registered                 | `GetPlayerMoney` returns `0`. `AddMoney` / `RemoveMoney` are **no-ops returning `true`** so caller flow (e.g. fine "paid") is not blocked. The council fine UI **skips** the deduction call entirely in this case. |
| Standalone server, custom **is** registered             | Council fines and other money calls **do** invoke your handler. The bridge’s `HasActiveBackend()` reports `true` once any custom handler is present, which is what gates the fine deduction.                           |
:::tip
The custom check happens **per operation**. If you implement only `AddMoney`, calls to `GetPlayerMoney` / `RemoveMoney` will still hit the detected framework (or STANDALONE no-op). Implement all three for a fully self-contained custom backend.
:::

### Handler signatures

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
:::note
`reason` is also the second argument to ESX `xPlayer.removeMoney` / QBCore `Player.Functions.RemoveMoney` for parity. If your banking system has no concept of a transaction reason, you can ignore the parameter — the MDT does not inspect what you do with it.
:::

### Minimal example

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
:::caution
Do **not** call `BankingBridge.Custom.<Op>(…)` recursively from inside your own handler — that will infinite-loop. Always call your underlying banking resource’s exports directly.
:::

### What currently uses the bridge

Today the bridge is exercised by **council fine payments** (`server/server_council.lua`). Any future feature that moves money will go through the same three functions, so registering custom handlers now future-proofs your standalone setup.

## Emergency Response Simulator (`night_ers`) {#emergency-response-simulator-night_ers}

Optional integration for servers that run **[Emergency Response Simulator](/resources/ers/)** (`night_ers`).

- **MDT → ERS** — With `Config.Enable_ERS` in the MDT, clock-in/out can call `night_ers` so ERS shift state stays aligned (set `ManageShiftsByMDT` in ERS where applicable so the MDT owns shift toggles).
- **PNC & world** — ERS-driven NPCs and vehicles can appear in **lookups**, **ANPR**, and related flows according to your `config_npc_pool.lua` and ERS settings.
- `server.cfg` — `ensure night_shifts_mdt` before `ensure night_ers`. ERS calls MDT exports (PNC lookups, ped interactions, call forwarding, …) at startup, so the MDT has to be running first. If you do not run ERS, omit it.

### Requirements

| Requirement                                                          | Notes                                                                                                                                                                                       |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oxmysql` ≥ **2.12.0**                                               | `night_ers` requires **oxmysql v2.12.0 or newer**. We recommend running the **latest** [oxmysql release](https://github.com/overextended/oxmysql/releases/latest) on any server using ERS. |
| `night_shifts_mdt` started before `night_ers` in `server.cfg`        | Boot order matters — `night_ers` calls MDT exports (PNC lookups, ped interactions, call forwarding, …) on its own startup, so the MDT must already be running. The MDT probes `night_ers` lazily at runtime, so it does not need ERS up first. |
| `Config.Enable_ERS = true` in the MDT                                | Toggles the integration. With it off, the MDT ignores ERS entirely even if the resource is running.                                                                                         |
| `ManageShiftsByMDT` enabled on the ERS side (where applicable)       | Lets the MDT own clock-in/out so ERS shift state stays aligned with MDT shifts instead of fighting them.                                                                                    |

## Discord integration (`night_discordapi`) {#discord-integration}

Optional integration that lets the MDT **grant department + rank automatically** based on the **Discord roles** a player holds. Intended for servers that already manage their roster in Discord and don’t want to mirror every promotion by hand in the admin panel.

This is a **separate** capability from [Discord webhooks](#discord-webhooks-optional) below — webhooks **post messages out** of the MDT, this integration **reads roles in** to decide who has access to what.

### What it does

- **Maps Discord roles → (department, rank)**. Optionally also a **sub-department** and an `isPrimary` flag. One Discord role can map to one (department, rank) pair; one user can have many mapped roles and gets all of the assignments.
- **Syncs automatically** when a player connects, when the Discord role list changes server-side (5-minute background sweep), and on demand from buttons described below.
- **Removes access automatically** when a Discord role is taken away, when its mapping is deleted in the admin panel, or when the master integration switch is turned off.
- **Never touches admin-assigned rows.** If an admin assigns or edits a department row in User Management, that row is tagged `admin` and is **never** overwritten by a sync. See the table in [Permissions](/resources/nightShifts/how-it-works/#permissions) for how the source tags interact.

### Requirements

| Requirement                                                                                                                                          | Notes                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `night_discordapi` ≥ **2.3.0**                                                                                                                       | The MDT calls `GetDiscordMemberRoleIds` (added in 2.3) to read raw role IDs. Older builds will start, but mapping by **role ID** is unavailable and only legacy name-based matching works. **Recommended:** upgrade. |
| `night_discordapi` started before `night_shifts_mdt` in `server.cfg`                                                                                 | Boot order matters — the MDT probes `GetResourceState('night_discordapi')` on connect.                                                                                                                               |
| Each player has **linked their Discord account in the FiveM app**                                                                                    | Without a Discord identifier (`GetPlayerIdentifierByType(src, 'discord')`), the integration silently skips that player. The admin panel surfaces unlinked online players so you can ask them to fix it.              |
| `night_discordapi` is configured with the **bot token + guild(s) + role table** described in its [Discord API documentation](/resources/discordAPI/) | The MDT only consumes data the API exposes; if the bot can’t see a guild or role, the MDT can’t map it.                                                                                                              |

### Set it up

All of this is done **inside the MDT admin panel** — no `config.lua` changes needed.

1. **Install and configure `night_discordapi`** as documented on its [own page](/resources/discordAPI/). Add `ensure night_discordapi` **before** `ensure night_shifts_mdt` in `server.cfg`. Restart the server.
2. **Open the MDT** as a Super Admin, go to **Admin Panel → Discord Integration**.
3. **Toggle the master switch on**. If `night_discordapi` isn’t started, the page will tell you so and the toggle stays disabled.
4. **(Optional) Restrict to specific guilds.** By default the integration reads role data from every guild your bot knows about. If you want to scope it to one or two specific Discord servers, list their **guild names** (the friendly names defined in `night_discordapi`’s `Discord_Guild_Names`).
5. **Add role → rank mappings** with the **Add mapping** button. The role picker lists every Discord role visible to the bot, grouped by guild; the department / rank pickers list everything you have configured in the MDT. Use the **Bulk add** dialog when seeding many ranks for one department in one go.

That’s it — the next time an affected player connects (or in the next 5-minute background sweep, whichever comes first), they’ll be assigned the matching department and rank and the home page will reflect it.
:::tip
Map the **role ID** (the dropdown does this automatically when `night_discordapi` ≥ 2.3 is running). Discord role **names** can be renamed at any time and the mapping list will flag renamed or missing roles with badges so you can clean them up.
:::

### Refreshing roles

| Trigger                                           | Who        | Cooldown | Forces a fresh Discord fetch?        |
| ------------------------------------------------- | ---------- | -------- | ------------------------------------ |
| Player connects                                   | Automatic  | —        | Yes (initial seed)                   |
| Player opens the MDT                              | Automatic  | —        | No (uses cached roles)               |
| **5-minute background sweep**                     | Automatic  | —        | Yes                                  |
| **"Refresh roles" button** on the home page       | Per-player | 30 s     | Yes                                  |
| **"Resync all online" button** in the admin panel | Per-admin  | 30 s     | Yes (for every linked online player) |

The two manual buttons exist so you don’t have to wait up to 5 minutes after a Discord-side change. They don’t conflict with the background sweep — `night_discordapi` collapses overlapping requests for the same player.

### Disabling the integration

Flipping the master switch off does **two** things immediately:

1. Stops all future Discord syncs (the home-page Refresh button hides itself for every online player).
2. **Bulk-deletes every department row tagged `assignmentSource = 'discord'`** so any access that was granted via Discord is revoked at once. **Admin** and **open-join** rows are untouched.

This is intentional — leaving Discord-granted access in place after disabling the integration would mean players keep permissions you can no longer manage from Discord. If you want to keep specific people in their departments, re-add them via **User Management** before turning the integration off, and they’ll be tagged `admin` and protected.

### Who can use the page

The Discord Integration admin page is gated by the new **Discord Integration** module in the [Admin Permissions editor](/resources/nightShifts/how-it-works/#permissions). Defaults:

| Level                   | Page access | manage_settings | manage_mappings | resync |
| ----------------------- | ----------- | --------------- | --------------- | ------ |
| 0 User · 1 Moderator    | ✗           | ✗               | ✗               | ✗      |
| 2 Admin · 3 Super Admin | ✓           | ✓               | ✓               | ✓      |

Each action is editable per level by a Super Admin, so e.g. a Moderator can be granted **resync** alone (handy after a Discord-side restructure) without being able to alter mappings or flip the master switch.

## Discord webhooks (optional) {#discord-webhooks-optional}

**Different mechanism** to the [Discord integration](#discord-integration) above — webhooks **post messages out** of the MDT to a Discord channel (dispatch alerts, admin audit), they do **not** read Discord roles or affect access. You can run either, both, or neither.

The **implementation** (reading URLs and posting embeds) lives in `server/s_functions.lua`; you do **not** paste webhook URLs into that file on a normal install.

**URLs** are read from **server convars** at runtime:

- `nsmdt_discord_webhook_dispatch` — dispatch-related notifications  
- `nsmdt_discord_webhook_admin` — admin audit–style notifications

Set them in `server.cfg` (or any supported way you set FiveM convars), for example:

```ini
set nsmdt_discord_webhook_dispatch "https://discord.com/api/webhooks/…"
set nsmdt_discord_webhook_admin "https://discord.com/api/webhooks/…"
```

If a convar is empty or missing, the MDT **skips** posting for that channel (same behaviour as documented in the Lua comments above those convar names).

## Calling the MDT from other resources

Other scripts can use `exports['night_shifts_mdt']` (folder name must match). Use this page’s [Exports](/resources/nightShifts/exports/) section for signatures, rules, and examples. The same integration guide also ships in the resource as **`docs/EXPOSED_EXPORTS.md`** (the only docs file included in the production pack).

## ERS + CAD / other scripts (summary for server owners) {#ers-peddata-enrichment}

If you run **[Emergency Response Simulator](/resources/ers/)** together with Night Shifts MDT, you usually **do not need to change anything** for in-game ID checks: ERS keeps showing the same licence lines on the NPC card; the values now come from the **MDT** when a civilian is linked.

**Setup you should know about**

- **`server.cfg`:** keep **`ensure night_shifts_mdt` before `ensure night_ers`**, as in both guides.
- **Licence types:** The five **ERS** licence types (driver, motorcycle, boat, pilot, commercial) use **fixed internal ids** so NPC pools and the ERS ped card stay consistent. In **Admin → License Types** they show a small **lock** icon; you can edit the **display name** for localization, but **delete** and changing **prefix / behaviour / id** are blocked. Other licence types (hunting, fishing, etc.) work as before.
- **PNC flag types (Important Notices):** Preset types used with ERS show a small **lock** icon in **Admin → Flag Types** (same idea as ERS licence types). You can still **edit labels** and settings; **deleting** those preset types is **blocked** (a migration may re-add any missing presets on upgrade). **Custom** flag types behave as before in the MDT; on the NPC card, keep using **`pedData.FlagsOrMarkers`** like plain ERS — see **[ERS → Field ownership](/resources/ers/mdt-integration/)**.
- **CAD or custom resources** listening to ERS events: see **[ERS → Field ownership](/resources/ers/mdt-integration/)** for which fields come from the MDT vs ERS. **`mdtCivilianId`** on the ped payload is the MDT civilian record number; **`mdtPersonalId`** is the public dossier id when present (e.g. `CIV-…`).

**Licences on the ped card** — With the MDT on, the **`License_*`** fields match what ERS has always used (including valid/invalid styling). With the MDT off, ERS still generates random licence results as before.

**“Flags / markers” on the ped card** — Same as ERS without the MDT: your scripts keep using **`pedData.FlagsOrMarkers`**. With the MDT on, that data comes from the civilian’s **Important Notices** instead of being rolled at random. See [ERS — field ownership / NPC payload](/resources/ers/mdt-integration/) for the full `pedData` table.
