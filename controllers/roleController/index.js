const roleService = require('../../services/roleService');

const get = async (req, res, next) => {
    let guildId = req.query.guildId
    let result = await roleService.getRoles(guildId)
    return result
}

// const create = async (req, res, next) => {
// }

// const update = async (req, res, next) => {

// }

// const remove = async (req, res, next) => {

// }

module.exports = {
    get,
    // create,
    // update,
    // remove,
}