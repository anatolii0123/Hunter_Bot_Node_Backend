const roleService = require('../../services/roleService');

const get = async (req, res, next) => {
    let guildId = req.query.guildId

    let discordRoles = roleService.getRolesFromDiscord(guildId)
    let dbRoles = roleService.getRolesFromDB(guildId)

    let result = [];
    console.log("get discord roles", discordRoles);
    discordRoles.filter((val) => val.name !== '@everyone' && !val.tags).map((val) => {

        if (dbRoles) {
            let dbRole = dbRoles.find(val => val.id === val.id)
            if (dbRole) {
                val.price = dbRole.price
            } else {
                val.price = null
            }
        } else {
            val.price = null
        }
        result.push(val)
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