import axios from "axios";

const subjectsAPI = axios.create({baseURL: "http://localhost:8080/api/assuntos"})

async function getSubjects() {    
    try {
        const response = await subjectsAPI.get("")  
        return response.data
    } catch (e) {
        console.log("something Wrong");
        return;
    }
}

async function getById(id) {    
    try {
        const response = await subjectsAPI.get(`/${id}`)   
        return response.data
    } catch (e) {
        console.log("something Wrong");
    }
}

async function storeSubject(subjectFields) {
    try {
        const response = await subjectsAPI.post('/', subjectFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function updateSubject(id, subjectFields) {
    try {
        const response = await subjectsAPI.put(`/${id}`, subjectFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function destroySubject(id) {
    await subjectsAPI.delete(`/${id}`)
    
}

export {
    getSubjects,
    getById,
    storeSubject,
    updateSubject,
    destroySubject,
}