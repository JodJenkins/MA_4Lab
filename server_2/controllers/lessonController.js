const {Lesson} = require('../models/models')

class lessonController{
    async get(req, res){
        let lesson;
        lesson = await Lesson.findAll()
        return res.json(lesson)
    }

    async createLesson(req, res) {
        const title = 'Alphabet'
        const text = 'A B C D E F...'

        const lesson = await Lesson.create({title, text})
        return res.json(lesson)
    }
}

module.exports = new lessonController()