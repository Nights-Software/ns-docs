---
layout: default
title: "Storm Chasing"
nav_order: 4
has_children: false
has_toc: true
last_modified_date: "2025-25-06 22:00:00"
---

<img class="cover-img" src="/assets/img/stormChasing.png" alt="Storm Chasing" draggable="false">

# Storm Chasing
{: .no_toc}

A guide to install Storm Chasing for FiveM

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

Base: [https://store.nights-software.com/package/6903928](https://store.nights-software.com/package/6903928)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> Set your File Transfer Protocol (FTP) type to binary -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

## Preparing your database (Dependency)

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for the script to work.

1. Once you have set up your database via your hosting provider, connect to your database by using it's credentials in an SQL connection string. We will now form one below with the credentials you found in your dashboard. Once this is done, we will define the sql connection string in your server.cfg, above the ensure/start of the resources.

In your server.cfg:
```
set mysql_connection_string "user=Your_Database_Username;password=Your_Database_Password;host=Your_Database_Host;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci" 
```

*Hint: You can find your database credentials on your host dashboard. If you run a localhost you can use localhost as the host, root as username and no password.*

Localhost example:
```
set mysql_connection_string "user=root;password=;host=localhost;port=3306;database=Your_Database_Name;charset=utf8mb4_general_ci"
```

1. When you boot up the server, the code will run a query which installs the required tables into your database.

{: .note }
> Note
>
> The files include a datatables.sql file, however the script installs the table queries automatically. No need to manually execute the .sql files.


## Installing oxmysql (Dependency)

We assume you have oxmysql installed, this is a dependency for the script to work.

If you do not have oxmysql as your primary API for using a database. Find the download here: [Download Oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip) &  [Install Oxmysql](https://overextended.github.io/docs/oxmysql/#installation).

If you have questions about oxmysql, head over to their documentation page: [Oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

1. Place 'oxmysql' into your resources folder.

2. Ensure / start 'oxmysql' in your server.cfg somewhere in the top of your server.cfg, to make sure it starts before the 'night_storm_chasing' resource, which we install later in this documentation.

Example:
```lua
ensure oxmysql
```

## Testing your database & oxmysql

Once you've installed your database with tables, installed oxmysql and configured your server.cfg, your server should be ready to run. Start and test whether oxmysql works. In some cases you can get print-outs in your server console, like this one: 

`[script:oxmysql] Database server connection established!` 

This will let you know your installation has worked. You can also check whether there are errors to solve in your server console.

## Downloading & Installing Storm Chasing

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets) after purchasing it. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

1. Do not skip steps, are you sure your database and oxmysql is working?

1. Unpack the files into a folder onto your server. ZIP Package -> Unpack in a folder on your local machine -> Set your File Transfer Protocol (FTP) type to binary -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.. Do not rename the resource.

1. Make sure you put the 'night_storm_chasing' folder into your resources folder of your server.

1. Ensure or start this resource in your server.cfg. 

Example:
```lua
ensure night_storm_chasing
```
## Configuring the config.lua file

There are loads of options to configure. It is recommended you test the resource before editing it. So you are sure it works by default. If you start editing it, frequently test what you've changed to prevent getting errors you can not trace. If you ask for support, we will recommend you to re-install it if you've edited it. There are many ways to break code and many reasons why code will not work sometimes. Lets move on by following the steps below!

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. We recommend downloading Visual Studio Code (VS Code) to read (lua) files: [Download VS Code](https://code.visualstudio.com/download).

1. Once you've downloaded Visual Studio Code, open the file (or folder) with it to read it's contents, like: `config/*.lua`, `client/c_functions.lua`, `server/s_functions.lua`.

1. When configuring the resource you will see that each line has and explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

1. Keep eye out for notes! On some parts we provide warnings on what you should not edit, add or remove. Relax mode on and read it all to understand it.

1. It's smart to follow an order when setting up this resources' config file, we recommend going from top-to-bottom.

## Fix UI Lag

FiveM has a setting in their application (settings menu) which allows you to "Fix UI Lag". This is recommend to set checked (enabled) for this resource.

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. A client side functions script `c_functions.lua` and a server side functions script `s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits.

Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

## Exports

## SERVERSIDE Exports:

```lua
    exports.night_storm_chasing:RequestStorm() -- Triggers a storm if there are no more than 2 storms or tornado's active.
```

---

## Editing styling

You can edit LIMITED styling in NUI/styles.css. Editing this is not recommended if you don't know what you're doing, because this can be tricky. It wasn't specifically made to be edited, but if you're handy or looking for a challenge you'll find your way for most cases!

---

## Troubleshoot

Troubleshoot common issues:

1. Always read the commentry in the scripts you're editing. There is logic in them.

1. Check whether your script is still named `night_storm_chasing`, this is required for it to work. Do NOT rename it.

---

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
