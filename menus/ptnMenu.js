const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('ptn')
    .setPlaceholder('Pilih PTN')
    .addOptions([
      { label: 'ITB', value: '1487363835193983066' },
      { label: 'Unpad', value: '1487359184813949059' },
      { label: 'UPI', value: '1487360127316131993' },
      { label: 'Uin Sgd', value: '1487363295642914829' },
      { label: 'ISBI', value: '1487364227206484019' },
      { label: 'Polban', value: '1487364868070969394' },
      { label: 'Polman', value: '1487365036690374729' },
      { label: 'Poltekkes', value: '1487365160099119295' },
      { label: 'STP / NHI', value: '1487365469362065528' },
      { label: 'UT', value: '1487365883507642368' },
      { label: 'IPDN', value: '1487366586242301982' },
      { label: 'STT Tekstil', value: '1487367828557529108' },
      { label: 'Poltekesos', value: '1487367913311830097' },
      { label: 'Stia Lan', value: '1487368537562677299' }
    ]);

  return new ActionRowBuilder().addComponents(menu);
};