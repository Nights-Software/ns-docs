---
title: "Configuration & Callouts · ERS v1"
description: "The configuration files and how to create your own callouts."
slug: resources/ers/configuration
group: ers
lastUpdated: 2026-10-19
---

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We strongly recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File                                           | Purpose                        |
| ---------------------------------------------- | ------------------------------ |
| `night_ers/config/config.lua`                  | Main configuration             |
| `night_ers/config/gear-config.lua`             | Weapons and clothing           |
| `night_ers/config/impound-config.lua`          | Impound settings               |
| `night_ers/config/leaderboard-config.lua`      | Leaderboard settings           |
| `night_ers/config/npcbackup-config.lua`        | NPC Backup settings            |
| `night_ers/config/persistententity-config.lua` | NPC personal data settings     |
| `night_ers/config/pullover-config.lua`         | Traffic stop settings          |
| `night_ers/config/pursuit-config.lua`          | Pursuit settings               |
| `night_ers/config/questioning-config.lua`      | NPC questioning settings       |
| `night_ers/config/sound-config.lua`            | Sound & Voice over settings    |
| `night_ers/config/spikestrip-config.lua`       | Spikestrip settings            |
| `night_ers/config/stretcher-config.lua`        | Stretcher settings             |
| `night_ers/config/vehinteractions-config.lua`  | Vehicle search settings        |
| `night_ers/client/c_functions.lua`             | Client-side functions / events |
| `night_ers/server/s_functions.lua`             | Server-side functions / events |

Players manage their own stats privacy (opt out of tracking / enable public stats) in the [ERS Discord](https://discord.gg/zVP7xdhQde) with `/ers-stats [me/server]` after linking Discord in FiveM. While opted out, ERS does not send shift stats and `/ersprogression` shows an opt-out notice instead of XP.

### Configuration Process

1. **Open VS Code** and navigate to the config files [Download Visual Studio Code](https://code.visualstudio.com/)
2. **Read thoroughly** - each line has explanatory comments
3. **Configure in order** - work from top to bottom
4. **Watch for notes** - important warnings are clearly marked
5. **Test frequently** - use F8 console and server console for error checking

:::tip[Time Investment]
Plan adequate time for configuration. Each variable is named descriptively to help you understand its purpose.
:::

## Creating Custom Callouts

### Overview

ERS includes open-source callout scripts in `night_ers/callouts/plugins/*.lua`. You can add, remove, or edit callouts using built-in ERS functions.

### Callout Creator Pack

:::tip[Free Resource]
Download our [Callout Creator Pack](https://store.nights-software.com/package/6374594) for examples and documentation.
:::

### Development Process

1. **Copy Template:** Use existing callout file from `night_ers/callouts/plugins/`
2. **Rename File:** Use your desired callout name
3. **Modify Code:** Adjust config, client, and server sections
4. **Test Thoroughly:** Restart script and test with `/requestcallout`

:::caution[Support Notice]
Nights Software does not provide custom callout creation support beyond this documentation. Ask the community for help!
:::
