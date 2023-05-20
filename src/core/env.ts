require('dotenv').config();
import convict from 'convict';

const env = convict({
	botToken: {
		doc: 'The bot token necessary to authenticate. Think of this as the Bot\'s password.',
		format: String,
		default: '',
		env: 'BOT_TOKEN'
	},
	botClientId: {
		doc: 'Client ID used for authenticating the bot.',
		format: String,
		default: '',
		env: 'BOT_CLIENT_ID'
	},
	devGuildId: {
		doc: 'The ID of the guild where the bot is running. This is used for development purposes.',
		format: String,
		default: '',
		env: 'DEV_GUILD_ID'
	},
	env: {
		doc: 'The application environment.',
		format: ['production', 'staging', 'local'],
		default: 'production',
		env: 'NODE_ENV'
	}
});
export default env;
