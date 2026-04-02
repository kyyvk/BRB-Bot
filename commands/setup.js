const { SlashCommandBuilder } = require('discord.js');
const mainMenu = require('../menus/mainMenu');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-role')
    .setDescription('Setup role menu'),

  async execute(interaction) {
    await interaction.reply({
      content: '📌 Pilih Role Kamu:',
      components: [mainMenu()]
    });
  }
};