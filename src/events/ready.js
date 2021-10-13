const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
	name: 'ready',
	once: true,
	async execute() {
		console.log(`Ready!`);
	},

};