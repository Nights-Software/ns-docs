---
layout: default
title: "Subtitles for FiveM"
nav_order: 37
has_children: false
has_toc: true
last_modified_date: "2026-10-20 17:30:00"
---

<img class="cover-img" src="/assets/img/night_subtitles.png" alt="Subtitles for FiveM" draggable="false">

# Subtitles for FiveM
{: .no_toc}

A guide to install, configure and use Subtitles for FiveM 2.0

{: .fs-5 .fw-300 }

---

## 📋 Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 🎯 Overview

Show subtitles on your players' screens from any script, with one export call. Lines queue up and play one after another, each line can carry a title, such as who is talking, and you choose from five looks, from the ERS v2 interface to an old western paper chart.

### **Key Features**
{: .no_toc }

- ✅ **Five Subtitle Styles** - ERS Kit, Classic, Paper (Western), Modern and Transparent
- ✅ **A Real Queue** - Lines play in order, with priority lines and lines that update in place
- ✅ **Titles** - Pass a title such as `Control`, or write `Control: text` and it becomes the title
- ✅ **Client and Server Exports** - Show lines from client scripts, or send them to one, some or all players from the server
- ✅ **Backwards Compatible** - `DisplaySubtitle(text, duration)` and the 1.x event work exactly as before
- ✅ **Player Settings** - Players can choose their own style and size, or turn subtitles off, with `/subtitles`
- ✅ **Automatic Duration** - Leave out the duration and it is worked out from the length of the text
- ✅ **GTA Colour Codes** - `~r~`, `~b~`, `~g~`, `~y~`, `~h~` (bold) and `~n~` (new line) are supported
- ✅ **Resolution Independent** - Subtitles take up the same share of the screen at 1080p, 1440p and 4K
- ✅ **Lightweight** - The script only runs while a subtitle is on screen or waiting: 0.00 ms in resmon, idle and while showing lines
- ✅ **Matches ERS** - With ERS, the ERS Kit style takes each player's ERS colour and UI size

### **What's New in 2.0**
{: .no_toc }

| Area | 1.x | 2.0 |
|------|-----|-----|
| Looks | One look, changed by editing CSS | Five styles, chosen in the config (or per player, or per line) |
| Queue | None: a new line replaced the old one, and the old line's timer could hide the new one early | A queue with priority, keyed lines and a short gap between lines |
| Exports | `DisplaySubtitle` | `DisplaySubtitle` plus `Show`, `Queue`, `Hide`, `Clear` and more, on client and server |
| Who is talking | Part of the text | A title above or in front of the line, styled per look |
| Duration | Always given by the caller | Optional, worked out from the text when left out |
| Pause menu | Subtitles stayed on screen | Hidden while the pause menu is open, and their time stops |

---

## 🛒 Purchase Information

**Get Subtitles for FiveM:**

