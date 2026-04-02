const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('select-univ')
    .setPlaceholder('Pilih Universitas Swasta (PTS)')
    .addOptions([
      { label: "Binus", value: '1487362915031056540' },
      { label: "Unpar", value: '1487358938209980568' },
      { label: "Maranatha", value: '1487358828709281842' },
      { label: "Tel-U", value: '1487359096654008370' },
      { label: "Unpas", value: '1487359265902559282' },
      { label: "Unjani", value: '1487360308602343434' },
      { label: "Itenas", value: '1487360519789744138' },
      { label: "Widyatama", value: '1487360989811708005' },
      { label: 'Unikom', value: '1487363715794731088' },
      { label: 'UNLA', value: '1487369577309409372' }
    ]);

  return new ActionRowBuilder().addComponents(menu);
};