import { doacoes, doadores } from '../data/database.js';
import * as campanhaService from './campanhaService.js';
import AppError from '../utils/AppError.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function listar(campanhaId) {
  if (campanhaId) {
    return doacoes.filter(d => d.campanhaId === Number(campanhaId));
  }
  return doacoes;
}

function validar(dados){
  const erros = [];
  if(!dados.campanhaId){
    erros.push('Campanha é obrigatória');
  }
  if(!dados.nome || dados.nome.trim().length < 3){
    erros.push('Nome deve ter ao menos 3 caracteres');
  }
  if(!dados.email || !EMAIL_REGEX.test(dados.email)){
    erros.push('Email inválido');
  }
  if(!['dinheiro', 'item'].includes(dados.tipo)){
    erros.push(`Tipo deve ser 'dinheiro' ou 'item'`);
  }
  if(dados.tipo === 'dinheiro' && (!dados.valor || Number(dados.valor) <= 0)){
    erros.push('Valor inválido para doação em dinheiro')
  }
  if(dados.tipo === 'item' && !dados.descricao) {
    erros.push('Descrição é obrigatória');
  }
  if(erros.length){
    throw new AppError('Dados inválidos', 400, erros);
  }
}

function obterDoador({nome, email, telefone}){
  let doador = doadores.find(d => d.email === email);
  if (!doador) {
    doador = { id: doadores.length + 1, nome: nome.trim(), email, telefone: telefone || null };
    doadores.push(doador);
  }
  return doador;
}

function criar(dados) {
  validar(dados);

  const campanha = campanhaService.buscarPorId(dados.campanhaId);
  if(!campanha || campanha.status !== 'ativa'){
    throw new AppError('Campanha não está ativa para doação', 400);
  }

  const doador = obterDoador(dados);
  const valor = dados.tipo === 'dinheiro' ? Number(dados.valor) : 0;

  const nova = {
    id: doacoes.length ? Math.max(...doacoes.map(d => d.id)) + 1 : 1,
    campanhaId: campanha.id,
    doadorId: doador.id,
    tipo: dados.tipo,
    valor,
    descricao: dados.descricao || null,
    data: new Date().toISOString().slice(0, 10)
  };
  doacoes.push(nova);
  campanha.valorArrecadado += valor;

  return nova;
}

export { listar, criar };