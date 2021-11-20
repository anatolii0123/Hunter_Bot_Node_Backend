const config = require("../../config")

const fetch = require("../../utils/fetch")
const crypto = require("../../utils/crypto")

const create = async () => {
}

const getRoles = async (guildId) => {
    const result = await fetch(`http://discord.com/api/v9/guilds/${guildId}/roles`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });

    return result.json();
}

module.exports = {
    create,
    getRoles,
}