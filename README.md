# discord-bot
Just having fun creating Discord bots! :D
Register a new application on the [Discord Developer Portal](https://discord.com/developers/applications) and create a bot user. Then, invite the bot to your server using the OAuth2 URL generator.

## Setup

1. Clone the repository
2. Run `npm install`
3. Create a file called `.env` in the root directory
4. Fill in the following variables in the `.env` file:

```
BOT_TOKEN=""
BOT_CLIENT_ID=""
DEV_GUILD_ID=""
NODE_ENV="development"
```

5. Run `npm run script:commands` to register the slash commands
6. Run `npm run dev` to start the bot in development mode

## Environment Variables

You will need to fill in the following values using the tokens that Discord gives you: `BOT_TOKEN` and `BOT_CLIENT_ID`, and the `DEV_GUILD_ID` is the ID of the server you want to test the bot in.

## Commands

The bot currently has the following commands:

- `/test` - A test command to make sure the bot is working

To add a new command, update the `scripts/update-commands.ts` file and run `npm run script:commands` to register the new commands.
