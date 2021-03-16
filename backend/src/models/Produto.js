const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
});

module.exports = mongoose.model('Produto', ProdutoSchema);