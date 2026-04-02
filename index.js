require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

// Load events
fs.readdirSync('./events').forEach(file => {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args));
});

// READY
client.once('clientReady', c => {
  console.log(`✅ Bot ready sebagai ${c.user.tag}`);
});

client.login(process.env.TOKEN);