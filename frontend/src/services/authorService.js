import axios from "axios";

const authorsAPI = axios.create({baseURL: "http://localhost:8080/api/autores"})

async function getAuthors() {    
    try {
        const response = await authorsAPI.get("")  
        return response.data
    } catch (e) {
        console.log("something Wrong");
        return;
    }
}

async function getById(id) {    
    try {
        const response = await authorsAPI.get(`/${id}`)   
        return response.data
    } catch (e) {
        console.log("something Wrong");
    }
}

async function storeAuthor(authorFields) {
    try {
        const response = await authorsAPI.post('', authorFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function updateAuthor(id, authorFields) {
    try {
        const response = await authorsAPI.put(`/${id}`, authorFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function destroyAuthor(id) {
    await authorsAPI.delete(`/${id}`);    
}

export {
    getAuthors,
    getById,
    storeAuthor,
    updateAuthor,
    destroyAuthor,
}