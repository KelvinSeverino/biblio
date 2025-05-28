import apiService from "./apiService";

async function getBooks() {    
    try {
        const response = await apiService.get("/livros");  
        return response.data;
    } catch (e) {
        throw e; // Lanca o erro para ser tratado no apiService
    }
}

async function getById(id) {    
    try {
        const response = await apiService.get(`/livros/${id}`);   
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function storeBook(bookFields) {
    try {
        const response = await apiService.post("/livros", bookFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function updateBook(id, bookFields) {
    try {
        const response = await apiService.put(`/livros/${id}`, bookFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function destroyBook(id) {
    try {
        const response = await apiService.delete(`/livros/${id}`);
        return response.data;
    } catch (e) {
        throw e;
    }
}

export {
    getBooks,
    getById,
    storeBook,
    updateBook,
    destroyBook,
};