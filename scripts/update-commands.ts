import env from '../src/core/env';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { SlashCommandBuilder } from '@discordjs/builders';

// Direct Discord REST API reference needed to update commands.
const DISCORD_API = new REST({version: '9'}).setToken(env.get('botToken'));

// Unlike other bots, we only have 2 commands that do the same thing.
const COMMAND_TEST = new SlashCommandBuilder()
	.setName('test')
	.setDescription('Testing command!')
	.toJSON();
const COMMANDS = [COMMAND_TEST];

const start = async () => {
	// Register as a global command during production, but guild-specific during development.
	// https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands
	let route = Routes.applicationCommands(env.get('botClientId'));
	if (env.get('env') !== 'production') {
		route = Routes.applicationGuildCommands(env.get('botClientId'), env.get('devGuildId'));
	}

	// Execute and... well, that's pretty much it!
	await DISCORD_API.put(route, {body: COMMANDS});
	console.log(`Successfully registered ${COMMANDS.length} command(s)!`);
};

start().catch(console.error.bind(console));
