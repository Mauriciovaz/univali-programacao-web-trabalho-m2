import * as doacaoService from '../services/doacaoService.js';

function listar(req, res, next) {
    try {
        res.status(200).json(doacaoService.listar(req.query.campanhaId));
    } catch (err) {
        next(err);
    }
}

function criar(req, res, next) {
    try{
        const doacao = doacaoService.criar(req.body);
        res.status(201).json({ mensagem: 'Doação registrada com sucesso', doacao });
    } catch (err) {
        next(err);
    }
}

export { listar, criar };