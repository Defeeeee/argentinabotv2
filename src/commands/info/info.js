const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Returns info basedo on input")
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Gets info of member mentioned')
                .addUserOption(option => option.setName("target").setDescription("User mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target")
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setTitle(`Informacion de ${user.username}`)
                    .setURL("https://pogramacion.netlify.app")
                    .setThumbnail(user.displayAvatarURL())
                    .setColor("AQUA")
                    .addFields(
                        { name: `Username:`, value: `${user.username}`},
                        { name: `Tag:`, value: `#${user.discriminator}`},
                        { name: `ID:`, value: `${user.id}`}
                    )
                    .setTimestamp()
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed] });
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`Informacion de ${interaction.user.username}`)
                    .setURL("https://pogramacion.netlify.app")
                    .setThumbnail(user.displayAvatarURL())
                    .setColor("AQUA")
                    .addFields(
                        { name: `Username:`, value: `${interaction.user.username}`},
                        { name: `Tag:`, value: `#${interaction.user.discriminator}`},
                        { name: `ID:`, value: `${interaction.user.id}`}
                    )
                    .setTimestamp()
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed1] });
            }
        } else if (interaction.options.getSubcommand() == "server") {
            const serverEmbed1 = new MessageEmbed()
                    .setTitle(`Informacion del server ${interaction.guild.name}`)
                    .setURL("https://pogramacion.netlify.app")
                    .setThumbnail(interaction.guild.iconURL())
                    .setColor("AQUA")
                    .addFields(
                        { name: `Miembros:`, value: `${interaction.guild.memberCount}`},
                        { name: `ID:`, value: `${interaction.guild.id}`}
                    )
                    .setTimestamp()
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

            await interaction.reply({ embeds: [serverEmbed1] });
        } else {
            await interaction.reply("No se uso ningun sub comando")
        }
    },
};