---
layout: default
title: "Gates & Bollards for FiveM"
nav_order: 36
has_children: false
has_toc: true
last_modified_date: "2023-11-23 17:30:00"
---

<img class="cover-img" src="/assets/img/gates.png" alt="Gates & Bollards for FiveM" draggable="false">

# Gates & Bollards for FiveM
{: .no_toc}

A guide to install Gates & Bollards for FiveM

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

## Installation Tutorial

**Youtube!** Watch this installation tutorial video:

[Installation tutorial](https://youtu.be/sOQC541Uico){: .btn .btn-red}

## Purchasing the resource

Find this product at: [https://store.nights-software.com/package/6005872](https://store.nights-software.com/package/6005872)

# Read before installing

*Note: Always make sure when you transfer files to your server you follow this order: (Otherwise you will experience parsing errors in F8 console.)*

```
ZIP Package -> Unpack in a folder on your local machine -> drag from local machine into the server resources folder -> server.cfg (ensure script) and then boot up the server.
```

*IMPORTANT: Follow this guide step by step. If you're stuck at a step, please ask for support in our Discord and provide the step name, do not skip steps. Click the button to join discord at the bottom of this page.*

---

## Installing Gates & Bollards for FiveM

1. Place 'night_gates' into your resources folder.

2. Ensure / start 'night_gates' in your server.cfg.

Example:
```lua
ensure night_gates
```

## Configuring the config.lua file

*Note: Always check your FiveM server console and F8 client console for errors, you need these errors to locate your issue if you have one.*

1. We recommend downloading Visual Studio Code (VS Code) to read (lua) files: [Download VS Code](https://code.visualstudio.com/download).

1. Open /config/config.lua in VS Code. 

1. Once you've downloaded Visual Studio Code, open the file (or folder) with it to read it's contents, like: `config/config.lua`, `client/c_functions.lua`, `server/s_functions.lua`.

1. When configuring the resource you will see that each line has and explanation written at the end of it. During the process of configuring and testing what you've configured you'll figure out what things are for. Every variable is named so that you can relate to what you are editing.

1. Keep eye out for notes! On some parts we provide warnings on what you should not edit, add or remove. Relax mode on and read it all to understand it.

1. It's smart to follow an order when setting up this resources' config file, we recommend going from top-to-bottom: 

*Hint: You will take some time to configure this the way you like, so plan that time and take your time to read! Frequently test your edits to see whether you're making mistakes and where to find them. Trying stuff early is good for confirming that your resource works, but not for trying out it's functionalities.*

## Configuring Gate & Bollard or other prop positions

1. Use /createbollards [object model] [amount of objects] [max width in meters] [distance between objects] to open the tool to create objects. Once you confirm position you will find a copyable GateObjects table in your night_gates folder. You can copy the content of bollards.txt to your config.lua inside your Gate section. bollards.txt overwrites upon confirming your bollards positions in-game.

2. /creategate works the same way, but then outputs one gate per confirmed position.

## Editing c_functions.lua / s_functions.lua

Are you not familiar with code? Then skip this section or take on the challenge!

We have provided 2 open script files containing functions you can edit to your desire. A client side functions script `c_functions.lua` and a server side functions script `s_functions.lua`. You can also write events or new functions in them if you need to for your custom add-ons or edits.

Feel free to take a look. We have provided these functions open source and you are expected to edit them yourself if you like. Nights software does not provide specific support for custom framework integrations. But you can ofcourse ask us any question and we will try to see if our knowledge can help you.

# Help us or let us help you
Get in touch for feedback or support, join our Discord and make use of our ticket system!

## Feedback

Are you missing things in this documentation or do you wish to leave us a product review. Feel free to visit our Discord! Click the Discord button at the bottom of this page to visit our ticket & review channels.

## Support

Read through the instructions again if you have not managed to install the resource. Can’t get it to work still? Create a ticket through our dedicated support system in Discord.

[Nights Software Discord](https://discord.nights-software.com){: .btn .btn-discord}
