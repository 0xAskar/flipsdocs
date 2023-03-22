---
sidebar_position: 4
---
import { PesterDataTable, PesterDataButton } from "@site/src/components/PesterDataTable";
import { NFTColumns, NFTCommands, moduleTests } from "./tables/flipsdiscordNFT.table";
import { cryptoColumns, cryptoCommands } from "./tables/flipsdiscordCrypto.table";

# Degenz Discord Bot

## Overview
The Degenz Discord Bot is one of the most comprehensive efficient NFT/Crypto Bot 
in the space. Currently, it is **free**. To add it your server, please visit
[Degenz Discord page](https://www.degenz.finance/Discord) on our site.

We have a few batches of commands. Some are NFT specific, and the other half are Crypto specific. Also, you can visit the site to visualize and see all our commands. 

Here is a list of all the commands, and how to use them:

## NFT Commands

<PesterDataTable
  columns={NFTColumns}
  data={ NFTCommands }
/>

## Crypto Commands

<PesterDataTable
  columns={cryptoColumns}
  data={ cryptoCommands }
/>