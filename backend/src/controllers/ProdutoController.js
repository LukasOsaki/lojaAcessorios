const Produto = require("../models/Produto");

module.exports = {
    async index(req, res) {
        const produto = await Produto.find();
        return res.json(produto);
    },

    async store(req, res) {
        const {nome, valor} = req.body;

        let produto = await Produto.findOne({nome});

        if (!produto) {
            produto = await Produto.create({ nome, valor});
        }

        return res.json(produto);
    }
};