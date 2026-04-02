const { Events } = require('discord.js');

// =========================
// 📂 NAVIGATION
// =========================
if (interaction.customId === 'select-category') {
  if (interaction.values[0] === 'ptn') {
    return interaction.update({
      content: '🎓 Pilih PTN:',
      components: [require('../menus/ptnMenu')()]
    });
  }

  if (interaction.values[0] === 'pts') {
    return interaction.update({
      content: '🏫 Pilih PTS:',
      components: [require('../menus/ptsMenu')()]
    });
  }

  if (interaction.values[0] === 'prodi') {
    return interaction.update({
      content: '📚 Pilih Prodi:',
      components: [require('../menus/prodiMenu')()]
    });
  }
}

// 👉 MASUKKAN SEMUA ROLE ID UNIVERSITAS DI SINI
const UNIV_ROLE_IDS = [
  '1487362915031056540',
  '1487358938209980568',
  '1487358828709281842',
  '1487359096654008370',
  '1487359265902559282',
  '1487360308602343434',
  '1487360519789744138',
  '1487360989811708005',
  '1487363715794731088',
  '1487369577309409372',
  '1487361903775977502',
  '1487363835193983066',
  '1487359184813949059',
  '1487360127316131993',
  '1487363295642914829',
  '1487364868070969394',
  '1487365036690374729',
  '1487365160099119295',
  '1487364227206484019'
];

// 👉 MASUKKAN SEMUA ROLE ID PRODI DI SINI
const PRODI_ROLE_IDS = [
  '1487501135458861237',
  '1487501232493826231',
  '1487501301834059888',
  '1487501347636121690',
  '1487501406104453245',
  '1487501437343760646',
  '1487501482524803224',
  '1487501507527053497',
  '1487501547339514106',
  '1487501586090692819',
  '1487501675408392294',
  '1487501706630529286',
  '1487501772758192209',
  '1487501813484748901',
  '1487501848649928804',
  '1487501888180977881',
  '1487501945815040111',
  '1487501982817321112',
  '1487502023552139445',
  '1487502087742030037',
  '1487502125595496558',
  '1487502145619234907',
  '1487519903228629173',
  '1487502302221697024',
  '1487502339546943640',
  '1487502372962832394',
  '1487502411357622283',
  '1487502453719961811',
  '1487502490059542538',
  '1487502518077620254',
  '1487502587568722224',
  '1487502625820639344',
  '1487502678014824658',
  '1487502727469600828',
  '1487502771392352538',
  '1487502800429650070',
  '1487502902435254374',
  '1487502947490467850',
  '1487503007150247977',
  '1487503039081349240',
  '1487503110233395292',
  '1487503202768388205',
  '1487503713919566069',
  '1487503780860924025',
  '1487503832027238532',
  '1487503874800484363',
  '1487503918324777090',
  '1487503951417970989',
  '1487503980505596014',
  '1487504016832205060',
  '1487504084138459177',
  '1487504139671048295',
  '1487504201247359138',
  '1487504242372644975',
  '1487504267819487282',
  '1487504323884875948',
  '1487504414750281890',
  '1487504458567909428',
  '1487504523252732075',
  '1487504569930879036',
  '1487504631327363092',
  '1487504678533988362',
  '1487504715573891102',
  '1487504757194096660',
  '1487504800194232360',
  '1487504835745022164',
  '1487504874282156104',
  '1487504912899379230',
  '1487504962375389214',
  '1487505014292353265',
  '1487505046710124564',
  '1487505089827574020',
  '1487505128817688919',
  '1487505161822670951',
  '1487530361318805656',
  '1487530540809716023',
  '1487530587395723365',
  '1487698141313634444'
];

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isStringSelectMenu()) return;

    const member = interaction.member;
    const selectedRoleId = interaction.values[0];

    try {

      // =========================
      // 🏫 UNIVERSITAS (LIMIT 1)
      // =========================
      if (interaction.customId === 'select-univ') {

        const hasRole = member.roles.cache.has(selectedRoleId);

        // 👉 kalau klik role yang sama → remove
        if (hasRole) {
          await member.roles.remove(selectedRoleId);

          return interaction.reply({
            content: '❌ Role universitas dilepas!',
            ephemeral: true
          });
        }

        // 👉 remove semua role univ lama
        const rolesToRemove = member.roles.cache.filter(role =>
          UNIV_ROLE_IDS.includes(role.id)
        );

        if (rolesToRemove.size > 0) {
          await member.roles.remove(rolesToRemove);
        }

        // 👉 add role baru
        await member.roles.add(selectedRoleId);

        return interaction.reply({
          content: '✅ Role universitas berhasil diganti!',
          ephemeral: true
        });
      }

      // =========================
      // 🎓 PRODI (MULTI TOGGLE)
      // =========================
      if (interaction.customId === 'select-prodi') {

        const hasRole = member.roles.cache.has(selectedRoleId);

        if (hasRole) {
          await member.roles.remove(selectedRoleId);

          return interaction.reply({
            content: '❌ Role prodi dilepas!',
            ephemeral: true
          });
        } else {
          await member.roles.add(selectedRoleId);

          return interaction.reply({
            content: '✅ Role prodi ditambahkan!',
            ephemeral: true
          });
        }
      }

    } catch (error) {
      console.error('❌ Role Error:', error);

      return interaction.reply({
        content: '❌ Terjadi error saat mengatur role!',
        ephemeral: true
      });
    }
  }
};