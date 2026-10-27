import { Router } from "express";
import * as campanhaController from '../controllers/campanhaController.js';
import * as doacaoController from '../controllers/doacaoController.js';
import * as voluntarioController from '../controllers/voluntarioController.js';

const router = Router();

// Campanhas
router.get('/campanhas', campanhaController.listar);
router.get('/campanhas/:id', campanhaController.buscaPorId);
router.post('/campanhas', campanhaController.criar);

// Doações
router.get('/doacoes', doacaoController.listar);
router.post('/doacoes', doacaoController.criar);

// Voluntários
router.get('/voluntarios', voluntarioController.listar);
router.post('/voluntarios', voluntarioController.criar);

export default router;