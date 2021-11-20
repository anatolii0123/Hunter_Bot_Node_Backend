const config = require("../../config")

const fetch = require("../../utils/fetch")
const crypto = require("../../utils/crypto")

const getRoles = async (guildId) => {
    console.log("id", guildId)
    const res = await fetch(`http://discord.com/api/v9/guilds/${guildId}/roles`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });

    return res.json()
}

module.exports = {
    getRoles,
}