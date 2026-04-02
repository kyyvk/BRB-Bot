const {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup-roles")
    .setDescription("Setup dropdown roles"),

  async execute(interaction) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId("select-category")
      .setPlaceholder("Pilih kategori")
      .addOptions([
  { label: "Universitas Negeri (PTN)", value: "ptn" },
  { label: "Universitas Swasta (PTS)", value: "pts" },
  { label: "Program Studi (Prodi)", value: "prodi" },
]);

    const row = new ActionRowBuilder().addComponents(menu);

    await interaction.reply({
      content: "Pilih kategori:",
      components: [row],
    });
  },
};