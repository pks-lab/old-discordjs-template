import { Interaction } from 'discord.js';

export default async (interaction: Interaction) => {
	if (!interaction.isCommand()) {
		return;
	}

	interaction.reply('This is a command!');
};
