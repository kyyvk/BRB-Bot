const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('select-category')
    .setPlaceholder('Pilih kategori')
    .addOptions([
      { label: 'Universitas Negeri (PTN)', value: 'ptn' },
      { label: 'Universitas Swasta (PTS)', value: 'pts' },
      { label: 'Program Studi', value: 'prodi' }
    ]);

  return new ActionRowBuilder().addComponents(menu);
};