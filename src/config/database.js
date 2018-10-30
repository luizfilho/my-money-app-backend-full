const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'

module.exports = mongoose.connect(url, {
    auth: {
        user: MONGO_DB_USER,
        password: MONGO_DB_PASSWORD
    },
    useNewUrlParser: true
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigátorio!"
mongoose.Error.messages.Number.min =
    " O '{VALUE}' informado é menor que o limite  de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'."
