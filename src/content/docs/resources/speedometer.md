---
title: Speedometer
description: A modern, customizable vehicle speedometer for FiveM with advanced features and sleek design.
slug: resources/speedometer
lastUpdated: 2025-10-12
group: scripts
store: https://store.nights-software.com/package/7070740
video: https://youtu.be/LvQomjiIufU
cover: ../../../assets/covers/speedometer.jpg
---

## Overview

Experience the ultimate driving interface with Night Speedometer - a modern, feature-rich speedometer that transforms your FiveM vehicle experience. With real-time data display, customizable positioning, and intuitive controls, this speedometer delivers both functionality and style.

### Key Features

- **Real-Time Speed Display** - Accurate speed monitoring in km/h or mph
- **Dynamic RPM Gauge** - Visual RPM bar with customizable scaling
- **Gear Indicator** - Shows current gear (P/R/N/1-6) with parking detection
- **Turn Signals** - Left, right, and hazard indicator controls
- **Engine Status** - Engine health monitoring with visual warnings
- **Fuel System** - Fuel level display with low fuel warnings
- **Compass Navigation** - Rotating compass with directional indicators
- **Vehicle Status Icons** - Door, lights, handbrake, and engine indicators
- **Drag & Drop Positioning** - Customizable UI placement
- **Theme Customization** - Scale, opacity, and position settings
- **Framework Compatibility** - Standalone compatible
- **Modern UI Design** - Glass-morphism design with smooth animations
- **Configurable Controls** - Customizable keybindings and commands
- **Performance Optimized** - Efficient rendering with configurable update intervals

## Important Pre-Installation Notes

:::caution[Critical Installation Order]
Always follow this exact sequence to avoid parsing errors in the F8 console:
1. Download ZIP Package from CFX Portal
2. Unpack in a folder on your local machine
3. Set your File Transfer Protocol (FTP) type to **binary**
4. Drag files from local machine to server resources folder
5. Add to server.cfg (ensure script)
6. Boot up the server
:::

:::danger[Support Policy]
Follow this guide step by step. If you're stuck, ask for support in our Discord and provide the specific step name. Do not skip steps.
:::

:::tip[No Database Required]
Night Speedometer works without any database dependencies, making installation simple and straightforward.
:::

## System Requirements & Compatibility

### Framework Compatibility

- **Standalone:** Works independently without any framework
- **ESX:** Works alongside ESX framework, no integrations.
- **QBCore:** Works alongside QBCore framework, no integrations.

### OneSync Compatibility

- **OneSync Legacy:** Fully tested and compatible
- **OneSync Infinity:** Fully tested and compatible

### Dependencies

- **No External Dependencies** - Works out of the box
- **FiveM Server** - Requires FiveM server environment

:::note
Night Speedometer is designed to work with any FiveM server configuration and provides immediate functionality upon installation.
:::

## Installation Process

### Step 1: Download Night Speedometer

