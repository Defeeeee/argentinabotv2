const {
    SlashCommandBuilder
} = require("@discordjs/builders");
const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("invitar")
        .setDescription("Genera una invitacion del bot!"),
    async execute(interaction, client) {
        inv = client.generateInvite({ scopes: ['bot', 'applications.commands'], permissions: [Permissions.FLAGS.ADMINISTRATOR] })
        const userEmbed = new MessageEmbed()
            .setTitle(`Invitame aca`)
            .setURL(`${inv}`)
        await interaction.reply({ embeds: [userEmbed] })
    },
};