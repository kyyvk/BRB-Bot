const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('select-univ')
    .setPlaceholder('Pilih Universitas Negeri (PTN)')
    .addOptions([
      { label: "ITB", value: '1487363835193983066' },
      { label: "Unpad", value: '1487359184813949059' },
      { label: "UPI", value: '1487360127316131993' },
      { label: "UIN SGD", value: '1487363295642914829' },
      { label: "Polban", value: '1487364868070969394' },
      { label: "Polman", value: '1487365036690374729' },
      { label: "Poltekkes", value: '1487365160099119295' },
      { label: 'ISBI', value: '1487364227206484019' }
    ]);

  return new ActionRowBuilder().addComponents(menu);
};