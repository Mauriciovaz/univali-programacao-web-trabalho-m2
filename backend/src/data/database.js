const campanhas = [
  {
    id: 1,
    titulo: 'Agasalho Solidário 2026',
    descricao: 'Arrecadação de roupas de frio e cobertores para famílias do bairro Paranaguamirim.',
    categoria: 'roupas',          // roupas | alimentos | dinheiro | voluntariado
    metaValor: 5000,
    valorArrecadado: 1600,
    dataInicio: '2026-05-01',
    dataFim: '2026-07-31',
    status: 'encerrada',          // ativa | encerrada
    vagasVoluntarios: 0,
    imagemUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=300&fit=crop'
  },
  {
    id: 2,
    titulo: 'Cesta Básica para Todos',
    descricao: 'Montagem e distribuição de cestas básicas mensais para 80 famílias cadastradas.',
    categoria: 'alimentos',
    metaValor: 12000,
    valorArrecadado: 7000,
    dataInicio: '2026-03-01',
    dataFim: '2026-12-20',
    status: 'ativa',
    vagasVoluntarios: 12,
    imagemUrl: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=600&h=300&fit=crop'
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
    imagemUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=300&fit=crop'
  },
  {
    id: 4,
    titulo: 'Natal Sem Fome',
    descricao: 'Distribuição de ceias de Natal para famílias em situação de vulnerabilidade na região norte de Joinville.',
    categoria: 'alimentos',
    metaValor: 8000,
    valorArrecadado: 1150,
    dataInicio: '2026-10-15',
    dataFim: '2026-12-24',
    status: 'ativa',
    vagasVoluntarios: 18,
    imagemUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&h=300&fit=crop'
  },
  {
    id: 5,
    titulo: 'Material Escolar 2027',
    descricao: 'Compra de kits de material escolar para alunos da rede pública do bairro Itaum.',
    categoria: 'dinheiro',
    metaValor: 6000,
    valorArrecadado: 1700,
    dataInicio: '2026-10-01',
    dataFim: '2027-02-10',
    status: 'ativa',
    vagasVoluntarios: 6,
    imagemUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop'
  },
  {
    id: 6,
    titulo: 'Abrigo Patinhas Felizes',
    descricao: 'Custeio de ração, vacinas e castrações para os animais do abrigo municipal.',
    categoria: 'dinheiro',
    metaValor: 4000,
    valorArrecadado: 3000,
    dataInicio: '2026-08-01',
    dataFim: '2026-11-30',
    status: 'ativa',
    vagasVoluntarios: 3,
    imagemUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=300&fit=crop'
  },
  {
    id: 7,
    titulo: 'SOS Enchentes Vale do Itajaí',
    descricao: 'Ajuda emergencial para famílias desabrigadas pelas chuvas: água, colchões e itens de higiene.',
    categoria: 'dinheiro',
    metaValor: 20000,
    valorArrecadado: 18000,
    dataInicio: '2026-06-10',
    dataFim: '2026-08-31',
    status: 'encerrada',
    vagasVoluntarios: 0,
    imagemUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=300&fit=crop'
  },
  {
    id: 8,
    titulo: 'Horta Comunitária Vila Nova',
    descricao: 'Implantação e manutenção de uma horta comunitária com oficinas de plantio para crianças.',
    categoria: 'voluntariado',
    metaValor: 2000,
    valorArrecadado: 450,
    dataInicio: '2026-09-01',
    dataFim: '2026-12-15',
    status: 'ativa',
    vagasVoluntarios: 7,
    imagemUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop'
  },
  {
    id: 9,
    titulo: 'Dia das Crianças Solidário',
    descricao: 'Arrecadação de brinquedos e organização de uma festa para crianças da comunidade.',
    categoria: 'dinheiro',
    metaValor: 3500,
    valorArrecadado: 3500,
    dataInicio: '2026-09-01',
    dataFim: '2026-10-12',
    status: 'encerrada',
    vagasVoluntarios: 0,
    imagemUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=300&fit=crop'
  },
  {
    id: 10,
    titulo: 'Reforço Escolar Voluntário',
    descricao: 'Aulas de reforço de matemática e português para alunos do ensino fundamental.',
    categoria: 'voluntariado',
    metaValor: 1500,
    valorArrecadado: 350,
    dataInicio: '2026-08-15',
    dataFim: '2026-12-10',
    status: 'ativa',
    vagasVoluntarios: 5,
    imagemUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop'
  }
];

