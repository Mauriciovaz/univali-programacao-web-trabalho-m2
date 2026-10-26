import { voluntarios } from '../data/database.js';
import * as campanhaService from './campanhaService.js';
import AppError from '../utils/AppError.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function listar(campanhaId) {
  if (campanhaId) {
    return voluntarios.filter(v => v.campanhaId === Number(campanhaId));
  }
  return voluntarios;
}

function criar(dados) {
  const erros = [];
  if (!dados.campanhaId) {
    erros.push('Campanha é obrigatória');
  } 
  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.push('Nome deve ter ao menos 3 caracteres');
  } 
  if (!dados.email || !EMAIL_REGEX.test(dados.email)) {
    erros.push('Email inválido');
  } 
  if (erros.length) {
    throw new AppError('Dados inválidos', 400, erros);
  } 

  const campanha = campanhaService.buscarPorId(dados.campanhaId);

  if (campanha.status !== 'ativa') throw new AppError('Campanha encerrada', 400);
  if (campanha.vagasVoluntarios <= 0) throw new AppError('Não há vagas de voluntariado', 400);
  const jaInscrito = voluntarios.some(v => v.campanhaId === campanha.id && v.email === dados.email);
  if (jaInscrito) throw new AppError('Voluntário já inscrito nesta campanha', 409);

  const novo = {
    id: voluntarios.length ? Math.max(...voluntarios.map(v => v.id)) + 1 : 1,
    campanhaId: campanha.id,
    nome: dados.nome.trim(),
    email: dados.email,
    telefone: dados.telefone || null,
    disponibilidade: dados.disponibilidade || null
  };
  voluntarios.push(novo);
  campanha.vagasVoluntarios -= 1;

  return novo;
}

export { listar, criar };