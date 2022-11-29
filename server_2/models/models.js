const sequelize = require('../db')
const {DataType, DataTypes} = require('sequelize')

const Lesson = sequelize.define('lesson', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true,},
    text: {type: DataTypes.STRING},
})

module.exports = {
    Lesson
}