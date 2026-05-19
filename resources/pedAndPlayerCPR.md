---
layout: default
title: "Ped & Player CPR"
nav_order: 40
has_children: false
has_toc: true
last_modified_date: "2026-05-19 12:00:00"
---

<img class="cover-img" src="/assets/img/night_ped_cpr.png" alt="Ped & Player CPR (Animated) Resource" draggable="false">

# Ped & Player CPR (Animated) for FiveM
{: .no_toc}

A guide to install Ped & Player CPR (Animated) for FiveM

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Perform animated CPR on downed players and injured NPCs. This resource provides ERS-style synced CPR animations, framework revive integration, eligibility checks, and configurable permissions — with optional Coma & Down System support.

### **Key Features**
{: .no_toc }

- ✅ **Synced player CPR** — ERS-style staged animations (`missheistfbi3b_ig8_2`) with server-authoritative sync
- ✅ **Framework integration** — Auto-detect or manual ESX, QBCore, Qbox, and standalone revive handling
- ✅ **Failed CPR restore** — Victims return to their downed death animation without restarting bleedout timers (ESX Legacy compatible)
- ✅ **Eligibility checks** — CPR only on incapacitated players/NPCs (health, death state, framework metadata)
- ✅ **Framework permissions** — Night Discord API (multi-guild), ACE, ESX job/group, QBCore/Qbox job/permission
- ✅ **NPC & player targets** — Configurable: both, NPC only, or player only
- ✅ **Control lock** — Movement disabled instantly when CPR starts to prevent animation drift
- ✅ **Version checker** — Resource and config version check on startup (Nights version sheet)
- ✅ **Coma & Down System integration** — Optional integration with medical systems
- ✅ **Server exports** — Downed checks, permission checks, and manual downed restore for other resources

---

## 🛒 Purchase Information

**Get Ped & Player CPR:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/5009947){: .btn .btn-blue}

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/aq8IG2iv_EQ){: .btn .btn-red}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Download ZIP Package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to server.cfg (ensure script)
> 6. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone** — Built-in revive/respawn when no framework is detected
- **✅ ESX** — `esx_ambulancejob:revive` integration; failed CPR restores downed death animation
- **✅ QBCore** — `hospital:client:Revive` / `hospital:client:RespawnAtHospital`
- **✅ Qbox** — `qbx_medical` revive export with configurable respawn callback

Set `Config.Integrations.Framework` to `"auto"` (default), `"esx"`, `"qbcore"`, `"qbox"`, or `"standalone"`.

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

### **Integration Support**
{: .no_toc }

- **✅ Coma & Down System** — Optional revive/respawn via `night_coma_down_system` exports
- **✅ night_discordapi** — Multi-guild Discord role permissions (same model as ERS)
- **✅ ACE permissions** — Principal-based CPR access via `Config.Permissions.CPRRolesOrGroups`

{: .tip }
> **Note:** Ped & Player CPR is designed to work with any FiveM server configuration and provides realistic medical emergency features.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_ped_cpr` (do not rename)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`:

```conf
ensure night_ped_cpr
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `/config/config.lua` in your preferred editor
2. **Configure** all settings to your liking
3. **Test** the resource functionality

---

## ⚙️ Configuration Setup

### **Required Tools**
{: .no_toc }

{: .tip }
> **Visual Studio Code:** We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.

### **Configuration Files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `night_ped_cpr/config/config.lua` | Main settings, permissions, framework integration, animations |
| `night_ped_cpr/client/c_functions.lua` | Revive, respawn, and downed-state restore handlers |
| `night_ped_cpr/server/s_functions.lua` | Permissions, downed checks, and **server exports** |

### **Configuration Process**
{: .no_toc }

1. **Open VS Code** and navigate to the config files
2. **Read thoroughly** - each line has explanatory comments
3. **Configure settings** - customize cooldowns, duration, and survival rates
4. **Test frequently** - use F8 console for error checking

{: .tip }
> **Config version:** Keep `Config.ConfigVersion` in `config.lua` in sync with the `version` in `fxmanifest.lua`. Both are checked against the Nights version sheet on resource start.

{: .tip }
> **Medical settings:** Configure cooldown, CPR duration, survival percentage, target types (players/NPCs), positioning offsets, and framework events in `config/config.lua`.

---

## 🎮 How It Works

### **Command**
{: .no_toc }

- Default command: `/cpr` (configurable via `Config.Commands.CPR`)
- Stand within **2 metres** of a downed player or eligible NPC
- Player CPR requires the victim to be incapacitated; the server confirms eligibility before sync starts

### **CPR Performance**
{: .no_toc }

- **Player CPR** — Staged sync: setup → loop → outro, relayed through the server to both clients
- **NPC CPR** — Local session on the performer client with the same animation set
- **Survival roll** — Server rolls against `Config.Settings.PercentageOfSurvival` when CPR completes
- **Successful CPR** — Framework revive (or Coma & Down / standalone revive)
- **Failed CPR** — Victim stays in death mode; downed death animation is restored in place (no hospital teleport on ESX)

### **Configuration Options**
{: .no_toc }

| Setting | Description |
|---------|-------------|
| `AllowCPROnPedOrPlayer` | `1` = both, `2` = NPC only, `3` = player only |
| `DurationOfCPR` | Loop stage length in seconds |
| `OutroAnimationDuration` | Finish animation length in seconds |
| `PercentageOfSurvival` | Chance of successful revival (0–100) |
| `CPRCooldown` | Cooldown messaging while a session is active |
| `Positioning` | Victim/paramedic offsets (matched to ERS CPR defaults) |

### **Permissions**
{: .no_toc }

Configure `Config.Permissions` the same way as ERS:

- `EveryoneHasPermission = true` — Anyone can use `/cpr`
- `Enable_Night_DiscordApi_Permissions` — Requires `night_discordapi`
- `Enable_Ace_Permissions` — Match principals in `CPRRolesOrGroups`
- `Enable_ESX_Permissions` — Job and/or group checks
- `Enable_QBCore_Permissions` — Job and/or permission checks (also used for Qbox via qb-core bridge)

See [ACE Permissions](acePerms.md) and [Discord API](discordAPI.md) for setup guides.

### **ESX failed CPR note**
{: .no_toc }

ESX Legacy does not expose an instant hospital respawn client event. After failed CPR, the resource restores the victim's downed animation using `Config.Integrations.ESX.DeathAnim` (default: `misslamar1dead_body` / `dead_idle`). Match these values to your `esx_ambulancejob` `Config.DeathAnim` if you use custom death animations.

Optional hook: set `Config.Integrations.ESX.RestoreDownedClientEvent` to re-enter a custom ambulance death script after failed CPR.

---

## 🔌 Export Functions

### **Server-Side Exports** (`night_ped_cpr/server/s_functions.lua`)
{: .no_toc }

Use these exports from other **server-side** scripts:

```lua
-- Returns true if the player is downed/dead (state bags + ESX/QBCore metadata fallback)
local isDowned = exports['night_ped_cpr']:IsPlayerDownedOnServer(targetSource)

-- Returns true if the player is allowed to perform CPR (same rules as /cpr)
local canCpr = exports['night_ped_cpr']:HasCprPermission(source)

-- Manually restore a victim's downed/death animation and framework metadata
-- (same path used automatically after failed player CPR)
exports['night_ped_cpr']:RestorePlayerDownedFramework(targetSource)
```

| Export | Returns | Description |
|--------|---------|-------------|
| `IsPlayerDownedOnServer(playerSrc)` | `boolean` | Checks player state bags and ESX/QBCore death metadata |
| `HasCprPermission(source)` | `boolean` | Server-authoritative CPR permission check |
| `RestorePlayerDownedFramework(targetSrc)` | — | Restores downed animation after interrupted/failed CPR; updates ESX/QBCore metadata |

{: .tip }
> **Integration:** Use `IsPlayerDownedOnServer` before opening custom medic menus. Use `RestorePlayerDownedFramework` if another script clears a downed player's animation while they should remain dead.

### **Server Events** (revive / respawn triggers)
{: .no_toc }

Trigger these from **server-side** scripts to force framework revive or hospital respawn outside of a CPR session:

```lua
-- Framework-aware revive (ESX / QBCore / Qbox / Coma & Down / standalone)
TriggerEvent('night_ped_cpr_export:revive', targetSource)