const doadores = [
  { id: 1, nome: 'Maria Souza', email: 'maria.souza@email.com', telefone: '(47) 99999-1111' },
  { id: 2, nome: 'João Pereira', email: 'joao.pereira@email.com', telefone: '(47) 98888-2222' },
  { id: 3, nome: 'Carla Mendes', email: 'carla.mendes@email.com', telefone: '(47) 99123-4567' },
  { id: 4, nome: 'Rafael Oliveira', email: 'rafael.oliveira@email.com', telefone: '(47) 98234-5678' },
  { id: 5, nome: 'Fernanda Costa', email: 'fernanda.costa@email.com', telefone: '(47) 99345-6789' },
  { id: 6, nome: 'Lucas Martins', email: 'lucas.martins@email.com', telefone: '(47) 98456-7890' },
  { id: 7, nome: 'Patrícia Almeida', email: 'patricia.almeida@email.com', telefone: '(47) 99567-8901' },
  { id: 8, nome: 'Bruno Ferreira', email: 'bruno.ferreira@email.com', telefone: '(47) 98678-9012' },
  { id: 9, nome: 'Juliana Rocha', email: 'juliana.rocha@email.com', telefone: '(47) 99789-0123' },
  { id: 10, nome: 'Diego Carvalho', email: 'diego.carvalho@email.com', telefone: '(47) 98890-1234' },
  { id: 11, nome: 'Camila Ribeiro', email: 'camila.ribeiro@email.com', telefone: '(47) 99901-2345' },
  { id: 12, nome: 'Thiago Gomes', email: 'thiago.gomes@email.com', telefone: '(47) 98012-3456' },
  { id: 13, nome: 'Beatriz Santos', email: 'beatriz.santos@email.com', telefone: '(47) 99111-2233' },
  { id: 14, nome: 'Eduardo Barbosa', email: 'eduardo.barbosa@email.com', telefone: '(47) 98222-3344' },
  { id: 15, nome: 'Mercado Bom Preço', email: 'contato@bompreco.com.br', telefone: '(47) 3433-5566' }
];

