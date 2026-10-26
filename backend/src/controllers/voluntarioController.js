import * as voluntarioService from '../services/voluntarioService.js';

function listar(req, res, next) {
  try {
    res.status(200).json(voluntarioService.listar(req.query.campanhaId));
  } catch (err) {
    next(err);
  }
}

function criar(req, res, next) {
  try {
    const voluntario = voluntarioService.criar(req.body);
    res.status(201).json({ mensagem: 'Inscrição realizada com sucesso', voluntario });
  } catch (err) {
    next(err);
  }
}

export { listar, criar };