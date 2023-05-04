const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const  { compare } = require('../configs/auth');
const { sign } = require("jsonwebtoken");

class SessionsController {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await knex("users").where({ email: email}).first();

        if (!user) {
            throw new AppError("wrong email or password", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError("wrong email or password", 401);
        }
    }
}

module.exports = SessionsController;