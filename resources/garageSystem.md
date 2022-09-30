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
        [1] = {
            LocationGarageName = "Police Garage",
            LocationVehicleSpawn = { -- This are the vector3 coordinates where the vehicle spawns after selecting it. Each number in front of the location belongs to the number of LocationVehicleShowcase & LocationVehicleCamPos
                [1] = {placeName = "Mission Row", location = vector3(427.7230, -1026.0115, 28.9796), h = 2.7687},      -- This is the vector3 coordinate where the vehicle will be spawned.
                [2] = {placeName = "La Mesa", location = vector3(845.1868, -1352.6448, 26.0908), h = 251.7336},  
                [3] = {placeName = "Davis", location = vector3(379.2017, -1629.4563, 29.3597), h = 321.3695}, 
                [4] = {placeName = "Sandy Shores", location = vector3(1868.0472, 3696.8479, 33.5569), h = 211.1474},
                [5] = {placeName = "Paleto Bay", location = vector3(-474.1487, 6029.7202, 31.3405), h = 225.1284},
                [6] = {placeName = "Vespucci", location = vector3(-1046.8610, -860.3850, 4.9104), h = 58.0969},
                [7] = {placeName = "Freeway", location = vector3(1556.2328, 814.9997, 77.1301), h = 196.2654},
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Mission Row", location = vector3(442.1272, -1021.5523, 28.5648), h = 355.8047},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "La Mesa", location = vector3(856.7996, -1342.6847, 26.0338), h = 90.5307}, 
                [3] = {placeName = "Davis", location = vector3(386.4638, -1620.2614, 29.2920), h = 141.0413},
                [4] = {placeName = "Sandy Shores", location = vector3(1878.1072, 3698.6636, 33.5419), h = 119.7542},
                [5] = {placeName = "Paleto Bay", location = vector3(-469.5089, 6020.1040, 31.3405), h = 314.3598},
                [6] = {placeName = "Vespucci", location = vector3(-1067.9523, -857.1057, 4.8675), h = 218.4547},
                [7] = {placeName = "Freeway", location = vector3(1538.0411, 798.5347, 77.1337), h = 55.3824},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Mission Row", location = vector3(442.2169, -1011.5533, 31.9647)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "La Mesa", location = vector3(849.8001, -1342.8900, 27.0376)},
                [3] = {placeName = "Davis", location = vector3(392.0214, -1613.7670, 32.4920)},
                [4] = {placeName = "Sandy Shores", location = vector3(1868.6364, 3705.3872, 35.9419)},
                [5] = {placeName = "Paleto Bay", location = vector3(-475.2427, 6014.3823, 34.5656)},
                [6] = {placeName = "Vespucci", location = vector3(-1062.5822, -864.5756, 8.3175)},
                [7] = {placeName = "Freeway", location = vector3(1526.4880, 806.0814, 81.1587)},
            },
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
            GarageRolePermissions = {
                "Manager",
                "Senior_Admin",
                "Admin_Team",
                "Essex_Police_Force",
            },
            GarageSections = {
                [1] = {
                    SectionName = "~b~Local Policing Team~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "Ford Focus", modelName = "fordfocusm"}, 
                        [2] = {name = "Vauxhall Vivaro", modelName = "btpvivaro"},
                        [3] = {name = "Vauxhall Astra Estate", modelName = "essexastra"},
                        [4] = {name = "Peugeot 308 Estate", modelName = "essexpeu308"}, 
                        [5] = {name = "Skoda Octavia", modelName = "skodalpt"},
                        [6] = {name = "Vauxhall Astra Hatchback", modelName = "essexastranew"},
                        [7] = {name = "Ford Transit", modelName = "btpfordtransit"}, 
                        [8] = {name = "Peugeot 308 Estate Unmarked", modelName = "peugeot308um"},
                        [9] = {name = "Ford Focus Unmarked", modelName = "umfordfocus"},
                        [10] = {name = "Mitsubishi Outlander", modelName = "essexmit"},
                        [11] = {name = "Ford Transit PT", modelName = "btpcell"},
                        [12] = {name = "Mercedes Vito", modelName = "btpvitonirt"},
                    },
                },
                [2] = {
                    SectionName = "~b~Motorbike Unit~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Essex_Police_Force",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW R1200 Motorcycle", modelName = "policebike2"},
                        [2] = {name = "BMW R1200 Motorcycle Matrix", modelName = "policeb3"},
                    },
                },
                [3] = {
                    SectionName = "~b~Road Traffic Unit~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "RPU",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW G30", modelName = "g30new"},
                        [2] = {name = "BMW 530D", modelName = "essex530d"},
                        [3] = {name = "BMW M5 Unmarked", modelName = "newm5unmarked"},
                        [4] = {name = "Volvo V60R Unmarked", modelName = "volvov60r"},
                        [5] = {name = "Skoda Octavia Unmarked", modelName = "newskodaum"},
                        [6] = {name = "Vauxhall Insignia", modelName = "insignia"},
                        [7] = {name = "Subaru WRX", modelName = "essexwrx"},
                        [8] = {name = "Mitshubishi EVO", modelName = "essexevo"},
                        [9] = {name = "Ford Transit (ISU)", modelName = "meticu"},
                        [10] = {name = "BMW X5 F15", modelName = "essexrpux5"},
                        [11] = {name = "BMW G31", modelName = "umbmwg31"},
                        [12] = {name = "BMW F31 Unmarked", modelName = "bmwf31um"},
                        [13] = {name = "Skoda Octavia Saloon", modelName = "essexvrssaloon"},
                        [14] = {name = "Skoda Octavia Estate", modelName = "essexvrsestate"},
                        [15] = {name = "Volvo V90", modelName = "volvov90r"},
                        [16] = {name = "BMW 330D", modelName = "essex330d"},
                    },
                },
                [4] = {
                    SectionName = "~b~Armed Response Unit~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "AFO",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW X5", modelName = "essexx5arv"},
                        [2] = {name = "Volvo XC90", modelName = "xc90traffic"},
                        [3] = {name = "BMW X5 Unmarked", modelName = "umbmwx5"},
                        [4] = {name = "Volvo XC90 Unmarked", modelName = "xc90unmarkednew"},
                        [5] = {name = "Volkswagen Transporter", modelName = "vwtransporteruk"},
                        [6] = {name = "Volkswagen Touareg", modelName = "arvtouareg"},
                        [7] = {name = "Ford Transit", modelName = "essexumtransit"},
                        [8] = {name = "BMW GO5", modelName = "essexgo5arv"},
                        [9] = {name = "BMW X5 Generic", modelName = "bmwx5generic"},
                        [10] = {name = "BMW X5 F15", modelName = "bmwx5f15"},
                        [11] = {name = "Mercedes Benz Vito Unmarked", modelName = "vitoum"},
                        [12] = {name = "Volkswagen Touareg", modelName = "serkantouareg"},
                    },
                },
                [5] = {
                    SectionName = "~b~Dog Unit~w~",
                    SectionRolePermissions = {  
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "DSU",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW 530", modelName = "530m"},
                        [2] = {name = "Skoda Karoq", modelName = "skodadsu"},
                        [3] = {name = "Ford Mondeo Unmarked", modelName = "mondeodogum"},
                        [4] = {name = "BMW 530 Unmarked", modelName = "530um"},
                        [5] = {name = "Ford Mondeo", modelName = "fordmondeodog"},
                        [6] = {name = "Essex Ford Mondeo", modelName = "essexfordmondeo"},
                        [7] = {name = "Skoda Superb Estate", modelName = "ukskodadsu"},
                        [8] = {name = "Ford Transit Unmarked", modelName = "fordtransitdog"},
                        [9] = {name = "Ford Connect", modelName = "fordconnectdsu"},
                    },
                },
                [6] = {
                    SectionName = "~o~Gold Investor~w~",
                    SectionRolePermissions = {  
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Gold_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW G21", modelName = "newg21"},
                        [2] = {name = "BMW 135i Unmarked", modelName = "essexbmwm135ium"},
                        [3] = {name = "BMW 330D F30 Unmarked", modelName = "f30"},
                        [4] = {name = "Volvo XC40 Unmarked", modelName = "xc40unmark"},
                        [5] = {name = "Skoda Octavia Unmarked", modelName = "skodaoctaviaum"},
                        [6] = {name = "Audi A4", modelName = "audi_a4_donator"},
                        [7] = {name = "BMW 540i", modelName = "540i"},
                        [8] = {name = "BMW 1 Series Unmarked", modelName = "bmw1series"},
                        [9] = {name = "Audi S4", modelName = "audis4"},
                        [10] = {name = "Audi A4", modelName = "umbtpaudi"},
                        [11] = {name = "BMW M3 G80", modelName = "bmwm3g80"},
                    },
                },
                [7] = {
                    SectionName = "~p~Platinum Investor~w~",
                    SectionRolePermissions = {  
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Platinum_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Peugeot 3008", modelName = "peugeot3008uk"},
                        [2] = {name = "BMW M135i", modelName = "bmwpsni135"},
                        [3] = {name = "Seat Cupra Unmarked", modelName = "umcupra"},

                        [4] = {name = "Volkswagen Golf R", modelName = "golfrnew"},
                        [5] = {name = "BMW Go5", modelName = "bmwx5rpu"},
                        [6] = {name = "Seat Ateca Unmarked", modelName = "seatatecaum"},

                        [7] = {name = "Kia Stinger", modelName = "essexkiastinger"},
                        [8] = {name = "Skoda Kodiaq", modelName = "essexkodiaqm"},
                        [9] = {name = "Mitsubishi Shogun Unmarked", modelName = "umshogunsport"},

                        [10] = {name = "Unmarked KIA Ceed", modelName = "btpceed"},
                        [11] = {name = "Honda CRF-1000", modelName = "hondaumbike"},
                        [12] = {name = "Volkswagen Touareg Unmarked", modelName = "rputouareg"},

                        [13] = {name = "Ford Connect", modelName = "btpconnect"},
                        [14] = {name = "Vauxhall Movano", modelName = "btpmovano2"},
                        [15] = {name = "BMW X7 Unmarked", modelName = "bmwx7um"},

                        [16] = {name = "Mitsubishi Shogun", modelName = "btparvshogun"},
                        [17] = {name = "BMW 530i", modelName = "bmw530i"},
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
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Pillbox Hill", location = vector3(323.0045, -546.9155, 28.7440), h = 267.3977},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "Sandy Shores", location = vector3(1812.6150, 3685.2234, 34.2243), h = 299.0269},
                [3] = {placeName = "Ambulance Outpost", location = vector3(-1271.0619, -1358.7224, 4.2992), h = 110.0995},
                [4] = {placeName = "Paleto Bay", location = vector3(-260.1001, 6341.8511, 32.4262), h = 132.3904},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Pillbox Hill", location = vector3(332.4535, -547.0506, 31.8941)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "Sandy Shores", location = vector3(1803.8660, 3696.2415, 38.5844)},
                [3] = {placeName = "Ambulance Outpost", location = vector3(-1264.7205, -1356.4154, 7.7742)},
                [4] = {placeName = "Paleto Bay", location = vector3(-250.4684, 6351.7349, 36.4512)},
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
                    SectionName = "~y~Incident Response Unit~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Ambulance_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Fiat Ducato", modelName = "ukambu8"},
                        [2] = {name = "MAN Box", modelName = "ukamb"},
                        [3] = {name = "MAN Box (2)", modelName = "ukamb2"},
                        [4] = {name = "Mercedes Sprinter Box", modelName = "essexambu"},
                        [5] = {name = "Mercedes Sprinter Box (2)", modelName = "ambu"},
                        [6] = {name = "EoEAS Bicycle", modelName = "scorcher"},
                        [7] = {name = "Fiat Ducato (2)", modelName = "ambuducato"},
                        [8] = {name = "Ford Ambulance", modelName = "nwambulance"},
                    },
                },
                [2] = {
                    SectionName = "~y~Incident Support Unit~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Ambulance_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Mercedes Sprinter", modelName = "isusprinter"},
                        [2] = {name = "Iveco Daily", modelName = "harticu"},
                    },
                },
                [3] = {
                    SectionName = "~y~Rapid Response Vehicles~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "RRV",
                    },
                    SectionVehicles = {
                        [1] = {name = "BMW R1200", modelName = "ambub"},
                        [2] = {name = "Volkswagen Tiguan", modelName = "lastiguan"},
                        [3] = {name = "Skoda Octavia", modelName = "eeskoda"},
                        [4] = {name = "BMW X5", modelName = "bmwx5nhs"},
                    },
                },
                [4] = {
                    SectionName = "~y~Humanitarian Aid Relief Trust~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "HART",
                    },
                    SectionVehicles = {
                        [1] = {name = "Land Rover Defender", modelName = "ambuldef"},
                        [2] = {name = "Volkswagen Transporter T6", modelName = "vwt6east"},
                        [3] = {name = "Mercedes Sprinter", modelName = "ukambu1"},
                    },
                },
                [5] = {
                    SectionName = "~o~Gold Investor~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Gold_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Skoda Octavia", modelName = "ambuskoda"},
                        [2] = {name = "Skoda Octavia Unmarked", modelName = "ambuskodaum"},
                        [3] = {name = "BMW M5 Doctors", modelName = "ambuumm5"},
                    },
                },
                [6] = {
                    SectionName = "~p~Platinum Investor~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Platinum_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Land Rover Doctors", modelName = "amburover"},
                        [2] = {name = "Skoda Kodiaq", modelName = "ambukodiaq"},
                        [3] = {name = "Land Rover Discovery", modelName = "ambuldis"},
                        [4] = {name = "Mercedes Vito", modelName = "ambuvito"},
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
                
            },         
            LocationVehicleShowcase = {
                [1] = {placeName = "Chelmsford Headquarters", location = vector3(1201.1860, -1461.1323, 34.8237), h = 0.6208},    -- This is the vector3 coordinate where the vehicle will be showcased & where the marker/label will be.
                [2] = {placeName = "Paleto Bay Headquarters", location = vector3(-377.8229, 6131.4707, 31.4066), h = 38.6742},
            },
            LocationVehicleCamPos = {
                [1] = {placeName = "Chelmsford Headquarters", location = vector3(1201.0289, -1450.1870, 39.8987)},                  -- This is the vector3 coordinate where the camera will point from towards the showcase vector3 coordinate.
                [2] = {placeName = "Paleto Bay Headquarters", location = vector3(-386.3939, 6141.5073, 35.2066)},
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
                    SectionName = "~r~Incident Support Unit~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Scania Fire Truck (Diving Tools)", modelName = "scaniafiretruck"},
                        [2] = {name = "Mercedes Sprinter Incident Support", modelName = "sprinterfire"},
                        [3] = {name = "Ford Ranger Incident Support", modelName = "fordrangerfire"},
                        [4] = {name = "Range Rover Defender Rescue", modelName = "firedefenderold"},
                        [5] = {name = "Range Rover Defender", modelName = "firedefendernew"},
                        [6] = {name = "Specialists Equipment Unit", modelName = "seu"},
                        [7] = {name = "Panther (Airport)", modelName = "15panther"},
                    },
                },
                [2] = {
                    SectionName = "~r~Pumper Engines~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Fire_Service",
                    },
                    SectionVehicles = {
                        [1] = {name = "Dennis Fire Engine", modelName = "dennis"},
                        [2] = {name = "Scania Fire Engine", modelName = "scaniafire"},
                        [3] = {name = "Iveco Rescue Pump", modelName = "esex"},
                        [4] = {name = "Water Carrier", modelName = "surreywater"},
                        [5] = {name = "Scania Domestic Appliance", modelName = "heathrowdomestic"},
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
                        [1] = {name = "Scania Ladder Truck", modelName = "P360TL"},
                        [2] = {name = "64m Ladder Truck", modelName = "lfb64"},
                    },
                },
                [4] = {
                    SectionName = "~r~Fire Officers Vehicles~w~",
                    SectionRolePermissions = {   -- Used only if Enable_discord_API = true.
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "ACFO",
                        "DCFO",
                        "CFO",
                    },
                    SectionVehicles = {
                        [1] = {name = "Volvo V90", modelName = "londonfirebrigade7"},
                        [2] = {name = "HERTS CSU", modelName = "hertscsu1"},
                    },
                },
                [5] = {
                    SectionName = "~o~Gold Investor~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Gold_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Volvo Engine (Pumper)", modelName = "volvoengine"},
                    },
                },
                [6] = {
                    SectionName = "~p~Platinum Investor~w~",
                    SectionRolePermissions = {
                        "Manager",
                        "Senior_Admin",
                        "Admin_Team",
                        "Platinum_Investor",
                    },
                    SectionVehicles = {
                        [1] = {name = "Mitshubishi L200", modelName = "fl200"},
                    },
                },
            },
        },
    },
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}