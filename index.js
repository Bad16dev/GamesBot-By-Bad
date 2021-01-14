const express = require("express");
const app = express();///////Bad
///////Bad
///////Bad


app.listen(() => console.log('Bad Start Go Go'));
///////Bad

app.use('/ping', (req, res) => {
  res.send(new Date());///////Bad
///////Bad

});

const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");
///////Bad

client.on("ready", () => {///////Bad
///////Bad

  console.log(`This Bot Maked By : https://bit.ly/3mU5D12`);
});
var prefix = "";/////البريفيكس حقك
var owners = "";//////الايدي حقك
///////Bad

///////Bad

/////Status
client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`Bad In The Top : ! BadDad.#0090`);
  client.user.setStatus("online");
});
///////Bad
/////Ping///////Bad

client.on ('message', async (Bad) => {
  if (!Bad.guild || Bad.author.bot) return false;
  if (Bad.content == prefix + 'ping') {
    const msg = await Bad.channel.send ("Ping..");
    msg.delete ();
    Bad.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)} ms\nTime taken: ${msg.createdTimestamp - Bad.createdTimestamp} ms\n\`\`\` `)
  }///////Bad

})
