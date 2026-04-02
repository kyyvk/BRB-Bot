const { Events } = require('discord.js');

// 👉 hanya untuk filter (boleh tetap banyak)
const UNIV_ROLE_IDS = [
  '1487362915031056540',
  '1487358938209980568',
  '1487359265902559282',
  '1487360308602343434',
  '1487360519789744138'
];

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {

    if (!interaction.isStringSelectMenu()) return;

    const member = interaction.member;
    const selectedRoleId = interaction.values[0];

    try {

      // ================= NAVIGATION =================
      if (interaction.customId === 'select-category') {

        if (selectedRoleId === 'ptn') {
          return await interaction.update({
            content: '🎓 Pilih PTN:',
            components: [require('../menus/ptnMenu')()]
          });
        }

        if (selectedRoleId === 'pts') {
          return await interaction.update({
            content: '🏫 Pilih PTS:',
            components: [require('../menus/ptsMenu')()]
          });
        }

        if (selectedRoleId === 'prodi') {
          return await interaction.update({
            content: '📚 Pilih Prodi:',
            components: [require('../menus/prodiMenu')()]
          });
        }
      }

      // ================= UNIVERSITAS =================
      if (interaction.customId === 'select-univ') {

        const hasRole = member.roles.cache.has(selectedRoleId);

        if (hasRole) {
          await member.roles.remove(selectedRoleId);
          return await interaction.reply({
            content: '❌ Role dilepas!',
            ephemeral: true
          });
        }

        // remove semua univ lama
        const rolesToRemove = member.roles.cache.filter(r =>
          UNIV_ROLE_IDS.includes(r.id)
        );

        if (rolesToRemove.size > 0) {
          await member.roles.remove(rolesToRemove);
        }

        await member.roles.add(selectedRoleId);

        return await interaction.reply({
          content: '✅ Role berhasil dipilih!',
          ephemeral: true
        });
      }

      // ================= PRODI =================
      if (interaction.customId === 'select-prodi') {

        const hasRole = member.roles.cache.has(selectedRoleId);

        if (hasRole) {
          await member.roles.remove(selectedRoleId);
          return await interaction.reply({
            content: '❌ Prodi dilepas!',
            ephemeral: true
          });
        }

        await member.roles.add(selectedRoleId);

        return await interaction.reply({
          content: '✅ Prodi ditambahkan!',
          ephemeral: true
        });
      }

    } catch (err) {
      console.error('🔥 ERROR DETAIL:', err);

      if (!interaction.replied) {
        await interaction.reply({
          content: '❌ Terjadi error!',
          ephemeral: true
        });
      }
    }
  }
};