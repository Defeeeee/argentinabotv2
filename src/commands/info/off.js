const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const {
    Permissions
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("off")
        .setDescription("Apaga el bot"),
    async execute(interaction) {
        if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            console.log('Apagando bot, admin ejecuto el comando off')
            await interaction.reply("Me apago!");
            process.exit()
        } else {
            await interaction.reply('No tenes permisos de Administrador')
        }
    },
};