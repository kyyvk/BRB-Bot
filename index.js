require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

// ✅ INIT CLIENT
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

// =======================
// 📦 LOAD COMMANDS
// =======================
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`⚠️ ${file} tidak punya data/execute`);
  }
}

// =======================
// ⚡ READY EVENT
// =======================
client.once('clientReady', c => {
  console.log(`✅ Bot ready sebagai ${c.user.tag}`);
});

// =======================
// 🎯 INTERACTION HANDLER
// =======================
client.on('interactionCreate', async interaction => {

  // 👉 HANDLE SLASH COMMAND
  if (interaction.isChatInputCommand()) {

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error('❌ Command Error:', error);

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: '❌ Terjadi error saat menjalankan command!',
          ephemeral: true
        });
      } else {
        await interaction.reply({
          content: '❌ Terjadi error saat menjalankan command!',
          ephemeral: true
        });
      }
    }
  }

  // 👉 HANDLE DROPDOWN (SELECT MENU)
  if (interaction.isStringSelectMenu()) {

    try {
      const interactionHandler = require('./events/interactionCreate');
      await interactionHandler.execute(interaction);
    } catch (error) {
      console.error('❌ Interaction Error:', error);

      if (!interaction.replied) {
        await interaction.reply({
          content: '❌ Terjadi error saat memilih!',
          ephemeral: true
        });
      }
    }
  }
});

// =======================
// 🚀 LOGIN
// =======================
client.login(process.env.TOKEN);