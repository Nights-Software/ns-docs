---
layout: default
title: "Meta Build"
nav_order: 10
has_children: false
has_toc: true
last_modified_date: "2025-01-27 16:00:00"
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

## `server.cfg`

Add `setr game_enableDynamicDoorCreation "true"` to your server.cfg. Place it somewhere above the starting of scripts.

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

2. Ensure / start 'oxmysql' in your server.cfg somewhere in the top of your server.cfg, to make sure it starts before the 'night_metabuild' resource, which we install later in this documentation.

Example:
```lua
ensure oxmysql
```

## Testing your database & oxmysql

Once you've installed your database with tables, installed oxmysql and configured your server.cfg, your server should be ready to run. Start and test whether oxmysql works. In some cases you can get print-outs in your server console, like this one: 

`