# discord.js-slash
Discord JS Slash Commands

This is a discord.js (Extension?), which allows you to use slash commands easy and fast

## Get Started

There is an [example](./example.js) which you can look at

### Global Commands

To create a global slash Command, use 

```js
const myGlobalSlashCommand = new Discord.SlashCommand(client, 'my name', 'My description', options) // client, name, description, options
```

The name will be automatically be changed to a valid discord Slash Command name (replacing ' ' with '_' and lowerCasing it)


To add a function to that command which will be executed when it is called, use

```js
myGlobalSlashCommand.onCall = async(slashCommand, interaction, args, messageData) => {}
```

The `slashCommand` is the Slash Command Object which you created before and was called

The `interaction` is the response of the discord API

The `args` Array is a Collection of the Arguments specified

The `messageData` is a object, which contains the `author`, the `channel` and the `guild`

### Guild Commands

To create a guild Slash Command, use

```js
const myGuildSlashCommand = new Discord.SlashGuildCommand(client, 'YOUR_GUILD_ID', 'name', 'Description', options) // client, guildID, name, description, options
```

Same as the global slash Command

### SlashCommand Options

To add options to your SlashCommand, you'll need `Discord.SlashCommandOption`

```js
const mySlashCommand = new Discord.SlashCommand(client, 'name', 'Description', [new Discord.SlashCommandOption('name', 'description', Discord.SlashCommandOptionTypes, false)]) // name, description, type, required
```

### Actions

- Register:       To register a command, use ` await yourCommand.register()`

- Delete:         To delete a command, use `await yourCommand.delete()`


## Features which will be added soon

- Hidden replies

- Edit, delete replies
