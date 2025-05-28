import apiService from "./apiService";

async function getSubjects() {    
    try {
        const response = await apiService.get("/assuntos");  
        return response.data;
    } catch (e) {
        throw e; // Lanca o erro para ser tratado no apiService
    }
}

async function getById(id) {    
    try {
        const response = await apiService.get(`/assuntos/${id}`);   
        return response.data;
    } catch (e) {
        throw e; 
    }
}

async function storeSubject(subjectFields) {
    try {
        const response = await apiService.post("/assuntos", subjectFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function updateSubject(id, subjectFields) {
    try {
        const response = await apiService.put(`/assuntos/${id}`, subjectFields);
        return response.data;
    } catch (e) {
        throw e;
    }
}

async function destroySubject(id) {
    try {
        const response = await apiService.delete(`/assuntos/${id}`);
        return response.data;
    } catch (e) {
        throw e;
    }
}

export {
    getSubjects,
    getById,
    storeSubject,
    updateSubject,
    destroySubject,
};