const doacoes = [
  // Campanha 1 - Agasalho Solidário (dinheiro: 1600)
  { id: 1, campanhaId: 1, doadorId: 1, tipo: 'dinheiro', valor: 150, descricao: null, data: '2026-05-10' },
  { id: 2, campanhaId: 1, doadorId: 3, tipo: 'dinheiro', valor: 300, descricao: null, data: '2026-05-18' },
  { id: 3, campanhaId: 1, doadorId: 5, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-06-03' },
  { id: 4, campanhaId: 1, doadorId: 7, tipo: 'dinheiro', valor: 250, descricao: null, data: '2026-06-21' },
  { id: 5, campanhaId: 1, doadorId: 9, tipo: 'dinheiro', valor: 400, descricao: null, data: '2026-07-08' },
  { id: 6, campanhaId: 1, doadorId: 2, tipo: 'item', valor: 0, descricao: '20 cobertores', data: '2026-05-25' },
  { id: 7, campanhaId: 1, doadorId: 11, tipo: 'item', valor: 0, descricao: '35 casacos infantis', data: '2026-06-14' },

  // Campanha 2 - Cesta Básica para Todos (dinheiro: 7000)
  { id: 8, campanhaId: 2, doadorId: 15, tipo: 'dinheiro', valor: 2000, descricao: null, data: '2026-03-05' },
  { id: 9, campanhaId: 2, doadorId: 4, tipo: 'dinheiro', valor: 1000, descricao: null, data: '2026-03-20' },
  { id: 10, campanhaId: 2, doadorId: 6, tipo: 'dinheiro', valor: 1500, descricao: null, data: '2026-04-11' },
  { id: 11, campanhaId: 2, doadorId: 8, tipo: 'dinheiro', valor: 800, descricao: null, data: '2026-05-02' },
  { id: 12, campanhaId: 2, doadorId: 10, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-07-15' },
  { id: 13, campanhaId: 2, doadorId: 12, tipo: 'dinheiro', valor: 1200, descricao: null, data: '2026-09-09' },
  { id: 14, campanhaId: 2, doadorId: 2, tipo: 'item', valor: 0, descricao: '10 kg de arroz', data: '2026-06-02' },
  { id: 15, campanhaId: 2, doadorId: 15, tipo: 'item', valor: 0, descricao: '20 kg de feijão', data: '2026-08-19' },

  // Campanha 3 - Reforma da Sede Comunitária (dinheiro: 3000)
  { id: 16, campanhaId: 3, doadorId: 14, tipo: 'dinheiro', valor: 1000, descricao: null, data: '2026-01-12' },
  { id: 17, campanhaId: 3, doadorId: 13, tipo: 'dinheiro', valor: 750, descricao: null, data: '2026-01-20' },
  { id: 18, campanhaId: 3, doadorId: 1, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-02-01' },
  { id: 19, campanhaId: 3, doadorId: 6, tipo: 'dinheiro', valor: 750, descricao: null, data: '2026-02-15' },
  { id: 20, campanhaId: 3, doadorId: 8, tipo: 'item', valor: 0, descricao: '20 litros de tinta branca', data: '2026-01-28' },

  // Campanha 4 - Natal Sem Fome (dinheiro: 1150)
  { id: 21, campanhaId: 4, doadorId: 3, tipo: 'dinheiro', valor: 300, descricao: null, data: '2026-10-16' },
  { id: 22, campanhaId: 4, doadorId: 9, tipo: 'dinheiro', valor: 200, descricao: null, data: '2026-10-19' },
  { id: 23, campanhaId: 4, doadorId: 12, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-10-22' },
  { id: 24, campanhaId: 4, doadorId: 5, tipo: 'dinheiro', valor: 150, descricao: null, data: '2026-10-25' },
  { id: 25, campanhaId: 4, doadorId: 15, tipo: 'item', valor: 0, descricao: '30 panetones', data: '2026-10-24' },

  // Campanha 5 - Material Escolar 2027 (dinheiro: 1700)
  { id: 26, campanhaId: 5, doadorId: 4, tipo: 'dinheiro', valor: 250, descricao: null, data: '2026-10-03' },
  { id: 27, campanhaId: 5, doadorId: 7, tipo: 'dinheiro', valor: 400, descricao: null, data: '2026-10-07' },
  { id: 28, campanhaId: 5, doadorId: 10, tipo: 'dinheiro', valor: 600, descricao: null, data: '2026-10-12' },
  { id: 29, campanhaId: 5, doadorId: 13, tipo: 'dinheiro', valor: 100, descricao: null, data: '2026-10-18' },
  { id: 30, campanhaId: 5, doadorId: 1, tipo: 'dinheiro', valor: 350, descricao: null, data: '2026-10-23' },
  { id: 31, campanhaId: 5, doadorId: 11, tipo: 'item', valor: 0, descricao: '50 cadernos', data: '2026-10-20' },

  // Campanha 6 - Abrigo Patinhas Felizes (dinheiro: 3000)
  { id: 32, campanhaId: 6, doadorId: 2, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-08-05' },
  { id: 33, campanhaId: 6, doadorId: 11, tipo: 'dinheiro', valor: 300, descricao: null, data: '2026-08-22' },
  { id: 34, campanhaId: 6, doadorId: 14, tipo: 'dinheiro', valor: 1200, descricao: null, data: '2026-09-10' },
  { id: 35, campanhaId: 6, doadorId: 9, tipo: 'dinheiro', valor: 200, descricao: null, data: '2026-09-28' },
  { id: 36, campanhaId: 6, doadorId: 5, tipo: 'dinheiro', valor: 800, descricao: null, data: '2026-10-14' },
  { id: 37, campanhaId: 6, doadorId: 3, tipo: 'item', valor: 0, descricao: '5 sacos de ração de 15 kg', data: '2026-09-15' },

  // Campanha 7 - SOS Enchentes Vale do Itajaí (dinheiro: 18000)
  { id: 38, campanhaId: 7, doadorId: 15, tipo: 'dinheiro', valor: 5000, descricao: null, data: '2026-06-11' },
  { id: 39, campanhaId: 7, doadorId: 14, tipo: 'dinheiro', valor: 3000, descricao: null, data: '2026-06-12' },
  { id: 40, campanhaId: 7, doadorId: 6, tipo: 'dinheiro', valor: 2500, descricao: null, data: '2026-06-15' },
  { id: 41, campanhaId: 7, doadorId: 12, tipo: 'dinheiro', valor: 4000, descricao: null, data: '2026-06-20' },
  { id: 42, campanhaId: 7, doadorId: 4, tipo: 'dinheiro', valor: 1500, descricao: null, data: '2026-07-02' },
  { id: 43, campanhaId: 7, doadorId: 8, tipo: 'dinheiro', valor: 2000, descricao: null, data: '2026-07-18' },
  { id: 44, campanhaId: 7, doadorId: 7, tipo: 'item', valor: 0, descricao: '200 litros de água mineral', data: '2026-06-13' },
  { id: 45, campanhaId: 7, doadorId: 10, tipo: 'item', valor: 0, descricao: '15 colchões de solteiro', data: '2026-06-17' },

  // Campanha 8 - Horta Comunitária Vila Nova (dinheiro: 450)
  { id: 46, campanhaId: 8, doadorId: 13, tipo: 'dinheiro', valor: 150, descricao: null, data: '2026-09-04' },
  { id: 47, campanhaId: 8, doadorId: 2, tipo: 'dinheiro', valor: 200, descricao: null, data: '2026-09-21' },
  { id: 48, campanhaId: 8, doadorId: 9, tipo: 'dinheiro', valor: 100, descricao: null, data: '2026-10-09' },
  { id: 49, campanhaId: 8, doadorId: 6, tipo: 'item', valor: 0, descricao: '100 mudas de hortaliças', data: '2026-09-12' },

  // Campanha 9 - Dia das Crianças Solidário (dinheiro: 3500)
  { id: 50, campanhaId: 9, doadorId: 1, tipo: 'dinheiro', valor: 500, descricao: null, data: '2026-09-03' },
  { id: 51, campanhaId: 9, doadorId: 4, tipo: 'dinheiro', valor: 800, descricao: null, data: '2026-09-10' },
  { id: 52, campanhaId: 9, doadorId: 11, tipo: 'dinheiro', valor: 300, descricao: null, data: '2026-09-17' },
  { id: 53, campanhaId: 9, doadorId: 15, tipo: 'dinheiro', valor: 1000, descricao: null, data: '2026-09-24' },
  { id: 54, campanhaId: 9, doadorId: 7, tipo: 'dinheiro', valor: 700, descricao: null, data: '2026-10-01' },
  { id: 55, campanhaId: 9, doadorId: 10, tipo: 'dinheiro', valor: 200, descricao: null, data: '2026-10-08' },
  { id: 56, campanhaId: 9, doadorId: 5, tipo: 'item', valor: 0, descricao: '40 brinquedos novos', data: '2026-09-29' },

  // Campanha 10 - Reforço Escolar Voluntário (dinheiro: 350)
  { id: 57, campanhaId: 10, doadorId: 8, tipo: 'dinheiro', valor: 100, descricao: null, data: '2026-08-20' },
  { id: 58, campanhaId: 10, doadorId: 3, tipo: 'dinheiro', valor: 250, descricao: null, data: '2026-09-15' },
  { id: 59, campanhaId: 10, doadorId: 12, tipo: 'item', valor: 0, descricao: '30 livros paradidáticos', data: '2026-09-02' }
];

const voluntarios = [
  { id: 1, campanhaId: 2, nome: 'Ana Lima', email: 'ana.lima@email.com', telefone: '(47) 97777-3333', disponibilidade: 'sabado' },
  { id: 2, campanhaId: 2, nome: 'Gabriel Nunes', email: 'gabriel.nunes@email.com', telefone: '(47) 97111-0001', disponibilidade: 'domingo' },
  { id: 3, campanhaId: 2, nome: 'Larissa Teixeira', email: 'larissa.teixeira@email.com', telefone: '(47) 97111-0002', disponibilidade: 'quarta' },
  { id: 4, campanhaId: 1, nome: 'Marcos Vieira', email: 'marcos.vieira@email.com', telefone: '(47) 97111-0003', disponibilidade: 'sabado' },
  { id: 5, campanhaId: 1, nome: 'Renata Moraes', email: 'renata.moraes@email.com', telefone: '(47) 97111-0004', disponibilidade: 'sexta' },
  { id: 6, campanhaId: 3, nome: 'Pedro Henrique Silva', email: 'pedro.silva@email.com', telefone: '(47) 97111-0005', disponibilidade: 'sabado' },
  { id: 7, campanhaId: 3, nome: 'Vanessa Duarte', email: 'vanessa.duarte@email.com', telefone: '(47) 97111-0006', disponibilidade: 'domingo' },
  { id: 8, campanhaId: 3, nome: 'Rodrigo Pires', email: 'rodrigo.pires@email.com', telefone: '(47) 97111-0007', disponibilidade: 'sabado' },
  { id: 9, campanhaId: 4, nome: 'Isabela Freitas', email: 'isabela.freitas@email.com', telefone: '(47) 97111-0008', disponibilidade: 'terca' },
  { id: 10, campanhaId: 4, nome: 'Felipe Cardoso', email: 'felipe.cardoso@email.com', telefone: '(47) 97111-0009', disponibilidade: 'quinta' },
  { id: 11, campanhaId: 5, nome: 'Aline Monteiro', email: 'aline.monteiro@email.com', telefone: '(47) 97111-0010', disponibilidade: 'segunda' },
  { id: 12, campanhaId: 6, nome: 'Gustavo Lopes', email: 'gustavo.lopes@email.com', telefone: '(47) 97111-0011', disponibilidade: 'sabado' },
  { id: 13, campanhaId: 6, nome: 'Mariana Azevedo', email: 'mariana.azevedo@email.com', telefone: '(47) 97111-0012', disponibilidade: 'domingo' },
  { id: 14, campanhaId: 7, nome: 'Leonardo Castro', email: 'leonardo.castro@email.com', telefone: '(47) 97111-0013', disponibilidade: 'segunda' },
  { id: 15, campanhaId: 7, nome: 'Tatiane Ramos', email: 'tatiane.ramos@email.com', telefone: '(47) 97111-0014', disponibilidade: 'quarta' },
  { id: 16, campanhaId: 7, nome: 'Vinícius Araújo', email: 'vinicius.araujo@email.com', telefone: '(47) 97111-0015', disponibilidade: 'sexta' },
  { id: 17, campanhaId: 8, nome: 'Sofia Batista', email: 'sofia.batista@email.com', telefone: '(47) 97111-0016', disponibilidade: 'sabado' },
  { id: 18, campanhaId: 8, nome: 'André Correia', email: 'andre.correia@email.com', telefone: '(47) 97111-0017', disponibilidade: 'terca' },
  { id: 19, campanhaId: 8, nome: 'Letícia Farias', email: 'leticia.farias@email.com', telefone: '(47) 97111-0018', disponibilidade: 'quinta' },
  { id: 20, campanhaId: 9, nome: 'Caio Mendonça', email: 'caio.mendonca@email.com', telefone: '(47) 97111-0019', disponibilidade: 'domingo' },
  { id: 21, campanhaId: 9, nome: 'Bianca Rezende', email: 'bianca.rezende@email.com', telefone: '(47) 97111-0020', disponibilidade: 'sabado' },
  { id: 22, campanhaId: 10, nome: 'Helena Prado', email: 'helena.prado@email.com', telefone: '(47) 97111-0021', disponibilidade: 'segunda' },
  { id: 23, campanhaId: 10, nome: 'Matheus Cunha', email: 'matheus.cunha@email.com', telefone: '(47) 97111-0022', disponibilidade: 'quarta' },
  { id: 24, campanhaId: 10, nome: 'Paula Siqueira', email: 'paula.siqueira@email.com', telefone: '(47) 97111-0023', disponibilidade: 'sexta' }
];

export { campanhas, doadores, doacoes, voluntarios };
