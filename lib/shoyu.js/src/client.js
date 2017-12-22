var EventEmitter = require('events')
module.exports = 
class Client {
		constructor(options) {
			if(!options) { return console.log("Error, use options")}
			var discord = require('discord.js')
			var c = new discord.Client()
			if(!options.token) return console.log("Error, type a token into your options")
			c.login(options.token)

			var client = new EventEmitter()

			client.options = c.options
			client.rest = c.rest
			client.ws = c.ws
			client.resolver = c.resolver
			client.actions = c.actions
			client.voice = c.voice
			client.shard = c.shard
			client.users = c.users
			client.guilds = c.guilds
			client.channels = c.channels
			client.presences = c.presences
			client.user = c.user
			client.readyAt = c.readyAt
			client.broadcasts = c.broadcasts
			client.pings = c.pings
			client._timeouts = c._timeouts
			c.on('channelCreate', (...args) => {client.emit('channelCreate', ...args)})
			c.on('channelDelete', (...args) => {client.emit('channelDelete', ...args)})
			c.on('channelPinsUpdate', (...args) => {client.emit('channelPinsUpdate', ...args)})
			c.on('channelUpdate', (...args) => {client.emit('msg', ...args)})
			c.on('clientUserGuildSettingsUpdate', (...args) => {client.emit('clientUserGuildSettingsUpdate', ...args)})
			c.on('clientUserSettingsUpdate', (...args) => {client.emit('clientUserSettingsUpdate', ...args)})
			c.on('debug', (...args) => {client.emit('warns', ...args)})
			c.on('disconnect', (...args) => {client.emit('disconnect', ...args)})
			c.on('emojiCreate', (...args) => {client.emit('emojiCreate', ...args)})
			c.on('emojiDelete', (...args) => {client.emit('emojiDelete', ...args)})
			c.on('emojiUpdate', (...args) => {client.emit('emojiUpdate', ...args)})
			c.on('error', (...args) => {client.emit('warns', ...args)})
			c.on('guildBanAdd', (...args) => {client.emit('guildBanAdd', ...args)})
			c.on('guildBanRemove', (...args) => {client.emit('guildBanRemove', ...args)})
			c.on('guildCreate', (...args) => {client.emit('guildCreate', ...args)})
			c.on('guildDelete', (...args) => {client.emit('guildDelete', ...args)})
			c.on('guildMemberAdd', (...args) => {client.emit('guildMemberAdd', ...args)})
			c.on('guildMemberAvailable', (...args) => {client.emit('guildMemberAvailible', ...args)})
			c.on('guildMemberRemove', (...args) => {client.emit('guildMemberRemove', ...args)})
			c.on('guildMemberChunk', (...args) => {client.emit('guildMemberChunk', ...args)})
			c.on('guildMemberUpdate', (...args) => {client.emit('guildMemberUpdate', ...args)})
			c.on('guildUnavailible', (...args) => {client.emit('guildUnavailible', ...args)})
			c.on('guildUpdate', (...args) => {client.emit('guildUpdate', ...args)})
			c.on('message', (...args) => {client.emit('msg', ...args)})
			c.on('messageDelete', (...args) => {client.emit('msgDelete', ...args)})
			c.on('messageDeleteBulk', (...args) => {client.emit('msgDeleteBulk', ...args)})
			c.on('messageReactionAdd', (...args) => {client.emit('msgReactionAdd', ...args)})
			c.on('messageReactionRemove', (...args) => {client.emit('msgReactionRemove', ...args)})
			c.on('messageReactionRemoveAll', (...args) => {client.emit('msgReactionRemoveAll', ...args)})
			c.on('messageUpdate', (...args) => {client.emit('msgUpdate', ...args)})
			c.on('presenceUpdate', (...args) => {client.emit('presenceUpdate', ...args)})
			c.on('roleCreate', (...args) => {client.emit('roleCreate', ...args)})
			c.on('roleDelete', (...args) => {client.emit('roleDelete', ...args)})
			c.on('roleUpdate', (...args) => {client.emit('roleUpdate', ...args)})
			c.on('userNoteUpdate', (...args) => {client.emit('userNoteUpdate', ...args)})
			c.on('userUpdate', (...args) => {client.emit('userUpdate', ...args)})
			c.on('voiceStateUpdate', (...args) => {client.emit('voiceStateUpdate', ...args)})
			c.on('warn', (...args) => {client.emit('warns', ...args)})

			c.on('ready', (...args) => {
				client._events = c._events
				client.options = c.options
				client.rest = c.rest
				client.ws = c.ws
				client.resolver = c.resolver
				client.actions = c.actions
				client.voice = c.voice
				client.shard = c.shard
				client.users = c.users
				client.guilds = c.guilds
				client.channels = c.channels
				client.presences = c.presences
				client.user = c.user
				client.readyAt = c.readyAt
				client.broadcasts = c.broadcasts
				client.pings = c.pings
				client._timeouts = c._timeouts


				setTimeout(function(){ 
				client.emit('start', ...args)
				}, 3000);

			})

			return client

				

		}
}