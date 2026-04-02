const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select-prodi')
      .setPlaceholder('Pilih Prodi')
      .addOptions([
        { label: 'Teknik Sipil', value: '1487501547339514106' },        // ID ke-9
        { label: 'Teknik Mesin', value: '1487501586090692819' },       // ID ke-10
        { label: 'Teknik Elektro', value: '1487501675408392294' },     // ID ke-11
        { label: 'Teknik Informatika', value: '1487501706630529286' }, // ID ke-12
        { label: 'Teknik Industri', value: '1487501772758192209' },    // ID ke-13
        { label: 'Teknik Kimia', value: '1487501813484748901' },       // ID ke-14
        { label: 'Teknik Lingkungan', value: '1487501848649928804' },  // ID ke-15
        { label: 'Teknik Geologi', value: '1487501888180977881' },     // ID ke-16
        { label: 'Teknik Kelautan', value: '1487519903228629173' },    // ID ke-23
        { label: 'Sistem Informasi', value: '1487502339546943640' },   // ID ke-25
        { label: 'Teknologi Informasi', value: '1487502372962832394' },// ID ke-26
        { label: 'Kedokteran', value: '1487502587568722224' },         // ID ke-31
        { label: 'Farmasi', value: '1487502678014824658' },           // ID ke-33
        { label: 'Teknik Laboratorium Medis', value: '1487502727469600828' }, // ID ke-34 (Sesuai urutan Keperawatan)
        { label: 'Manajemen', value: '1487502902435254374' },          // ID ke-37 (FIXED)
        { label: 'Akuntansi', value: '1487502947490467850' },         // ID ke-38 (FIXED)
        { label: 'Bisnis Digital', value: '1487503039081349240' },     // ID ke-40 (FIXED)
        { label: 'Ilmu Komunikasi', value: '1487503780860924025' },    // ID ke-44 (FIXED)
        { label: 'Hubungan Internasional', value: '1487503832027238532' }, // ID ke-45 (FIXED)
        { label: 'Psikologi', value: '1487504016832205060' },          // ID ke-50 (FIXED)
        { label: 'Hukum', value: '1487504084138459177' }               // ID ke-51 (FIXED)
      ])
  );
};