import * as campanhaService from '../services/campanhaService.js';

function listar(req, res, next) {
    try {
        const campanhas = campanhaService.listar(req.query);
        res.status(200).json(campanhas);
    } catch(err) {
        next(err);
    }
}

function buscaPorId(req, res, next) {
    try {
        const campanha = campanhaService.buscarPorId(req.params.id);
        if(!campanha) {
            res.status(204).json({});
        }else{
            res.status(200).json(campanha);
        }
    } catch(err) {
        next(err);
    }
}

function criar(req, res, next) {
    try {
        const campanha = campanhaService.criar(req.body);
        res.status(201).json(campanha);
    } catch(err) {
        next(err);
    }
}

export { listar, buscaPorId, criar };