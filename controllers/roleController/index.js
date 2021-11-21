const roleService = require('../../services/roleService');

const get = async (req, res, next) => {
    let guildId = req.query.guildId

    let discordRoles = roleService.getRolesFromDiscord(guildId)
    let dbRoles = roleService.getRolesFromDB(guildId)

    let result = [];
    discordRoles.filter((discordRole) => discordRole.name !== '@everyone' && !discordRole.tags).map((discordRole) => {

        if (dbRoles) {
            let dbRole = dbRoles.find(val => val.id === discordRole.id)
            if (dbRole) {
                discordRole.price = dbRole.price
            } else {
                discordRole.price = null
            }
        } else {
            discordRole.price = null
        }
        result.push(discordRole)
    })

    console.log("result role", result)
    res.json({
        roles: result
    })
}

const modifyRole = async (req, res, next) => {
    const { role } = req.body;

    let roleObj = await roleService.findRole(role.id);
    if (roleObj)
        roleObj = await roleService.updateRole(roleObj, role);
    else
        roleObj = await roleService.createRole(role);
    res.json(roleObj);
}

module.exports = {
    get,
    modifyRole,
}