const { MessageEmbed } = require("discord.js")

module.exports= {
    name: "uptime",
    description: "Tell you how long the bot has been online",
    usage: "*uptime",
    async run (bot, message, args) {

        message.delete({ timeout: 0 })

        let m = await message.channel.send("Checking Uptime...")

        const e = new MessageEmbed()
        .setTitle("Uptime")
        .setDescription(`I have been online for:\n${this.bot.uptime}`)

        await m.edit(e)
    }
}