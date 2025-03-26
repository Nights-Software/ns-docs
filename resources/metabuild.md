---
layout: default
title: "MetaBuild"
#nav_order: 32
nav_order: 4
has_children: false
has_toc: true
last_modified_date: "2025-03-27 14:00:00"
---

<img class="cover-img" src="/assets/img/metabuild.png" alt="MetaBuild" draggable="false">

# MetaBuild - The Ultimate FiveM building & construction simulator
{: .no_toc}

A guide to install MetaBuild

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

[https://store.nights-software.com/package/6755408](https://store.nights-software.com/package/6755408)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> Set your File Transfer Protocol (FTP) type to binary -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

## Preparing your database (Dependency)

We assume you have a database for your FiveM server. If you do not have one, contact your hosting providers' documentation on how to get and build one. This is a dependency for MetaBuild to work.

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
> The files include a datatables.sql file. If you are eager to manually install the tables in your database, go ahead.


## Installing oxmysql (Dependency)

We assume you have oxmysql installed, this is a dependency for NS - MDT to work.

If you do not have oxmysql as your primary API for using a database. Find the download here: [Download Oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip) &  [Install Oxmysql](https://overextended.github.io/docs/oxmysql/#installation).

If you have questions about oxmysql, head over to their documentation page: [Oxmysql documentation](https://overextended.github.io/docs/oxmysql/)

1. Place 'oxmysql' into your resources folder.

2. Ensure / start 'oxmysql' in your server.cfg somewhere in the top of your server.cfg, to make sure it starts before the 'night_shifts' resource, which we install later in this documentation.

Example:
```lua
ensure oxmysql
```

## Testing your database & oxmysql

Once you've installed your database with tables, installed oxmysql and configured your server.cfg, your server should be ready to run. Start and test whether oxmysql works. In some cases you can get print-outs in your server console, like this one: 

`[script:oxmysql] Database server connection established!` 

This will let you know your installation has worked. You can also check whether there are errors to solve in your server console.

## Downloading & Installing MetaBuild

Download this resource via [https://portal.cfx.re/assets/granted-assets](https://portal.cfx.re/assets/granted-assets) after purchasing it. It can take a few minutes for the resource to appear in the CFX Portal after purchase.

1. Do not skip steps, are you sure your database and oxmysql is working?

1. Unpack the files into a folder onto your server. Please keep in mind you need to set your FTP to binary transfer to prevent parsing errors. 

1. Make sure you put the 'night_metabuild' folder into your resources folder of your server. Do not rename the resource.

1. Ensure or start this resource in your server.cfg. 

Example:
```lua
ensure night_metabuild
```

1. Start your server and look at your server console to see whether both oxmysql (must start first) and night_metabuild (must start after oxmysql) have started. Do not continue until you confirm this to be true and without errors. If you have any errors, read them and use them to solve your issue. They guide you!


## Configuring MetaBuild

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

Check out `client/client_exports.lua` for exports.

---

## Editing styling

You can edit limited styling in NUI/styles.css. Editing this is not recommended if you don't know what you're doing, because this can be tricky. It wasn't specifically made to be edited, but if you're handy or looking for a challenge you'll find your way for most cases!

---

## Troubleshoot

A list of tips and tricks:

1. Start the resource before you or any other player joins. This will prevent errors in relation to your database.

1. The database runs a one time (~42s) task to insert all objects into your database on first start. This is why you run into a loading stage when joining the server shortly after running the first start.

1. Always read the commentry in the scripts you're editing. There is logic in them.

1. Got players who'se FiveM ID is not found? 

**The solution for the FiveM ID not found (night_shifts) on entering a server.**
- Log into the FiveM app when inside the app. 
- Close the FiveM app.
- Open the FiveM app.
- Join the server as a logged in user.

1. Check whether your script is still named `night_shifts`, this is required for it to work. Do NOT rename it.

---

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
