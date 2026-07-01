---
layout: default
title: "CBRN Disasters"
nav_order: 24
has_children: false
has_toc: true
last_modified_date: "2025-06-30"
---

<img class="cover-img" src="/assets/img/night_cbrn_disasters.png" alt="CBRN Disasters Resource" draggable="false">

# CBRN Disasters
{: .no_toc }

Chemical, biological, radiological, and nuclear disaster scenarios for FiveM — admin control panel, public emergency alerts, hazmat roleplay, and optional integrations with other Nights Software resources.
{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

CBRN Disasters brings large-scale emergency scenarios to your FiveM server: rogue warheads, nuclear plant incidents, radiologic leaks, biological outbreaks, and more. Staff spawn and manage events from an in-game panel; players receive government-style alerts, respond in hazmat gear, decontaminate hot zones, and haul recovered material to disposal depots.

{: .important }
> **Fictional roleplay only.** All disasters, alerts, and scenarios in this resource are fictional and intended solely for in-game roleplay. They are not based on, inspired by, or meant to represent any real-world events, locations, organizations, or persons.

### **Key Features**
{: .no_toc }

- ✅ **Multiple disaster types** — Warheads, power-plant incidents, radiologic leaks, transport spills, biological outbreaks, and more
- ✅ **Admin control panel** — Spawn, stop, and schedule disasters with permission gating
- ✅ **Public emergency alerts** — On-screen warnings when a scenario starts (multi-language)
- ✅ **Hazmat response gameplay** — Suit trucks, field decontamination, material recovery, and depot haul delivery
- ✅ **Fallout & dosimeter HUD** — Radiation exposure, shelter mechanics, and configurable damage
- ✅ **Air Raid Sirens integration** — Optional siren triggers during applicable disasters
- ✅ **Natural Disasters integration** — Grid blackout hooks for nuclear scenarios (when ND is installed)
- ✅ **Framework compatibility** — ESX, QBCore/Qbox, Discord API, Ace, and standalone setups
- ✅ **OneSync compatible** — Legacy and Infinity support
- ✅ **Server exports** — Start/stop disasters and query active runs from other resources
- ✅ **Client exports** — Fallout shelter hooks for housing and custom MLO shells
- ✅ **Escrow protection** — Secure resource protection; owner config under `config/` stays clear-text

---

## 🛒 Purchase Information

**Get CBRN Disasters for FiveM:**

[Purchase on Nights Software Store](https://store.nights-software.com){: .btn .btn-blue}

### **Optional integrations**
{: .no_toc }

These resources are **not required** but add atmosphere and effects when installed and enabled in `config/config.lua`:

| Resource | Purpose |
|----------|---------|
| [Air Raid Sirens](/resources/airRaidSirens) | Siren audio during applicable disasters |
| [Natural Disasters](/resources/naturalDisasters) | Grid blackout during overheated plant / warhead scenarios |
| [Discord API](/resources/discordAPI) | Role-based panel permissions |
| [Ace Permissions](/resources/acePerms) | Permission keys for panel access |

{: .tip }
> The CBRN panel does **not** drive Natural Disasters weather. Configure weather through **Natural Disasters** (or your weather script) separately.

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install optional integrations**
{: .no_toc }

If you use Air Raid Sirens or Natural Disasters, install and `ensure` them **before** CBRN Disasters:

```lua
ensure night_air_raid_sirens
ensure night_natural_disasters
ensure night_cbrn_disasters
```

See [Air Raid Sirens installation](/resources/airRaidSirens) and [Natural Disasters installation](/resources/naturalDisasters) for full setup.

### **Step 3: Install resource**
{: .no_toc }

{: .important }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Download ZIP package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set your File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to `server.cfg` (`ensure night_cbrn_disasters`)
> 6. Boot up the server

1. **Configure** the Lua files under `night_cbrn_disasters/config/` (see [Configuration](#️-configuration) below)
2. **Add to server.cfg**:
   ```lua
   ensure night_cbrn_disasters
   ```
3. Set `Config.Debug = false` on a live server unless you are actively troubleshooting
4. Restart the server

### **Game build & GTA assets**
{: .no_toc }

Some scenarios use ped models and animations added in newer GTA builds. The resource checks the server game build (`sv_enforceGameBuild`, or the client runtime build when that convar is unset) and picks the appropriate model list automatically.

{: .tip }
> **Game build 3507** includes the newest assets — for example the dedicated **zombie ped models** used during the **`nite_z26_outbreak`** scenario (`g_m_m_zombie_01`, `g_m_m_zombie_02`, and similar). Servers on **older game builds** do not have those assets; CBRN falls back to **`modelNamesLegacy`** (corpse-style peds such as `u_f_y_corpse_01`) so the outbreak still runs, but infected hosts will look different.

To use the zombie models on a supported artifact, set your enforced build in `server.cfg`:

```cfg
sv_enforceGameBuild 3507
```

The minimum build threshold is configurable per disaster in pack defaults (`z26ModelMinGameBuild`, default **3507**) under the `nite_z26_outbreak` → `z26` block. Lower it only if you know your build still ships the models you want.

---

## ⚙️ Configuration

Owner-tunable files live under `config/` (clear-text; not encrypted). Pack defaults in `defaults/disasters_defaults.lua` and `defaults/hazmat_defaults.lua` are merged at runtime — override only what you need in config.

### **Config files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `config/config.lua` | Permissions, locale, commands, hotkeys, integrations, fallout/dosimeter tuning, random disaster timer defaults |
| `config/disasters_config.lua` | Per-disaster settings — locations, durations, sirens, effects |
| `config/hazmat_job_config.lua` | Hazmat job access, clothing, decon, material recovery, haul payouts |
| `config/translations/` | UI and alert strings (`Config.Locale`, default `en`) |

### **Permissions**
{: .no_toc }

Choose from multiple permission systems for the **control panel** (separate from hazmat job permissions):

1. **Everyone**: `Config.Permissions.Panel.everyone = true` (good for testing)
2. **Discord API**: [Discord API Documentation](/resources/discordAPI)
3. **Ace Permissions**: [Ace Permissions Documentation](/resources/acePerms)
4. **Framework jobs / groups**: ESX or QBCore/Qbox — configure `Config.Permissions.Providers`

Hazmat truck suit, decon, and material recovery use **`Config.HazmatJob.Permissions`** in `config/hazmat_job_config.lua` (same provider types, independent allow lists).

### **Integrations**
{: .no_toc }

In `config/config.lua` → `Config.Integrations`:

```lua
Config.Integrations = {
    UseAirRaidSirens = true,
    AirRaidZoneBased = true,  -- area-based sirens when night_air_raid_sirens supports it
    NaturalDisastersBlackoutForOverheated = true,
    -- Warhead / atomic bomb: ND blackout at impact flash (see config comments)
}
```

Per-disaster opt-out: set `airRaidSirensEnabled = false` or `naturalDisastersBlackout = false` on a disaster in `disasters_config.lua`.

### **Radiation shelter (fallout)**
{: .no_toc }

During rogue warhead / atomic fallout, sheltered players skip tint, dosimeter field dose, radiation HP loss, and shockwave knockback from this resource.

```lua
Config.RadiationShelter = {
    Enabled = true,
    InteriorNative = true,  -- vanilla GTA interiors count automatically
    HousingExportResource = nil,  -- e.g. 'rtx_housing'
    HousingExportName = nil,      -- e.g. 'IsPlayerInsideProperty'
}
```

Custom housing shells that do not register as native interiors should call the [client shelter exports](#client-side-exports) or wire a boolean export as shown in [Client-side exports](#client-side-exports).

### **Disaster types**
{: .no_toc }

Spawn by **type id** from the panel, admin commands, or server exports. Default pack includes:

| Type id | Scenario |
|---------|----------|
| `rogue_warhead` | Multi-strike warhead run with fallout and hazmat field cleanup |
| `atomic_bomb` | Single large detonation with fallout |
| `overheated_nuclear_power_plant` | Plant incident with optional ND grid blackout |
| `radiologic_substance_leak` | Fixed-site radiologic leak and welding repair gameplay |
| `transport_radiologic_spill` | Mobile transport spill scenarios |
| `humane_labs_rat_breach` | Biological lab breach |
| `viral_avian_dieoff` | Avian die-off field scenario |
| `oil_field_flowline_blowout` | Chemical / industrial blowout |
| `nite_z26_outbreak` | NITE-Z26 biological outbreak — **zombie peds on game build 3507+**; legacy corpse peds on older builds (see [Game build & assets](#game-build--gta-assets)) |
| `orbital_rtg_impact` | Orbital RTG impact event |

Tune each type in `config/disasters_config.lua`. Location arrays **replace** pack lists when set; nested objects merge.

---

## 🎮 In-game usage

### **How to play — hazmat response**
{: .no_toc }

When a disaster is active, players in the hazmat job role can respond on scene. There are **two different vehicles** — this is intentional:

| Role | Default vehicle | What it does |
|------|-----------------|--------------|
| **Suit / job truck** | `utillitruck3` (utility truck) | **Put on or remove your hazmat suit** — stand next to the truck and interact |
| **Recovery / haul truck** | `mule4` (box truck) | **Load decontaminated drums** and drive them to a disposal depot |

{: .important }
> The **utility truck is not** the drum collection vehicle. Players need to figure out (or be briefed) that they **change into the suit at the utility truck**, then use a **separate haul truck** to pick up drums after field work.

**Typical flow:**

1. **Get a utility truck** — spawn or dispatch the configured suit vehicle (default **`utillitruck3`**) to the incident.
2. **Put on the suit** — stand within range of that truck and press **E** (default — `Config.Hotkeys.HazmatInteract`). The same key at the same truck removes the suit when you are done.
3. **Work the hot zone** — with the suit on, go to marked decon sites (spray, mop, broom, or dig depending on the scenario) and press **E** until each site is cleared.
4. **Load drums** — once a drum reads as recovered, bring a **haul truck** (default **`mule4`**) close to the drum and press **E** to load it onto the vehicle. The truck must be within range; you must be near the drum as well.
5. **Deliver** — when haul delivery is enabled, a GPS route points to the configured **depot**. Stop inside the depot zone, stay below the unload speed limit, and wait for the unload timer to finish for payout.

You need hazmat job permission (`Config.HazmatJob.Permissions`) unless your server sets `everyone = true`. Suit wear, decon, drum load, and depot payout all respect that access list.

Server owners can change vehicle models, depot locations, payouts, and decon tuning in `config/hazmat_job_config.lua` — but the **suit truck** and **recovery truck** lists must stay separate.

To tune clothing: dress your freemode ped in-game, run **`/cbrn_hazmat_clothing`** (panel permission), and paste the F8 output into `Config.HazmatJob.Clothing`.

### **Control panel**
{: .no_toc }

- **Command**: `/cbrn` (default — `Config.Commands.OpenPanel`)
- **Key**: **HOME** (default — `Config.Hotkeys.OpenPanel`)
- Requires panel permission unless `Config.Permissions.Panel.everyone = true`

From the panel you can spawn disasters, stop active runs, and toggle the random disaster scheduler.

### **Admin commands**
{: .no_toc }

Disaster control uses **`Config.Permissions.Panel`** (Discord, Ace, ESX, QBCore, or `Panel.everyone = true`) — the same gate as opening the panel with `/cbrn`. There is no separate “admin command” permission list.

| Command | Default | Permission | Purpose |
|---------|---------|------------|---------|
| `cbrnspawn` | `/cbrnspawn <type>` | Panel | Spawn a disaster by type id (e.g. `rogue_warhead`) |
| `cbrnrandom` | `/cbrnrandom` | Panel | Spawn a random enabled disaster |
| `cbrnstop` | `/cbrnstop` | Panel | Stop all active disasters |
| `cbrntogglerandom` | `/cbrntogglerandom` | Panel | Toggle automatic random scheduler |
| `cbrn_hazmat_clothing` | `/cbrn_hazmat_clothing` | Panel | Print current MP ped outfit as Lua for `hazmat_job_config.lua` (F8) |
| `cbrndosimeterlayout` | `/cbrndosimeterlayout` | **None** | Toggle draggable fallout dosimeter HUD layout (any player) |

Server-side commands are registered in `server/commands.lua` and call `CBRN.CanPlayerControl`, which is **`HasPanelPermission`**. Without permission, the command silently does nothing. The **server console** (`src == 0`) bypasses that check.

The **`/cbrn` panel** itself also asks the server before opening — unauthorized players get a denial message instead of the UI.

**Hazmat gameplay** (suit, decon, drum load, haul) uses a **separate** list: `Config.HazmatJob.Permissions` — not panel permission.

---

## 🔧 Exports

Resource name in examples: `night_cbrn_disasters` (match your folder name in `server.cfg` if different).

Server exports run after the resource has finished loading. By default, only **one** blocking disaster run is allowed at a time; a second `SpawnDisaster` while one is active fails with `blocked_parallel`.

### **Server-side exports**
{: .no_toc }

```lua
-- Disaster management
local runId, err = exports['night_cbrn_disasters']:SpawnDisaster('rogue_warhead')
-- runId = numeric run id on success; err = reason string on failure (e.g. invalid_disaster, disabled, blocked_parallel)

exports['night_cbrn_disasters']:StopDisaster(runId)       -- true if a run was stopped
exports['night_cbrn_disasters']:StopAllDisasters()

local list = exports['night_cbrn_disasters']:GetActiveDisasters()
-- returns { { id = number, run = table }, ... }

-- Random scheduler (same as panel toggle)
exports['night_cbrn_disasters']:SetRandomDisastersEnabled(true)
local enabled = exports['night_cbrn_disasters']:IsRandomDisastersEnabled()
```

**Example — spawn from another resource:**

```lua
local runId, err = exports['night_cbrn_disasters']:SpawnDisaster('rogue_warhead')
if not runId then
    print('Spawn failed:', err)
else
    print('Started disaster run', runId)
end
```

### **Client-side exports**
{: .no_toc }

Used for **fallout shelter** during warhead / atomic scenarios. These are **not** UI notifications — they tell CBRN that the local player entered or left a radiation-safe shell.

```lua
local res = 'night_cbrn_disasters'

-- When your housing script marks the player inside a protected shell:
exports[res]:NotifyRadiationShelterEntered()

-- When they leave (always pair with Enter):
exports[res]:NotifyRadiationShelterExited()

-- Query shelter state
local ped = PlayerPedId()
if exports[res]:IsPlayerRadiationSheltered(ped) then
    -- player is sheltered for CBRN fallout effects
end
```

**Optional housing export** (configure in `config/config.lua` instead of manual Enter/Exit calls):

```lua
Config.RadiationShelter = {
    Enabled = true,
    InteriorNative = true,
    HousingExportResource = 'my-housing',
    HousingExportName = 'IsLocalPlayerInRadiationShell',
}
```

Your housing resource exposes a client export returning `true` / `false` with no arguments.

---

## 🔧 Troubleshooting

### **Common issues**
{: .no_toc }

1. **Parsing errors in F8 console**
   - Follow the exact [installation order](#step-3-install-resource) above
   - Use binary FTP transfer mode
   - Do not rename the resource folder unless you update all references

2. **Panel or commands say no permission**
   - Check `Config.Permissions.Panel.everyone` or your Discord / Ace / framework provider settings
   - Hazmat job access is separate — see `Config.HazmatJob.Permissions`

3. **Air raid sirens do not play**
   - Ensure `night_air_raid_sirens` is started and `Config.Integrations.UseAirRaidSirens = true`
   - Check per-disaster `airRaidSirensEnabled` in `disasters_config.lua`

4. **Blackout does not trigger during nuclear scenarios**
   - Requires `night_natural_disasters` started with blackout exports available
   - Check `Config.Integrations.NaturalDisastersBlackoutForOverheated` and per-disaster blackout flags

5. **Fallout still affects players indoors**
   - Confirm `Config.RadiationShelter.Enabled = true` and `InteriorNative = true`
   - Custom shells: call `NotifyRadiationShelterEntered` / `Exited` or wire `HousingExportResource`

6. **Missing translation keys in NUI**
   - Set `Config.Locale` and ensure matching files exist under `config/translations/`
   - Restart the resource after locale changes

### **Best practices**
{: .no_toc }

1. **Configuration**
   - Test disaster spawns and hazmat flow on a development server first
   - Override only what you need in `disasters_config.lua`; pack defaults cover the rest
   - Keep `Config.Debug = false` on production unless troubleshooting

2. **Performance**
   - Only one blocking disaster run is active by default — avoid stacking heavy scenarios
   - Tune random scheduler intervals in `Config.Progression` for your server population

3. **Integrations**
   - Install Air Raid Sirens and Natural Disasters before CBRN when using those features
   - Do not run multiple weather systems alongside Natural Disasters if ND handles weather for you

---

## 🔗 Related Resources

### **Recommended additions**
{: .no_toc }

- [Natural Disasters](/resources/naturalDisasters) — Weather, blackouts, and environmental disasters
- [Air Raid Sirens](/resources/airRaidSirens) — Emergency siren audio during CBRN events
- [Discord API](/resources/discordAPI) — Role-based permissions
- [Ace Permissions](/resources/acePerms) — Advanced permission system
- [Emergency Response System (ERS)](/resources/ers) — Complementary emergency services roleplay

### **Suggested ensure order**
{: .no_toc }

```lua
ensure night_air_raid_sirens
ensure night_natural_disasters
ensure night_cbrn_disasters
```

---

## 🆘 Support

### **Documentation**
{: .no_toc }

- Review this guide thoroughly before seeking support
- Check configuration settings in `config/` carefully
- Verify optional integrations are installed and started

### **Community support**
{: .no_toc }

Join our Discord community for assistance:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}

### **Technical support**
{: .no_toc }

- Create a ticket in our Discord support system
- Provide detailed error messages and relevant config snippets
- Include server logs and F8 client output when possible