-- Framework-aware hospital respawn
TriggerEvent('night_ped_cpr_export:respawn', targetSource)
```

{: .note }
> **Event naming:** Events use the `night_ped_cpr_export:` prefix. Do not rename `Config.EventPrefix` unless you update integration triggers accordingly.

---

## 🔗 Integration & Compatibility

### **Framework Support**
{: .no_toc }

| Framework | Revive | Failed CPR |
|-----------|--------|------------|
| **ESX** | `Config.Integrations.ESX.ReviveClientEvent` | Restores downed death animation in place |
| **QBCore** | `Config.Integrations.QBCore.ReviveClientEvent` | Restores downed state via client restore |
| **Qbox** | `qbx_medical:Revive` export or configured client event | Restores downed state via client restore |
| **Standalone** | Built-in client revive handler | Built-in downed animation restore |
| **Coma & Down** | `night_coma_down_system` exports | Client `:restoreDownedState` when enabled |

### **Medical System Integration**
{: .no_toc }

- **Coma & Down System** — Set `Config.Integrations.Enable_Coma_and_Down_System = true` for revive/respawn via [Coma & Down System](comaAndDownSystem.md)
- **ERS** — Uses the same CPR animation set and positioning offsets as ERS ped CPR
- **Discord API** — Role-based CPR permissions via [night_discordapi](discordAPI.md)

### **Server Integration**
{: .no_toc }

- **Universal Compatibility** — Works with OneSync Legacy and Infinity
- **Performance Optimized** — No idle resmon; control lock only runs during active CPR
- **Version checker** — Compares resource and config version against the Nights Google Sheet on start

{: .tip }
> **Medical roleplay:** Failed CPR keeps victims in their existing death state and only fixes animation/tasks — bleedout timers and distress flows are not restarted on ESX.

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Resource Not Starting**
> - Ensure the resource is properly added to server.cfg
> - Check that the resource name is `night_ped_cpr`
> - Verify the resource started without errors in console

{: .warning }
> **CPR Not Working**
> - Check F8 console for any error messages
> - Verify configuration settings in `config.lua`
> - Confirm the target is **incapacitated** (not just low health)
> - On ESX, ensure `ESX.PlayerData.dead` / metadata reflects death state
> - Check permission settings if `EveryoneHasPermission = false`

{: .warning }
> **Animations Not Syncing / Drifting**
> - Ensure both players are on the same resource version
> - Do not rename the resource folder (`night_ped_cpr`)
> - Avoid conflicting animation scripts during CPR
> - Control lock applies as soon as `/cpr` is accepted — report drift with framework and steps to reproduce

{: .warning }
> **Failed CPR — Victim Stands Up (ESX)**
> - Match `Config.Integrations.ESX.DeathAnim` to your `esx_ambulancejob` `Config.DeathAnim`
> - Keep `FreezeWhileDowned = true` unless your ambulance job handles freeze differently
> - Optional: set `RestoreDownedClientEvent` for custom death scripts

{: .warning }
> **Permission Denied**
> - Enable the permission system you use (Discord API, ACE, ESX, or QBCore block)
> - Add matching entries to `Config.Permissions.CPRRolesOrGroups`
> - Or set `EveryoneHasPermission = true` for testing

### **Debugging Tips**
{: .no_toc }

- **Check F8 Console** - Look for any error messages
- **Test CPR on Different Targets** - Try both players and NPCs
- **Verify Configuration** - Check all config settings are correct
- **Check Integration** - Ensure Coma & Down System is properly configured if using

---

## 💡 Best Practices

### **Medical Configuration**
{: .no_toc }

- **Cooldown Settings** - Set appropriate cooldowns for server balance
- **Survival Rates** - Configure realistic survival percentages
- **Target Selection** - Choose appropriate targets for your server
- **Duration Settings** - Set realistic CPR performance times

### **Performance Optimization**
{: .no_toc }

- **Animation Optimization** - Ensure animations run smoothly
- **Target Limits** - Configure appropriate target restrictions
- **Cooldown Management** - Balance gameplay with realistic mechanics
- **Regular Testing** - Test CPR functionality regularly

### **User Experience**
{: .no_toc }

- **Clear Instructions** - Provide users with CPR usage guidelines
- **Medical Training** - Offer guidance on proper CPR procedures
- **Roleplay Enhancement** - Encourage realistic medical roleplay
- **Emergency Procedures** - Integrate with other medical systems

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
