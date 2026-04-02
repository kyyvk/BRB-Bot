require('dotenv').config();

const fs = require("fs");
const path = require("path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.commands = new Collection();

// =====================
// LOAD COMMANDS (SAFE)
// =====================
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  if (!command.data || !command.execute) {
    console.log(`❌ ERROR di command: ${file}`);
    continue;
  }

  client.commands.set(command.data.name, command);
}

// =====================
// LOAD EVENTS
// =====================
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args));
}

// =====================
// READY
// =====================
client.once('clientReady', (client) => {
  console.log(`✅ Bot ready sebagai ${client.user.tag}`);
});

client.login(process.env.TOKEN);