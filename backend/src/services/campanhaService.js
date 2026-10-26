import { campanhas } from '../data/database.js';
import AppError from '../utils/AppError.js';

function listar(filtros = {}){
    let resultado = campanhas;
    if(filtros.status){
        resultado = resultado.filter(c => c.status === filtros.status);
    }
    if(filtros.categoria){
        resultado = resultado.filter(c => c.categoria === filtros.categoria);
    }

    return resultado;
}

function buscarPorId(id){
    return campanhas.find(c  => c.id === Number(id));
}

function criar(dados) {
    const erros = [];
    if (!dados.titulo || dados.titulo.trim().length < 3){
        erros.push('Título deve ter ao menos 3 caracteres');
    }
    if (!dados.descricao){
        erros.push('Descrição é obrigatória');
    }
    if (!dados.metaValor || Number(dados.metaValor) <= 0){
        erros.push('O valor de meta deve ser maior que zero');
    }
    if(erros.length){
        throw new AppError('Dados inválidos', 400, erros);
    }

    const nova = {
        id: campanhas.length ? Math.max(...campanhas.map(c => c.id)) + 1 : 1,
        titulo: dados.titulo.trim(),
        descricao: dados.descricao,
        categoria: dados.caregoria,
        metaValor: Number(dados.metaValor),
        valorArrecadado: 0,
        dataInicio: new Date().toISOString().slice(0, 10),
        dataFim: dados.dataFim || null,
        status: 'ativa',
        vagasVoluntarios: Number(dados.vagasVoluntarios) || 0,
        imagemUrl: dados.imagemUrl || null
    };
    campanhas.push(nova);
    return nova;
}

export { listar, buscarPorId, criar };