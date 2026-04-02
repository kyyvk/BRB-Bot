const { StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = () => {
  const menu = new StringSelectMenuBuilder()
    .setCustomId('select-prodi')
    .setPlaceholder('Pilih Program Studi')
    .addOptions([
      { label: "Matematika", value: "1487501135458861237" },
      { label: "Fisika", value: "1487501347636121690" },
      { label: "Kimia", value: "1487501406104453245" },
      { label: "Astronomi", value: "1487501437343760646" },
      { label: "Manajemen", value: "1487502902435254374" },
      { label: "Akuntansi", value: "1487502947490467850" },
      { label: "Bisnis Digital", value: "1487503039081349240" },
      { label: "Kewirausahaan", value: "1487503110233395292" },
      { label: "Kedokteran", value: "1487502518077620254" },
      { label: "Farmasi", value: "1487502625820639344" },
      { label: "Keperawatan", value: "1487502678014824658" },
      { label: "Gizi", value: "1487502771392352538" },
      { label: "Kebidanan", value: "1487502800429650070" },
      { label: "Teknik Informatika", value: "1487501706630529286" },
      { label: "Sistem Informasi", value: "1487502302221697024" },
      { label: "Artificial Intelligence", value: "1487502490059542538" },
      { label: "Keamanan Siber", value: "1487502411357622283" },
      { label: "Data Science", value: "1487502453719961811" },
    ]);

  return new ActionRowBuilder().addComponents(menu);
};