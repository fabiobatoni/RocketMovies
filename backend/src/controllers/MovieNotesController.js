const knex =  require("../database/knex");

class MovieNotesController {
    async create(req, res) {
        const { title, description, rating, tags } = req.body;
        const user_id = req.user.id;

        const note_id = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id,
        });

        const tagsInsert = tags.map(name => {
            return{
                note_id,
                name,
                user_id
            }
        });

        await knex("movie_tags").insert(tagsInsert);

        res.json();
    }

    async show(req, res) {
        const { id } = req.params;

        const movieNotes = await knex("movie_notes").where({id}).first();
        const movieTags = await knex("movie_tags").where({note_id: id}).orderBy("name");

        return res.json({
            ...movieNotes,
            movieTags,
        });
    }

    async delete(req,res) {
        const { id } = req.params;

        await knex("movie_notes").where({ id }).delete();

        return res.json();
    }

    async index(req, res) {
        const {title, movieTags} = req.query;

        const user_id = req.user.id;

        let movieNotes;

        if(movieTags) {
            const filterMovieTags = movieTags.split(',').map(movieTag => movieTag.trim());

            movieNotes = await knex("movie_tags")
            .select([
                "movie_notes.id",
                "movie_notes.title",
                "movie_notes.user_id",
            ])
            .where("movie_notes.id", user_id)
            .whereLike("movie_notes.title", `%${title}%`)
            .whereIn("name", filterMovieTags)
            .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
            .orderBy("movie_notes.title")
        } else {
            movieNotes = await knex("movie_notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`)
            .orderBy("title");
        }

        const userMovieTags = await knex("movie_tags").where({user_id});
        const MovieNotesWithTags = movieNotes.map(note => {
            const noteTags = userMovieTags.filter(tag => tag.note_id === note.id);

            return {
                ...note,
                movieTags: noteTags
            }
        });

        return res.json(MovieNotesWithTags)
    }
}

module.exports = MovieNotesController;