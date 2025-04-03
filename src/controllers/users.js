const { findAll } = require("../services/users");

const SECRET_KEY = "157";

const getAll = async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization || authorization !== SECRET_KEY) {
        return res.status(401).json({ error: "Não autorizado!" });
    };

    const result = await findAll();
    res.status(200).json(result);
};

module.exports = {
    getAll
};