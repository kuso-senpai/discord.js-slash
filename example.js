const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', async() => {
    console.log("ready")

    const exampleGuildCommand = new Discord.SlashGuildCommand(client, '810919064624300052', 'hello world', "Just doing the usually hello world thing ", [new Discord.SlashCommandOption("text", "The hello world text", Discord.SlashCommandOptionTypes.STRING, false)])
    exampleGuildCommand.onCall = async(command, interaction, args, messageData) => {
        await messageData.channel.send("This is a normal discord channel sending")
        
        // The reply will be visible after the 'User used ...' thing, everything before the reply will come before the message
        await command.reply(`${args ? args[0].value : "Hello World"} from #${messageData.channel.name} in ${messageData.guild.name}`)
    }
    exampleGuildCommand.register()
    console.log("Wurde registiert")
    
});

client.login('token')
