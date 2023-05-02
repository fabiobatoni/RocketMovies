const { Router } = require("express");

const usersRoutes = require("./users.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const movieTagsRoutes = require("./movieTags.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movie_notes", movieNotesRoutes);
routes.use("/movie_tags", movieTagsRoutes);

module.exports = routes;