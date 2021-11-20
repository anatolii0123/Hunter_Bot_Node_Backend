const config = require("../../config")

const fetch = require("../../utils/fetch")
const crypto = require("../../utils/crypto")

// Model
const UserSchema = require("../../models/UserSchema")
const GuildSchema = require("../../models/GuildSchema")
// Model

const getOwnerGuilds = async () => {
    const res = await fetch("http://discord.com/api/v9/users/@me/guilds", {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}

const getServerPermission = (userGuilds) => {
    return userGuilds.filter((ug) => (ug.permissions & 0x20) === 0x20);
}

const getGuilds = async (req) => {
    if (req.user) {
        const user = await UserSchema.findOne({ discordId: req.user.discordId });
        const userGuilds = user.guilds;
        const ownerGuilds = await getOwnerGuilds();

        if (user) {
            let permissionHasGuilds = userGuilds.filter((userguild) =>
                ownerGuilds.find(
                    (ownerGuild) =>
                        ownerGuild.id === userguild.id &&
                        (userguild.permissions & 0x20) === 0x20
                )
            );

            let data = getServerPermission(userGuilds);
            let permissionNoGuilds = data.filter((item) =>
                permissionHasGuilds.every((item2) => item2.id != item.id)
            );

            res.json({ permissionNoGuilds: permissionNoGuilds, permissionHasGuilds: permissionHasGuilds, msg: "authorized" });
        }
    } else {
        res.json({ msg: "unauthorized" });
    }
}

module.exports = {
    getGuilds,
}