const connection = require("../../connection");


const selectAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM users'
    );
    return result;
};

module.exports = {
    selectAll
};