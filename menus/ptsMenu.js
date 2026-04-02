const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
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
      { label: 'UNAI', value: '1487366130808131696' },
      { label: 'UNIBI', value: '1487369296354214009' },
      { label: 'UNLA', value: '1487369577309409372' },
      { label: 'Dustira', value: '1487370056127217775' },
      { label: 'UNNUR', value: '1487370165703282819' },
      { label: 'UKI', value: '1487370492334833774' },
      { label: 'UNINUS', value: '1487370589110009948' },
      { label: 'ARS Internasional', value: '1487370661721669632' },
      { label: 'UKRI', value: '1487371383372513410' },
      { label: 'INABA', value: '1487371555305422879' },
      { label: 'UNBAR', value: '1487371713724285048' },
      { label: 'Al-Ghifari', value: '1487371812865183864' },
      { label: 'ATB', value: '1487371961574359110' },
      { label: 'STEI SEBI', value: '1487373201133539358' },
      { label: 'STMIK', value: '1487373349960286291' },
      { label: 'STHB', value: '1487373698884440207' },
      { label: 'ASMKB', value: '1487373956016111698' },
      { label: 'ASM Ariyanti', value: '1487374120856453120' },
      { label: 'UNAS PASIM', value: '1487374981175316510' },
      { label: 'UMB', value: '1487375500983926836' },
      { label: 'IWU', value: '1487375945655390248' },
      { label: 'Yapari Aktripa', value: '1487376101041897532' },
    ]);

  return new ActionRowBuilder().addComponents(menu);
};