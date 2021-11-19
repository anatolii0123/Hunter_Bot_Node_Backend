const app = require("express").Router();
const passport = require("passport");
const User = require("../../models/User");
const Guild = require("../../models/GuildSchema");
const config = require("../../config");
const crypto = require('../../utils/crypto');

const fetch = (...args) => {
    import ("node-fetch").then(({ default: fetch }) => fetch(...args));
}

async function getRoles(id) {
    const res = await fetch(`http://discord.com/api/v9/guilds/${id}/roles`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });

    return res.json();
}

async function addMemberToRole(guildId, userId, roleId){
    const res = await fetch(`http://discord.com/api/v9/guilds/${guildId}/members/${userId}/roles/${roleId}`, {
        method:"PUT",
        headers: {
            Authorization: `Bot ${crypto.decrypt(config.token)}`,
        },
    });
    return res.json();
}
app.get("/getroles", async(req, res) => {
    let id = req.query.id;
    let roles = await getRoles(id);
    return res.json();
})

app.post("/addmembertorole", async(req, res) => {
    let { guildId, userId, roleId } = req.body;

    let result = await addMemberToRole(guildId, userId, roleId);
    return result;
})

app.post("/setrole/:id", async(req, res)=> {
    console.log("setrole")
    let {role} = req.body;
    let serverId = req.params.id;
    console.log("setrole", serverId)

    return res.json({
        roleId: role,
        serverId: serverId
    })
})
module.exports = app;