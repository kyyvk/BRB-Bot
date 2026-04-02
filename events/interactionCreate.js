const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    try {

      // =====================
      // SLASH COMMAND
      // =====================
      if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
          console.log("❌ Command not found:", interaction.commandName);
          return;
        }

        return await command.execute(interaction);
      }

      // =====================
      // SELECT MENU (INI YANG KURANG)
      // =====================
      if (interaction.isStringSelectMenu()) {
        console.log("🔥 Select menu:", interaction.customId, interaction.values);

        // === CATEGORY SELECT ===
        if (interaction.customId === "select-category") {
          const value = interaction.values[0];

          if (value === "pts") {
            return interaction.update({
              content: "Pilih Universitas Swasta (PTS):",
              components: [require("../menus/ptsMenu")()]
            });
          }

          if (value === "ptn") {
            return interaction.update({
              content: "Pilih Universitas Negeri (PTN):",
              components: [require("../menus/ptnMenu")()]
            });
          }

          if (value === "prodi") {
            return interaction.update({
              content: "Pilih Program Studi:",
              components: [require("../menus/prodiMenu")()]
            });
          }
        }

        // === UNIVERSITAS SELECT ===
        if (interaction.customId === "select-univ") {
          const roleId = interaction.values[0];

          await interaction.member.roles.add(roleId);

          return interaction.reply({
            content: "✅ Role berhasil ditambahkan!",
            ephemeral: true
          });
        }

        // === PRODI SELECT ===
        if (interaction.customId === "select-prodi") {
          const roleId = interaction.values[0];

          await interaction.member.roles.add(roleId);

          return interaction.reply({
            content: "✅ Role prodi berhasil ditambahkan!",
            ephemeral: true
          });
        }
      }

    } catch (error) {
      console.error("❌ Interaction Error:", error);

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'Terjadi error!', ephemeral: true });
      } else {
        await interaction.reply({ content: 'Terjadi error!', ephemeral: true });
      }
    }
  },
};