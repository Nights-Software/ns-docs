---
layout: default
title: "Ace permissions"
nav_order: 99
has_children: false
has_toc: true
last_modified_date: "2022-07-27 00:25:00"
---

<!-- <img class="cover-img" src="/assets/img/garageSystem.gif" alt="Ace permissions! Resource" draggable="false"> -->

# Ace permissions!
{: .no_toc}

A guide to install Ace permissions! for FiveM

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

## How to set up Ace Permissions?

1. Create a perms.cfg file in the same folder as your server.cfg file.

1. Insert the code below into the perms.cfg file and edit the steam HEX ID's: How to find those? Check this youtube video: [How to find FiveM HEX ID's](https://youtu.be/hyW9aFJI5_Q)

```
add_ace Admin administrator allow
add_ace Supporter supporter allow
add_ace Tester tester allow

#Admins
add_principal identifier.steam:110000114fa0982 Admin 

#Supporters
add_principal identifier.steam:110000114fa0982 Supporter 

#Testers
add_principal identifier.steam:110000114fa0982 Tester

#aces
add_ace Admin command.mute allow
```

1. Execute the permissions in your server.cfg by inserting the example below in server.cfg.

```
exec perms.cfg
```

## How to use Ace Permissions?

1. Use the code below in your server side script(s). 

```
function HasPermission(src) 
    if IsPlayerAceAllowed(src, "administrator") or IsPlayerAceAllowed(src, "supporter") or IsPlayerAceAllowed(src, "tester") then -- You can remove roles if you don't want them to have the permission.
        return true 
    else 
        return false 
    end
end
```

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord:

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}