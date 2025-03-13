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

Base: [https://store.nights-software.com/package/5208515](https://store.nights-software.com/package/5208515)

## Downloading the resource

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets) after purchasing it. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

## Installing the resource

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

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

## Using [Discord API?](https://docs.nights-software.com/resources/discordAPI/)

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
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "Vinewood", location = vector3(542.6823, -7.0120, 70.6291), h = 120.1685}, -- This is the vector3 coordinate where the vehicle will be spawned.
                [2] = {placeName = "La Mesa", location = vector3(845.1868, -1352.6448, 26.0908), h = 251.7336},
                [3] = {placeName = "Davis", location = vector3(379.2017, -1629.4563, 29.3597), h = 321.3695},
                [4] = {placeName = "Sandy Shores", location = vector3(1868.0472, 3696.8479, 33.5569), h = 211.1474},
                [5] = {placeName = "Paleto Bay", location = vector3(-474.1487, 6029.7202, 31.3405), h = 225.1284},
                [6] = {placeName = "Vespucci", location = vector3(-1046.8610, -860.3850, 4.9104), h = 58.0969},
                [7] = {placeName = "Mission Row", location = vector3(427.7230, -1026.0115, 28.9796), h = 2.7687}, 
                [8] = {placeName = "Strawberry", location = vector3(-184.7943, -1277.5035, 31.2961), h = 87.0036},
                [9] = {placeName = "Mirror Park Blvd.", location = vector3(902.6295, -185.1338, 73.8612), h = 326.7079},
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Vinewood", location = vector3(525.8678, -15.2088, 70.6291), h = 120.8356}, -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "La Mesa", location = vector3(856.7996, -1342.6847, 26.0338), h = 90.5307}, 
                [3] = {placeName = "Davis", location = vector3(386.4638, -1620.2614, 29.2920), h = 141.0413},
                [4] = {placeName = "Sandy Shores", location = vector3(1878.1072, 3698.6636, 33.5419), h = 119.7542},
                [5] = {placeName = "Paleto Bay", location = vector3(-461.1360, 6041.3950, 31.3405), h = 134.9586},
                [6] = {placeName = "Vespucci", location = vector3(-1067.9523, -857.1057, 4.8675), h = 218.4547},
                [7] = {placeName = "Mission Row", location = vector3(442.1272, -1021.5523, 28.5648), h = 355.8047},
                [8] = {placeName = "Strawberry", location = vector3(-186.5710, -1270.8806, 31.2961), h = 176.3417},
                [9] = {placeName = "Mirror Park Blvd.", location = vector3(914.1877, -165.7542, 74.4072), h = 145.4921},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Vinewood", location = vector3(536.7128, -9.2368, 73.4540)}, -- This is the vector3 coordinate where the camera will point from towards the LocationVehicleShowcase vector3 coordinate.
                [2] = {placeName = "La Mesa", location = vector3(849.8001, -1342.8900, 27.0376)},
                [3] = {placeName = "Davis", location = vector3(392.0214, -1613.7670, 32.4920)},
                [4] = {placeName = "Sandy Shores", location = vector3(1868.6364, 3705.3872, 35.9419)},
                [5] = {placeName = "Paleto Bay", location = vector3(-467.0694, 6035.1470, 35.6405)},
                [6] = {placeName = "Vespucci", location = vector3(-1062.5822, -864.5756, 8.3175)},
                [7] = {placeName = "Mission Row", location = vector3(442.5437, -1013.6883, 30.4043)},
                [8] = {placeName = "Strawberry", location = vector3(-188.1397, -1282.8419, 36.0211)},
                [9] = {placeName = "Mirror Park Blvd.", location = vector3(923.8828, -169.0460, 78.4598)},
            },
            BlipData = {    -- https://docs.fivem.net/docs/game-references/blips/
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 38,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.2,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 0, markerGreen = 191, markerBlue = 255, markerAlpha = 225, 
            },
            GarageRolePermissions = {
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Essex_Police_Force",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~b~Response fleet~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "Vauxhall Astra Estate", modelName = "rastram", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "ford Focus 13", modelName = "rfocusm", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Ford Focus", modelName = "rfocusum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Ford Transit", modelName = "rfordtransit", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [5] = {name = "Vauxhall Insignia", modelName = "rinsignia", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Ford Kuga", modelName = "rkuga", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [7] = {name = "Ford Ranger", modelName = "rrangerm", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [8] = {name = "Peugeot 308", modelName = "r308m", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [9] = {name = "Peugeot 208", modelName = "r208", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [10] = {name = "Nissan Leaf", modelName = "rnissan", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [11] = {name = "Peugeot 3081", modelName = "r3081", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [12] = {name = "Peugeot 308 GTE", modelName = "r308gte", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [13] = {name = "Kia Ceed", modelName = "rkiaceed", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [14] = {name = "Ford Focus 20", modelName = "rfordfocus1", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                    },
                },
                [2] = {
                    SectionName = "~g~Traffic fleet~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "RPU",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW 330D", modelName = "t330df31", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "BMW 330D", modelName = "t330dg21", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "BMW 530D", modelName = "t530df11", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Audi A4", modelName = "taudia4", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "BMW X5 F15", modelName = "tx5f15", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "BMW GO5", modelName = "tx5go5", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [7] = {name = "Skoda VRS", modelName = "tvrsum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [8] = {name = "Volvo V60r", modelName = "tv60um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [9] = {name = "Audi S5", modelName = "taudis5um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [10] = {name = "BMW G20", modelName = "tg20um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [11] = {name = "BMW 530", modelName = "t530um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [12] = {name = "BMW GO5", modelName = "tx5go5um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [13] = {name = "BMW M135i", modelName = "tbmw135i", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [3] = {
                    SectionName = "~o~Dog Support Unit fleet~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "DSU",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW 330D F11", modelName = "d330f11", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Skoda Karoq", modelName = "dkaroqum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Skoda Superb", modelName = "dsuperb", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Skoda Octavia VRS", modelName = "dvrsm", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [4] = {
                    SectionName = "~r~Armed Response fleet",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "AFO",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW GO5", modelName = "ago5", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Volkswagen Touareg", modelName = "atouareg", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "BMW F15", modelName = "ax5f15", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "BMW F15", modelName = "ax5f15um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "Volvo XC90", modelName = "axc90", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Volvo XC90", modelName = "axc90um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [7] = {name = "Ford Ranger", modelName = "arangerum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [5] = {
                    SectionName = "~r~BTP fleet",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "Vauxhall Astra", modelName = "btpastra", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Peugeot 308", modelName = "btp308", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Peugeot 3008", modelName = "btp3008", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Mercedes Vito", modelName = "btpvito", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "Vauxhall Movano", modelName = "btpmovano", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Ford Ranger", modelName = "btpfordranger", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [7] = {name = "Volkswagen Caddy", modelName = "btpcaddy", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [8] = {name = "Ford Transit", modelName = "btpfordtransit", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [9] = {name = "Vauxhall Vivaro", modelName = "btpvivaro", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [10] = {name = "5008 DSU", modelName = "btp5008", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [6] = {
                    SectionName = "~b~[PLATINUM] ~c~Demonstrator Vehicles~w~",
                    SectionRolePermissions = {  
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Platinum_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Ford Mustang Mach-E", modelName = "demoemache", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Kia EV6", modelName = "demoev6", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0}, 
                        [3] = {name = "Tesla Demonstrator", modelName = "demoteslaum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Mercedes 350e", modelName = "demoe350eum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "BMW X7", modelName = "demox7um", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Tacoma TRO", modelName = "demotac", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= AMBULANCE =============--
        [2] = {
            LocationGarageName = "Ambulance Garage",
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "Pillbox Hill", location = vector3(342.0863, -555.3351, 28.7441), h = 349.6882},      -- This is the vector3 coordinate where the vehicle will be spawned.
                [2] = {placeName = "Sandy Shores", location = vector3(1815.4824, 3651.8879, 34.2494), h = 210.2348},
                [3] = {placeName = "Ambulance Outpost", location = vector3(-1268.4178, -1367.1729, 4.2894), h = 291.7461},
                [4] = {placeName = "Paleto Bay", location = vector3(-275.1101, 6327.1802, 32.4262), h = 264.1999},
                [5] = {placeName = "Rockford Hills", location = vector3(-1443.6362, -272.5193, 46.5348), h = 224.9559},
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Pillbox Hill", location = vector3(323.0045, -546.9155, 28.7440), h = 267.3977},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "Sandy Shores", location = vector3(1812.6150, 3685.2234, 34.2243), h = 299.0269},
                [3] = {placeName = "Ambulance Outpost", location = vector3(-1271.0619, -1358.7224, 4.2992), h = 110.0995},
                [4] = {placeName = "Paleto Bay", location = vector3(-260.1001, 6341.8511, 32.4262), h = 132.3904},
                [5] = {placeName = "Rockford Hills", location = vector3(-1433.6296, -278.3912, 46.5376), h = 36.9392},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Pillbox Hill", location = vector3(332.4535, -547.0506, 31.8941)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "Sandy Shores", location = vector3(1803.8660, 3696.2415, 38.5844)},
                [3] = {placeName = "Ambulance Outpost", location = vector3(-1264.7205, -1356.4154, 7.7742)},
                [4] = {placeName = "Paleto Bay", location = vector3(-250.4684, 6351.7349, 36.4512)},
                [5] = {placeName = "Rockford Hills", location = vector3(-1423.6764, -289.6815, 50.1348)},
            },
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
            GarageRolePermissions = {
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Ambulance_Service",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~y~Ambulance~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Ambulance_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Fiat Ducato", modelName = "ambuducato", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Mercedes Sprinter", modelName = "Ambumercbox", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Ford Transit Ambulance", modelName = "fordambu", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Mam Box Ambulance", modelName = "ukamb", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "Mam Box Ambulance", modelName = "ukamb2", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [2] = {
                    SectionName = "~y~Rapid Response~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "RRV",
                    },
                    SectionVehicles = {
                        [1] = {name = "Volkswagen Tiguan", modelName = "rrtiguan", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Ford Mustang Mach-E", modelName = "rrmach", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "BWM i3", modelName = "rri3", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Skoda Octavia", modelName = "rroctaviaum", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [3] = {
                    SectionName = "~y~HART~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Ambulance_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Mercedes Sprinter", modelName = "hartsprinter", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Iveco Daily", modelName = "hartiveco", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Mercedes Vito", modelName = "hartvito", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Volkswagen Transporter T6", modelName = "hartt6", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= FIRE =============--
        [3] = {
            LocationGarageName = "Fire Garage",
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "Chelmsford Headquarters", location = vector3(1193.7970, -1455.9656, 34.9582), h = 3.7696},      -- This is the vector3 coordinate where the vehicle will be spawned.
                [2] = {placeName = "Paleto Bay Headquarters", location = vector3(-372.4893, 6130.3457, 31.4781), h = 40.1826}, 
                [3] = {placeName = "Sandy Shores Headquarters", location = vector3(1696.6550, 3603.2100, 35.4038), h = 211.1039},
                [4] = {placeName = "Heathrow Airport Headquarters", location = vector3(-1063.9718, -2360.2219, 13.8556), h = 136.8438},
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Chelmsford Headquarters", location = vector3(1201.1860, -1461.1323, 34.8237), h = 0.6208},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "Paleto Bay Headquarters", location = vector3(-377.8229, 6131.4707, 31.4066), h = 38.6742},
                [3] = {placeName = "Sandy Shores Headquarters", location = vector3(1711.6394, 3595.4524, 35.4101), h = 300.7711},
                [4] = {placeName = "Heathrow Airport Headquarters", location = vector3(-1071.1481, -2340.9509, 13.8556), h = 146.9251},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Chelmsford Headquarters", location = vector3(1201.0289, -1450.1870, 39.8987)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "Paleto Bay Headquarters", location = vector3(-386.3939, 6141.5073, 35.2066)},
                [3] = {placeName = "Sandy Shores Headquarters", location = vector3(1724.9990, 3602.1538, 38.8601)},
                [4] = {placeName = "Heathrow Airport Headquarters", location = vector3(-1078.4937, -2353.8723, 15.5056)},
            },
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
                    SectionName = "~r~Pumper Engines~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Iveco Eurocargo", modelName = "eniveco", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Mercedes Atego 2017", modelName = "enatago17", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Mercedes Atego 2021", modelName = "enatago21", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Volvo Engine", modelName = "envolvo", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "Volvo Engine 2", modelName = "envolvocafs", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Volvo Engine 3", modelName = "envolvouhpl", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [2] = {
                    SectionName = "~r~Incident Support~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Volvo Support Unit", modelName = "suvolvo", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Scania Water Truck", modelName = "suwater", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "MAN Command Unit", modelName = "sucommand", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [3] = {
                    SectionName = "~r~Aerial Ladder Platform Engines~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "ALP_Trained",
                    },
                    SectionVehicles = {
                        [1] = {name = "64m Ladder Truck", modelName = "alp64", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "32m Ladder Truck", modelName = "firetruk", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
                [4] = {
                    SectionName = "~r~Heathrow Fire & Rescue~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "heathrowfire",
                    },
                    SectionVehicles = {
                        [1] = {name = "Scania Domestic Appliance", modelName = "hascania", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Panther (Airport)", modelName = "hapanther", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Sprinter", modelName = "hasprinter", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "Land Rover Discovery", modelName = "hadiscovery", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= AA =============--
        [6] = {
            LocationGarageName = "AA Garage",
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "AA Headquarters", location = vector3(860.2174, -2101.1477, 30.5433), h = 266.6393},      -- This is the vector3 coordinate where the vehicle will be spawned.
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "AA Headquarters", location = vector3(861.5154, -2122.5701, 30.5419), h = 354.6407},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "AA Headquarters", location = vector3(861.0054, -2132.0066, 36.2480)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
            },
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
                markerRed = 255, markerGreen = 191, markerBlue = 0, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "AA_Recovery",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~y~AA Vehicles~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "AA_Recovery",
                    },
                    SectionVehicles = {
                        [1] = {name = "MAN Flatbed Tow", modelName = "aaman", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Ford Transit", modelName = "aavan", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Vehicle Trailer", modelName = "tr2", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= National Highways =============--
        [7] = { 
            LocationGarageName = "National Highways Garage",
            LocationVehicleSpawn = {
                [1] = {placeName = "Freeway", location = vector3(1509.8635, 771.1964, 77.4434), h = 25.9161},
            },
            LocationVehicleShowcase = {
                [1] = {placeName = "Freeway", location = vector3(1505.4309, 772.0982, 77.4438), h = 144.0549}, 
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Freeway", location = vector3(1495.4534, 769.2499, 79.7688)},
            },
            BlipData = {
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 44,
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
                "National_Highways",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~o~National Highways Vehicles~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "National_Highways",
                    },
                    SectionVehicles = {
                        [1] = {name = "Land Rover Discovery", modelName = "hedisco5", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Volvo XC60", modelName = "hevolvoxc60", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= Civilians =============--
        [8] = {
            LocationGarageName = "Civilian Garage",
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "Public Parking", location = vector3(424.6495, -1157.7643, 29.2920), h = 92.9282}, -- This is the vector3 coordinate where the vehicle will be spawned.
                [2] = {placeName = "Public Parking", location = vector3(408.5762, -641.3550, 28.5002), h = 92.3136},
                [3] = {placeName = "Public Parking", location = vector3(54.6020, -862.9428, 30.5995), h = 340.6026},
                [4] = {placeName = "Public Parking", location = vector3(-466.5225, -806.7872, 30.5387), h = 89.6078},
                [5] = {placeName = "Public Parking", location = vector3(-582.8873, -1126.7148, 22.1782), h = 92.0798},
                [6] = {placeName = "Public Parking", location = vector3(-785.1893, -1295.1323, 5.0004), h = 350.5890},
                [7] = {placeName = "Public Parking", location = vector3(-1048.3153, -1425.1558, 5.4254), h = 255.8305},
                [8] = {placeName = "Public Parking", location = vector3(-970.5392, -2708.0845, 13.8589), h = 6.4259},
                [9] = {placeName = "Public Parking", location = vector3(-1663.9370, -860.4070, 9.0410), h = 320.3892},
                [10] = {placeName = "Public Parking", location = vector3(-2046.7704, -467.3688, 11.6174), h = 321.0780},
                [11] = {placeName = "Public Parking", location = vector3(-3052.2041, 121.7713, 11.5884), h = 268.3560},
                [12] = {placeName = "Public Parking", location = vector3(-3137.8909, 1098.7002, 20.6579), h = 79.9001},
                [13] = {placeName = "Public Parking", location = vector3(-762.8485, 5545.4995, 33.4869), h = 178.5829},
                [14] = {placeName = "Public Parking", location = vector3(-269.8613, 6065.6118, 31.4645), h = 126.8912},
                [15] = {placeName = "Public Parking", location = vector3(195.7882, 6627.7109, 31.5687), h = 181.4460},
                [16] = {placeName = "Public Parking", location = vector3(1713.2266, 3776.2410, 34.4636), h = 213.8363},
                [17] = {placeName = "Public Parking", location = vector3(1688.9358, 4778.1860, 41.9215), h = 89.9026},
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Public Parking", location = vector3(438.4931, -1162.9326, 29.2920), h = 358.6234}, -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "Public Parking", location = vector3(396.2038, -646.9998, 28.5003), h = 272.1454},
                [3] = {placeName = "Public Parking", location = vector3(38.1341, -867.6323, 30.4875), h = 339.3421},
                [4] = {placeName = "Public Parking", location = vector3(-445.3874, -808.8077, 30.5387), h = 90.6477},
                [5] = {placeName = "Public Parking", location = vector3(-576.59, -1148.79, 22.17), h = 354.6407},
                [6] = {placeName = "Public Parking", location = vector3(-801.2224, -1295.4980, 5.0004), h = 352.6502},
                [7] = {placeName = "Public Parking", location = vector3(-1065.4985, -1444.9333, 5.4254), h = 325.0407},
                [8] = {placeName = "Public Parking", location = vector3(-953.5018, -2705.5520, 13.8310), h = 88.3019},
                [9] = {placeName = "Public Parking", location = vector3(-1639.4584, -858.1340, 9.5120), h = 140.6475},
                [10] = {placeName = "Public Parking", location = vector3(-2019.9015, -476.2107, 11.3976), h = 319.5219},
                [11] = {placeName = "Public Parking", location = vector3(-3032.5700, 131.7300, 11.6000), h = 354.6407},
                [12] = {placeName = "Public Parking", location = vector3(-3152.1700, 1090.7200, 20.7000), h = 354.6407},
                [13] = {placeName = "Public Parking", location = vector3(-772.3600, 5575.3300, 33.4800), h = 354.6407},
                [14] = {placeName = "Public Parking", location = vector3(-274.7101, 6051.4087, 31.5370), h = 316.9914},
                [15] = {placeName = "Public Parking", location = vector3(180.2753, 6623.9253, 31.7127), h = 45.1378},
                [16] = {placeName = "Public Parking", location = vector3(1711.3800, 3769.2200, 36.3400), h = 354.6407},
                [17] = {placeName = "Public Parking", location = vector3(1711.6284, 4803.8628, 41.7797), h = 354.6407},

            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Public Parking", location = vector3(438.7095, -1154.0884, 31.2420)}, -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "Public Parking", location = vector3(404.8026, -646.8423, 31.7253)},
                [3] = {placeName = "Public Parking", location = vector3(42.7435, -855.9057, 35.2125)},
                [4] = {placeName = "Public Parking", location = vector3(-456.7872, -808.8515, 34.0637)},
                [5] = {placeName = "Public Parking", location = vector3(-575.4125, -1137.0764, 25.4032)},
                [6] = {placeName = "Public Parking", location = vector3(-798.7363, -1281.2112, 8.6504)},
                [7] = {placeName = "Public Parking", location = vector3(-1058.9653, -1436.3964, 11.8754)},
                [8] = {placeName = "Public Parking", location = vector3(-965.8745, -2705.4485, 18.1310)},
                [9] = {placeName = "Public Parking", location = vector3(-1649.9799, -865.7422, 12.0870)},
                [10] = {placeName = "Public Parking", location = vector3(-2009.7041, -464.2081, 16.1226)},
                [11] = {placeName = "Public Parking", location = vector3(-3042.7502, 126.3965, 16.3330)},
                [12] = {placeName = "Public Parking", location = vector3(-3143.8276, 1087.0410, 23.2625)},
                [13] = {placeName = "Public Parking", location = vector3(-781.8461, 5575.5464, 36.1107)},
                [14] = {placeName = "Public Parking", location = vector3(-281.4581, 6045.1548, 35.5620)},
                [15] = {placeName = "Public Parking", location = vector3(184.4032, 6619.5708, 33.9123)},
                [16] = {placeName = "Public Parking", location = vector3(1721.1608, 3773.5061, 37.2210)},   
                [17] = {placeName = "Public Parking", location = vector3(1701.6079, 4803.2627, 43.9260)},               
            },
            BlipData = {
                BlipSpriteID = 50,
                BlipScale = 0.5,
                BlipColourID = 43,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 255, markerGreen = 191, markerBlue = 0, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Allowlisted",
            },
            GarageSections = {
                [1] = {
                    SectionName = "Civilian vehicles~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "CIV_LVL_1",
                    },
                    SectionVehicles = {
                        [1] = {name = "Vauxhall Corsa VXR", modelName = "corsa", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Vauxhall Astra", modelName = "civ_16mk7", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "Audi S4", modelName = "AudiS4", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [4] = {name = "VW Golf MK7 GTi", modelName = "GolfGTI", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [5] = {name = "Mercedes AMG45", modelName = "AMG45", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [6] = {name = "Peugeot 308", modelName = "30822", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [7] = {name = "Nissan Qashqai", modelName = "qashqai16", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [8] = {name = "Volvo V60", modelName = "Volvov60", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [9] = {name = "Toyota Yaris GR", modelName = "xp210", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [10] = {name = "Ford Focus ST", modelName = "st", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= Helicopters Emergency Services =============--
        [9] = { 
            LocationGarageName = "Emergency Helicopter Depot",
            LocationVehicleSpawn = {
                [1] = {placeName = "NPAS Base", location = vector3(-728.3249, -1417.7350, 5.0657), h = 227.5343},
                [2] = {placeName = "SS Airfield", location = vector3(1770.3564, 3239.3789, 42.1404), h = 285.4055},
                [3] = {placeName = "Paleto Bay Police station", location = vector3(-475.7588, 5988.1494, 31.3367), h = 315.8474},
                [4] = {placeName = "NPAS & HEMS BASE", location = vector3(-713.9850, -1458.8274, 5.0022), h = 51.3710},
            },
            LocationVehicleShowcase = {
                [1] = {placeName = "NPAS Base", location = vector3(-746.9028, -1439.8594, 5.0657), h = 230.8580}, 
                [2] = {placeName = "SS Airfield", location = vector3(1770.3564, 3239.3789, 42.1404), h = 285.4055},
                [3] = {placeName = "Paleto Bay Police station", location = vector3(-475.7588, 5988.1494, 31.3367), h = 315.8474},
                [4] = {placeName = "NPAS & HEMS BASE", location = vector3(-713.9850, -1458.8274, 5.0022), h = 51.3710},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "NPAS Base", location = vector3(-738.9335, -1446.4622, 7.9407)},
                [2] = {placeName = "SS Airfield", location = vector3(1787.1919, 3242.9019, 50.7404)},
                [3] = {placeName = "Paleto Bay Police station", location = vector3(-468.3914, 5995.9585, 36.7117)},
                [4] = {placeName = "NPAS & HEMS BASE", location = vector3(-719.1174, -1444.0027, 10.3772)},
            },
            BlipData = {
                BlipSpriteID = 64,
                BlipScale = 0.5,
                BlipColourID = 49,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 255, markerGreen = 34, markerBlue = 34, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "HEMS",
                "NPAS",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~r~Emergency Helicopters~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "HEMS",
                        "NPAS",
                    },
                    SectionVehicles = {
                        [1] = {name = "NPAS Helicopter", modelName = "polmav", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "HEMS Helimed", modelName = "supervolito", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [3] = {name = "HMG Coastguard", modelName = "as332", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
        --============= Boats Emergency Services =============--
        [10] = { 
            LocationGarageName = "Emergency Boat Docks",
            LocationVehicleSpawn = {
                [1] = {placeName = "Boat Docks (EMS)", location = vector3(-291.2098, -2781.0444, 1.2232), h = 268.7944},
                [2] = {placeName = "Boat Docks (EMS)", location = vector3(-795.9053, -1502.1444, 1.0001), h = 113.0354},
            },
            LocationVehicleShowcase = {
                [1] = {placeName = "Boat Docks (EMS)", location = vector3(-291.2098, -2781.0444, 1.2232), h = 268.7944}, 
                [2] = {placeName = "Boat Docks (EMS)", location = vector3(-795.9053, -1502.1444, 1.0001), h = 113.0354},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Boat Docks (EMS)", location = vector3(-278.6118, -2781.3110, 7.9387)},
                [2] = {placeName = "Boat Docks (EMS)", location = vector3(-812.4378, -1508.3002, 8.5375)},
            },
            BlipData = {
                BlipSpriteID = 404,
                BlipScale = 0.5,
                BlipColourID = 49,
            },
            MarkerData = {
                markerId = 1,   -- https://docs.fivem.net/docs/game-references/markers/
                markerXOffset = 0.0, markerYOffset = 0.0, markerZOffset = -0.1,
                markerScaleX = 5.0, markerScaleY = 5.0, markerScaleZ = 0.5,
                markerRotX = 0, markerRotY = 0, markerRotZ = 0,
                markerRed = 255, markerGreen = 34, markerBlue = 34, markerAlpha = 225,
            },
            GarageRolePermissions = {   -- Used only if Enable_discord_API = true.
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Essex_Police_Force",
                "Ambulance_Service",
                "Fire_Service",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~r~Emergency Boats~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                        "Ambulance_Service",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Police Boat", modelName = "speeder", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                        [2] = {name = "Fire & Rescue Boat", modelName = "marquis", extraIds = {1, 2, 3, 4, 5, 10, 15, 20}, liveryId = 0},
                    },
                },
            },
        },
    },
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
