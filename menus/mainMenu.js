const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = function () {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('select-category') // ⚠️ HARUS INI
    .setPlaceholder('Pilih kategori')
    .addOptions([
      {
        label: 'Universitas Negeri (PTN)',
        value: 'ptn' // ⚠️ HARUS SAMA
      },
      {
        label: 'Universitas Swasta (PTS)',
        value: 'pts' // ⚠️ HARUS SAMA
      },
      {
        label: 'Program Studi',
        value: 'prodi'
      }
    ]);

  return new ActionRowBuilder().addComponents(menu);
};