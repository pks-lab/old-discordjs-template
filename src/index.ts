import { Client, Intents } from 'discord.js';
import env from '@/core/env';
import { DateTime } from 'luxon';
import command from './command';

/**
 * Prepares Discord client alongside dependencies and registers events.
 * This is the bot's entry point.
 */
let client: Client;
const start = async () => {
	client = new Client({
		intents: Intents.FLAGS.GUILD_MESSAGES
	});

	// Log in as our Discord bot and register our commands.
	await client.login(env.get('botToken'));

	// Aaaaannndddd BEGIN!!
	client.on('interactionCreate', command);
	client.on('ready', async () => {
		const readyDate = DateTime.fromJSDate(client.readyAt || new Date());
		console.log(`🤖 Bot is now ready at ${readyDate.toFormat('FFF')}`);
	});
};

/**
 * Gracefully stops our internal connections prior to shutting down. 
 * 
 * This ensures users' ongoing connections don't get suddenly yanked from them with a failure.
 * Rather, this stops accepting new connections while old ones complete.
 */
const stop = async () => {
	console.log(`\nBot is shutting down...`);
	client?.destroy();
	console.log(`💤 Bot shut down at ${DateTime.utc().toFormat('FFF')}`);
};

// Run server and catch potential errors in console
start().catch(console.error.bind(console));
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
