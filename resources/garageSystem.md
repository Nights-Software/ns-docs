---
layout: default
title: "Garage System"
nav_order: 24
has_children: false
has_toc: true
last_modified_date: "2022-07-21 00:40:00"
---

<img class="cover-img" src="/assets/img/garageSystem.gif" alt="Garage System! Resource" draggable="false">

# Garage System!
{: .no_toc}

A guide to install Garage System! for FiveM

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

## Purchasing the resource

Find this product at:

Base: [https://store.ea-rp.com/package/5208515](https://store.ea-rp.com/package/5208515)

## Downloading the resource

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants) after purchasing it. It can take a few minutes for the resource to appear in keymaster after purchase.

## Installing the resource

1. Drag the resource into your resources folder.

1. Ensure or start this resource in your server.cfg. Example:
```lua
ensure night_garage_system
```

1. Configure /config/config.lua.

*Use the example below to understand the configuration of this resource!*

* Set the LocationVehicleShowcase coordinates and heading first, this will show the marker and/or label for the garages. This is also the point where the camera "looks" at.
* Set the LocationVehicleCamPos coordinates somewhere close to the LocationVehicleShowcase coordinates. LocationVehicleCamPos is the coordinate where the vehicle will be showcased only for the player in vehicle preview.
* Set the LocationVehicleSpawn coordinates where the vehicle should eventually spawn.

## Using [Discord API?](https://docs.ea-rp.com/resources/discordAPI/)

* Set up the Discord API by following the included documentation.pdf file in the resource.
* Match GarageRolePermissions & SectionRolePermissions role names (this config.lua) to the ones configured in config.lua (night_discordapi).
* List the vehicles according to the given format. Only the people with the role can SPAWN the vehicles. They can see it regardless of the permission. The reason for having 2 permission variables is because some vehicles can be listed in the same section, but some sections and it's vehicles are to be used by different roles. (Example: Police Officer & Sergeant)

## Want to add another garage or section?

* Compare Police Garage (GarageSections = ) to Ambulance garage (GarageSections). You can see police has 2 sections. Follow that format to add a section to a garage. 
* If you desire to add a whole garage somewhere. Use the same format, but in this case copy the whole garage code. You can look at how I added 3 garages as examples.

## Want to add vehicles?

* Simply add "yourvehicle", in the given format under SectionVehicles of the garage you want to add it to. Don't forget the comma!

```lua
    Garages = {
        --============= POLICE =============--
        [1] = {
            LocationGarageName = "Police Garage",
            LocationVehicleSpawn = {location = vector3(427.7230, -1026.0115, 28.9796), h = 2.7687},     -- This is the vector3 coordinate where the vehicle spawns after selecting it.
            LocationVehicleShowcase = {location = vector3(442.1272, -1021.5523, 28.5648), h = 355.8047}, -- This is the vector3 coordinate where the vehicle will be showcased.
            LocationVehicleCamPos = {location = vector3(442.2169, -1011.5533, 31.9647)},                -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
            BlipData = {    -- https://docs.fivem.net/docs/game-references/blips/
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 38,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 0, markerGreen = 0, markerBlue = 200, markerAlpha = 225, 
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Essex_Police_Force",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~b~Local Policing Team~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "Police Cruiser", modelName = "police"}, 
                        [2] = {name = "Police Cruiser 2", modelName = "police2"},
                        [3] = {name = "Police Motorbike", modelName = "policeb"},
                    },
                },
                [2] = {
                    SectionName = "~b~Road Traffic Unit~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "Police Cruiser 3", modelName = "police3"},
                        [2] = {name = "FBI Cruiser", modelName = "fbi"},
                    },
                },
            },
        },
        --============= AMBULANCE =============--
        [2] = {
            LocationGarageName = "Ambulance Garage",
            LocationVehicleSpawn = {location = vector3(342.0863, -555.3351, 28.7441), h = 349.6882},
            LocationVehicleShowcase = {location = vector3(323.0045, -546.9155, 28.7440), h = 267.3977},
            LocationVehicleCamPos = {location = vector3(332.4535, -547.0506, 31.8941)},
            BlipData = {
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 5,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 255, markerGreen = 234, markerBlue = 0, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Ambulance_Service",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~y~Incident Response Unit~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Ambulance_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Ambulance", modelName = "ambulance"},
                    },
                },
            },
        },
        --============= FIRE =============--
        [3] = {
            LocationGarageName = "Fire Garage",
            LocationVehicleSpawn = {location = vector3(1193.7970, -1455.9656, 34.9582), h = 3.7696},
            LocationVehicleShowcase = {location = vector3(1201.1860, -1461.1323, 34.8237), h = 0.6208},
            LocationVehicleCamPos = {location = vector3(1201.0289, -1450.1870, 39.8987)},
            BlipData = {
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 1,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 178, markerGreen = 34, markerBlue = 34, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Fire_Service",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~r~Incident Support Unit~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Fire engine", modelName = "firetruk"},
                    },
                },
            },
        },
    },
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}