const { selectAll } = require("../models/users");

const findAll = async () => {
    const result = await selectAll();
    return result;
};

module.exports = {
    findAll
};