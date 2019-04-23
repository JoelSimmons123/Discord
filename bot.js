const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on("message", message => {
    if(message.channel.id !== "569880248980865057" || message.member.hasPermission('ADMINISTRATOR') || message.member.roles.has("569882837373812768")) return;
    message.delete(1000*60*1).catch(console.error);
});

client.on("disconnect", () => {
         console.log(`You have been disconnected`);
});
client.on("error", () => {
    console.error();
});
client.on("reconnecting", () => {
    console.log("You have been reconnected");
});

client.login(process.env.BOT_TOKEN);
