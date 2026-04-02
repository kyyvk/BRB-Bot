const mainMenu = require('../menus/mainMenu');

module.exports = {
  name: 'setup',
  async execute(message) {
    await message.channel.send({
      content: '📌 Pilih Role Kamu:',
      components: [mainMenu()]
    });
  }
};