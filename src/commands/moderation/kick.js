const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const {
    Permissions
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kickea a un miembro")
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Kickea al usuario mencionado')
                .addUserOption(option => option.setName("target").setDescription("User mentioned"))),

    async execute(interaction) {
        const user = interaction.options.getMember('target');
        if (interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            if (user) {
                await user.kick();
                await user.send(`Fuiste kickead@ de ${interaction.guild.name}`)
                await interaction.reply(`Se ha kickeado correctamente al usuario`)
            } else {
                interaction.reply('No mencionaste a nadie.')
            }
        } else {
            interaction.reply('No tenes los permisos suficientes.')
        }
    },
};