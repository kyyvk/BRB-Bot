const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('select-prodi')
      .setPlaceholder('Pilih Prodi')
      .addOptions([
        { label: 'Teknik Informatika', value: '1487501135458861237' },
        { label: 'Sistem Informasi', value: '1487501232493826231' },
        { label: 'Teknik Elektro', value: '1487501675408392294' },
        { label: 'Teknik Kimia', value: '1487501813484748901' },
        { label: 'Teknik Kelautan', value: '1487519903228629173' },
        { label: 'Kedokteran', value: '1487502587568722224' },
        { label: 'Kedokteran Gigi', value: '1487502625820639344' },
        { label: 'Manajemen', value: '1487502947490467850' },
        { label: 'Akuntansi', value: '1487503007150247977' },
        { label: 'Ilmu Komunikasi', value: '1487503832027238532' },
        { label: 'Hubungan Internasional', value: '1487503874800484363' }
      ])
  );
};