1. **Download** from [CFX Portal Assets](https://portal.cfx.re/assets/granted-assets) after purchasing
2. **Extract the package** to your local machine
3. **Verify files** - Ensure all folders (client, config, html, server) are present

### Step 2: Transfer to Server

1. **Set FTP to binary mode** - Critical for proper file transfer
2. **Upload 'night_speedometer'** folder to your server's resources directory
3. **Verify upload** - Check that all files transferred correctly

### Step 3: Configure Server

1. **Add to server.cfg**:

```ini
ensure night_speedometer
```

2. **Start your server** and verify the resource loads without errors
3. **Check console** for successful startup messages

## Configuration Setup

### Required Tools

:::tip[Visual Studio Code]
We recommend downloading [VS Code](https://code.visualstudio.com/download) for editing Lua files.
:::

### Configuration Files

| File | Purpose |
|------|---------|
| `night_speedometer/config/config.lua` | Main configuration settings |
| `night_speedometer/client/client.lua` | Client-side functionality |
| `night_speedometer/html/style.css` | UI styling and themes |

### Configuration Process

1. **Open VS Code** and navigate to `config/config.lua`
2. **Read thoroughly** - each setting has explanatory comments
3. **Configure settings** - customize speed units, keybindings, UI positioning, and display options
4. **Test frequently** - use F8 console for error checking

### Key Configuration Options

#### Speed Units
```lua
-- Options: 'kmh', 'mph'
Config.SpeedUnit = 'kmh'
```

#### UI Positioning
```lua
Config.Theme = {
    position = 'bottom-center', -- 'bottom-right' | 'bottom-left' | 'bottom-center'
    offsetX = 40,              -- pixels from chosen edge
    offsetY = 40,              -- pixels from chosen edge
    scale = 1.0,               -- UI scale multiplier
    opacity = 1.0,            -- 0.0 - 1.0
}
```

#### Keybindings
```lua
Config.IndicatorLeft = {command = "indicator_left", keyMapping = 'LEFT', input = 'keyboard'}
Config.IndicatorRight = {command = "indicator_right", keyMapping = 'RIGHT', input = 'keyboard'}
Config.IndicatorHazard = {command = "indicator_hazard", keyMapping = 'UP', input = 'keyboard'}
Config.EngineToggle = {command = "engine_toggle", keyMapping = 'DOWN', input = 'keyboard'}
```

:::tip[Configuration Options]
Customize speed units, UI positioning, keybindings, RPM scaling, fuel settings, and compass display.
:::

## How It Works

### Speedometer System

- **Real-Time Speed** - Displays current vehicle speed in selected units
- **Dynamic Updates** - Configurable update intervals for performance optimization
- **Unit Conversion** - Automatic conversion between km/h and mph
- **Speed Thresholds** - Parking detection based on speed limits

### RPM and Engine Monitoring

- **RPM Display** - Visual RPM bar with customizable maximum RPM
- **Engine Health** - Monitors engine condition with warning states
- **Gear Detection** - Shows current gear with parking/reverse detection
- **Performance Scaling** - Configurable RPM scaling for different vehicle types

### Vehicle Status Indicators

- **Turn Signals** - Left, right, and hazard indicator controls
- **Engine Status** - Engine on/off with health warnings
- **Door Status** - Vehicle door open/closed indicators
- **Light Status** - Headlight and high beam indicators
- **Handbrake** - Handbrake engaged/disengaged status

### Fuel System

- **Fuel Level** - Visual fuel gauge with percentage display
- **Low Fuel Warnings** - Configurable warning thresholds
- **Electric Vehicles** - Special handling for electric vehicle fuel display
- **Fuel Icons** - Visual fuel pump icon with status indicators

### Navigation Features

- **Compass Display** - Rotating compass with directional indicators
- **Heading Detection** - Real-time heading calculation
- **Smooth Animation** - Fluid compass rotation animations
- **Directional Text** - N, NE, E, SE, S, SW, W, NW indicators

### UI Customization

- **Drag & Drop** - Reposition speedometer with drag command
- **Theme Settings** - Scale, opacity, and position customization
- **Visual Themes** - Glass-morphism design with customizable colors
- **Responsive Design** - Adapts to different screen resolutions

## Customization Options

### UI Positioning

- **Position Options** - bottom-center, bottom-right, bottom-left
- **Offset Settings** - Customizable X and Y pixel offsets
- **Scale Multiplier** - Adjust UI size (0.5 - 2.0 recommended)
- **Opacity Control** - Transparency settings (0.0 - 1.0)

### Display Settings

- **Speed Units** - Switch between km/h and mph
- **Compass Display** - Enable/disable compass feature
- **Fuel Display** - Show/hide fuel gauge
- **First Person Hide** - Hide speedometer in first-person view

### Performance Tuning

- **Update Intervals** - Adjust refresh rate (default: 100ms)
- **RPM Scaling** - Configure maximum RPM for display
- **Parking Thresholds** - Set speed limits for parking detection

## Commands & Keybindings

### Default Commands

| Command | Default Key | Description |
|---------|-------------|-------------|
| `/indicator_left` | LEFT Arrow | Toggle left turn signal |
| `/indicator_right` | RIGHT Arrow | Toggle right turn signal |
| `/indicator_hazard` | UP Arrow | Toggle hazard lights |
| `/engine_toggle` | DOWN Arrow | Toggle engine on/off |
| `/dsm` | None | Enter drag mode for repositioning |

### Customizing Keybindings

Edit `config/config.lua` to change keybindings:

```lua
Config.IndicatorLeft = {
    command = "indicator_left", 
    chatSuggestion = 'Toggle the indicator left.', 
    keyMapping = 'LEFT', 
    input = 'keyboard'
}
```

:::tip[Key Reference]
Use [FiveM Key Mapping Documentation](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) for available keys.
:::

## Troubleshooting

### Common Issues

:::caution[Speedometer Not Showing]
- Ensure the resource is properly added to server.cfg
- Check that the resource name is `night_speedometer`
- Verify the resource started without errors in console
- Make sure you're in a vehicle
:::

:::caution[UI Positioning Issues]
- Use `/dsm` command to enter drag mode
- Click and drag the speedometer to desired position
- Click "Save Position" button to save changes
- Check config.lua for position settings
:::

:::caution[Performance Issues]
- Increase `Config.UpdateIntervalMs` value (default: 100ms)
- Reduce `Config.Theme.scale` if UI is too large
- Check for conflicting resources
:::

### Debugging Tips

- **Check F8 Console** - Look for any error messages
- **Verify Configuration** - Ensure all config settings are correct
- **Test in Vehicle** - Speedometer only shows when in a vehicle
- **Check Keybindings** - Verify key mappings are working

## Best Practices

### Performance Optimization

- **Update Intervals** - Use appropriate update intervals (100ms recommended)
- **UI Scaling** - Keep scale between 0.5 - 2.0 for optimal performance
- **Resource Priority** - Ensure speedometer loads after vehicle resources
- **Memory Management** - Monitor resource memory usage

### User Experience

- **Positioning** - Place speedometer where it doesn't obstruct gameplay
- **Opacity Settings** - Use appropriate opacity for visibility
- **Keybindings** - Choose intuitive key mappings for players
- **Documentation** - Provide server-specific usage instructions

### Customization Guidelines

- **Theme Consistency** - Match speedometer theme with server style
- **Performance Balance** - Balance visual features with performance
- **User Preferences** - Allow players to customize their experience
- **Regular Updates** - Keep resource updated for latest features

## Support

Read through the instructions again if you have not managed to install the resource. Can't get it to work still? Create a ticket through our dedicated support system in Discord:

<a class="kit-btn" href="https://discord.nights-software.com">Nights Software Discord</a>
