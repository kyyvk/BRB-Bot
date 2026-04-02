const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select-prodi')
      .setPlaceholder('Pilih Prodi')
      .addOptions([
        { label: 'Teknik Sipil', value: '1487501547339514106' },
        { label: 'Teknik Mesin', value: '1487501586090692819' },
        { label: 'Teknik Elektro', value: '1487501675408392294' },
        { label: 'Teknik Informatika', value: '1487501706630529286' },
        { label: 'Teknik Industri', value: '1487501772758192209' },
        { label: 'Teknik Kimia', value: '1487501813484748901' },
        { label: 'Teknik Lingkungan', value: '1487501848649928804' },
        { label: 'Teknik Geologi', value: '1487501888180977881' },
        { label: 'Teknik Kelautan', value: '1487519903228629173' },
        { label: 'Informatika', value: '1487502302221697024' },
        { label: 'Sistem Informasi', value: '1487502339546943640' },
        { label: 'Teknologi Informasi', value: '1487502372962832394' },
        { label: 'Kedokteran', value: '1487502587568722224' },
        { label: 'Farmasi', value: '1487502678014824658' },
        { label: 'Teknik Laboratorium Medis', value: '1487502727469600828' },
        { label: 'Manajemen', value: '1487502947490467850' },
        { label: 'Akuntansi', value: '1487503007150247977' },
        { label: 'Bisnis Digital', value: '1487503110233395292' },
        { label: 'Ilmu Komunikasi', value: '1487503832027238532' },
        { label: 'Hubungan Internasional', value: '1487503874800484363' },
        { label: 'Psikologi', value: '1487504084138459177' },
        { label: 'Hukum', value: '1487504139671048295' },
      ])
  );
};