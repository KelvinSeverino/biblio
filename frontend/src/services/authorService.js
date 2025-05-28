import apiService from "./apiService";

async function getAuthors() {    
    try {
        const response = await apiService.get("/autores");  
        return response.data;
    } catch (e) {
        throw e; // Lanca o erro para ser tratado no apiService
    }
}

async function getById(id) {    
    try {
        const response = await apiService.get(`/autores/${id}`);   
        return response.data;
    } catch (e) {
        throw e; 
    }
}

async function storeAuthor(authorFields) {
    try {
        const response = await apiService.post("/autores", authorFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function updateAuthor(id, authorFields) {
    try {
        const response = await apiService.put(`/autores/${id}`, authorFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function destroyAuthor(id) {
    try {
        const response = await apiService.delete(`/autores/${id}`);
        return response.data;
    } catch (e) {
        throw e;
    }
}

export {
    getAuthors,
    getById,
    storeAuthor,
    updateAuthor,
    destroyAuthor,
};