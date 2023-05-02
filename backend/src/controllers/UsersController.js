const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const knex = require('../database/knex');

class UsersController {
    async create(req, res) {
        const {name, email, password, avatar} = req.body;

        const checkUserExist = await knex("users").where({email: email});

        if(checkUserExist.length > 0) {
            throw new AppError("User already exists.");
        }

        const hashedPassword = await hash(password, 8);

        const newUser = await knex("users").insert({
            name,
            email,
            password: hashedPassword,
            avatar
        })

        return res.status(201).json();
    }

    async update(req, res) {
        const {name, email, password, old_password} = req.body;
        const { id } = req.params;

        const user = await knex("users").where({id: id});

        if(user.length === 0) {
            throw new AppError("User not found");
        }

        const userWithUpdatedEmail = await knex("users").where({email: email});

        if(userWithUpdatedEmail.length === 1) {
            throw new AppError("This email already in use");
        }

        if(password && !old_password) {
            throw new AppError("You need to enter the old password to set the new password. ");
        }


        const hashedPassword = await hash(password, 8);

        const userUpdate = await knex("users")
        .where({id})
        .update({
            name,
            email,
            password: hashedPassword,
            update_at: new Date()
        });

        return res.status(200).json();

    }

}

module.exports = UsersController;