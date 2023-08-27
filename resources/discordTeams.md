---
layout: default
title: "Discord Teams"
nav_order: 27
has_children: false
has_toc: true
last_modified_date: "2022-10-21 17:25:00"
---

<img class="cover-img" src="/assets/img/discordTeams.png" alt="Discord Teams! Resource" draggable="false">

# Discord Teams!
{: .no_toc}

A guide to install Discord Teams! for FiveM

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

Base: [https://store.nights-software.com/package/5344429](https://store.nights-software.com/package/5344429)

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
ensure night_discord_teams
```

1. Configure /config/config.lua. You will notice there is explanation in green text and variables for you to edit in this configuration file.

## Export Functions (Serverside)

```lua
exports['night_discord_teams']:ShowTeams(src)
exports['night_discord_teams']:GetPlayerTeamName(src, targetSrc)
exports['night_discord_teams']:SwitchTeam(src, teamId)
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
