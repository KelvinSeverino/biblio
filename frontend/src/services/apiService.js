import axios from "axios";

const apiService = axios.create({
    baseURL: "http://localhost:8080/api",
});

apiService.interceptors.response.use(
    response => response,
    error => {
        let errorMessage = "Ocorreu um erro inesperado. Por favor, tente novamente.";

        // Verifica se o erro veio da API (tem um `response`)
        if (error.response) {
            if (error.response.data?.message) {
                // Se a API enviou uma mensagem de erro, usamos ela
                errorMessage = error.response.data.message;
            } else {
                // Caso contrário, usamos mensagens padrões baseadas no status HTTP
                switch (error.response.status) {
                    case 400:
                        errorMessage = "Dados inválidos. Verifique as informações e tente novamente.";
                        break;
                    case 404:
                        errorMessage = "Recurso não encontrado.";
                        break;
                    case 422:
                        errorMessage = "Erro de validação. Verifique os dados enviados.";
                        break;
                    case 500:
                        errorMessage = "Erro interno no servidor. Tente novamente mais tarde.";
                        break;
                    default:
                        errorMessage = `Erro: ${error.response.status}. Tente novamente mais tarde.`;
                }
            }
        } else if (error.request) {
            // Se `error.request` existir, significa que a API está offline ou inacessível
            errorMessage = "Falha na comunicação com o servidor. Verifique sua conexão ou tente mais tarde.";
        }

        return Promise.reject({ error: errorMessage });
    }
);

export default apiService;
