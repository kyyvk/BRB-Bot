const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select-univ')
      .setPlaceholder('Pilih PTS')
      .addOptions([
      { label: 'Binus', value: '1487362915031056540' },
      { label: 'Unpar', value: '1487358938209980568' },
      { label: 'Maranatha', value: '1487358828709281842' },
      { label: 'Tel-U', value: '1487359096654008370' },
      { label: 'Unpas', value: '1487359265902559282' },
      { label: 'Unjani', value: '1487360308602343434' },
      { label: 'Itenas', value: '1487360519789744138' },
      { label: 'Unisba', value: '1487360740590485514' },
      { label: 'Widyatama', value: '1487360989811708005' },
      { label: 'USB YPKP', value: '1487361903775977502' },
      { label: 'ITHB', value: '1487362081131855913' },
      { label: 'Unikom', value: '1487363715794731088' },
      { label: 'ULBI', value: '1487364554303475713' },
      { label: 'UNLA', value: '1487369577309409372' },
      { label: 'STMIK', value: '1487373349960286291' },
      { label: 'STHB', value: '1487373698884440207' }
      ])
  );
};