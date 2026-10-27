const campanhas = [
      {
    id: 1,
    titulo: 'Agasalho Solidário 2026',
    descricao: 'Arrecadação de roupas de frio e cobertores para famílias do bairro Paranaguamirim.',
    categoria: 'roupas',          // roupas | alimentos | dinheiro | voluntariado
    metaValor: 5000,
    valorArrecadado: 1850,
    dataInicio: '2026-05-01',
    dataFim: '2026-07-31',
    status: 'ativa',              // ativa | encerrada
    vagasVoluntarios: 10,
    imagemUrl: 'https://placehold.co/600x300?text=Agasalho'
  },
  {
    id: 2,
    titulo: 'Cesta Básica para Todos',
    descricao: 'Montagem e distribuição de cestas básicas mensais para 80 famílias cadastradas.',
    categoria: 'alimentos',
    metaValor: 12000,
    valorArrecadado: 7300,
    dataInicio: '2026-03-01',
    dataFim: '2026-12-20',
    status: 'ativa',
    vagasVoluntarios: 15,
    imagemUrl: 'https://placehold.co/600x300?text=Cesta+Basica'
  },
  {
    id: 3,
    titulo: 'Reforma da Sede Comunitária',
    descricao: 'Mutirão para pintura e pequenos reparos na sede da associação de moradores.',
    categoria: 'voluntariado',
    metaValor: 3000,
    valorArrecadado: 3000,
    dataInicio: '2026-01-10',
    dataFim: '2026-02-28',
    status: 'encerrada',
    vagasVoluntarios: 0,
    imagemUrl: 'https://placehold.co/600x300?text=Reforma'
  }
];

const doadores = [
  { id: 1, nome: 'Maria Souza', email: 'maria.souza@email.com', telefone: '(47) 99999-1111' },
  { id: 2, nome: 'João Pereira', email: 'joao.pereira@email.com', telefone: '(47) 98888-2222' }
];

const doacoes = [
  { id: 1, campanhaId: 1, doadorId: 1, tipo: 'dinheiro', valor: 150, descricao: null, data: '2026-05-10' },
  { id: 2, campanhaId: 2, doadorId: 2, tipo: 'item', valor: 0, descricao: '10 kg de arroz', data: '2026-06-02' }
];

const voluntarios = [
  { id: 1, campanhaId: 2, nome: 'Ana Lima', email: 'ana.lima@email.com', telefone: '(47) 97777-3333', disponibilidade: 'sabado' }
];

export { campanhas, doadores, doacoes, voluntarios };