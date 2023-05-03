---
layout: default
title: "Night Shifts - Mobile Data Terminal"
nav_order: 32
has_children: false
has_toc: true
last_modified_date: "2023-05-03 17:00:00"
---

<img class="cover-img" src="/assets/img/nightShifts.png" alt="Night Shifts - Mobile Data Terminal Resource" draggable="false">

# Night Shifts - Mobile Data Terminal
{: .no_toc}

A guide to install Night Shifts - Mobile Data Terminal for FiveM

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

Base: [https://store.ea-rp.com/package/todo](https://store.ea-rp.com/package/todo)

## Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

## Setting up your database tables (Dependency)

We assume you have a database for your FiveM server. If you do not have one, contact your providers' documentation on how to get and build one. This is a dependency for NS - MDT to work.

Example for ZAP-Hosting: [SQL File Import into FiveM Database - ZAP Hosting](https://zap-hosting.com/guides/docs/en/fivem_sql_file_import/#import-the-sql-file-into-the-fivem-database)

{: .note }
> Note
>
> This example shows how to run an SQL file. We want you to create the tables from our .sql file (in the night shifts) folder in your database. If running the .sql file does not work, insert the SQL table queries manually into your database


## Installing oxmysql (Dependency)

We assume you have oxmysql installed, this is a dependency for NS - MDT to work.

If you do not have oxmysql as your primary API for using a database. Find the download here: [Download oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip) &  [Install oxmysql](https://overextended.github.io/docs/oxmysql/#installation).

If you have questions about oxmysql, head over to their documentation page: [oxmysql Documentation](https://overextended.github.io/docs/oxmysql/)

## Testing your database & oxmysql

Once you've installed your database with tables, installed oxmysql and configured your server.cfg, your server should be ready to run. Start and test whether oxmysql works. In some cases you can get print-outs in your server console, like this one: 

`[script:oxmysql] Database server connection established!` 

This will let you know your installation has worked. You can also check whether there are errors to solve in your server console.

## Downloading & Installing Night Discord API (Dependency)

Download our free Discord API, which has been integrated in the NS - MDT resource as a permission system: [NS Discord API Free](https://store.ea-rp.com/package/5035729)  

1. Install the Discord API, using the documentation.pdf file provided with the resource.

## Downloading & Installing Night Shifts - Mobile Data Terminal

Download this resource via [https://keymaster.fivem.net/asset-grants](https://keymaster.fivem.net/asset-grants) after purchasing it. It can take a few minutes for the resource to appear in keymaster after purchase.

1. Do not skip steps, are you sure your database and oxmysql is working?

1. Unpack the files into a folder onto your server. Please keep in mind you need to unpack it either on your servers' desktop before installing it, or do that locally on your own desktop and then drag over the files manually, to prevent parsing errors. Do not rename the resource.

1. Make sure you put the 'night_shifts' folder into your resources folder of your server.

1. Ensure or start this resource in your server.cfg. 

Example:
```lua
ensure night_shifts
```

## Configuring the config.lua file

There are loads of options to configure. It is recommended you test the resource before editing it. So you are sure it works. If you start editing it, frequently test what you've changed to prevent getting errors you can not trace. If you ask for support, we will recommend you to re-install it if you've edited it. There are many ways to break code and many reasons why code will not work sometimes. Follow the steps below!

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. Open /config/config.lua in VS Code. To read this file we recommend Visual Studio Code: [Download VS Code](https://code.visualstudio.com/download).

1. Once you've downloaded Visual Studio Code, open the file (or folder) with it to read it's contents, like config/config.lua, client/c_functions.lua, server/s_functions.lua.

1. When configuring the resource you will see that each line has and explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

1. Keep eye out for notes! On some parts we provide warnings on what you should not edit, add or remove. Read it all to understand it.

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

## Exports

GetUserShiftData is used to get all the data related to their shift stored clientside for the given players' server ID. It will auto-print out the result to see what keys and values you get to use.
```lua
    local src = source
    local shiftDataResults = exports['night_shifts']:GetUserShiftData(src)
    if #shiftDataResults > 0 then
        for k, v in pairs(shiftDataResults) do
            print("Key: "..k.." | Value: "..v)
        end
    else
        print("User is not on a shift.")
    end
```
## Editing styling

You can edit styling in NUI/styles.css. It is not recommended if you don't know what you're doing, because this can be tricky. It wasn't specifically made to be edited, but if you're handy or looking for a challenge you'll find your way for most cases!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://ns.ea-rp.com){: .btn .btn-discord}