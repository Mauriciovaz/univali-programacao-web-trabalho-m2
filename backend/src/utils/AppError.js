// Erros personalizados para throws que serão tratados no middleware
class AppError extends Error {
    constructor(message, statusCode = 400, detalhes = null) {
        super(message);
        this.statusCode = statusCode;
        this.detalhes = detalhes;
    }
}

export default AppError;