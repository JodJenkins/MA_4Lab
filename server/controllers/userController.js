const {User} = require('../models/models')

class userController{
    async get(req, res){
        //const {userID} = req.body
        //const {userID} = 0
        let user;
        user = await User.findAll()
        //user = await User.findAll({where:{userID}})
        return res.json(user)
    }

    async registration(req, res) {
        //const {name, surname, email, password} = req.body
        const name = 'Petr'
        const surname = 'Petrov'
        const email = 'petrpetrovn@jmail.com'
        const password = 'qwertyuiop'

        const user = await User.create({email, password, name, surname})
        return res.json(user)
    }
}

module.exports = new userController()