[Purchase on Nights Software Store](https://store.nights-software.com/package/6043540){: .btn .btn-blue}

{: .tip }
> **ERS owners:** Subtitles for FiveM is included with ERS Essential, Plus and Ultimate. ERS uses it automatically when `Config.Enable_Night_Subtitles = true`. With 2.0, ERS lines play through the subtitle queue, and the ERS Kit style follows each player's ERS colour and UI size (turn that off with `Settings.MatchHud = false`).

---

## 📺 Video Showcase

**Watch the video showcase:**

[Video Showcase](https://youtu.be/VeSd0Yp3HDo){: .btn .btn-red}

---

## ⚠️ Important Pre-Installation Notes

{: .warning }
> **Critical Installation Order:** Always follow this exact sequence to avoid parsing errors in the F8 console:
> 1. Download ZIP Package from CFX Portal
> 2. Unpack in a folder on your local machine
> 3. Set your File Transfer Protocol (FTP) type to **binary**
> 4. Drag files from local machine to server resources folder
> 5. Add to server.cfg (ensure script)
> 6. Boot up the server

{: .important }
> **Support Policy:** Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.

---

## 🔧 System Requirements & Compatibility

### **Framework Compatibility**
{: .no_toc }

- **✅ Standalone:** Works independently without any framework
- **✅ Any FiveM Server:** ESX, QBCore, QBox, vRP or no framework at all

### **OneSync Compatibility**
{: .no_toc }

- **✅ OneSync Legacy:** Fully tested and compatible
- **✅ OneSync Infinity:** Fully tested and compatible

---

## 📦 Installation Process

### **Step 1: Download Resource**
{: .no_toc }

Download this resource via [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing.

### **Step 2: Install Resource**
{: .no_toc }

1. **Extract** the ZIP package to your local machine
2. **Transfer files** using binary FTP mode to your server's resources folder
3. **Ensure the folder** is named `night_subtitles` (do not rename: other scripts call it by this name)

### **Step 3: Server Configuration**
{: .no_toc }

Add the resource to your `server.cfg`. Start it **before** the scripts that use it (for example ERS):

```conf
ensure night_subtitles
```

### **Step 4: Configure Settings**
{: .no_toc }

1. **Open** `night_subtitles/config/config.lua` in your preferred editor
2. **Pick a style** with `Config.Style` and adjust the rest to your liking
3. **Test** in game with `/subtitledemo` and `/testsubtitle Control: Hello world`

### **Updating from 1.x**
{: .no_toc }

1. **Back up** your old `config/config.lua` if you changed it
2. **Replace** the whole `night_subtitles` folder with the new one (the 1.x `NUI/styles.css` is gone; the look is now chosen in the config)
3. **Set** `Config.Style = 'classic'` if you want to keep the 1.x look

{: .tip }
> **No script changes needed:** every script that calls `exports.night_subtitles:DisplaySubtitle(text, duration)` or triggers `night_subtitles:DisplaySubtitle` keeps working, with the same behaviour as in 1.x.

---

## 🎨 Subtitle Styles

<img src="/assets/img/night_subtitles_styles.png" alt="The five subtitle styles, one line each" draggable="false">

| Style | `Config.Style` | Look |
|-------|----------------|------|
| **ERS Kit** | `'kit'` | Built from the ERS v2 interface: smoked glass with the hexagon lattice, corners cut like the ERS shield, the title as a kit label, and a bar along the bottom that drains as the time runs out |
| **Classic** | `'classic'` | The original 1.x look: white text on a dark box |
| **Paper (Western)** | `'paper'` | A worn sheet off a frontier ledger. Every line gets its own torn edges, folded corner, stains, creases and angle, so no two sheets look the same |
| **Modern** | `'modern'` | A broadcast name strap: the title on a coloured tab, the line on a dark bar with a slanted end, wiping in from the left |
| **Transparent** | `'clear'` | No box: outlined white text like film subtitles, the title in capitals in front |

The style can be set in three places. The most specific one wins:

1. **Per line** - a script passes `style = 'paper'` with a line
2. **Per player** - a player picks a style with `/subtitles style <name>` (when `AllowPlayerSettings = true`)
3. **Server-wide** - `Config.Style`

### **Fonts and Licences**
{: .no_toc }

The styles use four fonts. They ship inside the resource (`NUI/fonts`), so they work without an internet connection. All four are under the [SIL Open Font License 1.1](https://openfontlicense.org), which allows them to be bundled with software, including paid software. Each font's licence file sits next to it.

| Font | Used by | Licence |
|------|---------|---------|
| Tektur | ERS Kit labels | `Tektur-OFL.txt` |
| Manrope | ERS Kit, Modern and Transparent text | `Manrope-OFL.txt` |
| IM Fell English | Paper text | `IMFellEnglish-OFL.txt` |
| Rye | Paper titles | `Rye-OFL.txt` |

{: .note }
> Keep the licence files with the fonts if you change or redistribute the resource. Rye's licence reserves the name "Rye", so if you edit the font file itself, rename it.

The Paper style's fonts cover Latin scripts. Text in Cyrillic, Greek and similar scripts falls back to a standard serif. The other styles cover Latin, Cyrillic, Greek and Vietnamese.

---

## 🏷️ Titles

A subtitle can have a **title**: a short word or name shown with the line, usually who is talking (`Control`, `Driver`, `Sheriff`). Each style draws it its own way: as a label above the line (ERS Kit, Paper, Modern) or in front of it (Classic, Transparent).

```
  CONTROL
  Unit 12, respond to Vespucci Boulevard.
```

### **Giving a Line a Title**
{: .no_toc }

There are two ways. Both give the same result on screen.

**1. Pass it as an option.** The text stays exactly as you wrote it:

```lua
exports.night_subtitles:Queue("Unit 12, respond to Vespucci Boulevard.", { title = "Control" })
```

**2. Start the text with the name and a colon.** The name is taken off the front of the text and becomes the title:

```lua
exports.night_subtitles:Queue("Control: Unit 12, respond to Vespucci Boulevard.")
```

The second way is what makes older scripts look right without changes: ERS and most 1.x scripts already send their lines as `Name: text`.

### **The NameAsTitle Setting**
{: .no_toc }

`Settings.NameAsTitle` in `config.lua` turns the second way on or off. This is how the text `"Control: Unit 12, respond"` shows on screen:

| `NameAsTitle = true` (default) | `NameAsTitle = false` |
|---|---|
| **CONTROL**<br>Unit 12, respond | Control: Unit 12, respond |

Only a short name at the very start counts (up to 40 characters, followed by a colon and a space). So text like `Arrival at 10:30` or `"Quoted: text"` is never split.

### **When Text Starts With a Word and a Colon by Accident**
{: .no_toc }

`"Note: the road is closed."` would show **NOTE** as a title. To show such a line exactly as written, add `nameAsTitle = false` to that one line:

```lua
exports.night_subtitles:Show("Note: the road is closed.", { nameAsTitle = false })
```

A title passed as an option always wins, so this line keeps "Wanted:" in its text and shows **SHERIFF** as the title:

```lua
exports.night_subtitles:Show("Wanted: dead or alive.", { title = "Sheriff", style = "paper" })
```

---

## ⚙️ Configuration

### **Configuration Files**
{: .no_toc }

| File | Purpose |
|------|---------|
| `night_subtitles/config/config.lua` | Style, layout, timing, queue, commands and messages |
| `night_subtitles/client/c_functions.lua` | Open client functions: how commands notify the player, and when subtitles hide or pause |
| `night_subtitles/server/s_functions.lua` | Open server functions (debug printing) |

### **Look and Layout**
{: .no_toc }

| Setting | Default | Description |
|---------|---------|-------------|
| `Style` | `'kit'` | The style every subtitle uses: `kit`, `classic`, `paper`, `modern` or `clear` |
| `Layout.Position` | `'bottom'` | `'bottom'` or `'top'` of the screen |
| `Layout.Offset` | `7` | Distance from that edge, in % of the screen height |
| `Layout.MaxWidth` | `56` | The widest a subtitle gets, in % of the screen width |
| `Layout.Scale` | `1.0` | Text size. `0.8` is smaller, `1.3` is bigger |
| `Styles.kit.Accent` | `'#3B82F6'` | ERS Kit accent colour (lattice, lines, title, time bar) |
| `Styles.kit.ShowTimer` | `true` | The bar along the bottom that drains while a line is shown |
| `Styles.classic.BackgroundOpacity` | `0.7` | Darkness of the Classic box, `0` to `1` |
| `Styles.paper.Tilt` | `true` | Each sheet at its own slight angle, like notes pinned to a board |
| `Styles.paper.Wear` | `true` | Torn edges, a folded corner, stains and creases. `false` gives clean paper |
| `Styles.modern.Accent` | `'#8B9CFF'` | Modern title tab and timer colour |
| `Styles.modern.ShowTimer` | `true` | The thin line that runs down while a line is shown |
| `Styles.clear.TitleColor` | `'#FFD166'` | Transparent title colour |

### **Timing and Queue**
{: .no_toc }

| Setting | Default | Description |
|---------|---------|-------------|
| `Settings.DefaultDuration` | `5000` | ms, used when no duration is given and `AutoDuration` is off |
| `Settings.AutoDuration` | `true` | No duration given: work it out from the length of the text |
| `Settings.MinDuration` / `MaxDuration` | `2500` / `12000` | ms, the limits for `AutoDuration` |
| `Settings.MsPerCharacter` | `60` | ms of reading time per character |
| `Settings.MaxVisible` | `1` | Lines on screen at once. `2` or `3` shows a short conversation, newest at the bottom |
| `Settings.MaxQueued` | `25` | Lines that can wait. A full queue drops its oldest normal line |
| `Settings.GapBetweenLines` | `150` | ms of empty screen between two queued lines |
| `Settings.NameAsTitle` | `true` | Text like `Control: Unit 12, respond` shows `Control` as the line's title. See [Titles](#titles) |
| `Settings.HideInPauseMenu` | `true` | Hide subtitles while the pause menu is open |
| `Settings.PauseInPauseMenu` | `true` | Stop the subtitles' time while the pause menu is open |
| `Settings.HideWithHud` | `false` | Hide subtitles when a script hides the HUD |
| `Settings.AllowPlayerSettings` | `true` | Let players use `/subtitles` |
| `Settings.MatchHud` | `true` | With ERS: the ERS Kit style uses each player's ERS colour, and the size follows their ERS UI size. A size the player picked with `/subtitles size` still wins. `false` always uses the colours and `Layout.Scale` from the config |

{: .tip }
> **Your own hide rules:** `ShouldHideSubtitles()` in `client/c_functions.lua` decides when subtitles hide. Add your phone, cutscene or camera script there.

---

## 🎮 Commands

| Command | Who | Description |
|---------|-----|-------------|
| `/testsubtitle [text]` | Everyone | Shows the text right away (as in 1.x) |
| `/subtitledemo` | Everyone | Plays a short conversation in every style. Set `Commands.Demo = false` to remove it |
| `/subtitles` | Players | Shows the player's current settings |
| `/subtitles style <name>` | Players | Picks a style for this player: `kit`, `classic`, `paper`, `modern`, `clear` |
| `/subtitles size <0.6-1.6>` | Players | Text size for this player |
| `/subtitles on` / `off` | Players | Turns subtitles on or off for this player |
| `/subtitles reset` | Players | Back to the server's settings |

Player settings are saved on the player's own PC and kept between sessions. Command names and messages can be changed in `config.lua`.

---

## 📊 Exports

### **How the Queue Works**
{: .no_toc }

- **`Show`** puts a line on screen **now**. Whatever was on screen goes. Lines waiting in the queue stay there and play after it
- **`Queue`** adds a line to the **end of the queue**. It plays when the lines before it are done
- **Priority lines** (`priority = true`) go ahead of normal waiting lines, in the order they were added
- **Keyed lines** (`key = 'something'`) replace the line with the same key. On screen it updates in place with a fresh timer; in the queue it takes the old line's place. Use this for status lines that change, such as a distance or a countdown
- Every call returns a **line id** you can pass to `Hide`, `IsShowing` or `IsQueued`

### **Client Exports**
{: .no_toc }

```lua
-- 1.x, unchanged: show now, for this many ms
exports.night_subtitles:DisplaySubtitle(text, durationMs)

-- Show now / add to the queue. opts is a duration in ms, or a table (see below)
local id = exports.night_subtitles:Show(text, opts)
local id = exports.night_subtitles:Queue(text, opts)

exports.night_subtitles:Hide(id)          -- remove one line (on screen or waiting); no id hides what is on screen
exports.night_subtitles:Clear()           -- remove everything, on screen and waiting
exports.night_subtitles:ClearQueue()      -- empty the queue, keep what is on screen; returns how many were removed

exports.night_subtitles:IsShowing(id)     -- true while that line is on screen; no id: anything on screen
exports.night_subtitles:IsQueued(id)      -- true while that line waits
exports.night_subtitles:GetQueueSize()    -- lines waiting

exports.night_subtitles:SetStyle(name)    -- server-wide style for this client until restart; false if unknown
exports.night_subtitles:SetTheme({ accent = '#06B6D4', scale = 1.2 })  -- match your HUD: ERS Kit colour and size (ERS calls this itself)
exports.night_subtitles:GetStyle()        -- the style this player sees
exports.night_subtitles:GetStyles()       -- { 'kit', 'classic', 'paper', 'modern', 'clear' }
```

### **Line Options**
{: .no_toc }

| Option | Type | Description |
|--------|------|-------------|
| `duration` | number | ms on screen. Leave out for an automatic duration |
| `title` | string | A short title shown with the line, usually who is talking (`speaker` works too) |
| `style` | string | A style for this line only: `kit`, `classic`, `paper`, `modern` or `clear` |
| `priority` | boolean | `true` puts the line ahead of normal waiting lines |
| `key` | string | Replaces the line with the same key, on screen or waiting |
| `nameAsTitle` | boolean | `false` shows `Name: text` exactly as sent, with no title |

### **Server Exports**
{: .no_toc }

`target` is a player's server id, `-1` for everyone, or a list of server ids.

```lua
exports.night_subtitles:Show(target, text, opts)
exports.night_subtitles:Queue(target, text, opts)
exports.night_subtitles:Clear(target)
exports.night_subtitles:DisplaySubtitle(target, text, durationMs)   -- 1.x call shape
```

### **Client Events**
{: .no_toc }

For scripts that prefer events (trigger from the server with `TriggerClientEvent`):

| Event | Arguments |
|-------|-----------|
| `night_subtitles:DisplaySubtitle` | `text, durationMs` (1.x, unchanged) |
| `night_subtitles:show` | `text, opts` |
| `night_subtitles:queue` | `text, opts` |
| `night_subtitles:clear` | none |

### **Usage Examples**
{: .no_toc }

```lua
-- 1.x code keeps working
exports.night_subtitles:DisplaySubtitle("Welcome to Nights Software🙂. It's time for some real subtitles!", 5000)

-- A conversation that plays in order, with automatic durations
exports.night_subtitles:Queue("Unit 12, respond to a reported collision on Vespucci Boulevard.", { title = "Control" })
exports.night_subtitles:Queue("Copy that, en route.", { title = "You" })
exports.night_subtitles:Queue('"I swear, officer, the light was green!"', { title = "Driver" })

-- The same, with the title written in the text (NameAsTitle)
exports.night_subtitles:Queue("Control: Unit 12, respond to a reported collision.")

-- Urgent: jumps the queue
exports.night_subtitles:Queue("Shots fired! All units, code 3.", { title = "Dispatch", priority = true })

-- A status line that updates in place
exports.night_subtitles:Queue(("Suspect vehicle %d m ahead."):format(distance), { title = "Air 1", key = "air1", duration = 4000 })

-- A western event in the Paper style, whatever the server style is
exports.night_subtitles:Show("Wanted: dead or alive. $5,000 reward.", { title = "Sheriff", style = "paper" })

-- Colour codes and a new line
exports.night_subtitles:Show("Suspect is ~r~armed~s~.~n~Backup is ~g~en route~s~.", { title = "Dispatch" })

-- From the server, to everyone
exports.night_subtitles:Queue(-1, "The city will restart in 5 minutes.", { title = "Server", priority = true })
```

---

## 🛠️ Troubleshooting

### **Common Issues**
{: .no_toc }

{: .warning }
> **Export Not Found**
> - Ensure the resource is started in server.cfg, before the scripts that use it
> - Check that the resource folder is named `night_subtitles`
> - Verify the resource started without errors in the console

{: .warning }
> **Subtitles Not Displaying**
> - Run `/subtitledemo`. If it shows, the resource works and the calling script is the problem
> - The player may have turned subtitles off: `/subtitles on`
> - The pause menu or a hidden HUD hides subtitles (see `HideInPauseMenu` and `HideWithHud`)
> - Check F8 for errors and set `Config.Debug = true` to see each line in F8

{: .warning }
> **Lines Show Later Than Expected**
> - `Queue` waits for the lines before it. Use `Show` for a line that must appear now, or `priority = true` to go ahead of the waiting lines
> - Too many lines at once: shorten durations, or set `MaxVisible = 2`

{: .warning }
> **Part of My Text Shows as a Title**
> - Text like `Note: be careful` shows **NOTE** as a title. Pass `nameAsTitle = false` for that line, or set `NameAsTitle = false` in the config

{: .warning }
> **A Player Sees a Different Style**
> - Players can choose their own style with `/subtitles`. `/subtitles reset` returns to the server's style, `AllowPlayerSettings = false` turns this off

---

## 💡 Best Practices

- **Queue conversations, show interruptions** - Use `Queue` for dialogue so lines never cut each other off, and `Show` only for something that must replace what is on screen
- **Pass a title** - A title reads faster than a name in the sentence, and it is styled for each look
- **Leave out the duration** - The automatic duration gives long lines more time and short lines less
- **Use keys for changing values** - One keyed line beats a queue full of outdated distances
- **Keep lines short** - Two lines of text at most; split longer speech into several queued lines

---

## 🆘 Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
