import axios from "axios";

const booksAPI = axios.create({baseURL: "http://localhost:8080/api/livros"})

async function getBooks() {    
    try {
        const response = await booksAPI.get("")  
        return response.data
    } catch (e) {
        console.log("something Wrong");
        return;
    }
}

async function getById(id) {    
    try {
        const response = await booksAPI.get(`/${id}`)   
        return response.data
    } catch (e) {
        console.log("something Wrong");
    }
}

async function storeBook(bookFields) {
    try {
        const response = await booksAPI.post('', bookFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function updateBook(id, bookFields) {
    try {
        const response = await booksAPI.put(`/${id}`, bookFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function destroyBook(id) {
    await booksAPI.delete(`/${id}`)
    
}

export {
    getBooks,
    getById,
    storeBook,
    updateBook,
    destroyBook,
}