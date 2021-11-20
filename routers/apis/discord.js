const app = require("express").Router();
const passport = require("passport");
const User = require("../../models/UserSchema");
const GuildSchema = require("../../models/GuildSchema");
const config = require("../../config");
const crypto = require('../../utils/crypto');
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getBotGuilds() {
    const res = await fetch("http://discord.com/api/v9/users/@me/guilds", {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}

async function getMembers(id) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${id}/members?limit=1000`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}

async function getDetailsServer(id) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });

    return res.json();
}

async function getChannels(id) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${id}/channels`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}

function getServerPermission(ug) {
    return ug.filter((userGuilds) => (userGuilds.permissions & 0x20) === 0x20);
}

app.get("/", (req, res) => {
    res.send("good");
});

app.get("/guilds", async (req, res) => {

    if (req.user) {
        const user = await User.findOne({ discordId: req.user.discordId });
        const userGuilds = user.guilds;
        const botGuilds = await getBotGuilds();

        if (user) {
            let permissionHasGuilds = userGuilds.filter((userguild) =>
                botGuilds.find(
                    (botguild) =>
                        botguild.id === userguild.id &&
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
});

app.get("/getguildinfo", async (req, res) => {
    console.log("getguildinfo", req.query.id)

    let id = req.query.id;
    let members = await getMembers(id);
    let channels = await getChannels(id)
    let detail = await getDetailsServer(id)

    const membersfiltring = members.filter(member => !member.user.bot)
    return res.json({
        members: membersfiltring.length,
        channels: channels,
        region: detail.region,
        roles: detail.roles,
    })
})


app.get("/prefixs", async (req, res) => {
    let id = req.query.id;
    GuildSchema.findOne({ guildID: id }, (err, data) => {
        if (err) console.log(err);
        if (data) {
            res.json({ prefix: data.prefix });
        }
    });
});

app.post("/prefixs", async (req, res) => {
    let { prefix, id } = req.body;
    try {
        const findUser = await GuildSchema.findOneAndUpdate({ guildID: id }, {
            prefix
        }, { new: true })
        res.json({ msg: 'done', findUser })
    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
});


module.exports = app;