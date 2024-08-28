const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Botun ping değerini gösterir',
  execute(message, args) {
    const pingEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('🏓 Pong!')
      .setDescription('Ping ölçülüyor...')
      .setTimestamp();

    message.channel.send({ embeds: [pingEmbed] }).then(sent => {
      const pingValue = sent.createdTimestamp - message.createdTimestamp;
      
      pingEmbed.setDescription(`Bot gecikmesi: ${pingValue}ms\nAPI gecikmesi: ${message.client.ws.ping}ms`);
      sent.edit({ embeds: [pingEmbed] });
    });
  },
};
