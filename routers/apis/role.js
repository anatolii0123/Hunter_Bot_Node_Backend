const app = require("express").Router();
const config = require("../../config");
const crypto = require('../../utils/crypto');

const fetch = (...args) => {
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
}

async function getRoles(guildId) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${guildId}/roles`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });

    return res.json();
}

async function addMemberToRole(guildId, userId, roleId) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${guildId}/members/${userId}/roles/${roleId}`, {
        method: "PUT",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}

app.post("/getroles", async (req, res) => {
    let { guildId } = req.body;
    let roles = await getRoles(guildId);
    return res.json({
        roles: roles,
    });
})

app.post("/addmembertorole", async (req, res) => {
    let { guildId, userId, roleId } = req.body;

    let result = await addMemberToRole(guildId, userId, roleId);
    return result;
})

app.post("/setrole", async (req, res) => {
    let { guildId, role } = req.body;

    return res.json({
        role: role,
        guildId: guildId
    })
})

module.exports = app;