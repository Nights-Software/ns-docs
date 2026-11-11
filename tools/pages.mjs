// The one list of pages. Source: the cover table in the redesign spec.
export const groups = [
  { id: 'start', label: 'Start here' },
  { id: 'ers', label: 'Emergency Response Simulator' },
  { id: 'scripts', label: 'Scripts' },
  { id: 'assets', label: 'Assets' },
];

export const pages = [
  { file: 'installation-guide', label: 'Installation Guide', group: 'start', cover: null },
  { file: 'acePerms', label: 'ACE Permissions', group: 'start', cover: null },
  { file: 'advancedPlayerTracking', label: 'Advanced Tracking v2', group: 'scripts', cover: 'ADVANCED TRACKING' },
  { file: 'aircraftRadar', label: 'Aircraft Radar', group: 'scripts', cover: 'AIRCRAFT RADAR' },
  { file: 'airRaidSirens', label: 'Air Raid Sirens', group: 'scripts', cover: 'AIR RAID SIRENS' },
  { file: 'airstrikes', label: 'Airstrikes FiveM', group: 'scripts', cover: 'AIRSTRIKES' },
  { file: 'ammoBox', label: 'Ammo Boxes', group: 'scripts', cover: 'AMMO BOXES' },
  { file: 'boatRescue', label: 'Boat Rescue (Tow)', group: 'scripts', cover: 'BOAT RESCUE' },
  { file: 'cbrnDisasters', label: 'CBRN Disasters', group: 'scripts', cover: 'CBRN Disasters' },
  { file: 'comaAndDownSystem', label: 'Coma & Down System v3', group: 'scripts', cover: 'COMA & DOWN SYSTEM' },
  { file: 'discordAllowlist', label: 'Discord Allowlist', group: 'scripts', cover: 'DISCORD ALLOWLIST' },
  { file: 'discordAPI', label: 'Discord API', group: 'scripts', cover: 'DISCORD API',
    children: [
      { file: 'installation', label: 'Installation & Setup' },
      { file: 'exports', label: 'Exports & Examples' },
      { file: 'troubleshooting', label: 'Troubleshooting' },
    ],
  },
  { file: 'discordLockers', label: 'Discord Lockers', group: 'scripts', cover: 'DISCORD LOCKERS' },
  { file: 'discordPlayerlist', label: 'Discord Playerlist', group: 'scripts', cover: 'DISCORD PLAYERLIST' },
  { file: 'discordPlayerNames', label: 'Playernames v2', group: 'scripts', cover: 'DISCORD PLAYERNAMES' },
  { file: 'discordSpawn', label: 'Discord Spawn Selector v2', group: 'scripts', cover: 'DISCORD SPAWN SELECTOR' },
  { file: 'discordWelcome', label: 'Discord Welcome Lightbox', group: 'scripts', cover: 'Discord Welcome Lightbox' },
  { file: 'easy3dTextLabels', label: 'Easy 3D Text Labels', group: 'scripts', cover: '3D TEXT LABELS' },
  { file: 'ers', label: 'ERS v1', group: 'ers', cover: 'Emergency Response Simulator', showCover: true,
    children: [
      { file: 'installation', label: 'Installation' },
      { file: 'configuration', label: 'Configuration & Callouts' },
      { file: 'functions-and-events', label: 'Functions & Events' },
      { file: 'exports', label: 'Exports' },
      { file: 'mdt-integration', label: 'MDT Integration' },
      { file: 'troubleshooting', label: 'Troubleshooting' },
    ],
  },
  { file: 'calloutCreatorPack', label: 'Callout Creator Pack', group: 'ers', cover: 'CALLOUT CREATOR PACK' },
  { file: 'calloutExpansionPack1', label: 'Callout Expansion Pack 1', group: 'ers', cover: 'CALLOUT EXPANSION PACK 1' },
  { file: 'roxwoodCalloutPack', label: 'Roxwood Callout Pack', group: 'ers', cover: 'ROXWOOD CALLOUT PACK' },
  { file: 'halloweenCalloutPack', label: 'Halloween Callout Pack', group: 'ers', cover: 'HALLOWEEN CALLOUT PACK' },
  { file: 'ersK9', label: 'K9 Dog Handler', group: 'ers', cover: 'ERS - K9 Dog Handler' },
  { file: 'ersWeighStations', label: 'Dynamic Weigh Stations', group: 'ers', cover: 'ERS - Dynamic Weighstations' },
  { file: 'ersWorldEvents', label: 'World Events', group: 'ers', cover: 'ERS - World Events' },
  { file: 'garageSystem', label: 'Garage System', group: 'scripts', cover: 'GARAGE SYSTEM' },
  { file: 'gates', label: 'Gates & Bollards', group: 'scripts', cover: 'GATES & BOLLARDS' },
  { file: 'henchmen', label: 'Henchmen', group: 'scripts', cover: 'HENCHMEN (K9-COMPANIONS)' },
  { file: 'landingZoneAlarm', label: 'Landing Zone Alarm', group: 'scripts', cover: 'LANDING ZONE ALARM' },
  { file: 'loadingScreen', label: 'Ambilight Loadscreen', group: 'scripts', cover: 'AMBILIGHT LOADINGSCREEN' },
  { file: 'metabuild', label: 'MetaBuild', group: 'scripts', cover: 'METABUILD' },
  { file: 'naturalDisasters', label: 'Natural Disasters', group: 'scripts', cover: 'NATURAL DISASTERS (base)' },
  { file: 'nightShifts', label: 'Night Shifts MDT', group: 'scripts', cover: 'MOBILE DATA TERMINAL',
    children: [
      { file: 'installation', label: 'Installation' },
      { file: 'how-it-works', label: 'How It Works' },
      { file: 'integration', label: 'Integration & Compatibility' },
      { file: 'exports', label: 'Exports' },
      { file: 'exports-reads', label: 'Exports: Reads' },
      { file: 'exports-system-writes', label: 'Exports: System Writes' },
      { file: 'exports-officer-writes', label: 'Exports: Officer Writes' },
      { file: 'exports-client', label: 'Exports: Client' },
      { file: 'troubleshooting', label: 'Troubleshooting & Best Practices' },
    ],
  },
  { file: 'ontoTheSeas', label: 'Onto the seas!', group: 'scripts', cover: 'ONTO THE SEAS' },
  { file: 'partySystem', label: 'Party System', group: 'scripts', cover: 'PARTY SYSTEM' },
  { file: 'pedAndPlayerCPR', label: 'Player & Ped CPR', group: 'scripts', cover: 'PLAYER & PED CPR' },
  { file: 'policeTape', label: 'Police Tape', group: 'scripts', cover: 'POLICE TAPE' },
  { file: 'propsAndSpeedzones', label: 'Props & Speedzones (Traffic Management)', group: 'scripts', cover: 'PROPS & SPEEDZONES' },
  { file: 'raids', label: 'Raids & Heists', group: 'scripts', cover: 'RAIDS & HEISTS' },
  { file: 'smokeGenerator', label: 'Smoke Generator', group: 'scripts', cover: 'HANDHELD SMOKE GENERATOR' },
  { file: 'smokeScreen', label: 'Smokescreen', group: 'scripts', cover: 'SMOKESCREEN' },
  { file: 'speedometer', label: 'Speedometer', group: 'scripts', cover: 'SPEEDOMETER' },
  { file: 'stormChasing', label: 'Storm Chasing', group: 'scripts', cover: 'STORM CHASING' },
  { file: 'subtitles', label: 'Subtitles', group: 'scripts', cover: 'SUBTITLES' },
  { file: 'vehicleLift', label: 'Vehicle Lift', group: 'scripts', cover: 'VEHICLE LIFTS' },
  { file: 'vehicleLocks', label: 'Vehicle Locks', group: 'scripts', cover: 'VEHICLE LOCKS' },
  { file: 'vehicleRentals', label: 'Vehicle Rentals', group: 'scripts', cover: 'VEHICLE RENTALS' },
  { file: 'vehicleSpawns', label: 'Vehicle Spawns', group: 'scripts', cover: 'VEHICLE SPAWNS' },
  { file: 'vPerms', label: 'Discord Vehicle Permissions', group: 'scripts', cover: 'DISCORD VEHICLE PERMISSIONS' },
  { file: 'weaponCrates', label: 'Weapon Crates', group: 'scripts', cover: 'WEAPON CRATES' },
  { file: 'wPerms', label: 'Discord Weapon Permissions', group: 'scripts', cover: 'DISCORD WEAPON PERMISSIONS' },
  { file: 'undeadPack2', label: 'NS Undead Pack 2 - Bundle (5 peds)', group: 'assets', cover: 'NS UNDEAD PACK 2' },
  { file: 'usPropPack1', label: 'US Prop Pack 1', group: 'assets', cover: 'US PROP PACK' },
  { file: 'dutchPropPack1', label: 'Dutch Prop Pack 1', group: 'assets', cover: 'DUTCH PROP PACK' },
];

export const addressOf = file => `/resources/${file}/`;

// A product with sub-pages lists them in `children` ({ file, label }, in sidebar order). A child's file is its
// name inside the product's folder: src/content/docs/resources/<product file>/<child file>.md.
export const childAddressOf = (page, child) => `/resources/${page.file}/${child.file}/`;

// Every address a registry row owns: the page itself, then its sub-pages.
export const addressesOf = page => [addressOf(page.file), ...(page.children ?? []).map(child => childAddressOf(page, child))];

// The sidebar and the home catalogue list the Scripts group in this order.
export const byLabel = (a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });
