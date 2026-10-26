import AppError from "../utils/AppError.js";

// Rota não encontrada
function notFound(req, res) {
    res.status(404).json({ erro: `Rota ${req.method} ${req.originalUrl} não encontrada` });
}

// Middleware para erros
function errorHandler(err, req, res, next) {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({ erro: err.message, detalhes: err.detalhes });
    }

    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({ erro: 'JSON inválido no corpo da requisição' });
    }
    console.error(err);
    res.status(500).json({ erro: 'Erro interno do servidor' });
}

export { notFound, errorHandler };